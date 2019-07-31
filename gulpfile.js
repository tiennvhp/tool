/*===============GLOBAL DECLARE=================*/
var gulp = require('gulp')
var sass = require('gulp-sass')  
var browserSync = require('browser-sync')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css');
var run = require('gulp-run-command').default
var glob = require('glob')
var fs = require('fs')
var exec = require('child_process').exec
var walk = require('walk')

const targetFolder = './projects/storefrontstyles/';
const allDataFolders = ['./projects'] 
const allDataFoldersMustWatch = ['./projects/**/*.html', './projects/**/*.json'] 
/*===============GLOBAL DECLARE=================*/

gulp.task('init', function () {
  require('./gulp-helpers/init-project.js').initProject()
})

gulp.task('color', () =>  {  
  const colorFileContent = fs.readFileSync(targetFolder + 'scss/base/colors.scss', 'utf8')
  const enteredColor = process.argv[4];

  if (/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(enteredColor)) {
    if (colorFileContent.length === 0) {
      fs.writeFileSync(targetFolder + 'cuong-sass/base/colors.scss', `$color-1: ${enteredColor};`, 'utf8')
      console.log(`$color-1: ${enteredColor}`)
    } else {
      let max = colorFileContent.match(/color-(\d*)/gm).map(item => item.split('-')[1])[0]
      colorFileContent.match(/color-(\d*)/gm).map(item => item.split('-')[1]).forEach(item => {
        if (parseInt(item) > max) {
          max = parseInt(item)
        }
      })

      var realEnteredColor = `$color-${parseInt(max)+1}: ${enteredColor};`

      var finalContent = colorFileContent + `
    ${realEnteredColor}
      `

      if (colorFileContent.indexOf(enteredColor) > 0) {
        console.log('Có rồi tên nó là: ', colorFileContent.substring(colorFileContent.indexOf(enteredColor) - 20, colorFileContent.indexOf(enteredColor)) )
      } else {
        console.log(realEnteredColor)
        fs.writeFileSync(targetFolder + 'cuong-sass/base/colors.scss', finalContent, 'utf8')
      }
    }
  } else {
    console.log('invalid hex code')
  }
})

gulp.task('browser-sync',() => {  
    browserSync.init(["css/*.css", "js/*.js", "*.html",], {
        server: {
            baseDir: "./"
        },
        port: 8080
    })
})

gulp.task('git', run(['git add .','git commit -m "auto commit. Dont ask why !"', 'git pull origin master', 'git push origin master']))

gulp.task('update-style',  function () {
    let  walkers = []
    let files   = []
    let allFilesContent = ''
    let keepCheckin = null

    allDataFolders.forEach(folder => {
      walkers.push(walk.walk(folder, { followLinks: false })) 
    })

    walkers.forEach(walker => {
      walker.on('file', (root, stat, next) => {
          files.push(`${root}/${stat.name}`)
          next()
      })
      walker.on('end', () => {
          files.forEach(file => {
            if (file.indexOf('.html') > -1 || file.indexOf('.json') > -1) {
              allFilesContent = allFilesContent + fs.readFileSync(file, 'utf8')
              require('./gulp-helpers/process-big-data.js').processBigData(allFilesContent)
            }
          })
      })
    })
})

gulp.task('sass',() => {  
    gulp.src(targetFolder + 'cuong-sass/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest(targetFolder + "static"))
})

gulp.task('default', ['browser-sync', 'init', 'sass', 'update-style'],() => {  
    gulp.watch(targetFolder + "cuong-sass/**/*.scss", ['sass'])
    gulp.watch(allDataFoldersMustWatch, ['update-style'])
})
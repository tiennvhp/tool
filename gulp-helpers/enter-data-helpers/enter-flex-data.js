var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterFlexData = (flexs) => {
  var content = '';
  if (flexs.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(flexs).forEach(function(flex){
      if ((flex.split('-')[1].length === 2) && (flex.split('-')[1].indexOf('x') > -1)) {
        content = content + `
.${flex} { flex: ${flex.split('-')[1].charAt(flex.split('-')[1].length - 1)};}
`
      }
      if (flex.split('-')[1] === 'wrap_start') {
        content = content + `
.${flex} { flex-wrap: wrap; justify-content: flex-start;}
`
      }
      if (flex.split('-')[1] === 'wrap_end') {
        content = content + `
.${flex} { flex-wrap: wrap; justify-content: flex-end;}
`
      }
      if (flex.split('-')[1] === 'wrap_center') {
        content = content + `
.${flex} { flex-wrap: wrap; justify-content: center;}
`
      }
      if (flex.split('-')[1] === 'wrap_between') {
        content = content + `
.${flex} { flex-wrap: wrap; justify-content: space-between;}
`
      }
      if (flex.split('-')[1] === 'row') {
        content = content + `
.${flex} { display: flex; flex-direction: row;}
`
      }
      if (flex.split('-')[1] === 'col') {
        content = content + `
.${flex} { display: flex; flex-direction: column;}
`
      }

      if (flex.split('-')[1] === 'start_baseline') {
        content = content + `
.${flex} { justify-content: start; align-items: baseline;}
`
      }

      if (flex.split('-')[1] === 'start_center') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: center;}
`
      }

      if (flex.split('-')[1] === 'start_single_end') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: end;}
`
      }

      if (flex.split('-')[1] === 'start_end') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: flex-end;}
`
      }

      if (flex.split('-')[1] === 'start_start') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: flex-start;}
`
      }

      if (flex.split('-')[1] === 'start_normal') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: normal;}
`
      }

      if (flex.split('-')[1] === 'start_self_end') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: self-end;}
`
      }

      if (flex.split('-')[1] === 'start_self_start') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: self-start;}
`
      }

      if (flex.split('-')[1] === 'start_single_start') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: start;}
`
      }
      
      if (flex.split('-')[1] === 'start_stretch') {
        content = content + `
.${flex} { justify-content: flex-start; align-items: stretch;}
`
      }    
        
      if (flex.split('-')[1] === 'end_baseline') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: baseline;}
`
      }   

      if (flex.split('-')[1] === 'end_center') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: center;}
`
      }

      if (flex.split('-')[1] === 'end_single_end') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: end;}
`
      }

      if (flex.split('-')[1] === 'end_end') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: flex-end;}
`
      }

      if (flex.split('-')[1] === 'end_start') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: flex-start;}
`
      }

      if (flex.split('-')[1] === 'end_normal') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: normal;}
`
      }

      if (flex.split('-')[1] === 'end_self_end') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: self-end;}
`
      }
      
      if (flex.split('-')[1] === 'end_self_end') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: self-end;}
`
      }      

      if (flex.split('-')[1] === 'end_self_start') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: self-start;}
`
      }

      if (flex.split('-')[1] === 'end_single_start') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: end-start;}
`
      }
      
      if (flex.split('-')[1] === 'end_stretch') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: stretch;}
`
      }  
          
      if (flex.split('-')[1] === 'end_unset') {
        content = content + `
.${flex} { justify-content: flex-end; align-items: unset;}
`
      }          

      if (flex.split('-')[1] === 'center_baseline') {
        content = content + `
.${flex} { justify-content: center; align-items: baseline;}
`
      }
      
      if (flex.split('-')[1] === 'center_center') {
        content = content + `
.${flex} { justify-content: center; align-items: center;}
`
      }  
          
      if (flex.split('-')[1] === 'center_single_end') {
        content = content + `
.${flex} { justify-content: center; align-items: end;}
`
      }          

      if (flex.split('-')[1] === 'center_end') {
        content = content + `
.${flex} { justify-content: center; align-items: flex-end;}
`
      }

      if (flex.split('-')[1] === 'center_start') {
        content = content + `
.${flex} { justify-content: center; align-items: flex-start;}
`
      }

      if (flex.split('-')[1] === 'center_normal') {
        content = content + `
.${flex} { justify-content: center; align-items: normal;}
`
      }

      if (flex.split('-')[1] === 'center_self_end') {
        content = content + `
.${flex} { justify-content: center; align-items: self-end;}
`
      }

      if (flex.split('-')[1] === 'center_self_start') {
        content = content + `
.${flex} { justify-content: center; align-items: self-start;}
`
      }
      
      if (flex.split('-')[1] === 'center_single_start') {
        content = content + `
.${flex} { justify-content: center; align-items: start;}
`
      }     
       
      if (flex.split('-')[1] === 'center_stretch') {
        content = content + `
.${flex} { justify-content: center; align-items: stretch;}
`
      }   

      if (flex.split('-')[1] === 'center_unset') {
        content = content + `
.${flex} { justify-content: center; align-items: unset;}
`
      }

      if (flex.split('-')[1] === 'single_end_baseline') {
        content = content + `
.${flex} { justify-content: end; align-items: baseline;}
`
      }


      if (flex.split('-')[1] === 'single_end_center') {
        content = content + `
.${flex} { justify-content: end; align-items: center;}
`
      }

      if (flex.split('-')[1] === 'single_end_single_end') {
        content = content + `
.${flex} { justify-content: end; align-items: end;}
`
      }

      if (flex.split('-')[1] === 'single_end_end') {
        content = content + `
.${flex} { justify-content: end; align-items: flex-end;}
`
      }

      if (flex.split('-')[1] === 'single_end_start') {
        content = content + `
.${flex} { justify-content: end; align-items: flex-start;}
`
      }
      
      if (flex.split('-')[1] === 'single_end_normal') {
        content = content + `
.${flex} { justify-content: end; align-items: normal;}
`
      }     
       
      if (flex.split('-')[1] === 'single_end_self_end') {
        content = content + `
.${flex} { justify-content: end; align-items: self-end;}
`
      }
      if (flex.split('-')[1] === 'single_end_self_start') {
        content = content + `
.${flex} { justify-content: end; align-items: self-start;}
`
      }

      if (flex.split('-')[1] === 'single_end_single_start') {
        content = content + `
.${flex} { justify-content: end; align-items: start;}
`
      }
      
      if (flex.split('-')[1] === 'single_end_stretch') {
        content = content + `
.${flex} { justify-content: end; align-items: stretch;}
`
      }    
        
      if (flex.split('-')[1] === 'single_end_unset') {
        content = content + `
.${flex} { justify-content: end; align-items: unset;}
`
      } 
             
      if (flex.split('-')[1] === 'single_left_baseline') {
        content = content + `
.${flex} { justify-content: left; align-items: baseline;}
`
      }   
                
      if (flex.split('-')[1] === 'single_left_center') {
        content = content + `
.${cursor} { justify-content: left; align-items: center;}
`
      }    
                  
      if (flex.split('-')[1] === 'single_left_single_end') {
        content = content + `
.${flex} { justify-content: left; align-items: end;}
`
      }    

      if (flex.split('-')[1] === 'single_left_end') {
        content = content + `
.${flex} { justify-content: left; align-items: flex-end;}
`
      }

      if (flex.split('-')[1] === 'single_left_start') {
        content = content + `
.${flex} { justify-content: left; align-items: flex-start;}
`
      }
      
      if (flex.split('-')[1] === 'single_left_normal') {
        content = content + `
.${flex} { justify-content: left; align-items: normal;}
`
      }  
          
      if (flex.split('-')[1] === 'single_left_self_end') {
        content = content + `
.${flex} { justify-content: left; align-items: self-end;}
`
      }

      if (flex.split('-')[1] === 'single_left_self_start') {
        content = content + `
.${flex} { justify-content: left; align-items: self-start;}
`
      }   
         
      if (flex.split('-')[1] === 'single_left_single_start') {
        content = content + `
.${flex} { justify-content: left; align-items: start;}
`
      }

      if (flex.split('-')[1] === 'single_left_stretch') {
        content = content + `
.${flex} { justify-content: left; align-items: stretch;}
`
      }

      
      if (flex.split('-')[1] === 'single_left_unset') {
        content = content + `
.${flex} { justify-content: left; align-items: unset;}
`
      }  

      if (flex.split('-')[1] === 'single_right_baseline') {
        content = content + `
.${flex} { justify-content: right; align-items: baseline;}
`
      }
      
      if (flex.split('-')[1] === 'single_right_center') {
        content = content + `
.${flex} { justify-content: right; align-items: center;}
`
      }   
         
      if (flex.split('-')[1] === 'single_right_single_end') {
        content = content + `
.${flex} { justify-content: right; align-items: end;}
`
      }     

      if (flex.split('-')[1] === 'single_right_end') {
        content = content + `
.${flex} { justify-content: right; align-items: flex-end;}
`
      }

      if (flex.split('-')[1] === 'single_right_start') {
        content = content + `
.${flex} { justify-content: right; align-items: flex-start;}
`
      }

      if (flex.split('-')[1] === 'single_right_normal') {
        content = content + `
.${flex} { justify-content: right; align-items: normal;}
`
      }
      
      if (flex.split('-')[1] === 'single_right_self_end') {
        content = content + `
.${flex} { justify-content: right; align-items: self-end;}
`
      }

      if (flex.split('-')[1] === 'single_right_self_start') {
        content = content + `
.${flex} { justify-content: right; align-items: self-start;}
`
      }
      
      if (flex.split('-')[1] === 'single_right_single_start') {
        content = content + `
.${flex} { justify-content: right; align-items: start;}
`
      }    
        
      if (flex.split('-')[1] === 'single_right_stretch') {
        content = content + `
.${flex} { justify-content: right; align-items: stretch;}
`
      }  
            
      if (flex.split('-')[1] === 'single_right_unset') {
        content = content + `
.${flex} { justify-content: right; align-items: unset;}
`
      }    
              
      if (flex.split('-')[1] === 'around_baseline') {
        content = content + `
.${flex} { justify-content: space-around; align-items: baseline;}
`
      }

      if (flex.split('-')[1] === 'around_center') {
        content = content + `
.${flex} { justify-content: space-around; align-items: center;}
`
      }

      if (flex.split('-')[1] === 'around_single_end') {
        content = content + `
.${flex} { justify-content: space-around; align-items: end;}
`
      }

      if (flex.split('-')[1] === 'around_end') {
        content = content + `
.${flex} { justify-content: space-around; align-items: flex-end;}
`
      }
      
      if (flex.split('-')[1] === 'around_start') {
        content = content + `
.${flex} { justify-content: space-around; align-items: flex-start;}
`
      }    
        
      if (flex.split('-')[1] === 'around_normal') {
        content = content + `
.${flex} { justify-content: space-around; align-items: normal;}
`
      }     

      if (flex.split('-')[1] === 'around_self_end') {
        content = content + `
.${flex} { justify-content: space-around; align-items: self-end;}
`
      }
      
      if (flex.split('-')[1] === 'around_self_start') {
        content = content + `
.${flex} { justify-content: space-around; align-items: self-start;}
`
      }   
         
      if (flex.split('-')[1] === 'around_single_start') {
        content = content + `
.${flex} { justify-content: space-around; align-items: start;}
`
      }
      
      if (flex.split('-')[1] === 'around_stretch') {
        content = content + `
.${flex} { justify-content: space-around; align-items: stretch;}
`
      }  
          
      if (flex.split('-')[1] === 'around_unset') {
        content = content + `
.${flex} { justify-content: space-around; align-items: unset;}
`
      }   
             
      if (flex.split('-')[1] === 'between_baseline') {
        content = content + `
.${flex} { justify-content: space-between; align-items: baseline;}
`
      }    
               
      if (flex.split('-')[1] === 'between_center') {
        content = content + `
.${flex} { justify-content: space-between; align-items: center;}
`
      }     
                
      if (flex.split('-')[1] === 'between_single_end') {
        content = content + `
.${flex} { justify-content: space-between; align-items: end;}
`
      }   
                   
      if (flex.split('-')[1] === 'between_end') {
        content = content + `
.${flex} { justify-content: space-between; align-items: flex-end;}
`
      }   
                      
      if (flex.split('-')[1] === 'between_start') {
        content = content + `
.${flex} { justify-content: space-between; align-items: flex-start;}
`
      }    
                        
      if (flex.split('-')[1] === 'between_normal') {
        content = content + `
.${flex} { justify-content: space-between; align-items: normal;}
`
      }

      if (flex.split('-')[1] === 'between_self_end') {
        content = content + `
.${flex} { justify-content: space-between; align-items: self-end;}
`
      }
      
      if (flex.split('-')[1] === 'between_self_start') {
        content = content + `
.${flex} { justify-content: space-between; align-items: self-start;}
`
      }      
      
      if (flex.split('-')[1] === 'between_single_start') {
        content = content + `
.${flex} { justify-content: space-between; align-items: start;}
`
      }
            
      if (flex.split('-')[1] === 'between_stretch') {
        content = content + `
.${flex} { justify-content: space-between; align-items: stretch;}
`
      }           
       
      if (flex.split('-')[1] === 'between_unset') {
        content = content + `
.${flex} { justify-content: space-between; align-items: unset;}
`
      } 
            
      if (flex.split('-')[1] === 'evenly_baseline') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: baseline;}
`
      }  
                
      if (flex.split('-')[1] === 'evenly_center') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: center;}
`
      }  
                   
      if (flex.split('-')[1] === 'evenly_single_end') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: end;}
`
      }   
                      
      if (flex.split('-')[1] === 'evenly_end') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: flex-end;}
`
      }
                      
      if (flex.split('-')[1] === 'evenly_start') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: flex-start;}
`
      } 
                      
      if (flex.split('-')[1] === 'evenly_normal') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: normal;}
`
      }   

      if (flex.split('-')[1] === 'evenly_self_end') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: self-end;}
`
      }

      if (flex.split('-')[1] === 'evenly_self_start') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: self-start;}
`
      }
      
      if (flex.split('-')[1] === 'evenly_single_start') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: start;}
`
      } 
           
      if (flex.split('-')[1] === 'evenly_stretch') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: stretch;}
`
      }          
       
      if (flex.split('-')[1] === 'evenly_unset') {
        content = content + `
.${flex} { justify-content: space-evenly; align-items: unset;}
`
      }   
          
      if (flex.split('-')[1] === 'single_start_baseline') {
        content = content + `
.${flex} { justify-content: start; align-items: baseline;}
`
      }      
          
      if (flex.split('-')[1] === 'single_start_center') {
        content = content + `
.${flex} { justify-content: start; align-items: center;}
`
      }  
              
      if (flex.split('-')[1] === 'single_start_single_end') {
        content = content + `
.${flex} { justify-content: start; align-items: end;}
`
      }  

      if (flex.split('-')[1] === 'single_start_end') {
        content = content + `
.${flex} { justify-content: start; align-items: flex-end;}
`
      }
      
      if (flex.split('-')[1] === 'single_start_start') {
        content = content + `
.${flex} { justify-content: start; align-items: flex-start;}
`
      }      
      
      if (flex.split('-')[1] === 'single_start_normal') {
        content = content + `
.${flex} { justify-content: start; align-items: normal;}
`
      }     
       
      if (flex.split('-')[1] === 'single_start_self_end') {
        content = content + `
.${flex} { justify-content: start; align-items: self-end;}
`
      }      
       
      if (flex.split('-')[1] === 'single_start_self_start') {
        content = content + `
.${flex} { justify-content: start; align-items: self-start;}
`
      }  
           
      if (flex.split('-')[1] === 'single_start_single_start') {
        content = content + `
.${flex} { justify-content: start; align-items: start;}
`
      }   
              
      if (flex.split('-')[1] === 'single_start_stretch') {
        content = content + `
.${flex} { justify-content: start; align-items: stretch;}
`
      }   
                 
      if (flex.split('-')[1] === 'single_start_unset') {
        content = content + `
.${flex} { justify-content: start; align-items: unset;}
`
      }    
                   
      if (flex.split('-')[1] === 'stretch_baseline') {
        content = content + `
.${flex} { justify-content: stretch; align-items: baseline;}
`
      } 
                        
      if (flex.split('-')[1] === 'stretch_center') {
        content = content + `
.${flex} { justify-content: stretch; align-items: center;}
`
      }       

      if (flex.split('-')[1] === 'stretch_single_end') {
        content = content + `
.${flex} { justify-content: stretch; align-items: end;}
`
      }

      if (flex.split('-')[1] === 'stretch_end') {
        content = content + `
.${flex} { justify-content: stretch; align-items: flex-end;}
`
      }
      
      if (flex.split('-')[1] === 'stretch_start') {
        content = content + `
.${flex} { justify-content: stretch; align-items: flex-start;}
`
      }
            
      if (flex.split('-')[1] === 'stretch_normal') {
        content = content + `
.${flex} { justify-content: stretch; align-items: normal;}
`
      }    

      if (flex.split('-')[1] === 'stretch_self_end') {
        content = content + `
.${flex} { justify-content: stretch; align-items: self-end;}
`
      }
      
      if (flex.split('-')[1] === 'stretch_self_start') {
        content = content + `
.${flex} { justify-content: stretch; align-items: self-start;}
`
      } 
           
      if (flex.split('-')[1] === 'stretch_single_start') {
        content = content + `
.${flex} { justify-content: stretch; align-items: start;}
`
      }  
               
      if (flex.split('-')[1] === 'stretch_stretch') {
        content = content + `
.${flex} { justify-content: stretch; align-items: stretch;}
`
      } 
                    
      if (flex.split('-')[1] === 'stretch_unset') {
        content = content + `
.${flex} { justify-content: stretch; align-items: unset;}
`
      }
      
      if (flex.split('-')[1] === 'unset_baseline') {
        content = content + `
.${flex} { justify-content: unset; align-items: baseline;}
`
      }  
          
      if (flex.split('-')[1] === 'unset_center') {
        content = content + `
.${flex} { justify-content: unset; align-items: center;}
`
      }    
            
      if (flex.split('-')[1] === 'unset_single_end') {
        content = content + `
.${flex} { justify-content: unset; align-items: end;}
`
      }    
              
      if (flex.split('-')[1] === 'unset_end') {
        content = content + `
.${flex} { justify-content: unset; align-items: flex-end;}
`
      }  
                  
      if (flex.split('-')[1] === 'unset_start') {
        content = content + `
.${flex} { justify-content: unset; align-items: flex-start;}
`
      }  
                      
      if (flex.split('-')[1] === 'unset_normal') {
        content = content + `
.${flex} { justify-content: unset; align-items: normal;}
`
      }
                      
      if (flex.split('-')[1] === 'unset_self_end') {
        content = content + `
.${flex} { justify-content: unset; align-items: self-end;}
`
      }         
                   
      if (flex.split('-')[1] === 'unset_self_start') {
        content = content + `
.${flex} { justify-content: unset; align-items: self-start;}
`
      }    
                     
      if (flex.split('-')[1] === 'unset_single_start') {
        content = content + `
.${flex} { justify-content: unset; align-items: start;}
`
      }    
                       
      if (flex.split('-')[1] === 'unset_stretch') {
        content = content + `
.${flex} { justify-content: unset; align-items: stretch;}
`
      }  
                           
      if (flex.split('-')[1] === 'unset_unset') {
        content = content + `
.${flex} { justify-content: unset; align-items: unset;}
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/flex.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/flex.scss', '', 'utf8')
  }
};

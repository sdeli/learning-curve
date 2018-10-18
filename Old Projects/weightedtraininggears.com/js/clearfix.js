 
 document.addEventListener("DOMContentLoaded", function(){
        var relativPosElemSection=document.querySelectorAll("#carousel-section")[0],
            relativPosElem=document.querySelectorAll(".sav")[0],
            absolutePosImgContainer=document.querySelectorAll("#hero-img-container")[0];

        checkElementDisplay();
        window.addEventListener("resize", function(){checkElementDisplay()});

/*-----------------------------------------------------------------------------------------------------------------------------*/
        function checkElementDisplay(){

          var display=window.getComputedStyle(absolutePosImgContainer, null).getPropertyValue("display");
          var relativPosElemSectionHeight=window.getComputedStyle(relativPosElemSection, null).getPropertyValue("height");

          if(display==="none"){
                    var height=clearfixcarousel(relativPosElem);

                    if(parseInt(relativPosElemSectionHeight)!==height){
                        relativPosElemSection.style.height=height+"px";
                    }else {console.log("zsiir");}

          }else{
                    var height=clearfixcarousel(absolutePosImgContainer);
                    if(parseInt(relativPosElemSectionHeight)!==height){
                          relativPosElemSection.style.height=height+"px";
                      }else {console.log("fain");}
          }

        }
/*-----------------------------------------------------------------------------------------------------------------------------*/
        function clearfixcarousel(Elem){
          var relativPosElemTop=window.getComputedStyle(Elem, null).getPropertyValue("top"),
              relativPosElemHeight=window.getComputedStyle(Elem, null).getPropertyValue("height"),
              relativPosElemSectionHeight=parseInt(relativPosElemHeight)+parseInt(relativPosElemTop);
             
              return relativPosElemSectionHeight;
        }
/*-----------------------------------------------------------------------------------------------------------------------------*/
        

      }) /*DOMContentLoaded*/
$(window).ready(function(){
      
      var heroImg = $("#latest-article-hero-img");
      var containerOfVidi=$(".vidi-bejegyzes");
      var vidiOuterDivs = $(".vid-outer");
      var vidiDescriptionDivs = $(".vidi-description");
      var marginBottom = 18;
      $(vidiOuterDivs).css({"marginBottom":marginBottom+"px"});

      haltUntilImgOnload(heroImg, 3000);

      function callfunctions(){

          if(window.innerWidth>=768){
            overAnd768Px(vidiOuterDivs,heroImg,marginBottom,containerOfVidi, vidiDescriptionDivs);
          }else{

              var maxWidth=vidiOuterDivs.css("max-width");
              if(maxWidth!=="200px"){
                vidiOuterDivs.css({"max-width":"200px"})
              }
      
              var parameters = {
                Width:200,
                Height:vidiOuterDivs.css("height"),
                containerOfVidi:containerOfVidi,
                vidiDescriptionDivs:vidiDescriptionDivs
             }
            
             callManageDescriptions(parameters);
         }//else

      } //callOverAnd768Px()-------------------------------------------------------------------------

   function overAnd768Px(vidiOuterDivs, heroImg, marginBottom, containerOfVidi, vidiDescriptionDivs){

      setheighthOfVids(vidiOuterDivs,heroImg,marginBottom,containerOfVidi, vidiDescriptionDivs);

      function setheighthOfVids(vidiOuterDivs,heroImg,marginBottom,containerOfVidi, vidiDescriptionDivs){
       
         
           var heroImgHeight=parseInt(heroImg.css("height"));
           var vidiOuterDivsOriginalHeight=parseInt(vidiOuterDivs.css("height"));
           var vidiOuterDivsHeight=(heroImgHeight-(2*marginBottom))/vidiOuterDivs.length;
         
           $(vidiOuterDivs).css({"height":vidiOuterDivsHeight+"px"});
      
           var parameters = {
              vidiOuterDivs:vidiOuterDivs,
              vidiOuterDivsOriginalHeight:vidiOuterDivsOriginalHeight,
              vidiOuterDivsHeight:vidiOuterDivsHeight,
              containerOfVidi:containerOfVidi,
              vidiDescriptionDivs:vidiDescriptionDivs
           }

          setWidthOfVids(parameters);

      }//setheighthOfVids()---------------------------------------------------------------------------------


      function setWidthOfVids(pr){

            if(pr.vidiOuterDivs.css("max-width")!=="none"){
                  pr.vidiOuterDivs.css({"max-width":"none"});
            }

            var vidiOuterDivsWidth=parseInt(pr.vidiOuterDivs.css("width"));
            var NewWidth=(pr.vidiOuterDivsHeight/pr.vidiOuterDivsOriginalHeight)*vidiOuterDivsWidth;
            $(pr.vidiOuterDivs).css({"width":NewWidth+"px"});


            var parameters = {
                Width:NewWidth,
                Height:pr.vidiOuterDivsHeight,
                containerOfVidi:pr.containerOfVidi,
                vidiDescriptionDivs:pr.vidiDescriptionDivs
             }
 
          callManageDescriptions(parameters);

      }//setLeftOfDescription()--------------------------------------------------------------------------------------------


  };//overAnd768Px END------------------------------------------------------------------------------------
     function callManageDescriptions(pr){

       for(var i=0; i<pr.containerOfVidi.length; i++){  
                manageDescriptions(pr.Width, pr.Height, pr.containerOfVidi[i],pr.vidiDescriptionDivs[i])
        }//for

        function manageDescriptions(Width, Height, container, vidiDescriptionDivs){
  
            var contPaddingLeft=parseInt($(container).css("padding-left"));
            var contPaddingRight=parseInt($(container).css("padding-right"));
            var descriptionLeft=Width+7+contPaddingLeft+"px";
            var descriptionWidth=parseInt($(container).css("width"))-Width-contPaddingLeft-contPaddingRight-7+"px";
            $(vidiDescriptionDivs).css({"left":descriptionLeft,"width":descriptionWidth,"height":Height+"px"})
        }
     }//callManageDescriptions(pr)-----------------------------------------------------------------------------------------
        
     function haltUntilImgOnload(heroImg,halt){
        var i=0;
        var img=parseInt( heroImg.css("height") );
       

        loop();
        function loop(){
            img=parseInt( heroImg.css("height") );
          
          if ( img<200 ){
              i++;

              setTimeout(function(){ loop() }, 3000);
           }else{
            callfunctions();
            $(window).resize(function(){ callfunctions();});
           }
        }
    }
//END-------------------------------------------------------------------------------------------------------------------
});

/*
  Davidtol kerdez:
   if statment length
   paramter passing should pass globals or each var

*/

(function(){

  // DEFINE GLOBAL VARIABLES ======================
  var transitionLength = "150";
  var targetElemClass = "site-header__hide-menu-content";
  var classDisplayBlock = "site-header--display-block";
  var classVisible = "site-header--visible";
  var atSmall = "768";
  // DEFINE GLOBAL VARIABLES END ==================


  // CALL FUNCTIONS =======================
  document.addEventListener("DOMContentLoaded", function() {

     showAndHide(targetElemClass, classDisplayBlock, classVisible, transitionLength);

  });

  window.addEventListener("resize", function(){

      showAndHide(targetElemClass, classDisplayBlock, classVisible, transitionLength);

  });
  // CALL FUNCTIONS END =======================


  // DECLAIRE FUNCTIONS ========================
  function showAndHide(targetElemClass, classDisplayBlock, classVisible, transitionLength){
      
      var targetElem = document.getElementsByClassName(targetElemClass)[0];

      actionOverAtSmall();
      actionUnderAtSmall();

      function actionOverAtSmall(){
                      
        if ( window.innerWidth >= atSmall && isBlock() === false ) {

          targetElem.classList.add(classDisplayBlock);

          setTimeout(function(){

            targetElem.classList.add(classVisible);

          },10)

        } // if

        if ( window.innerWidth >= atSmall && isBlock() && isVisible() === false ) {
          
            targetElem.classList.add(classVisible);

        } // if
      
      } // END actionOverAtSmall

      function actionUnderAtSmall(){
        
        removeClassVisible();

        function removeClassVisible(){
          
          if( window.innerWidth < atSmall && isBlock() && isVisible() ){

             targetElem.classList.remove(classVisible);

             removeDispBlock();

          } // if

        } // END remiveVisible
          
        function removeDispBlock(){
          
          var condition = 'window.innerWidth >= 768'
          var timer

          if ( window.innerWidth < atSmall && isBlock() && isVisible() === false ) {

              var timeout = setTimeout(function(){

                targetElem.classList.remove(classDisplayBlock);

              }, transitionLength ) //setTimeout

              timer="on";

              clearMyTimeout(timeout, timer, transitionLength, condition);

          } // if
        
        } // END removeDispBlock
              
      } // END actionUnderAtSmall

      function isVisible(){

       var targetElem = document.getElementsByClassName(targetElemClass)[0]; 
       var ifClassVisibleOn = targetElem.classList.contains(classVisible);
       return ifClassVisibleOn;

      } // END isVisible()

      function isBlock(){

        var targetElem = document.getElementsByClassName(targetElemClass)[0];
        var ifClassBlockOn = targetElem.classList.contains(classDisplayBlock);
        return ifClassBlockOn;

      } // END isBlock()
        
  } // END showAndHide(targetElemClass, classDisplayBlock, transitionLength)

  function clearMyTimeout(timeout, timer, transitionLength, condition){

    if( eval(condition) ){

        clearTimeout(timeout);
        timer = "off"

        return timer;

    } // if

    if ( transitionLength > 0 ) {
      
      transitionLength = transitionLength - 10;
      setTimeout(function(){ clearMyTimeout(timeout, timer, transitionLength, condition) }, 10)

    } else {

      return timer;

    }// else 

  } // END clearMyTimeout
  // DECLAIRE FUNCTIONS END========================

})(); //anonyus function END
$(document).ready(function(){ 
 resizeDescription();
  window.addEventListener("resize", resizeDescription)

});

function resizeDescription(){
 
  var latestArticleRow=$("#latest-article .row img")[0];
  var descritpion=$("#latest-article-description")[0];
  var theCSSpropWidth = parseInt(window.getComputedStyle(latestArticleRow, null).getPropertyValue("width"));
  var theCSSpropPadding = parseInt(window.getComputedStyle($("#latest-article .row .col-xs-12")[1], null).getPropertyValue("padding-left"));

  if(descritpion.hasAttribute("descritpionLeftProp")===false){

    var descrStyleTag=document.createElement("style");
    descrStyleTag.rel="stylesheet";
    descrStyleTag.id="descritpionLeftProp";
    descrStyleTag.innerHTML=".descritpionLeftProp{width:"+theCSSpropWidth+"px; left:"+theCSSpropPadding+"px}"
    $("head")[0].appendChild(descrStyleTag);
    descritpion.classList.add("descritpionLeftProp");
  }

  descritpion.style.width=theCSSpropWidth+"px";
  descritpion.style.left=theCSSpropPadding+"px";

}

$(document).ready(function(){function t(){var t=parseInt(window.getComputedStyle(a,null).getPropertyValue("right"));window.innerWidth<=500&&t>=1&&r<=0&&e()}function e(){function t(){parseInt(window.getComputedStyle(a,null).getPropertyValue("right"))<=-273&&a.removeAttribute("data-animation")}r=10;var e=parseInt(window.getComputedStyle(a,null).getPropertyValue("right")),n=parseInt(window.getComputedStyle(a,null).getPropertyValue("transition")),l=parseInt(window.getComputedStyle(i,null).getPropertyValue("left"));if(e>=1&&!1===a.hasAttribute("data-animation")){a.setAttribute("data-animation","in"),"all 0.5s 0s"!==n&&(a.style.transition="all 0.5s 0s");var o=l+273;i.style.left=o+"px",a.style.right="-273px"}setTimeout(function(){t()},500)}function n(){function t(){parseInt(window.getComputedStyle(a,null).getPropertyValue("right"))<=1&&a.removeAttribute("data-animation")}r=10;var e=parseInt(window.getComputedStyle(a,null).getPropertyValue("right")),n=parseInt(window.getComputedStyle(a,null).getPropertyValue("transition")),l=parseInt(window.getComputedStyle(i,null).getPropertyValue("left"))-273;e<=-273&&!1===a.hasAttribute("data-animation")&&(a.setAttribute("data-animation","in"),"all 0.5s 0s"!==n&&(a.style.transition="all 0.5s 0s"),i.style.left=l+"px",a.style.right="1px"),setTimeout(function(){t()},500)}var i=$("#sidebar-controller")[0],a=$("#flyinout")[0];a.style.right="1px";var r=0;i.addEventListener("click",function(){e()}),i.addEventListener("click",function(){n()}),setTimeout(function(){t(),window.addEventListener("resize",t())},500)});
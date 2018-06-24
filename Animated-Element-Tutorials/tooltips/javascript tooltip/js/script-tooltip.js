var toolTipObj = {

	tooltipTags : document.querySelectorAll('[title="tooltip"]'),

	lastTooltip : 0,

	eventTargetTitle: 0,

	addEventListener : function() {

		var tooltipTags=document.querySelectorAll('[title="tooltip"]');
			for (var i=0; i<tooltipTags.length; i++){
				tooltipTags[i].addEventListener("mouseover",toolTipObj.show);
				tooltipTags[i].addEventListener("mouseout",toolTipObj.hide);
			}

	},

	show : function(event){

		var toolTip=document.createElement("p");
		eventTargetTitle=event.target.title;
		event.target.title="";
		toolTip.className="tooltipClass";
		toolTip.innerHTML=eventTargetTitle;
		console.log(event.target.title+"meg");
		lastTooltip=event.target.appendChild(toolTip);
	},

	hide : function(event){
		lastTooltip.parentNode.title=eventTargetTitle;
		/*lastTooltip.parentNode.removeChild(lastTooltip);*/
	}
}

window.addEventListener("load",toolTipObj.addEventListener );

/*
tegyunk event lestenert mindenre ami title tages
get element by attribute
title="tooltip"
show, hicde

show:
var=query select
create element
add class
var=query select.append element
add class style in css
*/

import $ from 'jquery';
import waypoints from '../../../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class RevealOnScroll {

	constructor(els, offset){
		this.itemsToReveal = els;
		this.offcetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
		console.log("run2");
		
	}

	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
		console.log("15");
	}

	createWaypoints(){
		var that = this
		console.log("_reveal-on-scroll.js");
		console.log("20");
		this.itemsToReveal.each(function(index, item){
			console.log("22");
			new Waypoint({
				element: item,
				handler: function(){
					$(item).addClass("reveal-item--is-visible");
				},
				offset: that.offcetPercentage
			}) //Waypont

		}) //each
	} // createWayponts

} // class RevealOnScroll

export default RevealOnScroll;
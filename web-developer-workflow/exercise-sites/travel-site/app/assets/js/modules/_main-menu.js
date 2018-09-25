import $ from 'jquery';
import waypoints from '../../../../../../node_modules/waypoints/lib/noframework.waypoints.js';
import smoothScroll from "jquery-smooth-scroll";

export class MainMenu {

	constructor(){
		this.menuIcon = $('.site-header__menu-icon');
		this.menuIconMiddleBar = $('.site-header__menu-icon__bar-middle');
		this.menuContent = $('.site-header__menu-content');
		this.menuContentLi = $('.site-header__menu-content li');
		this.menuContentA = $('.site-header__menu-content a');
		this.siteheader = $('.site-header');
		this.events();
		
		
	}

	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu(){

		this.menuIcon.toggleClass("site-header__menu-icon--clicked");
		this.menuIconMiddleBar.toggleClass("menu-icon__middle-bar-clicked");
		this.menuContent.toggleClass("site-header__menu-content--open");
		this.menuContentLi.toggleClass("primary-nav__li--open");
		this.menuContentA.toggleClass("primary-nav__a--open");
		this.siteheader.toggleClass("site-header--background");
		this.Waypoint();

	}
}

export class FixedHeader {

	constructor(){

		this.siteheader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.pageSectionToScrollto = $("[data-matching-link]");
		this.headerLinks = $(".primary-nav a");
		this.lazyImgs = $(".lazyload");
		this.createHeaderWaypont();
		this.createPageSectionWaypoints();
		this.addSmoothScroll();
		this.refreshwaypoints();
		console.log("run 1");
	} // constructor()

	refreshwaypoints(){
		this.lazyImgs.on('load', function(){
			console.log("runs");
			Waypoint.refreshAll();
		})
	}


	addSmoothScroll(){

		this.headerLinks.smoothScroll({
			speed : 400
		})

	}

	createHeaderWaypont(){

		var that = this;
		console.log("createHeaderWaypont");
		new Waypoint({
			element: that.headerTriggerElement[0],
			handler: function(direction){

				if (direction === "down") {
					that.siteheader.addClass("site-header--dark");

				} else {
					that.siteheader.removeClass("site-header--dark");
				}
			}
		}) //Waypont
	} // createHeaderWaypont()

	createPageSectionWaypoints(){
		this.pageSectionToScrollto.each(function( index, item ){

			new Waypoint({
				element: item,
				handler: function(direction){

					var matchingLink = item.getAttribute("data-matching-link");
					var currentActive = $(".is-current-link");

					if(currentActive[0] != undefined && direction === "down"){

						currentActive.removeClass("is-current-link")
						
					} else if (matchingLink === "#no-link" && currentActive[0] != undefined && direction === "down") {

						currentActive.removeClass("is-current-link")

					} // else if

					$(matchingLink).addClass("is-current-link");

				},
				offset : "25%"

			}) // Waypoint

			new Waypoint({
				element: item,
				handler: function(direction){

					var matchingLink = item.getAttribute("data-matching-link");
					var currentActive = $(".is-current-link");

					if(currentActive[0] != undefined && direction === "up"){

						currentActive.removeClass("is-current-link")

					} else if (matchingLink === "#no-link" && currentActive[0] != undefined && direction === "up" ) {

						currentActive.removeClass("is-current-link")

					}

					$(matchingLink).addClass("is-current-link");

				}, //handler
				offset : "-80%"

			}) // Waypoint - up


		}) //each

	} // createPageSectionWaypoints()

} //export class FixedHeader
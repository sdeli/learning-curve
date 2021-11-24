/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {

	"use strict";
	var container, button, menu, links, i, len;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		var touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode, i;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( container ) );
} )();

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function() {

	"use strict";
	var isIe = /(trident|msie)/i.test( navigator.userAgent );

	if ( isIe && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();

(function ($) {
    "use strict";
	var screenHeight = $(document).height();
	var screenWidth = $(window).width();
	var $rtl = false;

    $(".compare").append("<span class='tooltip'>Compare</span>");

    $(".woocommerce-product-details__short-description").append("<span class='delivery'><a href='#'>Buyer Protection Guaranteed</a></span>");

    $(".compare").on('click',function(){
        
        jQuery(document).bind("ajaxSuccess", function(){
            $('.compare').removeClass('added');
            $('.compare').empty();
            $(".compare").append("<span class='tooltip'>Compare</span>");
        });
    });
    $(".site-header .header-search-wrap").on('click',function(){
        $(".header-search-wrap").addClass("popup_content");
        $(".search-form").addClass("visible");
        $(".close_popup").css("display","block");
        $(".site-header .search-field").focus();

    });
    $(".site-header .text-search").on('click',function(){
        $(".header-search-wrap").addClass("popup_content");
        $(".search-form").addClass("visible");
        $(".close_popup").css("display","block");
        $(".site-header .search-field").focus();

    });
    $(".close_popup").on('click',function(){
        $(".header-search-wrap").removeClass("popup_content");
        $(".search-form").removeClass("visible");
        $(".close_popup").css("display","none");

    });




    if (jQuery("html").attr("dir") == 'rtl'){
		$rtl = true;
	}
    var midStackEl = $('.site-header.mid-stack.fixed .bot-section-wrap');
    if(midStackEl.length > 0) {
        var sticky = new Waypoint.Sticky({
            element: $('.site-header.mid-stack.fixed .bot-section-wrap')[0],
        })
    }

    var midInlineEl = $('.site-header.mid-inline.fixed .middle-section-wrap');
    if(midInlineEl.length > 0) {
        var sticky = new Waypoint.Sticky({
            element: $('.site-header.mid-inline.fixed .middle-section-wrap')[0],
        })
    }

    var leftInlineEl = $('.site-header.left-inline.fixed .middle-section-wrap');
    if(leftInlineEl.length > 0) {
        var sticky = new Waypoint.Sticky({
            element: $('.site-header.left-inline.fixed .middle-section-wrap')[0],
        })
    }

    var leftStackEl = $('.site-header.left-stack.fixed .bot-section-wrap');
    if(leftStackEl.length > 0) {
        var sticky = new Waypoint.Sticky({
            element: $('.site-header.left-stack.fixed .bot-section-wrap')[0],
        })
    }

    $('.widget_nav_menu .menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();

        $(this).next('.sub-menu').first().slideToggle('fast');
    });

	function menuPosition() {
		if ($('#main-menu ul.sub-menu').length) {
			$('#main-menu ul.sub-menu').each(function () {
				$(this).removeAttr("style");
				var $containerWidth = $("body").outerWidth();
				var $menuwidth = $(this).outerWidth();
				var $parentleft = $(this).parent().offset().left;
				var $parentright = $(this).parent().offset().left + $(this).parent().outerWidth();
				if ($(this).parents('.sub-menu').length) {
					var $menuleft = $parentleft - $(this).outerWidth();
					var $menuright = $parentright + $(this).outerWidth();
					if ($rtl){
						if ($menuleft < 0) {
							if ($menuright > $containerWidth) {
								if ($parentleft > ($containerWidth - $parentright)) {
									$(this).css({
										'width': $parentleft + 'px',
										'left': 'auto',
										'right': '100%'
									});
								} else {
									$(this).css({
										'width': ($containerWidth - $parentright) + 'px',
										'left': '100%',
										'right': 'auto'
									});
								}
							} else {
								$(this).css({
									'left': '100%',
									'right': 'auto'
								});
							}
						} else {
							$(this).css({
								'left': '-100%'
							});
						}
					} else {
						if ($menuright > $containerWidth) {
							if ($menuleft < 0) {
								if ($parentleft > ($containerWidth - $parentright)) {
									$(this).css({
										'width': $parentleft + 'px',
										'left': 'auto',
										'right': '100%'
									});
								} else {
									$(this).css({
										'width': ($containerWidth - $parentright) + 'px',
										'left': '100%',
										'right': 'auto'
									});
								}
							} else {
								$(this).offset({
									'left': $menuleft
								});
							}
						} else {
							$(this).css({
								'left': '100%'
							});
						}
					}
				} else {
					var $menuleft = $parentright - $(this).outerWidth();
					var $menuright = $parentleft + $(this).outerWidth();
					if ($rtl){
						if ($menuleft < 0) {
							if ($menuright > $containerWidth) {
								$(this).offset({
									'left': ($containerWidth - $menuwidth) / 2
								});
							} else {
								$(this).offset({
									'left': $parentleft
								});
							}
						} else {
							$(this).offset({
								'left': $menuleft
							});
						}
					} else {
						if ($menuright > $containerWidth) {
							if ($menuleft < 0) {
								$(this).offset({
									'left': ($containerWidth - $menuwidth) / 2
								});
							} else {
								$(this).offset({
									'left': $menuleft
								});
							}
						} else {
							$(this).offset({
								'left': $parentleft
							});
						}
					}
				}
			});
		}
	}
	function menuShow() {
		if ($rtl){
			$('.main-navigation .menu-main-menu-wrap').animate({'right': '0'}, 250);
		} else {
			$('.main-navigation .menu-main-menu-wrap').animate({'left': '0'}, 250);
		}
		$('.main-navigation .menu-main-menu-wrap').css('display', 'block');
	}
	function menuHide() {
		if ($rtl){
			$('.main-navigation .menu-main-menu-wrap').animate({'right': '-100%'}, 250);
		} else {
			$('.main-navigation .menu-main-menu-wrap').animate({'left': '-100%'}, 250);
		}
	}
    function menuResponsive(){
		var screenHeight = jQuery(document).height();
		var screenWidth = jQuery(window).width();
        if ($('.navigation_right .menu-sub-menu-container').length){
            if (screenWidth < nb.menu_resp) {
                $('.navigation_right #menu-sub-menu').appendTo('.navigation_left .menu-main-menu-container');
                $('.main-navigation').appendTo('.navigation_right');
            } else {
                $('.main-navigation').appendTo('.navigation_left');
                $('.navigation_left #menu-sub-menu').appendTo('.navigation_right .menu-sub-menu-container');
            }
        } else {
            if($('.main-menu-section .nb-header-sub-menu').length){
                $('.main-menu-section .nb-header-sub-menu > li').appendTo('.nb-navbar');
                $('.main-menu-section .sub-navigation').remove();
            }
        }
        if (screenWidth < nb.menu_resp) {
            $('.site-header').addClass('header-mobile');
            $('.main-navigation').addClass('main-mobile-navigation');
		} else {
            $('.site-header').removeClass('header-mobile');
            $('.main-navigation').removeClass('main-mobile-navigation');
			$('.main-navigation .menu-main-menu-wrap').removeAttr('style');
			$('.main-navigation .menu-item-has-children').removeClass('open');
			menuPosition();
		}
    }
    menuResponsive();
        $('.main-navigation .mobile-toggle-button').on('click', function () {
            menuShow();
        });
        $('.main-navigation .icon-cancel-circle').on('click', function () {
            menuHide();
        });
        $('.main-navigation .menu-item-has-children').on('click', function () {
            $(this).toggleClass('open');
        });
        $('.main-navigation .menu-item-has-children > *').on('click', function (e) {
            e.stopPropagation();
        });
    jQuery('#mega-menu-primary .mega-menu-item-has-children').on('click', function () {
        jQuery(this).toggleClass('open');
    });
    jQuery('#mega-menu-primary .mega-menu-item-has-children > *').on('click', function (e) {
        e.stopPropagation();
    });

    jQuery(window).on('resize', function () {
        menuResponsive();
	});

    $('.blog .masonry').isotope({
        itemSelector: '.post',
    });

    var d = 0;
    var $numbertype = null;

    var quantityButton = function() {
        $(".quantity-plus, .quantity-minus").mousedown(function () {
            var $el = $(this).closest('.nb-quantity').find('.qty');
            $numbertype = parseInt($el.val());
            d = $(this).is(".quantity-minus") ? -1 : 1;
            $numbertype = $numbertype + d;
            if($numbertype > 0) {
                $el.val($numbertype)
            }

            $( '.woocommerce-cart-form :input[name="update_cart"]' ).prop( 'disabled', false );

        });
    };
    quantityButton();

    jQuery(document.body).on('removed_from_cart updated_cart_totals', function () {
        quantityButton();
    });

    if (jQuery().magnificPopup) {
        $('.featured-gallery').magnificPopup({
            delegate: 'img',
            type: 'image',
            gallery: {
                enabled: true
            },
            callbacks: {
                elementParse: function (item) {
                    item.src = item.el.attr('src');
                }
            }
        });
    }

    var $upsells = $('.upsells .products');
    var $upsellsCells = $upsells.find('.product');

    if ($upsellsCells.length <= nb.upsells_columns) {
        $upsells.addClass('hiding-nav-ui');
    }

    var $related = $('.related .products');
    var $relatedCells = $related.find('.product');

    if ($relatedCells.length <= nb.related_columns) {
        $related.addClass('hiding-nav-ui');
    }

    var $crossSells = $('.cross-sells .products');
    var $crossSellsCells = $crossSells.find('.product');

    if ($crossSellsCells.length <= nb.cross_sells_columns) {
        $crossSells.addClass('hiding-nav-ui');
    }

    if (jQuery().accordion) {
        $('.shop-main.accordion-tabs .wc-tabs').accordion({
            header: ".accordion-title-wrap",
            heightStyle: "content",
        });
    }

    $('.header-cart-wrap').on({
        mouseenter: function () {
            $(this).find('.mini-cart-section').stop().fadeIn('fast');
        },
        mouseleave: function () {
            $(this).find('.mini-cart-section').stop().fadeOut('fast');
        }
    });

    $('.header-account-wrap').on({
        mouseenter: function () {
            $(this).find('.nb-account-dropdown').stop().fadeIn('fast');
        },
        mouseleave: function () {
            $(this).find('.nb-account-dropdown').stop().fadeOut('fast');
        }
    });

    $(document.body).on('added_to_cart', function () {
        $(".cart-notice-wrap").addClass("cart-active").delay(5000).queue(function(next){
            $(this).removeClass("cart-active");
            next();
        });
    });

    $('i[class=icon-cancel-circle-cart-notice]').on('click', function() {
        $(this).closest('.cart-notice-wrap').removeClass('cart-active');
    });

    var $sticky = $('.sticky-wrapper.sticky-sidebar');

    if($sticky.length > 0) {
        $($sticky).stick_in_parent({
            offset_top: 45
        });

        $(window).on('resize', function() {
            $($sticky).trigger('sticky_kit:detach');
        });
    }

    if ($('#back-to-top-button').length) {
        var scrollTrigger = 500; // px
        var backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top-button').addClass('show');
                } else {
                    $('#back-to-top-button').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top-button').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
	if ($('.related .swiper-container').length){
        var slidesm = 2;
        var slidemd = 3;
        if(nb.related_columns==2){
            slidesm = 1;
            slidemd = 2;
        }
		var related = new Swiper('.related .swiper-container', {
			slidesPerView: nb.related_columns,
			pagination: '.swiper-pagination',
			paginationClickable: true,
            breakpoints: {
                991: {
                    slidesPerView: slidemd
                },
                767: {
                    slidesPerView: slidesm
                },
                575: {
                    slidesPerView: 1
                }
            }
		});
	}
	if ($('.upsells .swiper-container').length){
        var slidesm = 2;
        var slidemd = 3;
        if(nb.upsells_columns==2){
            slidesm = 1;
            slidemd = 2;
        }
		var upsells = new Swiper('.upsells .swiper-container', {
			slidesPerView: nb.upsells_columns,
			pagination: '.swiper-pagination',
            paginationClickable: true,
            breakpoints: {
                991: {
                    slidesPerView: slidemd
                },
                767: {
                    slidesPerView: slidesm
                },
                575: {
                    slidesPerView: 1
                }
            }
		});
	}
	if ($('.cross-sells .swiper-container').length){
        var slidemd = 3;
        var slidelg = 4;
        if(nb.cross_sells_columns==3){
            slidemd = 2;
            slidelg = 3
        }
		var crossSells = new Swiper('.cross-sells .swiper-container', {
			slidesPerView: nb.cross_sells_columns,
			pagination: '.swiper-pagination',
            paginationClickable: true,
            breakpoints: {
                1199: {
                    slidesPerView: slidelg
                },
                991: {
                    slidesPerView: slidemd
                },
                767: {
                    slidesPerView: 2
                },
                575: {
                    slidesPerView: 1
                }
            }
		});
	}
	var swiperInit = function() {
        if ($('.featured-gallery').length && $('.thumb-gallery').length){
            var featuredObj = {};

            if(nb.thumb_pos !== 'right-dots') {     
                $('.featured-gallery').each(function( index ) {
                    var id_product = $(this).data('id');

                    featuredObj.nextButton = '.swiper-button-next';
                    featuredObj.prevButton = '.swiper-button-prev';

                    var galleryTop = new Swiper('#product-'+ id_product +' .featured-gallery', featuredObj);

                    var thumbObj = {
                        spaceBetween: 10,
                        centeredSlides: true,
                        slidesPerView: 4,
                        touchRatio: 0.2,
                        slideToClickedSlide: true
                    }

                    if(nb.thumb_pos === 'left-thumb' || nb.thumb_pos === 'inside-thumb') {
                        thumbObj.direction = 'vertical'
                    }

                    var galleryThumbs = new Swiper('#product-'+ id_product +' .thumb-gallery', thumbObj);				
                        galleryTop.params.control = galleryThumbs;
                        galleryThumbs.params.control = galleryTop;
                });
            } else {
                featuredObj.pagination = '.featured-gallery .swiper-pagination';
                featuredObj.paginationClickable = true;

                var galleryTop = new Swiper('.featured-gallery', featuredObj);
            }
        }
    };
    swiperInit();
	
	var isMobile = false;
	var $variation_form = $('.variations_form');
	var $product_variations = $variation_form.data( 'product_variations' );
	$('body').on('click touchstart','li.swatch-item',function(){
		var current = $(this);
		var value = current.attr('option-value');
		var selector_name = current.closest('ul').attr('data-id');
		if($("select#"+selector_name).find('option[value="'+value+'"]').length > 0)
		{
			$(this).closest('ul').children('li').each(function(){
				$(this).removeClass('selected');
				$(this).removeClass('disable');
			});
			if(!$(this).hasClass('selected'))
			{
				current.addClass('selected');
				$("select#"+selector_name).val(value).change();
				$("select#"+selector_name).trigger('change');
				$variation_form.trigger( 'wc_variation_form' );
				$variation_form
					.trigger( 'woocommerce_variation_select_change' )
					.trigger( 'check_variations', [ '', false ] );
			}
		}else{
			current.addClass('disable');
		}
	});

	$variation_form.on('wc_variation_form', function() {
		$( this ).on( 'click', '.reset_variations', function( event ) {
			$(this).parents('.variations').eq(0).find('ul.swatch li').removeClass('selected');
		});
	});
	var $single_variation_wrap = $variation_form.find( '.single_variation_wrap' );
	$single_variation_wrap.on('show_variation', function(event,variation) {
		var $product = $variation_form.closest('.product');
		if(variation.image_link)
		{
			var variation_image = variation.image_link;
			$product.find('.main-image a').attr('href',variation_image);
			$product.find('.main-image a img').attr('src',variation.image_src);
			$product.find('.main-image a img').attr('srcset',variation.image_srcset);
			$product.find('.main-image a img').attr('alt',variation.image_alt);
			$product.find('.main-image a img').attr('title',variation.image_title);
			$product.find('.main-image a img').attr('sizes',variation.image_sizes);
			$product.find('.main-image img').attr('data-large',variation_image);
		}
	});

    if( typeof nb === 'undefined' ) {
        return;
    }

    var qv_modal    = $(document).find( '#yith-quick-view-modal' ),
        qv_overlay  = qv_modal.find( '.yith-quick-view-overlay'),
        qv_content  = qv_modal.find( '#yith-quick-view-content' ),
        qv_close    = qv_modal.find( '#yith-quick-view-close' ),
        qv_wrapper  = qv_modal.find( '.yith-wcqv-wrapper'),
        qv_wrapper_w = qv_wrapper.width(),
        qv_wrapper_h = qv_wrapper.height(),
        center_modal = function() {

            var window_w = $(window).width(),
                window_h = $(window).height(),
                width    = ( ( window_w - 60 ) > qv_wrapper_w ) ? qv_wrapper_w : ( window_w - 60 ),
                height   = ( ( window_h - 120 ) > qv_wrapper_h ) ? qv_wrapper_h : ( window_h - 120 );

            qv_wrapper.css({
                'left' : (( window_w/2 ) - ( width/2 )),
                'top' : (( window_h/2 ) - ( height/2 )),
                'width'     : width + 'px',
                'height'    : height + 'px'
            });
        };


    /*==================
     *MAIN BUTTON OPEN
     ==================*/

    $.fn.yith_quick_view = function() {

        $(document).off( 'click', '.yith-wcqv-button' ).on( 'click', '.yith-wcqv-button', function(e){
            e.preventDefault();

            var t           = $(this),
                product_id  = t.data( 'product_id' );
                
            t.block({
                message: null,
                overlayCSS  : {
                    background: '#fff url(' + nb.loader + ') no-repeat center',
                    opacity   : 0.5,
                    cursor    : 'none'
                }
            });

            t.addClass('loading');

            setTimeout(function() {
                t.removeClass('loading');
            }, 3000);

            if( ! qv_modal.hasClass( 'loading' ) ) {
                qv_modal.addClass('loading')
            }

            // stop loader
            $(document).trigger( 'qv_loading' );
            ajax_call( t, product_id, true );
        });
    };

    /*================
     * MAIN AJAX CALL
     ================*/

    var ajax_call = function( t, product_id, is_blocked ) {

        $.ajax({
            url: nb.ajaxurl,
            data: {
                action: 'yith_load_product_quick_view',
                product_id: product_id
            },
            dataType: 'html',
            type: 'POST',
            success: function (data) {

                qv_content.html(data);

                // quantity fields for WC 2.2
                if (nb.is2_2) {
                    qv_content.find('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');
                }

                // Variation Form
                var form_variation = qv_content.find('.variations_form');

                form_variation.wc_variation_form();
                form_variation.trigger('check_variations');

                if (typeof $.fn.yith_wccl !== 'undefined') {
                    form_variation.yith_wccl();
                }

                // Init prettyPhoto
                if (typeof $.fn.prettyPhoto !== 'undefined') {
                    qv_content.find("a[data-rel^='prettyPhoto'], a.zoom").prettyPhoto({
                        hook: 'data-rel',
                        social_tools: false,
                        theme: 'pp_woocommerce',
                        horizontal_padding: 20,
                        opacity: 0.8,
                        deeplinking: false
                    });
                }

                if (!qv_modal.hasClass('open')) {
                    qv_modal.removeClass('loading').addClass('open');
                    if (is_blocked)
                        t.unblock();
                }

                // stop loader
                $(document).trigger('qv_loader_stop');
                swiperInit();
                quantityButton();
            }
        });
    };

    /*===================
     * CLOSE QUICK VIEW
     ===================*/

    var close_modal_qv = function() {

        // Close box by click overlay
        qv_overlay.on( 'click', function(e){
            close_qv();
        });
        // Close box with esc key
        $(document).keyup(function(e){
            if( e.keyCode === 27 )
                close_qv();
        });
        // Close box by click close button
        qv_close.on( 'click', function(e) {
            e.preventDefault();
            close_qv();
        });

        var close_qv = function() {
            qv_modal.removeClass('open').removeClass('loading');

            setTimeout(function () {
                qv_content.html('');
            }, 1000);
        }
    };

    close_modal_qv();


    center_modal();
    $( window ).on( 'resize', center_modal );

    // START
    $.fn.yith_quick_view();

    $( document ).on( 'yith_infs_adding_elem yith-wcan-ajax-filtered', function(){
        // RESTART
        $.fn.yith_quick_view();
    });

     $('.yith-wcwl-add-to-wishlist').click(function(){
         $(this).find('.tooltip').hide();
    });


})(jQuery);
( function( $ ) {

    "use strict";

    wp.customize( 'nbcore_header_top_bg', function( value ) {
		value.bind( function( newval ) {
			$( '.top-section-wrap' ).css('background-color', newval );
		} );
	} );
    wp.customize( 'nbcore_header_middle_bg', function( value ) {
		value.bind( function( newval ) {
			$( '.middle-section-wrap' ).css('background-color', newval );
		} );
	} );
    wp.customize( 'nbcore_header_bot_bg', function( value ) {
		value.bind( function( newval ) {
			$( '.bot-section-wrap' ).css('background-color', newval );
		} );
	} );

    wp.customize( 'nbcore_header_bot_color', function( value ) {
        value.bind( function( newval ) {
            $( '.bot-section-wrap a, .bot-section-wrap span, .bot-section-wrap i, .bot-section-wrap div' ).css('color', newval );
        } );
    } );
    wp.customize( 'nbcore_header_middle_color', function( value ) {
        value.bind( function( newval ) {
            $( '.middle-section-wrap a, .middle-section-wrap span, .middle-section-wrap i, .middle-section-wrap div' ).css('color', newval );
        } );
    } );
    wp.customize( 'nbcore_header_top_color', function( value ) {
        value.bind( function( newval ) {
            $( '.top-section-wrap a, .top-section-wrap span, .top-section-wrap i, .top-section-wrap div' ).css('color', newval );
        } );
    } );

    wp.customize( 'nbcore_middle_section_padding', function( value ) {
        value.bind( function( newval ) {
            $( '.middle-section-wrap' ).css('padding-top', newval + 'px' );
            $( '.middle-section-wrap' ).css('padding-bottom', newval + 'px' );
        } );
    } );

    wp.customize( 'nbcore_top_section_padding', function( value ) {
        value.bind( function( newval ) {
            $( '.top-section-wrap' ).css('padding-top', newval + 'px' );
            $( '.top-section-wrap' ).css('padding-bottom', newval + 'px' );
        } );
    } );

    wp.customize( 'nbcore_bot_section_padding', function( value ) {
        value.bind( function( newval ) {
            $( '.site-header:not(.mid-stack) .bot-section-wrap' ).css('padding-top', newval + 'px' );
            $( '.site-header:not(.mid-stack) .bot-section-wrap' ).css('padding-bottom', newval + 'px' );
            $( '.site-header.mid-stack .nb-navbar > .menu-item > a' ).css('padding-bottom', newval + 'px' );
            $( '.site-header.mid-stack .nb-navbar > .menu-item > a' ).css('padding-top', newval + 'px' );
        } );
    } );

    wp.customize( 'nbcore_logo_width', function( value ) {
        value.bind( function( newval ) {
            $( '.main-logo' ).css('width', newval );
        } );
    } );

    wp.customize( 'nbcore_blog_width', function( value ) {
        value.bind( function( newval ) {
            $( '.site-content .blog #primary, .site-content .single-blog #primary' ).css('flex-basis', newval + '%' ).css('max-width', newval + '%' );
            $( '.site-content .blog #secondary, .site-content .single-blog #secondary' ).css('flex-basis', (100 - newval) + '%' ).css('max-width', (100 - newval) + '%');
            $('.blog .masonry').isotope('layout');
        } );
    } );

    wp.customize( 'nbcore_page_title_padding', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-page-title-wrap' ).css('padding-top', newval + 'px');
            $( '.nb-page-title-wrap' ).css('padding-bottom', newval + 'px');
        } );
    } );

    wp.customize( 'nbcore_page_title_color', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-page-title-wrap a, .nb-page-title-wrap h1, .nb-page-title-wrap nav' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_shop_content_width', function( value ) {
        value.bind( function( newval ) {
            $( '.archive.woocommerce.wc-has-sidebar .shop-main' ).css('flex-basis', newval + '%' ).css('max-width', newval + '%' );
            $( '.archive.woocommerce.wc-has-sidebar #secondary' ).css('flex-basis', (100 - newval) + '%' ).css('max-width', (100 - newval) + '%');
        } );
    } );

    wp.customize( 'nbcore_pd_details_width', function( value ) {
        value.bind( function( newval ) {
            $( '.single-product.wc-pd-has-sidebar .shop-main' ).css('flex-basis', newval + '%' ).css('max-width', newval + '%' );
            $( '.single-product #secondary' ).css('flex-basis', (100 - newval) + '%' ).css('max-width', (100 - newval) + '%');
        } );
    } );

    wp.customize( 'nbcore_pd_images_width', function( value ) {
        value.bind( function( newval ) {
            window.dispatchEvent(new Event('resize'));
            $( '.single-product-wrap .product-image' ).css('flex-basis', newval + '%' ).css('max-width', newval + '%' );
            $( '.single-product-wrap .entry-summary' ).css('flex-basis', (100 - newval) + '%').css('max-width', (100 - newval) + '%' );
        } );
    } );

    wp.customize( 'nbcore_shop_title', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-page-title h1' ).text(newval);
        } );
    } );

    //TODO fix this
    wp.customize( 'nbcore_primary_color', function( value ) {
        value.bind( function( newval ) {
            $( '.widget .widget-title:before,' +
                '.paging-navigation.pagination-style-2 .current,' +
                '.product .onsale.sale-style-1,' +
                '.woocommerce-pagination.pagination-style-2 span.current,' +
                '.products .product .product-action .add_to_cart_button,' +
                '.products.list-type .product .button,' +
                '.shop-main.right-dots .flickity-page-dots .dot,' +
                '.wc-tabs-wrapper .form-submit input,' +
                '.nb-input-group .search-button button,' +
                '.single-product-wrap .yith-wcwl-add-to-wishlist' ).css('background-color', newval);
            $('.product .product-image .onsale,' +
                '.wc-tabs > li.active,' +
                '.wc-tabs-wrapper .woocommerce-Reviews #review_form_wrapper .comment-respond,' +
                '.product .onsale.sale-style-2 .percent,' +
                '.shop-main.accordion-tabs .accordion-item .accordion-title-wrap.ui-accordion-header-active,' +
                '.widget .tagcloud a,' +
                '.footer-top-section .widget .tagcloud a,' +
                '.footer-bot-section .widget .tagcloud a,' +
                '.cart-notice-wrap .cart-notice' ).css('border-color', newval);
            $( '.product .star-rating:before,' +
                '.product .star-rating span,' +
                '.single-product-wrap .price ins,' +
                '.single-product-wrap .price > span.amount,' +
                '.wc-tabs > li.active a,' +
                '.wc-tabs .ui-accordion-header-active a,' +
                '.cart_totals .order-total .amount,' +
                '.shop_table .cart_item td .amount,' +
                '.shop_table.woocommerce-checkout-review-order-table .order-total .amount,' +
                '.woocommerce-order .woocommerce-thankyou-order-received,' +
                '.woocommerce-order .woocommerce-table--order-details .amount,' +
                '.paging-navigation.pagination-style-1 .current,' +
                '.woocommerce-pagination.pagination-style-1 span.current').css('color', newval);

            $('.site-header.mid-stack .main-navigation .nb-navbar > .menu-item').hover(function(e) {
               $(this).css('border-color', e.type === "mouseenter"?newval:"transparent");
            });
            $('.wc-tabs > li.active a, .wc-tabs .ui-accordion-header-active a').hover(function(e) {
               $(this).css('color', newval);
            });
            $('.nb-back-to-top-wrap a').hover(function(e) {
                var original = wp.customize('nbcore_inner_background').get();
                $(this).css('background-color', e.type === "mouseenter"?newval:original);
            });
            $('.wc-tabs > li.active a, .wc-tabs .ui-accordion-header-active a').focus(function(e) {
                $(this).css('color', newval);
            });
            $('.blog .classic .post .read-more-link a').hover(function(e) {
                $(this).css('background', e.type === "mouseenter"?newval:"#f2f2f2")
            });
            $('.widget .tagcloud a').hover(function(e) {
                $(this).css('background-color', e.type === "mouseenter"?newval:"transparent");
            });
        } );
    } );

    wp.customize( 'nbcore_background_color', function( value ) {
        value.bind( function( newval ) {
            $( '#site-wrapper' ).css('background', newval);
        } );
    } );

    wp.customize( 'nbcore_divider_color', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-navbar .sub-menu > .menu-item:not(:last-child),' +
                '.icon-header-section .nb-cart-section,' +
                'nb-navbar .menu-item a,' +
                '.nb-header-sub-menu .sub-menu > .menu-item:not(:last-child),' +
                '.widget .widget-title,' +
                '.blog .classic .post .entry-footer,' +
                '.single-post .single-blog .entry-footer,' +
                '.nb-social-icons > a,' +
                '.single-blog .entry-author-wrap,' +
                '.shop-main:not(.wide) .single-product-wrap .product_meta,' +
                '.shop-main.accordion-tabs .accordion-item .accordion-title-wrap,' +
                '.shop-main.horizontal-tabs .wc-tabs-wrapper,' +
                '.shop_table thead th,' +
                '.shop_table td,' +
                '.shop_table th,' +
                '.mini-cart-wrap .total,' +
                '.icon-header-wrap .nb-account-dropdown ul li:not(:last-of-type) a,' +
                '.widget tbody th, .widget tbody td,' +
                '.widget ul > li:not(:last-of-type),' +
                '.blog .post .entry-image .entry-cat,' +
                '.comment-list .comment,' +
                '.nb-comment-form textarea,' +
                '.paging-navigation.pagination-style-1 .page-numbers.current,' +
                '.woocommerce-pagination.pagination-style-1 span.current' ).css('border-color', newval);
        } );
    } );

    wp.customize( 'nbcore_pb_background', function( value ) {
        value.bind( function( newval ) {
            $( '.button, .nb-primary-button' ).css('background-color', newval);
        } );
    } );

    wp.customize( 'nbcore_pb_background_hover', function( value ) {
        value.bind( function( newval ) {
            var original = wp.customize('nbcore_pb_background').get();
            $('.button, .nb-primary-button').hover(function(e) {
                $(this).css('background-color', e.type === "mouseenter"?newval:original);
            });
            $('.button, .nb-primary-button').focus(function(e) {
                $(this).css('background-color', e.type === "mouseenter"?newval:original);
            });
        } );
    } );
    
    wp.customize( 'nbcore_pb_text', function( value ) {
        value.bind( function( newval ) {
            $( '.button, .nb-primary-button' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_pb_text_hover', function( value ) {
        value.bind( function( newval ) {
            var original = wp.customize('nbcore_pb_text').get();
            $('.button, .nb-primary-button').hover(function(e) {
                $(this).css('color', e.type === "mouseenter"?newval:original);
            });
            $('.button, .nb-primary-button').focus(function(e) {
                $(this).css('color', e.type === "mouseenter"?newval:original);
            });
        } );
    } );

    wp.customize( 'nbcore_pb_border', function( value ) {
        value.bind( function( newval ) {
            $( '.button, .nb-primary-button' ).css('border-color', newval);
        } );
    } );

    wp.customize( 'nbcore_pb_border_hover', function( value ) {
        value.bind( function( newval ) {
            var original = wp.customize('nbcore_pb_border').get();
            $('.button, .nb-primary-button').hover(function(e) {
                $(this).css('border-color', e.type === "mouseenter"?newval:original);
            });
            $('.button, .nb-primary-button').focus(function(e) {
                $(this).css('border-color', e.type === "mouseenter"?newval:original);
            });
        } );
    } );

    wp.customize( 'nbcore_sb_background', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-secondary-button' ).css('background-color', newval);
        } );
    } );

    wp.customize( 'nbcore_sb_background_hover', function( value ) {
        value.bind( function( newval ) {
            var original = wp.customize('nbcore_sb_background').get();
            $('.nb-secondary-button').hover(function(e) {
                $(this).css('background-color', e.type === "mouseenter"?newval:original);
            });
            $('.nb-secondary-button').focus(function(e) {
                $(this).css('background-color', e.type === "mouseenter"?newval:original);
            });
        } );
    } );

    wp.customize( 'nbcore_sb_text', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-secondary-button' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_sb_text_hover', function( value ) {
        value.bind( function( newval ) {
            var original = wp.customize('nbcore_sb_text').get();
            $('.nb-secondary-button').hover(function(e) {
                $(this).css('color', e.type === "mouseenter"?newval:original);
            });
            $('.nb-secondary-button').focus(function(e) {
                $(this).css('color', e.type === "mouseenter"?newval:original);
            });
        } );
    } );

    wp.customize( 'nbcore_sb_border', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-secondary-button' ).css('border-color', newval);
        } );
    } );

    wp.customize( 'nbcore_sb_border_hover', function( value ) {
        value.bind( function( newval ) {
            var original = wp.customize('nbcore_sb_border').get();
            $('.nb-secondary-button').hover(function(e) {
                $(this).css('border-color', e.type === "mouseenter"?newval:original);
            });
            $('.nb-secondary-button').focus(function(e) {
                $(this).css('border-color', e.type === "mouseenter"?newval:original);
            });
        } );
    } );

    wp.customize( 'nbcore_button_padding', function( value ) {
        value.bind( function( newval ) {
            $( '.list-type .add_to_cart_button,' +
                '.nb-primary-button,' +
                '.nb-secondary-button,' +
                '.single_add_to_cart_button' ).css('padding-left', newval + 'px').css('padding-right', newval + 'px');
        } );
    } );

    wp.customize( 'nbcore_button_border_radius', function( value ) {
        value.bind( function( newval ) {
            $( '.list-type .add_to_cart_button,' +
                '.nb-primary-button,' +
                '.nb-secondary-button,' +
                '.single_add_to_cart_button' ).css('border-radius', newval + 'px');
        } );
    } );

    wp.customize( 'nbcore_button_border_width', function( value ) {
        value.bind( function( newval ) {
            $( '.list-type .add_to_cart_button,' +
                '.nb-primary-button,' +
                '.nb-secondary-button,' +
                '.single_add_to_cart_button' ).css('border-width', newval + 'px');
        } );
    } );

    wp.customize( 'nbcore_blog_meta_align', function( value ) {
        value.bind( function( newval ) {
            $( '.blog .post .entry-meta, .blog .post .entry-title, .blog .post .entry-cat, .blog .post .read-more-link, .single-blog .entry-meta, .single-blog .entry-title, .single-blog .entry-cat' ).css('text-align', newval);
        } );
    } );
    
    wp.customize( 'nbcore_nav_color', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-navbar .menu-item a,' +
                '.icon-header-section .nb-cart-section' ).css('color', newval);
        } );
    } );
    
    wp.customize( 'nbcore_body_color', function( value ) {
        value.bind( function( newval ) {
            $( 'body,' +
                '.widget ul li a,' +
                '.woocommerce-breadcrumb a,' +
                '.nb-social-icons > a,' +
                '.wc-tabs > li:not(.active) a,' +
                '.shop-main.accordion-tabs .accordion-title-wrap:not(.ui-state-active) a,' +
                '.nb-account-dropdown a,' +
                '.header-account-wrap .not-logged-in,' +
                '.mid-inline .nb-account-dropdown a,' +
                '.mid-inline .mini-cart-section span,' +
                '.mid-inline .mini-cart-section a,' +
                '.mid-inline .mini-cart-section strong,' +
                '.entry-meta .byline a,' +
                '.comments-link a' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_inner_background', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-page-title-wrap,' +
                '.single-blog .entry-author,' +
                '.products .list-type-wrap,' +
                '.shop-main.accordion-tabs .accordion-title-wrap,' +
                '.woocommerce .woocommerce-message,' +
                '.woocommerce .woocommerce-info,' +
                '.woocommerce .woocommerce-error,' +
                '.woocommerce-page .woocommerce-message,' +
                '.woocommerce-page .woocommerce-info,' +
                '.woocommerce-page .woocommerce-error,' +
                '.cart-layout-2 .cart-totals-wrap,' +
                '.blog.style-2 .post .entry-content,' +
                '.nb-comment-form textarea,' +
                '.comments-area,' +
                '.nb-back-to-top-wrap a,' +
                '.blog .post .entry-cat a' ).css('background-color', newval);
        } );
    } );

    wp.customize( 'nbcore_heading_color', function( value ) {
        value.bind( function( newval ) {
            $( 'h1, h2, h3, h4, h5, h6,' +
                'h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a,' +
                '.entry-title > a,' +
                '.woocommerce-Reviews .comment-reply-title' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_reviews_round_avatar', function( value ) {
        value.bind( function( newval ) {
            if(newval) {
                $( '.shop-main .comment .avatar' ).css('border-radius', '50%');
            } else {
                $( '.shop-main .comment .avatar' ).css('border-radius', '0%');
            }
        } );
    } );

    wp.customize( 'nbcore_reviews_form', function( value ) {
        value.bind( function( newval ) {
            if('split' === newval) {
                $( '.shop-main #comments' ).css('flex-basis', '60%').css('max-width', '60%').css('padding-right', '15px');
                $( '.shop-main #review_form_wrapper' ).css('flex-basis', '40%').css('max-width', '40%').css('padding-left', '15px');
            } else {
                $( '.shop-main #comments' ).css('flex-basis', '100%').css('max-width', '100%').css('padding-right', '0');
                $( '.shop-main #review_form_wrapper' ).css('flex-basis', '100%').css('max-width', '100%').css('padding-left', '0');
            }
        } );
    } );

    wp.customize( 'nbcore_footer_top_heading', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-top-section h1,' +
                '.footer-top-section h2,' +
                '.footer-top-section h3,' +
                '.footer-top-section h4,' +
                '.footer-top-section h5,' +
                '.footer-top-section h6,' +
                '.footer-top-section .widget-title a' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_footer_top_color', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-top-section,' +
                '.footer-top-section a:not(.rsswidget)' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_footer_top_bg', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-top-section' ).css('background-color', newval);
        } );
    } );

    wp.customize( 'nbcore_footer_bot_heading', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-bot-section h1,' +
                '.footer-bot-section h2,' +
                '.footer-bot-section h3,' +
                '.footer-bot-section h4,' +
                '.footer-bot-section h5,' +
                '.footer-bot-section h6,' +
                '.footer-bot-section .widget-title a' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_footer_bot_color', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-bot-section,' +
                '.footer-bot-section a:not(.rsswidget)' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_footer_bot_bg', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-bot-section' ).css('background-color', newval);
        } );
    } );

    wp.customize( 'nbcore_footer_abs_color', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-abs-section, .footer-abs-section a, .footer-abs-section p' ).css('color', newval);
        } );
    } );

    wp.customize( 'nbcore_footer_abs_bg', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-abs-section' ).css('background-color', newval);
        } );
    } );

    wp.customize( 'nbcore_blog_single_title_size', function( value ) {
        value.bind( function( newval ) {
            $( '.single-blog .nb-page-title .entry-title,' +
                '.single-blog .entry-title' ).css('font-size', newval + 'px');
        } );
    } );

    wp.customize( 'nbcore_page_title_size', function( value ) {
        value.bind( function( newval ) {
            $( '.nb-page-title-wrap h1' ).css('font-size', newval + 'px');
        } );
    } );

    wp.customize( 'nbcore_header_text_section', function( value ) {
        value.bind( function( newval ) {
            $( '.text-section' ).html(newval);
        } );
    } );

    wp.customize( 'nbcore_footer_abs_padding', function( value ) {
        value.bind( function( newval ) {
            $( '.footer-abs-section' ).css('padding-top', newval + 'px').css('padding-bottom', newval + 'px');
        } );
    } );

    wp.customize( 'back_top_shape', function( value ) {
        value.bind( function( newval ) {
            if('circle' === newval) {
                $( '#back-to-top-button' ).css('border-radius', '50%');
            } else {
                $( '#back-to-top-button' ).css('border-radius', '0');
            }
        } );
    } );

    wp.customize( 'back_top_style', function( value ) {
        value.bind( function( newval ) {
            if('light' === newval) {
                $( '#back-to-top-button' ).css('background-color', '#edf0f5').css('color', '#323232');
            } else {
                $( '#back-to-top-button' ).css('background-color', '#323232').css('color', '#ffffff');
            }
        } );
    } );

} )( jQuery );

(function( $ ) {
    "use strict";
    wp.customize.bind( 'ready', function() {
 
        var customize = this;

        var ggFonts = nbUpload.google_fonts;

        customize( 'body_font_family', function( setting ) {
            var bodyFont = function() {
                var font = setting.get().split(',');
                var fontType = font[0];
                var fontName = font[1];
                // console.log(type);
                var fontContainer = customize.control('body_font_family').container;
                var dependency = fontContainer.find('.font-holder').data('dependency');
                var weightSelect = fontContainer.closest('.customize-pane-child').find('#nb-font-style-' + dependency + ' select[name="fonts-weight"]');

                if(fontType === 'google') {
                    fontContainer.find('.google-fonts-wrap').show();
                    weightSelect.find('option').each(function() {
                        var value = $(this).attr("value");
                        if(ggFonts[fontName].indexOf(value) > -1) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                } else if(fontType === 'custom') {
                    fontContainer.find('.nb-custom-fonts').show();
                    weightSelect.find('option').show();
                } else if(fontType === 'standard') {
                    fontContainer.find('.nb-select-standard-wrap').show();
                    weightSelect.find('option').show();
                }
            }

            bodyFont();
            setting.bind(bodyFont);
        } );

        customize( 'heading_font_family', function( setting ) {
            var headingFont = function() {
                var font = setting.get().split(',');
                var fontType = font[0];
                var fontName = font[1];
                // console.log(type);
                var fontContainer = customize.control('heading_font_family').container;
                var dependency = fontContainer.find('.font-holder').data('dependency');
                var weightSelect = fontContainer.closest('.customize-pane-child').find('#nb-font-style-' + dependency + ' select[name="fonts-weight"]');

                if(fontType === 'google') {
                    fontContainer.find('.google-fonts-wrap').show();
                    weightSelect.find('option').each(function() {
                        var value = $(this).attr("value");
                        if(ggFonts[fontName].indexOf(value) > -1) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                } else if(fontType === 'custom') {
                    fontContainer.find('.nb-custom-fonts').show();
                    weightSelect.find('option').show();
                } else if(fontType === 'standard') {
                    fontContainer.find('.nb-select-standard-wrap').show();
                    weightSelect.find('option').show()
                }
            }

            headingFont();
            setting.bind(headingFont);
        } );

        customize( 'nbcore_header_style', function( setting ) {
            var headerStyle = function() {
                if('left-stack' === setting.get()) {
                    customize.control('nbcore_bot_section_padding', function(control) {
                        control.setting.set('20');
                    });
                } else {
                    customize.control('nbcore_bot_section_padding', function(control) {
                        control.setting.set('30');
                    });
                }
            }

            headerStyle();
            setting.bind(headerStyle);
        } );

        customize( 'header_style', function( setting ) {  
            var headerHeight = function() {
                if('mid-stack' === setting.get()) {            
                    customize.control('nbcore_logo_width', function(control) {
                        control.container.hide();
                    });
                } else {             
                    customize.control('nbcore_logo_width', function(control) {
                        control.container.show();
                    });
                }
            }

            headerHeight();
            setting.bind(headerHeight);
        } );

        customize( 'nbcore_product_list', function( setting ) {
            var productList = function() {
                if('list-type' === setting.get()) {
                    customize.control('nbcore_grid_product_description', function(control) {
                        control.container.slideUp();
                    });
                    customize.control('nbcore_loop_columns', function(control) {
                        control.container.slideUp();
                    });
                } else {
                    customize.control('nbcore_grid_product_description', function(control) {
                        control.container.slideDown();
                    });
                    customize.control('nbcore_loop_columns', function(control) {
                        control.container.slideDown();
                    });
                }
            };

            productList();
            setting.bind(productList);
        } );

        customize( 'nbcore_page_title_switch', function( setting ) {
            var pageTitle = function() {
                if(setting.get()) {
                    customize.control('nbcore_shop_title', function(control) {
                        control.container.show();
                    });
                    customize.control('nbcore_pd_details_title', function(control) {
                        control.container.show();
                    });
                } else {
                    customize.control('nbcore_shop_title', function(control) {
                        control.container.hide();
                    });
                    customize.control('nbcore_pd_details_title', function(control) {
                        control.container.hide();
                    });
                }
            }

            pageTitle();
            setting.bind(pageTitle);
        } );

        customize( 'nbcore_blog_archive_summary', function( setting ) {
            var summary = function() {
                if(setting.get()) {
                    customize.control('nbcore_excerpt_only', function(control) {
                        control.container.slideDown();
                    });
                } else {
                    customize.control('nbcore_excerpt_only', function(control) {
                        control.container.slideUp();
                    });
                }
            }

            summary();
            setting.bind(summary);
        } );

        customize( 'nbcore_blog_archive_layout', function( setting ) {
            var metaAlign = function() {
                if('masonry' === setting.get()) {
                    customize.control('nbcore_blog_meta_tag', function(control) {
                        control.container.hide();
                    });
                    customize.control('nbcore_excerpt_only', function(control) {
                        control.container.slideUp();
                    });
                    customize.control('nbcore_blog_archive_comments', function(control) {
                        control.container.slideUp();
                    });
                    customize.control('nbcore_blog_masonry_columns', function(control) {
                        control.container.slideDown()
                    });
                } else {
                    customize.control('nbcore_blog_meta_tag', function(control) {
                        control.container.show();
                    });
                    customize.control('nbcore_excerpt_only', function(control) {
                        control.container.slideDown();
                    });
                    customize.control('nbcore_blog_archive_comments', function(control) {
                        control.container.slideDown();
                    });
                    customize.control('nbcore_blog_masonry_columns', function(control) {
                        control.container.slideUp();
                    });
                }
            }

            metaAlign();
            setting.bind(metaAlign);
        } );

        customize( 'nbcore_excerpt_only', function( setting ) {
            var metaExcerpt = function() {
                if(setting.get()) {
                    customize.control('nbcore_excerpt_length', function(control) {
                        control.container.slideDown();
                    });
                } else {
                    customize.control('nbcore_excerpt_length', function(control) {
                        control.container.slideUp();
                    });
                }
            }

            metaExcerpt();
            setting.bind(metaExcerpt);
        } );

        customize( 'nbcore_pd_details_sidebar', function( setting ) {
            var pd_sidebar = function() {
                if('no-sidebar' === setting.get()) {
                    customize.control('nbcore_pd_details_width', function(control) {
                        control.container.slideUp();
                    });
                } else {
                    customize.control('nbcore_pd_details_width', function(control) {
                        control.container.slideDown();
                    });
                }
            }

            pd_sidebar();
            setting.bind(pd_sidebar);
        } );

        customize( 'nbcore_pd_meta_layout', function( setting ) {
            var pdSidebar = function() {
                if('wide' === setting.get()) {
                    customize.control('nbcore_pd_images_width', function(control) {
                        control.container.slideUp();
                    });
                } else {
                    customize.control('nbcore_pd_images_width', function(control) {
                        control.container.slideDown();
                    });
                }
            }

            pdSidebar();
            setting.bind(pdSidebar);
        } );

        customize( 'nbcore_show_cross_sells', function( setting ) {
            var pdSidebar = function() {
                if(setting.get()) {
                    customize.control('nbcore_cross_sells_per_row', function(control) {
                        control.container.slideDown();
                    });
                    customize.control('nbcore_cross_sells_limit', function(control) {
                        control.container.slideDown();
                    });
                } else {
                    customize.control('nbcore_cross_sells_per_row', function(control) {
                        control.container.slideUp();
                    });
                    customize.control('nbcore_cross_sells_limit', function(control) {
                        control.container.slideUp();
                    });
                }
            }

            pdSidebar();
            setting.bind(pdSidebar);
        } );

        // $(window).resize(function() {
        //     $('.blog .masonry').isotope({
        //         itemSelector: '.post',
        //         sortBy : '',
        //     });
        // });

        // color shceme change
    //     customize( 'nbcore_color_scheme', function( setting ) {
    //         var colorScheme = function() {
    //             if('scheme_1' === setting.get()) {
    //                 customize.control('nbcore_primary_color', function(control) {
    //                     control.setting.set('#ffffff');
    //                     control.container.find('.alpha-color-control').spectrum("set", "#ffffff")
    //                 });
    //             }
    //         }
            
    //         setting.bind(colorScheme);
             
    //         // setting.bind(function(newval) {
    //         //     if('scheme_1' === setting.get()) {

    //         //     }
    //         // });
    //     // });
    } );

})( jQuery );

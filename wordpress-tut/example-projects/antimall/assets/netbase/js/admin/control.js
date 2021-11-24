(function( $ ) {

    wp.customize.bind( 'ready', function() {
 
        var customize = this;

        var ggFonts = nbUpload.google_fonts;
        var dependencyArray = {};
        var affectedArray   = {};
        var controlVariable = [];
        var counter         = 0;
        

        $("#customize-theme-controls ul.accordion-section-content").each(function(){
            var liItem           = $(this).find('li');
                
            $(liItem).each(function(){
            
            var liItemID        = $(this).attr('id'),
                controlContent  = $(this).find('.customize-control-content'),
                controlContentID = controlContent.attr('id'),
                dataDependency  = controlContent.attr('nb-data-dependency');
                
                if(typeof(dataDependency) != 'undefined' && typeof(liItemID) != 'undefined') {
                    
                    var obj                 = JSON.parse(dataDependency),
                        elementDependency   = obj.element,
                        valueDependency     = obj.value,
                        affectedElements    = liItemID.replace("customize-control-", ""),
                        combineKey          = elementDependency + "^" + valueDependency,
                        separetedMultiKey   = combineKey.split("^"),
                        separetedElements   = separetedMultiKey[0].split(","),
                        separetedValues     = separetedMultiKey[1].split(",");

                    if(separetedElements.length > 1 && separetedValues.length > 1) {

                        for (var i = 0; i < separetedElements.length; i++) {
                            combineKey = separetedElements[i] + "^" + separetedValues[i];
                            dependencyArray[combineKey] = dependencyArray[combineKey] || [];
                            dependencyArray[combineKey].push(affectedElements);
                        }
                    }
                    else {
                        dependencyArray[combineKey] = dependencyArray[combineKey] || [];
                        dependencyArray[combineKey].push(affectedElements);
                    }
                }

            });
        });

        $.each(dependencyArray, function(key, value) {
            var realKey = key.split("^");
            customize( realKey[0], function( setting ) {

                controlVariable[counter] = function() {

                    if(realKey[1].indexOf('!') > -1) {
                        
                        if(realKey[1].replace("!", "") != setting.get()) {
                            
                            $.each(value, function(k, v) {
                                customize.control(v, function(control) {
                                    control.container.slideDown(); // = show
                                });
                            } );
                            
                        } else {
    
                            $.each(value, function(k, v) {
                                customize.control(v, function(control) {
                                    control.container.slideUp(); // = hide
                                });
                            } );
                            
                        }
                    }
                    else {
                        if(realKey[1] == setting.get()) {
                            
                            $.each(value, function(k, v) {
                                customize.control(v, function(control) {
                                    control.container.slideDown(); // = show
                                });
                            } );
                            
                        } else {
    
                            $.each(value, function(k, v) {
                                customize.control(v, function(control) {
                                    control.container.slideUp(); // = hide
                                });
                            } );
                            
                        }
                    }

                };

                controlVariable[counter]();
                setting.bind(controlVariable[counter]);
            } );
            counter++;
        });

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
    } );

})( jQuery );

(function( $ ) {
    "use strict";
    $(document).ready(function() {
        // var ggFonts = nbUpload.google_fonts;

        $('select[name="select-font-type"]').on('change', function() {
            var wrap = $(this).closest('.customize-control-typography');
            var option = $(this).val();

            if(option === 'google') {
                wrap.find('.google-fonts-wrap').slideDown('fast');
                wrap.find('.nb-custom-fonts').slideUp('fast');
                wrap.find('.nb-select-standard-wrap').slideUp('fast');
            } else if(option === 'custom') {
                wrap.find('.google-fonts-wrap').slideUp('fast');
                wrap.find('.nb-custom-fonts').slideDown('fast');
                wrap.find('.nb-select-standard-wrap').slideUp('fast');
            } else {
                wrap.find('.google-fonts-wrap').slideUp('fast');
                wrap.find('.nb-custom-fonts').slideUp('fast');
                wrap.find('.nb-select-standard-wrap').slideDown('fast')
            }
        });

        $('.customize-control-typography select[name="google-fonts-select"]').on('change', function() {
            var wrap = $(this).closest('.customize-control-typography');
            var fontFamily = wrap.find('.chosen-single').text();

            wrap.find('.font-holder').val('google,' + fontFamily).change();
        });

        $('.customize-control-typography select[name="standard-fonts-select"]').on('change', function() {
            var wrap = $(this).closest('.customize-control-typography');
            var fontFamily = $(this).children("option").filter(":selected").text();

            wrap.find('.font-holder').val('standard,' + fontFamily).change();
        });

        $('.nb-custom-fonts .upload-font').on( 'click', function() {
            // Accepts an optional object hash to override default values.
            var wrap = $(this).closest('.customize-control-typography');
            var frame = new wp.media({
                title: nbUpload.form_heading,
                multiple: true,
                library: {
                    type: ["application/vnd.ms-fontobject", "application/x-font-opentype", "application/x-font-ttf", "application/font-woff", "application/font-woff2"],
                },
                button: {
                    text: nbUpload.button,
                },
            });

            frame.open();

            var resultArray = [];
            var nameArray = [];

            frame.on('select', function() {
                var fonts = frame.state().get('selection').toJSON();
                var i;

                for(i = 0; i < fonts.length; i++) {
                    resultArray.push(fonts[i].url);
                    nameArray.push(fonts[i].title);
                }

                var name = [];

                $.each(nameArray, function(i, e) {
                    if ($.inArray(e, name) == -1) name.push(e);
                });

                if(name.length === 1) {
                    resultArray.push(name);
                    wrap.find('.font-holder').val('custom,' + resultArray.toString()).change();
                    wrap.find('.custom-font-message').slideUp('fast');
                } else {
                    wrap.find('.custom-font-message').append('<span>' + nbUpload.error_message + '</span>').slideDown('fast');
                }
            });
        });

        // $('.customize-control-typography .font-holder').on('change' ,function() {
        //     var dependency = $(this).data('dependency');
        //     var font = $(this).val().split(',');
        //     var fontName = font[1];
        //     var weight = $(this).closest('.customize-pane-child').find('#nb-font-style-' + dependency + ' select[name="fonts-weight"]');
        //
        //     weight.find('option').each(function() {
        //         var value = $(this).attr("value");
        //         if(ggFonts[fontName].indexOf(value) > -1) {
        //             $(this).show();
        //         } else {
        //             $(this).hide();
        //         }
        //     });
        // })
    } );


})( jQuery );


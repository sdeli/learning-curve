(function( $ ) {
    "use strict";
    $(document).ready(function() {



        $('select[name="google-fonts-select"]').chosen();

        $('.focus-section').click(function(e) {
            e.preventDefault();
            var s = $(this).data('section');
            wp.customize.section(s).focus();
            $(".accordion-section-content").css("margin-top", "0");
        });

        $('.alpha-color-control').each(function(index, element) {
            var wrapElement = $(element).closest('.color-control-wrap');
            $(element).spectrum({
                color: $(element).val(),
                showInput: true,
                showInitial: true,
                allowEmpty: true,
                showAlpha: true,
                clickoutFiresChange: true,
                preferredFormat: "rgb",
                show: function() {
                    wrapElement.find('#default').on("click", function(e) {
                        e.preventDefault();
                        var defaultColor = $(this).attr("data-default-color");

                        $(element).spectrum("set", defaultColor);
                        wrapElement.css('background-color', defaultColor);
                        wrapElement.find('#color-placeholder').text(defaultColor);
                        $(element).trigger('change');
                    });
                },
                change: function(color) {
                    wrapElement.find('#color-placeholder').text(color.toRgbString());
                    wrapElement.css('background-color', color.toRgbString());
                },
                move: function(color) {
                    $(element).spectrum("set", color);
                    $(element).trigger('change');
                },
                hide: function(color) {
                    $(element).spectrum("set", color);
                    $(element).trigger('change');
                },
            });
        });
    });

})( jQuery );

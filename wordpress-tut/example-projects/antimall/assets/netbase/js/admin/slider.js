(function( $ ) {
    "use strict";
    $(document).ready(function(){
        
        var $slider = $('.nb-slider');

        $slider.each(function(index) {
    
            var $value = $(this).attr('data-value');
            var $min = parseInt($(this).attr('data-min'));
            var $max = parseInt($(this).attr('data-max'));
            var $step = parseInt($(this).attr('data-step'));
            var $unit = $(this).attr('data-unit');            
            var $input = $(this).closest('.customize-control-content').find('.nb-slider-input');                            
            var tooltip = $('<span id="tooltip">' + $value + $unit + '</span>');
            
            $(this).slider({
                range : "min",
                value : $value,
                min   : $min,
                max   : $max,
                step  : $step,
                slide : function(e, ui) {
                    console.log(ui.value);
                    $input.val(ui.value).keyup();

                    tooltip.text(ui.value + $unit);
                    $input.change();
                }
            }).find(".ui-slider-handle").append(tooltip);   

        });
    })
})( jQuery );

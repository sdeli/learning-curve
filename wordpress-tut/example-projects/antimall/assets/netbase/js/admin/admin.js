(function( $ ) {
	"use strict";
    $(document).ready(function() {
        $('.nb-tab').on('click', function() {
            $(this).closest('.nav-tab-wrapper').find('.active').removeClass('active');
            $(this).addClass('active');
            var content = $(this).attr('href').substr(1);
            $(this).closest('.nb-tab-container').find('.pane-active').removeClass('pane-active');
            $(this).closest('.nb-tab-container').find('#' + content).addClass('pane-active');
        })
    });

})( jQuery );

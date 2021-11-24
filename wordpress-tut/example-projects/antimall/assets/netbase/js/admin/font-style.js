(function( $ ) {
    "use strict";
    $(document).ready(function(){
        var checkboxValue = $('.customize-control-font-style input[type="checkbox"]');
        var fonts = nb_customize_typography.google_fonts;

        $('.customize-control-font-style input[type="checkbox"]:checked').addClass('active');
        checkboxValue.on('change', function() {
            $(this).toggleClass('active');
        });

        $('.customize-control-font-style input[type="checkbox"], .customize-control-font-style select' ).on(
            'change',
            function() {
                fontWeight = $(this).closest('.customize-control-font-style').find('select[name="fonts-weight"]').val();
                values = $( this ).parents( '.customize-control' ).find( 'input[type="checkbox"]:checked' ).map(
                    function() {
                        return this.value;
                    }
                ).get().join( ',' );
                if(values) {
                    values = values + ',' + fontWeight;
                } else {
                    values = fontWeight;
                }

                $( this ).parents( '.customize-control' ).find( 'input[type="hidden"]' ).val( values ).trigger( 'change' );
            }
        );

    } );


})( jQuery );


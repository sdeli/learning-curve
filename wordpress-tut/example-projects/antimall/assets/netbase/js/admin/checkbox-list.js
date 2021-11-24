(function( $ ) {
	"use strict";
    $(document).ready(function() {
		$( ".customize-control-checkbox-list li input" ).on( 'change', function(){ 
			/* Get the value, and convert to string. */
			this_checkboxes_values = $(this).parents( '.customize-control-checkbox-list' ).eq(0).find( 'li input' ).map( function(){
				var active = '0';
				if( $(this).prop("checked") ){
					active = '1';
				}
				return "\"" + this.name + "\":" + active;
			}).get().join( ',' );
		   /* Add the value to hidden input. */
		   $( this ).parents( '.customize-control-checkbox-list' ).eq(0).find( 'input[type="hidden"]' ).val( '{' + this_checkboxes_values + '}' ).trigger( 'change' );
		});
    });

})( jQuery );

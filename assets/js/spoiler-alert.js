jQuery( document ).ready( function( $ ) {
	$( '.spoiler-alert__expander button' ).on( 'click', function( evt ) {
		evt.preventDefault();

		$( '.spoiler-alert__content', $( this ).closest( '.spoiler-alert' ) ).toggle();
	})
} );

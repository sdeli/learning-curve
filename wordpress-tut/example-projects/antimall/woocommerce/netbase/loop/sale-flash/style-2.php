<?php
global $post, $product;
if ( ( $product->is_type( 'simple' ) || $product->is_type( 'external' ) ) && $product->is_on_sale() ) {

    $product = wc_get_product();

    $regular_price 	= $product->get_regular_price();

    $sale_price 	= $product->get_sale_price();

    $sale = ceil( ( ( $regular_price - $sale_price ) / $regular_price ) * 100 );

} elseif ( $product->is_type( 'variable' ) && $product->is_on_sale() ) {

    $available_variations = $product->get_available_variations();

    $sale = array();

    foreach ( $available_variations as $val ) {
        if ( $val['display_price'] > 0 ) {
            $regular_price = $val['display_regular_price'];
            $sale_price = $val['display_price'];

            $sale[] = ceil( ( ( $regular_price - $sale_price ) / $regular_price ) * 100 );
        } else {
            $sale[] = '100';
        }
    }

    $sale = max( $sale );
}

if ( $product->is_on_sale() ) {

    echo apply_filters( 'woocommerce_sale_flash', '<span class="onsale sale-style-2"><span class="percent">-' . $sale . '%</span></span>', $post, $product );
}
<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package nbcore
 */

$blog_class = '';
$shop_class = '';
$product_class = '';

$page_sidebar = antimall_get_options('page_sidebar');

if(antimall_get_options('nbcore_blog_sticky_sidebar')) {
    $blog_class = ' sticky-wrapper sticky-sidebar';
}
if(antimall_get_options('shop_sticky_sidebar')) {
    $shop_class = ' sticky-wrapper sticky-sidebar';
}
if(antimall_get_options('product_sticky_sidebar')) {
    $product_class = ' sticky-wrapper sticky-sidebar';
}

if( function_exists('is_woocommerce') && is_woocommerce() ) {
	if(is_product()) {
		if( 'no-sidebar' !== antimall_get_options('nbcore_pd_details_sidebar') && is_active_sidebar('product-sidebar') ) {
			echo '<aside id="secondary" class="widget-area shop-sidebar"><div class="sidebar-wrapper' . esc_attr($product_class) . '">';
			dynamic_sidebar( 'product-sidebar' );
			echo '</div></aside>';
		}
	} else {
        if( 'no-sidebar' !== antimall_get_options('nbcore_shop_sidebar') && is_active_sidebar('shop-sidebar') ) {
            echo '<aside id="secondary" class="widget-area shop-sidebar"><div class="sidebar-wrapper' . esc_attr($shop_class) . '">';
            dynamic_sidebar( 'shop-sidebar' );
            echo '</div></aside>';
        }
    }
} else {
	if( 'no-sidebar' !== antimall_get_options('nbcore_blog_sidebar') && is_active_sidebar('default-sidebar') ) {
        echo '<aside id="secondary" class="widget-area"><div class="sidebar-wrapper' . esc_attr($blog_class) . '">';
        dynamic_sidebar( 'default-sidebar' );
        echo '</div></aside>';
	}
}


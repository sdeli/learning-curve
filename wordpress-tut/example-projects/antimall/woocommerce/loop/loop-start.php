<?php
/**
 * Product Loop Start
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/loop-start.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.3.0
 */
?>
<div class="products row<?php if( (function_exists( 'is_shop' ) && is_shop()) || (function_exists( 'is_product_category' ) && is_product_category()) || (function_exists( 'is_product_tag' ) && is_product_tag()) ) echo ' ' . esc_attr(antimall_get_options('nbcore_product_list')); ?>">

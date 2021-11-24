<?php
/**
 * The template for displaying product widget entries
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-widget-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.5.5
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

global $product; ?>

<li class="product">
    <a href="<?php echo esc_url( $product->get_permalink() ); ?>">
        <?php print($product->get_image()); ?>
    </a>
    <div class="widget-product-meta">
        <h5 class="product-title">
            <a href="<?php echo esc_url( $product->get_permalink() ); ?>">
                <?php echo esc_html($product->get_name()); ?>
            </a>
        </h5>
        <?php if ( ! empty( $show_rating ) ) {
            echo wc_get_rating_html( $product->get_average_rating() );
        } ?>
        <?php print($product->get_price_html()); ?>
    </div>
</li>
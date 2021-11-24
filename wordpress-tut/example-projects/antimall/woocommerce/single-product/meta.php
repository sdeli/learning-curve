<?php
/**
 * Single Product Meta
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/meta.php.
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
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;
?>
<div class="product_meta">

	<?php do_action( 'woocommerce_product_meta_start' ); ?>


    <div class="sku_wrapper">
        <span class="meta-name"><?php esc_html_e( 'SKU:', 'antimall' ); ?></span>
        <span class="sku"><?php echo ( $sku = $product->get_sku() ) ? $sku : esc_html__( 'N/A', 'antimall' ); ?></span>
    </div>

    <div class="category_wrapper">
        <?php echo wc_get_product_category_list( $product->get_id(), ', ', '<span class="posted_in meta-name">' . _n( 'Category:', 'Categories:', count( $product->get_category_ids() ), 'antimall' ) . ' </span><span>', '</span></span>' ); ?>
    </div>

    <div class="tag_wrapper">
        <?php echo wc_get_product_tag_list( $product->get_id(), ', ', '<span class="tagged_as meta-name">' . _n( 'Tag:', 'Tags:', count( $product->get_tag_ids() ), 'antimall' ) . ' </span><span>', '</span></span>' ); ?>
    </div>

    <div class="availability_wrapper">
        <?php $availability = $product->get_availability(); ?>
        <?php if( ! $product->is_type('external' ) ):?>
        <span class="meta-name"><?php esc_html_e( 'Availability: ', 'antimall' ); ?></span>
        <span class="stock <?php echo ( $product->is_in_stock() ? 'in-stock' : 'out-stock' ); ?>">
            <?php
            if ( $product->get_manage_stock() == 'yes' && !empty($availability['availability']) ) :
                echo esc_html( $availability['availability'] );
            elseif ( $product->is_purchasable() && $product->is_in_stock() ) :
                esc_html_e( 'In Stock', 'antimall' );
            else :
                esc_html_e( 'Out Of Stock', 'antimall' );
            endif;
            ?>
        </span>
        <?php endif;?>
    </div>

	<?php do_action( 'woocommerce_product_meta_end' ); ?>

</div>

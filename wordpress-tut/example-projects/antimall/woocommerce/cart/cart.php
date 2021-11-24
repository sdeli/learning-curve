<?php
/**
 * Cart Page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 4.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

wc_print_notices();

do_action( 'woocommerce_before_cart' );
$cart_layout = antimall_get_options('nbcore_cart_layout');
?>


<form class="woocommerce-cart-form <?php echo esc_attr($cart_layout);?>" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
	<?php wc_get_template('netbase/cart/' . $cart_layout . '.php'); ?>
</form>

<?php do_action( 'woocommerce_after_cart' ); ?>

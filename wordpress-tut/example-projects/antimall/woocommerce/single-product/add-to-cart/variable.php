<?php
/**
 * Variable product add to cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/add-to-cart/variable.php.
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

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product, $post;
$randid = absint( $product->get_id() ) . '_' . rand(1,1000);
if(!$swatch_attrs = antimall_get_options('nbcore_pa_swatch_style')){
    $swatch_attrs = array();
} else {
	$swatch_attrs = (array)json_decode($swatch_attrs);
}
$allow_swatch = false;
foreach($swatch_attrs as $s)
{
    if($s == 1)
    {
        $allow_swatch = true;
    }
}
$attribute_keys = array_keys( $attributes );
do_action( 'woocommerce_before_add_to_cart_form' );
?>
<div class="product-addtocart">
	<form class="variations_form cart" method="post" enctype='multipart/form-data' data-product_id="<?php echo absint( $product->get_id() ); ?>" data-product_variations="<?php echo htmlspecialchars( wp_json_encode( $available_variations ) ) ?>">
		<?php if ( ! empty( $available_variations ) ) : ?>
			<div class="variations" cellspacing="0">
				<?php $loop = 0;
				$default = array();
				foreach ( $attributes as $name => $options ) :
					$loop++; ?>
					<h5 class="label"><label for="<?php echo sanitize_title( $name ); ?>"><?php echo wc_attribute_label( $name ); ?></label></h5>
					<div class="value" <?php if(isset($swatch_attrs[$name]) && $swatch_attrs[$name] == 1 && taxonomy_exists( $name )): ?>style="display: none;" <?php endif; ?>  >
						<div class="dropdown-select">
							<?php
								$selected = isset( $_REQUEST[ 'attribute_' . sanitize_title( $name ) ] ) ? wc_clean( stripslashes( urldecode( $_REQUEST[ 'attribute_' . sanitize_title( $name ) ] ) ) ) : $product->get_variation_default_attribute( $name );
								wc_dropdown_variation_attribute_options( array( 'options' => $options, 'attribute' => $name, 'product' => $product, 'selected' => $selected, 'id' => sanitize_title($name) . $randid ) );
							?>
						</div>
					</div>
					<?php if(isset($swatch_attrs[$name]) && $swatch_attrs[$name] == 1): ?>
						<div class="value" >
							<ul  data-id="<?php echo esc_attr( sanitize_title( $name ) . $randid ); ?>" class="swatch">
								<?php
								if ( is_array( $options ) ) {

									if ( isset( $_REQUEST[ 'attribute_' . sanitize_title( $name ) ] ) ) {
										$selected_value = $_REQUEST[ 'attribute_' . sanitize_title( $name ) ];
									} elseif ( isset( $selected_attributes[ sanitize_title( $name ) ] ) ) {
										$selected_value = $selected_attributes[ sanitize_title( $name ) ];
									} else {
										$selected_value = '';
									}

									// Get terms if this is a taxonomy - ordered
									if ( taxonomy_exists( $name ) ) {

										$terms = wc_get_product_terms( $product->get_id(), $name, array( 'fields' => 'all' ) );

										foreach ( $terms as $term ) {
											if ( ! in_array( $term->slug, $options ) ) {
												continue;
											}
											$class = ( sanitize_title( $selected_value ) == sanitize_title( $term->slug ) ) ? 'selected':'';

											$thumbnail_id = absint( get_woocommerce_term_meta( $term->term_id, 'thumbnail_id', true ) );

											if ( $thumbnail_id ) {
												$style = "background: url('".wp_get_attachment_thumb_url( $thumbnail_id )."') no-repeat; text-indent: -999em;'";
											} else {
												$style = '';
											}
											echo '<li option-value="' . esc_attr( $term->slug ) . '" data-toggle="tooltip" title="'.$term->name.'" class="swatch-item ' . $class . '  ' . esc_attr( $term->slug ) . '" ><span style="'.$style.'" >' . apply_filters( 'woocommerce_variation_option_name', $term->name ) . '</span></li>';
										}
									}
								}
								?>
							</ul>
						</div>
					<?php endif; ?>
                    <?php
                    if ( sizeof( $attributes ) === $loop ) {
                        echo '<a class="reset_variations" href="#reset">' . __( 'Clear selection', 'antimall' ) . '</a>';
                    }
                    ?>
				<?php endforeach;?>
			</div>
			
			<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

			<div class="single_variation_wrap" style="display:none;">
				<?php do_action( 'woocommerce_before_single_variation' ); ?>

				<div class="single_variation"></div>

				<div class="variations_button">

					<?php woocommerce_quantity_input( array(
					'input_value' => ( isset( $_POST['quantity'] ) ? wc_stock_amount( $_POST['quantity'] ) : 1 )
					) ); ?>
					<button type="submit" class="single_add_to_cart_button button alt"><i></i><?php echo sanitize_text_field($product->single_add_to_cart_text()); ?></button>
				</div>

				<input type="hidden" name="add-to-cart" value="<?php echo esc_attr($product->id); ?>" />
				<input type="hidden" name="product_id" value="<?php echo esc_attr( $post->ID ); ?>" />
				<input type="hidden" name="variation_id" class="variation_id" value="" />

				<?php do_action( 'woocommerce_after_single_variation' ); ?>
			</div>
			<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
			
		<?php else : ?>
			<p class="stock out-of-stock"><?php _e( 'This product is currently out of stock and unavailable.', 'antimall' ); ?></p>
		<?php endif; ?>

        <?php if ( ! empty( $available_variations ) && $allow_swatch ) : ?>
        <?php endif; ?>
	</form>
</div>
<?php do_action( 'woocommerce_after_add_to_cart_form' ); ?>

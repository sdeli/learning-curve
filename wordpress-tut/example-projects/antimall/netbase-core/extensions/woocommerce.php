<?php
/**
 * Extend and customize Woocommerce
 */
class Antimall_Extensions_Woocommerce {
	protected static $init = false;

	public static function init()
	{
		remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);
		remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10);
		remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);
		remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20);
		remove_action('woocommerce_cart_collaterals', 'woocommerce_cross_sell_display');      
		
        if ( class_exists( 'YITH_Woocompare_Frontend' ) && get_option('yith_woocompare_compare_button_in_product_page') == 'yes' && !antimall_get_options('product_category_compare') ) {
            global $yith_woocompare;
            if( ! is_admin() ) {
                remove_action('woocommerce_after_shop_loop_item', array($yith_woocompare->obj, 'add_compare_link'), 20);
            }
        }


		add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );
		add_filter( 'woocommerce_before_main_content', 'antimall_page_title', 5 );
		add_filter( 'loop_shop_columns', array(__CLASS__, 'loop_columns') );
		add_filter( 'loop_shop_per_page', array(__CLASS__, 'products_per_page'), 20 );
		add_filter( 'woocommerce_pagination_args', array(__CLASS__, 'woocommerce_pagination') );
		add_filter('woocommerce_product_description_heading', '__return_empty_string');
		add_filter('woocommerce_product_additional_information_heading', '__return_empty_string');
		add_filter('woocommerce_review_gravatar_size', array(__CLASS__, 'wc_review_avatar_size'));
		add_filter('woocommerce_cross_sells_total', array(__CLASS__, 'cross_sells_limit'));
		add_filter('woocommerce_upsells_total', array(__CLASS__, 'upsells_limit'));
		add_filter('yith_add_quick_view_button_html', array(__CLASS__, 'quickview_button'), 10, 3);
		add_filter('yith_quick_view_loader_gif', '__return_empty_string');

		add_action('woocommerce_after_shop_loop_item', array(__CLASS__, 'product_action_div_open'), 6);
		add_action('woocommerce_after_shop_loop_item', array(__CLASS__, 'product_action_div_close'), 50);
		add_action('woocommerce_after_shop_loop_item', array(__CLASS__, 'wishlist_button'), 20);
        add_action('woocommerce_shop_loop_item_title', array(__CLASS__, 'product_title'), 10);
        add_action('woocommerce_after_shop_loop_item_title', array(__CLASS__, 'product_description'), 15);
        add_action('woocommerce_before_main_content', array(__CLASS__, 'shop_banner'), 15);
        add_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 15);
		add_action('woocommerce_single_product_summary', array(__CLASS__, 'wide_meta_left_div_open'), 9);
		add_action('woocommerce_single_product_summary', array(__CLASS__, 'wide_meta_left_div_close'), 24);
		add_action('woocommerce_single_product_summary', array(__CLASS__, 'wide_meta_right_div_open'), 26);
		add_action('woocommerce_single_product_summary', array(__CLASS__, 'wide_meta_right_div_close'), 55);
		add_action('woocommerce_share', array(__CLASS__, 'wc_share_social'));
		add_action('woocommerce_cart_collaterals', 'woocommerce_cross_sell_display', 15);
        if(!antimall_get_options('nbcore_product_rating')) {
            remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
        }

		add_action('wp_footer', array(__CLASS__, 'add_cart_notice'));
		
        //TODO Fix this hack?
        //add_filter('woocommerce_in_cart_product', array(__CLASS__, 'remove_wishlist_quickview'), 50, 1 );
        $attrs = antimall_get_options('nbcore_pa_swatch_style');
		if ($attrs && $attrs!=''):
			$attrs = (array)json_decode($attrs);
		endif;
	}

	public function remove_wishlist_quickview($a){
        add_filter('yith_add_quick_view_button_html',  '__return_empty_string', 50, 3);
    }

	public static function loop_columns()
	{
		return antimall_get_options('nbcore_loop_columns');
	}

	public static function product_action_div_open()
	{
		echo '<div class="product-action">';
	}

	public static function product_action_div_close()
	{
		echo '</div>';
	}

    public static function wishlist_button()
    {
        if(antimall_get_options('product_category_wishlist')) {
            if ( class_exists( 'YITH_WCWL' ) ) {
                echo '<div class="wishlist-btn button bt-4">' . do_shortcode( '[yith_wcwl_add_to_wishlist]' ) . '</div>';
            }
        }
	}

	public static function product_title()
	{
		echo '<h4 class="product-title"><a href="' . esc_url(get_the_permalink()) . '">' . esc_html(get_the_title()) . '</a></h4>';
	}

	public static function products_per_page($cols)
	{
		return antimall_get_options('nbcore_products_per_page');
	}

	public static function woocommerce_pagination()
	{
		return array(
			'prev_text' => '<i class="icon-left-open"></i>',
			'next_text' => '<i class="icon-right-open"></i>',
			'end_size' => 1,
			'mid_size' => 1,
		);
	}

	public static function product_description()
	{
        $product_desc = antimall_get_options('nbcore_grid_product_description') ? antimall_get_options('nbcore_grid_product_description') : '';
        if ($product_desc){
            echo '<p class="product-description">' . esc_html(get_the_excerpt()) . '</p>';
        }
	}

	public static function product_category()
	{
		global $post;
		$terms = get_the_terms( $post->ID, 'product_cat' );
		foreach ($terms as $term) {
			echo '<a class="product-category-link" href="' . esc_url(get_term_link($term->term_id)) . '">' . esc_html($term->name) . '</a>';
		}
	}

	public static function shop_banner()
	{
		if(function_exists( 'is_shop' ) && is_shop()) {
			$shop_banner_url = antimall_get_options('nbcore_shop_banner');
			if ($shop_banner_url) {
				echo '<div class="shop-banner"><img src="' . esc_url(wp_get_attachment_url(absint($shop_banner_url))) . '" /></div>';
			}
		}
	}

	public static function wc_review_avatar_size()
	{
		return '80';
	}

	public static function wide_meta_left_div_open()
	{
		if('wide' === antimall_get_options('nbcore_pd_meta_layout')) {
			echo '<div class="pd-meta-left">';
		}
	}

	public static function wide_meta_left_div_close()
	{
		if('wide' === antimall_get_options('nbcore_pd_meta_layout')) {
			echo '</div>';
		}
	}

	public static function wide_meta_right_div_open()
	{
		if('wide' === antimall_get_options('nbcore_pd_meta_layout')) {
			echo '<div class="pd-meta-right">';
		}
	}

	public static function wide_meta_right_div_close()
	{
		if('wide' === antimall_get_options('nbcore_pd_meta_layout')) {
			echo '</div>';
		}
	}
  public function woocommerce_custom_online_design_button()
    {
    global $product;
    if ( is_plugin_active( 'web-to-print-online-designer/nbdesigner.php' ) && get_post_meta($product->get_id(), '_nbdesigner_enable', true) ):

        $nbdesigner_position_button_product_detail = nbdesigner_get_option('nbdesigner_position_button_product_detail');

        if($nbdesigner_position_button_product_detail == 4):
    ?>
            <div class="wc-custom-online-desginer">
                <p class="custom-od-title"><?php esc_html_e('Online Desgin', 'antimall');?></p>
                <p class="custom-od-des"><?php esc_html_e('Combine it with our layouts and fonts.', 'antimall');?></p>
                <?php echo do_shortcode( '[nbdesigner_button]' );?>
            </div>

        <?php endif; ?>
    <?php endif; ?>

    <?php
    }

	public static function wc_share_social()
	{
		if(antimall_get_options('nbcore_pd_show_social') && function_exists('antimall_share_social')) {
            antimall_share_social();
		}
	}

	public static function cross_sells_limit()
	{
		$cross_sells_limit = antimall_get_options('nbcore_cross_sells_limit');
		return $cross_sells_limit;
	}

	public static function upsells_limit()
	{
		$upsells_limit = antimall_get_options('nbcore_upsells_limit');
		return $upsells_limit;
	}

    public static function quickview_button($button, $label, $product)
    {
        $html = '';
        if(antimall_get_options('product_category_quickview')) {
            global $product;

            $product_id = yit_get_prop( $product, 'id', true );

            $html = '<a href="#" class="button yith-wcqv-button bt-4" data-product_id="' . $product_id . '"><i class="icon-search"></i><span class="tooltip">' . $label . '</span></a>';

        }
        return $html;
	}


    public static function compare_button($button, $label, $product)
    {

            global $product;
            
            $product_id = yit_get_prop( $product, 'id', true );

            $html = '<a href="#" class="button compare" data-product_id="' . $product_id . '"><i class="icon-opened-eye"></i><span class="tooltip">' . $label . '</span></a>';
            $html = '<a href="#" class="button compare" data-product_id="' . $product_id . '"><i class="icon-opened-eye"></i><span class="tooltip">' . $label . '</span></a>';
            

        return $html;
    }

	public function upload_scripts()
    {
        wp_enqueue_script('media-upload');
        wp_enqueue_media();
    }

    public static function add_cart_notice()
    {
        global $woocommerce;
        $url = wc_get_cart_url();
        ?>
        <div class="cart-notice-wrap">
            <div class="cart-notice">
                <p><?php esc_html_e('Product has been added to cart', 'antimall'); ?></p>
                <p class="cart-url button"><a href="<?php echo esc_url($url); ?>"><?php esc_html_e('View Cart', 'antimall'); ?></a></p>
                <span><i class="icon-cancel-circle"></i></span>
            </div>
        </div>
        <?php
    }
    public function add_attribute_fields() {
        ?>

        <div class="form-field">
            <label><?php esc_html_e( 'Thumbnail', 'antimall' ); ?></label>
            <div id="product_cat_thumbnail" style="float: left; margin-right: 10px;"><img src="<?php echo esc_url( wc_placeholder_img_src() ); ?>" width="60px" height="60px" /></div>
            <div style="line-height: 60px;">
                <input type="hidden" name="is_attribute" value="1">
                <input type="hidden" id="product_attribute_thumbnail_id" name="product_attribute_thumbnail_id" />
                <button type="button" class="upload_image_button button"><?php esc_html_e( 'Upload/Add image', 'antimall' ); ?></button>
                <button type="button" class="remove_image_button button"><?php esc_html_e( 'Remove image', 'antimall' ); ?></button>
            </div>
            <script type="text/javascript">
                ( function( $ ) {
                    "use strict";
                    // Only show the "remove image" button when needed
                    if ( ! $( '#product_attribute_thumbnail_id' ).val() ) {
                        $( '.remove_image_button' ).hide();
                    }

                    // Uploading files
                    var file_frame;

                    $( document ).on( 'click', '.upload_image_button', function( event ) {

                        event.preventDefault();

                        // If the media frame already exists, reopen it.
                        if ( file_frame ) {
                            file_frame.open();
                            return;
                        }

                        // Create the media frame.
                        file_frame = wp.media.frames.downloadable_file = wp.media({
                            title: '<?php esc_html_e( "Choose an image", 'antimall' ); ?>',
                            button: {
                                text: '<?php esc_html_e( "Use image", 'antimall' ); ?>'
                            },
                            multiple: false
                        });

                        // When an image is selected, run a callback.
                        file_frame.on( 'select', function() {
                            var attachment = file_frame.state().get( 'selection' ).first().toJSON();
                            $( '#product_cat_thumbnail_id' ).val( attachment.id );
                            $( '#product_cat_thumbnail img' ).attr( 'src', attachment.sizes.thumbnail.url );
                            $( '.remove_image_button' ).show();
                        });

                        // Finally, open the modal.
                        file_frame.open();
                    });

                    $( document ).on( 'click', '.remove_image_button', function() {
                        $( '#product_cat_thumbnail img' ).attr( 'src', '<?php echo esc_js( wc_placeholder_img_src() ); ?>' );
                        $( '#product_attribute_thumbnail_id' ).val( '' );
                        $( '.remove_image_button' ).hide();
                        return false;
                    });
                } )( jQuery );
            </script>
            <div class="clear"></div>
        </div>
    <?php
    }
	
	public function edit_attribute_fields( $term ) {
        $thumbnail_id = absint( get_woocommerce_term_meta( $term->term_id, 'thumbnail_id', true ) );

        if ( $thumbnail_id ) {
            $image = wp_get_attachment_thumb_url( $thumbnail_id );
        } else {
            $image = wc_placeholder_img_src();
        }
        ?>

        <tr class="form-field">
            <th scope="row" valign="top"><label><?php _e( 'Thumbnail', 'antimall' ); ?></label></th>
            <td>
                <div id="product_cat_thumbnail" style="float: left; margin-right: 10px;"><img src="<?php echo esc_url( $image ); ?>" width="60px" height="60px" /></div>
                <div style="line-height: 60px;">
                    <input type="hidden" name="is_attribute" value="1">
                    <input type="hidden" id="product_attribute_thumbnail_id" name="product_attribute_thumbnail_id" value="<?php echo esc_attr($thumbnail_id); ?>" />
                    <button type="button" class="upload_image_button button"><?php esc_html_e( 'Upload/Add image', 'antimall' ); ?></button>
                    <button type="button" class="remove_image_button button"><?php esc_html_e( 'Remove image', 'antimall' ); ?></button>
                </div>
                <script type="text/javascript">
                    ( function( $ ) {
                        "use strict";
                        // Only show the "remove image" button when needed
                        if ( '0' === $( '#product_attribute_thumbnail_id' ).val() ) {
                            $( '.remove_image_button' ).hide();
                        }

                        // Uploading files
                        var file_frame;

                        $( document ).on( 'click', '.upload_image_button', function( event ) {

                            event.preventDefault();

                            // If the media frame already exists, reopen it.
                            if ( file_frame ) {
                                file_frame.open();
                                return;
                            }

                            // Create the media frame.
                            file_frame = wp.media.frames.downloadable_file = wp.media({
                                title: '<?php _e( "Choose an image", "antimall" ); ?>',
                                button: {
                                    text: '<?php _e( "Use image", "antimall" ); ?>'
                                },
                                multiple: false
                            });

                            // When an image is selected, run a callback.
                            file_frame.on( 'select', function() {
                                var attachment = file_frame.state().get( 'selection' ).first().toJSON();

                                $( '#product_attribute_thumbnail_id' ).val( attachment.id );
                                $( '#product_cat_thumbnail img' ).attr( 'src', attachment.url );
                                $( '.remove_image_button' ).show();
                            });

                            // Finally, open the modal.
                            file_frame.open();
                        });

                        $( document ).on( 'click', '.remove_image_button', function() {
                            $( '#product_cat_thumbnail img' ).attr( 'src', '<?php echo esc_js( wc_placeholder_img_src() ); ?>' );
                            $( '#product_attribute_thumbnail_id' ).val( '' );
                            $( '.remove_image_button' ).hide();
                            return false;
                        });
                    } )( jQuery );


                </script>
                <div class="clear"></div>
            </td>
        </tr>
    <?php
    }
	
    public function save_attribute_fields( $term_id, $tt_id = '', $taxonomy = '' ) {
        if ( isset( $_POST['product_attribute_thumbnail_id'] ) && isset($_POST['is_attribute']) && $_POST['is_attribute'] == 1 ) {
            update_woocommerce_term_meta( $term_id, 'thumbnail_id', absint( $_POST['product_attribute_thumbnail_id'] ) );
        }
    }

    /**
     *  Add the link to compare
     */
    public function add_compare_link( $product_id = false, $args = array() ) {
        extract( $args );

        if ( ! $product_id ) {
            global $product;
            $product_id = ! is_null( $product ) ? yit_get_prop( $product, 'id', true ) : 0;
        }

        // return if product doesn't exist
        if ( empty( $product_id ) || apply_filters( 'yith_woocompare_remove_compare_link_by_cat', false, $product_id ) )
            return;

        $is_button = ! isset( $button_or_link ) || ! $button_or_link ? get_option( 'yith_woocompare_is_button' ) : $button_or_link;

        if ( ! isset( $button_text ) || $button_text == 'default' ) {
            $button_text = get_option( 'yith_woocompare_button_text', esc_html__( 'Compare', 'antimall' ) );
            do_action ( 'wpml_register_single_string', 'Plugins', 'plugin_yit_compare_button_text', $button_text );
            $button_text = apply_filters( 'wpml_translate_single_string', $button_text, 'Plugins', 'plugin_yit_compare_button_text' );
        }

        printf( '<a href="%s" class="%s" data-product_id="%d" rel="nofollow">%s</a>', $this->add_product_url( $product_id ), 'compare bt-4 real-compare-button' . ( $is_button == 'button' ? ' button' : '' ), $product_id, $button_text );
    }
    /**
     * The URL to add the product into the comparison table
     *
     * @param int $product_id ID of the product to add
     * @return string The url to add the product in the comparison table
     */
    public function add_product_url( $product_id ) {
        $url_args = array(
            'action' => 'yith-woocompare-add-product',
            'id' => $product_id
        );

        $lang = defined( 'ICL_LANGUAGE_CODE' ) ? ICL_LANGUAGE_CODE : false;
        if( $lang ) {
            $url_args['lang'] = $lang;
        }

        return apply_filters( 'yith_woocompare_add_product_url', esc_url_raw( add_query_arg( $url_args, site_url() ) ), 'yith-woocompare-add-product' );
    }
	

}


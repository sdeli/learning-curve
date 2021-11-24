<div class="list-type-wrap">
    <div class="product-image">
        <?php
        /**
         * woocommerce_before_shop_loop_item hook.
         *
         * @hooked woocommerce_template_loop_product_link_open - 10
         */
        do_action( 'woocommerce_before_shop_loop_item' );

        /**
         * woocommerce_before_shop_loop_item_title hook.
         *
         * @hooked woocommerce_show_product_loop_sale_flash - 10
         * @hooked woocommerce_template_loop_product_thumbnail - 10
         */
        do_action( 'woocommerce_before_shop_loop_item_title' );
        ?>
    </div>
    <div class="product-meta">
        <?php
        global $post;
        $terms = get_the_terms( $post->ID, 'product_cat' );
        foreach ($terms as $term) {
            echo '<a class="product-category-link" href="' . esc_url(get_term_link($term->term_id)) . '">' . esc_html($term->name) . '</a>';
        }
        /**
         * woocommerce_shop_loop_item_title hook.
         *
         * @hooked woocommerce_template_loop_product_title - 10
         */
        do_action( 'woocommerce_shop_loop_item_title' );

        /**
         * woocommerce_after_shop_loop_item_title hook.
         *
         * @hooked woocommerce_template_loop_rating - 5
         * @hooked woocommerce_template_loop_price - 10
         */
        do_action( 'woocommerce_after_shop_loop_item_title' );
        echo '<p class="product-description">' . esc_html(get_the_excerpt()) . '</p>';
        woocommerce_template_loop_add_to_cart();
        ?>
    </div>
</div>

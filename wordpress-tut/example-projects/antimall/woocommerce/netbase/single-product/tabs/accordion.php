<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$tabs = apply_filters( 'woocommerce_product_tabs', array() );

if ( ! empty( $tabs ) ) : ?>

    <div class="woocommerce-tabs wc-tabs-wrapper">
        <div class="tabs wc-tabs" role="tablist">
            <?php foreach ( $tabs as $key => $tab ) : ?>
                <div class="accordion-item">
                    <div class="accordion-title-wrap">
                        <a class="accordion-title plain" href="#">
                            <?php echo apply_filters( 'woocommerce_product_' . $key . '_tab_title', $tab['title'], $key ) ?>
                        </a>
                    </div>
                    <div class="accordion-content">
                        <?php call_user_func( $tab['callback'], $key, $tab ) ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

<?php endif; ?>

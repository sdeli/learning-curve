
<?php
$text_section_content = antimall_get_options('nbcore_header_text_section');
?>
<?php if(class_exists('WooCommerce')){ ?>
<div class="mid-section-wrap">
    <div class="container">
        <div class="menu-right">
            <?php if($text_section_content) : ?>
                <?php echo ($text_section_content ? '<div class="text-section">' .($text_section_content) . '</div>' : ''); ?>
            <?php endif; ?>

            <?php if(is_active_sidebar('currency-switcher-sidebar')): dynamic_sidebar('currency-switcher-sidebar'); endif; ?>
            
            <?php if(is_active_sidebar('language-sidebar')): ?>
                <div class="topbar-language">
                <?php dynamic_sidebar('language-sidebar'); ?>
                </div>
            <?php endif; ?>

            <?php
            if (!is_user_logged_in()) { ?>
                <?php if (class_exists('WooCommerce')) { ?>
                    <a class="login-s"
                       href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>"
                       title="<?php esc_html_e('login/register', 'antimall'); ?>">
                        <?php esc_html_e('Login / Register', 'antimall'); ?></a>
                <?php } else { ?>
                    <a href="<?php echo wp_login_url(home_url()); ?>" title="Login" class="wp_login">Login</a>
                <?php } ?>
                <?php
            } else {
                $user = wp_get_current_user();

                $role = (array)$user->roles;
                ?>
                <a class="login-s " href="<?php echo wp_logout_url(home_url()); ?>">Logout</a>
            <?php } ?>
            
        </div>
        <div class="menu-left">
            <span>
                Do You Have Something To Sell?
                <a href="">Sell Now</a>
            </span>
        </div>
    </div>
</div>
<?php }?>
<div class="bottom-section-wrap">
    <div class="container">
        <div class="middle-section">
            <?php antimall_get_site_logo();
            ?>
        </div>
        <div class="bot-section">
            <?php antimall_main_nav(); ?>
        </div>
        <div class="bot-right">
        <?php        
        antimall_search_section();
        ?>
            <div class='close_popup'></div>
        <div class="icon-header-wrap">
            <?php if(class_exists('WooCommerce')){ ?>
                <?php antimall_header_woo_section(); ?>
                <span><?php printf('Item(s)');?></span>
            <?php }?>
        </div>
        </div>
    </div>
</div>





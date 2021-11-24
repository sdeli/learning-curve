<?php
/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-login.php.
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
 * @version 4.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

?>

<?php wc_print_notices(); ?>

<?php do_action( 'woocommerce_before_customer_login_form' );
$login_wrap_class = 'custom-login-wrap';
if ( get_option( 'woocommerce_enable_myaccount_registration' ) === 'yes' ) {
    $login_wrap_class = 'custom-login-wrap has-register-form';
}
?>

<div class="<?php echo esc_attr($login_wrap_class);?>">
    <div class="content-form" style="width: 100%;">
        <div class="row">
            <div class="col-md-6">
                <div class="custom-login">

                    <h2><?php _e( 'Login', 'antimall' ); ?></h2>

                    <form class="woocomerce-form woocommerce-form-login login" method="post">

                        <?php do_action( 'woocommerce_login_form_start' ); ?>

                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <label for="username"><?php _e( 'Username or email address', 'antimall' ); ?> <span class="required">*</span></label>
                            <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( $_POST['username'] ) : ''; ?>" />
                        </p>
                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <label for="password"><?php _e( 'Password', 'antimall' ); ?> <span class="required">*</span></label>
                            <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" />
                        </p>

                        <?php do_action( 'woocommerce_login_form' ); ?>

                        <p class="form-row">
                            <?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
                            <input type="submit" class="woocommerce-Button button nb-primary-button bt-5" name="login" value="<?php esc_attr_e( 'Login', 'antimall' ); ?>" />
                        <div class="rememberme-wrap">
                            <label class="woocommerce-form__label woocommerce-form__label-for-checkbox inline">
                                <input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span><?php _e( 'Remember me', 'antimall' ); ?></span>
                            </label>
                        </div>
                        </p>
                        <p class="woocommerce-LostPassword lost_password">
                            <a href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php _e( 'Lost your password?', 'antimall' ); ?></a>
                        </p>

                        <?php do_action( 'woocommerce_login_form_end' ); ?>

                    </form>

                </div>
            </div>
            <div class="col-md-6">
                <div class="custom-register">

                    <h2><?php _e( 'Register', 'antimall' ); ?></h2>

                    <form method="post" class="register">

                        <?php do_action( 'woocommerce_register_form_start' ); ?>

                        <?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>

                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label for="reg_username"><?php _e( 'Username', 'antimall' ); ?> <span class="required">*</span></label>
                                <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( $_POST['username'] ) : ''; ?>" />
                            </p>

                        <?php endif; ?>

                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <label for="reg_email"><?php _e( 'Email address', 'antimall' ); ?> <span class="required">*</span></label>
                            <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( $_POST['email'] ) : ''; ?>" />
                        </p>

                        <?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>

                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label for="reg_password"><?php _e( 'Password', 'antimall' ); ?> <span class="required">*</span></label>
                                <input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" />
                            </p>

                        <?php endif; ?>

                        <!-- Spam Trap -->
                        <div style="<?php echo ( ( is_rtl() ) ? 'right' : 'left' ); ?>: -999em; position: absolute;"><label for="trap"><?php _e( 'Anti-spam', 'antimall' ); ?></label><input type="text" name="email_2" id="trap" tabindex="-1" autocomplete="off" /></div>

                        <?php do_action( 'woocommerce_register_form' ); ?>

                        <p class="woocomerce-FormRow form-row">
                            <?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
                            <input type="submit" class="woocommerce-Button button nb-primary-button bt-5" name="register" value="<?php esc_attr_e( 'Register', 'antimall' ); ?>" />
                        </p>

                        <?php do_action( 'woocommerce_register_form_end' ); ?>

                    </form>

                </div>
            </div>
        </div>
    </div>
</div>

<?php do_action( 'woocommerce_after_customer_login_form' ); ?>


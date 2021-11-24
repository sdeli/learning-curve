<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Jewelry
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<div class="container">
				<p class="pnf-heading"><?php esc_html_e('404', 'antimall');?></p>
				<div class="text-wrap">					
					<h1><?php esc_html_e('Sorry page not found', 'antimall'); ?></h1>
					<p><?php esc_html_e('The page are looking for is not available or has been removed.', 'antimall'); ?></p>
					<p><?php
					printf(wp_kses( __('Try going to <a href="%s">home page</a> by using the button below', 'antimall'), array('a' => array('href' => array())) ), home_url())
					?></p>
				</div>
				<p class="home-link"><a href="<?php echo esc_url(home_url()); ?>"><span class="icon-home"><?php esc_html_e('go to home', 'antimall'); ?></span></a></p>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

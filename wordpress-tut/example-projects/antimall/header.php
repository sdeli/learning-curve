<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package antimall
 */

?><!DOCTYPE html>
<html <?php language_attributes();?>>
<head>
<meta charset="<?php bloginfo('charset');?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head();?>
</head>

<body <?php body_class();?>>
<?php 
if(antimall_get_options('nbcore_header_preloading')){
	get_template_part('/template-parts/preloading/preloading');
} 
?>
<div id="page" class="site">

	<div id="site-wrapper">

		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'antimall');?></a>
		
		<?php
			$header_class 	= antimall_get_options('nbcore_header_style');
			$is_homepage3 	= $header_class == 'header-home-3' ? true : false;
			$open_tag 		= $is_homepage3 ? "<div id='home-page-3-wrapper'>" : '';
			$close_tag 		= $is_homepage3 ? "</div>" : '';
		?>
		<?php print $open_tag;?>
			<header class="site-header <?php antimall_header_class(); ?>">

				<?php
				do_action('nb_core_before_header');

				antimall_get_header();

				do_action('nb_core_after_header');
				?>

			</header>
		<?php print $close_tag;?>

		<div id="content" class="site-content">
			
			
			
		

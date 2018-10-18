<?php
/**
 * Template partial to dispplay template content
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>

<div id='post-<?php the_ID() ?>' <?php post_class( $class="row" )  ?> >

	<h2><a href=" <?php echo the_permalink(); ?> "><?php the_title() ?></a></h2>
	<p class="small"><?php the_date() ?></p>
	<?php the_content() ?>
	<p class="small"><?php the_author() ?></p>

	<!-- Pagination  ......................................... -->
	<?php 
		wp_link_pages(array(
			'before'      => '<div class="page-links"><span class="page-links-title">' . __('Pages: ', 'customtheme') . '</span>',
			'after'       => '</div>',
			'pagelink'    => '<span class="screen-reader-text">' . __( 'Page %', 'customtheme' ) . '</span>',
			'separator'   => '<span class="screen-reader-text">, </span>'
		));
	?>

	<!-- pull comment functionality  ........................... -->
	<?php 
		if ( comments_open() || get_comments_number() ) :
			comments_template();
		endif;
	?>
	
</div><!-- row END -->
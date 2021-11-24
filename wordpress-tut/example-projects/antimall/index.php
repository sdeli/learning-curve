<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package nbcore
 */
$blog_layout = antimall_get_options('nbcore_blog_archive_layout');
$blog_sidebar = antimall_get_options('nbcore_blog_sidebar');
get_header(); ?>

	<?php antimall_page_title(); ?>

	<div class="container">
		<div class="blog row <?php echo antimall_blog_classes(); ?>">
			<div id="primary" class="content-area">
				<main id="main" class="site-main <?php echo esc_attr($blog_layout); ?>" >
	
				<?php




				if ( have_posts() ) :
	
					if ( is_home() && ! is_front_page() ) : ?>
						<header>
							<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
						</header>
	
					<?php
					endif;
	
					/* Start the Loop */
					while ( have_posts() ) : the_post();
	
						/*
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'template-parts/blog/' . $blog_layout );
	
					endwhile;			
	
				else :
	
					get_template_part( 'template-parts/content', 'none' );
	
				endif; ?>
	
				</main><!-- #main -->
				<?php antimall_paging_nav(); ?>
			</div><!-- #primary -->
			<?php
			if('no-sidebar' !== $blog_sidebar) {
				get_sidebar();
			} ?>
		</div>
	</div>
<?php
get_footer();

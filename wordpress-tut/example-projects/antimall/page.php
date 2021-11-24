<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package nbcore
 */

get_header();
if(get_the_title(get_the_ID())) {
    antimall_page_title();
}
$page_custom_layout  = esc_html( get_post_meta(  $post->ID, 'sidebar_option', true) );
if(isset($page_custom_layout) && $page_custom_layout =='left-sidebar' || $page_custom_layout =='right-sidebar' || $page_custom_layout =='no-sidebar'){
    $page_sidebar = $page_custom_layout ;
}else{
    $page_sidebar = antimall_get_options( 'nbcore_pages_sidebar');
}

?>
	
	<div class="container">
		<div class="row">
			<div id="primary" class="content-area page-<?php echo esc_attr($page_sidebar); ?>">
				<main id="main" class="site-main">

					<?php
					while ( have_posts() ) : the_post();

						?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                            <?php
                            if('no-thumb' !== antimall_get_options('page_thumb')) {
                                antimall_featured_thumb();
                            }
                            ?>
                            <div class="entry-content">
                                <?php
                                the_content();

                                wp_link_pages( array(
                                    'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'antimall' ),
                                    'after'  => '</div>',
                                ) );
                                ?>
                            </div><!-- .entry-content -->
                        </article><!-- #post-## -->
                        <?php
						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif;

					endwhile; // End of the loop.
					?>

				</main><!-- #main -->
			</div><!-- #primary -->
			<?php
            if('no-sidebar' !== $page_sidebar) {
                get_sidebar();
            }
			?>
		</div>
	</div>

<?php
get_footer();

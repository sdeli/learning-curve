<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package nbcore
 */
$single_blog_sidebar = antimall_get_options('nbcore_blog_sidebar');
$title_position = antimall_get_options('nbcore_blog_single_title_position');
$title_blog_single_bg = antimall_get_options('nbcore_blog_bg_single_title');
if($title_blog_single_bg){
	$title_bg = wp_get_attachment_image_src( $title_blog_single_bg,'full' );
}
get_header();
    if('position-1' === $title_position) {
    	$bg_title_class 		= isset($title_bg[0]) ? ' bg_title_single_post bg_img' : '';
		$bg_title_inline_css 	= isset($title_bg[0]) ? ' style="background-image: url(' . $title_bg[0] . ')"' : '';
        echo '<div class="nb-page-title-wrap' . esc_attr($bg_title_class) . '"' . $bg_title_inline_css . '><div class="container"><div class="nb-page-title">';
        antimall_posted_on();
        the_title( '<h1 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h1>' );
        //antimall_get_categories();
        echo '</div></div></div>';
    } ?>
	<div class="container">
		<div class="single-blog row <?php antimall_blog_classes(); ?>">

			<div id="primary" class="content-area">
				<main id="main" class="site-main">

				<?php
				while ( have_posts() ) : the_post(); ?>
					<div class="entry-content">
                        <?php if('position-2' === $title_position) {
                            antimall_posted_on();
                            the_title( '<h1 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h1>' );
                            antimall_get_categories();
                        }?>
                        <?php
                        if(antimall_get_options('nbcore_blog_single_show_thumb')):
                            $thumb = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full' );
                        	if($thumb):
                            ?>
                            <div class="entry-image">
								<?php
								printf('<img src="%1$s" title="%2$s" width="%3$s" height="%4$s" />',
									$thumb[0],
									esc_attr(get_the_title()),
									$thumb[1],
									$thumb[2]
								);
								?>
                            </div>
                        <?php endif;
                        endif; ?>
						<div class="entry-text">
							<?php
							the_content( sprintf(
							/* translators: %s: Name of current post. */
								wp_kses( esc_html__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'antimall' ), array( 'span' => array( 'class' => array() ) ) ),
								the_title( '<span class="screen-reader-text">"', '"</span>', false )
							) );

							wp_link_pages( array(
								'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'antimall' ),
								'after'  => '</div>',
							) );
							?>
						</div>
                        <div class="entry-footer">
						    <?php antimall_get_tags(); ?>
                        </div>
						<?php
                        if('inside-content' === antimall_get_options('share_buttons_position')) {
                            if(antimall_get_options('nbcore_blog_single_show_social') && function_exists('nbcore_share_social')) {
                                nbcore_share_social();
                            }
                        }
                        ?>
                        <?php 
						$author_meta = esc_html( get_the_author_meta( 'display_name' ) );
						$author_avatar = get_avatar(get_the_author_meta('ID'), 100);
						$author_desc = get_the_author_meta('user_description');
						if(antimall_get_options('nbcore_blog_single_show_author')):
							if($author_desc): ?>
							<div class="entry-author-wrap">
								<div class="entry-author">
									<div class="author-image">
										<?php echo get_avatar(get_the_author_meta('ID'), 100); ?>
									</div>
									<div class="author-meta">
										<div class="author-name">
											<?php echo esc_html($author_meta); ?>
										</div>
										<div class="author-description">
											<?php echo esc_html($author_desc); ?>
										</div>
									</div>
								</div>
							</div>
							<?php endif;
						endif; ?>
                        <?php if(antimall_get_options('nbcore_blog_single_show_nav')): ?>
						<nav class="single-blog-nav">
							<?php
								previous_post_link( '<div class="prev">%link<span>' .  esc_html__( 'Previous post', 'antimall' ) . '</span></div>', _x( '<span class="meta-nav"><i class="icon-left-open"></i></span>%title', 'Previous post', 'antimall' ) );
								next_post_link(     '<div class="next">%link<span>' .  esc_html__( 'Next post', 'antimall' ) . '</span></div>',     _x( '%title<span class="meta-nav"><i class="icon-right-open"></i></span>', 'Next post', 'antimall' ) );
							?>
						</nav><!-- .single-nav -->
                        <?php endif; ?>
					</div>
                    <?php
                    if(antimall_get_options('nbcore_blog_single_show_comments')) {
                        if ( comments_open() || get_comments_number() ) {
                            comments_template();
                        }
                    }
                    ?>
				<?php
				endwhile; // End of the loop.
				?>
	
				</main><!-- #main -->
			</div><!-- #primary -->
		<?php
        if('no-sidebar' !== $single_blog_sidebar) {
            get_sidebar();
        }
		?>
		</div>
	</div>
		

<?php
get_footer();

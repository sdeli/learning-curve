<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package nbcore
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
        <?php
        antimall_get_categories();
        the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
        antimall_posted_on();
        if(antimall_get_options('nbcore_blog_archive_comments')):?>
            <?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
                <span class="comments-link"><i class="icon-speech-bubble"></i><?php comments_popup_link( esc_html__( 'Leave a comment', 'antimall' ), esc_html__( 'One Comment', 'antimall' ), esc_html__( '% Comments', 'antimall' ) ); ?></span>
            <?php endif; ?>
        <?php endif;
        antimall_featured_thumb();
		if(antimall_get_options('nbcore_blog_archive_summary')):
		?>
		<div class="entry-text">
			<?php
			if(antimall_get_options('nbcore_excerpt_only')) {
				antimall_get_excerpt();
				echo '<div class="read-more-link"><a class="bt-4 nb-secondary-button" href="' . get_permalink() . '">' . esc_html__('View post', 'antimall') . '<span>&rarr;</span></a></div>';
			} else {
				the_content( sprintf(
				/* translators: %s: Name of current post. */
					wp_kses( esc_html__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'antimall' ), array( 'span' => array( 'class' => array() ) ) ),
					the_title( '<span class="screen-reader-text">"', '"</span>', false )
				) );

				wp_link_pages( array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'antimall' ),
					'after'  => '</div>',
				) );
			}			
			?>
		</div>
		<?php endif; ?>
        <div class="entry-footer">
		    <?php antimall_get_tags(); ?>
        </div>
	</div>
	
</article><!-- #post-## -->

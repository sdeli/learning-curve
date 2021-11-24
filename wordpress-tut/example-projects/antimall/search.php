<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package nbcore
 */

get_header(); ?>

    <div class="container">
        <div class="row">
            <section id="primary" class="content-area">
                <main id="main" class="site-main content-search">

                    <?php
                    if (have_posts()) : ?>

                        <header class="page-header">
                            <h1 class="page-title"><?php printf(esc_html__('Search Results for: %s', 'antimall'), '<span>' . get_search_query() . '</span>'); ?></h1>
                        </header><!-- .page-header -->

                        <?php
                        /* Start the Loop */
                        while (have_posts()) : the_post();

                            /**
                             * Run the loop for the search to output the results.
                             * If you want to overload this in a child theme then include a file
                             * called content-search.php and that will be used instead.
                             */
                            ?>
                            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                                <?php antimall_featured_thumb(); ?>
                                <div class="entry-content">
                                    <?php antimall_posted_on();
                                    the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
                                    antimall_get_categories();
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
                                </div>

                            </article><!-- #post-## -->
                            <?php

                        endwhile;

                        the_posts_navigation();

                    else : ?>
                        <section class="no-results not-found">
                            <header class="page-header">
                                <h1 class="page-title"><?php esc_html_e('Nothing Found', 'antimall'); ?></h1>
                            </header><!-- .page-header -->

                            <div class="page-content">
                                <?php
                                if (is_home() && current_user_can('publish_posts')) : ?>

                                    <p><?php printf(wp_kses(esc_html__('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'antimall'), array('a' => array('href' => array()))), esc_url(admin_url('post-new.php'))); ?></p>

                                <?php elseif (is_search()) : ?>

                                    <p><?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'antimall'); ?></p>
                                    <?php
                                    get_search_form();

                                else : ?>

                                    <p><?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'antimall'); ?></p>
                                    <?php
                                    get_search_form();

                                endif; ?>
                            </div><!-- .page-content -->
                        </section><!-- .no-results -->
                        <?php
                    endif; ?>

                </main><!-- #main -->
            </section><!-- #primary -->
        </div>
    </div>


<?php
get_footer();

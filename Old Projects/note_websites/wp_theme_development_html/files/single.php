<?php
/**
 * The main template file
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

<!-- headerr ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- header ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- header ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<?php get_header(); ?>


<!-- container ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- container ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- container ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<div class="container">
	<div class="row">


		<!-- Blog Posts ********************************************************************** -->
		<div class="col-xs-12 col-sm-6 col-sm-offset-1">

			<?php if ( have_posts() ) : ?>

				<?php  while ( have_posts() ) : the_post(); ?>

					<!--INDIVIDUAL POST BEGIN  ....................................................................... -->
					
					<?php get_template_part( 'template_parts/content', 'single' ); ?>

					<!--INDIVIDUAL POST END  .......................................................................... -->

				<?php endwhile; ?>

			<?php endif; ?>

			<!-- POST NAVIGATION ........................................................... -->
			<?php if ( is_singular("post") ) : ?>

				<div class="row">
					
					<?php
						the_post_navigation( array(
							'prev_text' => 'prev',
							'next_text' => 'next'
						) );
					?>

				</div>

			<?php endif; ?>
			<!-- POST NAVIGATION END........................................................... -->

		</div><!-- col-xs-12 col-sm-6 col-sm-offset-1 -->
		<!-- Blog Posts END ********************************************************************** -->


		<!-- sidebar / widgets ********************************************************************** -->
		<div class="col-xs-12 col-sm-4 ">

			<?php get_sidebar(); ?>

		</div><!-- col-xs-12 col-sm-4 -->
		<!-- sidebar / widgets END********************************************************************** -->


	</div><!-- row -->
</div><!-- container -->


<!-- footer ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- footer ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<!-- footer ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->


<?php get_footer(); ?>

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
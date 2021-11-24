<?php  $style_preloading = antimall_get_options('nbcore_header_style_preloading'); ?>
<div class="loading <?php echo $style_preloading; ?>">
	<div id="loading-center">
	<?php switch ($style_preloading) {
		case "demo2": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
				<div class="object" id="object_five"></div>
				<div class="object" id="object_six"></div>
				<div class="object" id="object_seven"></div>
				<div class="object" id="object_eight"></div>
				<div class="object" id="object_big"></div>
			</div>
		<?php 
		break;
		case "demo3": ?>
			<div id="loading-center-absolute">
				<div class="object" id="first_object"></div>
				<div class="object" id="second_object"></div>
				<div class="object" id="third_object"></div>
			</div>
		<?php 
		break;
		case "demo4": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
				<div class="object" id="object_five"></div>
				<div class="object" id="object_six"></div>
				<div class="object" id="object_seven"></div>
				<div class="object" id="object_eight"></div>
				<div class="object" id="object_nine"></div>
			</div>
		<?php 
		break;
		case "demo5": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
				<div class="object" id="object_five"></div>
				<div class="object" id="object_six"></div>
			</div>
		<?php 
		break;
		case "demo6": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
			</div>
		<?php 
		break;
		case "demo7": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
			</div>
		<?php 
		break;
		case "demo8": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
				<div class="object" id="object_big"></div>
			</div>
		<?php 
		break;
		case "demo9": ?>
			<div id="loading-center-absolute-one">
				<div class="object-one"></div>
				<div class="object-one"></div>
				<div class="object-one"></div>
				<div class="object-one"></div>
				<div class="object-one"></div>
				<div class="object-one"></div>
			</div>
			<div id="loading-center-absolute-two">
				<div class="object-two"></div>
				<div class="object-two"></div>
				<div class="object-two"></div>
				<div class="object-two"></div>
				<div class="object-two"></div>
				<div class="object-two"></div>
			</div>
		<?php 
		break;
		case "demo10": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
			</div>
		<?php 
		break;
		case "demo11": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
				<div class="object" id="object_five"></div>
				<div class="object" id="object_six"></div>
				<div class="object" id="object_seven"></div>
				<div class="object" id="object_eight"></div>
				<div class="object" id="object_big"></div>
			</div>
		<?php 
		break;
		case "demo12": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
			</div>
		<?php 
		break;
		case "demo13": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_one"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_four"></div>
				<div class="object" id="object_five"></div>
				<div class="object" id="object_six"></div>
				<div class="object" id="object_seven"></div>
				<div class="object" id="object_eight"></div>
				<div class="object" id="object_nine"></div>
			</div>
		<?php 
		break;
		case "demo14": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_four"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_one"></div>
			</div>
		<?php 
		break;
		case "demo15": ?>
			<div id="loading-center-absolute">
				<div class="object" id="object_four"></div>
				<div class="object" id="object_three"></div>
				<div class="object" id="object_two"></div>
				<div class="object" id="object_one"></div>
			</div>
		<?php 
		break;
		default:?>
			<div id="loading-center-absolute">
				<div id="object"></div>
			</div>
	<?php } ?>
	</div>
</div>
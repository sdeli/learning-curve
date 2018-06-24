<?php 

	function bartag_func( $atts ) {

    shortcode_atts(
        array(
            'foo' => 'no foo',
            'bar' => 'default bar',
        ), $atts);

    return $atts['foo'] . ' ' . $atts['bar'];
    }
    add_shortcode( 'bartag', 'bartag_func' );



    function shortcode_lorem($atts){




        shortcode_atts( array(

            'class'        => 'text-sucess',
            'tag_before'   => '<p>',
            'tag_after'    => '<p>',
            'repeat'       => 3, 

            ), $atts);
    

        $txt=$atts['tag_before']."Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus enim, ratione amet consequuntur eum expedita laudantium deleniti exercitationem nihil optio nemo omnis eaque sunt vero sit placeat minus, tempore accusantium!".$atts['tag_after'];
        


        return str_repeat($txt, $atts['repeat']);

    }
    add_shortcode("lorem", "shortcode_lorem");
 ?>
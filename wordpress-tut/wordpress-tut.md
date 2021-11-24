# WORDPRESS TUT

Wordpress docs: [https://codex.wordpress.org/](https://codex.wordpress.org/)\
Dev Resources: [https://developer.wordpress.org/reference/](https://developer.wordpress.org/reference/)\
Best Practices: [https://make.wordpress.org/core/handbook/best-practices/](https://make.wordpress.org/core/handbook/best-practices/) \
Function reference:  [https://codex.wordpress.org/Function_Reference](https://codex.wordpress.org/Function_Reference)\
Core Registered Scripts: [https://developer.wordpress.org/reference/functions/wp_register_script/](https://developer.wordpress.org/reference/functions/wp_register_script/) \
Theme Features: [https://codex.wordpress.org/Theme_Features](https://codex.wordpress.org/Theme_Features) \
Template Files: [https://codex.wordpress.org/Theme_Development#Template_Files](https://codex.wordpress.org/Theme_Development#Template_Files) \
Template Hierarchy: [https://developer.wordpress.org/themes/basics/template-hierarchy/](https://developer.wordpress.org/themes/basics/template-hierarchy/) && [https://wphierarchy.com/](https://wphierarchy.com/)\
The Loop: [https://developer.wordpress.org/themes/basics/the-loop/](https://developer.wordpress.org/themes/basics/the-loop/)
Theme Dev Guidelines: [https://codex.wordpress.org/Theme_Development](https://codex.wordpress.org/Theme_Development)
Customizer API: [https://developer.wordpress.org/themes/customize-api/](https://developer.wordpress.org/themes/customize-api/)
## How Wordpress works
- Wordpress has a tendency to register assets for later use like:
  - scripts
  - styles
  - nav menus
  - sidebars/widgets
- Then later these can be referenced by their registered names

## Important Files
- php.ini
```php
  // you should add
  max_execution_time=500
  post_max_size=50M
  upload_max_filesize=50M
```
- wp-config.php
- themes/themenam/style.css
- themes/themenam/index.php
- functions.php (theme functions file)
  - The functions.php file behaves like a WordPress plugin, adding features and functionality to a WordPress site.
  - With functions.php you can:
    - Enqueue theme stylesheets and scripts. See wp_enqueue_scripts.
    - Enable Theme Features such as Sidebars, Navigation Menus, Post Thumbnails, Post Formats, Custom Headers, Custom Backgrounds and others.
    - Define functions used in several template files of your theme.
    - Set up an options menu, giving site owners options for colors, styles, and other aspects of your theme.
    
### Template Files: 
[https://codex.wordpress.org/Theme_Development#Template_Files](https://codex.wordpress.org/Theme_Development#Template_Files)\
__style.css__: The main stylesheet. This must be included with your Theme, and it must contain the information header for your Theme.\

__index.php__

__front-page.php__: Used to render your site’s front page.

__home.php__: The home page template, which is the front page by default. If you use a static front page this is the template for the page with the latest posts.

__single.php__: The single post template. Used when a single post is queried. For this and all other query templates, index.php is used if the query template is not present.

__single-{post-type}.php__

__comments.php__

__page.php__

__search.php__

__archive.php__: The archive template. Used when a category, author, or date is queried. This template will be overridden by category.php, author.php, and date.php.

__category.php__: The category template. Used when a category is queried.

__404.php__

__tag.php__: The tag template. Used when a tag is queried.

__taxonomy.php__: The term template. Used when a term in a custom taxonomy is queried.

__author.php__: The author template. Used when an author is queried.

__date.php__: The date/time template. Used when a date or time is queried. Year, month, day, hour, minute, second.

__attachment.php__

__image.php__: Image attachment template. Used when viewing a single image attachment. If not present, attachment.php will be used.


__rtl.css__

## Routing (Template Hierarchy)
ref: [https://developer.wordpress.org/themes/basics/template-hierarchy/](https://developer.wordpress.org/themes/basics/template-hierarchy/)

## Hooks
  ***Listening to events and map actions to them***

  __Action Hooks__: An action interrupts the code flow to do something, and then returns back to the normal flow without modifying anything.
  - ref: [https://developer.wordpress.org/plugins/hooks/actions/](https://developer.wordpress.org/plugins/hooks/actions/)
  - important action hooks
    - init
    - wp_enqueue_scripts
    - widgets_init 
    - after_setup_theme 
    - register_sidebar
    - pre_get_posts: Modifies the default WP_Query object to change default THE LOOP results.
    - customize_register

  __Filter Hooks__: A filter is used to modify something in a specific way so that the modification is then used by code later on.

## Functions
 [https://codex.wordpress.org/Function_Reference](https://codex.wordpress.org/Function_Reference)
 
 __Types:__
- Post, Custom Post Type, Page, Attachment and Bookmarks Functions
- Category, Tag and Taxonomy Functions
- User and Author Functions
- Feed Functions
- Action, Filter, and Plugin Functions
- Theme-Related Functions
  - get_theme_file_path
- Formatting Functions
- Miscellaneous Functions
  - wp_register_scripts
  - wp_enqueue_scripts
  - wp_register_style
  - wp_enqueue_style
- Multisite functions

__Template Tags:__  Template function is a PHP function that performs an action or displays information specific to your blog.
  - Like:
    - get_header(): Includes the header.php template for a theme.
    - get_footer(): Includes the footer.php template for a theme.
    - get_sidebar(): Includes the sidebar.php template for a theme.
    - get_template_part()
    - get_search_form(): Includes the searchform.php template for a theme, if doesnt exist then the defualt one.
    - the_post_thumbnail()\

    Post, Post Thumbnail, Author, Navigation Menu, Link, Comment, Category, Bookmark, General

    ref: [https://developer.wordpress.org/themes/references/list-of-template-tags/](https://developer.wordpress.org/themes/references/list-of-template-tags/)

__Other Important Functions__:\
  - get_theme_file_path(): provide absolute path for the current template file
  - script registering: (check core registered scripts)
    ```php
      wp_register_scripts()
      wp_enqueue_scripts()
      wp_register_style()
      wp_enqueue_style()
    ```
- wp_head(): Prints scripts or data in the head tag on the front end.
- wp_footer(): Prints scripts or data

- register_nav_menus()
- register_sidebar()
- wp_nav_menu()
- get_theme_mod()

## Theme Features
***Wordpress makes some additional blog functionality available, which need to be activated by the developer***

Ref: [https://codex.wordpress.org/Theme_Features](https://codex.wordpress.org/Theme_Features)

Like:
- __Theme Logo__
- __Sidebars__
- __Navigation Menus__
- Content Width
- Automatic Feed Links
- Custom Backgrounds
- Custom Headers
- Post Thumbnails
- Post Formats
- Title Tag
- Editor Style
- Theme Markup

__Additional features need to be activated at the event/action ***"after setup theme"***__

```php
add_theme_support( 'title-tag' );
add_theme_support( 'custom-logo', array(
    'height' => 480,
    'width'  => 720,
) );
```

## THE LOOP
***THE LOOP loops through each post retrieved for the current page one at a time and performs the action specified in your theme.***
```php
  if ( have_posts() ) {
    while ( have_posts() ) {
        the_post(); ?>
        <h2><?php the_title(); ?></h2>
        <?php the_content(); ?>
    <?php }
}
```
- __The Loop must always begin with the same if and while statements, as mentioned above and must end with the same end statements.__\
- __Important LOOP Functions / Variables__
  - $post: Contains properties of the current post. 
  - have_post()
  - the_post(): Iterate the post index in the loop.
  - [what the loop can display](https://developer.wordpress.org/themes/basics/the-loop/#what-the-loop-can-display)
    - the_content()
    - the_author()
    - the_category()
    - the_ID()
    - the_title()
    - is_page()
    - is_single()
    - rewind_posts()
    - wp_reset_postdata()
    - ...

## Customizer API
Ref: [https://developer.wordpress.org/themes/customize-api/customizer-objects/](https://developer.wordpress.org/themes/customize-api/customizer-objects/)\
$wp_customize-add_setting(): created db value\
$wp_customize-add_control(): creates an input field and maps to the database value\
```php
function ju_social_customizer_section( $wp_customize ){
    $wp_customize->add_setting( 'ju_facebook_handle', [ 
        'default'   =>  ''
    ]);

    $wp_customize->add_section( 'ju_social_section', [
        'title'     =>  __( 'Udemy Social Settings', 'udemy' ),
        'priority'  =>  30,
        'panel'     =>  'udemy'
    ]);

    $wp_customize->add_control(new WP_Customize_Control(
        $wp_customize,
        'ju_social_facebook_input',
        array(
            'label'          => __( 'Facebook Handle', 'udemy' ),
            'section'        => 'ju_social_section',
            'settings'       => 'ju_facebook_handle'
        )
    ));
}

add_action( 'customize_register', 'ju_customize_register' );
```
After this you can call in the template:
```php
  echo get_theme_mod('ju_facebook_handle');
```


## Important Processes

### Register Nav Menus
  __1. Registers navigation menu location__:
  - This should be done at the code where we add support to theme features.
  ```php 
        register_nav_menus(
        // or register_nav_menu
          array(
              // location => description
              'nav-menu' => __('Nav Menu'),
              'footer-menu' => __('Footer Menu'),
          )
      );
  ```
 __2.__ Fill Menu with content on Dashboard

  __3. Generate And Output Nav Menu In HTML__
  - This should be added where we want to have the menu outputted.
  ```php
    wp_nav_menu([
        'items_wrap' => '%3$s',
        'theme_location' =>  'footer-menu',
        'container' =>  false,
        'walker' => $footerWalker
    ]);
  ```


  ### Create Walkers

  ### Create Sidebars / Widget Areas

  __1. Register Sidebars / Widget Areas__
  - register_sidebar function registers a widget area, makes available in the admin area, where it can be filled with widgets.
  - Should be executed in the "widgets_init" action
  ```php
      register_sidebar([
        'name'          =>  __('Au Main Desktop Sidebar', 'au'),
        'id'            =>  'au_main_desktop_sidebar',
        'description'   =>  __('Desktop Sidebar for Austria Recruitmnet theme', 'au'),
        'before_widget' =>  '<div id="%1$s" class="main-desktop-sidebar %2$s">',
        'after_widget'  =>  '</div>',
        'before_title'  =>  '<h4>',
        'after_title'   =>  '</h4>'
    ]);

    register_sidebar([
      'name'          =>  __('Au Bottom Mobile Widget Area', 'au'),
      'id'            =>  'au_bottom_mobile_widget_area',
      'description'   =>  __('Mobile widget area to bootom for Austria Recruitmnet theme', 'au'),
      'before_widget' =>  '<div id="%1$s" class="bottom_mobile_widget_area %2$s">',
      'after_widget'  =>  '</div>',
      'before_title'  =>  '<h4>',
      'after_title'   =>  '</h4>'
    ]);
  ```
  __2.__ Filling sidebar with widgets on dashboard

  3. __Output Sidebar In HTML__

  ```php 
    if (is_active_sidebar('au_main_desktop_sidebar')) {
      dynamic_sidebar('au_main_desktop_sidebar');
    }
  ```

  ### Create Search Form Template: [https://codex.wordpress.org/Creating_a_Search_Page](https://codex.wordpress.org/Creating_a_Search_Page)
  __1. Create searchform.php__
  ```html
    <form id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <input type="text" class="search-field" name="s" placeholder="Search" value="<?php echo get_search_query(); ?>">
    <input type="hidden" name="post_type[]" value="book" />
    <input type="hidden" name="post_type[]" value="magazine" />
    <input type="hidden" name="post_type[]" value="ebook" />
    <input type="hidden" name="post_type[]" value="pdf" />
    <input type="submit" value="Search">
</form>
  ```
  A searchform needs to have:
  - form tag method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>"
  - input field name="s"

  __2. Output Sidebar In HTML__: Put searchform into widget area or get_search_form().

  ### Pagination
  ref: [https://developer.wordpress.org/themes/functionality/pagination/](https://developer.wordpress.org/themes/functionality/pagination/)

  ### Commenting

  ### WP_Query

  *** The LOOP uses WP_Query under the hood ***

  __usage:__
  ```php
  // $args => https://developer.wordpress.org/reference/classes/wp_query/#parameters
  $the_query = new WP_Query( $args );
  
  // The Loop
  if ( $the_query->have_posts() ) {
      echo '<ul>';
      while ( $the_query->have_posts() ) {
          $the_query->the_post();
          echo '<li>' . get_the_title() . '</li>';
      }
      echo '</ul>';
  } else {
      // no posts found
  }
  /* Restore original Post Data */
  wp_reset_postdata();
  ```
  ### WP Setup Stepps
  - Create new admin user delete automatic one
  ### Misc
   - wordpress post types

### Database
wp_users
wp_usermeta
wp_options
wp_posts
wp_terms
wp_termmeta
wp_term_relationship term and object relationship
wp_term_taxonomy term & taxonomy relationships
wp_comments
wp_commentmeta

```sql
SELECT * FROM `wp_term_taxonomy` inner join wp_terms on wp_terms.term_id = wp_term_taxonomy.term_taxonomy_id WHERE taxonomy = "pa_szerelesi-mod";

-- get terms of attribute taxonomy
SELECT *
FROM `wp_term_taxonomy`
INNER JOIN wp_terms ON wp_terms.term_id = wp_term_taxonomy.term_taxonomy_id
WHERE taxonomy = "pa_szerelesi-mod"

-- get important details of certain taxonomy terms
SELECT wp_term_taxonomy.term_taxonomy_id, wp_terms.term_id, `slug`
FROM `wp_term_taxonomy`
INNER JOIN wp_terms ON wp_terms.term_id = wp_term_taxonomy.term_taxonomy_id
WHERE slug
IN (
"furdoszoba-szoba", "konyha-szoba", "nappali-szoba", "terasz-szoba"
)
LIMIT 0 , 30

-- select posts armed with a certain taxonomy
SELECT *
FROM wp_posts
INNER JOIN wp_term_relationships ON wp_term_relationships.object_id = wp_posts.ID
WHERE wp_term_relationships.term_taxonomy_id = 2416
LIMIT 0 , 30

SELECT *
FROM `wp_posts`
WHERE post_title = 'KLUDI AMBA egykaros mosdócsap NA 15'
LIMIT 0 , 30

-- select all taxonomies of a post
SELECT wp_term_taxonomy.term_taxonomy_id, wp_terms.term_id, `slug`
FROM wp_posts
INNER JOIN wp_term_relationships ON wp_term_relationships.object_id = wp_posts.ID
INNER JOIN wp_term_taxonomy ON wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id
INNER JOIN wp_terms ON wp_terms.term_id = wp_term_taxonomy.term_taxonomy_id
WHERE ID = 3848
LIMIT 0 , 30

SELECT COUNT( post_title ) AS numberOfPostsInTaxonomy
FROM wp_posts
INNER JOIN wp_term_relationships ON wp_term_relationships.object_id = wp_posts.ID
INNER JOIN wp_term_taxonomy ON wp_term_taxonomy.term_taxonomy_id = wp_term_relationships.term_taxonomy_id
INNER JOIN wp_terms ON wp_terms.term_id = wp_term_taxonomy.term_taxonomy_id
WHERE slug = "egylyukas"

SELECT * FROM wp_terms INNER JOIN wp_term_taxonomy ON wp_term_taxonomy.term_taxonomy_id = wp_terms.term_id WHERE slug = "egylyukas";

-- get the categories term_id id
SELECT *
FROM wp_terms
INNER JOIN wp_term_taxonomy ON wp_terms.term_id = wp_term_taxonomy.term_id
AND wp_term_taxonomy.taxonomy = "product_cat"
WHERE wp_terms.slug LIKE '%laufen%'
LIMIT 0 , 30

-- get products of a certain category
SELECT *
FROM wp_term_relationships
INNER JOIN wp_term_taxonomy ON wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id
AND wp_term_taxonomy.term_id = 3954
INNER JOIN wp_posts ON wp_posts.ID = wp_term_relationships.object_id
LIMIT 0 , 30

-- get the values of an attribute/term
SELECT *
FROM `wp_term_taxonomy`
INNER JOIN wp_terms ON wp_term_taxonomy.term_id = wp_terms.term_id
WHERE wp_term_taxonomy.taxonomy = 'pa_gyartasi-szam'
LIMIT 0 , 30

select 
	wp_posts.ID AS 'Azonosító', 
  wp_posts.post_name AS 'Név', 
  wp_wc_product_meta_lookup.sku AS 'Cikkszám'
from wp_posts
inner join wp_wc_product_meta_lookup
ON wp_wc_product_meta_lookup.product_id = wp_posts.ID
where product_id in (
14196,
14210,
14219,
14244,
14267,
14342,
14375,
14385,
14417,
14459
)

-- get product update table
select 
	wp_posts.ID AS 'Azonosító', 
  wp_posts.post_name AS 'Név', 
  wp_wc_product_meta_lookup.sku AS 'Cikkszám',
  gyartasi_szam,
  regular_price,
  price
from wp_posts
left join wp_wc_product_meta_lookup
ON wp_wc_product_meta_lookup.product_id = wp_posts.ID
left join (
	SELECT 
		object_id,
        	name as 'gyartasi_szam',
        	wp_terms.term_id as 'term_id',
        	wp_term_taxonomy.term_taxonomy_id as 'term_taxonomy_id'
	FROM `wp_term_taxonomy`
	INNER JOIN wp_terms ON wp_term_taxonomy.term_id = wp_terms.term_id
	inner join wp_term_relationships 
	on wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id
	and wp_term_taxonomy.taxonomy = 'pa_gyartasi-szam'
) as gyartasi_szamok
on wp_posts.ID = gyartasi_szamok.object_id
left join (
	SELECT post_id as 'object_id', meta_value as 'regular_price' FROM `wp_postmeta` WHERE meta_key = '_regular_price'
) as regular_prices
on wp_posts.ID = regular_prices.object_id
left join (
	SELECT post_id as 'object_id', meta_value as 'price' FROM `wp_postmeta` WHERE meta_key = '_regular_price'
) as prices
on wp_posts.ID = prices.object_id
where wp_posts.ID in (
	14196,
14210,
14219,
14244,
14267,
14342,
14375,
14385,
14417,
14459,
14478,
14493,
14511,
14543,
14562,
14565,
14589,
14593,
14609,
14620,
14625,
14629,
14637,
14641,
14644,
14647,
14650,
14655,
14658,
14660,
14662,
14664,
14670,
14675,
14679,
14683,
14695,
14708,
14712,
14725,
14341,
14340,
14339,
14246,
14245,
14289,
14288,
14287,
14286,
14285,
14284,
14344,
14343,
14379,
14380,
14381,
14376,
14377,
14378,
14416,
14414,
14413,
14412,
14411,
14410,
14409,
14408,
14407,
14406,
14405,
14404,
14403,
14401,
14400,
14399,
14398,
14397,
14458,
14457,
14456,
14455,
14454,
14453,
14452,
14451,
14450,
14449,
14448,
14446,
14444,
14442,
14441,
14440,
14439,
14428,
14462,
14461,
14460,
14481,
14480,
14479,
14496,
14495,
14514,
14513,
14512,
14591,
14590,
14597,
14596,
14610,
14611,
14621,
14622,
14626,
14627,
14630,
14631,
14638,
14639,
14677,
14676,
14687,
14686,
14685,
14684,
14702,
14701,
14700,
14711,
14710,
14720,
14719,
14718,
14717,
14716,
14715,
14729,
14728,
14727,
14726
)
```

## Wordpress speed up
### db speedup
 - delete junk, and unused tables => wp-optimise
 - if plugins use modules then disable the ones you dont use => pl:rank math analytitcs

### less request on load
- delete slow plugins => query monitor
- if plugins use modules then disable the ones you dont use => pl:rank math analytitcs

### faster file delivery
- server level caching

### save server resources
- reduce heartbeat api
- limit post revisions
 ```php 
 define('WP_POST_REVISIONS', 5);
 define('AUTOSAVE_INTERVAL', 200);
 ```
 - remove post revisions periodically => wp-rocket, wp-omptimize
 - hide login page from bots
 - replace wp cron with cron job
<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'sdeli' );

/** MySQL database password */
define( 'DB_PASSWORD', 'sdeli' );

/** MySQL hostname */
define( 'DB_HOST', '192.168.64.3' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.UB!L-T=W2@5,mv]Votq0z/I!pN[@nT(>I4h!c)HGCMz-VC~oRLbGs4[Na Wee@h' );
define( 'SECURE_AUTH_KEY',  '/rv+S8s5Y_b][7^PS?;.ZDDtj1xC:uHK.Lo)1Hr7ZRPwmqphwLM(GBG`7E]<o+ep' );
define( 'LOGGED_IN_KEY',    '@@]OOn:&|S~Uu8^tZBLg.F[ )Tt| :Mxm4 %dQmy^aYxh*lF`mWLPKeoCM1k**tc' );
define( 'NONCE_KEY',        'eXztJJSal*MaWXIz9w4~F0v.-ojO;RB.|E~]*C z8)EJ:$R?6trTpla<`A)X^wke' );
define( 'AUTH_SALT',        '851wtk9y2@o6 3KNGXzql_/,ELqvj@|80qTmMR6T16Y6*ibr,vUFG)JaaRwr>*y/' );
define( 'SECURE_AUTH_SALT', 'zNNWy2L&|9|U<h4y4qvYs=-QQqg2}^U=U_]RQs@q&]9yP%%TE=*[lio>{d6phg_5' );
define( 'LOGGED_IN_SALT',   'P<^AzF;*cZ)oC8~W8-DZs]iR@r0O8HhW!|:2f5fyy?9PJp9aO!bQM1B>s|R:e/n8' );
define( 'NONCE_SALT',       'B4 p#B;@W&fs~|B9+(G%>%O1EO`qSz2*U2veih7FeJ;`q=V0qTA2]jzm[TZoJD?R' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

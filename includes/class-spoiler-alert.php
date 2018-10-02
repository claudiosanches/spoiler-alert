<?php
/**
 * Spoiler Alert main class
 *
 * @package Spoiler_Alert
 */

defined( 'ABSPATH' ) || exit;

/**
 * Spoiler alert class.
 */
class Spoiler_Alert {

	/**
	 * Init class.
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'register_blocks' ) );
	}

	/**
	 * Register editor blocks.
	 */
	public static function register_blocks() {
		wp_register_script(
			'spoiler-alert',
			plugins_url( 'dist/index.js', SPOILER_ALERT_PLUGIN_FILE ),
			array( 'wp-block' ),
			SPOILER_ALERT_VERSION,
			false
		);

		register_block_type( 'spoiler-alert/spoiler-alert', array( 'editor_script' => 'spoiler-alert' ) );
	}
}

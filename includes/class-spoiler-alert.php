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
		add_action( 'init', array( __CLASS__, 'load_textdomain' ) );
	}

	/**
	 * Register editor blocks.
	 */
	public static function register_blocks() {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		wp_register_script(
			'spoiler-alert',
			plugins_url( 'dist/index.js', SPOILER_ALERT_PLUGIN_FILE ),
			array( 'wp-blocks', 'wp-editor', 'wp-element', 'wp-components' ),
			SPOILER_ALERT_VERSION,
			false
		);

		register_block_type( 'spoiler-alert/spoiler-alert', array( 'editor_script' => 'spoiler-alert' ) );
	}

	/**
	 * Load textdomain.
	 */
	public static function load_textdomain() {
		load_plugin_textdomain( 'spoiler-alert', false, dirname( plugin_basename( SPOILER_ALERT_PLUGIN_FILE ) ) . '/languages' );
	}
}

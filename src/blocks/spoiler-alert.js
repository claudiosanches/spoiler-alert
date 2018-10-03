const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { SelectControl, TextControl } = wp.components;
const { __ } = wp.i18n;

/**
 * Spoiler alert block.
 */
registerBlockType( 'spoiler-alert/spoiler-alert', {
    title: __( 'Spoiler Alert' ),
    description: '',
    icon: 'hidden',
    category: 'common',
    attributes: {
        type: {
            type: 'string',
            default: 'none'
		},
		alertText: {
			type: 'string',
			default: ''
		}
    },

	/**
	 * Block edit.
	 *
	 * @param {Object} props Properties.
	 */
	edit( props ) {

		/**
		 * Update type attribute.
		 *
		 * @param {String} newType New type value.
		 */
        function updateStatusAttribute( newType ) {
			let defaultAlerts = {
				none: __( 'Spoiler' ),
				mild: __( 'Mild Spoiler' ),
				moderate: __( 'Moderated Spoiler' ),
				insane: __( 'Insane Spoiler' )
			};

            props.setAttributes({
                type: newType
			});

			// Update alertText with default values.
			if ( '' === props.attributes.alertText || Object.values( defaultAlerts ).includes( props.attributes.alertText ) ) {
				props.setAttributes({
					alertText: defaultAlerts[ newType ]
				});
			}
		}

		/**
		 * Update alert text.
		 *
		 * @param {String} newText
		 */
		function updateAlertTextAttribute( newText ) {
			props.setAttributes({
				alertText: newText
			});
		}

		return (
            <div>
                <InspectorControls>
                    <SelectControl
                        label={ __( 'Spoiler Alert' ) }
                        value={ props.attributes.type }
                        options={[
							{ label: __( 'None' ), value: 'none' },
							{ label: __( 'Mild' ), value: 'mild' },
							{ label: __( 'Moderate' ), value: 'moderate' },
							{ label: __( 'Insane' ), value: 'insane' }
                        ]}
                        onChange={ updateStatusAttribute }
                    />
					<TextControl
						label={ __( 'Alert text' ) }
						value={ props.attributes.alertText }
						onChange={ updateAlertTextAttribute }
					/>
                </InspectorControls>
				<div className={ 'spoiler-alert is-' + props.attributes.type }>
					<p className='spoiler-alert__message'><span>{ props.attributes.alertText }</span></p>
					<div className='spoiler-alert__content'>
						<InnerBlocks allowedBlocks={ [ 'core/image', 'core/paragraph' ] } />
					</div>
				</div>
            </div>
		);
	},

	/**
	 * Save block content.
	 *
	 * @param {Object} props Properties.
	 */
	save( props ) {
		return (
			<div className={ 'spoiler-alert is-' + props.attributes.type }>
				<p className='spoiler-alert__message'><span>{ props.attributes.alertText }</span></p>
				<p className='spoiler-alert__expander'>
					<button>{ __( 'Click to reveal' ) }</button>
				</p>
				<div className='spoiler-alert__content'>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
} );

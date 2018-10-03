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
            default: 'mild'
		},
		alertText: {
			type: 'string',
			default: __( 'Mild Spoiler' )
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
				mild: __( 'Mild Spoiler' ),
				moderate: __( 'Moderated Spoiler' ),
				insane: __( 'Insane Spoiler' )
			};
			let alertMessages = Object.values( defaultAlerts );

            props.setAttributes({
                type: newType
			});

			// Update alertText with default values.
			if (
				'' === props.attributes.alertText
				||
				alertMessages.includes( props.attributes.alertText ) )
			{
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
					<p className='spoiler-alert__message'>
						<span>{ props.attributes.alertText }</span>
					</p>
					<div className='spoiler-alert__content'>
						<InnerBlocks
							allowedBlocks={ [
								'core/image',
								'core/paragraph',
								'core/quote',
								'core/list',
								'core/video'
							] }
						/>
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
				<p className='spoiler-alert__message'>
					<span>{ props.attributes.alertText }</span>
				</p>
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

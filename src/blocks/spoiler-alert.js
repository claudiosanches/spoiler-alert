const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { SelectControl } = wp.components;
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
        status: {
            type: 'string',
            default: 'none'
        }
    },

	/**
	 * Block edit.
	 *
	 * @param {Object} props Properties.
	 */
	edit( props ) {

		/**
		 * Update status attribute.
		 *
		 * @param {String} newStatus New status value.
		 */
        function updateStatusAttribute( newStatus ) {
            props.setAttributes({
                status: newStatus
            });
        }

		return (
            <div>
                <InspectorControls>
                    <SelectControl
                        label={ __( 'Spoiler Alert' ) }
                        value={ props.attributes.status }
                        options={[
							{ label: __( 'None' ), value: 'none' },
							{ label: __( 'Mild' ), value: 'mild' },
							{ label: __( 'Moderate' ), value: 'moderate' },
							{ label: __( 'Insane' ), value: 'insane' }
                        ]}
                        onChange = { updateStatusAttribute }
                    />
                </InspectorControls>
                <div className={ 'spoiler-alert is-' + props.attributes.status }>
                    <InnerBlocks
                        allowedBlocks={ [ 'core/image', 'core/paragraph' ] }
                    />
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
		function getAlertText( status ) {
			let message = {
				none: __( 'Spoiler' ),
				mild: __( 'Mild Spoiler' ),
				moderate: __( 'Moderated Spoiler' ),
				insane: __( 'Insane Spoiler' )
			};

			return message[ status ];
		}

		return (
			<div className={ 'spoiler-alert is-' + props.attributes.status }>
				<p className='spoiler-alert__message'><i></i> { getAlertText( props.attributes.status ) }</p>
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

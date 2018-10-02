const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { SelectControl } = wp.components;

import './style.css';

/**
 * Spoiler alert block.
 */
registerBlockType( 'spoiler-alert/spoiler-alert', {
    title: 'Spoiler Alert',
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
                        label='Spoiler Level'
                        value={ props.attributes.status }
                        options={[
							{ label: 'None', value: 'none' },
							{ label: 'Mild', value: 'mild' },
							{ label: 'Moderate', value: 'moderate' },
							{ label: 'Insane', value: 'insane' }
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
		return (
			<div className={ 'spoiler-alert is-' + props.attributes.status }>
				<InnerBlocks.Content />
			</div>
		);
	}
} );

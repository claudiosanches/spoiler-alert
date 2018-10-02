const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { SelectControl } = wp.components;

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

	edit( props ) {

        function updateStatusAttribute( newVal ) {
            props.setAttributes({
                status: newVal
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
                <div className={ props.attributes.status }>
                    <InnerBlocks
                        allowedBlocks={ [ 'core/image', 'core/paragraph' ] }
                    />
                </div>
            </div>
		);
	},

	save() {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	}
} );

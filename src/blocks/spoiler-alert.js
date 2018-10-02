const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { SelectControl } = wp.components;

registerBlockType( 'spoiler-alert/spoiler-alert', {

    title: "Spoiler Alert",

    description: "",

    icon: "hidden",

    category: "common",

	edit( { className } ) {
		return (
			<div className={ className }>
				<InnerBlocks
					allowedBlocks={ [ 'core/image', 'core/paragraph' ] }
				/>
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

const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { SelectControl } = wp.components;

registerBlockType( 'spoiler-alert/spoiler-alert', {


	edit( { className } ) {
		return (
			<div className={ className }>
				<InnerBlocks />
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

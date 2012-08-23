enyo.kind({
	name: "mochi.sample.InputSample",
	classes: "mochi mochi-sample",
	components: [
		{classes: "mochi-subheader", content: "Inputs"},
		{classes: "mochi-toolbar-inline", components: [
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.Input", placeholder: "Enter text here", onchange:"inputChanged"}
			]},
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.Input", placeholder: "Search term", onchange:"inputChanged"},
				{kind: "Image", src: "assets/search-input-search.png"}
			]},
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.Input", type:"password", placeholder: "Enter password", onchange:"inputChanged"}
			]}
		]},
		{classes: "mochi-toolbar-inline", components: [
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.Input", disabled: true, value: "Disabled input"}
			]},
/*			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.Input", defaultFocus: true, value: "Focused input", onchange:"inputChanged"}
			]},
*/			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.Input", style: "text-align:right;", value: "Right-aligned", onchange:"inputChanged"}
			]}
		]},
		{tag: "br"},
		{classes: "mochi-subheader", content: "RichTexts"},
		{classes: "mochi-toolbar-inline", components: [
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.RichText", style: "width: 200px;", placeholder: "Enter text here", onchange:"inputChanged"}
			]},
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.RichText", style: "width: 200px;", placeholder: "Search term", onchange:"inputChanged"},
				{kind: "Image", src: "assets/search-input-search.png"}
			]}
		]},
		{tag: "br"},
		{classes: "mochi-subheader", content: "TextAreas"},
		{classes: "mochi-toolbar-inline", components: [
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.TextArea", placeholder: "Enter text here", onchange:"inputChanged"}
			]},
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.TextArea", placeholder: "Search term", onchange:"inputChanged"},
				{kind: "Image", src: "assets/search-input-search.png"}
			]},
			{kind: "mochi.InputDecorator", components: [
				{kind: "mochi.TextArea", placeholder: "Disabled TextArea", onchange:"inputChanged", disabled: true}
			]},
		]}
		/*
		{tag: "br"},
		{kind: "mochi.Groupbox", classes:"mochi-sample-result-box", components: [
			{kind: "mochi.GroupboxHeader", content: "Result"},
			{name:"result", classes:"mochi-sample-result", content:"No input entered yet."}
		]}
		*/
	],
	inputChanged: function(inSender, inEvent) {
		//this.$.result.setContent("Input: " + inSender.getValue());
	}
});

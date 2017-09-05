var MainViewModel = function()
{
	this.snippets = ko.observableArray([]);
	this.snippetTypes = 
	[
		new SnippetType("Expansion", "Allows the code snippet to be inserted at the cursor.", "Expansion"),
		new SnippetType("Surrounds With", "Allows the code snippet to be placed around a selected piece of code.", "SurroundsWith")
	];
	this.output = ko.observable();
	
	this.addSnippet = function()
	{
		this.snippets.push(new Snippet());
	}
	
	this.removeSnippet = function(snippet)
	{
		this.snippets.remove(snippet);
	}

	this.saveSnippets = function()
	{
		var template = $('#outputTemplate');
		var templateText = template.html();
		var rendered = Mustache.render(templateText, this);
		this.output(rendered);
		//var blob = new Blob([rendered], {type: "text/xml;charset=utf-8"});
		var blob = new Blob([rendered], {type: "application/xml;"});
		saveAs(blob, "snippetOutput.snippet");

		// $.get
		// (
		// 	'templates/output.mst',
		// 	function(template)
		// 	{
		// 		var rendered = Mustache.render(template, this);
		// 		output(rendered);
		// 	}
	}
}

var SnippetType = function(name, description, value)
{
	this.name = name;
	this.description = description;
	this.value = value;
}

var Snippet = function()
{
	this.id = GenerateUniqueID();
	this.title = ko.observable("Title");
	this.description = ko.observable("Description");
	this.snippetTypes = ko.observableArray([]);
	this.snippetCode = ko.observable(null);
}

var GenerateUniqueID = 
(
	function()
	{
		var id = 0;
		return function(){return id++;};
	}
)();
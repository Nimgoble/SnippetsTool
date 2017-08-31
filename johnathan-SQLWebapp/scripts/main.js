var MainViewModel = function()
{
	this.snippets = ko.observableArray([]);
	this.snippetTypes = 
	[
		new SnippetType("Expansion", "Allows the code snippet to be inserted at the cursor.", "Expansion"),
		new SnippetType("Surrounds With", "Allows the code snippet to be placed around a selected piece of code.", "SurroundsWith")
	];
	
	this.addSnippet = function()
	{
		this.snippets.push(new Snippet());
	}
	
	this.removeSnippet = function(snippet)
	{
		this.snippets.remove(snippet);
	}
	
	this.snippetAfterRender = function()
	{
		// var newOnes = $(".codeeditor:not(:has(.CodeMirror))").each
		// (
		// 	function(index, obj)
		// 	{
		// 		var editor = CodeMirror(obj,
		// 		{
		// 			mode: "text/x-mssql",
		// 			theme: "base16-light",
		// 			smartIndent: true,
		// 			tabSize: 4,
		// 			language: "sql",
		// 			lineNumbers: true
		// 		});
		// 	}
		// );
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
	this.title = ko.observable("Title");
	this.description = ko.observable("Description");
	this.snippetTypes = ko.observableArray([]);
	this.snippetCode = ko.observable(null).withPausing();
}
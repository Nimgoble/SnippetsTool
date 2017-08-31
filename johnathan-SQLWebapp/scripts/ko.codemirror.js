// Knockout codemirror binding handler
ko.bindingHandlers.codemirror = 
{
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) 
    {
        alert('init');
        var value = valueAccessor();
        //var unwrapped = ko.unwrap();
        var unwrapped = ko.utils.unwrapObservable(valueAccessor());
        var options = viewModel.options || {};
        options.value = ko.unwrap(valueAccessor());
        var editor = CodeMirror(element, options);

        editor.on
        (
            'change', 
            function(cm) 
            {
                var value = valueAccessor();
                value(cm.getValue());
            }
        );

        element.editor = editor;
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) 
    {
        alert('update');
        var observedValue = ko.unwrap(valueAccessor());
        if (element.editor) 
        {
            element.editor.setValue(observedValue);
            element.editor.refresh();
        }
    }
};

// Knockout codemirror binding handler
ko.bindingHandlers.codemirror = 
{
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) 
    {
        var options = valueAccessor();
        options.codeMirrorOptions.value = ko.utils.unwrapObservable(options.binding) || '';
        var editor = CodeMirror(element, options.codeMirrorOptions);

        editor.on
        (
            'change', 
            function(cm) 
            {
                var options = valueAccessor();
                options.binding(cm.getValue());
            }
        );

        element.editor = editor;
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) 
    {
        var options = valueAccessor();
        var observedValue = ko.unwrap(options.binding) || '';
        if (element.editor) 
        {
            var cursorPos = element.editor.getCursor();
            element.editor.setValue(observedValue);
            element.editor.setCursor(cursorPos);
        }
    }
};

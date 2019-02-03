# javascript-interface
method that simulates the way interfaces work in Java made in Javascript

## _implements
this is just a test for how interfaces can be accomplished using Javascript in order to use it
`_implements(ClassName, InterfaceArray);`

this InterfaceArray can contain either strings that represent method names
`['calculateArea', 'getWidth']`
or we could use objects that have the name of the method and argumentList if you want the contracted method
to have a specific arguementList

`['calculateArea', {name: 'setRadius', args: ['raduis']}]`

## issues
the way the argument list is checked it's not fully implemented also there isn't any type checking so it's just a basic implementation/ test for how to accomplish interfaces in JavaScript

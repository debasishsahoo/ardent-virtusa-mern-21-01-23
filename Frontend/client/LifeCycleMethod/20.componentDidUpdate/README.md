---
noteId: 'b7071a90eeff11ec8532e34afff9c9b4'
tags: []
---

# componentDidUpdate

The componentDidUpdate method is called after the component is updated in the DOM.

componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

componentDidUpdate(prevProps, prevState, snapshot)

# You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and the color becomes "yellow".

This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element:

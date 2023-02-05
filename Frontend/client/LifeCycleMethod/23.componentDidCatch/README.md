---
noteId: 'deefc050ef4c11eca78f5742a794b40c'
tags: []
---

# componentDidCatch

The componentDidCatch() method is invoked if some error occurs during the rendering phase of any lifecycle methods or any children components. This method is used to implement the Error Boundaries for the React application. It is called during the commit phase, so unlike getDerivedStateFromError() which was called during the render phase, side-effects are allowed in this method. This method is also used to log errors.

What makes a component an Error Boundary is a lifecycle method called componentDidCatch. When a component implements this method it automatically becomes an Error Boundary and can handle errors emitted in a child’s render().

Here is the signature for componentDidCatch:

    componentDidCatch(error, errorInfo)

The method has two arguments:

- error: the actual error message that tells you what went wrong
- errorInfo: additional details about the error including the stack trace to help you debug the error.

LimitationsError boundaries are great for what they do - catch runtime errors you didn’t expect during rendering. However, there are a few types of errors that aren’t caught, and that you need to deal with in a different way. These include:errors in event handlers (when you click a button for instance)errors in asynchronous callbacks (setTimeout for instance)errors that happen in the error boundary component itselferrors that occur during server side rendering

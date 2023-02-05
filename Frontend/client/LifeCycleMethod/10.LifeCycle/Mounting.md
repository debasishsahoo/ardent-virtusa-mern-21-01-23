---
noteId: '5aa6ac70eefa11ec8532e34afff9c9b4'
tags: []
---

# Mounting

Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

The render() method is required and will always be called, the others are optional and will be called if you define them.

---
noteId: '721e8440eefa11ec8532e34afff9c9b4'
tags: []
---

# Updating

The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

The render() method is required and will always be called, the others are optional and will be called if you define them.

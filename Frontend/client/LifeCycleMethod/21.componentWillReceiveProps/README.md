---
noteId: '5e65ac10ef0111ec8532e34afff9c9b4'
tags: []
---

# componentWillReceiveProps

The componentWillReceiveProps() is invoked before our mounted React component receives new props. It is called during the updating phase of the React Life-cycle. It is used to update the state in response to some changes in our props. We can’t call this with initial props during mounting because React calls this method only when our component’s props have updated.

The componentWillReceiveProps() method has been deprecated in the latest releases of React as per this issue. It is recommended to use getDerivedStateFromProps() method in its place but if we still want to use componentWillReceiveProps() we can do it by calling it as UNSAFE_componentWillReceiveProps(). It’s not suggested to use this method according to React, that’s why UNSAFE keyword comes at the beginning to give a gentle message to all the React developers to stop using this method. This method can be used when the state of a component depends upon the changes in props.

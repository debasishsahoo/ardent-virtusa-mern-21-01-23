import React from 'react';
import TodoComponent from './Todo/TodoComponent'
import Blog from './Blog/Blog'
import BasicLifeCycleCompnent from './ClassComponentAll/LifteCycle/BasicLifeCycleComponent'
import AdvanceLifeCycleComponent from './ClassComponentAll/LifteCycle/AdvanceLifeCycleComponent'
import LifeCycleConstructor from './ClassComponentAll/Constructor/LifeCycleConstructor'
import LifeCycleDerivedState from './ClassComponentAll/getDrivedStateFromProps/LifeCycleDerivedState'
import LYComponentDidMount from './ClassComponentAll/ComponentDidMount/LYCompnentDidMount'
import LyShouldComponentUpdate from './ClassComponentAll/ShouldComponentUpdate/LyShouldComponentUpdate'
import LyComponentDidUpdate from './ClassComponentAll/componentDidUpdate/LYComponentDidUpdate'

import LyDidCatch from './ClassComponentAll/DidCatch/LyDidCatch'
function App() {
  return (
    <>
      {/* <TodoComponent /> */}
      {/* <Blog /> */}
      {/* <BasicLifeCycleCompnent /> */}

      {/* <AdvanceLifeCycleComponent />*/}

      {/* <LifeCycleConstructor /> */}

      {/* <LifeCycleDerivedState col='yellow' /> */}

      {/* <LYComponentDidMount /> */}
      {/* <LyShouldComponentUpdate /> */}
      {/* <LyComponentDidUpdate /> */}
      <LyDidCatch />
    </>
  );
}

export default App;

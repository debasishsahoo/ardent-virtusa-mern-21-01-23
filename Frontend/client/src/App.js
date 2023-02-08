import React from 'react';
import SetState from './ComponentApi/SetState'
import ForceUpdate from './ComponentApi/ForceUpdate'
import FindDOM from './ComponentApi/FindDomNode'
import DemoHooks from './Hooks/DemoHooks';

function App() {
  return (
    // <>
    //   <SetState />
    //   <br />
    //   <ForceUpdate />
    //   <br />
    //   <FindDOM />
    // </>
    <>
      <DemoHooks />
    </>
  );
}

export default App;

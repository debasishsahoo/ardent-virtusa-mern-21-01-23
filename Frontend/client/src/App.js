import React from 'react';
import SetState from './ComponentApi/SetState'
import ForceUpdate from './ComponentApi/ForceUpdate'
import FindDOM from './ComponentApi/FindDomNode'
import DemoHooks from './Hooks/DemoHooks';
import NestedList from './Problam2/DataList.jsx'
import UseStateHooks1 from './Hooks/UseStateHooks/Example1'
import UseStateHooks2 from './Hooks/UseStateHooks/Example2'
import UseStateHooks3 from './Hooks/UseStateHooks/Example3'
import Problam1 from './Hooks/UseStateHooks/Problam1'
import Problam2 from './Hooks/UseStateHooks/Problam2'
import Problam3 from './Hooks/UseStateHooks/Problam3'
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
      {/* <DemoHooks /> */}
      {/* <NestedList /> */}

      {/* <UseStateHooks1 /> */}
      {/* <UseStateHooks2 /> */}
      {/* <UseStateHooks3 /> */}

      {/* <Problam1 /> */}

      {/* <Problam2 /> */}

      <Problam3 />
    </>
  );
}

export default App;

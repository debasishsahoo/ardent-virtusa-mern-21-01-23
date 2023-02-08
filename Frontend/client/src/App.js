import React from 'react';
import SetState from './ComponentApi/SetState'
import ForceUpdate from './ComponentApi/ForceUpdate'
import FindDOM from './ComponentApi/FindDomNode'

function App() {
  return (
    <>
      <SetState />
      <br />
      <ForceUpdate />
      <br />
      <FindDOM />
    </>
  );
}

export default App;

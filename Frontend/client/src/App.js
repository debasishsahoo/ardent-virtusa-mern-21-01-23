import React from 'react';
//IF Condition
import If_Statement from './Cond1/if_Statement';
import DemoAuth from './Cond1/DemoAuth';



function App() {


  return (
    <>
      {/* <If_Statement isGreeting={false} /> */}
      <DemoAuth isloggedin={false} />
    </>
  );
}

export default App;

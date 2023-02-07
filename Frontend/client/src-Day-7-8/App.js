import React from 'react';
//IF Condition
import If_Statement from './Cond1/if_Statement';
import DemoAuth from './Cond1/DemoAuth';
import Garage from './Cond1/LogicalANDOpr'
import SwitchCase from './Cond1/SwitchCase';
import CondEnum from './Cond1/CondEnum';
import PackingList from './Cond2/PackingList';
import Auth from './Cond2/StatefullComponent'
import Tweet from './Cond3/Tweet';



function App() {


  return (
    <>
      {/* <If_Statement isGreeting={false} /> */}
      {/* <DemoAuth isloggedin={false} /> */}

      {/* <Garage car={['BMW', "AUDI"]} />*/}

      {/* <SwitchCase role={'User'} / > */}
      {/* <CondEnum state={'abc'} /> */}

      {/* <PackingList /> */}

      {/* <Auth /> */}

      <Tweet />



    </>
  );
}

export default App;

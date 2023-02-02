import React from 'react';
import SingleProps from './Props/SingleProps';
import MultipleProps from './Props/MultipleProps'
import ValueProps from './Props/ValueProps';
import PassingTheProps from './Props/PassingTheProps'
import OptionalProps from './Props/OptionalProps'
import PropsSpread from './Props/PropsSpread'

function App() {
  const randomvalue = 34;
  const arr = ['React', 'is', 'Lib'];

  const arr2 = { a: 'React', b: 'is', c: 'Lib' }

  return (
    // <>
    //   <SingleProps data='Single Props' />
    //   <br />
    //   <MultipleProps x='Multiple' y='Props' />
    // </>



    // <>
    //   <ValueProps
    //     stringdata="This a String Data"
    //     templatedata=<p>{`This is template data and value:${randomvalue}`}</p>

    //     numberdata={23}
    //     booldata={false}
    //     objdata={{ name: 'dev' }}
    //     arrdata={['arr1', 'arr2']}
    //     jsxdata={2 + 2 / 3 * 6 - 7 + 8}
    //   />
    //</>

    <>
      <PassingTheProps Students={['dev', 'deb', 'kunal', 'Arnab']} />
      <br />
      <OptionalProps />
      <br />
      <OptionalProps person='debasish' />
      <br />


      <PropsSpread a='React' b='is' c='Lib' />
      <br />
      <PropsSpread {arr} />
      <br />
      <PropsSpread arr2 />
      <br />
      <PropsSpread arr />
      <br />
      <PropsSpread arr2 />

    </>

  );
}

export default App;

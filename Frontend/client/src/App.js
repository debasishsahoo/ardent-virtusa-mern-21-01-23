import React from 'react';
import SingleProps from './Props/SingleProps';
import MultipleProps from './Props/MultipleProps'
import ValueProps from './Props/ValueProps';
import PassingTheProps from './Props/PassingTheProps'
import OptionalProps from './Props/OptionalProps'
import PropsSpread from './Props/PropsSpread'

import Parent from './Relationship/Parent';
import Product from './Product/Product'

import InValidProps from './Validation/InValidProps'
import ValidProps from './Validation/ValidProps'

function App() {
  const randomvalue = 34;

  const arr = ['React', 'is', 'Lib'];

  const obj = { a: 'React', b: 'is', c: 'Lib', b: 'js' }

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

    // <>
    //   <PassingTheProps Students={['dev', 'deb', 'kunal', 'Arnab']} />
    //   <br />
    //   <OptionalProps />
    //   <br />
    //   <OptionalProps person='debasish' />
    //   <br />


    //   <PropsSpread a='React' b='is' c='Lib' />
    //   <br />
    //   <h5>only Array is not woking (No key is there)</h5>
    //   <PropsSpread arr />
    //   <br />
    //   <h5>only Object is not woking</h5>
    //   <PropsSpread obj />
    //   <h5> Array with spread is not woking (No key is there)</h5>
    //   <PropsSpread {...arr} />
    //   <br />
    //   <h5>only Object is woking with spread</h5>
    //   <PropsSpread {...obj} />
    //   <br />


    //   <PropsSpread a={arr[0]} b={arr[1]} c={arr[2]} />
    //   <br />
    //   <PropsSpread a={obj.a} b={obj.b} c={obj.c} />

    // </>



    // <Product />

    // <InValidProps />

    <ValidProps />


  );
}

export default App;

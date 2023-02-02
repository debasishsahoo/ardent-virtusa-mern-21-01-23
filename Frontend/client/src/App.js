import React from 'react';
import SingleProps from './Props/SingleProps';
import MultipleProps from './Props/MultipleProps'
import ValueProps from './Props/ValueProps';

function App() {
  const randomvalue = 34;

  return (
    // <>
    //   <SingleProps data='Single Props' />
    //   <br />
    //   <MultipleProps x='Multiple' y='Props' />
    // </>
    <>
      <ValueProps
        stringdata="This a String Data"
        templatedata=<p>{`This is template data and value:${randomvalue}`}</p>

        numberdata={23}
        booldata={false}
        objdata={{ name: 'dev' }}
        arrdata={['arr1', 'arr2']}
        jsxdata={2 + 2 / 3 * 6 - 7 + 8}
      />

    </>
  );
}

export default App;

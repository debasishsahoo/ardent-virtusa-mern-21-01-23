import React from 'react';
import Card1 from './components/Card1'
import Crad2 from './components/Card2'


function App() {
  return (
    <>
      <Card1
        title='C# Developer'
        img='https://www.w3schools.com/w3css/img_avatar4.png'
        name='Anita Ghosh'
        dept='Backend'
      />
      <br />
      <div className="row">
        <Crad2
          title='REACT'
          txt1='Component'
          txt2='Redux'
        />
        <Crad2
          title='ANGULAR'
          txt1='MODULE'
          txt2='SERVICE'
        />

        <Crad2
          title='VUE'
          txt1='DESIGN'
          txt2='VUEX'
        />
        <Crad2
          title='ES6'
          txt1='MAP()'
          txt2='REDUCE()'
        />




      </div>

      <br />
      <Card1
        title='Angular Developer'
        img='https://www.w3schools.com/howto/img_avatar.png'
        name='Debasish Sahoo'
        dept='Frontend'
      />
      <br />
      <div className="row">
        <Crad2
          title='REACT'
          txt1='Component'
          txt2='Redux'
        />
        <Crad2
          title='ANGULAR'
          txt1='MODULE'
          txt2='SERVICE'
        />

        <Crad2
          title='VUE'
          txt1='DESIGN'
          txt2='VUEX'
        />
        <Crad2
          title='ES6'
          txt1='MAP()'
          txt2='REDUCE()'
        />
      </div>

    </>

  );
}

export default App;

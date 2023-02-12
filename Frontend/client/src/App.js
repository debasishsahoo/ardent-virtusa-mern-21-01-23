import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Gallary from './Components/Gallary'
import ErrorPage from './Components/ErrorPage'


import Student from './Components/Student'


import JEE from './Components/ChildComponents/JEE'
import NEET from './Components/ChildComponents/NEET'


import UserList from './Components/User/UserList'
import UserDatils from './Components/User/UserDatils';
import Admin from './Components/User/admin'




//! import Stu1 from './Components/Student' //Relitaev Path
//! import Stu2 from '../src/Components/Student'
//! import Stu3 from '../../client/src/Components/Student'
//! import Stu4 from '/src/Components/Student'  //Abslute path










import './App.css'

function App() {
  return (
    // <React.Fragment>
    //   <Home />
    //   <br />
    //   <About />
    //   <br />
    //   <Contact />
    //   <br />
    //   <Galary />
    // </React.Fragment>




    //! in webbrowser 'http://localhost:3000' and 'http://localhost:3000/' both are same

    //baseUrl : http://localhost:3000     path= /             Component: home
    //baseUrl : http://localhost:3000     path= /home         Component: home
    //baseUrl : http://localhost:3000     path= /about        Component: about
    //baseUrl : http://localhost:3000     path= /contact      Component: contact
    //baseUrl : http://localhost:3000     path= /gallary      Component: gallary



    //! Basic Router
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/gallary' element={<Gallary />} />
    //     <Route path='*' element={<ErrorPage />} />
    //   </Routes>
    // </BrowserRouter>

    //! Menu Base Router

    //! in react router for a single PATH('/') parent and child both can render
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallary' element={<Gallary />} />
          <Route path='/student' element={<Student />}>
            <Route index element={<JEE />} />
            <Route path='jee' element={<JEE />} />
            <Route path='neet' element={<NEET />} />
          </Route>


          <Route path='userlist' element={<UserList />}>
            <Route path=':userid' element={<UserDatils />} />
            <Route path='admin' element={<Admin />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter >





  );
}

export default App;



//   http://localhost:3000/student/neet

//Baseurl :http://localhost:3000

//path: /student

//subpath: /neet


{/* http://localhost:3000/student//jee */ } //! if we put ('/') in child root then yrl beocomes this

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Gallary from './Components/Gallary'
import ErrorPage from './Components/ErrorPage'
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
        {/* parent router start */}
        <Route path='/' element={<Layout />}>
          {/* child router start */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallary' element={<Gallary />} />
          <Route path='*' element={<ErrorPage />} />
          {/* child router end */}
        </Route>
        {/* parent router end */}







      </Routes>
    </BrowserRouter >





  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Galary from './Components/Galary'
import ErrorPage from './Components/ErrorPage'

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

    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}


        <Route path='/' element={<Layout />} />
        {/* <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='Galary' element={<Galary />} /> */}


        {/* Every time Error Route is called at the Last*/}
        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>





  );
}

export default App;

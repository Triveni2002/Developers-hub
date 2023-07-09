

/*import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';

const App = () => {
    return (
        <div>
            <BrowserRouter>
               <Routes>
                  <Route exact path='/' element={<Home />}/>
               </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;*/


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import Indprofile from './Indprofile';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />}/>
          <Route exact path='/Dashboard' element={<Dashboard />}/>
          <Route exact path='/Myprofile' element={<Myprofile />}/>
          <Route exact path='/Indprofile' element={<Indprofile />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


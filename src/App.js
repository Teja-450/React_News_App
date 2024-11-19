import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

//rcc is the way to create class based components..usingg es7 extension..

export default function  App () {
 //render is a life-cycle method ie  when react loads a component then some series of methods runs
    
    const apikey = process.env.REACT_APP_APIKEY;
    //fetching the api key from .env.local file so that no one can have access to the api key.
    
    const [progress, setProgress] = useState(0);
    return (
      <>
      <BrowserRouter> 
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      /> 
      
      
          <Routes>
            <Route exact path="/"              element={<News setProgress={setProgress} apikey={apikey} key="general"       country="us" category="general"/>} />
            <Route exact path="/business"      element={<News setProgress={setProgress} apikey={apikey} key="business"      country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" country="us" category="entertainment"/>} />
            <Route exact path="/generalhealth" element={<News setProgress={setProgress} apikey={apikey} key="generalhealth" country="us" category="generalhealth"/>} />
            <Route exact path="/science"       element={<News setProgress={setProgress} apikey={apikey} key="science"       country="us" category="science"/>} />
            <Route exact path="/sports"        element={<News setProgress={setProgress} apikey={apikey} key="sports"        country="us" category="sports"/>} />
            <Route exact path="/technology"    element={<News setProgress={setProgress} apikey={apikey} key="technology"    country="us" category="technology"/>} />
            
          </Routes>
      </BrowserRouter>
      </>
    );
}

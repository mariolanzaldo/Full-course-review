// import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import E41 from './pages/E41';
import { Provider } from "react-redux";
import {store} from './redux/store';
import E42 from './pages/E42';
import Gallery from './components/E42/Gallery';
// import { Gallery } from './components/E42/Gallery';



function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/exercise41" element={<E41 />} />
            
            {/* <Route path="/exercise42" element={<E42 />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Gallery id="1" count={3} /> */}
      
    </Provider>
    
  );
}

export default App;

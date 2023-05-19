// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import {store} from './redux/store';
import { Suspense } from 'react';
import Data from './components/Data';


function App(): React.ReactElement {
  return (
    <Provider store={store}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/exercise41" element={<E41 />} />
            
          </Route>
        </Routes>
      </BrowserRouter> */}

<Suspense fallback="loading">
                <Data dataSet="1" caption={"Data set 1"} />
            </Suspense>
      
    </Provider>
    
  );
}

export default App;

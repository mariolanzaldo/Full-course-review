import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import E41 from './pages/E41';
import Navbar from './components/Navbar';
import E42 from './pages/E42';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route path='/exercise41' element={<E41 />} />
            <Route path='/exercise42' element={<E42 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

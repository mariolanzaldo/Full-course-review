import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Gallery from './components/Gallery';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Gallery id="1" count={3} />
    </Provider>
  );
}

export default App;

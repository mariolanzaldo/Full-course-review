import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Gallery from './components/Gallery';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Gallery id="1" count={6} />
    </Provider>
  );
}

export default App;

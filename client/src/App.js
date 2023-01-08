import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './slices/index'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

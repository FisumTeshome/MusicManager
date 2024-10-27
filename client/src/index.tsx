import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import store from './redux/store';      
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();


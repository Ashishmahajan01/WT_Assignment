import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import App16 from './16-may/App16';
import App17 from './17-may/App17';
import App19 from './19-may/App19';
import App20 from './20-may/App20';
import { BrowserRouter } from 'react-router-dom';
import App21 from './21-may/App21';
import { Provider } from 'react-redux';
import store from './21-may/mystore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
     <App21 />
     </Provider>
     </BrowserRouter>
     );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

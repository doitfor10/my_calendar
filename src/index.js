import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; //라우팅을 위해!
import { Provider } from 'react-redux'; //리덕스 연동하기
import store from './redux/configStore'; //store 연결하기 
ReactDOM.render(
  // 스토어 주입
  <Provider store={store}> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

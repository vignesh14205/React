import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//var name=<h1>Hello!</h1>

// var name="React"

// const display=<div><h1>i am jxml {name}</h1><h3>hello!</h3></div>

// var list=<ol start={1} type='A'>
// <li>IT</li>
// <li>CSE</li>
// <li>ECE</li>
// </ol>

// var display=age>18?"Eligible":"Not Eligible"

// const age=19;
// if(age>18)
// {
//   var display=<h1 style={{color:"blue"}}>{"ELIGIBLE"}</h1>;
// }
// else
// {
//   var display="Not Eligible";
// }

// const color=<h1 style={{color:"blue"}}>VANAKAM</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App>
</App>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

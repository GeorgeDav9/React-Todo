import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ReactDOM from 'react-dom';


const data = [
    {
      name: "Sleep",
      id: 123,
      completed: false
    },
    {
      name: "Play Video Games",
      id: 1246,
      completed: false
    },
    {
      name: "Eat",
      id: 1237,
      completed: false
    },
 
  ];
export default data;




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


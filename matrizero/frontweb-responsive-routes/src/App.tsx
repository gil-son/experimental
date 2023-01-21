import './assets/styles/custom.scss';
import './App.css';
import {useState} from 'react';
import { useSelector } from 'react-redux';

import Routes from 'Routes';

function App() {

  let state = useSelector( state => state);
  console.log("...")
  console.log(state);

  

  let [ style, setStyle] = useState("primary");
  var verify =  JSON.stringify(state);
  
  const obj = JSON.parse(verify)
  console.log("..", obj.mystyle.style);
  
  return (
    <span className={`bg-${style}`}>
    <Routes />
    </span>
  );
}

export default App;

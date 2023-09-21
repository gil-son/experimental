import './assets/styles/custom.scss';
import './App.css';
import {useState} from 'react';
import { useSelector } from 'react-redux';

import Routes from 'Routes';

function App() {

  let state = useSelector( state => state);

  let [ style, setStyle] = useState("secondary");
  var verify =  JSON.stringify(state);
  const obj = JSON.parse(verify)
  style = obj.mystyle.style;

  return (
    <div className={`bg-${style}`}>
    <Routes />
    </div>
  );
}

export default App;

import './styles.css';
import 'bootstrap/js/src/collapse.js';
import {useState, useEffect, useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeStyle } from 'redux/slice';
import OnOff from './../../assets/images/on-off.png';
import languagePt from './../../assets/images/pt.png';
import languageEng from './../../assets/images/eng.png';
import { changeLanguage } from 'redux/sliceLanguage';

const Navbar = () => {

  let [ style, setStyle] = useState("secondary");
  let [ language, setLanguage] = useState(true);

  let [ count, setCount] = useState(0);
  let dispatch = useDispatch();
  
  const id = useRef("english"); // nesse caso pode ser o state

  useEffect(() => {
      console.log(window.location.hash)
      if(window.location.hash.slice(1) == id.current){setLanguage(false)}
  });

  const handleStyle = () => {
    if(count % 2 == 0){
      setStyle("secondary")
      console.log(dispatch(changeStyle(style)).payload)
      setCount(count+1)
    }
    if(count % 2 == 1){
      setStyle("primary")
      console.log(dispatch(changeStyle(style)).payload)
      setCount(count+1)
    }
    
  }

  const handleLanguage = () => {
    setLanguage(!language)
    console.log(dispatch(changeLanguage(language)).payload)
  }
  
  /*
  function verifyUrl(){
    if(window.location.hash.slice(1) == "english"){
      setLanguage(false)
      //obj.mylanguage.language = language
      dispatch(changeLanguage(language))
    }
  }
  */

  return (
    <nav className={`navbar navbar-expand-md navbar-dark main-nav border border-white rounded`}>
      <div className="container-fluid">
        {' '}
        {/* previne quebra de linha entre logo e itens */}
        <Link to="/" className="nav-logo-text">
          <h4>Matrizero</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li >
              <NavLink to="/" activeClassName="active" exact>
                {language ? (<>INÍCIO</>) : (<>HOME</>) }
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/sobre" activeClassName="active">
              {language ? (<>SOBRE</>) : (<>ABOUT</>) }
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/contatos" activeClassName="active">
              {language ? (<>CONTATOS</>) : (<>CONTACTS</>) }
              </NavLink>
            </li>
            <li>
              <img style={{ cursor: 'pointer'}} src={OnOff} onClick={handleStyle} alt="Card image cap" />
            </li>
            <li>
            <img style={{ cursor: 'pointer'}} src={language ?  languageEng : languagePt } onClick={handleLanguage} alt="Card image cap" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

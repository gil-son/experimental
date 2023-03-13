import './styles.css';
import 'bootstrap/js/src/collapse.js';
import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeStyle } from 'redux/slice';
import OnOff from './../../assets/images/on-off.png';

const Navbar = () => {

  let [ style, setStyle] = useState("secondary");
  let [ count, setCount] = useState(0);
  let dispatch = useDispatch();
  
  
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
            <li>
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                CURSOS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" activeClassName="active">
                CONTATOS
              </NavLink>
            </li>
            <li>
              <img style={{ cursor: 'pointer'}} src={OnOff} onClick={handleStyle} alt="Card image cap" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

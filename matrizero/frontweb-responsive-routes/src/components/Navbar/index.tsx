import './styles.css';
import 'bootstrap/js/src/collapse.js';
import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeStyle } from 'redux/slice';


const Navbar = () => {

  let [ style, setStyle] = useState("primary");
  let dispatch = useDispatch();

  
  const handleStyle2 = () => {
    setStyle("secondary")
    //console.log(dispatch(changeStyle(style)))
    console.log(dispatch(changeStyle(style)).payload)
  }

  const handleStyle1 = () => {
    setStyle("primary")
    console.log(dispatch(changeStyle(style)).payload)
  }

  return (
    <nav className={`navbar navbar-expand-md navbar-dark bg-${style} main-nav`}>
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
              <button onClick={handleStyle2}>light</button>
              <button onClick={handleStyle1}>dark</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

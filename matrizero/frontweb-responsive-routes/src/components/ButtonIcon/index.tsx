import './styles.css';
import ImgCourse from '../../assets/images/right-arrow.png';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';


const ButtonIcon = () => {

  let state = useSelector( state => state);
  var verify =  JSON.stringify(state);
  const obj = JSON.parse(verify)

  let [language, setLanguage] = useState(obj.mylanguage.language);

  useEffect(() => {
    setLanguage(!language)
 },[obj.mylanguage.language]);
 

  return (
    <div className="btn-container">
      <button className="btn btn-secondary">
      <h6>{language ? (<>Inicie agora a sua busca</>) : (<>Start your search now</>)}</h6>
      </button>
      <div className="btn-icon-container">
        <img src={ImgCourse}/>
      </div>
    </div>
  );
};

export default ButtonIcon;

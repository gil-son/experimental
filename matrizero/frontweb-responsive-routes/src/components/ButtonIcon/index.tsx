import ImgCourse from '../../assets/images/right-arrow.png';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

export const ButtonIcon = () => {

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

export const ButtonCourses = () => {

 
 

  return (
    <div className='verify mb-5'>
      <a href="#" className="button button--hoo">
              <div className="button__wrapper">
                  <span className="button__text">UDEMY</span>
              </div>
              <div className="characterBox">
                  <div className="character wakeup">
                      <div className="character__face"></div>
                      <div className="charactor__face2"></div>
                      <div className="charactor__body"></div>
                  </div>
                  <div className="character wakeup">
                      <div className="character__face"></div>
                      <div className="charactor__face2"></div>
                      <div className="charactor__body"></div>
                  </div>
                  <div className="character">
                      <div className="character__face"></div>
                      <div className="charactor__face2"></div>
                      <div className="charactor__body"></div>
                  </div>
              </div>
          </a>

          

          <a href="#" className="button button--piyo">
              <div className="button__wrapper">
                  <span className="button__text">EDUZZ</span>
              </div>
              <div className="characterBox">
                  <div className="character wakeup">
                      <div className="character__face"></div>
                  </div>
                  <div className="character wakeup">
                      <div className="character__face"></div>
                  </div>
                  <div className="character">
                      <div className="character__face"></div>
                  </div>
              </div>
          </a>

   
          <a href="#" className="button button--pen">
                  <div className="button__wrapper">
                      <span className="button__text">HOTMART</span>
                  </div>
                  <div className="characterBox">
                      <div className="character wakeup">
                          <div className="character__face"></div>
                          <div className="charactor__face2"></div>
                      </div>
                      <div className="character wakeup">
                          <div className="character__face"></div>
                          <div className="charactor__face2"></div>
                      </div>
                      <div className="character">
                          <div className="character__face"></div>
                          <div className="charactor__face2"></div>
                      </div>
                  </div>
              </a>
    

</div>
  );
};
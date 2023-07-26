import ImgCourse from '../../assets/images/devs.png';
import ButtonIcon from 'components/ButtonIcon';
import { GridExample, AnimatedCard, MultiCards } from 'components/Card';
import RadarChartWorks from 'components/Progress/index';
import Circle from '../../components/Animate';
import { Link } from 'react-router-dom';

import {useState} from 'react';
import { useSelector } from 'react-redux';

import './styles.css';




const Home = () => {

  let state = useSelector( state => state);
  console.log("...")
  console.log(state);

  

  let [ style, setStyle] = useState("secondary");
  
  var verify =  JSON.stringify(state);
  
  const obj = JSON.parse(verify)
  console.log("..", obj.mystyle.style);
  
  style = obj.mystyle.style;

  return (
    <>

   
      




  <div className='bbb'>
  

    
    <div className='ccc'>
      <div className="image">
        <img src={ImgCourse}/>
      </div>
      <div className="the-content">
          <h1>O melhor catálogo de cursos</h1>
          <p>
            Desenvolvemos cursos com situações do mercado. E, cada curso é sempre renovado! Estudo individual ou em grupo!
          </p>
      </div>
      <div className="the-content bb">
            <Link to="/programacao">
              <ButtonIcon />
            </Link>
      </div>
    </div>
  
  </div>




      

      
      
    </>
  );
};

export default Home;

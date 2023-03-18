import ImgCourse from '../../assets/images/remote.png';
import ButtonIcon from 'components/ButtonIcon';

import { GridExample, MultiCards } from 'components/Card';
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
      <div className={`home-container`}>
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <Circle />
              <h1>Conheça o melhor catálogo de cursos</h1>
              <p>
                Desenvolvemos cursos com situações do dia a dia de alguém que já está no
                mercado. E, cada curso é sempre renovado! Estudo individual ou em grupo!
              </p>
            </div>
            <div>
              <Link to="/products">
                <ButtonIcon />
              </Link>
            </div>
          </div>
          <div className="home-image-container">
            <img src={ImgCourse}/>
          </div>
        </div>
      </div>

      <div className={`home-container`}>
      <div className="container ">
        <div className="row mt-5">
          < MultiCards />
        </div>
        <div className="row mt-5">
          <GridExample />
        </div>
        </div>
      </div>


      <div className={`home-container`}>
        <div className="base-card home-card">
          <div className="home-content-container">
          
            <h1>Estamos alinhados com o mercado Nacional e Internacional!!!</h1>
              <p>
                Em média os alunos que fizeram algum de nossos cursos tendem a trabalhar nesses locais/plataformas
              </p>
          
          </div>
          <div className="home-content-container chart">
          <RadarChartWorks />
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;

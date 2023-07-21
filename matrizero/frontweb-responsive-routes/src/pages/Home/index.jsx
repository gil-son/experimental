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
      <div className={`home-container`}>
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <Circle />
              <h1>Conheça o melhor catálogo de cursos</h1>
              <p>
                Desenvolvemos cursos com situações do mercado. E, cada curso é sempre renovado! Estudo individual ou em grupo!
              </p>
            </div>
            <div>
              <Link to="/programacao">
                <ButtonIcon />
              </Link>
            </div>
          </div>
          <div className="home-image-container">
            <img src={ImgCourse}/>
          </div>
        </div>
      </div>


      <div className={`aaa`}>
        <div className="bbb">
          <div className="ccc">
              <div className='row d-flex justify-content-center'>

              <div className='col-5 border border-success'>
              <div className="ddd-content">
                
              </div>
              </div>
              <div className='col-5 border border-success'>
              <div className="ddd-img">
            <img src={ImgCourse}/>
          </div>

              </div>
              </div>

            </div>
        </div>
      </div>

      <div className={`home-container`}>
      <div className="container ">
        <div className="row mt-5">
          < MultiCards />
        </div>
        
        </div>
      </div>

      <div className={`home-container d-flex`}>
  <div className="row flex-column flex-md-row flex-grow-1">
    <div className="col col-sm-12 col-md-6 d-flex">
      <GridExample />
    </div>
    <div className="col col-sm-12 col-md-6 d-flex">
      <AnimatedCard />
    </div>
  </div>
</div>


      <div className={`home-container`}>
        <div className="base-card home-card">
          <div className="home-content-container">
          
            <h1>Carreiras Nacionais e Internacionais!</h1>
              <p>
                Em média os alunos que fizeram algum de nossos cursos tendem a trabalhar nesses locais ou plataformas
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

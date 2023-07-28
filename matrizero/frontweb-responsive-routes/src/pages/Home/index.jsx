import ImgCourse from '../../assets/images/devs.png';
import ButtonIcon from 'components/ButtonIcon';
import { GridExample, AnimatedCard, MultiCards } from 'components/Card';
import RadarChartWorks from 'components/Progress/index';
import Circle from '../../components/Animate';
import { Link } from 'react-router-dom';

import {useState, useEffect, useRef} from 'react';
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



  const id = useRef("english"); // nesse caso pode ser o state

  useEffect(() => {
      console.log(window.location.hash)
  });


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


  <div className={`home-container`}>
      <div className="container ">
        <div className="row">
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



      <div className='bbb' id={id.current}>
    <div className='ccc'>
      <div className="image chart">
            <RadarChartWorks />
      </div>
      <div className="the-content">
          <h1>Alunos nacionais e Internacionais</h1>
          <p>
            A Matrizero atende alunos de diversas partes do mundo! Desenvolvemos conteúdos em inglês e português.
          </p>

          <p>
            Esse são os locais mais comuns que as oportunidades tendem a aparecer!
          </p>
      </div>

    </div>

  </div>
      

      
      
    </>
  );
};

export default Home;

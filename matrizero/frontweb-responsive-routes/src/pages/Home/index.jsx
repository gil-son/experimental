  import ImgCourse from '../../assets/images/devs.png';
  import { ButtonIcon } from 'components/ButtonIcon';
  import { AnimatedCard, MultiCards } from 'components/Card';
  import { CarouselEvent } from 'components/Carousel';
  import RadarChartWorks from 'components/Progress/index';
  import Circle from '../../components/Animate';
  import { Link } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { changeStyle } from 'redux/slice';
  import {useState, useEffect} from 'react';
  import { useSelector } from 'react-redux';
  
  import './styles.css';
  
  
  const Home = () => {
  
    let dispatch = useDispatch();
    
  
  
    let state = useSelector( state => state);
    console.log("...")
    console.log(state);
  
    
  
    let [ style, setStyle] = useState("secondary");
    
    var verify =  JSON.stringify(state);
    
    const obj = JSON.parse(verify)
    console.log("..", obj.mystyle.style);
    
    style = obj.mystyle.style;
  
    let [ language, setLanguage] = useState(obj.mylanguage.language);
    
   
    
  
    useEffect(() => {
       setLanguage(!language)
    },[obj.mylanguage.language]);
    

    
  
    return (
      <>
  
  
    <div className='bbb'>
      <Circle />
      <div className='ccc'>
        <div className="image">
          <img src={ImgCourse}/>
        </div>
        <div className="the-content">
            {language ? 
            (<>
              <h1>O melhor catálogo de cursos</h1>
              <p>
                Desenvolvemos cursos com situações do mercado. E, cada curso é sempre renovado! Estudo individual ou em grupo!
              </p>
            </>) :
  
            (<>
              <h1>The best courses</h1>
               <p>
                 We develop courses with market situations. And, each course is always renewed! Individual or group study!
               </p>           
            </>)
  
            }
            
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
          <div className="row mb-2">
            < MultiCards />
          </div>
          
          </div>
        </div>
  
        <div className={`home-container d-flex`}>
    <div className="row flex-column flex-md-row flex-grow-1">
      <div className="col col-sm-12 col-md-6 d-flex">
        <CarouselEvent />
      </div>
      <div className="col col-sm-12 col-md-6 d-flex">
        <AnimatedCard />
      </div>
    </div>
  </div>
  
  
  
        <div className='bbb'>
      <div className='ccc'>
        <div className="image chart">
              <RadarChartWorks />
        </div>
        <div className="the-content">
        {language ? 
            (<>
              <h1>Alunos nacionais e Internacionais</h1>
              <p>
               Esse são os locais mais comuns que as oportunidades tendem a aparecer!
              </p>
              <p>
                A Matrizero atende alunos de diversas partes do mundo! Desenvolvemos conteúdos em inglês e português.
              </p>
            </>) : (<>
              <h1>Students from different parts of the world</h1>
               <p>
                 These are the most common places opportunities tend to appear!
               </p>
               <p>
                 Matrizero serves students from all over the world! We develop content in English and Portuguese.
               </p>          
            </>)
  
            }
        </div>
  
      </div>
  
    </div>
        
  
        
        
      </>
    );
  };
  
  export default Home;
  
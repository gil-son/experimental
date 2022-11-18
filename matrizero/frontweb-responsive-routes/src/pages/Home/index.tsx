import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';

import { GridExample, MultiCards } from 'components/Card';
import RadarChartWorks from 'components/Progress/index';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de cursos</h1>
              <p>
                Desenvolvemos os melhores cursos de Java disponíveis no
                mercado. E, cada curso é sempre renovado!
              </p>
            </div>
            <div>
              <Link to="/products">
                <ButtonIcon />
              </Link>
            </div>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row mt-5">
          < MultiCards />
        </div>
        <div className="row mt-5">
          <GridExample />
        </div>
      </div>


      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
          
            <h1>Estamos alinhados com o mercado Nacional e Internacional!!!</h1>
              <p>
                Em média os alunos que fizeram algum de nossos cursos tendem a trabalhar nesses locais/plataformas
              </p>
          
          </div>
          <div className="home-content-container">
          <RadarChartWorks />
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;

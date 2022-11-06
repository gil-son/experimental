import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import GridExample from 'components/Card';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
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
      <div className="base-card home-card mt-2">
          <GridExample />
      </div>
    </div>
  );
};

export default Home;

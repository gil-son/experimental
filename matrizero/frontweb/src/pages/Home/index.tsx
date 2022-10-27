import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Faça parte da Matrizero</h1>
            <p>
              Otimizamos a sua jornada de programador(a) e na sua divulgação!
            </p>
            <p>
              Tanto empresas quanto alunos visitam a matrizero. Seja visível! Sem custo!
            </p>
          </div>
          <div>
            <Link to="/networks">
              <ButtonIcon text="Inicie agora a sua busca" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;

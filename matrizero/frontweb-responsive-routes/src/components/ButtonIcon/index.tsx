import './styles.css';
import ImgArrow from '../../assets/images/right-arrow.png';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-secondary">
        <h6>Inicie agora a sua busca</h6>
      </button>
      <div className="btn-icon-container">
        <img src={ImgArrow}/>
      </div>
    </div>
  );
};

export default ButtonIcon;

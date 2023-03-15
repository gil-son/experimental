import './styles.css';
import ImgCourse from '../../assets/images/right-arrow.png';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-secondary">
        <h6>Inicie agora a sua busca</h6>
      </button>
      <div className="btn-icon-container">
        <img src={ImgCourse}/>
      </div>
    </div>
  );
};

export default ButtonIcon;

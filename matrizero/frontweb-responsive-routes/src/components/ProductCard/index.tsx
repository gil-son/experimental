import './styles.css';

//import ProductImg from 'assets/images/gil.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {

    return (
        <a href="https://www.youtube.com/@matrizero230/playlists" target='_blank'>
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src="https://cdn.pixabay.com/photo/2014/05/10/19/23/presentation-341444_1280.png" alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Curso</h6>
                <ProductPrice />
            </div>
        </div>
        </a>
    );
}

export default ProductCard;
import './styles.css';

//import ProductImg from 'assets/images/gil.png';
import {ProductInfo} from 'components/ProductInfo';
import Static_Api from './../../utils/static_api.json';

function Props(props: { brand: string}) {
    return <h2>{ props.brand }!</h2>;
}

const ProductCard = () => {

    return (
        <div className="container my-4">
            <div className="row">
        <>{Static_Api.map( json =>{
            return(
                <div className="col-sm-6 col-lg-4 col-xl-3">
            <a href="https://www.youtube.com/@matrizero230/playlists" target='_blank'>
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src="https://cdn.pixabay.com/photo/2014/05/10/19/23/presentation-341444_1280.png" alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <Props brand="Curso"/>
                <ProductInfo price={json.price}/>
            </div>
        </div>
        </a>
        </div>
        )
        
        })}</></div></div>
    );
}

export default ProductCard;
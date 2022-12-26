import './styles.css';
import {useState} from 'react';
//import ProductImg from 'assets/images/gil.png';
import { ProductInfo } from 'components/ProductInfo';
import Static_Api from './../../utils/static_api.json';

function Props(props: { brand: string }) {
    return <h2>{props.brand}!</h2>;
}


const ProductCard = () => {

    let [ show, setShow] = useState("");


    let no_active = "btn btn-outline-primary w-25 my-effect-select-button";
    let active = "btn btn-outline-primary w-25 my-effect-select-button active";

    let [ button1, setButton1] = useState(no_active);
    let [ button2, setButton2] = useState(no_active);
    let [ button3, setButton3] = useState(active);



    return (
        <div className="container my-4">
            <div className="mb-5">
                <button className={button1} onClick={ () => {setShow("to pay"); setButton1(active); setButton2(no_active); setButton3(no_active)}}>Especiais</button>
                <button className={button2} onClick={ () => {setShow("free"); setButton1(no_active); setButton2(active); setButton3(no_active)}}>Grátis</button>
                <button className={button3} onClick={ () => {setShow(""); setButton1(no_active); setButton2(no_active); setButton3(active)}}>Todos</button>
            
            </div>
            <div className="row">
                <>{Static_Api.map(json => {

                    if( show === ""){
                    return (
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <a href="https://www.youtube.com/@matrizero230/playlists" target='_blank'>
                                <div className="base-card product-card">
                                    <div className="card-top-container">
                                        <img src="https://cdn.pixabay.com/photo/2014/05/10/19/23/presentation-341444_1280.png" alt="Nome do produto" />
                                    </div>
                                    <div className="card-bottom-container">
                                        <Props brand="Curso" />
                                        <ProductInfo price={json.price} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                }
                if(show === "free" && json.free == true){
                    return (
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <a href="https://www.youtube.com/@matrizero230/playlists" target='_blank'>
                                <div className="base-card product-card">
                                    <div className="card-top-container">
                                        <img src="https://cdn.pixabay.com/photo/2014/05/10/19/23/presentation-341444_1280.png" alt="Nome do produto" />
                                    </div>
                                    <div className="card-bottom-container">
                                        <Props brand="Curso" />
                                        <ProductInfo price={json.price} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                }

                if(show === "to pay" && json.free == false){
                    return (
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <a href="https://www.youtube.com/@matrizero230/playlists" target='_blank'>
                                <div className="base-card product-card">
                                    <div className="card-top-container">
                                        <img src="https://cdn.pixabay.com/photo/2014/05/10/19/23/presentation-341444_1280.png" alt="Nome do produto" />
                                    </div>
                                    <div className="card-bottom-container">
                                        <Props brand="Curso" />
                                        <ProductInfo price={json.price} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                }

                })}</></div></div>
    );
}

export default ProductCard;
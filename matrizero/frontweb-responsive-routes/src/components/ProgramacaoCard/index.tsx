import './styles.css';
import {useState} from 'react';
import {PriceInfo} from 'components/PriceInfo'
import Static_Api from '../../utils/static_api.json';

function Props(props: { brand: boolean }) {
    if(props.brand == true){
        return <>Matrizero</>;
    }
    
    return <>Parceria</>;
}


const ProgramacaoCard = () => {

    let [ show, setShow] = useState("");


    let no_active = "btn btn-outline-secondary my-effect-select-button w-25";
    let active = "btn btn-outline-secondary w-25 my-effect-border active";

    let [ button1, setButton1] = useState(no_active);
    let [ button2, setButton2] = useState(no_active);
    let [ button3, setButton3] = useState(active);



    return (
        <div className="container my-3">
            <div className="mb-3">
                <button className={button1} onClick={ () => {setShow("to pay"); setButton1(active); setButton2(no_active); setButton3(no_active)}}>Especiais</button>
                <button className={button2} onClick={ () => {setShow("free"); setButton1(no_active); setButton2(active); setButton3(no_active)}}>Grátis</button>
                <button className={button3} onClick={ () => {setShow(""); setButton1(no_active); setButton2(no_active); setButton3(active)}}>Todos</button>
            
            </div>
            <div className="row">
                <>{Static_Api.map(json => {

                    if( show === ""){
                    return (
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <a href={json.link} target='_blank'>
                                <div className="base-card product-card">
                                    <div className="card-top-container">
                                        <img src={json.image} alt="Nome do produto" />
                                    </div>
                                    <div className="card-bottom-container">
                                        <p>
                                            <b>Curso:</b>  {json.name}
                                        </p>
                                        <b>Origem:</b> <Props brand={json.matrizero} />
                                        <p>
                                            <b>Info:</b>  {json.info}
                                        </p>
                                        <PriceInfo price={json.price} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                }
                if(show === "free" && json.free == true){
                    return (
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <a href={json.link} target='_blank'>
                                <div className="base-card product-card">
                                    <div className="card-top-container">
                                        <img src={json.image} alt="Nome do produto" />
                                    </div>
                                    <div className="card-bottom-container">
                                        <p>
                                            <b>Curso:</b>  {json.name}
                                        </p>
                                        <b>Origem:</b> <Props brand={json.matrizero} />
                                        <p>
                                            <b>Info:</b>  {json.info}
                                        </p>
                                        <PriceInfo price={json.price} />
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
                                        <img src={json.image} alt="Nome do produto" />
                                    </div>
                                    <div className="card-bottom-container">
                                        <p>
                                            <b>Curso:</b>  {json.name}
                                        </p>
                                        <b>Origem:</b> <Props brand={json.matrizero} />
                                        <p>
                                            <b>Info:</b> {json.info}
                                        </p>
                                        <PriceInfo price={json.price} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                }

                })}</></div></div>
    );
}

export default ProgramacaoCard;
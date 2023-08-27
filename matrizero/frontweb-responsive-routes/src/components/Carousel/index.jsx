import { useState, useEffect } from 'react';
import { Carousel } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { ModalNotification } from 'components/Modal';
import Carrousel2 from '../../assets/images/carrosel2.png';
import Carrousel4 from '../../assets/images/carrosel4.png';

import Img1 from '../../assets/images/aaa.jpg';
import Img2 from '../../assets/images/setecentesporquinhetos3.png';
import Img3 from '../../assets/images/setecentesporquinhetos3.png';
import './style.css';

export const CarouselCourses = (props) => {

    const [index, setIndex] = useState(0);
    const [key, setKey] = useState('infos');
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);

        if (index == 0) { setKey("infos") }
        if (index == 1) { setKey("etapas") }
        if (index == 2) { setKey("contact") }
    };

    function Convert(k){
        if(k=="infos"){setIndex(0)}
        if(k=="etapas"){setIndex(1)}
        if(k=="contact"){setIndex(2)}
      }

      console.log("images 1:", props.imagez)

    return (
        <div className="row">
            <div class="col-12">
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
                <Carousel.Item>
                    <center>
                        <img
                            className="d-block"
                            src={'https://camo.githubusercontent.com/cfe7e3cecf04e914c03e9bcf6c3014de8af330b9cf727a244e52e83d4cc98cef/68747470733a2f2f666c616769636f6e732e6c697069732e6465762f666c6167732f3478332f62722e737667' + '?text=First slide&bg=eee'}
                            alt="First slide"
                        />
                    </center>
                    <Carousel.Caption>
                        <h3>{props.image} slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <center>
                        <img
                            className="d-block"
                            src={'https://camo.githubusercontent.com/83fbb50908762a418aa7b996e7f0c6888a51a4585a992fbcab51827adc32f4f1/68747470733a2f2f666c616769636f6e732e6c697069732e6465762f666c6167732f3478332f75732e737667' + '?text=Second slide&bg=eee'}
                            alt="Second slide"
                        />
                    </center>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <center>
                        <img
                            className="d-block"
                            src={'https://camo.githubusercontent.com/1746381ced92be0446c55b58076670b5356d401e380801f87169fce469c40bb2/68747470733a2f2f666c616769636f6e732e6c697069732e6465762f666c6167732f3478332f6a702e737667' + '?text=Third slide&bg=eee'}
                            alt="Third slide"
                        />
                    </center>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
            </div>
            <div class="col-12 col-sm-12 col-md-4 box2 border border-primary w-100">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => { setKey(k); Convert(k)}}
                className="mb-3"
 
            >
                <Tab eventKey="infos" title="Infos" className='tab-style'>
                    <p>O Apache Camel é um <b>framework de integração que simplifica a conexão e troca de dados entre diferentes sistemas</b>, utilizando padrões de roteamento e medição. Ele facilita a criação eficiente de integrações, conectando endpoints como bancos de dados, serviços web e filas de mensagens. Com uma arquitetura flexível, o Camel permite o desenvolvimento ágil de soluções complexas, promovendo a reutilização de componentes para interações fluidas e eficazes.</p>
                </Tab>
                <Tab eventKey="etapas" title="Etapas" className='tab-style'>
                    <p>Passaremos pelas seguintes etapas:</p>
                    <ul>
                        <li>Etapa 1</li>
                        <li>Etapa 2</li>
                        <li>Etapa 3</li>
                        <li>Etapa 4</li>
                        <li>Etapa 5</li>
                    </ul>
                </Tab>
                <Tab eventKey="contact" title="Contact" className='tab-style'>
                    Tab content for Contact
                </Tab>
            </Tabs>
            </div>
        </div>
    );
};

export const CarouselEvent = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carrousel2 + '?text=First slide&bg=f5f5f5'}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carrousel4 + '?text=Second slide&bg=eee'}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <ModalNotification />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

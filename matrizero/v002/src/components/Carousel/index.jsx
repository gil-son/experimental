import { useState, useEffect } from 'react';
import { Carousel } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { ModalNotification } from 'components/Modal';
import Carrousel2 from '../../assets/images/carrosel2.png';
import Carrousel4 from '../../assets/images/carrosel4.png';
/*
import Img1 from '../../assets/images/aaa.jpg';
import Img3 from '../../assets/images/setecentesporquinhetos3.png';
*/
import Img2 from '../../assets/images/stages.gif';
import './style.css';

export const CarouselCourses = (props) => {

    const [index, setIndex] = useState(0);
    const [key, setKey] = useState('infos');
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);

        if (index == 4) { setKey("infos") } // os componentes no modo automático tem uma inicialização diferente, o carrosel mostra o seguinte apos o interval que é o etapas, e só após essa mudança que o onchange reconhece
        if (index == 0) { setKey("etapas") }
        if (index == 1) { setKey("beneficio") }
        if (index == 2) { setKey("oportunidade") }
        if (index == 3) { setKey("salario") }
    };

    function Convert(k){
        if(k=="infos"){setIndex(0)}
        if(k=="etapas"){setIndex(1)}
        if(k=="beneficio"){setIndex(2)}
        if(k=="oportunidade"){setIndex(3)}
        if(k=="salario"){setIndex(4)}
      }

      console.log("images 1:", props.imagez)

    return (
        <div className="row">
            <div class="col-12">
            <Carousel interval={10000} activeIndex={index} onSelect={handleSelect} fade>
                <Carousel.Item>
                    <center>
                        <img
                            className="d-block"
                            src={Img2}
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
                            src={Img2}
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
                            src={Img2}
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
                <Carousel.Item>
                    <center>
                        <img
                            className="d-block"
                            src={Img2}
                            alt="Foruth slide"
                        />
                    </center>
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <center>
                        <img
                            className="d-block"
                            src={Img2}
                            alt="Foruth slide"
                        />
                    </center>
                    <Carousel.Caption>
                        <h3>Fifth slide label</h3>
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
                    <p>A cada etapa, um quizz e um desafio para você desenvolver a sua autônomia! Será capaz de criar/desenvolver projetos e soluções!</p>
                </Tab>
                <Tab eventKey="beneficio" title="Benefícios" className='tab-style'>
                    b
                </Tab>
                <Tab eventKey="oportunidade" title="Oportunidades" className='tab-style'>
                    <p>Grande parte das empresas que utilizam Apache Camel, são:</p>
                    <p>Setor Financeiro, Telecomunicações, Saúde, E-commerce, Logística e Transporte, Energia e Serviços Públicos, Governo, Indústria Automotiva, Tecnologia da Informação</p>
                </Tab>
                <Tab eventKey="salario" title="Salários" className='tab-style'>
                <p>Médias Salariais (mensais) para Desenvolvedores com Foco em Apache Camel:</p>
                    <div class="container mt-4">
                        <table class="table table-bordered">
                            <thead class="table-thead">
                            <tr>
                                <th></th>
                                <th>Dev Junior</th>
                                <th>Dev Pleno</th>
                                <th>Dev Sênior</th>
                            </tr>
                            </thead>
                            <tr>
                                <td>Brasil</td>
                                <td>R$ 4k - 6k</td>
                                <td>R$ 6k - 10k</td>
                                <td>R$ 10k - 15+</td>
                            </tr>
                            <tr>
                                <td>Exterior</td>
                                <td>US$ 3,5k - 6k</td>
                                <td>US$ 6k - 8,5k</td>
                                <td>US$ 8,5k - 12,5+</td>
                            </tr>
                        </table>
                    </div>
                    <p>fontes:</p>
                    <ul>
                        <li>Glassdor</li>
                        <li>Sim Carreira</li>
                    </ul>
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

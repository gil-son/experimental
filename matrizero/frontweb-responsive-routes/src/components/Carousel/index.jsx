import { useState, useEffect } from 'react';
import { Carousel } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { ModalNotification } from 'components/Modal';
import Carrousel2 from '../../assets/images/carrosel2.png';
import Carrousel4 from '../../assets/images/carrosel4.png';

import Img1 from '../../assets/images/setecentesporquinhetos2.jpg';
import Img2 from '../../assets/images/setecentesporquinhetos3.png';
import Img3 from '../../assets/images/setecentesporquinhetos3.png';

export const CarouselCourses = (props) => {

    const [index, setIndex] = useState(0);
    const [key, setKey] = useState('home');
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);

        if (index == 0) { setKey("home") }
        if (index == 1) { setKey("profile") }
        if (index == 2) { setKey("contact") }
    };

    function Convert(k){
        if(k=="home"){setIndex(0)}
        if(k=="profile"){setIndex(1)}
        if(k=="contact"){setIndex(2)}
      }

      console.log("images 1:", props.imagez)

    return (
        <div className="row">
            <div class="col-12 border border-primary">
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
                <Carousel.Item>
                    <center>
                        <img
                            className="d-block"
                            src={Img1 + '?text=First slide&bg=eee'}
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
                            src={Img2 + '?text=Second slide&bg=eee'}
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
                            src={Img1 + '?text=Third slide&bg=eee'}
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
                <Tab eventKey="home" title="Home">
                    O que é?
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" >
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

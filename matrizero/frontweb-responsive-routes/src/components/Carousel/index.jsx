import { useState, useEffect } from 'react';
import { Carousel } from "react-bootstrap";

import { ModalNotification} from 'components/Modal';
import Carrousel2 from '../../assets/images/carrosel2.png';
import Carrousel4 from '../../assets/images/carrosel4.png';

import Img1 from '../../assets/images/setecentesporquinhetos2.jpg';
import Img2 from '../../assets/images/setecentesporquinhetos3.png';
import Img3 from '../../assets/images/setecentesporquinhetos3.png';

export const CarouselCourses = (props) => {

  const [index, setIndex] = useState(0);
  const [name, setName] = useState("home"); 
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    console.log(selectedIndex);
    console.log(".",props.ind)
    if(index==0){setName("home")}
    if(index==1){setName("profile")}
    if(index==2){setName("contact")}
  };

    useEffect(() => {
        setIndex(props.ind)

        if(index==0){setName("home")}
        if(index==1){setName("profile")}
        if(index==2){setName("contact")}
    },[props.ind]);

    
  
    return(
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <center>
          <img
            className="d-block"
            src={Img3 + '?text=First slide&bg=eee'}
            alt="First slide"
          />
          </center>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
      <center>
          <img
            className="d-block"
            src={Img3 + '?text=Second slide&bg=eee'}
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
            src={Img3 + '?text=Third slide&bg=eee'}
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
            <ModalNotification/>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  };

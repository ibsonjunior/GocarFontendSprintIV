import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

function HomeClients() {
  return (
    <>
   <Carousel>
      <Carousel.Item className="clientCard">

        <div className="alinharclient" >
          <img
            className="clientImg"
            src="https://live.staticflickr.com/65535/52544332159_fb5f0c62d3.jpg"
            alt="Third slide"
          />
        
            <div className="alinhartext">
                <h3>Scrooge McDuck</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </div>

        </div> 
      </Carousel.Item>


      <Carousel.Item className="clientCard">
        
        <div className="alinharclient">
          <img
            className="clientImg"
            src="https://live.staticflickr.com/65535/52543586112_f1df94c12f.jpg"
            alt="Third slide"
          />
        

            <div className="alinhartext">
                <h3>Montgomery Burns</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </div>
        
        </div>


      </Carousel.Item>


      <Carousel.Item className="clientCard">
        <div className="alinharclient">
          <img
            className="clientImg"
            src="https://live.staticflickr.com/65535/52544341769_1b68d74492.jpg"
            alt="Third slide"
          />
        
            <div className="alinhartext">
                <h3>Shabazz Aladeen</h3>
                <p>
                O General-Almirante Shabazz Aladeen é um dos nossos mais fieis clientes.
                </p>
            </div>

        </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default HomeClients;
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
            src="https://live.staticflickr.com/65535/52571563372_8c330e4c35.jpg"
            alt="Third slide"
          />
        
            <div className="alinhartext">
                <h3>Elon Musk</h3>
                <p>
                É o fundador, CEO e engenheiro-chefe da SpaceX; CEO e arquitecto de produto da Tesla,
                </p>
            </div>

        </div> 
      </Carousel.Item>


      <Carousel.Item className="clientCard">
        
        <div className="alinharclient">
          <img
            className="clientImg"
            src="https://live.staticflickr.com/65535/52572030726_6684666c5b.jpg"
            alt="Third slide"
          />
        

            <div className="alinhartext">
                <h3>Christian Grey</h3>
                <p>
                Bilionário de 27 anos, empresário e CEO da Grey Enterprises Holdings Inc.
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
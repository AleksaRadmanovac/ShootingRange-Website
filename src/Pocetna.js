import React from 'react';
import Navbar from './Navigacija';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import './Carousel.css';
import './Pocetna.css';
import ContactForm from './Forma';

const HomePage = () => {
    const carouselImages = [
      { src: image1, alt: 'Image 1' },
      { src: image2, alt: 'Image 2' },
      { src: image3, alt: 'Image 3' },
      { src: image4, alt: 'Image 4' },
      { src: image5, alt: 'Image 5' },
      { src: image6, alt: 'Image 6' }
    ];
  
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: 'center' }}>FPS Shooting Range</h1>
        <Carousel>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
        <div className='improve'>
          <p>
            Improve your aim with us
          </p>
        </div>
        <ContactForm/>
      </div>
    );
  };

  export default HomePage;
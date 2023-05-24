import React from 'react';
import Navbar from './Navigacija';
import ContactForm from './Forma';
import './Info.css';

const InfoPage = () => {
  return (
    <div>
        <Navbar />
        <div className='blok b1' >
          <p>
          Welcome to the adrenaline-pumping world of our FPS Shooting Range Game! Experience the ultimate test of precision, speed, and accuracy in a virtual shooting range like no other. Sharpen your skills and take on challenging scenarios designed to push your limits and elevate your marksmanship.          </p>
        </div>
        <div className='blok b2'>
          <p>
          Immerse yourself in realistic environments, from urban streets to abandoned warehouses, as you engage in intense shooting challenges. Choose from a wide array of powerful firearms, each with unique characteristics. Feel the thrill of firing precise shots, honing your reflexes, and mastering the art of shooting.
          </p>
        </div>
        <div className='blok b3'>
          <p>
          Challenge yourself with dynamic target systems, moving targets, and timed scenarios. Compete against friends and players worldwide, climb the leaderboards, and prove yourself as the ultimate sharpshooter. Earn achievements, unlock new weapons, and customize your loadout to suit your playstyle.
          </p>
        </div>
        <div className='blok b4'>
          <p>
          Whether you're a seasoned shooter or a newcomer eager for an exhilarating FPS journey, our Shooting Range Game offers endless excitement and challenges. Unleash your inner marksman and immerse yourself in heart-pounding action!
          </p>
        </div>
      <ContactForm/>
    </div>
  );
};

export default InfoPage;
import './About.css'
import React, {useEffect, useRef, useState} from 'react';
import Tesseract, { imageType } from 'tesseract.js';
import OCR from './OCR'

function About() {
  // Declare state variables and useState hooks here
  // Declare event handlers and other functions here



  return (
    <div className='abt'>
      <div>There will be stuff here someday</div>
      <OCR imageUrl="https://wallpapercave.com/wp/wp4162242.png" />
    </div>
  );
}


export default About;

import './About.css'
import React, {useEffect, useRef, useState} from 'react';
import { ReactSVG } from 'react-svg';
import white_star_line from '../icons/white_star_line.png'
import glyph from '../icons/light_glyph.png'

function About() {
  // Declare state variables and useState hooks here
  // Declare event handlers and other functions here

  return (
    <div className='abt'>
      <div className='about_text'>
        <div className='about_header'>
          <span className='about_header_title'>WHITE STAR LINE</span> <span>TICKET# <span className='typewritten'>191102</span></span>
        </div>

        <div className='separator' />
      
        <div className='flex align-v'>
          Passenger Ticket per Steamship: R.M.S &nbsp;<div className='du handwritten'>Olympic</div>
        </div>

        <div className='flex'>
          SAILING FROM: &nbsp;<div className='du typewritten'>Student life</div> 
          TO: &nbsp;<div className='du typewritten'> Homelessness</div>
        </div>

        <div className='separator' />

        <div className='flex'>
          PASSENGER NAME: &nbsp;<div className='du typewritten'>Ms. Lucy Deiwald</div>
        </div>

        <div className='flex'>
          AGE: &nbsp;<div className='du typewritten'>21</div> 
          BIRTHDAY: &nbsp; <div className='du typewritten'>19.11.2002</div> 
          PRONOUNS: &nbsp; <div className='du typewritten'> She/They/It</div>
        </div>

        <div className='flex'>
          STUDYING: &nbsp; <div className='du typewritten'> English & PolSci </div>
          SEMESTER: &nbsp; <div className='du typewritten'> 3rd </div>
        </div>

        <div className='separator' />

        <div className='flex'>
          PASSENGER FACT:  &nbsp;
          <div className='du typewritten'>
            Lucy is a huge nerd. She does quite a bit of 3d-printing,
          </div>
        </div>

        <div className='flex du typewritten'>
          loves typewriters, mechanical keyboards fountain pens, synthersizers, d&d. 
        </div> <div className='flex du typewritten'>
          She also spends a lot of time doing front end coding, sometimes
        </div> <div className='flex du typewritten'>
          also back end but enjoys the design aspect of front end development. 
        </div> <div className='flex du typewritten'>
          Ex Ana support in Overwatch. As a friend of Blahaj, Lucy is also trans!
        </div> <div className='flex du typewritten'>
          Favourite TV-Show: The Owl House &nbsp;
          <img style={{ width: "28px" }} src={glyph} alt='Glyph'/>
           Honourable mention: Arcane
        </div>
        
        <div className='separator' />
        <div className='wsl_logo' >
          <img src={white_star_line} alt="WSL Logo" />
        </div>


      </div>
    </div>
  );
}


export default About;

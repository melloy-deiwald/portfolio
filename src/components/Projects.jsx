import './Projects.css'
import React, {useEffect, useRef, useState} from 'react';
import {Link, ScrollElement} from 'react-scroll';

import photography_cover from './media/town.jpg'
import printer_cover from '../covers/printer_cover.jpg'

import Programming_link from './Project_links/Programming_link'
import Photoghraphy_link from './Project_links/Photography_link'
import Printing_link from './Project_links/Printing_link';


function Projects( { select_project } ) {
  return (
    <div className='projects_container'>
      <div className='projects'>
        <Photoghraphy_link link={select_project} link_index={4}/>
        <Printing_link link={select_project} link_index={5}/>
        <Programming_link  link={select_project} link_index={6}/>
      </div>
    </div>
  );
}


export default Projects;

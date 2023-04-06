import './Projects.css'
import React, {useEffect, useRef, useState} from 'react';

import photography_cover from './media/town.jpg'
import printer_cover from '../covers/printer_cover.jpg'
import programming_cover from '../covers/programming_cover.png'
import other_cover from '../covers/other_cover.png'

function Projects( { select_project } ) {
  // Declare state variables and useState hooks here
  // Declare event handlers and other functions here
  const select_p = (select_index) => {
    select_project(select_index);
  }


  return (
    <div className='projects_container'>
      <div className='projects'>
        <div className='photography_project project'>

          <div className='project_text_container'>
            <div className='flex'>
              PROJECT NAME:  &nbsp;<span className='du typewritten'>PHOTOGRAPHY</span>
            </div>


            <div className='flex'>
              PROJECT INFO:  &nbsp;
              <div className='du typewritten override_flex'>
                Taking cool pics of things I like
              </div>
            </div>
            
            <div className='flex du typewritten override_flex'>
            mostly just of things that I happen
            </div> <div className='flex du typewritten override_flex'>
            to come across when talking walks.
            </div> <div className='flex du typewritten override_flex'>
            I use a canon eos 750 with a 50mm f1.8 lens
            </div> <div className='flex du typewritten override_flex'>
            the kit lens, and a 55-250 f5.6 zoom lens.
            </div>

            <div className='separator' />
            <div className='button_container'>
              <div className='link_button override_position' onClick={() => {select_p(4)}}>Take a look  =&gt;</div>
            </div>

          </div>

          <div className='project_cover'>
            <div>PROJECT COVER</div>
            <img className='project_img' src={photography_cover} alt="" />
          </div>
          

        </div>

        <div className='printing_project project'>

          <div className='project_text_container'>
            <div className='flex'>
              PROJECT NAME:  &nbsp;<span className='du typewritten'>3D-Printing</span>
            </div>


            <div className='flex'>
              PROJECT INFO:  &nbsp;
              <div className='du typewritten override_flex'>
                I print. Sometimes for myself and
              </div>
            </div>
            
            <div className='flex du typewritten override_flex'>
            sometimes for others and am happy to do so.
            </div> <div className='flex du typewritten override_flex'>
            I'm not much of a modeler, so I usually just print
            </div> <div className='flex du typewritten override_flex'>
            stuff from thingieverse and paint it. I use an
            </div> <div className='flex du typewritten override_flex'>
            Ender3 Pro most new prints are made with PETG.
            </div>

            <div className='separator' />
            <div className='button_container'>
              <div className='link_button override_position' onClick={() => {select_p(5)}}>See results of printer going vroooom =&gt;</div>
            </div>

          </div>

          <div className='project_cover'>
            <div>PROJECT COVER</div>
            <img className='project_img' src={printer_cover} alt="" />
          </div>
          
        </div>

        <div className='programming_project project'>

          <div className='project_text_container'>
            <div className='flex'>
              PROJECT NAME:  &nbsp;<span className='du typewritten'>Programming</span>
            </div>


            <div className='flex'>
              PROJECT INFO:  &nbsp;
              <div className='du typewritten override_flex'>
                Sometimes I code stuff, like this
              </div>
            </div>
            
            <div className='flex du typewritten override_flex'>
            website, or a terrain generator, help out in
            </div> <div className='flex du typewritten override_flex'>
            a wiki project for d&d or for a linguistics project
            </div> <div className='flex du typewritten override_flex'>
            I mostly do react-front end development but I'm also
            </div> <div className='flex du typewritten override_flex'>
            in love with Godot for desktop applications.
            </div>

            <div className='separator' />
            <div className='button_container'>
              <div className='link_button override_position' onClick={() => {select_p(6)}}>Trust me, I'm not a stereotype! =&gt;</div>
            </div>

          </div>

          <div className='project_cover'>
            <div>PROJECT COVER</div>
            <img className='project_img' src={programming_cover} alt="" />
          </div>

        </div>

        <div className='other_project project'>

          <div className='project_text_container'>
            <div className='flex'>
              PROJECT NAME:  &nbsp;<span className='du typewritten'>Other Projects</span>
            </div>


            <div className='flex'>
              PROJECT INFO:  &nbsp;
              <div className='du typewritten override_flex'>
                This is where I dump random stuff
              </div>
            </div>
            
            <div className='flex du typewritten override_flex'>
            like memes and other projects such as
            </div> <div className='flex du typewritten override_flex'>
            dice making, my collection of inks, fountain pens
            </div> <div className='flex du typewritten override_flex'>
            maybe some typewritten stuff. Really depends
            </div> <div className='flex du typewritten override_flex'>
            on my mood. WIP
            </div>

            <div className='separator' />
            <div className='button_container'>
              <div className='link_button override_position' onClick={() => {select_p(8)}}>Random bullshit go! =&gt;</div>
            </div>

          </div>

          <div className='project_cover'>
            <div>PROJECT COVER</div>
            <img className='project_img' src={other_cover} alt="" />
          </div>
        </div>

        {/*<div className='link_button' onClick={() => {select_p(7)}}>Shitty Creations</div>*/}
      </div>
    </div>
  );
}


export default Projects;

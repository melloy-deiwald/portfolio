import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Printing from './components/Printing.jsx'
import Programming from './components/Programming.jsx'
import Other from './components/Other.jsx'
import Main from './components/Main.jsx'
import up from './icons/up.png'

function App() {

  // DEFINITIONS

  const [letters, setLetters] = useState([
    ["M","e","l","l","o","y","'","s",'&nbsp;',"P","o","r","t","f","o","l","i","o",";"],
    ["A","b","o","u","t","&nbsp;","m","e"],
    "Portfolio",
    "Projects",
    "Photography",
    "3D-Printing",
    "Programming",
    "\"Creations\"",
    "Other"
  ]);
  let [title, setTitle] = useState([]);

  const contents = [
    <Main to_projects={change_content}/>, 
    <About/>, 
    <Main/>, 
    <Projects select_project={change_content}/>, 
    <Gallery/>, 
    <Printing/>,
    <Programming/>,
    <Other/>
  ];
  const [content, setContent] = useState(0);
  let [timer, setTimer] = useState();

  let [opacity, setWindowopacity] = useState(1);
  let [show_scroll, set_show_scroll_button] = useState(false);
  let wrapperRef = useRef(null);
  let titleRef = useRef(null);

  const location = useLocation();
  const currentPath = location.pathname.replace(/^\/portfolio/, '').toLowerCase();
  
  //END OF DEFINITIONS

  useEffect(() => { //STARTUP

    add_scroll_button_behaviour();
    handle_content_change(currentPath);

    }, []); // END STARTUP

  /* JSX CONTENT */
  return (
    <div className="App">
      <div className='noise' />
      
        <nav>
          <div className="nav_centre">
              <div className="nav_link" id="home" onClick={() => change_content(0)}>
                <div className='text_container'>Home</div>
              </div>
              <div className="nav_link" id="about_me" onClick={() => change_content(1)}>
                <div className='text_container'>About Me</div>
              </div>
              <div className="nav_link" id="projects" onClick={() => change_content(3)}>
                <div className='text_container'>Projects</div>
              </div>
          </div>
        </nav>

        <header>
        <div ref={wrapperRef} id="wrapper">
            <div ref={titleRef} id="title" class="title">
              {title}
            </div>
        </div>
        </header>

        <div id="button_container">
          <div id="button" onClick={() => jump_down_button_handler(120)}>
              =&gt; {/*&gt; is a ">" meaning this is just a =>*/}
          </div>
        </div>

        <main>
          <div style={{ opacity }} id="parent">

              {content}

          </div>
        </main>

        {
          show_scroll &&
          (<img onClick={() => {window.scrollTo(0,0);}} src={up} className='scroll_up' />)
        }
        

    </div>
  );

  function handle_content_change(path) {
    switch (path) {
      case "/about": change_content(1); break;
      case "/projects": change_content(3); break;
      case "/gallery": change_content(4); break;
      case "/photography": change_content(4); break;
      case "/printing": change_content(5); break;
      case "/programming": change_content(6); break;
      case "/other": change_content(7); break;
      default: change_content(0); break;
    }
  }

  function change_content(index) {
    change_title(index);
    transition_content(index);
  }

  function transition_content(index) {
    setWindowopacity(0);
    window.scrollTo(0,0);
    const timeout = setTimeout(() => {
      setContent(contents[index]);
      setWindowopacity(1);
    }, 666); 
  }

  function change_title(index) {
    clearInterval(timer);
    wrapperRef.current.style.width = "50vw";
    const timeVar = setInterval(() => {
      if(title.length > 0){
        title = title.slice(0, -1);
        setTitle(title);
      } else{clearInterval(timeVar); write_text(index);}
    }, 50); 
    setTimer(timeVar);
  }

  function write_text(index) {
    let array_index = 0 //Reset counter
    const timerVar = setInterval(() => {
      if(array_index < letters[index].length){
        title = [...title, (<div dangerouslySetInnerHTML={{__html: letters[index][array_index]}} />)];
        setTitle(title);
      }
      array_index = array_index + 1;
      if(array_index === letters[index].length){ //stop when finished printing and center text
        clearInterval(timerVar);   
        wrapperRef.current.style.transition = "0.33s ease-in";
        let offset = titleRef.current.offsetWidth/2;
        wrapperRef.current.style.width = "calc(50vw + " + String(offset) + "px)";
    }
    }, 75);
    setTimer(timerVar);
  }

  function jump_down_button_handler(y) {
    let height = window.innerHeight;
    y = height * (y*0.01);
    window.scrollTo(0, y);
  }

  function handle_show_scroll_button() {
    if (window.scrollY > 0) {
      set_show_scroll_button(true);
    } else {
      set_show_scroll_button(false);
    }
  }

  function add_scroll_button_behaviour() {
    window.addEventListener('scroll', handle_show_scroll_button);

    return () => {
      window.removeEventListener('scroll', handle_show_scroll_button);
    };
  }

} // END OF APP
export default App;

import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Printing from './components/Printing.jsx'
import Programming from './components/Programming.jsx'
import Other from './components/Other.jsx'
import Main from './components/Main.jsx'
import up from './icons/up.png'
import Stickers from './components/Stickers.jsx'
import Mobile_Warning from './components/Mobile_Warning.jsx';

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

  const links = [
    "/",
    "/about",
    "/",
    "/projects",
    "/photography",
    "/printing",
    "/programming",
    "/other"
  ];


  const [content, setContent] = useState(0);
  let [timer, setTimer] = useState();

  let [opacity, setWindowopacity] = useState(1);
  let [show_scroll, set_show_scroll_button] = useState(false);
  let wrapperRef = useRef(null);
  let titleRef = useRef(null);

  const navigate = useNavigate();

  const location = useLocation();
  const initial_path = location.pathname.replace(/^\/portfolio/, '').toLowerCase();
  
  // END OF DEFINITIONS

  // STARTUP

  useEffect(() => { 

    add_navigation_event_listeners();
    add_scroll_button_behaviour();
    change_content(handle_content_change(initial_path));

    }, []); 

  // END STARTUP

  // JSX CONTENT

  return (
    <div className="App">
      <Stickers />
      <div className='noise' />
      <Mobile_Warning />
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
          (<img onClick={() => {window.scrollTo(0,0);}} src={up} className='scroll_up'/>)
        }
        
    </div>
  );

  // END JSX

  // FUNCTIONS

  function handle_content_change(path) {
    switch (path) {
      case "/about": return 1;
      case "/projects": return 3;
      case "/gallery": return 4;
      case "/photography": return 4;
      case "/printing": return 5;
      case "/programming": return 6;
      case "/other": return 7;
      default: return 0;
    }
  }

  function change_content(index, doNavigate = true) {
    change_title(index);
    transition_content(index);
    if (!doNavigate){return}
    navigate(links[index]);
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

  function handle_browser_navigation () {
    let current_path = window.location.pathname.replace("/portfolio", "");
    change_content(handle_content_change(current_path), false);
  };

  function add_navigation_event_listeners() {
    // Add event listener for popstate
    window.addEventListener('popstate', handle_browser_navigation);


    // Clean up the event listener when the component unmounts
    
    return () => {
      window.removeEventListener('popstate', handle_browser_navigation);
    };
  }

} // END OF APP
export default App;
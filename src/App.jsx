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
let [array_index, setIndex] = useState(0);
let [text_select, setText_select] = useState(0);
let [opacity, setOpacity] = useState(1);
let [show_scroll, setShowScrollButton] = useState(false);
let wrapperRef = useRef(null);
let titleRef = useRef(null);
let windowRef = useRef(null);


  const handle_projects_selector = (project) => {
    show_new_text(project);
  }

  //const [content, setContent] = useState(<Main to_projects={handle_projects_selector}/>);
  const [content, setContent] = useState(0);
  let [select_i, setSelect] = useState(0);
  let [timer, setTimer] = useState();
  
  const contents = [
    <Main to_projects={handle_projects_selector}/>, 
    <About/>, 
    <Main/>, 
    <Projects select_project={handle_projects_selector}/>, 
    <Gallery/>, 
    <Printing/>,
    <Programming/>,
    <Other/>
  ];

  const location = useLocation();
  //const currentPath = location.pathname.substring('/portfolio'.length);
  const currentPath = location.pathname.replace(/^\/portfolio/, '');
  
  useEffect(() => {
    console.log(currentPath);
    switch (currentPath) {
      case "/about": show_new_text(1); break;
      case "/projects": show_new_text(3); break;
      case "/gallery": show_new_text(4); break;
      case "/printing": show_new_text(5); break;
      case "/programming": show_new_text(6); break;
      case "/other": show_new_text(7); break;
      default: show_new_text(0); break;
    }

    function handleScroll() {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures that this function only runs on mount

  const show_new_text = (new_text_selection) => {
    let select = new_text_selection;
    text_select = select;
    setText_select(text_select);
    select_i = select;
    setSelect(select_i);
    clear_letters();
    transition_parent();
  }

  const move = (y) => {
    let height = window.innerHeight;
    y = height * (y*0.01);
    window.scrollTo(0, y);
}

  return (
    <div className="App">
      <div className='noise' />
        <nav>

          <div className="nav_centre">
              <div className="nav_link" id="home" onClick={() => show_new_text(0)}>
                <div className='text_container'>Home</div>
              </div>
              <div className="nav_link" id="about_me" onClick={() => show_new_text(1)}>
                <div className='text_container'>About Me</div>
              </div>
              <div className="nav_link" id="projects" onClick={() => show_new_text(3)}>
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
          <div id="button" onClick={() => move(120)}>
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

  function clear_letters(){
    clearInterval(timer);
    wrapperRef.current.style.width = "50vw";
    const timeVar = setInterval(() => {
      if(title.length > 0){
        title = title.slice(0, -1);
        setTitle(title);
      } else{clearInterval(timeVar); add_letters();}
    }, 50); 
    setTimer(timeVar);
  }

  function add_letters() {
    array_index = 0 //Reset counter
    const timerVar = setInterval(() => {
      if(array_index < letters[text_select].length){
        title = [...title, (<div dangerouslySetInnerHTML={{__html: letters[text_select][array_index]}} />)];
        setTitle(title);
      }
      array_index = array_index + 1;
      if(array_index === letters[text_select].length){ //stop when finished printing and center text
        clearInterval(timerVar);   
        wrapperRef.current.style.transition = "0.33s ease-in";
        let offset = titleRef.current.offsetWidth/2;
        wrapperRef.current.style.width = "calc(50vw + " + String(offset) + "px)";
    }
    }, 75);
    setTimer(timerVar);
  }
    /*
    const timerVar = setInterval(() => {
      if(array_index < letters[text_select].length){
        title = [...title, (<div dangerouslySetInnerHTML={{__html: letters[text_select][array_index]}} />)];
        setTitle(title);
      }
      array_index = array_index + 1;
      if(array_index === letters[text_select].length){ //stop when finished printing and center text
        clearInterval(timerVar);   
        wrapperRef.current.style.transition = "0.33s ease-in";
        let offset = titleRef.current.offsetWidth/2;
        wrapperRef.current.style.width = "calc(50vw + " + String(offset) + "px)";
    }
    }, 125);
    setTimer(timerVar);*/

    function transition_parent() {
      setOpacity(0);
      window.scrollTo(0,0);
      const timeout = setTimeout(() => {
        setContent(contents[select_i]);
        setOpacity(1);
      }, 666); 
    }
  }


export default App;

import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Gallery from './components/Gallery.js'
import About from './components/About.js'

function App() {
  const [letters, setLetters] = useState([
    ["M","e","l","l","o","y","'","s",'&nbsp;',"P","o","r","t","f","o","l","i","o",";"],
    ["P","i","c","t","u","r","e","s"],
    ["A","b","o","u","t","&nbsp;","m","e"],
    ["P","r","o","j","e","c","t","s"],
    ["C","a","s","s","i","'","s",'&nbsp;',"P","o","r","t","f","o","l","i","o",";"]
]);
  let [title, setTitle] = useState([]);
  let [array_index, setIndex] = useState(0);
  let [text_select, setText_select] = useState(0);
  let wrapperRef = useRef(null);
  let titleRef = useRef(null);
  let windowRef = useRef(null);

  let [content, setContent] = useState(<Gallery />);
  const contents = [<Gallery/>, null, <About />];

  let [timer, setTimer] = useState();

  useEffect(() => {
    // This function will run when the component mounts
    windowRef.current = window;
    clear_letters();
  }, []); // The empty array ensures that this function only runs on mount

  const show_new_text = (new_text_selection) => {
    text_select = new_text_selection;
    setText_select(text_select);
    setContent(contents[new_text_selection]);
    clear_letters();
  }

  const move = (y) => {
    let height = windowRef.current.innerHeight;
    y = height * (y*0.01);
    windowRef.current.scrollTo(0, y);
}

  return (
    <div className="App">
      <div className='noise' />
        <nav>

          <div className="nav_centre">
              <div className="nav_link" id="home" onClick={() => show_new_text(0)}>
                <div className='text_container'>Home</div>
              </div>
              <div className="nav_link" id="about_me" onClick={() => show_new_text(2)}>
                <div className='text_container'>About Me</div>
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
          <div id="parent">

              {content}

          </div>
        </main>

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
    }, 125); 
    setTimer(timeVar);
  }

  function add_letters() {
    const timerVar = setInterval(() => {
      //console.log(array_index < letters[text_select].length);
      if(array_index < letters[text_select].length){
        title = [...title, (<div dangerouslySetInnerHTML={{__html: letters[text_select][array_index]}} />)];
        setTitle(title);
      }
      array_index = array_index + 1;
      if(array_index === letters[text_select].length){ //stop when finished printing and center text
        clearInterval(timerVar);   
        wrapperRef.current.style.transition = "0.33s ease-in"; ;
        let offset = titleRef.current.offsetWidth/2;
        wrapperRef.current.style.width = "calc(50vw + " + String(offset) + "px)";
    }
    }, 125);
    setTimer(timerVar);
  }
}

export default App;

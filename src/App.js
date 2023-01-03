import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';
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

  const title_width = {
    width: 'calc()',
  };

  useEffect(() => {
    // This function will run when the component mounts
    console.log('Component mounted!'); 
    windowRef.current = window;
    clear_letters();
  }, []); // The empty array ensures that this function only runs on mount

  const show_new_text = (new_text_selection) => {
    console.log("showing new text");
    text_select = new_text_selection;
    setText_select(text_select);
    setContent(contents[new_text_selection]);
    clear_letters();
  }

  const move = (y) => {
    console.log("moving");
    let height = windowRef.current.innerHeight;
    y = height * (y*0.01);
    windowRef.current.scrollTo(0, y);
}

  return (
    <div className="App">
        <nav>

          <div className="nav_centre">
              <div className="nav_link" id="home" onClick={() => show_new_text(0)}>
                  Home
              </div>
              <div className="nav_link" id="about_me" onClick={() => show_new_text(2)}>
                  About me
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
    wrapperRef.current.style.width = "50vw";
    let timer = setInterval(() => {
      console.log(title.length);
      if(title.length > 0){
        title = title.slice(0, -1);
        setTitle(title);
      } else{clearInterval(timer); add_letters();}
    }, 125);
  }

  function add_letters() {
    let timer = setInterval(() => {
      //console.log(array_index < letters[text_select].length);
      if(array_index < letters[text_select].length){
        title = [...title, (<div dangerouslySetInnerHTML={{__html: letters[text_select][array_index]}} />)];
        setTitle(title);
      }
      array_index = array_index + 1;
      if(array_index == letters[text_select].length){ //stop when finished printing and center text
        clearInterval(timer);   
        wrapperRef.current.style.transition = "0.33s ease-in"; ;
        let offset = titleRef.current.offsetWidth/2;
        wrapperRef.current.style.width = "calc(50vw + " + String(offset) + "px)";
    }
    }, 125);
  }
}

export default App;

import React, {useRef, useState} from 'react';
import './printing_link.css';

import ender_logo from '../../icons/ender_logo.png'

function Printing_link ({ link, link_index }) {
    const canRef = useRef(null);
    const [started, setStarted] = useState(false);
    const [animate_elements, setAnimateElements] = useState([]);
    const bedBg = useRef(null);


    const start_draw = () => {
        if(started){return}
        setStarted(true);

        const c = canRef.current;
        const cc = c.getContext('2d');

        let width = 400;
        let height = 100;
        c.width = width;
        c.height = height;

        cc.fillStyle = "rgba(230,100,100,1)";

        let index_x = 0;
        let index_y = 1;

        let step_size = 20;
        let layer_height = 10;

        const timer = setInterval(() => {
            if(index_x >= (width / step_size)+1){index_y += 1; index_x = 0} //Start new line when finished
            cc.fillRect(0,0, index_x * step_size, index_y * layer_height);
            index_x += 1
            if(index_y*layer_height > height){clearInterval(timer); draw_text()} //stop timer from running indefinitely
        }, 2)
    }

    const draw_text = () => {
        const animated_text = "PRINTING";
        let index = 0;
        let text_animate_timer = setInterval(() => {
            animate_elements.push(<text className="stroke-animation" x={String(34+(index*4))+"%"}y="50%" fill="#00000000">{animated_text[index]}</text>)
            setAnimateElements([...animate_elements]);
            index+=1;
            if(index >= animated_text.length){clearInterval(text_animate_timer); addBorderHover()}
        }, 150)
    }

    function addBorderHover(){
        bedBg.current.classList.add('border');
    }


    return (
        <div className='prl-container'>
            <div ref={bedBg} onMouseEnter={() => {start_draw()}} className='prl-bed'>

                <div className='prl-bed-img-container'>
                    <img src={ender_logo} alt="" />
                </div>

                <div className='prl-bed-text'>
                    3D PRINTING 
                </div>

                <div className='prl-bed-bg'>
                    <canvas className='prl-canvas' ref={canRef} />
                </div>

                <svg onClick={() => link(link_index)} className='prl-bed-svg' viewBox='0 0 1250 600'>
                    {animate_elements}
                </svg>


            </div>
            <div className='prl-bed-end' />

        </div>
    );
}

export default Printing_link
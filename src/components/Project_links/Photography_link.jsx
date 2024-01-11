import React, {useRef, useState} from 'react';
import Slider, {Range} from 'rc-slider';
import './photography_link.css';
import 'rc-slider/assets/index.css';
import phl_img from '../media/town.jpg';


function Photoghraphy_link ({ link, link_index }) {
    const [brightness, setBrightness] = useState(1);
    const [contrast, setContrast] = useState(1);
    const [saturation, setSaturation] = useState(1);
    const [blur, setBlur] = useState(0);
    
    return(
        <div className='phl-container'>
            <div className='phl-inner-container'>

                <div className='phl-title'>PHOTOHRAPHY</div>

                <div className='phl-image'>
                    <img src={phl_img}
                        style={{ filter: `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) saturate(${saturation})` }}
                    />

                    <div onClick={() => {link(link_index)}} className='phl-button clickable_cursor clicked_cursor'></div>
                    <div onClick={() => {link(link_index)}} className='phl-button-inner clickable_cursor clicked_cursor'>VIEW</div>

                </div>

                <div className='phl-sliders'>
                    <div className='phl-slider-element'>
                        <Slider className='phl-slider'
                            value={brightness}
                            min={0}
                            max={2}
                            step={0.1}
                            onChange={(value) => setBrightness(value)}
                        />
                        <div className='phl-slider-desc'>BRIGHTNESS</div>
                    </div>

                    <div className='phl-slider-element'>
                        <Slider className='phl-slider'
                            value={contrast}
                            min={0}
                            max={2}
                            step={0.1}
                            onChange={(value) => setContrast(value)}
                        />
                        <div className='phl-slider-desc'>CONTRAST</div>
                    </div>
                    <div className='phl-slider-element'>
                        <Slider className='phl-slider'
                            value={saturation}
                            min={0}
                            max={2}
                            step={0.1}
                            onChange={(value) => setSaturation(value)}
                        />
                        <div className='phl-slider-desc'>SATURATION</div>
                    </div>
                    <div className='phl-slider-element'>
                        <Slider className='phl-slider'
                            value={blur}
                            min={0}
                            max={2}
                            step={0.1}
                            onChange={(value) => setBlur(value)}
                        />
                        <div className='phl-slider-desc'>BLUR</div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Photoghraphy_link
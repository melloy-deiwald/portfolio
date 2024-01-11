import React from "react";
import './Printing.css'

import Rocket from './Printing/Rocket.jsx'
import Hornet from './media/printing/hornet.jpg'
import Knight from './media/printing/knight.jpg'
import Maddy from './media/printing/maddy.jpg'
import Titanic from './media/printing/titanic.jpg'
import Titanic_Front from './media/printing/titanic_front.jpg'


function Printing () {
    return (
        <div className="printing-container">

            <Rocket />

            <div style={{fontSize:"2rem"}}>Temporary not so cool looking image containers, as I keep working on it:</div>

            <div className="print" style={{fontSize:"1.5rem"}}>
                <div>Hornet from Hollow knight</div>
                <div>Printed at 1.5x size using PLA at .16mm and lots of support</div>
                <a className="clickable_cursor clicked_cursor" target="_blank" href="https://www.thingiverse.com/thing:3581249">Open in Thingieverse</a>
                <div className="print_img" ><img src={Hornet} alt="" /></div>
            </div>
            <div className="print" style={{fontSize:"1.5rem"}}>
                <div>The Knight from Hollow knight</div>
                <div>Printed at 0.9x size using PETG at .16mm and lots of support</div>
                <a className="clickable_cursor clicked_cursor" target="_blank" href="https://www.thingiverse.com/thing:2938641">Open in Thingieverse</a>
                <div className="print_img" ><img src={Knight} alt="" /></div>
            </div>
            <div className="print" style={{fontSize:"1.5rem"}}>
                <div>Madeline from Celeste</div>
                <div>Printed using PETG at .16mm and lots of support</div>
                <a className="clickable_cursor clicked_cursor" target="_blank" href="https://www.thingiverse.com/thing:5368759">Open in Thingieverse</a>
                <div className="print_img" ><img src={Maddy} alt="" /></div>
            </div>
            <div className="print" style={{fontSize:"1.5rem"}}>
                <div>RMS Titanic</div>
                <div>Printed using PETG at .16mm. Unfortunately has quite a bit of Warping</div>
                <a className="clickable_cursor clicked_cursor" target="_blank" href="https://www.thingiverse.com/thing:2726992">Open in Thingieverse</a>
                <div className="print_img" ><img src={Titanic} alt="" /></div>
                <div className="print_img" ><img src={Titanic_Front} alt="" /></div>
            </div>

        </div>
        
    );
}

export default Printing
import React from 'react'

import Rocket_img from '../media/printing/rocket_print.png'
import KSC from '../../icons/ksp.png'
import '../Printing.css'

function Rocket ()  {
    return(
        <div className="print rocket">
            <div className="rd_padding">
                <div className="rd_certification_title">SPACE CRAFT CERTIFICATION</div>
                <div className="rocket_description">
                    <div className="rd_title">
                        <div>TITLE: <span className="typewritten">Untitled Space Craft 1</span></div>
                        <div className="rd_issue">ISSUE DATE: <span className="typewritten">11.4.23</span> </div>
                    </div>
                    <div className="rd_description">
                        DESCRIPTION: 
                        <span className="typewritten">
                        Untitled Space Craft 1 is the first major rocket of the
                        Kerbal Space Centre. We are dedicated to provide you with <s>reliable</s>
                        rocket launch services at affordable prices! Our workhorse, the USC1,
                        has been in use with us for 3 years now. Fully 3d Printed and held
                        together using super glue, it is absolutely FAA certified! Printed
                        at 75% size &nbsp;
                        <a target="_blank" href="https://www.thingiverse.com/thing:3272654">See Blueprint!</a>
                        </span>

                    </div>
                    <div className="rd_approval">
                        <div className="rd_cert">CERTFICATION: <span className="typewritten approved">APPROVED</span></div>
                        <div className="rd_stamp"> STAMP: <div className="rd_stamp_c"><img className="d-border" src={KSC} alt="" /></div> </div>
                    </div> 
                </div>
            </div>

            <div className="rocket_img">
                <img src={Rocket_img} alt="" />
            </div>
        </div>
    );
}

export default Rocket
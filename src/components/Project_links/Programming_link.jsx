import React, {useRef, useState} from "react";
import "./programming_link.css";
import Punchcard from "./Punchcard.jsx";
import Programming_hover_text from "./Programming_hover_text";

function Programming_link ({ link, link_index }) {
    return(
        <div className="pl-wrapper">
            <div className="pl-container project">
                <div className="pc-main">
                    <div className="pl-text-container">
                        <div className="pl-description-title">
                            PROGRAM DESCRIPTION
                            <div className="pl-description">
                                programming front end react development or desktop applications using the godot engine.
                                processing reddit for linguistic analysis or simply improving css stylings. The programs
                                loaded on this machine perform various tasks, but are most commonly created for fun.
                                press compile to see the entire list of projects printed out to you!
                            </div>
                        </div>

                        <div className="flex flex-center">
                            <Programming_hover_text link_index={link_index} click_handler={link} text_value={"COMPILE"} />
                        </div>
                    </div>
                </div>

                <div className="pc-container">
                    <div className="pl-title">PROGRAMMING STATEMENT</div>
                    <Punchcard />
                </div>


            </div>
        </div>

    );
}

export default Programming_link
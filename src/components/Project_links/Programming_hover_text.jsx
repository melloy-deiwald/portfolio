import React, {useRef, useState} from "react";

function Programming_hover_text( {text_value, click_handler , link_index} ) {
    const button = useRef(null);
    const [compile_text, setCompileText] = useState(text_value);
    let scramble_interval = null;
    const original_text = text_value;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function transition () {
        clearInterval(scramble_interval);
        click_handler(link_index);
    }

    function button_over() {
        let iteration =  0;

        scramble_interval = setInterval(() => {
            let word = "";
            for(let o=0; o < iteration; o++){ //Add original letters back depending on iteration
                word += original_text[o];
            }
            for(let i=0; i < original_text.length-iteration; i++){ //Other letters are scrambled
                word += letters[Math.floor(Math.random() * 26)];
            }
            if(iteration == original_text.length-1){word = original_text}
            setCompileText(word);
            iteration += 1;
            if (iteration >= original_text.length){clearInterval(scramble_interval)}
        }, 100);
    }

    return(
        <div ref={button} onMouseOver={() => button_over()} onClick={() => transition()} className="pl-link">
            {compile_text}
        </div>
    );
}

export default Programming_hover_text
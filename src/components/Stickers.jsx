import React from "react";
import './Stickers.css'
import trans_anarchy from '../icons/trans_anarchy.png'
import trans_flag from '../icons/trans_flag.png'
import berry from '../icons/berry.png'
import skate from '../icons/skate.png'
import Toothless from "./Toothless.jsx"

function Stickers() {
  return(
      <div className="stickers">
        <img className="trans_anarchy hide_mobile" src={trans_anarchy} alt="trans_anarchy" />
        <img className="trans_flag hide_mobile" src={trans_flag} alt="trans_flag" />
        <img className="berry hide_mobile" src={berry} alt="berry" />
        <img className="skate hide_mobile" src={skate} alt="skate" />
        <Toothless className="hide_mobile" />
      </div>
  );
} export default Stickers
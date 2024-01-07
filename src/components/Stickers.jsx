import React from "react";
import './Stickers.css'
import trans_anarchy from '../icons/trans_anarchy.png'
import trans_flag from '../icons/trans_flag.png'

function Stickers() {



  return(
      <div className="stickers">
        <img className="trans_anarchy hide_mobile" src={trans_anarchy} alt="trans_anarchy" />
        <img className="trans_flag hide_mobile" src={trans_flag} alt="trans_flag" />
      </div>
  );
} export default Stickers
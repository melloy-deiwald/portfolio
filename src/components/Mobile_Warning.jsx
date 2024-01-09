import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import '../App.css'

function Mobile_Warning () {
  ;
  const currentPath = useLocation().pathname.replace(/^\/portfolio/, '').toLowerCase();
  useEffect(() => { //STARTUP
    if (currentPath === "/portfolio"){
      document.querySelector('.mobile_warning').style.display = 'none'
    }
    }, []); // END STARTUP


  return(

    <div className="mobile_warning">
      <div className="mobile_warning_info">
        Warning, this website is only meant for Desktop Computers
        proceed at your own risk. The most compatible area is
        <a href="https://melloy.myftp.org/portfolio/gallery"> the photography section </a>
         which can be viewed on
        mobile.
      </div>

      <div onClick={() => document.querySelector('.mobile_warning').style.display = 'none'} className="mobile_warning_button">proceed</div>
    </div>
  );
} export default Mobile_Warning
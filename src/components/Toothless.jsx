import React, {useEffect, useRef, useState} from 'react'
import toothless from '../icons/toothless.webm'
import './Stickers.css'

function Toothless () {
  const [show] = useState(Math.random() < 0.25);

  let toothlessRef = useRef(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toothlessRef.current.play();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return(
    show && (
      <video className='toothless hide_mobile' ref={toothlessRef} playsinline autoplay loop muted>
        <source src={toothless} type="video/webm" />
      </video>
    )

  );
} export default Toothless
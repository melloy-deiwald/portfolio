import './Gallery.css'
import React, { useEffect, useState, useRef } from 'react';
import Aperture from '../icons/aperture.png'
import Exposure from '../icons/exposure.png'
import Focal_Length from '../icons/focal_length.png'
import ISO from '../icons/iso.png'

function Gallery() {
    let [images, setImages] = useState([]);
    let [popup_data, setPopupData] = useState({
      "link": "",
      "name": "Test",
      "aperture": "5.6",
      "focal_length": "50mm",
      "iso": "800",
      "exposure": "1/60",
      "description": "lorem ipsum"
    });
    let popupRef = useRef(null);
    let greyRef = useRef(null);

    const importAll = (r) => {
      return r.keys().map(r);
    };
      
    const imagesImport = importAll(
      require.context("./media", false, /\.jpg$/)
    )
    const imageData = importAll(
      require.context("./media", false, /\.json$/)
    )

    const show_popup = (image, image_info) => {
      console.log(image, image_info);
      popup_data = {
        "link": image,
        "name": image_info.name,
        "aperture": image_info.aperture,
        "focal_length": image_info.focal_length,
        "iso": image_info.iso,
        "exposure": image_info.exposure,
        "description": image_info.description
      }
      setPopupData(popup_data);
      popupRef.current.style.top = "2.5vh";
      popupRef.current.style.left = "25vw";
      popupRef.current.style.transform = "rotate(0deg)";
      greyRef.current.style.background = "rgba(0, 0, 0, 0.35)";
      greyRef.current.style.pointerEvents = "all";
      greyRef.current.style.cursor = "pointer";
    }

    const close_popup = () => {
      console.log("closing popup");
      popupRef.current.style.top = "140vh";
      popupRef.current.style.left = "0vw";
      popupRef.current.style.transform = "rotate(45deg)";
      greyRef.current.style.background = "rgba(0, 0, 0, 0)";
      greyRef.current.style.pointerEvents = "none";
      greyRef.current.style.cursor = "default";
    }

    function generateImages(){
        if(images.length == 0){        
            for(let x = 0; x < imagesImport.length; x++){
                console.log(imagesImport[x]);
                console.log(imageData[x]);
                images = images.concat((
                  <div onClick={() => show_popup(imagesImport[x], imageData[x])} className='image_frame'>
                    <img className='image' src={imagesImport[x]} />
                    <div className='image_information'>
                      <div className='filler'></div>
                      <div className='text image_name'><p>{imageData[x].name}</p></div>
                      <div className='shot_info_container'>
                        <div className='text'><img src={Aperture}/><p>{imageData[x].aperture}</p></div>
                        <div className='text'><img src={Focal_Length}/><p>{imageData[x].focal_length}</p></div>
                        <div className='text'><img src={ISO}/><p>{imageData[x].iso}</p></div>
                        <div className='text'><img src={Exposure}/><p>{imageData[x].exposure}</p></div></div>
                    </div>
                  </div>
                
                ));
            }
            setImages(images);
        }
    }

    useEffect(() => {
        // This function will run when the component mounts
        generateImages();
    }, []); // The empty array ensures that this function only runs on mount



    return (
      <div className='image_container'>
        <div onClick={() => close_popup()} ref={greyRef} className='grey_out' />
        <div ref={popupRef} className='popup'>
          <div onClick={() => close_popup()} className='close_popup'>x</div>
          <img className='image' src={popup_data.link} alt="Image couldn't load" />
          <div className='image_information'>
              <div className='filler'></div>
              <div className='text image_name'><p>{popup_data.name}</p></div>
              <div className='text image_description'><p>{popup_data.description}</p></div>
              <div className='shot_info_container'>
                <div className='text'><img src={Aperture}/><p>{popup_data.aperture}</p></div>
                <div className='text'><img src={Focal_Length}/><p>{popup_data.focal_length}</p></div>
                <div className='text'><img src={ISO}/><p>{popup_data.iso}</p></div>
                <div className='text'><img src={Exposure}/><p>{popup_data.exposure}</p></div></div>
          </div>
        </div>
        {images}
      </div>
    );
  }
  
export default Gallery;
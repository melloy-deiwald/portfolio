import React, { useRef, useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import img from './media/birds_n_tree.json'

function OCRImage({ imageUrl }) {
  const canvasRef = useRef(null);
  let [text, setText] = useState("test");
  useEffect(() => {
    async function processImage() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
        console.log(ctx.isSecureContext());
        Tesseract.recognize(canvas)
          .then(function(result) {
            console.log(result.text);
          });
      };
    }
    processImage();
  }, [imageUrl]);

  return (
  <div>
    <canvas ref={canvasRef} />
    <div>{text}</div>
  </div>
  );
}

export default OCRImage;
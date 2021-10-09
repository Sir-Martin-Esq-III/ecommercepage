import React, { ReactElement, useState } from "react";
import img1 from "../../assets/image-product-1.jpg";
import img2 from "../../assets/image-product-2.jpg";
import img3 from "../../assets/image-product-3.jpg";
import img4 from "../../assets/image-product-4.jpg";
import img1Thumb from "../../assets/image-product-1-thumbnail.jpg";
import img2Thumb from "../../assets/image-product-2-thumbnail.jpg";
import img3Thumb from "../../assets/image-product-3-thumbnail.jpg";
import img4Thumb from "../../assets/image-product-4-thumbnail.jpg";
import "./styles.scss";
import LightBox from "../lightbox/index";
import Carousel from "../carousel/index";
interface Props {}

export default function ImageSelector({}: Props): ReactElement {
  const imageArray = [img1, img2, img3, img4];
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  const [toggleLightbox, settoggleLightbox] = useState(false);
  return (
    <div className="image-container">
      <img
        src={imageArray[currentImageIndex]}
        alt=""
        width="100%"
        onClick={() => {
          settoggleLightbox(true);
        }}
      />
      {toggleLightbox && (
        <LightBox toggle={settoggleLightbox}>
          <Carousel initalImage={currentImageIndex} />
        </LightBox>
      )}
      <div className="imageSelector">
        <button className="imgButton" onClick={() => setcurrentImageIndex(0)}>
          <img src={img1Thumb} alt="" />
        </button>
        <button className="imgButton" onClick={() => setcurrentImageIndex(1)}>
          <img src={img2Thumb} alt="" />
        </button>
        <button className="imgButton" onClick={() => setcurrentImageIndex(2)}>
          <img src={img3Thumb} alt="" />
        </button>
        <button className="imgButton" onClick={() => setcurrentImageIndex(3)}>
          <img src={img4Thumb} alt="" />
        </button>
      </div>
    </div>
  );
}

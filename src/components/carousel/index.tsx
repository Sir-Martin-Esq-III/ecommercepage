import React, { ReactElement, useState } from "react";
import img1 from "../../assets/image-product-1.jpg";
import img2 from "../../assets/image-product-2.jpg";
import img3 from "../../assets/image-product-3.jpg";
import img4 from "../../assets/image-product-4.jpg";

import { ReactComponent as Prev } from "../../assets/icon-previous.svg";
import { ReactComponent as Next } from "../../assets/icon-next.svg";
import "./styles.scss";
interface Props {
  initalImage?: number;
}

export default function Carousel({ initalImage }: Props): ReactElement {
  const imageArray = [img1, img2, img3, img4];
  const [currentImageIndex, setcurrentImageIndex] = useState(
    initalImage ? initalImage : 0
  );
  const handleButtonClick = (value: number) => {
    if (currentImageIndex + value < 0) {
      setcurrentImageIndex(imageArray.length - 1);
    } else if (currentImageIndex + value > imageArray.length - 1) {
      setcurrentImageIndex(0);
    } else {
      setcurrentImageIndex(currentImageIndex + value);
    }
  };
  return (
    <div className="carousel">
      <img src={imageArray[currentImageIndex]} alt="" width="100%" />

      <div className="buttons">
        <button onClick={() => handleButtonClick(-1)}>
          <Prev />
        </button>

        <button onClick={() => handleButtonClick(1)}>
          <Next />
        </button>
      </div>
    </div>
  );
}

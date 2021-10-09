import React, { ReactElement } from "react";
import AddToCart from "../addToCart";
import "./styles.scss";
interface Props {}

export default function ProductInfo({}: Props): ReactElement {
  return (
    <div className="product-info-container">
      <h3 className="brand-name"> Sneaker Company</h3>
      <h1 className="product-name">Fall Limited Edition Sneakers</h1>
      <p className="product-desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-price">
        <div className="left">
          <h2 className="Price">$150</h2>
          <p className="discount">50%</p>
        </div>

        <div className="right">
          <h2 className="oldPrice">%300</h2>
        </div>
      </div>
      <AddToCart price={150} product={"Fall Limited Edition Sneakers"} />
    </div>
  );
}

import React, { ReactElement } from "react";
import { Icard } from "../../consts";
import "./styles.scss";

interface Props {
  products: Icard[];
}

export default function Cart({ products }: Props): ReactElement {
  return (
    <div className="cart">
      <h4>Cart</h4>
      <div className="products-section">
        {products.length < 1 ? (
          <p>Your cart is empty</p>
        ) : (
          products.map((product) => (
            <div>
              <p>{product.productName}</p>
              <p>{product.count}</p>
              <p>{product.productPrice * product.count}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

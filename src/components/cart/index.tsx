import React, { ReactElement, useContext } from "react";
import { Icard } from "../../consts";
import { CartContext } from "../../contexts/cartContext";
import { ReactComponent as Remove } from "../../assets/icon-delete.svg";
import "./styles.scss";

interface Props {}

export default function Cart({}: Props): ReactElement {
  const { cart, setCart } = useContext(CartContext);

  const handleRemove = (index: number) => {
    console.log(index);
    let newCart = cart;
    newCart.splice(index, 1);
    setCart(newCart);
  };
  return (
    <div className="cart">
      <h4>Cart</h4>
      <div className="products-section">
        {cart.length < 1 ? (
          <p className="emptyCart">Your cart is empty</p>
        ) : (
          cart.map((product, index) => (
            <div className="cartItem" key={product.productName}>
              <img src={product.productImage} alt="" />
              <div className="cartInfo">
                <p>{product.productName}</p>
                <p>{`${product.count} x $${product.productPrice} $${
                  product.productPrice * product.count
                } `}</p>
              </div>
              <Remove onClick={() => handleRemove(index)} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

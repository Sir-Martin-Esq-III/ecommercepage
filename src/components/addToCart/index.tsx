import React, { ReactElement, useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./styles.scss";
//assets
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
interface Props {
  price: number;
  product: string;
}

type Icart = {
  productImage?: any;
  productName: string;
  count: number;
  productPrice: number;
};

export default function AddToCart({ price, product }: Props): ReactElement {
  const [counter, setcounter] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  const handlecounter = (value: number) => {
    if (counter + value >= 0) {
      setcounter(counter + value);
    }
  };

  const addToBasketHandler = () => {
    if (counter > 0) {
      const haveProduct = cart.findIndex(
        (item) => item.productName === product
      );
      if (haveProduct >= 0) {
        let newCart = cart;
        newCart[haveProduct].count += counter;
        setCart(newCart);
      } else {
        setCart([
          ...cart,
          { productName: product, productPrice: price, count: counter },
        ]);
      }
    }
  };
  return (
    <div className="add-to-cart">
      <div className="counter">
        <button className="minus" onClick={() => handlecounter(-1)}>
          -
        </button>
        <p className="currentcount">{counter}</p>
        <button className="add" onClick={() => handlecounter(1)}>
          +
        </button>
      </div>
      <button className="add-item" onClick={() => addToBasketHandler()}>
        <CartIcon />
        Add to basket
      </button>
    </div>
  );
}

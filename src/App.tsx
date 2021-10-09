import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./styles.scss";
import Header from "./components/header";
import Carousel from "./components/carousel";
import ProductInfo from "./components/product-info";
import ImageSelector from "./components/imageSelector";
import useWindowSize from "./hooks/useWindowSize";
import { CartContext } from "./contexts/cartContext";

interface Icard {
  productImage?: any;
  productName: string;
  count: number;
  productPrice: number;
}

function App() {
  const [cartItems, setcartItems] = useState<Icard[]>([]);
  const { width } = useWindowSize();
  return (
    <div className="App">
      <CartContext.Provider value={{ cart: cartItems, setCart: setcartItems }}>
        <Header />
        <div className="pageContent">
          {width && width < 768 ? <Carousel /> : <ImageSelector />}
          <ProductInfo />
        </div>
      </CartContext.Provider>
    </div>
  );
}

export default App;

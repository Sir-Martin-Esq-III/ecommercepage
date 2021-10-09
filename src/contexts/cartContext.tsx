import { createContext } from "react";

interface Icard {
  productImage?: any;
  productName: string;
  count: number;
  productPrice: number;
}

interface IcartContext {
  cart: Icard[];
  setCart: any; //todo
}

export const CartContext = createContext<IcartContext>({
  cart: [],
  setCart: "",
});

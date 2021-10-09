import { createContext } from "react";
import { Icard } from "../consts";

interface IcartContext {
  cart: Icard[];
  setCart: any; //todo
}

export const CartContext = createContext<IcartContext>({
  cart: [],
  setCart: "",
});

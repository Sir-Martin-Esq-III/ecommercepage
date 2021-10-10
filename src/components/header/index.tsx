import React, { ReactElement, useContext, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { CartContext } from "../../contexts/cartContext";
import Cart from "../cart";
import { MOBILE_SIZE } from "../../consts";
import "./styles.scss";
//assets
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";
import { ReactComponent as HamburgerMenuOpen } from "../../assets/icon-menu.svg";
import { ReactComponent as HamburgerMenuClose } from "../../assets/icon-close.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import pfp from "../../assets/image-avatar.png";

interface Props {}

export default function Header({}: Props): ReactElement {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  const [cartOpen, setcartOpen] = useState(false);

  const { width } = useWindowSize();
  const { cart } = useContext(CartContext);

  const menuItems = (
    <ul className="menuList">
      <li className="menuItem">Collections</li>
      <li className="menuItem">Men</li>
      <li className="menuItem">Women</li>
      <li className="menuItem">About</li>
      <li className="menuItem">Contact</li>
    </ul>
  );
  return (
    <div className="header">
      <div className="left">
        {width && width < MOBILE_SIZE ? (
          <div className="hamburger">
            <div
              className="icon-container"
              onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
            >
              <HamburgerMenuOpen />
            </div>
            {mobileMenuOpen && (
              <div className="mobileMenu">
                <div className="mobile-content">
                  <HamburgerMenuClose
                    onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
                  />
                  {menuItems}
                </div>
              </div>
            )}
          </div>
        ) : (
          menuItems
        )}
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="right">
        <div className="cart-icon">
          <CartIcon onClick={() => setcartOpen(!cartOpen)} />

          {cartOpen && <Cart />}
        </div>
        <div className="profile">
          <img src={pfp} alt="" />
        </div>
      </div>
    </div>
  );
}

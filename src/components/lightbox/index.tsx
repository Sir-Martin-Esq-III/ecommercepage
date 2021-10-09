import React, { Children, ReactElement } from "react";
import { ReactComponent as HamburgerMenuClose } from "../../assets/icon-close.svg";
import "./styles.scss";
interface Props {
  children: React.ReactNode;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Lightbox({ children, toggle }: Props): ReactElement {
  return (
    <div className="lightbox">
      <div className="child-container">
        <HamburgerMenuClose onClick={() => toggle(false)} />
        {children}
      </div>
    </div>
  );
}

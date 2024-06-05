import React from "react";
import Images from "../../images";
import {NavContainer} from "./index.styles";

export default function Nav() {
  return (
    <NavContainer>
        <Images.Logo />
        <h3>nina.<span>amdal( )</span></h3>
    </NavContainer>
  );
}
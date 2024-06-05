import React from "react";
import { FooterContainer } from "./index.styles";
import Images from "../../images";

export default function Footer() {
  return (
    <FooterContainer>
      <Images.Logo />
      <p>Nina Amdal</p>
    </FooterContainer>
  );
}
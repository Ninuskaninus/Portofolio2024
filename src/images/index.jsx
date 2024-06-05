import React from "react";
import Logo from "./logo.png";
import Sass from "./sass.png";
import ReactLogo from "./react.png";
import Html from "./html.png";
import Css from "./css.png";
import Javascript from "./js.png";
import Github from "./github.png";
import Netlify from "./netlify.png";
import Bootstrap from "./bootstrap.png";
import Portrait from "./ninaamdal.png"
import Discord from "./discord.png";
import Mail from "./mail.png";

const Images = {
  Logo: () => <img src={Logo} alt="logo" />,
  Sass: () => <img src={Sass} alt="sass" />,
  React: () => <img src={ReactLogo} alt="react" />,
  Html: () => <img src={Html} alt="html" />,
  Css: () => <img src={Css} alt="css" />,
  Javascript: () => <img src={Javascript} alt="javascript" />,
  Github: () => <img src={Github} alt="github" />,
  Netlify: () => <img src={Netlify} alt="netlify" />,
  Bootstrap: () => <img src={Bootstrap} alt="bootstrap" />,
  Portrait: () => <img src={Portrait} alt="portrait" />,
  Discord: () => <img src={Discord} alt="discord" />,
  Mail: () => <img src={Mail} alt="mail" />
};

export default Images;


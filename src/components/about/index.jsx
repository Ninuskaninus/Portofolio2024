import React from "react";
import {AboutContact, AboutIcons, AboutBody, AboutHead, AboutContainer, AboutContent} from "./index.styles";
import Images from "../../images";

export default function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutHead>
          <h1>about<span>.me( )</span></h1>
          <Images.Portrait />
        </AboutHead>
        <AboutBody>
          <p>Hi there! I’m Nina Amdal, born in 1994 and brimming with creativity and enthusiasm. I hold a Bachelor’s degree in Graphic Design, and I’ve also delved into UX Design and Frontend Development at Noroff. Out of everything I’ve learned, prototyping and developing are my true passions—I love bringing ideas to life and creating engaging, interactive designs.
          I’m a happy and outgoing person who thrives on new challenges and enjoys working with others to create something amazing.</p>
          <AboutIcons>
            <h2>I work with:</h2>
            <div>
              <Images.Html />
              <Images.Css />
              <Images.Javascript />
              <Images.Sass />
              <Images.React />
              <Images.Bootstrap />
            </div>
          </AboutIcons>
          <AboutContact>
            <div><Images.Discord /> <p>Discord | NinaAmdal#4238</p> </div>
            <div><Images.Github /> <p>Email | Ninuskaninus </p> </div>
            <div><Images.Mail /> <p>Mail | nina@ninaamdal.com </p> </div>
          </AboutContact>
        </AboutBody>
      </AboutContent>
    </AboutContainer>
  )
}
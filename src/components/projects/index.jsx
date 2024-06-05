import React from "react";
import {ProjectsContainer, ProjectsContent} from "./index.styles";
import MyProjects from "../myProjects";

export default function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <h1>my<span>.projects ( )</span></h1>
        <MyProjects />
      </ProjectsContent>
    </ProjectsContainer>
  )
}
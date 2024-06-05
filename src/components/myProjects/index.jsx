import React from "react";
import projects from "../../js/projects";
import { CardIcons, CardLink, CardBottom, CardTitle, CardContent, Card, CardImage } from "./index.styles";
import Images from "../../images";

export default function MyProjects() {

  const iconHandler = (build) => {
    const icons = [];
    if (build.bootstrap) icons.push(<Images.Bootstrap key="bootstrap" />);
    if (build.sass) icons.push(<Images.Sass key="sass" />);
    if (build.javascript) icons.push(<Images.Javascript key="javascript" />);
    if (build.html) icons.push(<Images.Html key="html" />);
    if (build.css) icons.push(<Images.Css key="css" />);
    if (build.react) icons.push(<Images.React key="react" />);
    return icons;
  };

  return (
    <>
      {projects.map(project => (
        <Card key={project.id}>
          <CardImage>
            <img src={project.image} alt={project.title} />
          </CardImage>
          <CardContent>
            <CardTitle>
              <p><span>Title:</span> {project.title}</p>
              <p><span>Assignment:</span> {project.lession}</p>
            </CardTitle>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <CardBottom>
              <CardIcons>
                {iconHandler(project.build)}
              </CardIcons>
              <CardLink>
                <a href={project.netlify} target="_blank" rel="noreferrer"><Images.Netlify /></a>
                <a href={project.github} target="_blank" rel="noreferrer"><Images.Github /></a>
              </CardLink>
            </CardBottom>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

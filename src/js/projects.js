import bidcraft from "../images/bidcraft.png";
import holidaze from "../images/holidaze.png";
import trendz from "../images/trendz.png";

const projects = [
  {
    id: 1,
    title: "Bidcraft",
    lession: "Semester project 2",
    description:
      "The auction website project demonstrates the ability to integrate front-end development skills with API utilization, adhering to user stories, technical constraints, and project management practices. This project is build using Bootstrap and Sass. ",
    build: {
      bootstrap: true,
      sass: true,
      javascript: true,
      html: true,
      css: false,
      react: false,
    },
    netlify: "",
    github: "",
    image: bidcraft,
  },
  {
    id: 2,
    title: "Trendz",
    lession: "Javascript Frameworks",
    description:
      "The auction website project demonstrates the ability to integrate front-end development skills with API utilization, adhering to user stories, technical constraints, and project management practices. This project is build using Bootstrap and Sass. ",
    build: {
      bootstrap: false,
      sass: false,
      javascript: true,
      html: true,
      css: false,
      react: true,
    },
    netlify: "",
    github: "",
    image: trendz,
  },
  {
    id: 3,
    title: "Holidaze",
    lession: "Project Exam 2",
    description:
      "The auction website project demonstrates the ability to integrate front-end development skills with API utilization, adhering to user stories, technical constraints, and project management practices. This project is build using Bootstrap and Sass. ",
    build: {
      bootstrap: false,
      sass: false,
      javascript: true,
      html: true,
      css: false,
      react: true,
    },
    netlify: "",
    github: "",
    image: holidaze,
  },
];

export default projects;

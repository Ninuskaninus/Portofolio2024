import bidcraft from "../images/bidcraft.png";
import holidaze from "../images/holidaze.png";
import trendz from "../images/trendz.png";

const projects = [
  {
    id: 1,
    title: "Bidcraft",
    lession: "Semester project 2",
    description:
      "The e-commerce store project demonstrates the ability to integrate front-end development skills with API utilization, adhering to user stories, technical constraints, and project management practices. This project is built using React and styled-components. ",
    build: {
      bootstrap: true,
      sass: true,
      javascript: true,
      html: true,
      css: false,
      react: false,
    },
    netlify: "https://tubular-salmiakki-a0ca6b.netlify.app/",
    github: "https://github.com/Ninuskaninus/SA2",
    image: bidcraft,
  },
  {
    id: 2,
    title: "Trendz",
    lession: "Javascript Frameworks",
    description:
      "The auction website project demonstrates the ability to integrate front-end development skills with API utilization, adhering to user stories, technical constraints, and project management practices. This project is built using an approved CSS framework and hosted on an approved static host. ",
    build: {
      bootstrap: false,
      sass: false,
      javascript: true,
      html: true,
      css: false,
      react: true,
    },
    netlify: "https://trendzzz.netlify.app/",
    github: "https://github.com/Ninuskaninus/javascript-frameworks-CA",
    image: trendz,
  },
  {
    id: 3,
    title: "Holidaze",
    lession: "Project Exam 2",
    description:
      "This venue booking website project demonstrates the ability to integrate front-end development skills with API utilization, adhering to user stories, technical constraints, and project management practices. This project is build using Bootstrap and styled-components. ",
    build: {
      bootstrap: false,
      sass: false,
      javascript: true,
      html: true,
      css: false,
      react: true,
    },
    netlify: "https://holidaze-exam.netlify.app/",
    github: "https://github.com/Ninuskaninus/ProjectExam2",
    image: holidaze,
  },
];

export default projects;

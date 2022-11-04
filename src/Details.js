// Enter all your detials in this file
import Typewriter from "typewriter-effect";
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo.png";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vue from "./assets/techstack/vue.png";
import python from "./assets/techstack/python.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import wordpress from "./assets/techstack/wordpress.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import tableau from "./assets/techstack/tableau.png";
import powerbi from "./assets/techstack/powerbi.png";
import excel from "./assets/techstack/Excel.png";
import word from "./assets/techstack/Word.png";
import powerpoint from "./assets/techstack/PowerPoint.png";
import plotly from "./assets/techstack/plotly.png";
import seaborn from "./assets/techstack/seaborn.png";
import matplotlib from "./assets/techstack/matplotlib.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Chinmay Pradhan",
  tagline:<Typewriter
  options={{loop:true, autoStart: true}}
  onInit={(typewriter)=> {
  typewriter
  .typeString("I am Specialized in Data Visualization")  
  .pauseFor(1500)
  .deleteChars(18)
  .typeString("Data Analysis")
  .pauseFor(1500)
  .deleteChars(13)
  .typeString("Business Analytics")
  .pauseFor(1500)
  .deleteChars(18)
  .typeString("") 
  .start();
  }}
  />,
  img: profile,
  about: `Experienced Associate Developer with a demonstrated history of working in the information technology and services industry. Skilled in Data Visualization, Python, Business Intelligence, R, and Algorithms. Strong engineering professional with a Master of Science focused in Computer Science from Somaiya Vidyavihar.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/chinmaypradhan2911",
  github: "https://www.github.com/Chinmay2911",
  twitter: "https://twitter.com/Chinmayp29",
  instagram: "https://www.instagram.com/_chinmay_p_",
};


// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  vue: vue,
  sass: sass,
  python: python,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  wordpress: wordpress,
  git: git,
  github: github,
  figma: figma,
  tableau: tableau,
  powerbi: powerbi,
  excel: excel,
  word: word,
  powerpoint: powerpoint,
  plotly:plotly,
  seaborn:seaborn,
  matplotlib:matplotlib,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Chatbot Data Analysis",
    image: projectImage1,
    description: `From the backend side, all the queries are collected and it creates a dashboard on Tableau which makes it easier to understand what students are keen to know about the college.`,
    techstack: "Python, NLP, ML, HTML, CSS",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Chinmay2911/Chatbot-Data-Analysis",
  },
  {
    title: "Driver’s Drowsiness Detection System",
    image: projectImage2,
    description: `This system will monitor the driver eyes using a camera and by developing an algorithm we can detect symptoms of driver fatigue early enough to avoid the person from sleeping.`,
    techstack: "Python, Machine Learning",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Chinmay2911/Driver-Drowsiness-Detection-System",
  },
  {
    title: "COVID-19 Prediction and Forecasting using Machine Learning",
    image: projectImage3,
    description: `Analysis and Prediction of cases in future on COVID-19 which was 92% accurate. Linear Regression and Support Vector Machine was used for prediction & model was trained with accuracy of 98%.`,
    techstack: "Python, Linear Regression, Logistic Regression, Data Analysis, Data Visualization",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Chinmay2911/COVID-19-Prediction-and-Forecasting-using-Machine-Learning",
  },
  {
    title: "Football Player Detection",
    image: projectImage4,
    description: `Player detection and ball detection in Football videos There are multiple ways to detect players in any sports videos. Here I have used simple image processing techniques to detect players by only using opencv. It detects first the green ground and make everything other then green color into black.`,
    techstack: "Python, Linear Regression, Logistic Regression, Data Analysis, Data Visualization",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Chinmay2911/Player_detection",
  },
  {
    title: "QR-Code Attendance System",
    image: projectImage5,
    description: `The proposed system generates unique QR code for every student. The teacher needs to scan the QR code of particular student in order to confirm the student’s attendance. This system enables us to speed up the process of taking attendance and would save us valuable teaching time.`,
    techstack: "Python, JAVA, Google Apps Script, Database Management, Google APIs",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Chinmay2911/QR-Code-Attendance",
  },
  {
    title: "Predicting IMDB Movie Rating",
    image: projectImage6,
    description: `Using Machine Learning to predict the IMDB score with the meaningful variables. Using a Random Forest algorithm (500 estimators).`,
    techstack: "Python, BeautifulSoup, Parsing data, Data Analysis, Data Visualization",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Chinmay2911/ProjectMovieRating",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "chinmay29pradhan@gmail.com",
  phone: "+91 7977210415",
};

import bevvie from "../../src/assets/bevvie.png";
import gradescope from "../../src/assets/gradescope.jpg";
import calendar from "../../src/assets/calendar.png";
import journal from "../../src/assets/journal.png";
import att from "../../src/assets/att.png";
import ucsd from "../../src/assets/UCSD_Seal.png";
import enrole from "../../src/assets/enrole.png";

import html from "../../src/assets/html.png";
import css from "../../src/assets/css.png";
import js from "../../src/assets/js.png";
import angular from "../../src/assets/angular.png";
import react from "../../src/assets/react.png";
import bs from "../../src/assets/bootstrap.svg";

import flutter from "../../src/assets/flutter.png";
import dart from "../../src/assets/dart.png";
import cplus from "../../src/assets/cplus.png";
import python from "../../src/assets/python.png";
import swift from "../../src/assets/swift.svg";
import mysql2 from "../../src/assets/mysql2.png";
import java from "../../src/assets/java.png";
import django from "../../src/assets/django.png";
import ts from "../../src/assets/ts.png";
import sql from "../../src/assets/sql.png";

import jira from "../../src/assets/jira.png";
import trello from "../../src/assets/trello.png";
import palantir from "../../src/assets/palantir.png";
import pbi from "../../src/assets/powerbi.png";
import xcode from "../../src/assets/xcode.png";
import aws from "../../src/assets/aws.png";
import bash from "../../src/assets/bash.png";

import ms from "../../src/assets/ms.png";
import graphql from "../../src/assets/graphql.png";
import express from "../../src/assets/express.png";
import github from "../../src/assets/github.png";
import azure from "../../src/assets/azure.png";

import glassy from "../../src/assets/glassy.png";

export const projects = [
  {
    title: "glassy",
    text1:
      "Introducing Glassy, your skincare soulmate! With Glassy, you can track every serum, cream, and lotion you’ve ever loved (or not loved)! Rate them, review them, and use them to craft your perfect personalized skincare routine.",
    text2:
      "Let’s keep it glassy and achieve that flawless “glass skin” that you can be comfortable in!",
    image: glassy,

    intro:
      "I love having a beverage. A beverage when it's hot, a beverage when it's cold, a beverage when I'm working, and a beverage while I'm slacking. So many reckless beverage purchases, it's so hard to keep track of my financial catastrophe as well as what beverages I have historically liked.",
    body: "Bevvie is a mobile application developed using Swift that serves as a platform to track, analyze, and recollect all your favorite beverages, also known as a bevvie! Bevvie allows users to log in, record the name, location, price, and type of bevvie they purchased that day, inputting it into their own personal database record of lifetime bevvies!",
    items: ["MongoDB", "Express", "NodeJS", "React Native", "Figma"],
    github: "https://github.com/ngoallison",
  },
  {
    title: "Bevvie",
    text1:
      "Bevvie, the ultimate quench-venture companion! Sip, snap, and savor your way through a lifetime of beverages, AKA bevvies, by tracking, analyzing, and commemorating each bevvie you purchase.",
    text2:
      "Cheers to memorializing our sweet little treats, one Bevvie at a time!",
    image: bevvie,

    intro:
      "I love having a beverage. A beverage when it's hot, a beverage when it's cold, a beverage when I'm working, and a beverage while I'm slacking. So many reckless beverage purchases, it's so hard to keep track of my financial catastrophe as well as what beverages I have historically liked.",
    body: "Bevvie is a mobile application developed using Swift that serves as a platform to track, analyze, and recollect all your favorite beverages, also known as a bevvie! Bevvie allows users to log in, record the name, location, price, and type of bevvie they purchased that day, inputting it into their own personal database record of lifetime bevvies!",
    items: ["Swift", "Xcode", "Firebase", "Figma"],
    github: "https://github.com/ngoallison",
  },

  {
    title: "Gradescope Scheduler",
    text1:
      "As a student, tracking deadlines is essential, especially in the era of remote learning. This script combines Gradescope, a dashboard for school assignments, and Google Calendar to track assignment deadlines and save our grades!",
    image: gradescope,
    image2: calendar,

    intro:
      "I love having a beverage. A beverage when it's hot, a beverage when it's cold, a beverage when I'm working, and a beverage while I'm slacking. So many reckless beverage purchases, it's so hard to keep track of my financial catastrophe as well as what beverages I have historically liked.",
    body: "Bevvie is a mobile application developed using Swift that serves as a platform to track, analyze, and recollect all your favorite beverages, also known as a bevvie! Bevvie allows users to log in, record the name, location, price, and type of bevvie they purchased that day, inputting it into their own personal database record of lifetime bevvies!",
    items: ["Python", "Google API"],
    github: "https://github.com/samliu000/GradescopeScheduler",
  },

  {
    title: "Bullet Journal",
    text1:
      "This bullet journal web application lets you plan your day from top to bottom, writing down daily to-do lists, taking notes, setting event reminders, and using a nifty calendar to see your weekly overview.",

    image: journal,
    intro:
      "I love having a beverage. A beverage when it's hot, a beverage when it's cold, a beverage when I'm working, and a beverage while I'm slacking. So many reckless beverage purchases, it's so hard to keep track of my financial catastrophe as well as what beverages I have historically liked.",
    body: "Bevvie is a mobile application developed using Swift that serves as a platform to track, analyze, and recollect all your favorite beverages, also known as a bevvie! Bevvie allows users to log in, record the name, location, price, and type of bevvie they purchased that day, inputting it into their own personal database record of lifetime bevvies!",
    items: ["HTML", "CSS", "Javascript", "Figma", "Miro"],
    github: "https://github.com/cse110-sp21-group31/cse110-sp21-group31",
  },
];

export const experiences = [
  {
    time: "Jul 2023 - Present",
    image: att,
    company: "AT&T",
    location: "El Segundo, CA",
    title: "Software Engineer",
    description: [
      "Utilized SQL in Palantir tables to analyze customer data, discover relationships, and optimize marketing strategies",
      "Strategically defined target audiences in Neustar DMP with key customer attributes to cater marketing campaigns",
      "Leveraged Palantir tools to construct robust data pipelines and custom applications to aid user workflows"
    ],
    items: ["Python", "SQL", "React", "Palantir", "PowerBI", "Jira"],
  },
  {
    time: "Sep 2022 - Mar 2023",
    image: ucsd,
    company: "UC San Diego",
    location: "La Jolla, CA",
    title: "Computer Science Tutor",
    description: [
      "Engaged with over 300 students in course lectures to encourage discussion and foster a safe learning environment",
      "Facilitated weekly computer lab sessions with multiple groups of 10-20 students to complete an assigned task",
      "Held one-on-one office hours to guide students on coursework, answer questions, and improve understanding",
      "Administered exams and graded coursework, offering insightful feedback to promote student learning"
    ],
    items: ["Java", "Python", "Bash", "Trello"],
  },
  {
    time: "Jun 2022 - Aug 2022",
    image: att,
    company: "AT&T",
    location: "El Segundo, CA",
    title: "Software Engineer Intern",
    description: [
      "Developed and maintained a dynamic company website leveraging tools such as Django, SQL, and Angular",
      "Designed, produced, and proposed a software solution idea during company broadcast alongside team members",
      "Streamlined a repetitive internal process by creating a Python tkinter GUI, reducing completion time by 75%"
    ],
    items: ["Typescript", "Angular", "SQL", "Python", "Django"],
  },
  {
    time: "Jun 2021 - Apr 2022",
    image: enrole,
    company: "Enrole",
    location: "Remote",
    title: "Frontend Developer Intern",
    description: [
      "Contributed to design and development of key app features and responsive design for enhanced user experience",
      "Demonstrated proficiency in tools such as Flutter, Dart, AWS, and mobile emulators to build components",
      "Spearheaded talent recruitment and hiring of new interns, participating in candidate interviews and assessments"
    ],
    items: ["Flutter", "Dart", "AWS", "XCode", "Jira"],
  },
];

export const skills = {
  items: [
    { name: "HTML", img: html, category: "Languages and Databases" },
    { name: "CSS", img: css, category: "Languages and Databases" },
    { name: "Javascript", img: js, category: "Languages and Databases" },
    { name: "Typescript", img: ts, category: "Languages and Databases" },
    { name: "Python", img: python, category: "Languages and Databases" },
    { name: "Java", img: java, category: "Languages and Databases" },
    { name: "C++", img: cplus, category: "Languages and Databases" },
    { name: "Dart", img: dart, category: "Languages and Databases" },
    { name: "Swift", img: swift, category: "Languages and Databases" },
    { name: "SQL", img: sql, category: "Languages and Databases" },
    { name: "MySQL", img: mysql2, bg: true, category: "Languages and Databases" },
    { name: "GraphQL", img: graphql, category: "Languages and Databases" },
    { name: "Angular", img: angular, category: "Frameworks" },
    { name: "React", img: react, category: "Frameworks" },
    { name: "Express", img: express, category: "Frameworks" },
    { name: "Bootstrap", img: bs, bg: true, category: "Frameworks" },
    { name: "Flutter", img: flutter, category: "Frameworks" },
    { name: "Django", img: django, category: "Frameworks" },
    { name: "Bash", img: bash, category: "Other Tools" },
    { name: "Azure", img: azure, category: "Other Tools" },
    { name: "AWS", img: aws, category: "Other Tools" },
    { name: "GitHub", img: github, category: "Other Tools" },
    { name: "Microsoft Office", img: ms, category: "Other Tools" },
    { name: "Trello", img: trello, category: "Other Tools" },
    { name: "Jira", img: jira, category: "Other Tools" },
    { name: "Palantir", img: palantir, category: "Other Tools" },
    { name: "PowerBI", img: pbi, category: "Other Tools" },
    { name: "XCode", img: xcode, category: "Other Tools" },
  ]
};

export const languages = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "Javascript", img: js },
  { name: "Typescript", img: ts },
  { name: "Python", img: python },
  { name: "Java", img: java },
  { name: "C++", img: cplus },
  { name: "Dart", img: dart },
  { name: "Swift", img: swift },
  { name: "SQL", img: sql },
  { name: "MySQL", img: mysql2, bg: true },
  { name: "GraphQL", img: graphql },
];

export const frameworks = [
  { name: "Angular", img: angular },
  { name: "React", img: react },
  { name: "Express", img: express },
  { name: "Bootstrap", img: bs, bg: true },
  { name: "Flutter", img: flutter },
  { name: "Django", img: django },
  { name: "Bash", img: bash },
];


export const tools = [
  { name: "Azure", img: azure },
  { name: "AWS", img: aws },
  { name: "GitHub", img: github },
  { name: "Microsoft Office", img: ms },
  { name: "Trello", img: trello },
  { name: "Jira", img: jira },
  { name: "Palantir", img: palantir },
  { name: "PowerBI", img: pbi },
  { name: "XCode", img: xcode },
];


export const contact = {
  linkedin: "https://www.linkedin.com/in/allisontlngo/",
  resume: "https://drive.google.com/file/d/13IJOchWpUyLRubsEtXAyRB7z9EwfJ2Ej/view?usp=drive_link"
};






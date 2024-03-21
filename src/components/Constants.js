const cloudDomain = "https://d1p3lk0dk2gfrv.cloudfront.net/";

export const images = {
  angular: `${cloudDomain}angular.png`,
  art: `${cloudDomain}art.png`,
  att: `${cloudDomain}att.png`,
  aws: `${cloudDomain}aws.png`,
  azure: `${cloudDomain}azure.png`,
  bash: `${cloudDomain}bash.png`,
  bevvie: `${cloudDomain}bevvie.png`,
  bootstrap: `${cloudDomain}bootstrap.svg`,
  brand: `${cloudDomain}brand.png`,
  calendar: `${cloudDomain}calendar.png`,
  cplus: `${cloudDomain}cplus.png`,
  contact: `${cloudDomain}contact_art.png`,
  css: `${cloudDomain}css.png`,
  dart: `${cloudDomain}dart.png`,
  django: `${cloudDomain}django.png`,
  enrole: `${cloudDomain}enrole.png`,
  express: `${cloudDomain}express.png`,
  flutter: `${cloudDomain}flutter.png`,
  github: `${cloudDomain}github.png`,
  glassy: `${cloudDomain}glassy.png`,
  gradescope: `${cloudDomain}gradescope.jpg`,
  graphql: `${cloudDomain}graphql.png`,
  html: `${cloudDomain}html.png`,
  java: `${cloudDomain}java.png`,
  javascript: `${cloudDomain}js.png`,
  jira: `${cloudDomain}jira.png`,
  journal: `${cloudDomain}journal.png`,
  ms: `${cloudDomain}ms.png`,
  mysql: `${cloudDomain}mysql2.png`,
  node: `${cloudDomain}node.png`,
  palantir: `${cloudDomain}palantir.png`,
  powerbi: `${cloudDomain}powerbi.png`,
  python: `${cloudDomain}python.png`,
  react: `${cloudDomain}react.png`,
  sql: `${cloudDomain}sql.png`,
  swift: `${cloudDomain}swift.svg`,
  trello: `${cloudDomain}trello.png`,
  typescript: `${cloudDomain}ts.png`,
  ucsd: `${cloudDomain}UCSD.png`,
  xcode: `${cloudDomain}xcode.png`,
}

export const projects = [
  {
    title: "glassy",
    text1:
      "Introducing Glassy, your skincare soulmate! With Glassy, you can track every serum, cream, and lotion you’ve ever loved (or not loved)! Rate them, review them, and use them to craft your perfect personalized skincare routine.",
    text2:
      "Let’s keep it glassy and achieve that flawless “glass skin” that you can be comfortable in!",
    image: images.glassy,

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
    image: images.bevvie,

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
    image: images.gradescope,
    image2: images.calendar,

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

    image: images.journal,
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
    image: images.att,
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
    image: images.ucsd,
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
    image: images.att,
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
    image: images.enrole,
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
    { name: "HTML", img: images.html, category: "Languages and Databases" },
    { name: "CSS", img: images.css, category: "Languages and Databases" },
    { name: "Javascript", img: images.javascript, category: "Languages and Databases" },
    { name: "Typescript", img: images.typescript, category: "Languages and Databases" },
    { name: "Python", img: images.python, category: "Languages and Databases" },
    { name: "Java", img: images.java, category: "Languages and Databases" },
    { name: "C++", img: images.cplus, category: "Languages and Databases" },
    { name: "Dart", img: images.dart, category: "Languages and Databases" },
    { name: "Swift", img: images.swift, category: "Languages and Databases" },
    { name: "SQL", img: images.sql, category: "Languages and Databases" },
    { name: "MySQL", img: images.mysql, bg: true, category: "Languages and Databases" },
    { name: "GraphQL", img: images.graphql, category: "Languages and Databases" },
    { name: "Angular", img: images.angular, category: "Frameworks" },
    { name: "React", img: images.react, category: "Frameworks" },
    { name: "Express", img: images.express, category: "Frameworks" },
    { name: "Bootstrap", img: images.bootstrap, bg: true, category: "Frameworks" },
    { name: "Flutter", img: images.flutter, category: "Frameworks" },
    { name: "Django", img: images.django, category: "Frameworks" },
    { name: "Bash", img: images.bash, category: "Other Tools" },
    { name: "Azure", img: images.azure, category: "Other Tools" },
    { name: "AWS", img: images.aws, category: "Other Tools" },
    { name: "GitHub", img: images.github, category: "Other Tools" },
    { name: "Microsoft Office", img: images.ms, category: "Other Tools" },
    { name: "Trello", img: images.trello, category: "Other Tools" },
    { name: "Jira", img: images.jira, category: "Other Tools" },
    { name: "Palantir", img: images.palantir, category: "Other Tools" },
    { name: "PowerBI", img: images.powerbi, category: "Other Tools" },
    { name: "XCode", img: images.xcode, category: "Other Tools" },
  ]
};

export const languages = [
  { name: "HTML", img: images.html },
  { name: "CSS", img: images.css },
  { name: "Javascript", img: images.javascript },
  { name: "Typescript", img: images.typescript },
  { name: "Python", img: images.python },
  { name: "Java", img: images.java },
  { name: "C++", img: images.cplus },
  { name: "Dart", img: images.dart },
  { name: "Swift", img: images.swift },
  { name: "SQL", img: images.sql },
  { name: "MySQL", img: images.mysql2, bg: true },
  { name: "GraphQL", img: images.graphql },
];

export const frameworks = [
  { name: "Angular", img: images.angular },
  { name: "React", img: images.react },
  { name: "Express", img: images.express },
  { name: "Bootstrap", img: images.bs, bg: true },
  { name: "Flutter", img: images.flutter },
  { name: "Django", img: images.django },
  { name: "Bash", img: images.bash },
];


export const tools = [
  { name: "Azure", img: images.azure },
  { name: "AWS", img: images.aws },
  { name: "GitHub", img: images.github },
  { name: "Microsoft Office", img: images.ms },
  { name: "Trello", img: images.trello },
  { name: "Jira", img: images.jira },
  { name: "Palantir", img: images.palantir },
  { name: "PowerBI", img: images.powerbi },
  { name: "XCode", img: images.xcode },
];


export const contact = {
  linkedin: "https://www.linkedin.com/in/allisontlngo/",
  resume: "https://drive.google.com/file/d/13IJOchWpUyLRubsEtXAyRB7z9EwfJ2Ej/view?usp=drive_link"
};






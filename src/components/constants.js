export const PAGE_ITEMS = {
  HOME: {
    label: 'Home',
    to: 'home',
    offset: -50,
  },
  ABOUT: {
    label: 'About',
    to: 'about',
    offset: -100,
  },
  EXPERIENCE: {
    label: 'Experience',
    to: 'experience',
    offset: -100,
  },
  PROJECT: {
    label: 'Project',
    to: 'project',
    offset: -100,
  },
  CONTACT: {
    label: 'Contact',
    to: 'footer',
    offset: -100,
  },
};

export const HOME = {
  HOME_INTRO: `I'm a software engineer based in LA, specializing on building
functional and perfomance websites and applications.`,
  FIRST_INTRO: 'I love building things and solving real world problems.',
  GREETINGS: 'Hi, my name is',
  NAME: 'JiaEn Chua',
  GET_IN_TOUCH: 'Get In Touch',
};

export const ARCHIVE_DATA = [
  {
    link: 'https://jiaenchua.github.io/#handi_glove',
    name: 'Handi_glove, Fall 2018',
    description:
      "Robotic arm that's controlled by a pair of gloves which is integrated with heat and pressure sensation real time feedback",
  },
  {
    link: 'https://jiaenchua.github.io/#jobCrawler',
    name: 'Dream Job Catcher, Fall 2017',
    description:
      "Using Python Selenium webdriver to launch a 'search' on recruiting site. Navigation the desired page and parse the entire webpage. Crawl job information like title, company, location, salary and so on by using BautifulSoup. Generate a cvs spreadsheet and output information extracted online.",
  },
  {
    link: 'https://jiaenchua.github.io/#spark',
    name: 'Autonomous Obstacle-avoiding Robot, Spring 2017',
    description:
      'I co-wrote the software for this robot. I invented the logic and convinced my teammates of the efficiency of my solution in terms of space complexity. Space is important in this competition because we are using 9S12C micro-controller which does not have a decent amount of memory space. I utilized tool like GDB to efficiently debug the program and I make sure the code is human-readable.',
  },
];

export const CERNER_DESCRIPTION = {
  imgLink:
    'https://github.com/JiaEnChua/JiaEnChua.github.io/blob/master/pic/cerner.png?raw=true',
  imgAlt: 'cerner.png',
  timeline: 'April 2019 - Present',
  bulletPoints: [
    'Develop large scaled object-oriented software that supports project, finance and resource management.',
    'Build and Deploy Time Logging integration with 3rd Party interface through SOAP and Oracle SQL.',
    'Implement a server monitor to achieve Server’s Health Visualization.',
  ],
};

export const CAM2_DESCRIPTION = {
  imgLink:
    'https://github.com/JiaEnChua/JiaEnChua.github.io/blob/master/pic/cam2.jpeg?raw=true',
  imgAlt: 'cam2.png',
  timeline: 'May 2018 - August 2018',
  bulletPoints: [
    'Create RESTAPI to add, update and search camera in MongoDB for retrieving images from the live stream camera.',
    'Invent Python Wrapper to encapsulate functional code and package it for user to pip install the module.',
  ],
};

export const VISUAL_DESCRIPTION = {
  imgLink:
    'https://github.com/JiaEnChua/JiaEnChua.github.io/blob/master/pic/purdue_logo.jpg?raw=true',
  imgAlt: 'vdgPurdue.png',
  timeline: 'January 2018 - May 2018',
  bulletPoints: [
    'Develop REST services and add feature to realize data visualization through dynamic web interaction.',
    'Integrate Microsoft API to provide translation for tweets in real time which increase user base by 20%.',
  ],
};

export const PROJECTS_DATA = [
  {
    youtubeLink: 'https://www.youtube.com/embed/YKlenuIY43s',
    name: 'Amazon Clone',
    desc: 'Generate Stripe API Client secret everytime the cart item detail changes by utilizing Firebase Cloud function and express server. Achieved real time transaction system with billing records stored in Stripe. Order details per user is also stored in Firestore and displayed in order page descendingly based on Order date.',
    techStack: [
      'ReactJs',
      'Stripe API',
      'Firestore',
      'FireBase Cloud Function',
    ],
    githubLink: 'https://github.com/JiaEnChua/amazon-clone',
    projLink: 'https://clone-b869b.web.app/',
  },
  {
    youtubeLink: 'https://www.youtube.com/embed/J28DN2sKI5s',
    name: 'YelpCamp',
    desc: "Served as a platform for camping lovers to share their experiences and reviews about campsites all around the world. Features include: Account authentication Campgrounds show page Post and comment assiociate to user account Edit and delete personal's post/comment.",
    techStack: ['NodeJs', 'PassportJs', 'MongoDB', 'Heroku'],
    githubLink: 'https://github.com/JiaEnChua/yelpCamp',
    projLink: 'https://fierce-ravine-37991.herokuapp.com/',
  },
  {
    youtubeLink: 'https://www.youtube.com/embed/Oao8jitcgts',
    name: 'WhatsApp Clone',
    desc: 'WhatsApp web app allows multiple users to join and create chatroom. Only chatroom creator can delete chatroom. Authentication feature built with Firebase Google Auth. Chatroom and message data stored in Firestore and rendered out on snapshot.',
    techStack: ['ReactJs', 'Google Auth', 'FireBase'],
    githubLink: 'https://github.com/JiaEnChua/whatsapp-clone-web',
    projLink: 'https://whatsapp-clone-25743.web.app/',
    left_or_right: 'left',
    even: 'even',
  },
];

export const HEAD_LIST = [
  {
    label: 'Home',
    linkTo: 'home',
  },
  {
    label: 'About',
    linkTo: 'about',
  },
  {
    label: 'Experience',
    linkTo: 'experience',
  },
  {
    label: 'Project',
    linkTo: 'project',
  },
  {
    label: 'Contact',
    linkTo: 'footer',
  },
];

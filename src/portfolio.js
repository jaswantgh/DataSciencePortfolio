/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jaswant Pendem",
  title: "Hi all, I'm Jazz",
  subTitle: emoji(
    "Electrical, Electronic Engineering & Data Science Student (3rd Year) | Research Assistant at Intelligent Sensing & Perception Laboratory | The Duke of Edinburgh's International Award Alumni | New Colombo Plan Alumni"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jaswantgh",
  linkedin: "https://www.linkedin.com/in/jaswant-pendem-046944223/",
  gmail: "jaswant.pendem@gmail.com",
  gitlab: "https://gitlab.com/jaswantgh",
  facebook: "https://m.facebook.com/fifa.destroyar/",
  medium: "https://jaswantgh.medium.com/",
  stackoverflow: "https://stackoverflow.com/users/23401802/jaswantgh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do!",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Curtin University",
      logo: require("./assets/images/curtinLogo2.jpg"),
      subHeader: "Bachelors of Engineering in Electrical and Electronic Engineering (Honours)",
      duration: "February 2022 - Present",
      desc: "Head of Marketing for Institute of Electrical and Electronics Engineers Club ",
      descBullets: [
        "Units: Electrical Circuits, Singals & Systems, Electronic Fundamentals ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Curtin University",
      logo: require("./assets/images/curtinLogo1.jpg"),
      subHeader: "Bachelor of Science in Data Science",
      duration: "February 2022 - Present",
      desc: "Units: Unix & C Programming, Data Structures & Algorithms, Introduction to Probability & Data Analysis, Regression & Nonparametric Inference",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "",
      progressPercentage: "40%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "20%"
    },
    {
      Stack: "Power BI",
      progressPercentage: "60%"
    },
    {
      Stack: "Dataiku",
      progressPercentage: "90%"
    },
    {
      Stack: "Adobe Premiere Pro",
      progressPercentage: "60%"
    },
    {
      Stack: "AutoCAD",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Intern",
      company: "CalcTree",
      companylogo: require("./assets/images/calctreeLogo.jpeg"),
      date: "Nov 2023 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Electrical Engineering Research Intern",
      company: "Intelligent Sensing & Perception Laboratory",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Aug 2023 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Digital Marketing and Communications Intern",
      company: "UniSport Australia",
      companylogo: require("./assets/images/unisportLogo1.png"),
      date: "Sep 2022 – Oct 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "GoGlobal Civil Engineer Intern",
      company: "Challenges Abroad",
      companylogo: require("./assets/images/caLogo.jpg"),
      date: "Jun 2022 – Jul 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portfolio",
  subtitle: "I’ve had the privilege of working on a variety of projects, each providing unique challenges and learning opportunities. Included here are code samples that I believe reflect my understanding and application of key programming concepts. I am not only open but enthusiastic about expanding my technical repertoire with new languages and frameworks as required. I am confident that this adaptability and eagerness to learn are assets that will bring value to any team.",
  projects: [
    {
      image: require("./assets/images/automate.png"),
      projectName: "2023: COMP1002 Data Structures and Algorithms",
      projectDesc: "I wrote the following assignment for my computer programming unit. My final mark for this subject was 89%. I have attached below my assignment submissions. Note Python was used for this assignment.",
      footerLink: [
        {
          name: "Assignment 1 : Bushfire Monitoring System",
          url: "https://github.com/jaswantgh/DataStructuresAndAlgorithms"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/terminal.png"),
      projectName: "2023: COMP1000 Unix & C Programming ",
      projectDesc: "I wrote the following three assignments for my computer programming unit. My final mark for this subject was 99%. I have attached below my three assignment submissions. Note C89 was used for this assignment. ",
      footerLink: [
        {
          name: "Assignment 1 : Box Terminal Maze Part 1",
          url: "https://github.com/jaswantgh/UnixCProgramming--Project-1"
        },
        {
          name: "Assignment 2 : Box Terminal Maze Part 2",
          url: "https://github.com/jaswantgh/UnixCProgramming--Project-2"
        },
        {
          name: "Assignment 3 : Wireworld Cellular Automation",
          url: "https://github.com/jaswantgh/Wireworld"
        }
      ]
    },
    {
      image: require("./assets/images/prototype.png"),
      projectName: "2022: Personal Portfolio 1",
      projectDesc: "During the first semester, I took the initiative to learn Javascript, HTML, and CSS. I noticed that many individuals had personal portfolios, so I decided to apply my newly acquired skills to design one for myself. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jaswantgh.github.io/jaswant/index.html/"
        }
      ]
    },
    {
      image: require("./assets/images/goose.png"),
      projectName: "2022: COMP1005 Fundamentals Of Programming",
      projectDesc: "I wrote the following assignment for my computer programming unit. My final mark for this subject was 82%. I have attached below my assignment submissions. Note Python was used for this assignment. ",
      footerLink: [
        {
          name: "Assignment 1: Platformer Maze",
          url: "https://github.com/jaswantgh/MazeSimulation/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "SLB Data Science Hackathon Finalists",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/slb.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Night Photos",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    },
    {
      title: "Dataiku",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/dataiku.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Core Designer Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        },
        {
          name: "ML Practitioner Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        },
        {
          name: "Advanced Designer Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        },
        {
          name: "Developer Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        },
        {
          name: "MLOps Practitioner Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Duke of Edinburgh’s International Awards: Gold, Silver, Bronze Level",
      subtitle: "Completed Award at Hale School and awarded in Assembly ",
      image: require("./assets/images/duek1.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Gold Certification", url: ""},
        {
          name: "Silver Certification",
          url: ""
        },
        {
          name: "Bronze Certification",
          url: ""
        },
        {
          name: "Award Night Photos",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "My personal gym routine",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch📧"),
  subtitle:
    "Got an idea or just want to connect? Send me an email or DM me on LinkedIn! 😊",
  email_address: "jaswant.pendem@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

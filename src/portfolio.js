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
  title: "Hi All, I'm Jazz",
  subTitle: emoji(
    " Undergraduate Third Year Electrical, Electronic Engineering & Data Science Student "
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
  title: "About Me!",
  subTitle: "Technologies and Tools I Have Experience in:",
  skills: [
    emoji(
      "⚡ Exposure to the sports industry, and intrigued by the potential of artificial intelligence, healthcare, and cloud computing."
    ),
    emoji("⚡ Global perspective and a deep appreciation for diversity."),
    emoji(
      "⚡ Blogging and creating educational mini-bootcamp style videos on YouTube soon!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C Language",
      fontAwesomeClassname: "fas fa-copyright"
    },
    {
      skillName: "AutoCAD",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Julia",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Adobe Premiere Pro",
      fontAwesomeClassname: "fas fa-video"
    },
    {
      skillName: "Matlab",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
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
      desc: "Key Units Completed",
      descBullets: [
        "Units: Electrical Circuits, Singals & Systems, Electronic Fundamentals "
        
      ]
    },
    {
      schoolName: "Curtin University",
      logo: require("./assets/images/curtinLogo1.jpg"),
      subHeader: "Bachelor of Science in Data Science",
      duration: "February 2022 - Present",

      desc: "Key Units Completed",
      descBullets: ["Units: Unix & C Programming, Data Structures & Algorithms, Introduction to Probability & Data Analysis, Regression & Nonparametric Inference"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Designing", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Digital Marketing",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
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
      date: "Nov 2023 – Mar 2024",
      desc: " Progressively creating calculation templates and resources that are utilized by engineers worldwide, demonstrating my ability to produce valuable content. ",
      footerLink: [
        {
          name: "Read my Experience",
          url: "https://lunar-rugby-713.notion.site/d743f712646c4a09959c8e8b379b56ff?v=33d7a13e09b046c2a8889844e9a88fea&pvs=4"
        }
      ],
      
    },
    {
      role: "Electrical Engineering Research Intern",
      company: "ISPL Curtin",
      companylogo: require("./assets/images/isplTest.png"),
      date: "Aug 2023 – Present",
      desc: "Intelligent Sensing & Perception Laboratory",
      footerLink: [
        {
          name: "Read My Experience",
          url: ""
        }
      ],
      
    },
    {
      role: "Digital Marketing and Communications Intern",
      company: "UniSport Australia",
      companylogo: require("./assets/images/unisportLogo1.png"),
      date: "Sep 2022 – Oct 2022",
      desc: "",
      footerLink: [
        {
          name: "Read My Experience",
          url: "https://drive.google.com/file/d/1vQHJVAsi3E0LAqCW0S11vRphUexspkgV/view?usp=sharing"
        }
      ],
    },
    {
      role: "New Colombo Plan Engineer Intern",
      company: "Challenges Abroad",
      companylogo: require("./assets/images/caLogo.jpg"),
      date: "Jun 2022 – Jul 2022",
      desc: "Lorem olore magna aliqua.",
      footerLink: [
        {
          name: "Read My Experience",
          url: "https://drive.google.com/file/d/1nFUzp5l79ErpFjSZXHtiLAyK3Ji3vNgj/view?usp=sharing"
        }
      ],
    },
    {
      role: "Head of Marketing",
      company: "IEEE Curtin",
      companylogo: require("./assets/images/ieee.png"),
      date: "Nov 2023 – Present",
      desc: "Institute of Electrical and Electronics Engineers Curtin",
      footerLink: [
        {
          name: " Read My Experience",
          url: "https://drive.google.com/file/d/1yF0P_8P3BZ1slZ5oTG6dIympTwkh9xDM/view?usp=sharing"
        }
      ],
    },
    {
      role: "Student Ambassador",
      company: "Curtin University",
      companylogo: require("./assets/images/curtinLogo2.jpg"),
      date: "Jun 2023 – Present",
      desc: "Awarded with Tier 2 Curtin Extra - Professional Development Stream Recognition.",
      descBullets: [
        "Demonstrated adaptability in challenging situations, controlling audience attention and leading groups effectively, while continually improving public speaking skills and networking capabilities.",
        "Successfully managed diverse tasks and environments, utilizing non-verbal communication and problem-solving skills, while gaining insights into self-awareness, decision-making, teamwork, and professional development."
      ],
      footerLink: [
        {
          name: " Read My Experience",
          url: "https://drive.google.com/file/d/1yF0P_8P3BZ1slZ5oTG6dIympTwkh9xDM/view?usp=sharing"
        }
      ],
    },
    {
      role: "Secretary",
      company: "Kiwanis Australia",
      companylogo: require("./assets/images/kiwnais.png"),
      date: "Feb 2023 – Present",
      desc: ".",
      footerLink: [
        {
          name: "Read My Experience",
          url: ""
        }
      ],
    },
    {
      role: " Computer Science Mentor",
      company: "AASQA CoderDojo",
      companylogo: require("./assets/images/coderdojo.png"),
      date: "Feb 2023 – Present",
      desc: "Lorem olore magna aliqua.",
      footerLink: [
        {
          name: "Read My Experience",
          url: ""
        }
      ],
    }
    
  ]
};


// Other experience section

const otherExperiences = {
  display: true, //Set it to true to show otherExperiences Section
  experience1: [
    {
      role: "Engineering Intern",
      company: "CalcTree",
      companylogo: require("./assets/images/calctreeLogo.jpeg"),
      date: "Nov 2023 – Mar 2024",
      desc: " Progressively working on 450 Calculator templates wiht a team of 11. Creating calculation templates and resources that are utilized by engineers worldwide, demonstrating my ability to produce valuable content. Collaborated with the tech team to test early versions of the CalcTree platform and provide feedback on upcoming designs",
      footerLink: [
        {
          name: "Letter of Acceptance",
          url: "https://drive.google.com/file/d/1yF0P_8P3BZ1slZ5oTG6dIympTwkh9xDM/view?usp=sharing"
        }
      ],
      rainbowLink: [
        {
          name: "Assignment 1 : Bushfire Monitoring System",
          url: "https://github.com/jaswantgh/DataStructuresAndAlgorithms"
        }
        //  you can add extra buttons here.
      ]
      
    }
    
  ]
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



const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
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
        "Presented solution at WA Mining Conference Expo 2023",
      image: require("./assets/images/slb.png"),
      imageAlt: "SchlumbergerLogo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Photos",
          url: "https://drive.google.com/drive/folders/118_UbaS6L6Ab3Gdr2gKCi-uXYvXYOTX-?usp=sharing"
        }
      ]
    },
    {
      title: "Dataiku",
      subtitle:
        " Gained valuable insights into data science workflows and improved my skills in data manipulation and analysis.",
      image: require("./assets/images/dataiku.png"),
      imageAlt: "Dataiku Logo",
      footerLink: [
        {
          name: "Core Designer Certificate",
          url: "https://drive.google.com/file/d/18T1g-qVBSFer3iAyzfMMzqCJsux0_B77/view?usp=sharing"
        },
        {
          name: "ML Practitioner Certificate",
          url: "https://drive.google.com/file/d/1Cb5bkCXWHMlmyuwHLCg4IKnpsjzpbBdf/view?usp=sharing"
        },
        {
          name: "Advanced Designer Certificate",
          url: "https://drive.google.com/file/d/1H87yZnz9427f4POK9vRAN3Ritv3V0eGX/view?usp=sharing"
        },
        {
          name: "Developer Certificate",
          url: "https://drive.google.com/file/d/1N51oKJOucD10Hb6Plx2fGCKTvy_Bbgdo/view?usp=sharing"
        },
        {
          name: "MLOps Practitioner Certificate",
          url: "https://drive.google.com/file/d/1xs8a3odk4CxhamULYRD6r7JnU2zWpg8b/view?usp=sharing"
        }
      ]
    },

    {
      title: "Duke of Edinburgh’s International Awards: Gold, Silver, Bronze Level",
      subtitle: "During my time at Hale school, I invested over 300 hours to complete the award. This journey, recognized in an assembly, fortified my commitment, resilience, and adaptability. ",
      image: require("./assets/images/duke1.png"),
      imageAlt: "Duke Of Edinburgh Logo",
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
          name: "Photos",
          url: "https://drive.google.com/drive/folders/1xoyp-wWkjLC1lOC70zzvh8zIODT67PGn?usp=sharing"
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
    "I’m all about privacy, and I often share my thoughts on it over on here.....",
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
  title: "Other Work",
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast Worth Listening 🎙️"),
  subtitle: "The Snapchat Thief",
  desc:"Exposes the clandestine world of dark web hackers, revealing the trade of stolen Snapchat accounts, and subsequently underscores how important cybersecurity is in keeping our online presense safe and secure.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/1oE4laROa7cS6YnRFXYraZ?utm_source=generator&theme=0"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch📧"),
  subtitle:
    "Let’s connect on LinkedIn! 😊",
  desc: " If you want to know more about me or my work, or if you would just like to say hello, don’t hesitate to send me a message. I’d love to hear from you. Looking forward to our connection! ",
  email_address: "jaswant.pendem@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  otherExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

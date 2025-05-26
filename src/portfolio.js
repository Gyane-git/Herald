/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gyanendra's Portfolio",
  description:
    "A tech enthusiast dedicated to crafting scalable and meaningful digital solutions through intelligent development.",
  og: {
    title: "Gyanendra Sah portfolio",
    type: "website",
    url: "https://gyanendrasah.com.np/",
  },
};

//Home Page
const greeting = {
  title: "Gyanendra Sah",
  logo_name: "Gyanendra Sah",
  nickname: "@techie_bro",
  subTitle:
    "A tech enthusiast dedicated to crafting scalable and meaningful digital solutions through intelligent development.",
  resumeLink:
    "https://drive.google.com/file/d/1RGQnVjinDib9dDhh0uyJ5lM2UkQPaBx3/view?usp=drive_link",
  portfolio_repository: "https://github.com/Gyane-git",
  githubProfile: "https://github.com/Gyane-git",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Gyane-git",
  // linkedin: "",
  // gmail: "gyanee750@gmail.com",
  // gitlab: "",
  // facebook: "https://www.facebook.com/Gyane11?mibextid=wwXIfr&rdid=Hw53SOWTvm31KFnt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16dJxgGArn%2F%3Fmibextid%3DwwXIfr#",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/Gyane-git",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "linkedin.com/in/gyanendra-kumar-sah-71751b353",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@gyaneshah9585",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:gyanee750@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/gyane21",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link:
      "https://www.facebook.com/Gyane11?mibextid=wwXIfr&rdid=Hw53SOWTvm31KFnt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16dJxgGArn%2F%3Fmibextid%3DwwXIfr#",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gyane_shah?igsh=MTl6d2xmdGkwMjhzOA==",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with CNN and NLP projects",
        "⚡ Developing intelligent models with LSTM, CNN, and Transfer Learning for time, text, and image-based predictions.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using javascript, bootstrap",
        "⚡ Creating application backend in Python Django, Php & Nodejs",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hands-on experience with cloud platforms like AWS, Azure and GCP",
        "⚡ Hosted and maintained full-stack apps on cloud VMs and free platforms like Vercel, Render, and Heroku",
        "⚡ Integrated scalable databases with frontend and backend services",
        "⚡ Deployed deep learning models as APIs for mobile and web consumption",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Render",
          fontAwesomeClassname: "simple-icons:render",
          style: {
            color: "#46E3B7", // Render's brand teal
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000", // Vercel's black brand color
          },
        },
        
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Gyane21/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/gyanee750",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/gyane21",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "#simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#http://codeforces.com/profile/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@gyanee750/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/gyane21",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kathmandu Institute of Science & Technology",
      subtitle: "+2 Science",
      logo_path: "iiitk_logo.png",
      alt_name: "Kist Kathmandu",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ I have studied subjects like Physics, Chemistry, Biology, and Math. They helped me understand how things work around us.",
        "⚡I also joined a project where I learned to solve problems and look at things in new ways, especially by finding patterns and connections. ",
        "⚡ In school, I was part of a media team where I helped make short videos and take interviews.",
      ],
      website_link: "https://kist.edu.np/",
    },
    {
      title: "Herald College Kathmandu",
      subtitle: "B.Sc. in Computer Science",
      logo_path: "iu_logo.jpeg",
      alt_name: "HCK Kathmandu",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ At university, I learned how to work with computers and write instructions to make them do tasks. I studied different computer languages like Python, Java, C, and C++.",
        "⚡ I also learned how to build websites and work with tools that help store and manage things online.",
        "⚡ I worked on projects where I taught computers how to learn from data and make simple decisions.",
        "⚡ Along with my studies, I was also part of the media team, where I helped make short videos and do interviews.",
      ],
      website_link: "https://heraldcollege.edu.np/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "",
      logo_path: "stanford_logo.png",
      certificate_link: "#",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Python",
      subtitle: "",
      logo_path: "python.jpeg",
      certificate_link: "#",
      alt_name: "python",
      color_code: "#00000099",
    },
    {
      title: "Nodejs",
      subtitle: "",
      logo_path: "node.png",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Reactjs",
      subtitle: "",
      logo_path: "react.png",
      certificate_link: "",
      alt_name: "react",
      color_code: "#1F70C199",
    },
    
    {
      title: "C# Programming",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CC-PHCUFIRO",
      alt_name: "Microsoft",
      color_code: "#68217A",
    },
    {
      title: "Django Web Development",
      subtitle: "- Django Software Foundation",
      logo_path: "django_logo.png",
      certificate_link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMTMwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzY3MzA4N183OTIyNDQ5MTczNDI4NTcyNDIwMi5wbmciLCJ1c2VybmFtZSI6Ikd5YW5lbmRyYSBLdW1hciBTYWgifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F5897%2FBecome-a-Data-Science-Expert-with-Python-Django-Tutorial%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1453655718198667890&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd%2FEpiSqvKIvKCUiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAq8Zgqj8AAAA%3D",
      alt_name: "Django",
      color_code: "#092E20",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "#experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Accounting",
          company: "Bishwakarma Mil",
          company_url: "bishwakarma.com.np",
          logo_path: "mil.jpeg",
          duration: "2020 - 2021",
          location: "Rautahat, Nepal",
          description:
            "Handled the accounting and financial records of the company.",
          color: "#000000",
        },

      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web development and IT support Intern",
          company: "Herald College",
          company_url: "https://heraldcollege.edu.np/",
          logo_path: "iu_logo.jpeg",
          duration: "May 2023 - Aug 2023",
          location: "Kathmandu, Nepal",
          description:
            "Built frontend image-display pages and provided IT setup support for new student software configurations.",
          color: "#000000",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Herald College fest",
          company: "Herald College",
          company_url: "https://heraldcollege.edu.np/",
          logo_path: "iu_logo.jpeg",
          duration: "Feb 2022 - Mar 2022",
          location: "Kathmandu, Nepal",
          description:
            "Handled student registrations, shared fest information through Gmail, and took part in organizing the fest.",
          color: "#4285F4",
        },
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Projects reflecting hands-on experience with full-stack development, intelligent systems, and real-world problem solving using modern tech tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "CNN-LSTM Model for Insect Classification",
      createdAt: "2024-11-01",
      description: "",
      url: "",
    },
    {
      id: "",
      name: "Sentiment Analysis of Movie Reviews",
      createdAt: "2025-05-19",
      description: "",
      url: "",
    },
    {
      id: "",
      name: "Linear Regression Model for Amazon shell Price Prediction",
      createdAt: "2025-04-12",
      description: "",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, React, Cloud .",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Naxal, Kathmandu, Nepal",
    locality: "Kathmandu",
    country: "Nepal",
    region: "Bagmati Province",
    postalCode: "44600",
    streetAddress: "Naxal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/M6WY7WAU8qhSprui7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

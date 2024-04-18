import IResumeData from "../models/resume-data.model";

export const RESUME_DATA: Readonly<IResumeData> = {
  personalInformation: {
    email: "hieund898@gmail.com",
    fullName: "Nguyen Duc Hieu",
    jobTitle: "Web Developer",
    phoneNumber: "039 273 7598",
    website: "https://hieund20.wordpress.com/",
    facebook: "https://www.facebook.com/hieudnguyen20/",
    address: "Ho Chi Minh City, Viet Nam",
  },
  summary: `You are looking for a skilled programmer in website development? I could be one you're seeking! I graduated with a good degree in Information Technology from Ho Chi Minh City Open University in 2024 and GPA was 3.05/4.0. This school is a public university and is ranked 15th in Vietnam by Webometrics ranking 2024. With {year_number} years experience in developing website with ASP.NET, React JS and Angular, I can develop quality websites with friendly UI and good performance.`,
  workExperiences: [
    {
      time: "Mar 2020 - Present",
      company: "VNPT IT",
      jobPosition: "Developer/ Software engineer",
      description: [
        `Team Lead of 'Fee & Health Insurance' module of VNPT HIS Hospitals Infomation System (HIS)`,
        `Integrating cashless payment via QR Code of VietinBank, Agribank, VNPT Money for Hospitals Infomation System (HIS)`,
        `Integrating VNPT Invoice electronic invoices for Hospitals Infomation System (HIS)`,
        `Build the function of connecting medical examination data with the health insurance assessment portal`,
        `Maintain, and develop new feature for 'Fee & Health Insurance' module of VNPT HIS`,
        `Analysis, design and develop a 'Fee & Health Insurance' microservice for VNPT Home & Clinic - The clinic manager and family doctor system`,
        `Design and develop front-end for VNPT Home & Clinic`,
        `Develop front-end and back-end for Covid disease management system for Tien Giang Province`,
      ],
      technology: [
        "Java, Spring boot, Hibernate, Jhipster, Liquibase",
        "Jasper report",
        "React JS",
        "Kafka/ RabbitMQ",
        "PostgreSQL, Oracle, MongoDB",
      ],
    },
    {
      time: "Sep 2019 - Feb 2020",
      company: "VNPT IT",
      jobPosition: "Fresher",
      description: [
        `Maintain, and develop new feature for 'Fee & Health Insurance' module of VNPT HIS.`,
      ],
      technology: ["Java, Spring MVC, JSP", "Jasper report", "Oracle PL/SQL"],
    },
    {
      time: "May 2019 - July 2019",
      company: "VNPT IT",
      jobPosition: "Internship",
      description: [
        `Analysis, design and develop "Receive patients by electronic card". It is a module of VNPT HIS - the hospital infomation system`,
        `Attend Microservice workshops in company`,
      ],
      technology: ["Java/ Spring MVC/ Apache Free Maker", "React JS", "Oracle"],
    },
  ],
  skill: {
    technical: [
      "Java/ Spring/ Hibernate/ Jhipster/ JMIX",
      "HTML/CSS/Bootstrap/TailwindCSS",
      "JavaScript/ Typescript/ ReactJS",
      "Flutter/ C#/ ASP.NET, .NET core/ Node JS (basic)",
      "MySQL/ MSSQL/ Oracle/ PostgreSQL/ MongoDB",
      "Liquibase/ Flyway",
      "Kafka/ RabbitMQ",
      "Docker/ Docker compose/ Portainer",
      "CI/CD with GitHub Action, Gitlab CI, Heroku, Render, Vercel, Northflank",
      "Reactor programing",
      "Object-oriented design",
      "Microservice architecture",
      "Jira / Work with scrum agile",
      "Implement data structures and algorithm",
      "Design and implement database structures",
    ],
    professional: [
      "Effective communication",
      "Team player",
      "Presentation",
      "Strong problem solver",
    ],
  },
  educations: [
    {
      school: "Ho Chi Minh City Open University",
      major: "Infomation Technology",
      gpa: "3.05/4",
      year: "2015-2019",
      degree: "Bachelor",
    },
  ],
};

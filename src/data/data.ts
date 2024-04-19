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
      time: "Jul-2022 to Present",
      project: "VinHR Project",
      company: "MeU Solutions",
      jobPosition: "Full-stack Developer",
      description: [
        `Project description: Web application help manage all business process include modules: Human Resource (HR), Customer Relationship Management (CRM), Management Information System (MIS),...`,
        `Roles: Full-stack developer`,
      ],
      technology: [
        "ASP.Net Core, Sequelize, PostgreSQL, RESTful Web Services, Swagger, S3",
        "Angular, HTML, CSS",
        "GIT, JIRA",
      ],
    },
    {
      time: "Sep 2022 - Apr 2023",
      company: "MeU Solutions",
      project: "HaiDang-ECOMMERCE",
      jobPosition: "Full-stack Developer",
      description: [
        `Project Description: An e-commerce platform, business process includes modules: product listing, search from the overview to the details of a product, add product to cart, order management, dashboard, manufacturer, vouchers, integrate payment gateways such as Momo, VNPay, …`,
        `Roles: Full-stack developer`,
      ],
      technology: [
        "ASP.Net Core, Sequelize, PostgreSQL, RESTful Web Services, Swagger, S3",
        "ReactJS, HTML, CSS",
        "GIT, JIRA",
      ],
    },
    {
      time: "Aug 2022 - Dec 2022",
      company: "MeU Solutions",
      project: "AnaWork",
      jobPosition: "Frontend Developer",
      description: [
        `Project description: An ERP system help manage all business process include modules: Procurement to Pay (P2P), Sale, Human Resource (HR), Customer Relationship Management (CRM), Management Information System (MIS).`,
        `Roles: Front-End Developer`,
      ],
      technology: [
        "ASP.Net Core, Sequelize, PostgreSQL, RESTful Web Services, Swagger, S3",
        "Angular, HTML, CSS",
        "GIT, JIRA",
      ],
    },
    {
      time: "Nov-2021 - June 2023",
      company: "MeU Solutions",
      project: "Asset Management Project",
      jobPosition: "Frontend Intern - Frontend Developer",
      description: [
        `Project description: An asset management system is a process a company uses to manage all its assets across the business. They can include personnel, buildings, software and hardware, inventory, monetary assets, and anything vital to the business’s day-to-day running. Allowing users to track and monitor every asset in the company in one central location, letting the user manage their assets from any location. Each asset will come with a barcode that will be able to scan.`,
        `Roles: Front-End Developer`,
      ],
      technology: [
        "ReactJS, Create React App, React Router V5, Redux Thunk, React hooks",
        "Material UI, Ant Design, Core UI, ChartJS, SCSS",
        "Swagger UI, Firebase, GitLab, GIT, Jira Software, Sequelize, S3, PostgreSQL.",
      ],
    },
    {
      time: "Aug 2022 - Aug 2023",
      company: "Bhutan Pelyab Tours And Treks",
      project: "Bhutan Pelyab Tours And Treks Booking Website",
      jobPosition: "Wordpress Developer",
      description: [
        `Project link: https://bhutanpelyabtours.com/`,
        `Develop and design websites using the WordPress platform, either from scratch or by customizing themes and plugins to reflect client requirements and ideas`,
        `Customize website functionalities by adding, modifying, or removing features to meet specific client needs`,
        `Optimize website performance, increase page load speed, and enhance user experience through various optimization techniques`,
        `Maintain and update WordPress websites to ensure security and stability of the system, including regular updates and security patches`,
        `Work with databases to store website information and perform data read/write operations as necessary`,
        `Troubleshoot technical issues related to WordPress websites, such as plugin conflicts, theme errors, or code-related issues.`,
        `Communicate with clients to understand their requirements, provide appropriate solutions, and ensure client satisfaction.`,
      ],
      technology: [
        "WordPress, Search Engine Optimization (SEO), Site Build, Web Hosting",
        "Cascading Style Sheets (CSS)",
      ],
    },
  ],
  projects: [
    {
      time: "April 2024 - Present",
      name: `NDHieu's blog`,
      technology: "ReactJS, Docusaurus",
      description: "Personal blog to post my articles",
      type: "Personal Projects",
      link: "https://ndanhkhoi.name.vn/",
    },
    // {
    //   time: "January 2023 - Present",
    //   name: "Moni",
    //   technology: "Java, Spring Boot, ReactJS, TailwindCSS, PostgreSQL",
    //   description:
    //     "Personal enpense manager system - Track expenses and achieve your personal financial goals",
    //   type: "Personal Projects",
    //   link: "https://moni.ndanhkhoi.name.vn/",
    // },
    // {
    //   time: "February 2023 - May 2023",
    //   name: "Inventory",
    //   technology: "Java, Spring Boot, JMIX, TailwindCSS, PostgreSQL",
    //   description:
    //     "Inventory management system for stores with import, invoicing, export, and revenue reporting features",
    //   type: "Projects for customer",
    // },
    // {
    //   time: "August 2023 - Present",
    //   name: "Google Bard Client Library For Java",
    //   technology: "Java",
    //   description: "Simple client to get Google Bard's answer from your prompt",
    //   type: "Open source",
    //   github: "https://github.com/ndanhkhoi/GoogleBardClient",
    // },
    // {
    //   time: "December 2022",
    //   name: "Zero Stickers",
    //   technology: "Java, Spring Boot, ReactJS, MongoDB",
    //   description:
    //     "Web application can help you to make sticker packs form Telegram.",
    //   type: "Personal Projects",
    //   link: "https://zero-sticker.onrender.com/",
    // },
    // {
    //   time: "April 2021 - Present",
    //   name: "Simple Telegram Command Bot Spring Boot Starter",
    //   technology: "Java, Spring Boot, Reactor",
    //   description:
    //     "A simple-to-use library to create Telegram Long Polling Bots in Java and Spring Boot with syntax like Spring MVC",
    //   type: "Open source",
    //   github:
    //     "https://github.com/ndanhkhoi/simple-telegram-command-bot-spring-boot-starter",
    // },
    // {
    //   time: "April 2020 - July 2022 ",
    //   name: "VNPT Home & Clinic",
    //   technology:
    //     "Oracle Database · Jasper Reports · Apache Kafka · RabbitMQ · Microservices · JHipster · Bootstrap (Framework) · Java · Spring Boot · React.js",
    //   description:
    //     "VNPT Home & Clinic is comprehensive support software for general clinics and private specialized clinics in managing reception, treatment, pharmacy, hospitals and revenue safely, helping to save time. time and manpower. \n" +
    //     "Silver award in the product and service category dedicated to healthcare at IT World Awards 2022",
    //   type: "Company Projects - Associated with VNPT IT",
    // },
    // {
    //   time: 2019,
    //   name: "Hospital schedule management system",
    //   technology:
    //     "Java, Spring Boot, Hibernate, Jasper report, React JS, Oracle, Genetic Algorithm",
    //   description:
    //     "A modern website to management work schedule of doctor and nurse in a hospital. It allows doctors and nurses to register their leave or meeting days to avoid being scheduled on those days. In addition, the system can also arrange its own schedule quickly and fairly by genetic algorithm",
    //   type: "Graduation essay",
    // },
    // {
    //   time: 2019,
    //   name: "Mobile Phone Store Management System",
    //   technology: "Java, JSP, Spring MVC, Spring Security, Hibernate, MySQL",
    //   description:
    //     "Website for mobile phone store, customer can be search their favorite phone and order it via this website. Store owners can manage products, employees as well as store order bill easily.",
    //   type: "Course projects",
    // },
    // {
    //   time: 2019,
    //   name: "Helpdesk System",
    //   technology: "C# winform, ASP .NET, MS SQL Server",
    //   description:
    //     "A helpdesk system for a company, user can report for a problem and technicians can help them in this system",
    //   type: "Course projects",
    // },
    // {
    //   time: 2018,
    //   name: "River Crossing Pizzle and Maze Pizzle",
    //   technology: "Java Swing, AI with A* and Greedy algorithm",
    //   description: `Both of them are simple puzzle desktop game. In River Crossing Pizzle, the player needs to get the people on one side of the river to the other in the allotted time. If the time limit is exceeded, the game will be over. The answer of the game can be automatically found by the greedy algorithm. In the maze puzzle, the player needs to find the way out of the maze, the answer to the game can be found using the A* algorithm.`,
    //   type: "Course projects",
    // },
    // {
    //   time: 2017,
    //   name: "Library Manager software",
    //   technology: "Java Swing, JDBC, MySQL",
    //   description: `This is a simple desktop application for managing books in a school's library`,
    //   type: "Course projects",
    // },
  ],
  skill: {
    technical: [
      "C#/ ASP.NET Core/ ASP.NET",
      "Angular/ ReactJS/ Bootstrap",
      "JavaScript/ Typescript/ HTML/ CSS",
      "MySQL/ MSSQL/ PostgreSQL",
      "CI/CD with GitHub Action, Gitlab CI, Vercel",
      "Jira/ Work with scrum agile",
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
  languages: [
    { name: "Vietnamese", level: "native" },
    { name: "English", level: "B1 Intermediate" },
  ],
  interests: ["Reading", "Martial Art", "Music"],
  github: "https://github.com/hieund20",
  //Thêm các chứng chỉ: Amazon, Udemy
};

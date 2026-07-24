export const profile = {
    name: "Hrant Sardaryan",
    title: "Senior Software Engineer",
    tagline: "Experienced frontend developer specializing in Angular and React, with a proven track record of building intuitive and visually appealing user interfaces.",
    summary: "Skilled at translating design concepts into responsive, optimized code to deliver seamless user experiences. Passionate about staying up to date with the latest frontend technologies and trends to continuously improve development processes.",
    email: "sardaryanhrant@gmail.com",
    phone: "+37494091185",
    location: "Yerevan, Armenia",
    github: "https://github.com/sardarhrant",
    linkedin: "https://linkedin.com/in/hrant-sardaryan-7962a667",
};

export const skillGroups = [
    {
        category: "Core",
        skills: ["JavaScript/ES6+", "TypeScript", "ReactJs", "Angular 2+", "JSX"],
    },
    {
        category: "State Management",
        skills: ["RxJs", "NgRx", "Redux", "NGXS"],
    },
    {
        category: "Styling",
        skills: ["HTML5", "CSS3", "SASS", "LESS", "Bootstrap", "BEM"],
    },
    {
        category: "Testing",
        skills: ["Jest/Jasmine"],
    },
    {
        category: "Backend / CMS",
        skills: ["PHP", "WordPress", "WooCommerce", "REST"],
    },
    {
        category: "Other",
        skills: [
            "Kendo-UI", "D3 JS", "Webpack", "SOLID", "Design Pattern",
            "SEO", "Web Accessibility", "Browser APIs", "Web Performance Optimization", "Git",
        ],
    },
];

export const experience = [
    {
        role: "Senior Software Engineer",
        company: "EPAM Systems LLC",
        period: "08/2025 - Present",
        location: "Yerevan, Armenia",
        description:
            "American company specializing in software engineering services, digital platform engineering, and digital product design.",
        achievements: [] as string[],
    },
    {
        role: "Software Engineer",
        company: "Peller Tech Inc",
        period: "10/2023 - 08/2025",
        location: "Yerevan, Armenia",
        description:
            "Peller Tech Digital Solutions empowers businesses to maximize investments through tailored digital strategies.",
        achievements: [
            "Used ReactJs, Redux-Saga",
            "Styled Components",
            "Performance improvement",
        ],
    },
    {
        role: "Software Engineer",
        company: "EPAM Systems LLC",
        period: "09/2021 - 09/2023",
        location: "Yerevan, Armenia",
        description:
            "EPAM software engineering heritage combined with their strategic business and innovation consulting, design thinking, and physical-digital capabilities.",
        achievements: [
            "Used kendo-tree, kendo-Combobox, kendo-grid, D3.js",
            "Developed communication between services and component hierarchy",
            "Performed manual functional and unit testing using Jest with marbles",
            "Upgraded Angular version",
        ],
    },
    {
        role: "Front-End Developer",
        company: "Bonee Systems LLC",
        period: "01/2019 - 09/2021",
        location: "Yerevan, Armenia",
        description:
            "Bonee is a digital QR menu/catalog solution that allows you to provide a digital product list to your clients.",
        achievements: [
            "Developed the dashboard using Angular and the client-facing interface using React",
            "Designed and integrated RESTful authentication workflows for secure, reliable communication",
            "Utilized advanced WebSocket API technology for real-time client-server communication",
        ],
    },
    {
        role: "Full-Stack Developer",
        company: "Atero Solutions",
        period: "02/2015 - 01/2019",
        location: "Spitak, Armenia",
        description:
            "Developed webapps on WordPress platform, integrated custom functionality in custom plugins.",
        achievements: [
            "Developed web apps based on WordPress platform",
            "Created web apps based on Laravel/CakePHP framework",
            "Developed RESTful APIs for mobile apps",
        ],
    },
];

export const education = [
    {
        degree: "Master Degree",
        school: "West Saxon University of Applied Sciences Zwickau",
        field: "Management and Information Technology",
        period: "09/2024 - 06/2025",
        location: "Germany",
    },
    {
        degree: "Magister Degree",
        school: "Armenian State Pedagogical University After Khachatur Abovyan",
        field: "",
        period: "09/2002 - 06/2007",
        location: "Yerevan, Armenia",
    },
];

export const interests = ["Chess", "Travelling"];
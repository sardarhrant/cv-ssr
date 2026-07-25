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
        skills: [
            { name: "JavaScript/ES6+", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "ReactJs", level: 92 },
            { name: "AngularJs / Angular", level: 90 },
            { name: "Signals", level: 80 },
            { name: "JSX", level: 90 },
        ],
    },
    {
        category: "State Management",
        skills: [
            { name: "RxJs", level: 80 },
            { name: "NgRx", level: 80 },
            { name: "NGXS", level: 75 },
            { name: "Redux", level: 85 },
        ],
    },
    {
        category: "Architecture & Patterns",
        skills: [
            { name: "Design Pattern", level: 80 },
            { name: "Dependency Injection", level: 85 },
            { name: "SOLID", level: 80 },
            { name: "SDD", level: 70 },
        ],
    },
    {
        category: "Styling & UI",
        skills: [
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 92 },
            { name: "SASS", level: 85 },
            { name: "LESS", level: 80 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Bootstrap", level: 85 },
            { name: "BEM", level: 80 },
            { name: "Atomic", level: 80 },
            { name: "Angular Material", level: 80 },
            { name: "Kendo-UI", level: 80 },
            { name: "DataTable", level: 85 },
        ],
    },
    {
        category: "Testing",
        skills: [{ name: "Jest/Jasmine", level: 75 }],
    },
    {
        category: "APIs & Backend",
        skills: [
            { name: "REST", level: 85 },
            { name: "GraphQL", level: 70 },
            { name: "PHP", level: 70 },
            { name: "WordPress", level: 75 },
            { name: "WooCommerce", level: 65 },
        ],
    },
    {
        category: "Quality & Optimization",
        skills: [
            { name: "Web Accessibility", level: 80 },
            { name: "SEO", level: 75 },
            { name: "Web Performance Optimization", level: 80 },
            { name: "Browser APIs", level: 80 },
            { name: "Web Workers / Service Workers", level: 70 },
            { name: "PWA", level: 70 },
        ],
    },
    {
        category: "Tools & AI",
        skills: [
            { name: "Git", level: 90 },
            { name: "Webpack", level: 75 },
            { name: "D3 JS", level: 70 },
            { name: "Claude AI", level: 85 },
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
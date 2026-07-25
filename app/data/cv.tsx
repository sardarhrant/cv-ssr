export const profile = {
    name: "Hrant Sardaryan",
    title: "Senior Software Engineer",
    tagline:
        "A Senior Software Engineer with over a decade of experience architecting and delivering enterprise-grade frontend solutions across Angular and React ecosystems.",
    summary:
        "Specializing in scalable component architecture, state management, and performance-driven engineering practices, I have led frontend initiatives at organizations including EPAM Systems, translating complex business requirements into polished, accessible, and high-performing user experiences. My approach combines technical rigor with an ongoing commitment to modern engineering standards — from reactive programming and design systems to accessibility and web performance optimization.",
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
            {
                name: "HTML5",
                level: 95,
                subSkills: [
                    "Semantic HTML",
                    "Forms & Validation",
                    "ARIA Attributes",
                    "Web Components",
                    "Meta Tags & SEO Structure"
                ]
            },
            {
                name: "CSS3",
                level: 92,
                subSkills: [
                    "Flexbox",
                    "CSS Grid",
                    "Animations & Transitions",
                    "Responsive Design / Media Queries",
                ]
            },
            {
                name: "JavaScript/ES6+",
                level: 95,
                subSkills: [
                    "Async/Await & Promises",
                    "Destructuring & Spread/Rest",
                    "Closures & Scope",
                    "Lexical Environment",
                    "Execution Context",
                    "Arrow Functions",
                    "Modules (ESM)",
                    "Array/Object Methods",
                    "Prototypal Inheritance",
                    "Event Loop & Microtasks",
                ],
            },
            {
                name: "ReactJs",
                level: 92 ,
                subSkills: [
                    "Hooks (useState, useEffect, etc.)",
                    "Custom Hooks",
                    "Context API",
                    "Suspense & Lazy Loading",
                    "Server Components",
                    "React Router",
                    "Performance (memo, useMemo, useCallback)",
                    "Error Boundaries",
                    "Component Composition Patterns",
                    "JSX"
                ]
            },
            {
                name: "TypeScript",
                level: 90,
                subSkills: [
                    "Generics",
                    "Interfaces & Types",
                    "Utility Types (Partial, Pick, Omit, etc.)",
                    "Type Guards & Narrowing",
                    "Discriminated Unions",
                    "Decorators"
                ]
            },
            {
                name: "Angular",
                level: 90,
                subSkills: [
                    "Signals",
                    "Standalone Components",
                    "New Control Flow",
                    "Deferrable Views",
                    "Zoneless Change Detection",
                    "Angular DevTools",
                    "Angular CDK",
                    "SSR",
                ],
            },
        ],
    },
    {
        category: "Architecture & Patterns",
        skills: [
            {
                name: "Dependency Injection",
                level: 85,
                subSkills: [
                    "Hierarchical Injectors",
                    "Injection Tokens",
                    "Providers (useClass, useValue, useFactory)",
                    "Multi-Providers",
                    "Resolution modifiers"
                ]
            },
            { name: "SOLID, KISS, DRY Principles", level: 80 },
            { name: "SDD (Spec Driven Development with Claude AI)", level: 70 },
        ],
    },
    {
        category: "State Management",
        skills: [
            { name: "Redux", level: 85 },
            { name: "RxJs", level: 80 },
            { name: "NgRx", level: 80 },
            { name: "NGXS", level: 75 },
        ],
    },
    {
        category: "Styling & UI",
        skills: [
            { name: "SASS", level: 85 },
            { name: "Bootstrap", level: 85 },
            { name: "Tailwind CSS", level: 85 },
            { name: "BEM", level: 80 },
            { name: "Angular Material", level: 80 },
            { name: "Kendo-UI", level: 80 },
            { name: "Styled Components", level: 80 },
            { name: "LESS", level: 80 },
        ],
    },
    {
        category: "Backend & APIs",
        skills: [
            { name: "REST", level: 85 },
            { name: "WebSockets", level: 78 },
            { name: "GraphQL", level: 70 },
            { name: "PHP", level: 70 },
            { name: "WordPress", level: 75 },
            { name: "WooCommerce", level: 65 },
            { name: "Node.js (Express, Nest)", level: 50 },
            { name: "MySQL", level: 50 },
            { name: "NoSQL", level: 50 },
        ],
    },
    {
        category: "Quality & Optimization",
        skills: [
            { name: "Web Accessibility", level: 80 },
            { name: "Browser APIs", level: 80 },
            {
                name: "Web Performance Optimization",
                level: 80,
                subSkills: [
                    "Lighthouse",
                    "Core Web Vitals",
                    "Chrome DevTools Profiling",
                    "Critical Rendering Path CRP"
                ]
            },
            {
                name: "SEO",
                level: 75 ,
                subSkills: [
                    "Meta Tags & Open Graph",
                    "Structured Data (JSON-LD)",
                    "Sitemap & Robots.txt",
                    "Server-Side Rendering / SSG",
                    "Semantic HTML for SEO",
                    "Canonical URLs"
                ]
            },
            {
                name: "Web Workers / Service Workers",
                level: 70,
                subSkills: [
                    "Background Threading (Web Workers)",
                    "Offline Caching Strategies",
                    "Push Notifications",
                    "Background Sync",
                    "postMessage / Message Channels",
                    "Service Worker Lifecycle (install, activate, fetch)"
                ]
            },
            { name: "PWA", level: 70 },
        ],
    },
    {
        category: "Testing",
        skills: [
            { name: "Jest/Jasmine", level: 75 },
            { name: "Cypress", level: 50 },
            { name: "Playwright", level: 50 },
        ],
    },
    {
        category: "Tools & DevOps",
        skills: [
            { name: "Git", level: 90 },
            { name: "ESLint/Prettier", level: 85 },
            { name: "Claude AI", level: 85 },
            { name: "Vite", level: 80 },
            { name: "Webpack", level: 75 },
            { name: "Docker", level: 75 },
            { name: "Next.js", level: 75 },
            { name: "D3 JS", level: 70 },
            { name: "CI/CD", level: 70 },
            { name: "Nx / Monorepo", level: 60 },
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

export const interests = ["Reading", "Chess", "Travelling", "Music"];
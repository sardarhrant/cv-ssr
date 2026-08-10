export const profile = {
    name: "Hrant Sardaryan",
    title: "Senior Frontend Engineer",
    tagline:
        "A Senior Software Engineer with over a decade of experience architecting and delivering enterprise-grade frontend solutions across Angular and React ecosystems.",
    summary: "Senior Frontend Engineer with 10+ years building enterprise-grade Angular and React applications. Recent focus: cutting page-load times through code-splitting and caching strategies, leading component-library and design-system adoption across cross-functional teams, and mentoring engineers on state-management best practices (Redux, NgRx, RxJs). Comfortable owning a feature from architecture through delivery in fast-paced, distributed teams.",
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
                name: "JavaScript (ES6+)",
                level: 95,
                subSkills: [
                    "Async/Await & Promises",
                    "Destructuring & Spread/Rest",
                    "Closures & Scope",
                    "Lexical Environment",
                    "Lexical Scope",
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
                    "Kendo UI",
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
        ],
    },
    {
        category: "State Management",
        skills: [
            { name: "Redux", level: 85 },
            {
                name: "RxJs",
                level: 80,
                subSkills: [
                    "Hot / Cold Observables",
                    "switchMap / mergeMap / concatMap / exhaustMap",
                    "debounceTime / throttleTime",
                    "shareReplay / share",
                    "combineLatest / withLatestFrom",
                    "takeUntil / take",
                    "catchError / retry",
                    "BehaviorSubject / Subject / ReplaySubject, AsyncSubject",
                ]
            },
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
            { name: "WebSockets", level: 70 },
            { name: "GraphQL", level: 60 },
            { name: "PHP", level: 50 },
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
            {
                name: "Git",
                level: 90,
                subSkills: [
                    "Branching Strategies (Git Flow, trunk-based)",
                    "Merge Conflict Resolution",
                    "Cherry-pick"
                ]
            },
            { name: "ESLint/Prettier", level: 85 },
            {
                name: "Claude AI",
                level: 85,
                subSkills: [
                    "AI-Assisted Development",
                    "Prompt Engineering",
                    "Debugging with AI",
                    "Code Review & Refactoring",
                    "Claude Code / CLI Tools",
                    "SDD (Spec Driven Development)"

                ]
            },
            { name: "Vite", level: 80 },
            { name: "Webpack", level: 75 },
            { name: "Docker", level: 40 },
            { name: "Next.js", level: 75 },
            { name: "D3 JS", level: 70 },
            { name: "CI/CD", level: 70 },
            { name: "Nx / Monorepo", level: 60 },
        ],
    },
];

export const experience = [
    {
        role: "Senior Frontend (Angular) Engineer",
        company: "EPAM Systems LLC",
        period: "08/2025 - Present",
        location: "Yerevan, Armenia",
        description:
            "American company specializing in software engineering services, digital platform engineering, and digital product design.",
        achievements: [
            "Leading migration of a legacy AngularJS module to Angular 17, cutting bundle size by ~30% and reducing reported UI bugs",
            "Established a shared component library adopted by 3 product teams, cutting duplicate UI code and new-feature turnaround time",
            "Mentoring 2 mid-level engineers on RxJs and NgRx patterns, and running architecture reviews for new features",
        ],
    },
    {
        role: "Senior Frontend Engineer",
        company: "Peller Tech Inc",
        period: "10/2023 - 08/2025",
        location: "Yerevan, Armenia",
        description:
            "Peller Tech Digital Solutions empowers businesses to maximize investments through tailored digital strategies.",
        achievements: [
            "Rebuilt core checkout flow in React with Redux-Saga, reducing average page load time by 40%",
            "Migrated legacy CSS to Styled Components, cutting stylesheet size and eliminating class-name",
            "Introduced Lighthouse-based performance budgets into CI, catching regressions before release",
            "Maintained and improved MQTT-based data pipelines for real-time data delivery",
        ],
    },
    {
        role: "Frontend (Angular) Engineer",
        company: "EPAM Systems LLC",
        period: "09/2021 - 09/2023",
        location: "Yerevan, Armenia",
        description:
            "EPAM software engineering heritage combined with their strategic business and innovation consulting, design thinking, and physical-digital capabilities.",
        achievements: [
            "Built interactive data-visualization dashboards with D3.js and Kendo UI (kendo-grid, kendo-tree, kendo-combobox)",
            "Designed communication layer between microservices and the component hierarchy, reducing redundant API calls",
            "Wrote unit and marble tests with Jest for RxJs streams, raising test coverage on core modules and reducing regression bugs",
            "Led the upgrade from Angular 11 to Angular 14 across a multi-module enterprise application with zero production downtime",
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
            "Built the admin dashboard in Angular and the client-facing digital menu app in React.",
            "Designed and implemented RESTful authentication (JWT-based) for secure client-server communication",
            "Implemented WebSocket-based real-time order updates, replacing polling and cutting perceived latency for live order status",
            "Implemented multi-language support (i18n) across the application, enabling seamless translation and localization for clients"
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
            "Built custom WordPress plugins and Laravel web apps, and shipped REST APIs consumed by companion mobile apps skills",
            "Designed and developed custom WordPress themes/templates tailored to client requirements"
        ],
    },
];

export const education = [
    {
        degree: "M.Sc., Management & Information Technology",
        school: "West Saxon University of Applied Sciences Zwickau",
        field: "",
        period: "09/2024 - 06/2026",
        location: "Germany (part-time, remote)",
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

export const languages = [
    { name: "English", level: "B2" },
    { name: "Russian", level: "B2" },
    { name: "Armenian", level: "Native" },
];
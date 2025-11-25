import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  personal_information: {
    full_name: "Nishanth Kalaimani",
    title: "Software Engineer",
    bio: "A Full-Stack Developer with 3 years of experience passionate about building scalable solutions. I leverage Angular to create dynamic user interfaces and Spring Boot to engineer robust backend services. I thrive on turning complex problems into efficient, maintainable, and user-focused applications.",
    contact: {
      phone: "+91 8825506805",
      email: "nishanthkalaimanioffcial@gmail.com",
      location: "Chennai, India"
    }
  },
  education: [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Chennai",
      duration: "2018 - 2022",
      score: "CGPA 88%"
    }
  ],
  experience: [
    {
      company: "Sysveda Information Technology Pvt Ltd",
      location: "Perungudi, Chennai",
      position: "Software Engineer",
      duration: "2022 - Present (2025)",
      responsibilities: [
        "Architected and implemented responsive single-page Angular applications with performance optimizations including lazy loading and AOT compilation.",
        "Developed backend services using Spring Boot with RESTful API implementations.",
        "Analyzed and optimized performance bottlenecks through code improvements, caching strategies, and database enhancement.",
        "Built responsive applications for desktop, tablet, and mobile.",
        "Hands-on involvement in debugging, unit testing, and technical documentation."
      ]
    }
  ],
  services: [
    "Full Stack Web Development",
    "Frontend Development using Angular and PrimeNG",
    "Backend Development with Java Spring Boot",
    "REST API Integration",
    "Performance Optimization"
  ],
  projects: [
    {
      name: "Global Kitchen – Food Order & Delivery System",
      role: "Full Stack Developer",
      description: "A full-stack food ordering and delivery system with real-time order status and delivery tracking, built using Angular frontend and Java Spring Boot backend.",
      responsibilities: [
        "Built features for order placement, modifications, and real-time updates.",
        "Implemented REST API communication between frontend and backend.",
        "Handled developer testing, debugging, and bug fixes.",
        "Collaborated with backend teams for seamless integration.",
        "Developed the frontend to deliver a responsive user interface."
      ]
    },
    {
      name: "Artemis – Risk Management System",
      role: "Frontend Developer",
      description: "A system to assess and forecast financial risks using real-time pricing, including modules like User Management, STEL, What-If analysis, and Stress Market evaluation.",
      responsibilities: [
        "Designed and developed responsive Angular + PrimeNG UI screens.",
        "Implemented REST API integrations.",
        "Developed user interface modules for the portal.",
        "Worked with backend team for integration alignment."
      ]
    },
    {
      name: "Revamped Company Website – AI-Enabled Corporate Site",
      role: "Frontend Developer",
      description: "A fully redesigned and modernized corporate website built to enhance brand identity, improve performance, and integrate an AI-powered chatbot for automated support. The website was built using Angular, PrimeNG, and PrimeFlex, focusing on responsiveness, performance, and clean UI/UX.",
      responsibilities: [
        "Built the entire frontend using Angular 18, PrimeNG 17, and PrimeFlex, ensuring highly responsive layouts.",
        "Designed modern UI sections such as homepage, services, contact, products, and analytics screens.",
        "Improved site performance and navigation flow for a better user experience.",
        "Collaborated with backend teams to integrate necessary APIs.",
        "Conducted testing, debugging, UI fixes, and final deployment preparation."
      ]
    },
    {
      name: "Worklog Dashboard – Employee Work Hours & Productivity System",
      role: "Frontend Developer",
      description: "A comprehensive internal productivity and work-tracking dashboard created to automate daily worklog entry, track work hours, manage teams, and streamline workflow processes. This system significantly reduced manual dependencies by automating the end-to-end worklog process.",
      responsibilities: [
        "Developed core modules like Log Work, Dashboard, Team Management, Workflow, and Task Creation screens.",
        "Automated work-hour and productivity calculations that were earlier done manually through PowerBI.",
        "Designed a clean, responsive UI using Angular, PrimeNG, and PrimeFlex.",
        "Implemented REST API integrations for real-time updates of employee work details.",
        "Built interactive charts, reports, and analytics for performance and productivity tracking.",
        "Improved operational efficiency by removing manual data entry and reducing errors."
      ]
    }
  ],
  skills: {
    frontend: [
      "Angular",
      "PrimeNG",
      "JavaScript",
      "TypeScript",
      "Bootstrap"
    ],
    backend: [
      "Java 8",
      "Spring Boot"
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "Oracle"
    ]
  },
  certifications: [
    "Oracle Certified Associate – Java SE 8 Programmer",
    "Cybersecurity Internship – Indian Servers"
  ],
  professional_highlights: [
    "Collaborated with clients to document functional and technical specifications.",
    "Worked with project managers and technical teams to resolve production issues.",
    "Committed to continuous learning and adopting new frameworks and development tools."
  ]
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
export const portfolio = {
  name: "Shubhamsingh Umeshsingh Chaudhari",
  shortName: "Shubhamsingh Chaudhari",
  title: "Full Stack Software Developer",
  location: "Pune, Maharashtra, India",
  email: "choudharishubham243@gmail.com",
  phone: "9168771241",
  linkedin: "https://linkedin.com/in/shubhamsinghchaudhari",
  github: "https://github.com/schaoudhari",
  summary:
    "Full Stack Software Developer with 2+ years of experience building financial planning and modeling software, accounting integrations, RESTful APIs, and enterprise web applications using React.js, Redux, Node.js, NestJS, MongoDB, and MySQL.",
  extendedSummary:
    "Experienced in budget-vs-actual financial models, cash-flow projections, loan amortization, accounting (Tally) integration, complex MongoDB aggregation pipelines, role-based access control, financial reporting dashboards, and cross-functional Agile collaboration across the full software development life cycle.",
  skills: {
    Languages: ["JavaScript (ES6+)", "TypeScript", "Java", "SQL"],
    "Java Stack": ["Java", "JSP", "Servlets", "MySQL", "MVC web applications"],
    Frontend: ["React.js", "Redux", "Redux Toolkit", "HTML5", "CSS3", "Bootstrap", "Material-UI", "Responsive Web Design", "SPA"],
    Backend: ["Node.js", "Express.js", "NestJS", "RESTful API Design", "Microservices Architecture", "WebSockets"],
    Databases: ["MongoDB", "Mongoose ODM", "MongoDB Aggregation Framework", "MySQL", "NoSQL Data Modeling", "Query Optimization"],
    "Cloud, DevOps & Tools": ["AWS S3", "Firebase", "Git", "GitHub", "Postman", "CI/CD", "Agile/Scrum", "JIRA"],
    Security: ["JWT Authentication", "OAuth", "Data Encryption", "Role-Based Access Control (RBAC)"],
    "Financial Modeling": ["Budget vs Actual Analysis", "Cash-Flow Projection", "Payment-Schedule Modeling", "Loan Amortization", "Variance / Gap Analysis", "Financial-Year Period Reporting", "Formula-Driven Rule Engines"],
    Other: ["FinTech", "ERP Development", "Tally Accounting Integration", "AI API Integration", "Excel Reporting (ExcelJS)", "Third-Party API Integration", "System Design", "Performance Optimization", "MERN"]
  },
  experience: [
    {
      company: "Accucia Softwares Pvt. Ltd.",
      role: "Software Developer",
      period: "June 2024 – Present",
      bullets: [
        "Developed and maintained scalable full-stack features using React.js, Redux, Node.js, Express.js, NestJS, and MongoDB across enterprise-grade, multi-module web applications.",
        "Designed and optimized RESTful APIs to improve backend response efficiency and maintainability.",
        "Implemented data encryption and secure storage mechanisms for sensitive user and financial data.",
        "Integrated AWS S3 for scalable, secure file storage, reducing local server load.",
        "Built a full-stack financial planning and modeling platform used by finance teams to define budgets, project monthly cash flows, and track actuals against plan.",
        "Modeled revenue and expense heads with configurable distribution strategies (equal split, percentage, payment-schedule milestones), generating month-wise planned amounts per head and per flat.",
        "Integrated Tally accounting data through a webhook pipeline: configurable voucher-to-head mapping rules (Sales, Payment, Receipt, Journal, and more) with debit/credit formulas, feeding monthly actuals; supports booking by voucher date or bank-reconciliation date.",
        "Built financial dashboards for budget-vs-actual, gap analysis, and sales planning (area, rate, AV, and collection by month) on a financial-year calendar.",
        "Developed a loan calculation module supporting multiple amortization and disbursement strategies, with figures spread across the monthly timeline.",
        "Engineered MongoDB aggregation pipelines using $lookup, $facet, $unwind, and $group for paginated, grouped financial reports.",
        "Designed granular RBAC scoping financial data by company-category-to-business-unit hierarchy across list, export, and dashboard APIs.",
        "Built server-side Excel export pipelines with ExcelJS for finance reporting."
      ]
    },
    {
      company: "Creazione Software Pvt. Ltd.",
      role: "Software Developer – Trainee",
      period: "Oct 2023 – Apr 2024",
      bullets: [
        "Developed web modules using Java, JSP, Servlets, and MySQL for enterprise business applications.",
        "Implemented backend workflows and secure data handling features following standard SDLC practices.",
        "Collaborated with cross-functional team members in an Agile environment to deliver features on schedule."
      ]
    }
  ],
  projects: [
    {
      title: "Financial Planning & Modeling Platform",
      label: "Budgeting · Cash-Flow · Variance Reporting",
      stack: ["NestJS", "MongoDB", "React.js", "Redux", "ExcelJS"],
      description: "A full-stack platform where finance teams model budgets, generate month-wise cash-flow plans, and compare them with actuals across projects, buildings, and business units.",
      highlights: [
        "Built a formula-driven configuration engine for custom revenue and expense heads.",
        "Implemented distribution models: equal split, percentage, registration-based, and payment-schedule milestones that spread amounts across months and flats.",
        "Created Goal, Gap, and Save Sheet dashboards for budget-vs-actual, funding gaps, and sales planning (area, rate, AV, collection by month).",
        "Engineered MongoDB aggregation pipelines for grouped and paginated financial reports on a financial-year calendar.",
        "Developed loan calculation workflows with multiple amortization and disbursement strategies.",
        "Implemented granular RBAC and multi-level data scoping, plus server-side Excel exports."
      ],
      architecture: ["React.js + Redux", "NestJS REST APIs", "MongoDB Aggregation", "ExcelJS reports"]
    },
    {
      title: "Tally Integration & Actuals Reconciliation",
      label: "Accounting Integration",
      stack: ["NestJS", "MongoDB", "Google Sheets API", "Webhooks"],
      description: "An ingestion pipeline that turns Tally vouchers into monthly actuals against financial-model heads.",
      highlights: [
        "Built a webhook receiver for Sales, Purchase, Expense, Journal, Receipt, Payment, and Contra vouchers, mirrored to per-company sheets with duplicate detection.",
        "Designed configurable mapping rules (field, value, extra conditions) with debit/credit formulas and a per-head combining formula.",
        "Supports booking actuals by voucher date or bank-reconciliation date, leaving unreconciled amounts out until Tally reports a date.",
        "Recomputes monthly figures idempotently, so repeated or overlapping Tally exports never double-count.",
        "Added structured logging to verify every mapping decision."
      ],
      architecture: ["Tally export", "NestJS webhook", "Mapping rules + formulas", "Monthly actuals in MongoDB"]
    },
    {
      title: "Ticket Raising & Complaint Management System",
      label: "Enterprise Operations",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "A role-based ticket lifecycle platform with priority and status tracking and operational dashboards.",
      highlights: [
        "Implemented Admin, Support Executive, and End User roles.",
        "Developed REST APIs for ticket lifecycle operations.",
        "Optimized MongoDB queries for efficient ticket handling.",
        "Built operational dashboards for tracking ticket activity."
      ],
      architecture: ["React.js SPA", "Node.js + Express.js APIs", "MongoDB"]
    },
    {
      title: "AI Chatbot Platform",
      label: "AI API Integration",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      description: "An AI-powered chatbot with real-time messaging, conversation history, session management, and third-party AI API integration.",
      highlights: [
        "Built real-time messaging and conversation history.",
        "Implemented session management and secure authentication.",
        "Integrated third-party AI APIs for contextual response generation.",
        "Developed scalable backend APIs and a responsive React.js frontend."
      ],
      architecture: ["React.js frontend", "Node.js + Express.js", "MongoDB", "Third-party AI APIs"]
    },
    {
      title: "Gas Station & Mess Management Systems",
      label: "Java Enterprise Applications",
      stack: ["Java", "JSP", "Servlets", "MySQL", "Firebase"],
      description: "Two full-stack Java ERP-style applications: one for fuel station operations and one for student mess management, each with role-based admin panels and reporting.",
      highlights: [
        "Gas station system: inventory management, billing, and sales tracking.",
        "Mess management system: meal scheduling, billing, and attendance tracking.",
        "Built admin panels with secure authentication and reporting dashboards.",
        "Designed and optimized MySQL schemas and queries for reliable data management.",
        "Integrated Firebase services alongside the Java/MySQL stack."
      ],
      architecture: ["JSP views", "Java Servlets", "MySQL", "Firebase"]
    }
  ],
  education: {
    degree: "B.Tech, Computer Engineering",
    college: "Shreeyash College of Engineering and Technology",
    year: "2023",
    score: "78%"
  }
};
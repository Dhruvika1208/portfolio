export const personalInfo = {
  name: "Gannamani Dhruvika",
  displayName: "Dhruvika.",
  title: "Computer Science Student | Full Stack Developer | AI Enthusiast",
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "DSA Learner"
  ],
  bio: "Computer Science undergraduate passionate about building scalable web applications, solving complex problems, and exploring Artificial Intelligence and Generative AI.",
  aboutBio: [
    "I am a Computer Science undergraduate specializing in Artificial Intelligence and Data Science. I enjoy solving problems, building full-stack applications, and exploring AI technologies.",
    "I have strong knowledge of Data Structures and Algorithms and experience developing scalable web applications using the MERN stack, REST APIs, and modern web technologies.",
    "I am particularly interested in Full Stack Development, Artificial Intelligence, Retrieval-Augmented Generation (RAG), and Large Language Models."
  ],
  college: "Shri Vishnu Engineering College for Women",
  degree: "B.Tech in Computer Science (AI and Data Science)",
  cgpa: "9.0",
  email: "dhruvikagannamani@gmail.com",
  socials: {
    github: "https://github.com/Dhruvika1208",
    linkedin: "https://linkedin.com/in/dhruvika-gannamani", // standard format link
    leetcode: "https://leetcode.com/Dhruvika1208",
    codechef: "https://www.codechef.com/users/dhruvika1208",
    hackerrank: "https://www.hackerrank.com/dhruvikag"
  }
};

export const statsData = [
  { label: "DSA Problems Solved", value: 200, suffix: "+", icon: "Code2", description: "LeetCode & platforms" },
  { label: "Coding Contests", value: 50, suffix: "+", icon: "Trophy", description: "Competitive programming" },
  { label: "Cumulative CGPA", value: 9.0, suffix: "", isDecimal: true, icon: "GraduationCap", description: "SVECW Academic Record" },
  { label: "Major Projects", value: 4, suffix: "+", icon: "FolderGit2", description: "Full Stack & AI Systems" }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    id: "languages",
    icon: "Code",
    skills: [
      { name: "Java", level: "Advanced", icon: "Coffee", color: "from-orange-500 to-amber-500" },
      { name: "Python", level: "Advanced", icon: "FileCode", color: "from-blue-500 to-yellow-500" },
      { name: "C++", level: "Intermediate", icon: "Cpu", color: "from-blue-600 to-indigo-600" },
      { name: "C", level: "Foundation", icon: "Binary", color: "from-slate-500 to-blue-400" }
    ]
  },
  {
    name: "Frontend Development",
    id: "frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom", color: "from-cyan-400 to-blue-500" },
      { name: "JavaScript", level: "Advanced", icon: "FileSpreadsheet", color: "from-yellow-400 to-amber-500" },
      { name: "HTML", level: "Advanced", icon: "Globe", color: "from-orange-500 to-red-500" },
      { name: "CSS", level: "Advanced", icon: "Palette", color: "from-blue-400 to-cyan-500" }
    ]
  },
  {
    name: "Backend Development",
    id: "backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server", color: "from-green-500 to-emerald-600" },
      { name: "REST APIs", level: "Advanced", icon: "Network", color: "from-purple-500 to-indigo-500" },
      { name: "API Integration", level: "Advanced", icon: "Plug", color: "from-cyan-500 to-blue-600" },
      { name: "Express.js", level: "Intermediate", icon: "Zap", color: "from-slate-400 to-slate-200" }
    ]
  },
  {
    name: "Databases",
    id: "databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "Database", color: "from-emerald-500 to-green-600" },
      { name: "MySQL", level: "Intermediate", icon: "HardDrive", color: "from-blue-500 to-cyan-600" }
    ]
  },
  {
    name: "Artificial Intelligence",
    id: "ai",
    icon: "Sparkles",
    skills: [
      { name: "RAG Systems", level: "Advanced", icon: "BrainCircuit", color: "from-purple-500 to-pink-500" },
      { name: "LLMs", level: "Advanced", icon: "Bot", color: "from-indigo-500 to-purple-600" },
      { name: "YOLO (Computer Vision)", level: "Intermediate", icon: "Eye", color: "from-rose-500 to-orange-500" },
      { name: "Streamlit", level: "Advanced", icon: "PlaySquare", color: "from-red-500 to-pink-600" }
    ]
  },
  {
    name: "Core Computer Science",
    id: "core-cs",
    icon: "BookOpen",
    skills: [
      { name: "Data Structures & Algorithms", level: "Expert", icon: "GitMerge", color: "from-cyan-400 to-purple-500" },
      { name: "Object-Oriented Programming", level: "Advanced", icon: "Layers", color: "from-blue-400 to-indigo-500" },
      { name: "DBMS", level: "Advanced", icon: "Table", color: "from-purple-400 to-pink-500" },
      { name: "Operating Systems", level: "Intermediate", icon: "Terminal", color: "from-emerald-400 to-teal-500" },
      { name: "Computer Networks", level: "Intermediate", icon: "Wifi", color: "from-blue-500 to-cyan-400" }
    ]
  },
  {
    name: "Developer Tools",
    id: "tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch", color: "from-orange-600 to-red-500" },
      { name: "GitHub", level: "Advanced", icon: "Github", color: "from-purple-400 to-slate-200" },
      { name: "VS Code", level: "Advanced", icon: "Laptop", color: "from-blue-500 to-cyan-500" },
      { name: "Jupyter Notebook", level: "Intermediate", icon: "BookMarked", color: "from-amber-500 to-orange-500" }
    ]
  }
];

export const experienceData = [
  {
    title: "AI Developer",
    organization: "Infosys Springboard Virtual Internship",
    type: "Virtual Internship",
    period: "2024",
    technologies: ["Python", "YOLO", "Streamlit", "Deep Learning", "Computer Vision"],
    points: [
      "Developed a deep learning-based plant leaf disease detection system using YOLO for real-time image classification.",
      "Performed image preprocessing, dataset augmentation, model training, testing, and evaluation metrics validation.",
      "Built an intuitive Streamlit web application enabling users to upload leaf images for real-time instant inference.",
      "Optimized model inference latency and performance for efficient edge predictions."
    ],
    highlightIcon: "Brain"
  }
];

export const projectsData = [
  {
    id: "dinespot",
    title: "DineSpot – Smart Restaurant Reservation System",
    shortDescription: "A full-stack restaurant reservation and management system that allows users to book tables online while helping restaurant operations manage reservations efficiently.",
    featured: true,
    category: "Full Stack",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
    keyFeatures: [
      "Real-time restaurant table reservations with active table availability status",
      "Supports multi-tenant concurrent user access with role-based dashboard views",
      "Secure JWT-based authentication & token refreshing for privacy",
      "RESTful APIs built using Node.js & Express.js with robust error handling",
      "Comprehensive reservation management system preventing table booking conflicts",
      "Responsive, sleek user-friendly interface optimized for all device sizes"
    ],
    githubLink: "https://github.com/Dhruvika1208/Dine_Spot",
    liveDemo: null,
    gradient: "from-purple-600/30 via-indigo-600/20 to-blue-600/30",
    glowColor: "#a855f7",
    badgeText: "Featured Project"
  },
  {
    id: "med-assistant",
    title: "Label-Aware Medication Reminder & Drug Information Assistant",
    shortDescription: "An AI-based system that uses Large Language Models and Retrieval-Augmented Generation (RAG) to provide accurate, intelligent drug-related information retrieval.",
    featured: false,
    category: "Artificial Intelligence",
    techStack: ["Python", "Retrieval-Augmented Generation (RAG)", "LLMs", "Vector DB", "Streamlit"],
    keyFeatures: [
      "Retrieval-Augmented Generation (RAG) architecture for grounding answers",
      "LLM-powered natural language query processing for medication details",
      "Uses verified drug label data from trusted pharmaceutical repositories",
      "Drastically improves response accuracy and minimizes AI hallucinations",
      "Smart reminder scheduling helper logic tailored for prescription guidelines"
    ],
    githubLink: "https://github.com/Dhruvika1208",
    liveDemo: null,
    gradient: "from-cyan-600/30 via-blue-600/20 to-indigo-600/30",
    glowColor: "#06b6d4",
    badgeText: "AI & RAG"
  },
  {
    id: "fitness-chatbot",
    title: "Fitness Coach Chatbot",
    shortDescription: "An intelligent conversational chatbot designed to provide personalized fitness workout routines and custom diet recommendations.",
    featured: false,
    category: "Artificial Intelligence",
    techStack: ["Python", "NLP", "Rule-Based Decision Engine"],
    keyFeatures: [
      "Personalized fitness workout plan recommendations based on user goals",
      "Tailored diet and nutritional suggestions tailored to user preferences",
      "Rule-based decision logic ensuring accurate fitness logic safety",
      "Interactive conversational user interface with context retention"
    ],
    githubLink: "https://github.com/Dhruvika1208",
    liveDemo: null,
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/30",
    glowColor: "#10b981",
    badgeText: "Python AI"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker Web App",
    shortDescription: "A responsive financial management web application built to empower users to track, analyze, and control their daily expenses effortlessly.",
    featured: false,
    category: "Web Development",
    techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    keyFeatures: [
      "Real-time expense logging and categorical spending breakdowns",
      "Dynamic financial calculations with budget deficit alerts",
      "Clean, modern UI dashboard with intuitive visual charts",
      "Fully responsive design optimized for mobile and desktop tracking",
      "Persistent state memory retaining record history locally"
    ],
    githubLink: "https://github.com/Dhruvika1208",
    liveDemo: null,
    gradient: "from-pink-600/30 via-rose-600/20 to-purple-600/30",
    glowColor: "#ec4899",
    badgeText: "Frontend Web"
  }
];

export const achievementsData = [
  {
    title: "200+ Problems Solved",
    subtitle: "Data Structures & Algorithms",
    description: "Successfully solved over 200 DSA problems across competitive platforms like LeetCode, CodeChef, and HackerRank, mastering algorithmic efficiency.",
    icon: "Target",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "50+ Coding Contests",
    subtitle: "Competitive Programming",
    description: "Actively participated in over 50 competitive programming contests under timed pressure, building rapid problem decomposition skills.",
    icon: "Award",
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Strong DSA Mastery",
    subtitle: "Core Foundations",
    description: "Deep hands-on proficiency across Arrays, Strings, Linked Lists, Trees, Graphs, Hashing, Recursion, and Dynamic Programming.",
    icon: "Zap",
    color: "from-pink-500 to-rose-500"
  }
];

export const dsaTopics = [
  "Arrays & Strings",
  "Linked Lists",
  "Trees & BST",
  "Graphs & BFS/DFS",
  "Hashing & Maps",
  "Recursion & Backtracking",
  "Dynamic Programming",
  "Bit Manipulation",
  "Binary Search",
  "Stack & Queue"
];

export const educationData = [
  {
    institution: "Shri Vishnu Engineering College for Women",
    degree: "B.Tech in Computer Science (AI and Data Science)",
    period: "2023 – Present",
    scoreLabel: "CGPA",
    score: "9.0",
    location: "Bhimavaram, Andhra Pradesh",
    highlights: [
      "Specialization in Artificial Intelligence & Data Science",
      "Consistently maintained top academic standing with 9.0 CGPA",
      "Active participant in technical symposiums, hackathons, and departmental clubs"
    ]
  },
  {
    institution: "Sasi Junior College for Girls",
    degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
    period: "2021 – 2023",
    scoreLabel: "Score",
    score: "956 / 1000",
    location: "Velivennu, Andhra Pradesh",
    highlights: [
      "Secured 95.6% overall percentage in Higher Secondary Education",
      "Excellence in Mathematics, Physics, and Logic foundation"
    ]
  }
];

export const certificationsData = [
  {
    title: "GenAI Hackathon",
    issuer: "Generative AI Team Project",
    category: "Hackathon & AI",
    badge: "GenAI",
    icon: "Sparkles"
  },
  {
    title: "NPTEL – Software Testing",
    issuer: "NPTEL National Certificate",
    category: "Software Engineering",
    badge: "Elite",
    icon: "CheckCircle2"
  },
  {
    title: "Smart Interviews",
    issuer: "Smart Interviews Platform",
    category: "Data Structures & Algorithms",
    badge: "DSA",
    icon: "Code2"
  },
  {
    title: "Infosys Springboard Java",
    issuer: "Infosys Springboard",
    category: "Programming & OOP",
    badge: "Java",
    icon: "Coffee"
  }
];

export const extracurricularData = [
  {
    role: "Empathy Club Coordinator",
    period: "2024 – Present",
    organization: "Shri Vishnu Engineering College for Women",
    activities: [
      "Led key student engagement initiatives and social impact outreach campaigns",
      "Organized workshops, interactive events, and team-building drives on campus",
      "Coordinated cross-departmental student volunteer teams effectively"
    ]
  }
];

export const codingProfiles = [
  {
    name: "LeetCode",
    handle: "Dhruvika1208",
    detail: "200+ Solved • DSA & Algorithms",
    link: "https://leetcode.com/Dhruvika1208",
    color: "from-amber-500 to-orange-500",
    iconName: "Code2"
  },
  {
    name: "GitHub",
    handle: "Dhruvika1208",
    detail: "Repositories & Open Source",
    link: "https://github.com/Dhruvika1208",
    color: "from-purple-500 to-indigo-500",
    iconName: "Github"
  },
  {
    name: "CodeChef",
    handle: "dhruvika1208",
    detail: "50+ Contests & Stars",
    link: "https://www.codechef.com/users/dhruvika1208",
    color: "from-yellow-600 to-amber-700",
    iconName: "ChefHat"
  },
  {
    name: "HackerRank",
    handle: "dhruvikag",
    detail: "Problem Solving Badges",
    link: "https://www.hackerrank.com/dhruvikag",
    color: "from-emerald-500 to-green-600",
    iconName: "Terminal"
  }
];

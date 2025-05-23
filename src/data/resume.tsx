import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mahesh Barapatre",
  initials: "MB",
  url: "hhttps://mahesh14.netlify.app/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description: "Aspiring Software Development Engineer.",
  summary:
    "Full-stack dev crafting apps with MERN & React Native | Top 12% LeetCode solver |Full-stack dev crafting apps with MERN & React Native | Top 12% LeetCode solver |",
  avatarUrl: "/avatar.png",
  skills: [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "Tailwind CSS",
    "Bootstrap",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Vercel",
    "Firebase",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://drive.google.com/file/d/1tT1cbCQQAZM_TDi3_sRNychhr7ehn38C/view",
      icon: NotebookIcon,
      label: "Resume",
    },
  ],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mahesh-barapatre-a93731225/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:maheshbarapatre14@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mahesh-barapatre",
        icon: Icons.github,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/doit_mahesh/",
        icon: Icons.leetcode,
        navbar: true,
      },
      GeeksforGeeks: {
        name: "Twitter",
        url: "https://x.com/doit_mahesh",
        icon: Icons.geeksforgeeks,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sync Intern",
      href: "", // You can replace this with the actual URL if different
      badges: [],
      location: "Remote", // Replace with actual location if known
      title: "React JS Intern",
      logoUrl: "/sync intern.jpg",
      start: "July 2023",
      end: "August 2023",
      description: `○ Developed and maintained interactive web applications using React.js, enhancing user experience and increasing user engagement by 15%.\n
○ Optimized components for maximum performance across a vast array of web-capable devices and browsers, resulting in a 20% improvement in load times.\n
○ Implemented state management using Redux, achieving a 10% increase in application performance and reducing data inconsistencies.\n
○ Collaborated with UX/UI designers to translate design wireframes into high-quality code, ensuring responsive and visually appealing interfaces.`,
    },
  ],

  education: [
    {
      school: "Jabalpur Engineering College (JEC)",
      href: "", // Replace with correct official URL if different
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/jecLogo.jpg", // Update the path to your actual logo if different
      start: "2021",
      end: "2025",
      gpa: "7.7",
    },
  ],

  projects: [
    {
      title: "CraftGenie.AI",
      href: "https://craft-genie-ai.vercel.app/", // Replace with actual link if different
      active: true,
      description:
        "CraftGenie.AI is a tool that generates high-quality text content in 15+ genres such as captions, code snippets, and post titles, enhancing productivity for marketers, developers, and creators.",
      technologies: [
        "Next.js",
        "Gemini API",
        "shadcn UI",
        "PostgreSQL",
        "Clerk auth",
        "Drizzle ORM",
      ],
      links: [
        {
          type: "Website",
          href: "https://craft-genie-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/mahesh-barapatre/CraftGenie.AI", // Add GitHub or source repo link if available
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://mahesh14.netlify.app/assets/craftgenie.png",
      video: "", // Add video path if available
    },
    {
      title: "Interview-Saathi.AI",
      href: "https://interview-saathi-nine.vercel.app/", // Replace with actual link if different
      active: true,
      description:
        "An AI Mock Interview app using Next.js and the Google Gemini API, enabling over 1,000 mock interviews across various roles, rounds, and experience levels. Offers realistic scenarios and personalized interview questions.",
      technologies: [
        "Next.js",
        "Gemini API",
        "shadcn UI",
        "PostgreSQL",
        "Clerk auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://interview-saathi-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/mahesh-barapatre/Interview-Saathi", // Add GitHub or source repo link if available
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://mahesh14.netlify.app/assets/saathi.png",
      video: "", // Add video path if available
    },
    {
      title: "Sarthi2.0",
      href: "https://sarthi2-0.vercel.app/", // Replace with actual link if available
      active: true,
      description:
        "Sarthi is a peer-to-peer problem discussion platform with real-time video conferencing, whiteboard, and chat features. Enables interactive collaboration with <100 ms latency using WebRTC and WebSockets.",
      technologies: [
        "React.js",
        "WebRTC",
        "Socket.io",
        "Node.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sarthi2-0.vercel.app/", // Replace with actual site
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/mahesh-barapatre/Sarthi2.0", // Add GitHub or source repo link if available
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://mahesh14.netlify.app/assets/sarthi.png",
      video: "", // Add video path if available
    },
    {
      title: "🧠 Portfolio Support Bot",
      href: "https://www.npmjs.com/package/portfolio-support-bot?activeTab=readme", // Add live link if hosted
      active: true,
      description:
        "A lightweight, customizable chatbot built with React and powered by Google Gemini. Tailored for developer portfolios to answer visitor questions about skills, projects, and contact details.",
      technologies: [
        "React",
        "Google Gemini (gemini-2.0-flash)",
        "CSS",
        "Rollup",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/portfolio-support-bot?activeTab=readme", // Add demo or hosted link if available
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/mahesh-barapatre/custom-gemini-chatbot", // Add GitHub or source repo link if available
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://raw.githubusercontent.com/mahesh-barapatre/custom-gemini-chatbot/refs/heads/main/Screenshot%20(118).png",
      video: "", // Add video if available
    },
  ],
} as const;

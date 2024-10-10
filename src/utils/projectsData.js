import { FaJs, FaReact } from "react-icons/fa";
import { GrMysql, GrNext } from "react-icons/gr";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssLine,
} from "react-icons/ri";
import { SiMaterialdesign, SiMui } from "react-icons/si";

const src =
  "https://images.pixeden.com/images/psd-screen-web-showcase_full_preview_retina.jpg";
export const projectsData = [
  {
    name: "ConnectifAI",
    src: "connectifai.png",
    github: "https://github.com/saran1522/ConnectifAI",
    live: "https://connectif-ai.vercel.app/",
    // tech: [FaReact, FaJs],
    description:
      "A Realtime Video Confrencing application with AI support. Functionalities include Realtime Video Calling, Screen Sharing, Recording, AI Chatbot and more. User can create and join meetings, access upcoming & previous meetings and recordings.",
    tech: [
      "NextJs",
      "ReactJs",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "Stream SDK",
      "Clerk",
      "Gemini API",
    ],
  },
  {
    name: "FlockUp",
    src: "flockup.png",
    github: "https://github.com/saran1522/FlockUp",
    live: "https://flockup.vercel.app",
    // tech: [FaReact, FaJs],
    description:
      "A Full Stack Social Media Application. Functionalities include User Authentication, Profile Creation, Create & Read Posts and Like & Comment on Posts. User can also follow / unfollow other users.",
    tech: ["ReactJs", "ExpressJs", "NodeJs", "MongoDB", "Redux", "Material UI"],
  },
  {
    name: "DnD-LLM",
    src: "dndimg.jpg",
    github: "https://github.com/saran1522/DnDLLM",
    live: "https://dnd-llm.vercel.app/",
    description:
      "A Drag and Drop AI model builder using pretrained LLMs. User can create, test and deploy differnet models from Groq using drag and drop functionality. After deploying they can chat with the deployed model.",
    tech: ["ReactJs", "React-Flow", "TailwindCSS", "Groq API"],
  },
  {
    name: "AI Content Generation Extension",
    src: "extension.jpg",
    github: "https://github.com/saran1522/AI-Contnet-Generation-Extension",
    live: "https://github.com/saran1522/AI-Contnet-Generation-Extension",
    // tech: [FaReact, FaJs],
    description:
      "An AI Powered Content Generation Browser Extension. It shows an AI icon inside the input field on which the user can click, an interactive modal will open where user can generate content using AI. User can generate content for their blogs, articles, mails, social media posts etc. using this extension.",
    tech: ["JavaScript", "Gemini API", "Webpack"],
  },
  {
    name: "EasyRooms",
    src: "easyrooms.png",
    github: "https://github.com/saran1522/EasyRooms",
    live: "https://easyrooms-theta.vercel.app/",
    // tech: [RiNextjsFill, FaReact, FaJs, RiSupabaseFill, RiTailwindCssLine],
    description:
      "A full-stack web application facilitating room reservation services. Functionalities include real-time availability checks, reservation confirmations, dynamic filtering of rooms based on guest capacity.",
    tech: ["NextJs", "ReactJs", "JavaScript", "Supabase", "TailwindCSS"],
  },
  {
    name: "Varta-AI",
    src: "varta.png",
    github: "https://github.com/saran1522/varta-ai",
    live: "https://varta-ai.vercel.app/",
    // tech: [RiNextjsFill, FaReact, FaJs, RiSupabaseFill, RiTailwindCssLine],
    description:
      "An AI conversation Chatbot application built using Gemini API. User can ask questions, get answers, and have a conversation with the AI Chatbot.",
    tech: ["ReactJs", "JavaScript", "TailwindCSS", "Gemini API"],
  },
  {
    name: "Crypto Tracker",
    src: "cryptotracker.png",
    github: "https://github.com/saran1522/crypto-tracker",
    live: "https://cryptos-tracker-app.netlify.app/",
    // tech: [FaReact, FaJs, SiMui, RiFirebaseFill],
    description:
      "A web application that provides real-time information about all cryptocurrencies including trending cryptocurrencies, their prices, market capitalization, and other relevant metrics.",
    tech: ["ReactJs", "JavaScript", "Material-UI", "Firebase"],
  },
];

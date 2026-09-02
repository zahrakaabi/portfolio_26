/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { ProjectType } from "@/types/shared";

/* -------------------------------------------------------------------------- */
/*                             PROJECTS DATA ARRAY                            */
/* -------------------------------------------------------------------------- */
export const projects: ProjectType[] = [
    //ajouter eskiss
    //add this portfolio
    {
        $id: "66",
        title_1: "Admin Dashboard",
        title_2: "",
        image: "saas.svg",
        video: '',
        details: "Development",
        src:"https://admin-dashboarrdd.vercel.app/dashboard",
        color: "#333",
        techs: ["React", "React-form","Shadcn", "Tailwind css", "Yup", "Apex-charts"],
        description: "This project is still in progress, with more features on the way, including editing, deletion, and deeper analytics. This is a product management dashboard for browsing, filtering, and adding products with ease. Still in progress, with more features on the way."
    },
    {
        $id: "01",
        title_1: "Thunder",
        title_2: "ous",
        image: "thunderous.svg",
        video: 'thunderous_.mp4',
        details: "Design & Build",
        src:"https://e-com-thunderous.vercel.app",
        color: "#b1a994",
        techs: ["React" , "React Query", "Firebase", "i18n", "Firebase Auth", "SCSS"],
        description: "A beauty e-commerce platform built with React and Firebase, focusing on scalable state management and polished user interactions. I implemented React Query for efficient data fetching from a custom Firebase API, alongside a custom hook for local pagination and full i18n support (EN/FR). The UI features smooth Framer Motion transitions, hover-tilt effects, and a secure CRUD system for product management."
    },
    {
        $id: "07",
        title_1: "Custom product de",
        title_2: "tails",
        image: 'screen-capture-4.gif',
        details: "Development",
        src:"https://github.com/zahrakaabi/CUSTOM_PRODUCTS_AUTO_SLIDER",
        color: "#e9eaec",
        techs: ["Vanilla Javascript", "Html", "CSS"],
        description: "A custom component that features a custom-built auto slider that showcases multiple products in an interactive carousel. It automatically transitions between images. This component highlights product visuals effectively, enhancing the overall presentation and helping users explore items in more detail."
    },
    {
        $id: "03",
        title_1: "Movie",
        title_2: "hype",
        image: "movie.svg",
        video: 'video1.mp4',
        details: "Design & Build",
        src:"https://movie-hypee.vercel.app",
        color: "#d8d3cd",
        techs: ["React", "Supabase", "Custom hook", "SCSS", "pwa"],
        description: 'An interactive movie management platform featuring a Supabase backend and a custom-built API for dynamic content delivery. I refactored the original codebase to improve performance and responsiveness, implementing a secure role-based authentication system that grants admins exclusive CRUD access via a private dashboard. Key features include a "Quick View" discovery modal, a local favorites system, and a robust search functionality for a seamless user experience.'
    },
    {
        $id: "zitouna",
        title_1: "Zitou",
        title_2: "na",
        image: "zitouna.png",
        video: '',
        details: "UI Design",
        src: "",
        color: "#e9eaec",
        techs: ["Figma"],
        description: "This project is a redesign concept for Zitouna Bank's website, created using Figma. The design focuses on enhancing user experience and modernizing the interface while maintaining the bank's brand identity. It includes intuitive navigation, a clean layout, and visually appealing elements to improve overall usability."
    },
    /*{
        $id: "02",
        title_1: "Boho",
        title_2: "",
        image: "boho.png",
        video: 'video0.mp4',
        details: "Development",
        src:"https://github.com/zahrakaabi/BOHO-shopping-cart",
        color: "#e9eaec",
        techs: ["Vanilla Javascript", "Html", "CSS"],
        description: "An e-commerce website developed using Vanilla JavaScript, HTML, and SCSS, allows users to explore a variety of beautifully arranged floral products, view detailed descriptions, and complete purchases through a smooth and intuitive interface. After completing a checkout, customers have the option to download a PDF receipt of their order, enhancing the overall shopping experience with a touch of professionalism."
    },*/
    /*{
        $id: "04",
        title_1: "Obse",
        title_2: "ssion",
        image: "obsession.png",
        video: 'video2.mp4',
        details: "Design & Build",
        src:"https://github.com/zahrakaabi13/Chef-d-oeuvre",
        color: "#b1a994",
        techs: ["React", "Node Js"],
        description: "A printed hoodie e-commerce website was fully designed and developed to offer a smooth shopping experience. Built React Js and Node Js, it allows users to browse a variety of hoodie designs, view detailed product pages, and complete purchases."
    },*/
    {
        $id: "100",
        title_1: "Habit-",
        title_2: "tracker",
        image: "habit-tracker.png",
        video: "",
        details: "Development",
        src: "https://habit-tracker-pr.vercel.app/",
        color: "#e9eaec",
        techs: ["React", "Local Storage", "Tailwind CSS"],
        description: "A habit tracker where users can add habits with custom weekly schedules, mark them as done, and delete them with a live count of completed habits."
    },
    {
        $id: "09",
        title_1: "Macos-",
        title_2: "portfolio",
        image: "MACOS.png",
        video: '',
        details: "Development",
        src:"https://macos-z-portfolio.vercel.app/",
        color: "#b1a994",
        techs: ["React", "Tailwind css", "GSAP", "Zustand"],
        description: 'This Pomodoro timer website is built as a Progressive Web App (PWA), allowing users to install it on their devices for an app-like experience via "Add to Home Screen." It offers a customizable focus session with the ability to choose between three fonts, three color themes, and set custom durations for Pomodoro, short break, and long break sessions. User preferences are saved using local storage, ensuring a personalized and consistent experience across visits.'
    },
    {
        $id: "155",
        title_1: "Pomo",
        title_2: "doro",
        image: "pomodoro.png",
        video: 'pomodoro.mp4',
        details: "Development",
        src:"https://zkpomodoro.netlify.app/",
        color: "#b1a994",
        techs: ["React", "Local storage"],
        description: 'This Pomodoro timer website is built as a Progressive Web App (PWA), allowing users to install it on their devices for an app-like experience via "Add to Home Screen." It offers a customizable focus session with the ability to choose between three fonts, three color themes, and set custom durations for Pomodoro, short break, and long break sessions. User preferences are saved using local storage, ensuring a personalized and consistent experience across visits.'
    },
    {
        $id: "06",
        title_1: "Youtube",
        title_2: " Clone",
        image: "youtube.png",
        video: 'ytb clone.mp4',
        details: "Development",
        src:"https://github.com/zahrakaabi/YOUTUBE_CLONE",
        color: "#e9eaec",
        techs: ["React", "Material UI", "Rapid API"],
        description: "This project is a video streaming platform built with React, Material UI and RapidApi, offering core functionalities such as video playback, search, channel browsing, comments, and recommendations. It features responsive design for optimal viewing across devices, dynamic routing for video and channel pages. Users can enjoy a smooth, intuitive UI that closely mirrors the YouTube experience."
    },
    /*{
        $id: "05",
        title_1: "Watch ",
        title_2: "& Go",
        image: "watchNgo.png",
        video: 'video4.mp4',
        details: "Design & Build",
        src:"https://github.com/zahrakaabi/watchNgo",
        color: "",
        techs: "Vanilla Javscript | Html | CSS",
        description: "Ane-commerce website that sells watches, it was fully designed and developed to offer a smooth shopping experience. Built Vanilla Js no frameworks, it allows users to browse a variety of hoodie designs, view detailed product pages, and complete purchases."
    },*/
    {
        $id: "08",
        title_1: "Sharingan",
        title_2: "",
        image: "sharingan.png",
        video: 'sharingan.mp4',
        details: "Development",
        src:"https://github.com/",
        color: "#dcd0c2",
        techs: ["Html", "CSS"],
        description: "This fun project showcases the creation of the iconic Sharingan eye from the Naruto anime using only CSS. The video demonstrates how CSS alone can be leveraged to build complex and animated visuals, proving that with creativity and code, you can bring even the most detailed designs to life—purely with frontend magic."
    }
]
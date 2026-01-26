const navLinks = [
    { id: 1, name: 'Projects', type: 'finder' },
    { id: 2, name: 'Contact', type: 'contact' },
    { id: 3, name: 'Resume', type: 'resume' },
    { id: 4, name: 'Gallery', type: 'photos' },
]

const navIcons = [
    { id: 1, src: '/icons/wifi.svg' },
    { id: 2, src: '/icons/search.svg' },
    { id: 3, src: '/icons/user.svg' },
    { id: 4, src: '/icons/mode.svg' },
]

const dockApps = [
    { id: 'finder', src: '/images/finder.png', name: 'Finder', canOpen: true },
    { id: 'safari', src: '/images/safari.png', name: 'Safari', canOpen: true },
    { id: 'photos', src: '/images/photos.png', name: 'Gallery', canOpen: true },
    { id: 'contact', src: '/images/contact.png', name: 'Contact', canOpen: true },
    { id: 'terminal', src: '/images/terminal.png', name: 'Skills', canOpen: true },
    { id: 'trash', src: '/images/trash.png', name: 'Trash', canOpen: false },
]

const WORK_LOCATION = {
    id: 1,
    type: 'work',
    name: 'Work',
    icon: "/icons/work.svg",
    kind: 'folder',
    children: [
        {
            id: 5,
            name: "Immersive Product Display",
            icon: "/images/folder.png",
            kind: 'folder',
            position: "top-10 left-5", // icon position inside finder
            windowPosition: "top-[15vh] right-50", // initial window position when opened
            children: [
                {
                    id: 1,
                    name: "Immersive Product.txt",
                    icon: "/images/txt.png",
                    kind: 'file',
                    fileType: 'txt',
                    position: "top-5 left-10",
                    description: [
                        "The Immersive Product Display is a sleek and modern web application designed to showcase products in an engaging 3D environment.",
                        "The Product Displayed here is of an Iphone 15 Pro Max.",
                        "Built using React.js, Three.js and GSAP, this application offers users an interactive experience where they can explore products from all angles, zoom in for detailed views, and interact with various features.",
                    ],
                },
                {
                    id: 2,
                    name: "IphoneWebsite.com",
                    icon: "/images/safari.png",
                    kind: 'file',
                    fileType: 'url',
                    href: "https://iphone-website-tau.vercel.app/",
                    position: "top-20 right-20",
                },
                {
                    id: 3,
                    name: "immersive-product-display.png",
                    icon: "/images/image.png",
                    kind: 'file',
                    fileType: 'img',
                    imageUrl: "/images/Iphone_project.png",
                    position: "top-52 left-40",
                }
            ]
        },
        // ▶ Project 2
        {
            id: 6,
            name: "AI Resume Builder",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-47",
            children: [
                {
                    id: 1,
                    name: "AI Resume Builder Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-25 left-10",
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "This is currently under construction and is being developed as a full-stack application with Next.js, Tailwind CSS, and AI integration for intelligent resume analysis.",
                    ],
                },
                // {
                //     id: 2,
                //     name: "ai-resume-builder.com",
                //     icon: "/images/safari.png",
                //     kind: "file",
                //     fileType: "url",
                //     href: "",
                //     position: "top-20 left-20",
                // },
                // {
                //     id: 4,
                //     name: "ai-resume-builder.png",
                //     icon: "/images/image.png",
                //     kind: "file",
                //     fileType: "img",
                //     position: "top-52 left-80",
                //     imageUrl: "/images/project.png",
                // },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Mac-OS Portfolio",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[50vh] left-60",
            children: [
                {
                    id: 1,
                    name: "Mac-OS Portfolio Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The MacOS Portfolio is an interactive web-based portfolio that recreates the macOS Big Sur experience right in your browser.",
                        "Instead of a traditional portfolio website, users can explore projects, skills, and contact info through a fully functional desktop environment with draggable windows, smooth animations, and authentic macOS interactions.",
                        "Think of it like having a real Mac desktop—complete with a dock, finder windows, minimize effects, and native-style controls—all built to showcase work in a memorable, engaging way.",
                        "It's built with React.js, GSAP, and Zustand for state management, featuring smooth GSAP animations and a pixel-perfect UI that feels just like the real thing.",
                    ],
                },
                {
                    id: 2,
                    name: "aayushthorat.me",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://aayushthorat.me",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "portfolio-website.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/mac-os-portfolio.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/Aayush-1.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/Aayush-2.jpeg",
        },
        {
            id: 3,
            name: "casual-me-2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/Aayush-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/Aayush-1.jpg",
            description: [
                "Hey! I’m Aayush 👋 — a software engineer who enjoys building things that look good, work smoothly, and don’t break when real people use them.",
                "I mostly play around with JavaScript, React, and Python, and I also have working knowledge of C, C++, and Java, which helps me understand systems more deeply. I love turning ideas into polished, interactive experiences.",
                "I’m a bit obsessed with clean UI, smooth animations, and code that won’t make future-me regret life choices.",
                "When I’m not coding, you’ll usually find me playing sports, going for long drives to clear my head, or switching between playlists while planning my next project 🚗⚽",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
        {
            id: 3,
            name: "trash3.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-60 left-30",
            imageUrl: "/images/trash-3.png",
        },
  ],
};


export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION
};

const INITIAL_Z_INDEX = 1000;

const WindowConfig = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
}



const techStack = [
    { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'GSAP', 'Three.js', 'Bootstrap'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Firebase', 'MySQL'] },
    { category: 'Languages', items: ['C/C++', 'Python', 'Java', 'Javascript', 'HTML/CSS'] },
    { category: 'Dev Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
]

const BlogPosts = [
    {
        id: 1,
        date: "Dec 30, 2025",
        title: "My MacOS Portfolio is Live!",
        image: "/images/MacOS Logo.png",
        link: "https://github.com/aayushthorat27/MacOS-Portfolio"
    },
    {
        id: 2,
        date: "Aug 12, 2025",
        title: "Completing My Internship at Bajaj Finserv",
        image: "/images/BFL_hd_Logo.png",
        link: "https://www.linkedin.com/posts/aayush-kailas-thorat_internship-frontend-logging-activity-7361366595065016321-UizM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlRhgsB2BJwYtwtQqhRGvu-Cfai3f8D1Sc"
    },
    {
        id: 3,
        date: "May 15, 2025",
        title: "Completed My Internship at Zymo",
        image: "/images/zymo.jpg",
        link: "https://www.linkedin.com/posts/aayush-kailas-thorat_internship-completion-certificate-activity-7332279509234143233-48zp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlRhgsB2BJwYtwtQqhRGvu-Cfai3f8D1Sc"
    }
]

const socials = [
    {
        id: 1,
        text: "GitHub",
        icon: "/icons/github.svg",
        // bg: "#f4656b",
        bg: "#01040a",
        link: "https://github.com/aayushthorat27",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        // bg: "#05b6f6",
        bg: "#0a66c2",
        link: "https://www.linkedin.com/in/aayush-kailas-thorat/",
    },
    {
        id: 3,
        text: "Gmail",
        icon: "/icons/gmail.svg",
        // bg: "#d14836",
        bg: "#b22234",
        link: "mailto:aayushthorat27@gmail.com",
    }
]

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];


export { navLinks, navIcons, dockApps, 
    WindowConfig, INITIAL_Z_INDEX, techStack, BlogPosts, 
    socials, photosLinks, gallery };
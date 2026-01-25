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
            windowPosition: "top-[15vh] right-20", // initial window position when opened
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
                    position: "top-20 right-20",
                    href: "https://iphone-website-tau.vercel.app/",

                }
            ]
        },
        // ▶ Project 2
        {
            id: 6,
            name: "AI Resume Analyzer",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "AI Resume Analyzer Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "ai-resume-analyzer.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "ai-resume-analyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Food Delivery App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Food Delivery App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
                        "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
                        "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
                        "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
                    ],
                },
                {
                    id: 2,
                    name: "food-delivery-app.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "food-delivery-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
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
            imageUrl: "/images/adrian-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/adrian-3.jpeg",
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


export { navLinks, navIcons, dockApps, WindowConfig, INITIAL_Z_INDEX, techStack, BlogPosts };
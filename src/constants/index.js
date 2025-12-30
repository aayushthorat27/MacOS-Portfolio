const navLinks = [
    { id: 1, name: 'Projects' },
    { id: 2, name: 'Contact' },
    { id: 3, name: 'Resume' },
    { id: 4, name: 'Gallery' },
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
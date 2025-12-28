// import useReveal from "../hooks/useReveal";

// export default function Skills() {
//     const [ref, show] = useReveal();

//     const skills = [
//         {
//             title: "Frontend Development",
//             desc: "React.js, Redux, RTK Query, Tailwind CSS",
//             icon: (
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <rect x="3" y="4" width="26" height="18" rx="2" />
//                     <path d="M3 9h26" />
//                 </svg>
//             ),
//         },
//         {
//             title: "Mobile App Development",
//             desc: "React Native, Android, Animations",
//             icon: (
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <rect x="9" y="2" width="14" height="28" rx="3" />
//                 </svg>
//             ),
//         },
//         {
//             title: "Backend Development",
//             desc: "Node.js, Express, MongoDB, REST APIs",
//             icon: (
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M4 6h16v12H4z" />
//                     <path d="M20 8h4v8h-4z" />
//                 </svg>
//             ),
//         },
//         {
//             title: "Authentication & Security",
//             desc: "JWT, OTP Login, RBAC, Rate Limiting",
//             icon: (
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <rect x="5" y="11" width="14" height="10" rx="2" />
//                     <path d="M8 11V8a4 4 0 018 0v3" />
//                 </svg>
//             ),
//         },
//         {
//             title: "Real-Time Systems",
//             desc: "Socket.IO, Firebase, Live Tracking",
//             icon: (
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//                 </svg>
//             ),
//         },
//         {
//             title: "DevOps & Tools",
//             desc: "Docker, GitHub, AWS, CI/CD",
//             icon: (
//                 <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <circle cx="12" cy="12" r="9" />
//                     <path d="M12 3v18M3 12h18" />
//                 </svg>
//             ),
//         },
//     ];

//     return (
//         <section
//             ref={ref}
//             id="skills"
//             className={`py-24 transition-all duration-700
//         ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >
//             <h2 className="text-center text-3xl font-semibold mb-4">
//                 My Skills
//             </h2>

//             <p className="text-center text-gray-400 max-w-xl mx-auto mb-14">
//                 Technologies and tools I use to build scalable,
//                 production-ready web and mobile applications.
//             </p>

//             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                 {skills.map((skill) => (
//                     <div
//                         key={skill.title}
//                         className="bg-[#111118] p-8 rounded-2xl border border-white/10
//                        hover:border-purple-500/40
//                        hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
//                        transition"
//                     >
//                         {/* ICON */}
//                         <div className="text-purple-400 mb-4">
//                             {skill.icon}
//                         </div>

//                         <h3 className="text-lg font-semibold mb-2">
//                             {skill.title}
//                         </h3>

//                         <p className="text-gray-400 text-sm leading-relaxed">
//                             {skill.desc}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

import useReveal from "../hooks/useReveal";

export default function Skills() {
    const [ref, show] = useReveal();

    const skills = [
        {
            title: "Frontend Development",
            desc: "React.js, Redux, RTK Query, Tailwind CSS",
            icon: (
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="22" height="14" rx="2" />
                    <path d="M3 9h22" />
                </svg>
            ),
        },
        {
            title: "Mobile App Development",
            desc: "React Native, Android, Animations",
            icon: (
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="9" y="2" width="10" height="24" rx="3" />
                </svg>
            ),
        },
        {
            title: "Backend Development",
            desc: "Node.js, Express, MongoDB, REST APIs",
            icon: (
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 6h14v12H4z" />
                    <path d="M18 8h4v8h-4z" />
                </svg>
            ),
        },
        {
            title: "Authentication & Security",
            desc: "JWT, OTP Login, RBAC, Rate Limiting",
            icon: (
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" />
                </svg>
            ),
        },
        {
            title: "Real-Time Systems",
            desc: "Socket.IO, Firebase, Live Tracking",
            icon: (
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
        },
        {
            title: "DevOps & Tools",
            desc: "Docker, GitHub, AWS, CI/CD",
            icon: (
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v18M3 12h18" />
                </svg>
            ),
        },
    ];

    return (
        <section
            ref={ref}
            id="skills"
            className={`py-24 transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {/* HEADER */}
            <h2 className="text-center text-3xl font-semibold mb-3">
                My Skills
            </h2>

            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
                A focused set of technologies and tools I use to design,
                build, and scale production-ready web and mobile applications.
            </p>

            {/* GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {skills.map((skill) => (
                    <div
                        key={skill.title}
                        className="group relative bg-[#111118] p-8 rounded-2xl
              border border-white/10
              transition-all duration-300
              hover:-translate-y-2
              hover:border-purple-500/40
              hover:shadow-[0_0_50px_rgba(168,85,247,0.18)]"
                    >
                        {/* ICON BADGE */}
                        <div className="mb-5 w-12 h-12 flex items-center justify-center
              rounded-xl bg-purple-500/10 text-purple-400
              group-hover:bg-purple-500/20 transition">
                            {skill.icon}
                        </div>

                        {/* TITLE */}
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition">
                            {skill.title}
                        </h3>

                        {/* DESC */}
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {skill.desc}
                        </p>

                        {/* BOTTOM GRADIENT LINE */}
                        <div className="absolute inset-x-0 bottom-0 h-[1px]
              bg-gradient-to-r from-transparent via-purple-500/40 to-transparent
              opacity-0 group-hover:opacity-100 transition" />
                    </div>
                ))}
            </div>
        </section>
    );
}

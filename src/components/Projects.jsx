


// import { projects } from "../data/projects";
// import useReveal from "../hooks/useReveal";

// const icons = {
//     game: (
//         <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//             <rect x="2" y="10" width="28" height="14" rx="4" />
//             <path d="M8 17h4M20 15v4" />
//         </svg>
//     ),
//     web: (
//         <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//             <rect x="3" y="4" width="26" height="20" rx="2" />
//             <path d="M3 9h26" />
//         </svg>
//     ),
//     location: (
//         <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
//             <path d="M12 21s6-5.686 6-10a6 6 0 10-12 0c0 4.314 6 10 6 10z" />
//             <circle cx="12" cy="11" r="2.5" />
//         </svg>
//     ),
// };

// export default function Projects() {

//     const [ref, show] = useReveal();

//     return (
//         // <section id="projects" className="py-24">
//         <section
//             ref={ref}
//             id="projects"
//             className={`py-24 transition-all duration-700 ease-out
//         ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >


//             <h2 className="text-center text-3xl font-semibold mb-12">
//                 My Projects
//             </h2>

//             <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//                 {projects.map((p) => (
//                     <div
//                         key={p.title}
//                         className="bg-[#111118] p-8 rounded-2xl border border-white/10
//                        hover:border-purple-500/40
//                        hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
//                        transition"
//                     >
//                         {/* ICON */}
//                         <div className="text-purple-400 mb-4">
//                             {icons[p.type]}
//                         </div>

//                         <h3 className="text-xl font-semibold">{p.title}</h3>
//                         <p className="text-gray-400 mt-3">{p.desc}</p>

//                         <a
//                             href={p.live}
//                             target="_blank"
//                             className="inline-block mt-6 text-blue-400 hover:underline"
//                         >
//                             Live Demo →
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </section >
//     );
// }

import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";

const icons = {
    game: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="10" width="28" height="14" rx="4" />
            <path d="M8 17h4M20 15v4" />
        </svg>
    ),
    web: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="26" height="20" rx="2" />
            <path d="M3 9h26" />
        </svg>
    ),
    location: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21s6-5.686 6-10a6 6 0 10-12 0c0 4.314 6 10 6 10z" />
            <circle cx="12" cy="11" r="2.5" />
        </svg>
    ),
};

const typeLabel = {
    game: "Game",
    web: "Web App",
    location: "Mobile App",
};

export default function Projects() {
    const [ref, show] = useReveal();

    return (
        <section
            ref={ref}
            id="projects"
            className={`py-24 transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {/* SECTION HEADER */}
            <h2 className="text-center text-3xl font-semibold mb-3">
                My Projects
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
                Real-world projects showcasing my experience in building
                scalable web platforms, mobile applications, and real-time systems.
            </p>

            {/* PROJECT GRID */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="group relative bg-[#111118] p-8 rounded-2xl border border-white/10
              transition-all duration-300
              hover:-translate-y-2
              hover:border-purple-500/40
              hover:shadow-[0_0_50px_rgba(168,85,247,0.18)]"
                    >
                        {/* TYPE BADGE */}
                        <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full
              bg-purple-500/10 text-purple-400">
                            {typeLabel[p.type]}
                        </span>

                        {/* ICON */}
                        <div className="text-purple-400 mb-5">
                            {icons[p.type]}
                        </div>

                        {/* TITLE */}
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                            {p.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {p.desc}
                        </p>

                        {/* CTA */}
                        <div className="mt-6">
                            <a
                                href={p.live}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-blue-400
                  group-hover:text-blue-300 transition"
                            >
                                View Live
                                <span className="group-hover:translate-x-1 transition">→</span>
                            </a>
                        </div>

                        {/* GLOW LINE (DECORATIVE) */}
                        <div className="absolute inset-x-0 bottom-0 h-[1px]
              bg-gradient-to-r from-transparent via-purple-500/40 to-transparent
              opacity-0 group-hover:opacity-100 transition" />
                    </div>
                ))}
            </div>
        </section>
    );
}

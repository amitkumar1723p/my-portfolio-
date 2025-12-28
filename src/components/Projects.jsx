
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

// const typeLabel = {
//     game: "Game",
//     web: "Web App",
//     location: "Mobile App",
// };

// export default function Projects() {
//     const [ref, show] = useReveal();

//     return (
//         <section
//             ref={ref}
//             id="projects"
//             className={`py-24 transition-all duration-700 ease-out
//         ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         >
//             {/* SECTION HEADER */}
//             <h2 className="text-center text-3xl font-semibold mb-3">
//                 My   <span className="text-blue-500">Projects</span>
//             </h2>
//             <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
//                 Real-world projects showcasing my experience in building
//                 scalable web platforms, mobile applications, and real-time systems.
//             </p>

//             {/* PROJECT GRID */}
//             <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//                 {projects.map((p) => (
//                     <div
//                         key={p.title}
//                         className="group relative bg-[#111118] p-8 rounded-2xl border border-white/10
//               transition-all duration-300
//               hover:-translate-y-2
//               hover:border-purple-500/40
//               hover:shadow-[0_0_50px_rgba(168,85,247,0.18)]"
//                     >
//                         {/* TYPE BADGE */}
//                         <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full
//               bg-purple-500/10 text-purple-400">
//                             {typeLabel[p.type]}
//                         </span>

//                         {/* ICON */}
//                         <div className="text-purple-400 mb-5">
//                             {icons[p.type]}
//                         </div>

//                         {/* TITLE */}
//                         <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
//                             {p.title}
//                         </h3>

//                         {/* DESCRIPTION */}
//                         <p className="text-gray-400 text-sm leading-relaxed">
//                             {p.desc}
//                         </p>

//                         {/* CTA */}
//                         <div className="mt-6">
//                             {p.status === "live" ? (
//                                 <a
//                                     href={p.live}
//                                     target="_blank"
//                                     className="group relative inline-flex items-center gap-2 px-4 py-2
//   text-blue-400 font-medium rounded-full
//   border border-blue-500/30
//   overflow-hidden
//   transition-all duration-300
//   hover:text-white hover:border-blue-400"
//                                 >
//                                     {/* Animated Border Glow */}
//                                     <span className="absolute inset-0 rounded-full
//     border border-blue-500/40
//     animate-border-pulse" />

//                                     {/* Text */}
//                                     <span className="relative z-10">View Live</span>

//                                     {/* Arrow */}
//                                     <span className="relative z-10 transition-transform duration-300
//     group-hover:translate-x-1">
//                                         →
//                                     </span>
//                                 </a>
//                             ) : (
//                                 <span className="inline-flex items-center gap-2
//       text-yellow-400 bg-yellow-500/10
//       px-3 py-1 rounded-full text-sm">
//                                     🚧 Under Development
//                                 </span>
//                             )}
//                         </div>

//                         {/* GLOW LINE (DECORATIVE) */}
//                         <div className="absolute inset-x-0 bottom-0 h-[1px]
//               bg-gradient-to-r from-transparent via-purple-500/40 to-transparent
//               opacity-0 group-hover:opacity-100 transition" />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


import useReveal from "../hooks/useReveal";


import { projects } from "../data/projects";
import {
    FaGamepad,
    FaGlobe,
    FaMapMarkedAlt,
    FaExternalLinkAlt,
    FaHourglassHalf,
} from "react-icons/fa";

const iconMap = {
    game: { icon: FaGamepad, color: "#22C55E" },     // green
    web: { icon: FaGlobe, color: "#38BDF8" },        // blue
    location: { icon: FaMapMarkedAlt, color: "#FACC15" }, // yellow
};

export default function Projects() {
    const [ref, show] = useReveal();

    return (
        <section
            ref={ref}
            id="projects"
            className={`py-28 transition-all duration-700
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {/* HEADER */}
            <h2 className="text-center text-3xl font-semibold mb-3">
                Featured <span className="text-blue-500">Projects</span>
            </h2>

            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                A selection of real-world web and mobile applications I’ve built,
                ranging from production-ready products to in-progress startup ideas.
            </p>

            {/* PROJECT GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((p) => {
                    const Icon = iconMap[p.type].icon;
                    const iconColor = iconMap[p.type].color;

                    return (
                        <div
                            key={p.title}
                            className="group relative bg-[#111118] rounded-2xl p-8
              border border-white/10
              transition-all duration-300
              hover:-translate-y-2
              hover:border-purple-500/40
              hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]"
                        >
                            {/* STATUS BADGE */}
                            <div className="absolute top-5 right-5">
                                {p.status === "live" ? (
                                    <span className="px-3 py-1 text-xs rounded-full
                  bg-green-500/10 text-green-400">
                                        Live
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 text-xs rounded-full
                  bg-yellow-500/10 text-yellow-400 flex items-center gap-1">
                                        <FaHourglassHalf size={12} />
                                        In Development
                                    </span>
                                )}
                            </div>

                            {/* ICON */}
                            <div
                                className="text-3xl mb-5"
                                style={{ color: iconColor }}
                            >
                                <Icon />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                                {p.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {p.desc}
                            </p>

                            {/* CTA */}
                            {p.status === "live" ? (
                                <a
                                    href={p.live}
                                    target="_blank"
                                    className="inline-flex items-center gap-2
                  text-blue-400 font-medium
                  relative group-hover:text-blue-300 transition"
                                >
                                    View Live
                                    <FaExternalLinkAlt size={14} />
                                    {/* underline animation */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px]
                  bg-blue-400 group-hover:w-full transition-all duration-300" />
                                </a>
                            ) : (
                                <span className="text-gray-500 text-sm italic">
                                    Coming soon — Startup in progress
                                </span>
                            )}

                            {/* GLOW LINE */}
                            <div
                                className="absolute inset-x-0 bottom-0 h-[1px]
                bg-gradient-to-r from-transparent via-purple-500/40 to-transparent
                opacity-0 group-hover:opacity-100 transition"
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}








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
            className={`py-28 transition-all duration-700 px-6
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
            <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10">
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





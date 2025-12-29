

import useReveal from "../hooks/useReveal";
import {
    FaGlobe,
    FaMobileAlt,
    FaBolt,
} from "react-icons/fa";

const items = [
    {
        title: "Web Development",
        desc: "Building scalable and secure web applications using the MERN stack with role-based dashboards, authentication, and real-world business workflows.",
        icon: FaGlobe,
        color: "#38BDF8", // blue
    },
    {
        title: "Mobile App Development",
        desc: "Developing high-performance Android applications using React Native with smooth animations, Redux state management, and production-ready builds.",
        icon: FaMobileAlt,
        color: "#22C55E", // green
    },
    {
        title: "Real-Time Systems",
        desc: "Implementing real-time features such as live tracking, multiplayer gameplay, and instant updates using Socket.IO, Firebase, and REST APIs.",
        icon: FaBolt,
        color: "#FACC15", // yellow
    },
];

export default function Specialities() {
    const [ref, show] = useReveal();

    return (
        <section
            ref={ref}
            className={`relative py-24 transition-all duration-700 px-6
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {/* SECTION HEADER */}
            <h2 className="text-center text-3xl font-semibold mb-3">
                My <span className="text-blue-500">Specialities</span>
            </h2>

            <p className="text-center text-gray-400 max-w-xl mx-auto mb-16">
                Core areas where I focus on delivering real-world,
                production-ready web and mobile solutions.
            </p>

            {/* CARDS */}
            <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-10">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="group relative bg-[#111118] rounded-2xl p-8
              border border-white/10
              transition-all duration-300
              hover:-translate-y-2
              hover:border-purple-500/40
              hover:shadow-[0_0_50px_rgba(168,85,247,0.18)]"
                        >
                            {/* GLOW BACKDROP */}
                            <div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-br
                from-purple-500/10 via-transparent to-blue-500/10
                opacity-0 group-hover:opacity-100 transition"
                            />

                            {/* ICON */}
                            <div className="relative z-10 mb-6 text-3xl">
                                <Icon
                                    style={{ color: item.color }}
                                    className="group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* TITLE */}
                            <h3
                                className="relative z-10 text-lg font-semibold mb-3
                group-hover:text-purple-400 transition"
                            >
                                {item.title}
                            </h3>

                            {/* DESC */}
                            <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            {/* BOTTOM ACCENT LINE */}
                            <div
                                className="absolute left-6 right-6 bottom-4 h-[1px]
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

import useReveal from "../hooks/useReveal";
import {
    FaReact,
    FaNodeJs,
    FaDocker,
    FaAws,
    FaGithub,
    FaMobileAlt,
    FaLock,
} from "react-icons/fa";
import {
    SiRedux,
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiSocketdotio,
    SiTailwindcss,
    SiJavascript,
} from "react-icons/si";

export default function Skills() {
    const [ref, show] = useReveal();



    const iconColors = {
        FaReact: "#61DAFB",
        SiRedux: "#764ABC",
        SiTailwindcss: "#38BDF8",
        SiJavascript: "#F7DF1E",

        FaMobileAlt: "#4ADE80",

        FaNodeJs: "#68A063",
        SiExpress: "#ffffff",
        SiMongodb: "#47A248",

        FaLock: "#F59E0B",
        SiFirebase: "#FFCA28",

        SiSocketdotio: "#ffffff",

        FaDocker: "#2496ED",
        FaGithub: "#ffffff",
        FaAws: "#FF9900",
    };

    const skills = [
        {
            title: "Frontend Development",
            desc: "Building modern, scalable UIs using React.js, Redux Toolkit, RTK Query, and Tailwind CSS.",
            icons: [FaReact, SiRedux, SiTailwindcss, SiJavascript],
        },
        {
            title: "Mobile App Development",
            desc: "Developing high-performance Android apps using React Native with smooth animations and production builds.",
            icons: [FaReact, FaMobileAlt],
        },
        {
            title: "Backend Development",
            desc: "Designing secure and scalable backend systems using Node.js, Express, MongoDB, and REST APIs.",
            icons: [FaNodeJs, SiExpress, SiMongodb],
        },
        {
            title: "Authentication & Security",
            desc: "Implementing secure authentication flows using JWT, OTP login, RBAC, and API rate limiting.",
            icons: [FaLock, SiFirebase],
        },
        {
            title: "Real-Time Systems",
            desc: "Building real-time features like live tracking, multiplayer systems, and notifications using Socket.IO & Firebase.",
            icons: [SiSocketdotio, SiFirebase],
        },
        {
            title: "DevOps & Tools",
            desc: "Managing deployments, containers, and CI/CD pipelines using Docker, GitHub, AWS, and cloud infrastructure.",
            icons: [FaDocker, FaGithub, FaAws],
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
                My <span className="text-blue-500">Skills</span>
            </h2>

            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                Technologies and tools I use to design, build, and scale real-world
                web and mobile applications.
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
            hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]"
                    >
                        {/* ICONS */}
                        <div className="flex gap-4 text-2xl mb-5">
                            {skill.icons.map((Icon, i) => (
                                <Icon
                                    key={i}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                    style={{ color: iconColors[Icon.name] }}
                                />
                            ))}
                        </div>

                        {/* TITLE */}
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition">
                            {skill.title}
                        </h3>

                        {/* DESC */}
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {skill.desc}
                        </p>

                        {/* GLOW LINE */}
                        <div className="absolute inset-x-0 bottom-0 h-[1px]
            bg-gradient-to-r from-transparent via-purple-500/40 to-transparent
            opacity-0 group-hover:opacity-100 transition" />
                    </div>
                ))}
            </div>
        </section>
    );
}

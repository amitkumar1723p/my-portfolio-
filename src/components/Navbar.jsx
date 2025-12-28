
import {
    FaCode,
    FaProjectDiagram,
    FaEnvelope,
    FaHandshake,
} from "react-icons/fa";

export default function Navbar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const yOffset = -90;
        const y =
            section.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed top-0 w-full z-50">
            {/* GLASS BG */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-b border-white/10" />

            <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <div className="flex items-center gap-2 text-lg font-semibold tracking-wide">
                    <FaCode className="text-purple-400 text-xl" />
                    <p className="flex">   <span className="text-white">Amit</span>
                        <span className="text-purple-400">.dev</span></p>

                </div>

                {/* NAV LINKS */}
                <div className="hidden md:flex gap-8 text-sm text-gray-300">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="relative flex items-center gap-2 group hover:text-white transition bg-transparent cursor-pointer"
                    >
                        <FaProjectDiagram className="text-purple-400 group-hover:scale-110 transition" />
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px]
            bg-gradient-to-r from-purple-500 to-blue-500
            group-hover:w-full transition-all duration-300" />
                    </button>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="relative flex items-center gap-2 group hover:text-white transition bg-transparent cursor-pointer"
                    >
                        <FaEnvelope className="text-blue-400 group-hover:scale-110 transition" />
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px]
            bg-gradient-to-r from-purple-500 to-blue-500
            group-hover:w-full transition-all duration-300" />
                    </button>
                </div>

                {/* CTA */}
                <button
                    onClick={() => scrollToSection("contact")}
                    className="relative flex items-center gap-2 px-5 py-2 rounded-full
          text-sm font-medium
          bg-gradient-to-r from-purple-600 to-blue-600
          text-white overflow-hidden
          shadow-lg shadow-purple-500/30
          group cursor-pointer"
                >
                    <FaHandshake className="text-white group-hover:scale-110 transition" />

                    <span className="absolute inset-0 bg-gradient-to-r
          from-transparent via-white/20 to-transparent
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition-transform duration-700" />

                    <span className="relative z-10">Hire Me</span>
                </button>
            </div>
        </nav>
    );
}

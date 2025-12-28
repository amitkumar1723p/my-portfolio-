


export default function Navbar() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        console.log(section, "section")
        if (!section) return;

        const yOffset = -90; // navbar height
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
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-b border-white/10" />

            <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <h1 className="font-semibold text-lg tracking-wide">
                    <span className="text-white">Amit</span>
                    <span className="text-purple-400">.dev</span>
                </h1>

                {/* NAV LINKS */}
                <div className="hidden md:flex gap-8 text-sm text-gray-300">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="relative group hover:text-white transition bg-transparent"
                    >
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px]
              bg-gradient-to-r from-purple-500 to-blue-500
              group-hover:w-full transition-all duration-300" />
                    </button>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="relative group hover:text-white transition bg-transparent"
                    >
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px]
              bg-gradient-to-r from-purple-500 to-blue-500
              group-hover:w-full transition-all duration-300" />
                    </button>
                </div>

                {/* CTA */}
                <button
                    onClick={() => scrollToSection("contact")}
                    className="relative px-5 py-2 rounded-full text-sm font-medium
          bg-gradient-to-r from-purple-600 to-blue-600
          text-white overflow-hidden
          shadow-lg shadow-purple-500/30
          group"
                >
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

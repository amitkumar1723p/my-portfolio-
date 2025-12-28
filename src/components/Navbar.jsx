export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="font-semibold text-lg">Amit.dev</h1>

                <div className="hidden md:flex gap-8 text-sm text-gray-300">
                    <a href="#projects" className="hover:text-white">Projects</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </div>

                <a
                    href="#contact"
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm"
                >
                    Hire Me
                </a>
            </div>
        </nav>
    );
}

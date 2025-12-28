import {
    FaEnvelope,
    FaPhoneAlt,
    FaLinkedinIn,
    FaWhatsapp,
    FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
    return (











        <section
            id="contact"
            className="relative py-24 bg-[#0B1120] overflow-hidden"
        >







            {/* Ambient Glow */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-600/30 blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[160px]" />

            <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-white">

                {/* LEFT */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Let’s build something
                        <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            impactful together.
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg max-w-md">
                        I’m Amit — a full-stack developer who loves building
                        fast, scalable web & mobile products that solve real problems.
                    </p>

                    {/* BUTTONS (RESPONSIVE FIXED) */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/919718451723?text=Hi%20Amit,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2
              px-7 py-3 rounded-full
              bg-gradient-to-r from-purple-600 to-blue-600
              font-semibold shadow-lg shadow-purple-600/40
              hover:scale-105 transition"
                        >
                            <FaWhatsapp size={30} className="text-[#25D366] drop-shadow-[0_0_6px_rgba(37,211,102,0.6)]" />

                            Start a Conversation
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2
              px-7 py-3 rounded-full
              border border-white/20 text-gray-300
              hover:bg-white/10 transition"
                        >
                            View Work <FaArrowRight />
                        </a>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div
                    className="relative group
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-3xl p-8
          shadow-2xl shadow-purple-500/20
          hover:-translate-y-3 transition-all duration-500"
                >
                    <div className="relative z-10 flex flex-col gap-6 text-gray-200">

                        {/* EMAIL */}
                        <a
                            href="mailto:amitkumar1723p@gmail.com"
                            className="flex items-center gap-4 hover:text-purple-400 transition"
                        >
                            <FaEnvelope className="text-purple-400" />
                            <span className="text-sm">amitkumar1723p@gmail.com</span>
                        </a>

                        {/* PHONE */}
                        <a
                            href="tel:+919718451723"
                            className="flex items-center gap-4 hover:text-purple-400 transition"
                        >
                            <FaPhoneAlt className="text-blue-400" />
                            <span className="text-sm">+91 97184 51723</span>
                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://www.linkedin.com/in/amit-kumar-419890258/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 hover:text-purple-400 transition"
                        >
                            <FaLinkedinIn className="text-sky-400" />
                            <span className="text-sm">linkedin.com/in/amit-kumar</span>
                        </a>
                    </div>

                    {/* Glow Border */}
                    <div
                        className="absolute inset-0 rounded-3xl
            border border-purple-500/20
            opacity-0 group-hover:opacity-100 transition
            pointer-events-none"
                    />
                </div>
            </div>
        </section>
    );
}

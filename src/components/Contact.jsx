export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-24 bg-[#0B1120] overflow-hidden"
        >
            {/* Ambient Glow */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-600/30 blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[160px]" />

            <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center text-white">

                {/* LEFT SIDE – PERSONALITY */}
                <div>
                    <h2 className="text-5xl font-extrabold leading-tight">
                        Let’s build something
                        <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            impactful together.
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg max-w-md">
                        I’m Amit — a full-stack developer who loves building
                        fast, scalable web & mobile products that actually
                        solve real problems.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="https://wa.me/919718451723?text=Hi%20Amit,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3 rounded-full
  bg-gradient-to-r from-purple-600 to-blue-600
  font-semibold shadow-lg shadow-purple-600/40
  hover:scale-105 transition"
                        >
                            Start a Conversation →
                        </a>


                        <a
                            href="#projects"
                            className="px-7 py-3 rounded-full
                            border border-white/20 text-gray-300
                            hover:bg-white/10 transition"
                        >
                            View Work
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE – FLOATING CARD */}

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
                        <a href="mailto:amitkumar1723p@gmail.com" className="flex items-center gap-4 hover:text-purple-400 transition">
                            <span className="text-2xl">✉</span>
                            <span className="text-sm">amitkumar1723p@gmail.com</span>
                        </a>

                        {/* PHONE */}
                        <a href="tel:+919718451723" className="flex items-center gap-4 hover:text-purple-400 transition">
                            <span className="text-2xl">📞</span>
                            <span className="text-sm">+91 97184 51723</span>
                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://www.linkedin.com/in/amit-kumar-419890258/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 hover:text-purple-400 transition"
                        >
                            <span className="text-2xl">🔗</span>
                            <span className="text-sm">linkedin.com/in/amit-kumar</span>
                        </a>
                    </div>

                    {/* Glow Border (visual only) */}
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

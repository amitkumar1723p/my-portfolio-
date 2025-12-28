


import useReveal from "../hooks/useReveal"
import Amit from '../assets/amit.png'
import Resume from '../assets/amit.pdf'

export default function Hero() {
    const [ref, show] = useReveal();

    return (
        <section
            ref={ref}
            className={`relative min-h-screen flex items-center pt-28 overflow-hidden
        transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >

            {/* FLOATING STARS */}
            <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-24 left-24 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
                <span className="absolute top-40 right-40 w-3 h-3 bg-pink-400 rounded-full opacity-50" />
                <span className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* ================= LEFT CONTENT ================= */}
                <div>
                    <p className="text-gray-400 mb-4">
                        This is your developer
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight flex flex-wrap gap-x-2">
                        <span className="text-white/90">Amit</span>
                        <span className="text-blue-500">Kumar</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-white/90 font-medium">
                        Full-Stack Web & Mobile Developer
                    </p>

                    <p className="mt-5 text-gray-400 max-w-xl leading-relaxed">
                        I build production-ready web and mobile applications using the MERN stack
                        and React Native.
                        Experienced in real-time systems, scalable backend architecture,
                        and end-to-end product development.
                    </p>

                    <p className="mt-4 text-sm text-gray-500">
                        MERN Stack • React Native • Redux • Socket.IO • Firebase • AWS
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full
               bg-gradient-to-r from-purple-600 to-blue-600
               text-white font-medium
               shadow-lg shadow-purple-500/30"
                        >
                            View Projects
                        </a>

                        <a
                            href={Resume}
                            download
                            className="px-6 py-3 rounded-full
               border border-pink-500/40
               text-pink-400
               hover:bg-pink-500/10 transition"
                        >
                            Download Resume
                        </a>
                    </div>

                </div>

                {/* ================= RIGHT IMAGE + LIGHTNING GLOW ================= */}
                <div className="relative flex justify-center">

                    {/* BIG PINK CLOUD LIGHT (LIGHTNING STYLE) */}
                    <div
                        className="lightning-glow absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px]
              rounded-full
              bg-gradient-to-br
              from-pink-500/50 via-purple-500/40 to-indigo-500/30"
                    />

                    {/* IMAGE */}
                    <img
                        src={Amit}
                        alt="Amit Kumar"
                        className="relative z-10 w-64 md:w-80 rounded-2xl"
                    />

                    {/* ================= MERN BADGE ================= */}
                    {/* <div className="absolute right-0 top-1/2 translate-x-1/3 -translate-y-1/2">
                        <div
                            className="relative w-28 h-28 rounded-full flex items-center justify-center
                border border-purple-500/40
                bg-black/40 backdrop-blur"
                        >
                            <div className="absolute inset-0 rounded-full border border-dashed border-purple-500/40 animate-spin-slow" />
                            <span className="text-sm tracking-widest text-purple-400 font-semibold">
                                MERN
                            </span>
                        </div>
                    </div> */}


                    {/* ================= STACK BADGES ================= */}
                    <div className="absolute right-0 top-1/2 translate-x-1/3 -translate-y-1/2 space-y-4">

                        {/* WEB */}
                        <div className="relative w-28 h-28 rounded-full flex items-center justify-center
    border border-blue-500/40 bg-black/40 backdrop-blur">
                            <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/40 animate-spin-slow" />
                            <span className="text-xs tracking-widest text-blue-400 font-semibold">
                                WEB
                            </span>
                        </div>

                        {/* MOBILE */}
                        <div className="relative w-28 h-28 rounded-full flex items-center justify-center
    border border-pink-500/40 bg-black/40 backdrop-blur">
                            <div className="absolute inset-0 rounded-full border border-dashed border-pink-500/40 animate-spin-slow-reverse" />
                            <span className="text-xs tracking-widest text-pink-400 font-semibold">
                                MOBILE
                            </span>
                        </div>

                    </div>

                </div>



            </div>
        </section>
    );
}


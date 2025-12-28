// // export default function Footer() {
// //     return (
// //         <footer className="py-6 text-center text-gray-500 text-sm">
// //             © {new Date().getFullYear()} Amit Kumar
// //         </footer>
// //     );
// // }

// import {
//     FaGithub,
//     FaLinkedinIn,
//     FaEnvelope,
//     FaHeart,
// } from "react-icons/fa";

// export default function Footer() {
//     return (
//         <footer className="relative mt-24 border-t border-white/10 overflow-hidden">
//             {/* Ambient glow */}
//             <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-[400px] h-[400px] bg-purple-600/20 blur-[140px]" />

//             <div className="relative max-w-7xl mx-auto px-6 py-10 text-center text-gray-400">

//                 {/* BRAND */}
//                 <h3 className="text-lg font-semibold tracking-wide text-white mb-2">
//                     Amit<span className="text-purple-400">.dev</span>
//                 </h3>

//                 <p className="text-sm max-w-md mx-auto mb-6">
//                     Full-Stack Web & Mobile Developer building scalable,
//                     production-ready applications.
//                 </p>

//                 {/* SOCIAL LINKS */}
//                 <div className="flex justify-center gap-6 text-xl mb-6">
//                     <a
//                         href="https://github.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-white transition"
//                         aria-label="GitHub"
//                     >
//                         <FaGithub />
//                     </a>

//                     <a
//                         href="https://www.linkedin.com/in/amit-kumar-419890258/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-white transition"
//                         aria-label="LinkedIn"
//                     >
//                         <FaLinkedinIn />
//                     </a>

//                     <a
//                         href="mailto:amitkumar1723p@gmail.com"
//                         className="hover:text-white transition"
//                         aria-label="Email"
//                     >
//                         <FaEnvelope />
//                     </a>
//                 </div>

//                 {/* COPYRIGHT */}
//                 <p className="text-xs flex items-center justify-center gap-1">
//                     © {new Date().getFullYear()} Amit Kumar · Built with
//                     <FaHeart className="text-red-500" /> React
//                 </p>
//             </div>
//         </footer>
//     );
// }


import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10">
            {/* subtle glow */}
            <div className="absolute inset-x-0 -top-20 h-32 bg-purple-600/10 blur-[120px]" />

            <div
                className="relative max-w-7xl mx-auto px-6 py-5
        flex flex-col sm:flex-row
        items-center justify-between
        gap-4 text-gray-400 text-sm"
            >
                {/* LEFT */}
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">
                        Amit<span className="text-purple-400">.dev</span>
                    </span>
                    <span className="hidden sm:inline text-gray-500">
                        · Full-Stack Developer
                    </span>
                </div>

                {/* CENTER (SOCIAL) */}
                <div className="flex items-center gap-5 text-lg">
                    <a
                        href="https://github.com/amitkumar1723p/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/amit-kumar-419890258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="mailto:amitkumar1723p@gmail.com"
                        className="hover:text-white transition"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    © {new Date().getFullYear()} · Built with
                    <FaHeart className="text-red-500 mx-1" /> React
                </div>
            </div>
        </footer>
    );
}

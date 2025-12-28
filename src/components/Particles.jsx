// // import { useEffect, useRef } from "react";

// // export default function Particles() {
// //     const canvasRef = useRef(null);

// //     useEffect(() => {
// //         const canvas = canvasRef.current;
// //         const ctx = canvas.getContext("2d");

// //         let w = canvas.width = window.innerWidth;
// //         let h = canvas.height = window.innerHeight;

// //         const particles = Array.from({ length: 80 }).map(() => ({
// //             x: Math.random() * w,
// //             y: Math.random() * h,
// //             r: Math.random() * 1.5 + 0.5,
// //             vx: (Math.random() - 0.5) * 0.3,
// //             vy: (Math.random() - 0.5) * 0.3,
// //         }));

// //         function animate() {
// //             ctx.clearRect(0, 0, w, h);
// //             ctx.fillStyle = "rgba(168,85,247,0.6)";

// //             particles.forEach(p => {
// //                 p.x += p.vx;
// //                 p.y += p.vy;

// //                 if (p.x < 0 || p.x > w) p.vx *= -1;
// //                 if (p.y < 0 || p.y > h) p.vy *= -1;

// //                 ctx.beginPath();
// //                 ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
// //                 ctx.fill();
// //             });

// //             requestAnimationFrame(animate);
// //         }

// //         animate();

// //         window.addEventListener("resize", () => {
// //             w = canvas.width = window.innerWidth;
// //             h = canvas.height = window.innerHeight;
// //         });
// //     }, []);

// //     return (
// //         <canvas
// //             ref={canvasRef}
// //             className="fixed inset-0 -z-10 pointer-events-none"
// //         />
// //     );
// // }


// import { useEffect, useRef } from "react";

// export default function Particles() {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         let w = (canvas.width = window.innerWidth);
//         let h = (canvas.height = window.innerHeight);

//         /* ================= NORMAL PARTICLES ================= */
//         const particles = Array.from({ length: 110 }).map(() => ({
//             x: Math.random() * w,
//             y: Math.random() * h,
//             r: Math.random() * 1.8 + 0.6,
//             vx: (Math.random() - 0.5) * 0.6,
//             vy: (Math.random() - 0.5) * 0.6,
//         }));

//         /* ================= SHOOTING STAR / ROCKET ================= */
//         let shootingStar = createShootingStar();

//         function createShootingStar() {
//             return {
//                 x: Math.random() * w * 0.5,
//                 y: Math.random() * h * 0.3,
//                 vx: 8 + Math.random() * 4,
//                 vy: 4 + Math.random() * 2,
//                 life: 0,
//             };
//         }

//         function animate() {
//             /* MOTION TRAIL (SMOOTH BACKGROUND) */
//             ctx.fillStyle = "rgba(10,10,15,0.25)";
//             ctx.fillRect(0, 0, w, h);

//             /* DRAW PARTICLES */
//             ctx.fillStyle = "rgba(168,85,247,0.6)";
//             particles.forEach((p) => {
//                 p.x += p.vx;
//                 p.y += p.vy;

//                 if (p.x < 0 || p.x > w) p.vx *= -1;
//                 if (p.y < 0 || p.y > h) p.vy *= -1;

//                 ctx.beginPath();
//                 ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//                 ctx.fill();
//             });

//             /* DRAW SHOOTING STAR */
//             shootingStar.x += shootingStar.vx;
//             shootingStar.y += shootingStar.vy;
//             shootingStar.life++;

//             ctx.strokeStyle = "rgba(236,72,153,0.85)";
//             ctx.lineWidth = 2;
//             ctx.beginPath();
//             ctx.moveTo(shootingStar.x, shootingStar.y);
//             ctx.lineTo(
//                 shootingStar.x - 50,
//                 shootingStar.y - 25
//             );
//             ctx.stroke();

//             /* RESET SHOOTING STAR */
//             if (
//                 shootingStar.x > w ||
//                 shootingStar.y > h ||
//                 shootingStar.life > 70
//             ) {
//                 shootingStar = createShootingStar();
//             }

//             requestAnimationFrame(animate);
//         }

//         animate();

//         /* ================= RESIZE ================= */
//         function handleResize() {
//             w = canvas.width = window.innerWidth;
//             h = canvas.height = window.innerHeight;
//         }
//         window.addEventListener("resize", handleResize);

//         /* ================= SCROLL REACTION ================= */
//         function handleScroll() {
//             shootingStar.vx = 10 + window.scrollY * 0.01;
//         }
//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             className="fixed inset-0 -z-10 pointer-events-none"
//         />
//     );
// }

import { useEffect, useRef } from "react";

export default function Particles() {
    const canvasRef = useRef(null);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        /* ================= NORMAL PARTICLES ================= */
        const particles = Array.from({ length: 100 }).map(() => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.6 + 0.6,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
        }));

        /* ================= SHOOTING STAR ================= */
        let shootingStar = null;

        function createShootingStar() {
            return {
                x: Math.random() * w * 0.4,
                y: Math.random() * h * 0.3,
                vx: 10,
                vy: 5,
                life: 0,
            };
        }

        function animate() {
            /* SOFT TRAIL */
            ctx.fillStyle = "rgba(10,10,15,0.25)";
            ctx.fillRect(0, 0, w, h);

            /* DRAW PARTICLES */
            ctx.fillStyle = "rgba(168,85,247,0.6)";
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            });

            /* DRAW ROCKET ONLY WHILE SCROLLING */
            if (isScrollingRef.current && shootingStar) {
                shootingStar.x += shootingStar.vx;
                shootingStar.y += shootingStar.vy;
                shootingStar.life++;

                ctx.strokeStyle = "rgba(236,72,153,0.85)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(shootingStar.x, shootingStar.y);
                ctx.lineTo(
                    shootingStar.x - 50,
                    shootingStar.y - 25
                );
                ctx.stroke();

                if (
                    shootingStar.x > w ||
                    shootingStar.y > h ||
                    shootingStar.life > 60
                ) {
                    shootingStar = createShootingStar();
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        /* ================= SCROLL CONTROL ================= */
        function handleScroll() {
            isScrollingRef.current = true;

            if (!shootingStar) {
                shootingStar = createShootingStar();
            }

            clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
                isScrollingRef.current = false;
                shootingStar = null;
            }, 300);
        }

        window.addEventListener("scroll", handleScroll);

        /* ================= RESIZE ================= */
        function handleResize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    );
}

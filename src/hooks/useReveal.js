// import { useEffect, useRef, useState } from "react";

// export default function useReveal() {
//     const ref = useRef(null);
//     const [show, setShow] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => entry.isIntersecting && setShow(true),
//             { threshold: 0.15 }
//         );

//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, []);

//     return [ref, show];
// }


import { useEffect, useRef, useState } from "react";

export default function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}

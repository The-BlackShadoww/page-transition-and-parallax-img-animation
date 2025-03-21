"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import Lenis from "lenis";

const lerp = (start, end, factor) => start + (end - start) * factor;

const ParallaxImage = ({ src, alt }) => {
    const imageRef = useRef(null);
    const bounds = useRef(null);
    const currentTranslateY = useRef(0);
    const targetTranslateY = useRef(0);
    const refId = useRef(null);

    useEffect(() => {
        const updateBounds = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                bounds.current = {
                    top: rect.top + window.scrollY,
                    bottom: rect.bottom + window.scrollY,
                };
            }
        };

        updateBounds();
        window.addEventListener("resize", updateBounds);

        const animate = () => {
            if (imageRef.current) {
                currentTranslateY.current = lerp(
                    currentTranslateY.current,
                    targetTranslateY.current,
                    0.1
                );

                if (
                    Math.abs(
                        currentTranslateY.current - targetTranslateY.current
                    ) > 0.01
                ) {
                    imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
                }
            }

            refId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", updateBounds);
            if (refId.current) {
                cancelAnimationFrame(refId.current);
            }
        };
    }, []);

    // useLenis((scroll) => {
    //     if (!bounds.current) return;
    //     const relativeScroll = scroll - bounds.current.top;
    //     targetTranslateY.current = relativeScroll * 0.2;
    //     console.log(
    //         "Scroll position:",
    //         scroll,
    //         "Target translate Y:",
    //         targetTranslateY.current
    //     );
    // });

    useLenis((lenis) => {
        if (!bounds.current || !imageRef.current) return;

        const scroll = lenis.scroll;
        const relativeScroll = scroll - bounds.current.top;
        targetTranslateY.current = relativeScroll * 0.2;
    });
    

    // useEffect(() => {
    //     if (!bounds.current) return;
    //     // const lenis = new Lenis();

    //     const lenis = new Lenis({
    //         smoothWheel: true, // Enable smooth scrolling for mouse wheel
    //         smoothTouch: true, // Enable smooth scrolling for touch events
    //     });

    //     lenis.on("scroll", ({ scroll }) => {
    //         const relativeScroll = scroll - bounds.current.top;
    //         targetTranslateY.current = relativeScroll * 0.2;
    //         console.log(
    //             "Scroll position:",
    //             scroll,
    //             "Target translate Y:",
    //             targetTranslateY.current
    //         );
    //     });

    //     lenis.start();

    //     return () => {
    //         lenis.destroy();
    //     };
    // }, []);

    return (
        <img
            className="absolute w-full h-full object-cover will-change-transform"
            ref={imageRef}
            src={src}
            alt={alt}
            style={{
                willChange: "transform",
                transform: "translateY(0) scale(1.25)",
            }}
        />
    );
};

export default ParallaxImage;

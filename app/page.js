"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Home() {
    const container = useRef(null);
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });

    useGSAP(
        () => {
            const heroText = new SplitType(".home h1", { types: "char" });
            gsap.set(heroText.chars, { y: 400 });

            gsap.to(heroText.chars, {
                y: 0,
                duration: 1,
                stagger: 0.075,
                ease: "power4.out",
                delay: 1,
            });
        },

        { scope: container }
    );

    return (
        <div
            ref={container}
            className="home w-screen h-svh bg-[#1a1a1a] flex justify-center items-center text-center"
        >
            <h1
                className="w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 uppercase text-[20vw] text-[#fff] font-extrabold tracking-[-0.05rem] leading-[1]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            >
                Jebal{" "}
            </h1>
        </div>
    );
}

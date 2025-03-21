"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

const Info = () => {
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
            const text = new SplitType(".info p", {
                types: "lines",
                tagName: "div",
                linesClass: "line",
            });

            text.lines.forEach((line) => {
                const content = line.innerHTML;
                line.innerHTML = `<span>${content}</span>`;
            });

            gsap.set(".info p .line span", {
                y: 400,
                display: "block",
            });

            gsap.to(".info p .line span", {
                y: 0,
                duration: 2,
                stagger: 0.075,
                ease: "power4.out",
                delay: 0.25,
            });

            return () => {
                if (text) text.revert();
            };
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="info w-screen h-full min-h-svh bg-[#1a1a1a] grid grid-cols-[1fr_1fr]"
        >
            <div className="col">
                <img src="/image5.jpg" alt="" />
            </div>
            <div className="col p-[2em] flex items-center justify-center">
                <p className="font-medium text-[1.5rem] text-[#fff]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sed numquam temporibus modi voluptatibus vero laborum
                    perferendis aliquid ad accusamus maiores mollitia, harum
                    labore, tenetur nobis voluptatum quasi vitae fuga quos.
                </p>
            </div>
        </div>
    );
};

export default Info;

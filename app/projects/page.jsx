"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const Projects = () => {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });
    
    return (
        <div className="projects w-screen h-full min-h-svh bg-[#1a1a1a] p-[20em_1em]">
            <div className="w-[30%] mx-auto flex flex-col gap-[2em]">
                <img src="/image1.jpg" alt="" />
                <img src="/image2.jpg" alt="" />
                <img src="/image3.jpg" alt="" />
                <img src="/image4.jpg" alt="" />
            </div>
        </div>
    );
};

export default Projects;

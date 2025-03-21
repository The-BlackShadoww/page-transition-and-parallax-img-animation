"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";
import ParallaxImage from "../components/ParallaxImage";

const ParallaxPage = () => {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });

    return (
        <main className="app">
            {/* Hero */}
            <section className="hero section-tag">
                <div className="img-2">
                    <ParallaxImage src="/image10.jpg" alt="" />
                </div>
                <div className="nav absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen p-[1em] flex items-center justify-between z-2">
                    <p className="p-tag">Tour</p>
                    <p className="p-tag">Updates</p>
                    <p className="p-tag">contact</p>
                    <p className="p-tag">Merch</p>
                </div>
            </section>

            {/* Projects */}
            <section className="projects section-tag w-screen h-[125vh] flex gap-[10em]">
                <div className="img-2">
                    <ParallaxImage src="/image6.jpg" alt="" />
                </div>

                <div className="projects-brief absolute w-[25%] top-[35%] left-[35%] -translate-x-1/2 -translate-y-1/2 z-2">
                    <p className="p-tag">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>

                <div className="col relative projects-cover flex-[1] h-1/2">
                    <div className="img-2">
                        <ParallaxImage src="/image8.jpg" alt="" />
                    </div>
                </div>

                <div className="col relative projects-list flex-[2] flex flex-col justify-center items-center gap-[2em]">
                    <div className="project">
                        <h1 className="h1-tag">Sunrise</h1>
                        <p className="p-tag">Apple Music / Spotify / YouTube</p>
                    </div>
                    <div className="project">
                        <h1 className="h1-tag">Sunrise</h1>
                        <p className="p-tag">Apple Music / Spotify / YouTube</p>
                    </div>
                    <div className="project">
                        <h1 className="h1-tag">Sunrise</h1>
                        <p className="p-tag">Apple Music / Spotify / YouTube</p>
                    </div>
                    <div className="project">
                        <h1 className="h1-tag">Sunrise</h1>
                        <p className="p-tag">Apple Music / Spotify / YouTube</p>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="about section-tag flex bg-[#68461f]">
                <div className="col intro relative flex-[1] flex flex-col justify-center items-center p-[1em]">
                    <p className="p-tag w-1/2 text-center underline mb-[0.5em]">
                        Introduction
                    </p>
                    <p className="p-tag w-1/2 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>
                <div className="col portrait relative flex-[1] flex flex-col justify-center items-center p-[1em]">
                    <div className="portrait-container relative w-full h-full">
                        <div className="img-2">
                            <ParallaxImage src="/image11.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner */}
            <section className="banner section-tag flex items-center justify-center">
                <div className="img-2">
                    <ParallaxImage src="/image12.jpg" alt="" />
                </div>
                <div className="banner-copy relative text-center">
                    <p className="p-tag">Be the</p>
                    <h1 className="h1-tag uppercase">First to know</h1>
                    <p className="p-tag w-[75%] m-[1em_auto]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do
                    </p>
                    <button className="button-tag">Join the newsletter</button>
                </div>
            </section>

            {/* Footer */}
            <section className="footer section-tag flex p-[1em] bg-[#68461f]">
                <div className="col flex-[4] h-full flex flex-col justify-between">
                    <p className="p-tag">Instagram / Tiktok / Discord</p>
                    <div className="footer-links">
                        <p className="p-tag">Menu</p>
                        <h1 className="h1-tag uppercase">Tour</h1>
                        <h1 className="h1-tag uppercase">Updates</h1>
                        <h1 className="h1-tag uppercase">contact</h1>
                        <h1 className="h1-tag uppercase">Merch</h1>
                    </div>
                    <p className="p-tag">&copy; Be the best.</p>
                </div>

                <div className="col flex-[2] h-full flex flex-col justify-between">
                    <p className="p-tag">
                        Join the newsletter <br />
                        <button className="button-tag">Subscribe</button>
                    </p>

                    <div className="shop relative w-full h-1/2">
                        <div className="img-2">
                            <ParallaxImage src="/image13.jpg" alt="" />
                        </div>
                    </div>

                    <p className="p-tag">Spotify / Apple Music / YouTube</p>
                </div>
            </section>
        </main>
    );
};

export default ParallaxPage;

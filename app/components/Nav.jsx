"use client";

import { useTransitionRouter } from "next-view-transitions";

const Nav = () => {
    const router = useTransitionRouter();

    const slideInOut = () => {
        document.documentElement.animate(
            [
                { opacity: 1, transform: "translateY(0)" },
                { opacity: 0, transform: "translateY(-35%)" },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    };

    return (
        <nav className="fixed top-0 left-0 w-screen p-[1.75rem] flex justify-between items-center ">
            <div className="logo">
                <div className="link">
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/", {
                                onTransitionReady: slideInOut,
                                // onTransitionStart: slideInOut,
                            });
                        }}
                        href="/"
                    >
                        Index
                    </a>
                </div>
            </div>
            <div className="links flex gap-[2rem]">
                <div className="link">
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/projects", {
                                onTransitionReady: slideInOut,
                                // onTransitionStart: slideInOut,
                            });
                        }}
                        href="/projects"
                    >
                        Projects
                    </a>
                </div>
                <div className="link">
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/info", {
                                onTransitionReady: slideInOut,
                                // onTransitionStart: slideInOut,
                            });
                        }}
                        href="/info"
                    >
                        Info
                    </a>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/parallax-scroll", {
                                onTransitionReady: slideInOut,
                                // onTransitionStart: slideInOut,
                            });
                        }}
                        href="/parallax-scroll"
                    >
                        parallax-scroll
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

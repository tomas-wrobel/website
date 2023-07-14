"use client";
import {useRef, type FunctionComponent, useEffect} from "react";
import Typed from "typed.js";

const TypingAnimation: FunctionComponent = () => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const typed = new Typed(ref.current!, {
            strings: ["Web Developer", "Student", "Certified Programmer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        return function () {
            typed.destroy();
        };
    }, []);

    return <span id="type-it" className="subtitle subtitle-typed" ref={ref} />;
};

export default TypingAnimation;

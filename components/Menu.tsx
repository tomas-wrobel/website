"use client";
import Link from "next/link";
import {useEffect, type FunctionComponent} from "react";

const Menu: FunctionComponent = () => {
    useEffect(() => {
        function scroll() {
            let current = "";
            for (const section of document.querySelectorAll<HTMLElement>(
                ".pp-section"
            )) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id") || "";
                }
            }
            for (const li of document.querySelectorAll<HTMLLIElement>(
                ".nav-menu li"
            )) {
                li.classList.remove("active");
                if (
                    new URL(li.querySelector("a")!.href).hash == `#${current}`
                ) {
                    li.classList.add("active");
                }
            }
        }

        window.addEventListener("scroll", scroll);

        return function () {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    return (
        <ul className="nav nav-menu" id="pp-menu">
            <li className="active">
                <a className="nav-link" href="#">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a className="nav-link" href="#about">
                    <span>About Me</span>
                </a>
            </li>
            <li>
                <a className="nav-link" href="#services">
                    <span>Services</span>
                </a>
            </li>
            <li>
                <a className="nav-link" href="#blog">
                    <span>Blog</span>
                </a>
            </li>
            <li>
                <a className="nav-link" href="#contactus">
                    <span>Contact Me</span>
                </a>
            </li>
        </ul>
    );
};

export default Menu;

"use client";
import Link from "next/link";
import {useEffect, type FunctionComponent} from "react";

export const Links = [
    ["", "Home"],
    ["about", "About Me"],
    ["services", "Services"],
    ["blog", "Blog"],
    ["contactus", "Contact Me"],
] as const;

export const Root: FunctionComponent = () => {
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
        window.requestAnimationFrame(scroll);

        return function () {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    return (
        <ul className="nav nav-menu" id="pp-menu">
            {Links.map(([href, text]) => (
                <li key={href}>
                    <a className="nav-link" href={"#" + href}>
                        <span>{text}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export type Props = {current?: typeof Links[number][0]};

export const Fixed: FunctionComponent<Props> = ({current}) => (
    <ul className="nav nav-menu" id="pp-menu">
        {Links.map(([href, text]) => (
            <li key={href} className={href == current ? "active" : ""}>
                <Link className="nav-link" href={"/#" + href}>
                    <span>{text}</span>
                </Link>
            </li>
        ))}
    </ul>
);

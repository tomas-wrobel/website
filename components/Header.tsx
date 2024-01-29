"use client";
import Link from "next/link";
import {type FunctionComponent, useState, useRef, useEffect} from "react";
import * as Menu from "./Menu";
import classNames from "clsx";

const Header: FunctionComponent<Header.Props> = ({current}) => {
    const [sideBar, setSideBar] = useState(false);
    const dom = useRef<HTMLElement>(null);

    // When sideBar = true, listen for outside click
    useEffect(() => {
        if (sideBar) {
            function outside(e: MouseEvent) {
                if (!dom.current?.contains(e.target as Node)) {
                    setSideBar(false);
                }
            }

            document.addEventListener("click", outside);

            return function () {
                document.removeEventListener("click", outside);
            };
        }
    }, [sideBar]);

    return (
        <>
            <div className="mob-header">
                <div className="d-flex">
                    <div className="navbar-brand">
                        <Link href="/" className="logo-text">
                            Tomáš Wróbel
                        </Link>
                    </div>
                    <button
                        className={classNames("toggler-menu", {
                            open: sideBar,
                        })}
                        onClick={() => setSideBar(!sideBar)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            {/* End Header */}
            {/* nav bar */}
            <header
                className={classNames("header-left", {
                    "menu-open": sideBar,
                    "menu-open-desk": sideBar,
                })}
                ref={dom}
            >
                <div className="scroll-bar">
                    <div className="hl-top">
                        <div className="hl-logo">
                            <div className="img">
                                <img
                                    src="/img/me.png"
                                    title=""
                                    alt=""
                                    style={{background: "#FFC300"}}
                                />
                            </div>
                            <h5>Tomáš W.</h5>
                        </div>
                    </div>
                    {current === "root" ? (
                        <Menu.Root />
                    ) : (
                        <Menu.Fixed current={current} />
                    )}
                </div>
                <div className="nav justify-content-center social-icons">
                    <a href="https://facebook.com/wrobeltomas">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://github.com/tomas-wrobel">
                        <i className="fab fa-github" />
                    </a>
                    <a href="https://instagram.com/wrobel.tomas">
                        <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/tomas-wrobel/">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
            </header>
        </>
    );
};

declare namespace Header {
    interface Props {
        current?: Menu.Props["current"] | "root";
    }
}

export default Header;

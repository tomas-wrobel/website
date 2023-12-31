"use client";
import Link from "next/link";
import {type FunctionComponent, useState} from "react";
import CertificatesMenu from "./CertificatesMenu";
import Menu from "./Menu";
import classNames from "clsx";

const Header: FunctionComponent<{certificates?: boolean}> = ({
    certificates,
}) => {
    const [sideBar, setSideBar] = useState(false);

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
                            <h5>Tomáš Wróbel</h5>
                        </div>
                    </div>
                    {certificates ? <CertificatesMenu /> : <Menu />}
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
export default Header;

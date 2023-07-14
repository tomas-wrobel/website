import Link from "next/link";
import type {FunctionComponent} from "react";

const CertificatesMenu: FunctionComponent = () => {
    return (
        <ul className="nav nav-menu" id="pp-menu">
            <li>
                <Link href="/" className="nav-link">
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/#about" className="nav-link">
                    <span>About Me</span>
                </Link>
            </li>
            <li>
                <Link href="/#services" className="nav-link">
                    <span>Services</span>
                </Link>
            </li>
            <li>
                <Link href="/certificates" className="nav-link">
                    <span>Certificates</span>
                </Link>
            </li>
            <li>
                <Link href="/blog" className="nav-link">
                    <span>Blog</span>
                </Link>
            </li>
            <li>
                <Link href="/#contactus" className="nav-link">
                    <span>Contact Me</span>
                </Link>
            </li>
        </ul>
    );
};

export default CertificatesMenu;

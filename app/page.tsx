import type { Metadata } from "next";
import Link from "next/link";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Services from "../components/Services";
import TypingAnimation from "../components/TypingAnimation";
import Page from "../components/Page";

export const metadata: Metadata = {
	title: "Tomáš Wróbel | Home",
	description: "I am a web developer with a passion for creating beautiful and functional websites.",
};

export default async function Home() {
    return (
        <Page current="root">
            <section className="pp-section pp-scrollable">
                <div className="home-banner">
                    <div className="container">
                        <div className="row full-screen align-items-center">
                            <div className="col-lg-6">
                                <div className="type-box">
                                    <h6>Hello, I am</h6>
                                    <h1>Tomáš Wróbel</h1>
                                    <p className="lead">
                                        I am a <TypingAnimation />
                                    </p>
                                    <p className="desc">
                                        Passionate web developer fluent in
                                        Flutter. Creating stunning websites and
                                        apps with seamless cross-platform
                                        experiences.
                                    </p>
                                    <div className="btn-bar">
                                        <Link
                                            className="px-btn px-btn-theme"
                                            href="/certificates"
                                        >
                                            See Certificates
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hb-img">
                                    <img src="/img/intro.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Home */}
            {/* about us */}
            <About />
            {/* End about us */}
            {/* Services */}
            <Services />
            {/* End Services */}
            {/* Certificates */}
            <Blog />
            {/* End Certificates */}
            {/* Contact us */}
            <Contact />
        </Page>
    );
}

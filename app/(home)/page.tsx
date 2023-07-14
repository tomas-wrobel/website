import About from "../../components/About";
import Contact from "../../components/Contact";
import Services from "../../components/Services";
import TypingAnimation from "../../components/TypingAnimation";

export default async function Home() {
    return (
        <>
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
                                        <a
                                            className="px-btn px-btn-theme"
                                            href="#"
                                        >
                                            Download CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hb-img">
                                    <img
                                        src="/img/home-banner.png"
                                        title=""
                                        alt=""
                                    />
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
            {/* End Certificates */}
            {/* Contact us */}
            <Contact />
        </>
    );
}

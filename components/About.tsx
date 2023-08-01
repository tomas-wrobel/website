import type {FunctionComponent} from "react";

const About: FunctionComponent = () => (
    <section id="about" className="pp-section pp-scrollable counter">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 m-15px-tb">
                    <div className="about-me">
                        <div className="img">
                            <div className="img-in">
                                <img src="/img/code.png" title="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 m-15px-tb">
                    <div className="about-info">
                        <div className="title">
                            <h3>About me.</h3>
                        </div>
                        <div className="about-text">
                            <h3>I{"'"}m a student with great skills</h3>
                            <p>
                                I{"'"}ve been programming since I was 12. I{"'"}
                                m from the Czech Republic. These days I develop
                                open-source Web or Flutter apps. I{"'"}m also a
                                student at the Grammar school of Wichterle.
                            </p>
                            <div className="row">
                                <div className="col-auto">
                                    <div className="media align-items-center">
                                        <span className="count">160+</span>
                                        <div className="media-body">
                                            Contributions <br />
                                            last year
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="media align-items-center">
                                        <span className="count">5+</span>
                                        <div className="media-body">
                                            Open-source <br />
                                            Projects.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-bar">
                                <a className="px-btn px-btn-theme" href="#">
                                    <span>Contact Me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separated" />
            <div className="title">
                <h3>Education &amp; Skills</h3>
            </div>
            <div className="row">
                <div className="col-lg-4 m-15px-tb">
                    <ul className="aducation-box">
                        <li>
                            <span>2018-2026</span>
                            <h6>Maths & Science</h6>
                            <p>Grammar school of Wichetrle</p>
                        </li>
                        <li>
                            <span>2018-2020</span>
                            <h6>The very beginnings</h6>
                            <p>SoloLearn</p>
                        </li>
                        <li>
                            <span>2020-2022</span>
                            <h6>Advanced programming</h6>
                            <p>Programming Hub</p>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-7 ml-auto m-15px-tb">
                    <div className="skills-box">
                        <h3>My skills</h3>
                        <p>
                            I got the most skills by courses. Also, my skills
                            come from Stack Overflow, MDN Docs and books. But I
                            learnt Flutter from its own documentation only.
                        </p>
                        <p>
                            If you{"'"}re interested in more, feel free to contact
                            me.
                        </p>
                        <div className="skill-lt">
                            <h6>HTML5</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in"
                                    style={{width: "96%"}}
                                >
                                    <span title="96%" />
                                </div>
                            </div>
                        </div>
                        {/* /skill */}
                        <div className="skill-lt">
                            <h6>TypeScript + React</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in"
                                    style={{width: "92%"}}
                                >
                                    <span title="92%" />
                                </div>
                            </div>
                        </div>
                        {/* /skill */}
                        <div className="skill-lt">
                            <h6>Design</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in"
                                    style={{width: "16%"}}
                                >
                                    <span title="16%" />
                                </div>
                            </div>
                        </div>
                        {/* /skill */}
                        <div className="skill-lt">
                            <h6>Flutter + Dart</h6>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-in"
                                    style={{width: "82%"}}
                                >
                                    <span title="82%" />
                                </div>
                            </div>
                        </div>
                        {/* /skill */}
                    </div>
                </div>
            </div>
            <div className="separated" />
        </div>
    </section>
);

export default About;

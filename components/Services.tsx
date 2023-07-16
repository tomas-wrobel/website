import type {FunctionComponent} from "react";

const Services: FunctionComponent = () => (
    <section id="services" className="pp-section pp-scrollable">
        <div className="container">
            <div className="title">
                <h3>What I do?</h3>
            </div>
            <div className="row">
                <div className="col-sm-6 m-15px-tb">
                    <div className="feature-box-01 media">
                        <i className="icon theme-bg icon-mobile" />
                        <div className="feature-content media-body">
                            <h5>Responsive Design</h5>
                            <p>
                                Websites by me work on all devices, so you
                                can increase the number of potential customers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 m-15px-tb">
                    <div className="feature-box-01 media">
                        <i className="icon theme-bg icon-desktop" />
                        <div className="feature-content media-body">
                            <h5>Web Development</h5>
                            <p>
                                I create websites with modern technologies. They
                                are fast and work offline. However, I can target
                                old browsers too.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 m-15px-tb">
                    <div className="feature-box-01 media">
                        <i className="icon theme-bg  icon-paintbrush" />
                        <div className="feature-content media-body">
                            <h5>Design</h5>
                            <p>
                                Although I am not an artist, I can implement
                                various designs. I can also create a simple one.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 m-15px-tb">
                    <div className="feature-box-01 media">
                        <i className="icon theme-bg icon-lock" />
                        <div className="feature-content media-body">
                            <h5>Security</h5>
                            <p>
                                These days, SSL certificate is a must. I can
                                install it for you. I also know how to protect
                                your databases, e. g. if you launched an
                                online store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Services;

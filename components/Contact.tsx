import {type FunctionComponent} from "react";

const Contact: FunctionComponent = () => {
    return (
        <section
            id="contactus"
            className="pp-section pp-scrollable section dark-bg"
        >
            <div className="container">
                <div className="title">
                    <h3>Get in touch.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-xl-4 m-15px-tb">
                        <div className="contact-info">
                            <h4>What’s your story? Get in touch</h4>
                            <p>
                                Always available for freelancing if the right
                                project comes along, Feel free to contact me.
                            </p>
                            <ul>
                                <li className="media">
                                    <i className="fas fa-map" />
                                    <span className="media-body">
                                        Ostrava, Moravian-Silesian Region, Czech
                                        Republic
                                    </span>
                                </li>
                                <li className="media">
                                    <i className="fas fa-envelope" />
                                    <span className="media-body">
                                        tomas.wrobel@email.cz
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-xl-8 m-15px-tb">
                        <div className="contact-form">
                            <h4>Say Something</h4>
                            <form
                                id="contact-form"
                                action="https://api.web3forms.com/submit"
                                method="POST"
                            >
                                <input
                                    type="hidden"
                                    name="access_key"
                                    value="2da01f10-3b5a-4781-8a5c-30bed0d194b8"
                                />
                                <input
                                    type="hidden"
                                    name="redirect"
                                    value="https://web3forms.com/success"
                                />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                id="name"
                                                placeholder="Name *"
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                id="email"
                                                placeholder="Email *"
                                                className="form-control"
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                name="subject"
                                                id="subject"
                                                placeholder="Subject *"
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Your message *"
                                                rows={5}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <input
                                                className="px-btn px-btn-theme"
                                                type="submit"
                                                value="Send message"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

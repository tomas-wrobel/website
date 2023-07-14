export default async function CertificatePage({
    params,
}: {
    params: {id: string};
}) {
    const {default: json} = await import(
        `../../../public/certificates/${params.id}/data.json`
    );

    return (
        <div className="single-certificates">
            <div className="container">
                <div className="blog-feature-img">
                    <img
                        src={`/certificates/${params.id}/img.png`}
                        title=""
                        alt=""
                    />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <article className="article">
                            <div className="article-title">
                                <h2>{json.name}</h2>
                                <div className="media">
                                    <div className="avatar">
                                        <img
                                            src="/img/me.png"
                                            title=""
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body">
                                        <label>Tomáš Wróbel</label>
                                        <span>
                                            {new Date(
                                                json.date
                                            ).toLocaleDateString("en")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="article-content">
                                <p>This is a certificate by {json.issued_by}</p>
                                <a
                                    href={`/certificates/${params.id}/doc.pdf`}
                                    className="px-btn px-btn-theme"
                                    download={params.id + ".pdf"}
                                >
                                    Download PDF
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

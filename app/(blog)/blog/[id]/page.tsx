import "highlight.js/scss/monokai-sublime.scss";

export async function generateStaticParams() {
    const fs = await import("fs/promises");
    return fs.readdir("../../../../blog");
}

export default async function BlogPage({params}: {params: {id: string}}) {
    const {default: Component, ...json} = await import(
        `../../../../blog/${params.id}`
    );

    return (
        <div className="single-blog">
            <div className="container">
                <div className="blog-feature-img">
                    <img src={json.img} title="" alt="" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <article className="article">
                            <div className="article-title">
                                <h2>{json.title}</h2>
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
                                <Component />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

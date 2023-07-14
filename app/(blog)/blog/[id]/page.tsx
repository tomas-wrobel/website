import "highlight.js/scss/monokai-sublime.scss";
import WithHighlight from "./with-highlight";

export default async function BlogPage({params}: {params: {id: string}}) {
    const {default: Component, ...json} = await import(
        /*webpackIgnore: true*/
        `../../../../blog/${params.id}`
    );

    return (
        <div className="single-certificates">
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
                                <WithHighlight />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

import "highlight.js/scss/monokai-sublime.scss";
import Link from "next/link";
import Page from "../../components/Page";

export interface Props {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    const {readdir} = await import("fs/promises");
    const array = await readdir("app/blog/posts");
    return array.map(id => ({ id }));
}

export async function generateMetadata({params}: Props) {
    const json = await import(`../posts/${params.id}`);

    return {
        title: `Tomáš Wróbel | ${json.title}`,
        description: json.description,
    };
}

export default async function BlogPage({params}: Props) {
    const post = await import(`../posts/${params.id}`);

    return (
        <>
            <Link className="demo-back-link" href="/">
                <i className="fas fa-arrow-left" />
            </Link>
            <Page current="blog">
                <div className="single-blog">
                    <div className="container">
                        <div className="blog-feature-img">
                            <img src={post.img} title="" alt="" />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <article className="article">
                                    <div className="article-title">
                                        <h2>{post.title}</h2>
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
                                                        post.date
                                                    ).toLocaleDateString("cs")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="article-content">
                                        <post.default />
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        </>
    );
}

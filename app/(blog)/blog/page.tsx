import {readdir} from "fs/promises";
import Blog from "../paginated";

export default async function BlogPage() {
    const data: Blog.Data[] = [];

    for (const id of await readdir("blog")) {
        const json = await import(
            /*webpackIgnore: true*/ `../../../blog/${id}`
        );
        data.push({
            id,
            author: "Tomáš Wróbel",
            date: json.date,
            img: `/blog/${json.img}`,
            name: json.title,
            url: `/blog/${id}/`,
        });
    }

    return <Blog data={data} heading="Blog" />;
}

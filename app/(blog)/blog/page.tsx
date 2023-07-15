import {readdir} from "fs/promises";
import Blog from "../paginated";

export default async function BlogPage() {
    const data: Blog.Data[] = [];

    for (const id of await readdir("blog")) {
        const json = await import(`../../../blog/${id}`);
        data.push({
            id,
            author: "Tomáš Wróbel",
            date: json.date,
            img: `/blog/${json.img}`,
            name: json.title,
            url: `/blog/${id}/`,
        });
    }

    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return <Blog data={data} heading="Blog" />;
}

import {readdir} from "fs/promises";
import type Blog from "../paginated";

export default async function data() {
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

	return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

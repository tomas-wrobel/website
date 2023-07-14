import {readdir} from "fs/promises";
import Blog from "../paginated";

export default async function CertificatesPage() {
    const data: Blog.Data[] = [];

    for (const id of await readdir("public/certificates")) {
        const json = await import(
            /*webpackIgnore: true*/
            `../../../public/certificates/${id}/data.json`
        );
        data.push({
            id,
            author: json.issued_by,
            date: json.date,
            img: `/certificates/${id}/img.png`,
            name: json.name,
            url: `/certificates/${id}/`,
        });
    }

    return <Blog data={data} heading="My certificates" />;
}

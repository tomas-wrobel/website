import Blog from "../paginated";
import data from "./data.json";

export default async function CertificatesPage() {
    const blog = data.map<Blog.Data>(s => ({
        ...s,
        img: `/certificates/${s.id}/img.png`,
        url: `/certificates/${s.id}/doc.pdf`,
    }));

    return <Blog data={blog} heading="My certificates" />;
}

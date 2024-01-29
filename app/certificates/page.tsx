import type {Metadata} from "next";
import Blog from "../paginated";
import data from "./data.json";
import Page from "../../components/Page";

export const metadata: Metadata = {
    title: "Tomáš Wróbel | Certificates",
    description: "Certificates I have earned - Sololearn, Programming Hub, and more.",
};

export default async function CertificatesPage() {
    const blog = data.map<Blog.Data>(s => ({
        ...s,
        img: `/certificates/${s.id}/img.png`,
        url: `/certificates/${s.id}/doc.pdf`,
    }));

    return (
        <Page>
            <Blog data={blog} heading="My certificates" />
        </Page>
    )
}

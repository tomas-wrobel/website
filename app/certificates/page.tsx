import type {Metadata} from "next";
import Blog from "../paginated";
import data from "./data.json";
import Page from "../components/Page";

export const metadata: Metadata = {
    title: "Tomáš Wróbel | Certifikáty",
    description: "Osvědčení a certifikáty, které jsem získal. Mezi certifikační společnosti patří například Programming Hub nebo SoloLearn.",
};

export default async function CertificatesPage() {
    const blog = data.map<Blog.Data>(s => ({
        ...s,
        img: `/certificates/${s.id}/img.png`,
        url: `/certificates/${s.id}/doc.pdf`,
    }));

    return (
        <Page>
            <Blog data={blog} heading="Moje certifikáty" />
        </Page>
    )
}

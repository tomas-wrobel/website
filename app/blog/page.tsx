import type {Metadata} from "next";
import Blog from "../paginated";
import data from "./data";
import Page from "../../components/Page";

export const metadata: Metadata = {
    title: "Tomáš Wróbel | Blog",
    description: "My blog posts.",
};

export default async function BlogPage() {
    return (
        <Page current="blog">
            <Blog data={await data()} heading="Blog" />
        </Page>
    );
}

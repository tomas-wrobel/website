import type {Metadata} from "next";
import Blog from "../paginated";
import data from "./data";

export const metadata: Metadata = {
    title: "Tomáš Wróbel | Blog",
    description: "My blog posts.",
};

export default async function BlogPage() {
    return <Blog data={await data()} heading="Blog" />;
}

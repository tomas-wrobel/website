import Blog from "../paginated";
import data from "./data";

export default async function BlogPage() {
    return <Blog data={await data()} heading="Blog" />;
}

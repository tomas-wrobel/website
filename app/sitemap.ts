import {MetadataRoute} from "next";
import data from "./blog/data";

type Sitemaps = Promise<MetadataRoute.Sitemap>;
type Sitemap = MetadataRoute.Sitemap[number];

export default async function sitemap(): Sitemaps {
	return [
		{
			lastModified: "2024-06-01",
			url: "https://tomaswrobel.dev",
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			lastModified: "2024-06-01",
			url: "https://tomaswrobel.dev/certificates",
			changeFrequency: "yearly",
			priority: 0.8,
		},
		{
			lastModified: "2024-06-01",
			url: "https://tomaswrobel.dev/blog",
			changeFrequency: "yearly",
			priority: 0.8,
		},
		...(await data()).map<Sitemap>(
            post => ({
                lastModified: post.date,
                url: `https://tomaswrobel.dev/blog/${post.id}`,
                changeFrequency: "never",
                priority: 0.5,
            })
        ),
	];
}

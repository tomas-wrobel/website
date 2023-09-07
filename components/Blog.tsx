import Link from "next/link";
import data from "../app/(blog)/blog/data";

export default async function Blog() {
	return (
		<section id="blog" data-nav-tooltip="Blog" className="pp-section pp-scrollable section">
			<div className="container">
				<div className="title">
					<h3>Latest Blog.</h3>
				</div>
				<div className="row">
					{(await data()).slice(0, 4).map((blog) => (
						<div className="col-md-6 m-15px-tb" key={blog.id}>
							<div className="blog-grid">
							<div className="blog-img">
								<Link href={blog.url}>
									<img src={blog.img} title="" alt="" />
								</Link>
							</div>
							<div className="blog-info">
								<div className="meta">{new Date(blog.date).toLocaleDateString("en")}</div>
								<h6>
									<Link href={blog.url}>
										{blog.name}
									</Link>
								</h6>
							</div>
						</div>
						</div>
					))}
					<div className="col-12 read-more-blog text-center">
						<Link href="/blog" className="px-btn px-btn-theme">
							More Blogs
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

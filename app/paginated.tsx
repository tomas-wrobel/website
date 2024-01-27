"use client";
import Link from "next/link";
import {type FunctionComponent, useState, useMemo} from "react";
import clsx from "clsx";

const Blog: FunctionComponent<Blog.Props> = ({
    data,
    sort = 4,
    heading
}) => {
    const [active, setActive] = useState(1);
    const state = useMemo(() => {
        const arr = new Array(Math.ceil(data.length / sort))
            .fill(0)
            .map((_, idx) => idx + 1);
        return arr;
    }, [sort, data.length]);

    return (
        <div className="blog-listing">
            <div className="container">
                <div className="title text-center">
                    <h3>{heading}</h3>
                </div>
                <div className="row">
                    {data.slice((active - 1) * sort, active * sort).map(data => (
                        <div
                            className="col-md-6 m-15px-tb blog-list-item"
                            key={data.id}
                        >
                            <div className="blog-grid">
                                <div className="blog-img">
                                    <Link href={data.url}>
                                        <img
                                            src={data.img}
                                            title=""
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="blog-info">
                                    <div className="meta">
                                        {new Date(data.date).toLocaleDateString(
                                            "en"
                                        )}{" "}
                                        | {data.author}
                                    </div>
                                    <h6>
                                        <Link href={data.url}>
                                            {data.name}
                                        </Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-12 blog-pagination">
                        <ul className="pagination justify-content-center">
                            <li
                                className={clsx("page-item", {
                                    disabled: active === 1,
                                })}
                            >
                                <a
                                    className="page-link"
                                    href="#"
                                    tabIndex={-1}
                                    onClick={e => {
                                        e.preventDefault();
                                        setActive(
                                            active === 1 ? 1 : active - 1
                                        );
                                    }}
                                >
                                    <i className="fas fa-chevron-left" />
                                </a>
                            </li>
                            {state.map(state => (
                                <li
                                    key={state}
                                    className={clsx("page-item", {
                                        active: active === state,
                                    })}
                                >
                                    <a
                                        className="page-link"
                                        href="#"
                                        onClick={e => {
                                            e.preventDefault();
                                            setActive(state);
                                        }}
                                    >
                                        {state}{" "}
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                            ))}
                            <li
                                className={clsx("page-item", {
                                    disabled: active === state.length,
                                })}
                            >
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={e => {
                                        e.preventDefault();
                                        if (active !== state.length) {
                                            setActive(active + 1);
                                        }
                                    }}
                                >
                                    <i className="fas fa-chevron-right" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

declare namespace Blog {
    interface Data {
        id: string;
        img: string;
        name: string;
        author: string;
        date: string;
        url: string;
    }
    interface Props {
        data: Data[];
        sort?: number;
        heading: string;
    }
}

export default Blog;

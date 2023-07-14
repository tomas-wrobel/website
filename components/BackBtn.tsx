"use client";
import {useRouter} from "next/navigation";
import type {FunctionComponent} from "react";

const BackBtn: FunctionComponent = () => {
    const router = useRouter();
    return (
        <a className="demo-back-link" onClick={() => router.back()} href="#">
            <i className="fas fa-arrow-left" />
        </a>
    );
};

export default BackBtn;

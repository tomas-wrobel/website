import type {PropsWithChildren} from "react";
import {Rubik} from "next/font/google";

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "bootstrap/scss/bootstrap.scss";
import "et-line/style.css";
import "./style.scss";

const rubik = Rubik({
    display: "swap",
    fallback: ["monospace"],
    subsets: ["latin-ext"],
});

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="cs">
            <body className={rubik.className}>
                {children}
            </body>
        </html>
    );
}

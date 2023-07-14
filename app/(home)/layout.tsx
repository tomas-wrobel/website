import type {PropsWithChildren} from "react";
import Header from "../../components/Header";
import DayNight from "../../components/DayNight";

export default function Layout({children}: PropsWithChildren) {
    return (
        <>
            <Header />
            <main className="main-left">
                {children}
            </main>
            <DayNight />
        </>
    )
}
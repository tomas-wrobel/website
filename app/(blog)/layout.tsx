import type {PropsWithChildren} from "react";
import Header from "../../components/Header";
import DayNight from "../../components/DayNight";
import BackBtn from "../../components/BackBtn";

export default function Layout({children}: PropsWithChildren) {
    return (
        <>
            <Header certificates />
            <main className="main-left">{children}</main>
            <DayNight />
            <BackBtn />
        </>
    );
}

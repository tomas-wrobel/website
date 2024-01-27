import type {PropsWithChildren, FunctionComponent} from "react";
import Header from "./Header";
import DayNight from "./DayNight";

const Page: FunctionComponent<PropsWithChildren<Header.Props>> = ({children, current}) => (
    <>
        <Header current={current} />
        <main className="main-left">
            {children}
        </main>
        <DayNight />
    </>
);

export default Page;
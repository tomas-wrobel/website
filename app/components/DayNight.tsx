"use client";
import type {FunctionComponent} from "react";

const DayNight: FunctionComponent = () => {
    const changeMood = () => {
        const {dataset} = document.documentElement;

        if (dataset.theme === "dark") {
            dataset.theme = "light";
        } else if (dataset.theme === "light") {
            dataset.theme = "dark";
        } else {
            const match = window.matchMedia("(prefers-color-scheme: dark)");
            dataset.theme = match.matches ? "light" : "dark";
        }
    };

    return (
        <label className="color_switch" onClick={changeMood}>
            <i className="fas fa-moon" />
        </label>
    );
};

export default DayNight;

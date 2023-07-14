"use client";
import type {FunctionComponent} from "react";

const DayNight: FunctionComponent = () => {
    const changeMood = () => {
        document.body.classList.toggle("theme-light");
    };

    return (
        <label className="color_switch" onClick={changeMood}>
            <i className="fas fa-moon" />
        </label>
    );
};

export default DayNight;

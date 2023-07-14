"use client";
import hljs from "highlight.js";
import {useEffect} from "react";

export default function WithHighlight() {
    useEffect(() => hljs.highlightAll(), []);
    return null;
}
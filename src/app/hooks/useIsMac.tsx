
"use client";
import { useEffect, useState } from "react";

export function useIsMac() {
    const [isMac, setIsMac] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMac(window.navigator.userAgent.indexOf("Mac") > -1);
        }
    }, []);

    return isMac;
}
import { useEffect, useState } from "react";

const getWindowWidth = () => window.innerWidth;

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        if (windowWidth === null) {
            setWindowWidth(getWindowWidth());
        }

        function handleWindowResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [windowWidth]);

    return windowWidth;
};
import localFont from "next/font/local";

export const geomanist = localFont({
    src: [
        {
            path: "./Geomanist-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Geomanist-Medium.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Geomanist-Bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--geomanist" as const,
});

export const monolisa = localFont({
    src: [
        {
            path: "./Monolisa-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Monolisa-Medium.woff",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--monolisa-mono" as const,
});

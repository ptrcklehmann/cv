import "./globals.css";

import clsx from "clsx";
import { Metadata } from "next";

import { ClientAnalytics } from "@/components/client-analytics";
import { geomanist, monolisa } from "@/fonts";
import { baseSiteUrl } from "@/lib/config";

export const metadata: Metadata = {
    metadataBase: baseSiteUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={clsx(geomanist.variable, monolisa.variable)}>
            <body>{children}</body>
            <ClientAnalytics />
        </html>
    );
}

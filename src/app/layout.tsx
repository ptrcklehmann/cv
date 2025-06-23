import './globals.css';

import { Metadata } from 'next';
import localFont from 'next/font/local';

import { ClientAnalytics } from '@/components/client-analytics';
import { baseSiteUrl } from '@/lib/config';

const geomanist = localFont({
    src: [
        {
            path: '../fonts/Geomanist-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Geomanist-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Geomanist-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--geomanist' as const,
});

const operatorMono = localFont({
    src: [
        {
            path: '../fonts/OperatorMono-Light.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/OperatorMono-Medium.woff',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--operator-mono' as const,
});

export const metadata: Metadata = {
    metadataBase: baseSiteUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${geomanist.variable} ${operatorMono.variable}`}>
            <body>{children}</body>
            <ClientAnalytics />
        </html>
    );
}

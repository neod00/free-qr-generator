import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff',
};

export const metadata: Metadata = {
    title: 'Free Online QR Generator - 100% Free',
    description: 'Create URL, Wi-Fi, vCard, and more QR codes for free.',
    verification: {
        google: 'YOUR_VERIFICATION_CODE_HERE',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5907754718994620"
                    crossOrigin="anonymous"
                />
            </head>
            <body className={inter.className}>
                <LanguageProvider>
                    <div className="min-h-screen flex flex-col">
                        {children}
                    </div>
                </LanguageProvider>
            </body>
        </html>
    );
}

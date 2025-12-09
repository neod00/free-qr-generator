import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff',
};

export const metadata: Metadata = {
    title: '무료 온라인 QR생성기 - 12가지 QR코드 무료 생성',
    description: '무료 온라인 QR코드 생성기! 텍스트, URL, Wi-Fi, 연락처, 이메일, SMS, 소셜미디어, 명함, 위치, 계좌번호, 결제 QR코드를 무료로 생성하세요.',
    keywords: 'QR코드 생성기, 무료 QR생성기, 온라인 QR코드, 텍스트 QR코드, URL QR코드, Wi-Fi QR코드, 연락처 QR코드',
    authors: [{ name: '무료 온라인 QR생성기' }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        url: 'https://free-qr-generator.netlify.app/',
        title: '무료 온라인 QR생성기 - 12가지 QR코드 무료 생성',
        description: '무료 온라인 QR코드 생성기! 텍스트, URL, Wi-Fi, 연락처, 이메일, SMS, 소셜미디어, 명함, 위치, 계좌번호, 결제 QR코드를 무료로 생성하세요.',
        siteName: 'Free QR Generator',
        // images: [{ url: '/og-image.jpg' }], // Ensure image exists or comment out
    },
    twitter: {
        card: 'summary_large_image',
        title: '무료 온라인 QR생성기',
        description: '12가지 무료 QR코드 생성',
    },
    alternates: {
        canonical: 'https://free-qr-generator.netlify.app/',
    },
    other: {
        'google-site-verification': 'YOUR_VERIFICATION_CODE_HERE', // User should fill this
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5907754718994620"
                    crossOrigin="anonymous"
                />
            </head>
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col bg-gray-50">
                    {children}
                </div>
            </body>
        </html>
    );
}

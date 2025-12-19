'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
    const { t } = useLanguage();
    const content = t.pages.faq;

    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">{content.title}</h1>

                <div className="space-y-6">
                    {content.items.map((item: any, index: number) => (
                        <details key={index} className="group bg-white p-6 rounded-lg shadow-sm border border-gray-100" open={index === 0}>
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-gray-900">
                                <span>{item.q}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

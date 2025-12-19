'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
    const { t } = useLanguage();
    const content = t.pages.terms;

    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">{content.title}</h1>

                <div className="prose prose-slate max-w-none">
                    <p className="text-gray-600 mb-8">
                        {content.last_updated}
                    </p>

                    {content.sections.map((section: any, index: number) => (
                        <section className="mb-8" key={index}>
                            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                            {section.content && (
                                <p className="whitespace-pre-line mb-4">{section.content}</p>
                            )}
                            {section.list && (
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    {section.list.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

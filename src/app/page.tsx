'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QRGenerator from '@/components/QRGenerator';
import { CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <>
            <Header />
            <main className="flex-grow pt-24 pb-12 bg-gradient-to-b from-slate-50 to-white min-h-screen">

                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-16 text-center">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                        {t.hero.badge}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                        {t.hero.title_pre} <span className="text-gradient">{t.hero.title_highlight}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                        {t.hero.description}
                    </p>
                </section>

                {/* Core Generator Component */}
                <section className="container mx-auto px-4 mb-24 relative z-10">
                    <QRGenerator />
                </section>

                {/* Features / Content Section */}
                <section className="bg-slate-50 py-20 border-t border-slate-200">
                    <div className="container mx-auto px-4 max-w-5xl">

                        {/* Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{t.features.fast.title}</h3>
                                <p className="text-slate-600 whitespace-pre-line">{t.features.fast.desc}</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-violet-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{t.features.secure.title}</h3>
                                <p className="text-slate-600 whitespace-pre-line">{t.features.secure.desc}</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-green-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{t.features.free.title}</h3>
                                <p className="text-slate-600 whitespace-pre-line">{t.features.free.desc}</p>
                            </div>
                        </div>

                        {/* Rich Content Article */}
                        <article className="prose prose-slate prose-lg max-w-none bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h2 className="text-3xl font-bold text-center mb-10">{t.guide.title}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 not-prose">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        {t.guide.url.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {t.guide.url.desc}
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        {t.guide.wifi.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {t.guide.wifi.desc}
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                                        {t.guide.vcard.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {t.guide.vcard.desc}
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                                        {t.guide.social.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {t.guide.social.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 pt-10 border-t border-slate-100">
                                <h3 className="text-2xl font-bold mb-6">{t.faq.title}</h3>
                                <div className="space-y-4">
                                    <details className="group bg-slate-50 p-4 rounded-xl cursor-pointer">
                                        <summary className="font-medium text-slate-900 list-none flex justify-between items-center">
                                            <span>{t.faq.q1}</span>
                                            <span className="transition duration-300 group-open:rotate-180 text-slate-400">▼</span>
                                        </summary>
                                        <p className="mt-3 text-slate-600 text-sm">{t.faq.a1}</p>
                                    </details>
                                    <details className="group bg-slate-50 p-4 rounded-xl cursor-pointer">
                                        <summary className="font-medium text-slate-900 list-none flex justify-between items-center">
                                            <span>{t.faq.q2}</span>
                                            <span className="transition duration-300 group-open:rotate-180 text-slate-400">▼</span>
                                        </summary>
                                        <p className="mt-3 text-slate-600 text-sm">{t.faq.a2}</p>
                                    </details>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

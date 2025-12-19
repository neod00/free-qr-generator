'use client';
import Link from 'next/link';
import { QrCode, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const { t, language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'ko' ? 'en' : 'ko');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="container mx-auto px-4 h-16 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="bg-gradient-to-br from-blue-500 to-violet-600 p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                        <QrCode className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                            {language === 'ko' ? 'FREE QR' : 'FREE QR'}
                        </span>
                    </div>
                </Link>

                <nav className="flex items-center space-x-4 md:space-x-6 text-sm font-medium text-slate-600">
                    <Link href="/faq" className="hover:text-blue-600 transition-colors">{t.nav.faq}</Link>
                    <Link href="/privacy" className="hover:text-blue-600 transition-colors hidden sm:block">{t.nav.privacy}</Link>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-bold"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        {language.toUpperCase()}
                    </button>

                    <Link href="/" className="px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors text-xs font-bold tracking-wide hidden md:block">
                        {t.nav.cta}
                    </Link>
                </nav>
            </div>
        </header>
    );
}

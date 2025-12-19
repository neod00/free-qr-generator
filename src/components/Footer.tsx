'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-white mb-2">FREE QR Generator</h3>
                        <p className="text-sm text-slate-400">
                            &copy; {new Date().getFullYear()} {t.footer.rights}
                        </p>
                    </div>

                    <div className="flex space-x-6 text-sm">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
                        <Link href="/faq" className="hover:text-white transition-colors">{t.footer.faq}</Link>
                    </div>

                    <div className="text-center md:text-right text-sm">
                        <p className="text-slate-400">{t.footer.contact}</p>
                        <a href="mailto:openbrain.main@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            openbrain.main@gmail.com
                        </a>
                    </div>
                </div>

                {/* Footer Ad Area (Styled) */}
                <div className="mt-12 flex justify-center">
                    <div className="w-full max-w-[728px] h-[90px] bg-slate-800/50 rounded-lg flex items-center justify-center border border-slate-700/50">
                        <span className="text-slate-600 text-xs">ADVERTISEMENT (728x90)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

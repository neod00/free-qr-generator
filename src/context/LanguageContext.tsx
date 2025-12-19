'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { locales, Locale } from '../i18n/locales';

type LanguageContextType = {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: typeof locales['en'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Locale>('en'); // Default to English initially to avoid hydration mismatch, or use effect
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Auto-detect language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('ko')) {
            setLanguage('ko');
        } else {
            setLanguage('en');
        }
    }, []);

    const t = locales[language];

    // Avoid hydration mismatch by rendering children only after client-side language is determined
    // OR just render default (en) and switch (which causes flicker).
    // Better approach for SEO-critical site: 
    // Since we are Static Export, we can't easily do server-side language detection without Middleware/Edge.
    // We will simple render, and update.

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import {
    Type, Link as LinkIcon, Wifi, Contact, Mail, MessageSquare,
    Smartphone, CreditCard, MapPin, Landmark, DollarSign, Download,
    Calendar, Bitcoin, Phone, Share2, ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type QRType = 'text' | 'url' | 'wifi' | 'contact' | 'email' | 'sms' | 'whatsapp' | 'social' | 'event' | 'crypto' | 'location';

export default function QRGenerator() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<QRType>('url');
    const [inputValue, setInputValue] = useState('https://free-qr-generator.netlify.app/');
    const [size, setSize] = useState(300);
    const canvasRef = useRef<HTMLDivElement>(null);
    const [formValues, setFormValues] = useState<any>({});

    const menuItems = [
        { id: 'url', label: t.generator.tabs.url, icon: LinkIcon, color: 'text-blue-500' },
        { id: 'wifi', label: t.generator.tabs.wifi, icon: Wifi, color: 'text-indigo-500' },
        { id: 'contact', label: t.generator.tabs.contact, icon: Contact, color: 'text-violet-500' },
        { id: 'text', label: t.generator.tabs.text, icon: Type, color: 'text-gray-500' },
        { id: 'email', label: t.generator.tabs.email, icon: Mail, color: 'text-sky-500' },
        { id: 'sms', label: t.generator.tabs.sms, icon: MessageSquare, color: 'text-green-500' },
        { id: 'whatsapp', label: t.generator.tabs.whatsapp, icon: Phone, color: 'text-emerald-500' },
        { id: 'social', label: t.generator.tabs.social, icon: Share2, color: 'text-pink-500' },
        { id: 'event', label: t.generator.tabs.event, icon: Calendar, color: 'text-orange-500' },
        { id: 'crypto', label: t.generator.tabs.crypto, icon: Bitcoin, color: 'text-yellow-500' },
        { id: 'location', label: t.generator.tabs.location, icon: MapPin, color: 'text-red-500' },
    ];

    useEffect(() => {
        setFormValues({});
        setInputValue('');
    }, [activeTab]);

    useEffect(() => {
        let newValue = '';
        const v = formValues;

        switch (activeTab) {
            case 'url':
            case 'text':
                newValue = v.text || '';
                break;
            case 'wifi':
                if (v.ssid) newValue = `WIFI:T:${v.encryption || 'WPA'};S:${v.ssid};P:${v.password || ''};H:${v.hidden ? 'true' : 'false'};;`;
                break;
            case 'contact':
                if (v.name || v.phone) newValue = `BEGIN:VCARD\nVERSION:3.0\nN:${v.lastname || ''};${v.firstname || ''};;;\nFN:${v.firstname || ''} ${v.lastname || ''}\nORG:${v.org || ''}\nTITLE:${v.title || ''}\nTEL:${v.phone || ''}\nEMAIL:${v.email || ''}\nURL:${v.website || ''}\nADR:;;${v.street || ''};${v.city || ''};${v.state || ''};${v.zip || ''};${v.country || ''}\nEND:VCARD`;
                break;
            case 'email':
                if (v.email) newValue = `mailto:${v.email}?subject=${encodeURIComponent(v.subject || '')}&body=${encodeURIComponent(v.body || '')}`;
                break;
            case 'sms':
                if (v.phone) newValue = `smsto:${v.phone}:${v.message || ''}`;
                break;
            case 'whatsapp':
                if (v.phone) newValue = `https://wa.me/${v.phone}?text=${encodeURIComponent(v.message || '')}`;
                break;
            case 'event':
                if (v.title) newValue = `BEGIN:VEVENT\nSUMMARY:${v.title}\nDTSTART:${(v.start || '').replace(/[-:]/g, '')}\nDTEND:${(v.end || '').replace(/[-:]/g, '')}\nLOCATION:${v.location || ''}\nDESCRIPTION:${v.description || ''}\nEND:VEVENT`;
                break;
            case 'crypto':
                if (v.address) newValue = `${v.type || 'bitcoin'}:${v.address}?amount=${v.amount || ''}&message=${encodeURIComponent(v.message || '')}`;
                break;
            case 'location':
                if (v.lat && v.lng) newValue = `https://www.google.com/maps?q=${v.lat},${v.lng}`;
                break;
            case 'social':
                if (v.username) {
                    const platformUrl = {
                        instagram: 'https://instagram.com/',
                        facebook: 'https://facebook.com/',
                        twitter: 'https://twitter.com/',
                        youtube: 'https://youtube.com/@',
                        tiktok: 'https://tiktok.com/@'
                    }[v.platform as string] || '';
                    newValue = platformUrl + v.username;
                }
                break;
            default:
                newValue = v.text || '';
        }
        setInputValue(newValue);
    }, [formValues, activeTab]);

    const handleInputChange = (field: string, value: any) => {
        setFormValues((prev: any) => ({ ...prev, [field]: value }));
    };

    const handleDownload = () => {
        const canvas = canvasRef.current?.querySelector('canvas');
        if (canvas) {
            const url = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = url;
            a.download = `qr-code-${activeTab}-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    // Component for reusable form fields
    const Input = ({ ...props }) => (
        <input className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 p-3 text-sm" {...props} />
    );
    const TextArea = ({ ...props }) => (
        <textarea className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 p-3 text-sm" {...props} />
    );
    const Select = ({ children, ...props }: any) => (
        <select className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 p-3 text-sm" {...props}>{children}</select>
    );
    const Label = ({ children }: any) => (
        <label className="block text-sm font-semibold text-gray-700 mb-1">{children}</label>
    );


    const renderForm = () => {
        switch (activeTab) {
            case 'url':
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div>
                            <Label>{t.generator.forms.url_label}</Label>
                            <Input type="url" placeholder="https://example.com" onChange={(e: any) => handleInputChange('text', e.target.value)} />
                        </div>
                    </div>
                );
            case 'text':
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div>
                            <Label>{t.generator.forms.text_label}</Label>
                            <TextArea rows={5} placeholder="..." onChange={(e: any) => handleInputChange('text', e.target.value)} />
                        </div>
                    </div>
                );
            case 'wifi':
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div><Label>{t.generator.forms.ssid}</Label><Input onChange={(e: any) => handleInputChange('ssid', e.target.value)} /></div>
                        <div><Label>{t.generator.forms.password}</Label><Input type="password" onChange={(e: any) => handleInputChange('password', e.target.value)} /></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>{t.generator.forms.security}</Label>
                                <Select onChange={(e: any) => handleInputChange('encryption', e.target.value)}>
                                    <option value="WPA">WPA/WPA2</option>
                                    <option value="WEP">WEP</option>
                                    <option value="nopass">None</option>
                                </Select>
                            </div>
                            <div className="flex items-center pt-6">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm w-4 h-4" onChange={(e) => handleInputChange('hidden', e.target.checked)} />
                                    <span className="ml-2 text-sm text-gray-700">{t.generator.forms.hidden}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="grid grid-cols-2 gap-4">
                            <div><Label>{t.generator.forms.lastname}</Label><Input onChange={(e: any) => handleInputChange('lastname', e.target.value)} /></div>
                            <div><Label>{t.generator.forms.firstname}</Label><Input onChange={(e: any) => handleInputChange('firstname', e.target.value)} /></div>
                        </div>
                        <div><Label>{t.generator.forms.phone}</Label><Input onChange={(e: any) => handleInputChange('phone', e.target.value)} /></div>
                        <div><Label>{t.generator.forms.email}</Label><Input onChange={(e: any) => handleInputChange('email', e.target.value)} /></div>
                        <div><Label>{t.generator.forms.org}</Label><Input onChange={(e: any) => handleInputChange('org', e.target.value)} /></div>
                    </div>
                );
            case 'email':
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div><Label>{t.generator.forms.email}</Label><Input placeholder="example@gmail.com" onChange={(e: any) => handleInputChange('email', e.target.value)} /></div>
                        <div><Label>{t.generator.forms.subject}</Label><Input onChange={(e: any) => handleInputChange('subject', e.target.value)} /></div>
                        <div><Label>{t.generator.forms.body}</Label><TextArea rows={4} onChange={(e: any) => handleInputChange('body', e.target.value)} /></div>
                    </div>
                );
            // Fallbacks for others with translated labels
            case 'sms': return <div className="space-y-4 animate-fadeIn"><div><Label>{t.generator.forms.phone}</Label><Input onChange={(e: any) => handleInputChange('phone', e.target.value)} /></div><div><Label>{t.generator.forms.message}</Label><TextArea rows={4} onChange={(e: any) => handleInputChange('message', e.target.value)} /></div></div>;
            case 'whatsapp': return <div className="space-y-4 animate-fadeIn"><div><Label>WhatsApp Number</Label><Input placeholder="821012345678" onChange={(e: any) => handleInputChange('phone', e.target.value)} /></div><div><Label>{t.generator.forms.message}</Label><TextArea rows={4} onChange={(e: any) => handleInputChange('message', e.target.value)} /></div></div>;
            case 'event': return <div className="space-y-4 animate-fadeIn"><div><Label>{t.generator.forms.subject}</Label><Input onChange={(e: any) => handleInputChange('title', e.target.value)} /></div><div className="grid grid-cols-2 gap-4"><div><Label>Start</Label><Input type="datetime-local" onChange={(e: any) => handleInputChange('start', e.target.value)} /></div><div><Label>End</Label><Input type="datetime-local" onChange={(e: any) => handleInputChange('end', e.target.value)} /></div></div><div><Label>Desc</Label><TextArea rows={3} onChange={(e: any) => handleInputChange('description', e.target.value)} /></div></div>;
            case 'crypto': return <div className="space-y-4 animate-fadeIn"><div className="grid grid-cols-2 gap-4"><div><Label>Type</Label><Select onChange={(e: any) => handleInputChange('type', e.target.value)}><option value="bitcoin">Bitcoin</option><option value="ethereum">Ethereum</option></Select></div><div><Label>{t.generator.forms.amount}</Label><Input type="number" onChange={(e: any) => handleInputChange('amount', e.target.value)} /></div></div><div><Label>{t.generator.forms.address}</Label><Input onChange={(e: any) => handleInputChange('address', e.target.value)} /></div></div>;
            case 'location': return <div className="space-y-4 animate-fadeIn"><div className="bg-blue-50 p-3 rounded text-sm text-blue-700 mb-2">Google Maps Coordinates</div><div className="grid grid-cols-2 gap-4"><div><Label>{t.generator.forms.lat}</Label><Input onChange={(e: any) => handleInputChange('lat', e.target.value)} /></div><div><Label>{t.generator.forms.lng}</Label><Input onChange={(e: any) => handleInputChange('lng', e.target.value)} /></div></div></div>;
            case 'social': return <div className="space-y-4 animate-fadeIn"><div><Label>{t.generator.forms.platform}</Label><Select onChange={(e: any) => handleInputChange('platform', e.target.value)}><option value="">Select...</option><option value="instagram">Instagram</option><option value="youtube">YouTube</option><option value="facebook">Facebook</option><option value="tiktok">TikTok</option><option value="twitter">X (Twitter)</option></Select></div><div><Label>{t.generator.forms.username}</Label><div className="flex"><span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 text-gray-500">@</span><input className="block w-full rounded-r-lg border-gray-200 bg-gray-50 p-3 focus:ring-2 focus:ring-blue-100" onChange={(e: any) => handleInputChange('username', e.target.value)} /></div></div></div>;
            default: return <div className="p-4 text-center text-gray-500">...</div>;
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col lg:flex-row min-h-[650px]">

                {/* Modern Sidebar / Tabs */}
                <div className="w-full lg:w-72 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 p-6 flex-shrink-0">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 px-2">Select Tool</h3>

                    <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-2 lg:space-x-0 lg:space-y-1 pb-2 lg:pb-0 scrollbar-hide">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id as QRType)}
                                className={`flex-shrink-0 flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${activeTab === item.id
                                        ? 'bg-white text-slate-900 shadow-md scale-100 ring-1 ring-black/5'
                                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 mr-3 ${activeTab === item.id ? item.color : 'text-slate-400'}`} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden lg:flex mt-auto pt-8 flex-col items-center justify-center">
                        <div className="w-full aspect-square bg-slate-100 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center">
                            <span className="text-xs text-slate-400 font-medium tracking-wide">AD SPACE</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col">
                    <div className="mb-10 flex items-baseline justify-between border-b border-slate-100 pb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                {menuItems.find(i => i.id === activeTab)?.label}
                                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{t.generator.title}</span>
                            </h2>
                            <p className="text-slate-500 mt-2 text-sm">{t.generator.desc}</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 h-full">
                        {/* Form Section */}
                        <div className="flex-1 min-h-[300px]">
                            {renderForm()}

                            <div className="mt-10 pt-8 border-t border-dashed border-slate-200">
                                <label className="flex justify-between text-sm font-semibold text-slate-700 mb-4">
                                    <span>{t.generator.size}</span>
                                    <span className="text-blue-600 font-mono">{size}px</span>
                                </label>
                                <input
                                    type="range"
                                    min="200"
                                    max="1000"
                                    step="100"
                                    value={size}
                                    onChange={(e) => setSize(Number(e.target.value))}
                                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700 transition-all"
                                />
                            </div>
                        </div>

                        {/* Preview Section - Sticky */}
                        <div className="flex-shrink-0 w-full lg:w-80 flex flex-col items-center">
                            <div className="sticky top-24 w-full">
                                <div className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 aspect-square flex items-center justify-center" ref={canvasRef}>
                                        {inputValue ? (
                                            <QRCodeCanvas
                                                value={inputValue}
                                                size={size > 240 ? 240 : size}
                                                level={"H"}
                                                includeMargin={true}
                                                className="w-full h-full"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-slate-300">
                                                <div className="w-16 h-16 mb-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                                    <Type className="w-8 h-8" />
                                                </div>
                                                <span className="text-sm font-medium">{t.generator.waiting}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3 relative z-10">
                                        <button
                                            onClick={handleDownload}
                                            disabled={!inputValue}
                                            className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-bold shadow-lg transition-all transform duration-200 ${inputValue
                                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-blue-500/25 hover:-translate-y-1 active:scale-95'
                                                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                                }`}
                                        >
                                            <Download className="w-5 h-5 mr-2" />
                                            {inputValue ? t.generator.download : t.generator.waiting}
                                        </button>
                                        <p className="text-center text-xs text-slate-400 font-medium">
                                            High Quality • Vector Ready • Permanent
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

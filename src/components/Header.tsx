import Link from 'next/link';
import { QrCode } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <QrCode className="w-8 h-8 text-blue-600" />
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">무료 온라인 QR생성기</h1>
                        <p className="text-xs text-gray-500 hidden sm:block">12가지 QR코드를 무료로 생성하세요</p>
                    </div>
                </div>

                {/* Header Ad Placeholder */}
                <div className="hidden md:block w-[728px] h-[90px] bg-gray-100 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-400 text-sm">광고 영역 (728x90)</span>
                </div>
            </div>
        </header>
    );
}

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} 무료 온라인 QR생성기. 모든 권리 보유.</p>
                        <p className="text-sm text-gray-400 mt-2">
                            문의사항: <a href="mailto:contact@free-qr-generator.com" className="hover:text-white transition">contact@free-qr-generator.com</a>
                        </p>
                    </div>

                    {/* Footer Ad Placeholder */}
                    <div className="w-full md:w-[728px] h-[90px] bg-gray-700 flex items-center justify-center border border-gray-600">
                        <span className="text-gray-400 text-sm">광고 영역 (728x90)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

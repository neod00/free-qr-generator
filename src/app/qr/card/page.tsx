import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 명함(vCard) QR코드 생성기 - 스마트 비즈니스 카드 스캔',
    description: '종이 명함의 한계를 극복하세요. 스캔 즉시 상대방 스마트폰에 나의 모든 프로필과 연락처가 저장되는 명함 전용 QR코드를 제작합니다.',
};

export default function CardQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        디지털 명함(vCard) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        당신의 비즈니스를 주머니 속에 담아두게 하세요.<br />
                        상대방이 폰에 내 정보를 직접 입력하는 수고를 단 1초의 스캔이 대신합니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="card" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>차세대 비즈니스 네트워킹: 스마트 QR 명함</h2>
                    <p>
                        종이 명함은 첫인상을 주지만, QR 명함은 '연속성'을 줍니다. 명함에 인쇄된 QR코드를 스캔하면 이름, 이메일, 전화번호는 물론
                        링크드인(LinkedIn) 주소나 포트폴리오 사이트까지 한 번에 상대방의 주소록에 동기화됩니다.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
}

import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 계좌번호(Bank) QR코드 생성기 - 착오 송금 방지 및 입금 안내',
    description: '은행명과 계좌번호를 QR코드로 만들어 입금 실수를 방지하세요. 중고 거래, 모임 회비 걷기, 소상공인 결제 안내에 필수적인 도구입니다.',
};

export default function BankQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        계좌번호(Bank) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        숫자를 일일이 복사해서 붙여넣을 필요가 없습니다.<br />
                        계좌 정보를 QR에 담아 오타 없는 안전한 송금을 유도하세요.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="bank" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>금융 거래의 편리함: 계좌 정보 공유 QR</h2>
                    <p>
                        "계좌번호 불러드릴게요" 라든지 종이에 적어주는 방식은 번거롭기도 하지만 실수할 확률이 높습니다. 
                        금융 정보가 담긴 QR코드는 텍스트 오타를 방지하여 자산 보호와 신속한 정산에 기여합니다.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
}

import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 결제(Payment) QR코드 생성기 - 페이팔 및 결제 링크 스캔',
    description: '페이팔(PayPal)이나 간편 결제 링크를 QR코드로 변환하여 신속하게 입금을 받으세요. 프리랜서와 오프라인 마켓 운영자를 위한 필수 결제 도구입니다.',
};

export default function PaymentQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        결제(Payment) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        더 스마트한 결제 경험을 제공하세요.<br />
                        스캔 한 번으로 결제 화면으로 바로 안내하여 정산 시간을 단축합니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="payment" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>비현금 결제의 미래: 결제 연동 QR코드</h2>
                    <p>
                        디지털 지갑과 모바일 뱅킹이 일반화되면서, 링크 하나로 결제를 완료하는 방식이 보편화되었습니다. 
                        결제 QR코드는 사용자가 결제 URL을 일일이 입력할 필요 없이 스캐너만으로 대금 지불 화면에 접속하게 합니다.
                    </p>

                    <h3>왜 결제 QR코드가 유용한가요?</h3>
                    <ol>
                        <li><strong>결제 이탈률 감소:</strong> 결제 과정이 복잡할수록 유효 고객은 이탈합니다. QR코드는 이 과정을 단축시켜 구매 전환율을 높입니다.</li>
                        <li><strong>실시간 정산 확인:</strong> 특정 결제 서비스와 연동된 QR을 사용하면 성공적으로 송금되었는지 즉시 확인할 수 있습니다.</li>
                    </ol>
                </article>
            </main>
            <Footer />
        </>
    );
}

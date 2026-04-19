import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 문지(SMS) QR코드 생성기 - 자동 메시지 전송 스캔',
    description: '전화번호와 메시지 내용을 QR코드 한 번의 스캔으로 자동 완성하세요. 이벤트 응모, 상담 신청, 무인 매장 문의에 가장 효과적입니다.',
};

export default function SmsQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        문자(SMS) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        스캔하면 받는 사람과 내용이 즉시 입력됩니다.<br />
                        고객이 전송 버튼만 누르면 되는 가장 빠른 커뮤니케이션 도구입니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="sms" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>SMS QR코드, 왜 마케팅팀에서 주목할까요?</h2>
                    <p>
                        문자 메시지는 이메일보다 확인율이 높고 직접적인 상담으로 이어지기 좋은 수단입니다. 
                        특히 고령층이나 스마트폰 조작에 서툰 사람들에게 "이 번호로 문자 하세요"라고 하는 것보다
                        QR을 보여주는 것이 훨씬 친절한 안내가 됩니다.
                    </p>

                    <h3>대표적인 활용 사례</h3>
                    <ul>
                        <li><strong>오프라인 매장 상담 요청:</strong> 무인 점포나 부동산 창문에 붙여두면 일일이 전화하지 않고도 문자로 문의를 받을 수 있습니다.</li>
                        <li><strong>이벤트 응모:</strong> "이벤트 응모"라는 내용을 미리 넣어두어 사용자가 전송 버튼만 누르면 응모가 완료되게 설계하세요.</li>
                        <li><strong>실시간 정보 구독 요구:</strong> 문자 기반의 알림 서비스를 구독하게 만드는 가장 쉬운 방법입니다.</li>
                    </ul>
                </article>
            </main>
            <Footer />
        </>
    );
}

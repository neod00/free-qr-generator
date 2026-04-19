import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 이메일(Email) QR코드 생성기 - 원클릭 문의 및 피드백',
    description: '스캔 한 번으로 이메일 주소, 제목, 본문이 자동 완성되는 QR코드를 만드세요. 고객 문의 접수와 피드백 수집력을 높이는 최고의 솔루션입니다.',
};

export default function EmailQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        이메일(Email) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        복잡한 이메일 주소를 손님에게 알려줄 필요가 없습니다.<br />
                        스캔 즉시 메일 앱이 열리고 받는 사람과 제목이 입력됩니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="email" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>이메일 QR코드가 비즈니스에 주는 놀라운 가치</h2>
                    <p>
                        종이 매뉴얼이나 제품 패키지 하단에 "문의 사항은 help@example.com으로 메일 주세요"라고 적어두는 방식은 이제 구식입니다. 
                        고객은 긴 이메일 주소를 타이핑하는 것을 매우 귀찮아하며, 이 과정에서 한두 글자만 틀려도 문의 자체를 포기해 버립니다.
                        이메일 QR코드는 이러한 <strong>불필요한 이탈(Friction)을 완벽하게 제거</strong>합니다.
                    </p>

                    <h3>추천 활용 시나리오</h3>
                    <ul>
                        <li><strong>A/S 및 제품 지원:</strong> 제품 보증서에 QR을 인쇄하여 고객이 문제가 생겼을 때 바로 지원 메일을 보낼 수 있게 하세요.</li>
                        <li><strong>설문조사 및 피드백:</strong> 호텔이나 식당 테이블에 비구하여 고객의 소중한 의견을 이메일로 수집하세요.</li>
                        <li><strong>RSVP 및 이벤트 참가 접수:</strong> 초대장에 넣은 QR코드 하나로 간편하게 참가 신청 메일을 받을 수 있습니다.</li>
                    </ul>

                    <h3>이메일 QR코드 생성 시 필수 팁</h3>
                    <ol>
                        <li><strong>제목(Subject) 미리 설정하기:</strong> 생성 단계에서 제목을 "제품 A 문의" 처럼 미리 채워두면, 사내 메일함에서 분류하기가 훨씬 수월해집니다.</li>
                        <li><strong>스캔 유도 문구(CTA):</strong> QR옆에 "이메일 문의하기"라는 직접적인 안내를 곁들이면 스캔율이 2배 이상 높아집니다.</li>
                    </ol>
                </article>
            </main>
            <Footer />
        </>
    );
}

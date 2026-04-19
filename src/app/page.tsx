import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QRGenerator from '@/components/QRGenerator';

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: '무료 온라인 QR생성기',
        alternateName: 'Free Online QR Generator',
        description: '무료 온라인 QR코드 생성기 - 텍스트, URL, Wi-Fi, 연락처, 이메일, SMS, 소셜미디어, 명함, 위치, 계좌번호, 결제 QR코드를 무료로 생성',
        url: 'https://free-qr-generator.netlify.app/',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'KRW',
        },
        featureList: [
            '텍스트 QR코드 생성', 'URL QR코드 생성', 'Wi-Fi QR코드 생성',
            '연락처 QR코드 생성', '이메일 QR코드 생성', 'SMS QR코드 생성',
            '소셜미디어 QR코드 생성', '앱스토어 QR코드 생성', '명함 QR코드 생성',
            '위치 QR코드 생성', '계좌번호 QR코드 생성', '결제 QR코드 생성'
        ],
        publisher: {
            '@type': 'Organization',
            name: '무료 온라인 QR생성기',
            url: 'https://free-qr-generator.netlify.app/'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        무료 온라인 QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        12가지 다양한 QR코드를 평생 무료로 생성하세요. 회원가입 없이 즉시 다운로드 가능합니다.
                        개인 및 비즈니스 용도로 자유롭게 사용하세요.
                    </p>
                </section>

                {/* Core Generator Component */}
                <section className="mb-16">
                    <QRGenerator />
                </section>

                {/* Rich SEO Content */}
                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>왜 '무료 온라인 QR생성기'인가요?</h2>
                    <p>
                        디지털 시대의 필수 도구인 QR코드를 가장 쉽고 빠르게 만들 수 있는 서비스입니다.
                        단순 텍스트부터 복잡한 Wi-Fi 연결 정보, 명함(vCard)까지 다양한 형식을 지원합니다.
                    </p>

                    <h3>주요 기능 소개</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                        <div className="p-4 border rounded hover:shadow-md transition">
                            <h4 className="font-bold text-blue-600">🔗 URL & 링크</h4>
                            <p className="text-sm text-gray-600">웹사이트, 유튜브 영상, 블로그 등으로 이동하는 QR코드를 만드세요.</p>
                        </div>
                        <div className="p-4 border rounded hover:shadow-md transition">
                            <h4 className="font-bold text-green-600">📶 Wi-Fi 자동 연결</h4>
                            <p className="text-sm text-gray-600">비밀번호 입력 번거로움 없이 스캔 한 번으로 와이파이에 접속하세요.</p>
                        </div>
                        <div className="p-4 border rounded hover:shadow-md transition">
                            <h4 className="font-bold text-purple-600">📇 디지털 명함</h4>
                            <p className="text-sm text-gray-600">이름, 전화번호, 이메일이 담긴 스마트한 전자 명함을 공유하세요.</p>
                        </div>
                        <div className="p-4 border rounded hover:shadow-md transition">
                            <h4 className="font-bold text-red-600">💳 계좌 및 결제</h4>
                            <p className="text-sm text-gray-600">계좌번호나 송금 링크를 QR코드로 만들어 간편하게 공유하세요.</p>
                        </div>
                    </div>

                    <h3 className="mt-8">자주 묻는 질문 (FAQ)</h3>
                    <details className="cursor-pointer group">
                        <summary className="font-medium text-gray-900">생성된 QR코드에 유효기간이 있나요?</summary>
                        <p className="mt-2 text-gray-600">아니요, 저희 서비스에서 생성된 QR코드는 영구적이며 유효기간이 없습니다.</p>
                    </details>
                    <details className="mt-4 cursor-pointer group">
                        <summary className="font-medium text-gray-900">상업적 용도로 사용해도 되나요?</summary>
                        <p className="mt-2 text-gray-600">네, 개인 및 기업 모두 제한 없이 상업적 용도로 무료 사용이 가능합니다.</p>
                    </details>
                </article>
            </main>

            <Footer />
        </>
    );
}

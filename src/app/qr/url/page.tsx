import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'URL 웹사이트 QR코드 생성기 - 무료 온라인 스캔 링크',
    description: '웹사이트, 유튜브 영상, 블로그 주소를 스캔 가능한 QR코드로 변환하세요. 누구나 영구적으로 무료 사용이 가능하며 추적 없이 안전합니다.',
};

export default function UrlQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        URL QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        웹사이트 주소를 간편하게 QR코드로 변환하세요. 전단지, 명함, 포스터 등에 삽입하여 방문자를 쉽게 늘릴 수 있습니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="url" />
                </section>

                {/* SEO & Educational Text Section (Bankrate Strategy) */}
                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>URL QR코드란 무엇이며 왜 필요한가요?</h2>
                    <p>
                        URL QR코드는 길고 복잡한 인터넷 주소(웹사이트 링크)를 사각형의 바코드 형태로 변환한 것입니다.
                        스마트폰 카메라로 스캔하기만 하면 즉시 해당 웹사이트로 접속되기 때문에, 사용자가 브라우저에
                        직접 주소를 입력하는 수고를 덜어줍니다.
                    </p>

                    <h3>URL QR코드의 강력한 마케팅 효과</h3>
                    <ul>
                        <li><strong>오프라인에서 온라인으로의 연결:</strong> 식당 메뉴판, 매장 포스터, 옥외 광고판에 부착하여 오프라인 고객을 온라인 이벤트 페이지로 즉시 유도할 수 있습니다.</li>
                        <li><strong>정확한 정보 전달:</strong> 복잡한 유튜브 URL이나 제품 구매 링크를 오타 없이 정확하게 전달할 수 있는 유일한 수단입니다.</li>
                        <li><strong>고객 경험 개선:</strong> "검색창에 OO을 검색하세요" 보다 "카메라로 스캔하세요"가 전환율(Conversion Rate)을 300% 이상 높인다는 연구 결과가 있습니다.</li>
                    </ul>

                    <h3>URL QR코드를 효과적으로 사용하는 3가지 꿀팁</h3>
                    <ol>
                        <li><strong>명확한 행동 유도(CTA) 추가하기:</strong> QR코드 주변에 "스캔하여 쿠폰 받기", "메뉴판 보기" 와 같이 스캔 시 얻을 수 있는 이점을 글자로 꼭 적어주세요.</li>
                        <li><strong>적절한 크기 유지하기:</strong> 명함에 인쇄할 때는 최소 2cm x 2cm 이상이어야 스마트폰 카메라가 쉽게 인식할 수 있습니다.</li>
                        <li><strong>짧은 주소 사용하기 (선택):</strong> URL 자체의 길이가 매우 길어지면 QR코드의 패턴도 매우 복잡해져 인식률이 떨어질 수 있습니다. 가급적 핵심 도메인만 넣는 것이 좋으나, 본 생성기는 고해상도 처리를 하므로 길이에 상관없이 작동합니다.</li>
                    </ol>

                    <h3 className="mt-8">자주 묻는 질문 (URL QR코드 편)</h3>
                    <details className="mb-4 p-4 border rounded relative overflow-hidden group">
                        <summary className="font-medium cursor-pointer text-gray-900">
                            한 번 만든 URL QR코드의 도착지 주소를 나중에 수정할 수 있나요?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            본 생성기에서 만들어지는 QR코드는 '정적(Static) QR코드'로, 생성 시 입력한 텍스트 데이터가 이미지 안에 영구적으로 박제됩니다. 따라서 이미지가 생성된 후에는 도착 주소를 수정할 수 없으니, 인쇄 전에 반드시 스캔 테스트를 해보시기 바랍니다.
                        </p>
                    </details>
                    
                    <details className="p-4 border rounded relative overflow-hidden group">
                        <summary className="font-medium cursor-pointer text-gray-900">
                            유튜브 영상이나 인스타그램 링크도 변환 되나요?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            네, 인터넷 브라우저 주소창에 들어가는 모든 형태의 'https://' 시작 주소는 전부 QR코드로 완벽하게 변환 및 스캔이 가능합니다.
                        </p>
                    </details>
                </article>
            </main>
            <Footer />
        </>
    );
}

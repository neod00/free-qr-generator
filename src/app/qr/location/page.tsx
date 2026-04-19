import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 지도 위치(Location) QR코드 생성기 - 구글 맵 장소 공유 스캔',
    description: '특정 장소의 좌표나 주소를 QR코드로 변환하여 오프라인 매장 방문을 유도하세요. 결혼식장, 카페, 행사장을 안내하는 가장 쉬운 방법입니다.',
};

export default function LocationQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        위치(Location) 및 지도 QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        정확한 장소를 고객에게 안내하세요.<br />
                        스캔 즉시 스마트폰의 지도 앱이 열리고 장소 위치가 표시됩니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="location" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>장소 안내, 이제는 QR코드로 하세요</h2>
                    <p>
                        결혼식 청첩장이나 행사 포스트에 주소만 적어두는 것이 아니라, 지도 QR코드를 함께 넣으면 손님들이 훨씬 편하게 길을 찾을 수 있습니다. 
                        구글 지도의 위도/경도 정보를 담은 QR코드는 전 세계 어디서나 호환됩니다.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
}

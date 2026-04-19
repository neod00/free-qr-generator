import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 앱스토어 QR코드 생성기 - iOS/Android 앱 다운로드 자동 연결',
    description: '구글 플레이스토어와 애플 앱스토어 주소를 변환하여 앱 설치 수를 높이세요. 단일 QR코드로 모든 플랫폼 안내가 가능해집니다.',
};

export default function AppQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        앱스토어(App Store) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        모바일 앱 다운로드 수를 폭발적으로 늘리세요.<br />
                        스토어에서 앱 이름을 검색하는 번거로운 과정을 스캔 한 번으로 대체합니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="app" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>앱 마케팅의 필수품: 다운로드 QR코드</h2>
                    <p>
                        전단지나 포스터를 보고 앱을 깔고 싶어도 이름을 잊어버리거나 검색 결과에서 다른 앱을 설치하는 경우가 많습니다. 
                        앱 전용 QR코드는 정확한 스토어 상세 페이지로 유저를 안내하여 **설치 전환율(CVR)**을 극대화합니다.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
}

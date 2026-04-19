import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 소셜미디어 QR코드 생성기 - 팔로워 증대 및 프로필 홍보',
    description: '인스타그램, 유튜브, 페이스북, 틱톡 프로필로 즉시 연결되는 QR코드를 만드세요. 오프라인 광고물에서 온라인 팔로워를 늘리는 가장 확실한 방법입니다.',
};

export default function SocialQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        소셜미디어 QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        당신의 디지털 영향력을 오프라인으로 확장하세요.<br />
                        아이디를 검색할 필요 없이 스캔 한 번으로 팔로우 페이지로 이동합니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="social" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>소셜미디어 QR코드가 팔로워를 늘리는 원리</h2>
                    <p>
                        "인스타그램에서 @username을 검색해 주세요"라는 문법은 이제 비효율적입니다. 동명이인이 있거나 아이디가 복잡할 경우 유저는 검색 과정에서 이탈합니다.
                        소셜미디어 전용 QR코드는 유저를 <strong>앱 내 프로필 화면으로 직접 딥링크(Deep Link)</strong> 시킵니다.
                    </p>

                    <h3>왜 멀티 플랫폼 홍보에 유리할까요?</h3>
                    <p>
                        링크트리와 같은 '바이오 링크' 주소를 QR로 만들면 하나의 코드로 인스타그램, 블로그, 유튜브를 동시에 노출할 수 있습니다. 
                        특히 명함이나 굿즈 패키지에 넣었을 때 디자인적으로도 훨씬 깔끔하고 현대적인 느낌을 줍니다.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
}

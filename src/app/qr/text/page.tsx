import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 텍스트(Text) QR코드 생성기 - 간단한 메모 및 정보 공유 스캔',
    description: '긴 문장이나 메모, 공지사항을 스캔 가능한 QR코드로 변환하세요. 인터넷 연결 없이도 정보를 전달할 수 있는 가장 원초적이고 강력한 도구입니다.',
};

export default function TextQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        테스트(Text) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        정보를 시각적으로 기록하고 전달하세요.<br />
                        복잡한 영문이나 긴 메모를 QR코드 하나로 간편하게 공유할 수 있습니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="text" />
                </section>

                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>텍스트 QR코드의 무궁무진한 활용법</h2>
                    <p>
                        텍스트 QR코드는 인터넷 링크가 없어도 작동합니다. 오직 데이터 그 자체를 사각형의 패턴 안에 저장하기 때문에
                        오지나 통신이 원활하지 않은 곳에서도 정보를 전달하는 훌륭한 수단이 됩니다.
                    </p>

                    <h3>추천 활용 상황</h3>
                    <ul>
                        <li><strong>간단한 인사이트 공유:</strong> 책이나 교재의 특정 문구를 QR로 만들어 학생들에게 공유해 보세요.</li>
                        <li><strong>물품 관리 번호:</strong> 창고의 물품에 시리얼 번호나 텍스트 설명을 QR로 붙여 두면 관리가 편리해집니다.</li>
                        <li><strong>시크릿 메시지 이벤트:</strong> 연인이나 친구에게 스캔해야만 읽을 수 있는 특별한 메시지를 선물해 보세요.</li>
                    </ul>
                </article>
            </main>
            <Footer />
        </>
    );
}

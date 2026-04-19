import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'vCard 명함 QR코드 생성기 - 스마트 디지털 명함 무료 만들기',
    description: '이름, 전화번호, 이메일, 직장 정보를 스캔 한 번으로 상대방의 스마트폰 연락처에 저장하는 고품질 명함 QR코드를 제작하세요.',
};

export default function ContactQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        명함(vCard) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        더 이상 번호를 직접 찍어 줄 필요가 없습니다. <br />
                        나의 모든 연락처 정보를 하나의 QR코드에 담아 스마트하게 공유하세요.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="contact" />
                </section>

                {/* SEO & Educational Text Section */}
                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>vCard 명함 QR코드란 무엇인가요?</h2>
                    <p>
                        vCard(Virtual Contact File)는 전자 명함의 국제 표준 규격입니다. vCard QR코드는 사용자의 이름, 조직, 직책, 
                        전화번호, 이메일, 웹사이트 주소 등의 광범위한 연락처 정보를 하나의 바코드 안에 암호화하여 저장한 것입니다.
                        스마트폰 카메라로 이 코드를 스캔하면, 화면에 즉시 <strong>'연락처 추가'</strong> 버튼이 나타나 단 1초 만에 
                        주소록에 모든 정보가 저장됩니다.
                    </p>

                    <h3>왜 스마트 디지털 명함을 써야 할까요?</h3>
                    <ol>
                        <li><strong>명함 관리의 혁신:</strong> 종이 명함은 지갑에 들어가면 잊혀지거나 버려지기 십상입니다. 반면 스마트폰 주소록에 바로 저장되면 언제든지 검색하여 연락을 취할 수 있습니다.</li>
                        <li><strong>정보 공유의 한계 극복:</strong> 작은 종이 명함에는 다 담을 수 없는 긴 웹사이트 주소, 소셜 미디어 프로필, 세부적인 직장 주소를 모두 포함할 수 있습니다.</li>
                        <li><strong>오타(Human Error) 완벽 차단:</strong> 상대방이 내 이름을 잘못 알아듣거나, 이메일 스펠링을 틀리게 타이핑하는 실수를 원천적으로 방어합니다.</li>
                    </ol>

                    <h3>가장 효과적인 활용처</h3>
                    <ul>
                        <li><strong>종이 명함 뒷면:</strong> 전면에는 필수 정보만 심플하게 디자인하고, 뒷면에 QR코드를 크게 인쇄하세요.</li>
                        <li><strong>학회나 세미나 프리젠테이션:</strong> 발표 마지막 슬라이드에 QR코드를 크게 띄워 참석자들이 사진을 찍어 바로 연락처를 저장하게 유도하세요.</li>
                        <li><strong>영업사원의 출입증이나 사원증:</strong> 목걸이형 사원증 뒷면에 인쇄해 두면 회의 시간에 빠르고 쿨하게 정보를 교환할 수 있습니다.</li>
                    </ul>

                    <h3>자주 묻는 질문 (명함 vCard 편)</h3>
                    <details className="mb-4 p-4 border rounded relative overflow-hidden group">
                        <summary className="font-medium cursor-pointer text-gray-900">
                            특정 항목(예: 팩스 번호)이 비어있어도 생성이 되나요?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            네, 모든 입력 칸을 반드시 채울 필요는 없습니다. 이름과 휴대폰 번호 등 핵심적인 정보만 입력하고 나머지는 비워두어도 완벽하게 작동하는 QR코드가 생성됩니다.
                        </p>
                    </details>
                    
                    <details className="p-4 border rounded relative overflow-hidden group">
                        <summary className="font-medium cursor-pointer text-gray-900">
                            vCard는 안드로이드(갤럭시)와 애플(iPhone) 모두 호환되나요?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            네, vCard는 글로벌 국제 표준입니다. 두 운영체제의 기본 주소록 앱에서 모두 스캔 및 저장 기능을 기본적으로 완벽하게 지원합니다.
                        </p>
                    </details>
                </article>
            </main>
            <Footer />
        </>
    );
}

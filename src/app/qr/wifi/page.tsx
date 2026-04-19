import QRGenerator from '@/components/QRGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: '무료 와이파이(Wi-Fi) QR코드 생성기 - 비밀번호 스캔 연결',
    description: '스캔 한 번으로 와이파이에 자동 연결되는 QR코드를 만드세요. 카페, 식당, 매장 방문객을 위한 필수 도구입니다. WPA/WPA2 완벽 지원.',
};

export default function WifiQRPage() {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        와이파이(Wi-Fi) QR코드 생성기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        방문객이 긴 비밀번호를 물어보거나 직접 타이핑할 필요가 없습니다.<br />
                        인쇄된 QR코드만 스캔하면 즉시 매장 와이파이에 접속됩니다.
                    </p>
                </section>

                <section className="mb-16">
                    <QRGenerator activeTab="wifi" />
                </section>

                {/* SEO & Educational Text Section (Bankrate Strategy) */}
                <article className="prose max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2>와이파이(Wi-Fi) QR코드, 왜 매장에 필수인가요?</h2>
                    <p>
                        최근 대부분의 소비자들은 모바일 데이터를 절약하거나 더 빠른 속도를 위해 방문하는 장소의 와이파이 연결을 원합니다. 
                        하지만 "비밀번호가 뭐예요?"라는 반복적인 질문에 답하거나, 복잡한 대소문자가 섞인 비밀번호를 벽에 붙여두는 것은
                        직원과 고객 모두에게 번거로운 일입니다. 와이파이 QR코드는 이 귀찮은 과정을 <strong>단 1초의 카메라 스캔</strong>으로 단축시킵니다.
                    </p>

                    <h3>와이파이 QR코드 도입 시 얻게 되는 3가지 장점</h3>
                    <ol>
                        <li><strong>고객 불만 감소 & 직원 업무 효율화:</strong> 하루에도 수십 번씩 와이파이 비밀번호를 묻는 질문을 방지하여 직원이 본연의 서비스에 집중할 수 있습니다.</li>
                        <li><strong>보안성 강화 (Typo 방지):</strong> 복잡하고 안전한(길고 대소문자와 특수문자가 섞인) 비밀번호를 사용하더라도 손님이 타이핑할 필요가 없어 연결 실패 확률이 0%에 가깝습니다.</li>
                        <li><strong>전문적이고 트렌디한 매장 이미지:</strong> 테이블 오더, 키오스크와 더불어 QR 와이파이는 디지털 친화적인 매장이라는 인식을 심어줍니다.</li>
                    </ol>

                    <h3>WPA/WPA2/WEP 보안 방식이란?</h3>
                    <p>
                        와이파이 공유기는 무선 연결을 보호하기 위해 암호화 프로토콜을 사용합니다. 생성기에서 올바른 보안 방식을 선택해야 QR코드가 정상 작동합니다.
                    </p>
                    <ul>
                        <li><strong>WPA/WPA2 (가장 권장됨):</strong> 현대의 거의 모든 공유기가 사용하는 표준이자 가장 안전한 방식입니다. 일반적인 가정이나 카페는 대부분 이 방식을 사용합니다.</li>
                        <li><strong>WEP (구형):</strong> 아주 오래된 구형 라우터에서 사용되던 방식으로, 보안이 취약하여 현재는 거의 사용되지 않습니다.</li>
                        <li><strong>없음 (비밀번호 없음):</strong> 비밀번호 설정이 안 된 공개형(Public) 와이파이일 경우 선택합니다.</li>
                    </ul>

                    <h3>자주 묻는 질문 (Wi-Fi QR코드 편)</h3>
                    <details className="mb-4 p-4 border rounded relative overflow-hidden group">
                        <summary className="font-medium cursor-pointer text-gray-900">
                            아이폰과 갤럭시(안드로이드) 모두 스캔이 가능한가요?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            네, 최신 iOS 및 안드로이드 기기는 기본 카메라 앱에 QR코드 리더기가 내장되어 있어 별도의 앱 설치 없이 기본 카메라로 스캔하여 즉시 연결할 수 있습니다.
                        </p>
                    </details>
                    
                    <details className="p-4 border rounded relative overflow-hidden group">
                        <summary className="font-medium cursor-pointer text-gray-900">
                            네트워크 이름(SSID)을 몰라도 되나요?
                        </summary>
                        <p className="mt-2 text-gray-600">
                            아니요. 스마트폰이 어떤 와이파이를 찾아서 비밀번호를 입력해야 할지 알아야 하므로, 정확한 <strong>네트워크 이름(SSID)</strong>과 <strong>비밀번호</strong> 모두 입력해야 정상적으로 생성됩니다. (대소문자와 띄어쓰기를 정확히 일치시켜야 합니다.)
                        </p>
                    </details>
                </article>
            </main>
            <Footer />
        </>
    );
}

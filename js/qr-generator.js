// ===== QR코드 생성기 관련 함수들 =====

// 전역 변수
let currentQRCanvas = null;

// 유틸리티 함수들
function showError(message) {
    console.error('QR Error:', message);
    alert('오류: ' + message);
}

function showSuccess(message) {
    console.log('QR Success:', message);
    alert('성공: ' + message);
}

// QR코드 라이브러리 로딩 확인
function checkQRLibrary() {
    if (typeof QRCode === 'undefined') {
        console.error('QRCode library not loaded');
        showError('QR코드 라이브러리를 로드하는 중입니다. 잠시 후 다시 시도해주세요.');
        return false;
    }
    console.log('QRCode library loaded successfully');
    return true;
}

// QR코드 라이브러리 로딩 대기
function waitForQRLibrary(callback, maxAttempts = 50) {
    let attempts = 0;
    const checkLibrary = () => {
        attempts++;
        if (typeof QRCode !== 'undefined') {
            console.log('QRCode library loaded after', attempts, 'attempts');
            callback();
        } else if (attempts < maxAttempts) {
            setTimeout(checkLibrary, 100);
        } else {
            console.error('QRCode library failed to load after', maxAttempts, 'attempts');
            showError('QR코드 라이브러리 로딩에 실패했습니다. 페이지를 새로고침해주세요.');
        }
    };
    checkLibrary();
}

// 텍스트 QR코드 생성
function generateTextQR() {
    console.log('generateTextQR 함수 호출됨');
    
    const text = document.getElementById('text-input').value;
    const size = parseInt(document.getElementById('qr-size').value);
    
    console.log(`입력된 텍스트: ${text}`);
    console.log(`QR코드 크기: ${size}`);
    
    if (!text.trim()) {
        showError('텍스트를 입력해주세요.');
        return;
    }
    
    generateQR('qr-code', text, size);
}

// URL QR코드 생성
function generateURLQR() {
    const url = document.getElementById('url-input').value;
    const size = parseInt(document.getElementById('qr-size-url').value);
    
    if (!url.trim()) {
        showError('URL을 입력해주세요.');
        return;
    }
    
    // URL 형식 검증
    if (!isValidURL(url)) {
        showError('올바른 URL 형식을 입력해주세요.');
        return;
    }
    
    generateQR('qr-code-url', url, size);
}

// Wi-Fi QR코드 생성
function generateWiFiQR() {
    const ssid = document.getElementById('wifi-ssid').value;
    const password = document.getElementById('wifi-password').value;
    const security = document.getElementById('wifi-security').value;
    const hidden = document.getElementById('wifi-hidden').checked;
    
    if (!ssid.trim()) {
        showError('Wi-Fi 네트워크 이름을 입력해주세요.');
        return;
    }
    
    // Wi-Fi QR코드 형식: WIFI:T:WPA;S:SSID;P:Password;H:true/false;;
    let wifiString = `WIFI:T:${security};S:${ssid};`;
    
    if (password) {
        wifiString += `P:${password};`;
    }
    
    if (hidden) {
        wifiString += `H:true;`;
    }
    
    wifiString += ';';
    
    generateQR('qr-code-wifi', wifiString, 300);
}

// 연락처 QR코드 생성 (vCard 형식)
function generateContactQR() {
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const org = document.getElementById('contact-org').value;
    
    if (!name.trim()) {
        showError('이름을 입력해주세요.');
        return;
    }
    
    // vCard 형식 생성
    let vcard = 'BEGIN:VCARD\n';
    vcard += 'VERSION:3.0\n';
    vcard += `FN:${name}\n`;
    vcard += `N:${name};;;\n`;
    
    if (phone) {
        vcard += `TEL:${phone}\n`;
    }
    
    if (email) {
        vcard += `EMAIL:${email}\n`;
    }
    
    if (org) {
        vcard += `ORG:${org}\n`;
    }
    
    vcard += 'END:VCARD';
    
    generateQR('qr-code-contact', vcard, 300);
}

// 이메일 QR코드 생성
function generateEmailQR() {
    const to = document.getElementById('email-to').value;
    const subject = document.getElementById('email-subject').value;
    const body = document.getElementById('email-body').value;
    
    if (!to.trim()) {
        showError('받는 사람 이메일을 입력해주세요.');
        return;
    }
    
    if (!isValidEmail(to)) {
        showError('올바른 이메일 형식을 입력해주세요.');
        return;
    }
    
    // mailto: 형식 생성
    let mailto = `mailto:${to}`;
    const params = [];
    
    if (subject) {
        params.push(`subject=${encodeURIComponent(subject)}`);
    }
    
    if (body) {
        params.push(`body=${encodeURIComponent(body)}`);
    }
    
    if (params.length > 0) {
        mailto += `?${params.join('&')}`;
    }
    
    generateQR('qr-code-email', mailto, 300);
}

// SMS QR코드 생성
function generateSMSQR() {
    const phone = document.getElementById('sms-phone').value;
    const message = document.getElementById('sms-message').value;
    
    if (!phone.trim()) {
        showError('전화번호를 입력해주세요.');
        return;
    }
    
    // sms: 형식 생성
    let sms = `sms:${phone}`;
    
    if (message) {
        sms += `:${encodeURIComponent(message)}`;
    }
    
    generateQR('qr-code-sms', sms, 300);
}

// 소셜미디어 QR코드 생성
function generateSocialQR() {
    const platform = document.getElementById('social-platform').value;
    const url = document.getElementById('social-url').value;
    
    if (!url.trim()) {
        showError('소셜미디어 URL을 입력해주세요.');
        return;
    }
    
    if (!isValidURL(url)) {
        showError('올바른 URL 형식을 입력해주세요.');
        return;
    }
    
    generateQR('qr-code-social', url, 300);
}

// 앱스토어 QR코드 생성
function generateAppStoreQR() {
    const platform = document.getElementById('app-platform').value;
    const url = document.getElementById('app-url').value;
    
    if (!url.trim()) {
        showError('앱 URL을 입력해주세요.');
        return;
    }
    
    if (!isValidURL(url)) {
        showError('올바른 URL 형식을 입력해주세요.');
        return;
    }
    
    generateQR('qr-code-appstore', url, 300);
}

// 명함 QR코드 생성 (vCard 형식)
function generateBusinessCardQR() {
    const name = document.getElementById('card-name').value;
    const company = document.getElementById('card-company').value;
    const title = document.getElementById('card-title').value;
    const phone = document.getElementById('card-phone').value;
    const email = document.getElementById('card-email').value;
    const website = document.getElementById('card-website').value;
    
    if (!name.trim()) {
        showError('이름을 입력해주세요.');
        return;
    }
    
    // vCard 형식 생성
    let vcard = 'BEGIN:VCARD\n';
    vcard += 'VERSION:3.0\n';
    vcard += `FN:${name}\n`;
    vcard += `N:${name};;;\n`;
    
    if (company) {
        vcard += `ORG:${company}\n`;
    }
    
    if (title) {
        vcard += `TITLE:${title}\n`;
    }
    
    if (phone) {
        vcard += `TEL:${phone}\n`;
    }
    
    if (email) {
        vcard += `EMAIL:${email}\n`;
    }
    
    if (website) {
        vcard += `URL:${website}\n`;
    }
    
    vcard += 'END:VCARD';
    
    generateQR('qr-code-business-card', vcard, 300);
}

// 위치 QR코드 생성
function generateLocationQR() {
    const name = document.getElementById('location-name').value;
    const address = document.getElementById('location-address').value;
    const lat = document.getElementById('location-lat').value;
    const lng = document.getElementById('location-lng').value;
    
    if (!name.trim()) {
        showError('장소명을 입력해주세요.');
        return;
    }
    
    // geo: 형식 생성 (위도,경도)
    if (lat && lng) {
        const geoString = `geo:${lat},${lng}`;
        generateQR('qr-code-location', geoString, 300);
    } else if (address) {
        // 주소만 있는 경우
        generateQR('qr-code-location', address, 300);
    } else {
        showError('위치 정보를 입력해주세요.');
        return;
    }
}

// 계좌번호 QR코드 생성
function generateBankQR() {
    const bankName = document.getElementById('bank-name').value;
    const account = document.getElementById('bank-account').value;
    const holder = document.getElementById('bank-holder').value;
    const amount = document.getElementById('bank-amount').value;
    
    if (!bankName.trim() || !account.trim() || !holder.trim()) {
        showError('은행명, 계좌번호, 예금주를 모두 입력해주세요.');
        return;
    }
    
    // 계좌 정보를 텍스트로 생성
    let bankInfo = `은행: ${bankName}\n계좌번호: ${account}\n예금주: ${holder}`;
    
    if (amount) {
        bankInfo += `\n송금액: ${parseInt(amount).toLocaleString()}원`;
    }
    
    generateQR('qr-code-bank', bankInfo, 300);
}

// 결제 QR코드 생성
function generatePaymentQR() {
    const platform = document.getElementById('payment-platform').value;
    const url = document.getElementById('payment-url').value;
    const amount = document.getElementById('payment-amount').value;
    
    if (!url.trim()) {
        showError('결제 URL을 입력해주세요.');
        return;
    }
    
    if (!isValidURL(url)) {
        showError('올바른 URL 형식을 입력해주세요.');
        return;
    }
    
    generateQR('qr-code-payment', url, 300);
}

// QR코드 생성 공통 함수
function generateQR(elementId, text, size = 300) {
    console.log(`generateQR 호출됨 - elementId: ${elementId}, text: ${text}, size: ${size}`);
    
    // QR코드 라이브러리 로딩 확인
    if (!checkQRLibrary()) {
        console.error('QR코드 라이브러리 로딩 실패');
        return;
    }
    
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id '${elementId}' not found`);
        return;
    }
    
    console.log(`대상 요소 찾음: ${elementId}`);
    
    // 기존 QR코드 제거
    element.innerHTML = '';
    
    try {
        console.log('QR코드 생성 시작...');
        // QR코드 생성
        QRCode.toCanvas(element, text, {
            width: size,
            height: size,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            },
            margin: 2,
            errorCorrectionLevel: 'M'
        }, function (error) {
            if (error) {
                console.error('QR Code generation error:', error);
                showError('QR코드 생성 중 오류가 발생했습니다.');
                return;
            }
            
            console.log('QR코드 생성 성공!');
            
            // 성공 시 결과 영역 표시
            const resultElement = element.closest('.qr-result');
            if (resultElement) {
                resultElement.classList.add('show');
                resultElement.scrollIntoView({ behavior: 'smooth' });
                console.log('결과 영역 표시됨');
            }
            
            // 현재 QR코드 캔버스 저장
            currentQRCanvas = element.querySelector('canvas');
            console.log('QR코드 캔버스 저장됨');
            
            showSuccess('QR코드가 생성되었습니다!');
        });
    } catch (error) {
        console.error('QR Code generation error:', error);
        showError('QR코드 생성 중 오류가 발생했습니다.');
    }
}

// QR코드 다운로드
function downloadQR() {
    if (!currentQRCanvas) {
        showError('다운로드할 QR코드가 없습니다.');
        return;
    }
    
    try {
        // 캔버스를 이미지로 변환
        const link = document.createElement('a');
        link.download = `qr-code-${Date.now()}.png`;
        link.href = currentQRCanvas.toDataURL();
        link.click();
        
        showSuccess('QR코드가 다운로드되었습니다!');
    } catch (error) {
        console.error('Download error:', error);
        showError('다운로드 중 오류가 발생했습니다.');
    }
}

// URL 유효성 검사
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// 이메일 유효성 검사
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 에러 메시지 표시
function showError(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message error';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ef4444;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 성공 메시지 표시
function showSuccess(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message success';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 애니메이션 CSS는 style.css에 포함됨

// ===== 전역 함수로 노출 =====
window.generateTextQR = generateTextQR;
window.generateURLQR = generateURLQR;
window.generateWiFiQR = generateWiFiQR;
window.generateContactQR = generateContactQR;
window.generateEmailQR = generateEmailQR;
window.generateSMSQR = generateSMSQR;
window.generateSocialQR = generateSocialQR;
window.generateAppStoreQR = generateAppStoreQR;
window.generateBusinessCardQR = generateBusinessCardQR;
window.generateLocationQR = generateLocationQR;
window.generateBankQR = generateBankQR;
window.generatePaymentQR = generatePaymentQR;
window.downloadQR = downloadQR;
// ===== 전역 변수 =====
let currentTool = 'home';

// ===== DOM 로드 완료 시 실행 =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ===== 앱 초기화 =====
function initializeApp() {
    // 홈 화면 표시
    showTool('home');
    
    // 사이드바 링크 이벤트 리스너 추가
    addSidebarEventListeners();
    
    // QR코드 생성 버튼 이벤트 리스너 추가
    addQRButtonEventListeners();
    
    // 반응형 광고 크기 조정
    adjustAdSizes();
    
    // 윈도우 리사이즈 이벤트
    window.addEventListener('resize', adjustAdSizes);
    
    console.log('무료 온라인 QR생성기 앱이 초기화되었습니다.');
}

// ===== 도구 전환 함수 =====
function showTool(toolId) {
    // 모든 도구 섹션 숨기기
    const allTools = document.querySelectorAll('.tool-section');
    allTools.forEach(tool => {
        tool.classList.remove('active');
    });
    
    // 새로운 도구 표시
    const newTool = document.getElementById(toolId);
    if (newTool) {
        newTool.classList.add('active');
        currentTool = toolId;
        
        // 사이드바 활성 상태 업데이트
        updateSidebarActive(toolId);
        
        // 페이지 제목 업데이트
        updatePageTitle(toolId);
        
        // 결과 영역 초기화
        clearResults();
        
        // 스크롤을 맨 위로
        scrollToTop();
        
        console.log(`도구 전환: ${toolId}`);
    } else {
        console.error(`Tool with id '${toolId}' not found`);
    }
}

// ===== 사이드바 활성 상태 업데이트 =====
function updateSidebarActive(toolId) {
    // 모든 링크에서 active 클래스 제거
    const allLinks = document.querySelectorAll('.tool-list a');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // 현재 도구에 해당하는 링크에 active 클래스 추가
    const activeLink = document.querySelector(`[onclick*="${toolId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ===== 페이지 제목 업데이트 =====
function updatePageTitle(toolId) {
    const titles = {
        'home': '무료 온라인 QR생성기 - 12가지 QR코드 무료 생성',
        'qr-text': '텍스트 QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-url': 'URL QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-wifi': 'Wi-Fi QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-contact': '연락처 QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-email': '이메일 QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-sms': 'SMS QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-social': '소셜미디어 QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-appstore': '앱스토어 QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-business-card': '명함 QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-location': '위치 QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-bank': '계좌번호 QR코드 생성기 - 무료 온라인 QR생성기',
        'qr-payment': '결제 QR코드 생성기 - 무료 온라인 QR생성기'
    };
    
    document.title = titles[toolId] || '무료 온라인 QR생성기';
}

// ===== 사이드바 이벤트 리스너 추가 =====
function addSidebarEventListeners() {
    const sidebarLinks = document.querySelectorAll('.tool-list a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // onclick 속성에서 도구 ID 추출
            const onclickAttr = this.getAttribute('onclick');
            const toolId = onclickAttr.match(/showTool\('([^']+)'\)/)[1];
            
            if (toolId) {
                showTool(toolId);
            }
        });
    });
}

// ===== QR코드 생성 버튼 이벤트 리스너 추가 =====
function addQRButtonEventListeners() {
    // 모든 QR코드 생성 버튼에 이벤트 리스너 추가
    const qrButtons = document.querySelectorAll('button[id*="generate"], button[onclick*="generate"]');
    
    qrButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 버튼의 onclick 속성에서 함수명 추출
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const functionName = onclickAttr.replace(/\(\)/, '');
                if (typeof window[functionName] === 'function') {
                    window[functionName]();
                } else {
                    console.error(`Function ${functionName} not found`);
                    showError('QR코드 생성 기능을 로드하는 중입니다. 잠시 후 다시 시도해주세요.');
                }
            }
        });
    });
    
    // 특정 버튼들에 대한 개별 처리
    const buttonMappings = {
        'generate-text-btn': 'generateTextQR',
        'generate-url-btn': 'generateURLQR',
        'generate-wifi-btn': 'generateWiFiQR',
        'generate-contact-btn': 'generateContactQR',
        'generate-email-btn': 'generateEmailQR',
        'generate-sms-btn': 'generateSMSQR',
        'generate-social-btn': 'generateSocialQR',
        'generate-appstore-btn': 'generateAppStoreQR',
        'generate-business-card-btn': 'generateBusinessCardQR',
        'generate-location-btn': 'generateLocationQR',
        'generate-bank-btn': 'generateBankQR',
        'generate-payment-btn': 'generatePaymentQR'
    };
    
    Object.entries(buttonMappings).forEach(([buttonId, functionName]) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function() {
                if (typeof window[functionName] === 'function') {
                    window[functionName]();
                } else {
                    console.error(`${functionName} function not found`);
                    showError('QR코드 생성 기능을 로드하는 중입니다. 잠시 후 다시 시도해주세요.');
                }
            });
        }
    });
}

// ===== 결과 영역 초기화 =====
function clearResults() {
    // QR코드 결과 숨기기
    const qrResults = document.querySelectorAll('.qr-result');
    qrResults.forEach(result => {
        result.classList.remove('show');
    });
    
    // 입력 필드 초기화 (홈 화면이 아닌 경우에만)
    if (currentTool !== 'home') {
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="url"], input[type="number"], textarea, select');
        inputs.forEach(input => {
            input.value = '';
        });
        
        // 체크박스 초기화
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }
}

// ===== 스크롤을 맨 위로 =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== 반응형 광고 크기 조정 =====
function adjustAdSizes() {
    const screenWidth = window.innerWidth;
    const headerAd = document.querySelector('.ad-header .ad-placeholder');
    const footerAd = document.querySelector('.ad-footer .ad-placeholder');
    const sidebarAd = document.querySelector('.ad-sidebar .ad-placeholder');
    
    if (screenWidth <= 480) {
        // 모바일 (480px 이하)
        if (headerAd) {
            headerAd.style.width = '280px';
            headerAd.style.height = '50px';
        }
        if (footerAd) {
            footerAd.style.width = '280px';
            footerAd.style.height = '50px';
        }
        if (sidebarAd) {
            sidebarAd.style.width = '280px';
            sidebarAd.style.height = '100px';
        }
    } else if (screenWidth <= 768) {
        // 태블릿 (768px 이하)
        if (headerAd) {
            headerAd.style.width = '320px';
            headerAd.style.height = '50px';
        }
        if (footerAd) {
            footerAd.style.width = '320px';
            footerAd.style.height = '50px';
        }
        if (sidebarAd) {
            sidebarAd.style.width = '300px';
            sidebarAd.style.height = '100px';
        }
    } else {
        // 데스크톱 (768px 초과)
        if (headerAd) {
            headerAd.style.width = '728px';
            headerAd.style.height = '90px';
        }
        if (footerAd) {
            footerAd.style.width = '728px';
            footerAd.style.height = '90px';
        }
        if (sidebarAd) {
            sidebarAd.style.width = '300px';
            sidebarAd.style.height = '250px';
        }
    }
}

// ===== 유틸리티 함수들 =====

// 입력값 검증
function validateInput(value, min = 0, max = Infinity) {
    const num = parseFloat(value);
    return !isNaN(num) && num >= min && num <= max;
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

// ===== 키보드 이벤트 =====
document.addEventListener('keydown', function(e) {
    // ESC 키로 홈으로 이동
    if (e.key === 'Escape') {
        showTool('home');
    }
    
    // Enter 키로 QR코드 생성 (입력 필드에서)
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const currentSection = document.querySelector('.tool-section.active');
        if (currentSection) {
            const generateBtn = currentSection.querySelector('.btn-primary');
            if (generateBtn) {
                generateBtn.click();
            }
        }
    }
});

// ===== 애니메이션 CSS는 style.css에 포함됨 =====

// ===== 페이지 로드 시간 측정 =====
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`페이지 로드 시간: ${Math.round(loadTime)}ms`);
});

// ===== 오프라인 감지 =====
window.addEventListener('online', function() {
    showSuccess('인터넷 연결이 복구되었습니다.');
});

window.addEventListener('offline', function() {
    showError('인터넷 연결이 끊어졌습니다. 일부 기능이 제한될 수 있습니다.');
});

// ===== 에러 처리 =====
window.addEventListener('error', function(e) {
    console.error('JavaScript 에러:', e);
});

// ===== 브라우저 호환성 체크 =====
function checkBrowserCompatibility() {
    // 필수 기능들 확인
    const requiredFeatures = [
        'localStorage',
        'sessionStorage',
        'Canvas',
        'fetch'
    ];
    
    const unsupportedFeatures = [];
    
    if (!window.localStorage) unsupportedFeatures.push('localStorage');
    if (!window.sessionStorage) unsupportedFeatures.push('sessionStorage');
    if (!document.createElement('canvas').getContext) unsupportedFeatures.push('Canvas');
    if (!window.fetch) unsupportedFeatures.push('fetch');
    
    if (unsupportedFeatures.length > 0) {
        showError(`브라우저가 다음 기능을 지원하지 않습니다: ${unsupportedFeatures.join(', ')}`);
        return false;
    }
    
    return true;
}

// 브라우저 호환성 체크 실행
checkBrowserCompatibility();
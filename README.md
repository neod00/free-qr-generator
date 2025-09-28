# 📱 무료 온라인 QR생성기

12가지 다양한 QR코드를 무료로 생성하고 다운로드할 수 있는 온라인 도구입니다.

## 🚀 배포 주소
👉 [https://free-qr-generator.netlify.app](https://free-qr-generator.netlify.app)

## ✨ 주요 기능

### 기본 QR코드 (4개)
- **텍스트 QR코드** - 텍스트를 QR코드로 변환
- **URL QR코드** - 웹사이트 주소를 QR코드로 변환
- **Wi-Fi QR코드** - Wi-Fi 네트워크 정보를 QR코드로 변환
- **연락처 QR코드** - 연락처 정보를 vCard 형식으로 QR코드 생성

### 소셜미디어 QR코드 (4개)
- **이메일 QR코드** - 이메일 주소와 제목, 내용을 QR코드로 변환
- **SMS QR코드** - 전화번호와 메시지를 QR코드로 변환
- **소셜미디어 QR코드** - 인스타그램, 페이스북, 유튜브 등 프로필 링크를 QR코드로 변환
- **앱스토어 QR코드** - iOS/Android 앱 다운로드 링크를 QR코드로 변환

### 비즈니스 QR코드 (2개)
- **명함 QR코드** - 디지털 명함(vCard)을 QR코드로 변환
- **위치 QR코드** - GPS 좌표와 주소를 QR코드로 변환

### 결제/금융 QR코드 (2개)
- **계좌번호 QR코드** - 은행 계좌 정보를 QR코드로 변환
- **결제 QR코드** - 토스, 카카오페이 등 결제 링크를 QR코드로 변환

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **QR코드 라이브러리**: QRCode.js
- **스타일링**: CSS Grid, Flexbox, CSS Variables
- **배포**: Netlify
- **수익화**: Google AdSense

## 🎯 주요 특징

- **무료 사용** - 모든 기능을 무료로 이용 가능
- **12가지 QR코드** - 다양한 용도의 QR코드 생성 지원
- **반응형 디자인** - 모바일, 태블릿, 데스크톱 완벽 대응
- **즉시 다운로드** - 생성된 QR코드를 PNG 형식으로 다운로드
- **SEO 최적화** - 검색 엔진 최적화로 노출도 향상
- **빠른 로딩** - 최적화된 코드로 빠른 페이지 로딩

## 📱 사용법

1. **QR코드 타입 선택** - 사이드바에서 원하는 QR코드 타입을 선택
2. **정보 입력** - 해당하는 정보를 입력 폼에 작성
3. **QR코드 생성** - "QR코드 생성" 버튼을 클릭
4. **다운로드** - 생성된 QR코드를 PNG 파일로 다운로드

## 🔧 로컬 개발 환경 설정

### 1. 저장소 클론
```bash
git clone https://github.com/neod00/free-qr-generator.git
cd free-qr-generator
```

### 2. 로컬 서버 실행
```bash
# Python 3 사용
python -m http.server 8000

# Node.js 사용
npx serve .

# Live Server (VS Code 확장) 사용
# index.html을 우클릭하고 "Open with Live Server" 선택
```

### 3. 브라우저에서 확인
```
http://localhost:8000
```

## 📁 프로젝트 구조

```
free-qr-generator/
├── css/
│   └── style.css              # 메인 스타일시트
├── js/
│   ├── main.js                # 메인 JavaScript
│   ├── qr-generator.js        # QR코드 생성 로직
│   └── qrcode.min.js          # QR코드 라이브러리
├── public/
│   ├── ads.txt                # Google AdSense 설정
│   ├── robots.txt             # 검색엔진 크롤링 설정
│   ├── sitemap.xml            # 사이트맵
│   └── manifest.json          # PWA 매니페스트
├── index.html                 # 메인 HTML 파일
├── privacy.html               # 개인정보처리방침
├── terms.html                 # 이용약관
├── netlify.toml               # Netlify 배포 설정
└── README.md                  # 프로젝트 문서
```

## 🎨 디자인 특징

- **모던한 UI/UX** - 글래스모피즘 디자인 적용
- **직관적인 네비게이션** - 카테고리별로 정리된 사이드바
- **반응형 그리드** - 화면 크기에 따라 자동 조정되는 레이아웃
- **부드러운 애니메이션** - 사용자 경험을 향상시키는 트랜지션 효과

## 📊 SEO 최적화

- **메타 태그 최적화** - 검색 엔진을 위한 완벽한 메타 태그 설정
- **구조화된 데이터** - JSON-LD 형식의 스키마 마크업
- **사이트맵** - 모든 페이지를 검색엔진에 알림
- **robots.txt** - 검색엔진 크롤링 최적화

## 🔒 개인정보 보호

- **최소한의 데이터 수집** - QR코드 생성에 필요한 정보만 수집
- **개인정보처리방침** - 완전한 개인정보 보호 정책 제공
- **쿠키 정책** - 쿠키 사용 목적과 설정 방법 안내

## 🚀 배포 방법

### Netlify 배포
1. GitHub 저장소를 Netlify에 연결
2. 빌드 설정: 빌드 명령어 없음 (정적 사이트)
3. 배포 폴더: 루트 디렉토리
4. 환경 변수 설정 (필요시)

### 환경 변수
- `REACT_APP_ADSENSE_PUBLISHER_ID`: Google AdSense Publisher ID

## 📈 향후 계획

- **QR코드 스캐너** - QR코드 읽기 기능 추가
- **QR코드 디자인** - 로고, 색상 커스터마이징 기능
- **배치 생성** - 여러 QR코드 한번에 생성
- **API 제공** - 개발자를 위한 REST API 제공
- **다국어 지원** - 영어, 일본어 등 다국어 지원

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- 이메일: contact@free-qr-generator.com
- 프로젝트 링크: [https://github.com/neod00/free-qr-generator](https://github.com/neod00/free-qr-generator)

## 🙏 감사의 말

이 프로젝트는 다음 기술들을 사용하여 개발되었습니다:
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - QR코드 생성 라이브러리
- [Netlify](https://www.netlify.com/) - 웹 호스팅 서비스
- [Google AdSense](https://www.google.com/adsense/) - 광고 서비스

**⭐ 이 프로젝트가 도움이 되었다면 별점을 눌러주세요!**
export type Locale = 'ko' | 'en';

export const locales = {
    ko: {
        meta: {
            title: "무료 온라인 QR생성기 - 12가지 QR코드 무료 생성",
            description: "무료 온라인 QR코드 생성기! 텍스트, URL, Wi-Fi, 연락처, 이메일, SMS, 소셜미디어, 명함, 위치, 계좌번호, 결제 QR코드를 무료로 생성하세요."
        },
        nav: {
            title: "무료 QR생성기",
            subtitle: "12가지 QR코드를 무료로 생성하세요",
            faq: "FAQ",
            privacy: "개인정보",
            cta: "무료 생성하기"
        },
        hero: {
            badge: "100% 무료",
            title_pre: "가장 완벽한",
            title_highlight: "무료 QR 생성기",
            description: "URL부터 Wi-Fi, 전자명함까지.\n회원가입 없이 12가지 다양한 QR코드를 즉시 생성하세요."
        },
        features: {
            fast: {
                title: "초고속 생성",
                desc: "복잡한 절차 없이 입력과 동시에\nQR코드가 즉시 생성됩니다."
            },
            secure: {
                title: "안전한 보안",
                desc: "데이터는 서버에 저장되지 않고\n브라우저에서 안전하게 처리됩니다."
            },
            free: {
                title: "평생 무료",
                desc: "개인, 기업 모두 제한 없이\n상업적 용도로 사용 가능합니다."
            }
        },
        guide: {
            title: "지원 기능 상세 가이드",
            url: { title: "URL & 링크", desc: "웹사이트, 포트폴리오, 상품 페이지 등 원하는 인터넷 주소로 연결하세요. 마케팅의 기본입니다." },
            wifi: { title: "Wi-Fi 자동 접속", desc: "비밀번호 입력의 번거로움을 없애세요. 스캔 한 번으로 안전하게 와이파이에 연결됩니다. 매장에서 필수!" },
            vcard: { title: "전자 명함 (vCard)", desc: "스마트한 첫인상을 남기세요. 연락처 정보가 상대방의 휴대폰 주소록에 자동으로 저장됩니다." },
            social: { title: "소셜 미디어 & 메시지", desc: "인스타그램, 유튜브 채널 홍보부터 WhatsApp, SMS 문자 발송까지. 소통의 창구를 넓히세요." }
        },
        faq: {
            title: "자주 묻는 질문 (FAQ)",
            q1: "상업적 무료 이용이 가능한가요?",
            a1: "네, 100% 무료이며 상업적 용도로 마음껏 사용하셔도 됩니다.",
            q2: "유효기간이 있나요?",
            a2: "아니요, 생성된 QR코드는 영구적으로 작동합니다."
        },
        generator: {
            title: "Generator",
            desc: "정보를 입력하면 실시간으로 QR코드가 생성됩니다.",
            download: "QR코드 다운로드",
            waiting: "데이터 입력 대기...",
            input_data: "데이터 입력",
            size: "QR코드 크기",
            tabs: {
                url: "URL",
                text: "텍스트",
                wifi: "Wi-Fi",
                contact: "연락처",
                email: "이메일",
                sms: "SMS",
                whatsapp: "WhatsApp",
                social: "소셜",
                event: "일정",
                crypto: "코인",
                location: "위치"
            },
            forms: {
                url_label: "웹사이트 주소 (URL)",
                text_label: "텍스트 내용",
                ssid: "네트워크 이름 (SSID)",
                password: "비밀번호",
                security: "보안 방식",
                hidden: "숨겨진 네트워크",
                lastname: "성 (Last Name)",
                firstname: "이름 (First Name)",
                phone: "전화번호",
                email: "이메일",
                org: "회사/조직",
                subject: "제목",
                body: "내용",
                message: "메시지",
                lat: "위도 (Latitude)",
                lng: "경도 (Longitude)",
                address: "지갑 주소",
                amount: "금액",
                platform: "플랫폼",
                username: "아이디/유저네임"
            }
        },
        footer: {
            rights: "All Rights Reserved.",
            privacy: "개인정보처리방침",
            terms: "이용약관",
            faq: "FAQ",
            contact: "문의사항"
        },
        // New Policy Pages
        pages: {
            privacy: {
                title: "개인정보처리방침",
                last_updated: "최종 수정일: 2024년 12월 20일",
                sections: [
                    {
                        title: "1. 개인정보의 수집 및 이용",
                        content: "'무료 온라인 QR생성기'(이하 \"서비스\")는 이용자의 개인정보를 소중히 다루며, 서비스 이용을 위해 최소한의 정보만을 수집합니다.",
                        list: [
                            "QR코드 생성 데이터: 사용자가 QR코드를 생성하기 위해 입력하는 데이터(텍스트, URL 등)는 브라우저 내에서만 처리되며 서버에 저장되지 않습니다.",
                            "로그 데이터: 서비스 이용 시 IP 주소, 브라우저 유형, 방문 시간 등의 표준 로그 데이터가 자동으로 생성될 수 있습니다. 이는 서비스 안정성 및 보안을 위해 사용됩니다."
                        ]
                    },
                    {
                        title: "2. 쿠키(Cookie) 및 광고",
                        content: "본 서비스는 사용자 경험 향상과 서비스 제공을 위해 쿠키를 사용할 수 있습니다.",
                        list: [
                            "Google AdSense: 본 서비스는 광고 수익을 위해 Google AdSense를 사용합니다. Google 및 타사 공급업체는 쿠키를 사용하여 사용자의 이전 웹사이트 방문 기록을 기반으로 광고를 게재할 수 있습니다.",
                            "사용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며, Google 광고 설정에서 맞춤 광고 설정을 해제할 수 있습니다."
                        ]
                    },
                    {
                        title: "3. 개인정보의 제3자 제공",
                        content: "서비스는 법령에 따른 요구가 있는 경우를 제외하고는, 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다."
                    },
                    {
                        title: "4. 문의하기",
                        content: "개인정보 처리와 관련하여 문의사항이 있으신 경우 아래 연락처로 문의해 주시기 바랍니다.\n이메일: openbrain.main@gmail.com"
                    }
                ]
            },
            terms: {
                title: "이용약관",
                last_updated: "최종 수정일: 2024년 12월 20일",
                sections: [
                    {
                        title: "1. 목적",
                        content: "본 약관은 '무료 온라인 QR생성기'(이하 \"서비스\")가 제공하는 모든 서비스의 이용조건 및 절차, 이용자와 서비스의 권리, 의무, 책임사항을 규정함을 목적으로 합니다."
                    },
                    {
                        title: "2. 서비스의 제공 및 변경",
                        list: [
                            "본 서비스는 사용자에게 무료로 QR코드 생성 기능을 제공합니다.",
                            "생성된 QR코드는 상업적/비상업적 목적으로 제한 없이 무료로 사용할 수 있습니다.",
                            "서비스는 운영상, 기술상의 필요에 따라 제공하는 서비스의 전부 또는 일부를 수정하거나 중단할 수 있습니다."
                        ]
                    },
                    {
                        title: "3. 면책조항",
                        list: [
                            "서비스는 \"있는 그대로\" 제공되며, 서비스의 이용으로 인해 발생한 어떠한 손해에 대해서도 책임을 지지 않습니다.",
                            "사용자가 생성한 QR코드의 내용(링크, 텍스트 등)에 대한 책임은 전적으로 사용자에게 있습니다. 불법적이거나 유해한 콘텐츠를 포함한 QR코드 생성 시 법적 제재를 받을 수 있습니다.",
                            "생성된 QR코드의 인식률은 사용 환경(인쇄 품질, 스캔 기계 등)에 따라 달라질 수 있으며, 이에 대해 서비스는 보증하지 않습니다."
                        ]
                    },
                    {
                        title: "4. 지적재산권",
                        content: "서비스가 제공하는 웹사이트 디자인, 로고, 소스 코드 등에 대한 저작권은 서비스 제공자에게 있습니다. 단, 사용자가 생성한 QR코드 이미지 자체에 대한 권리는 사용자에게 귀속됩니다."
                    }
                ]
            },
            faq: {
                title: "자주 묻는 질문 (FAQ)",
                items: [
                    { q: "정말 무료인가요?", a: "네, 100% 무료입니다. 기능 제한이나 숨겨진 비용 없이 모든 종류의 QR코드를 무제한으로 생성할 수 있습니다." },
                    { q: "상업적 목적으로 사용해도 되나요?", a: "네, 가능합니다. 개인, 기업, 공공기관 등 누구나 용도에 제한 없이 자유롭게 사용하실 수 있습니다. 명함, 전단지, 상품 패키지 등에 인쇄하여 사용하세요." },
                    { q: "만들어진 QR코드에 유효기간이 있나요?", a: "아니요, 없습니다. 본 서비스에서 생성된 QR코드는 정적(Static) QR코드이므로, 한 번 생성되면 내용이 변하지 않으며 영구적으로 작동합니다." },
                    { q: "제 개인정보나 입력한 데이터가 저장되나요?", a: "아니요. QR코드 생성 과정은 전적으로 사용자의 브라우저 내에서 이루어지며, 입력하신 텍스트나 정보는 서버로 전송되거나 저장되지 않습니다. 안심하고 사용하세요." },
                    { q: "QR코드 스타일이나 색상을 바꿀 수 있나요?", a: "현재는 표준 흑백 QR코드를 제공하고 있습니다. 이는 가장 높은 인식률을 보장하기 위함입니다. 추후 다양한 디자인 옵션을 추가할 예정입니다." }
                ]
            }
        }
    },
    en: {
        meta: {
            title: "Free Online QR Generator - Create 12 Types for Free",
            description: "Free Online QR Code Generator! Create QR codes for Text, URL, Wi-Fi, Contact, Email, SMS, Social Media, Business Card, Location, Crypto, and more."
        },
        nav: {
            title: "FREE QR Generator",
            subtitle: "Create 12 types of QR codes for free",
            faq: "FAQ",
            privacy: "Privacy",
            cta: "Create for Free"
        },
        hero: {
            badge: "100% Free",
            title_pre: "The Most Complete",
            title_highlight: "Free QR Generator",
            description: "From URL to Wi-Fi, vCard and more.\nInstantly create 12 different types of QR codes without sign-up."
        },
        features: {
            fast: {
                title: "Super Fast",
                desc: "Instantly generate QR codes\nas you type without complex steps."
            },
            secure: {
                title: "Secure & Private",
                desc: "Data is processed in your browser\nand never stored on servers."
            },
            free: {
                title: "Free Forever",
                desc: "Unlimited use for both\npersonal and commercial purposes."
            }
        },
        guide: {
            title: "Feature Guide",
            url: { title: "URL & Link", desc: "Link to websites, portfolios, or product pages. Essential for marketing." },
            wifi: { title: "Wi-Fi Auto Connect", desc: "No more typing passwords. Scan to connect to Wi-Fi instantly. Great for shops!" },
            vcard: { title: "vCard (Digital Contact)", desc: "Make a smart first impression. Save contact info directly to phone address books." },
            social: { title: "Social Media & Msg", desc: "Promote Instagram/YouTube channels or send WhatsApp/SMS messages easily." }
        },
        faq: {
            title: "Frequently Asked Questions",
            q1: "Is it free for commercial use?",
            a1: "Yes, it is 100% free for unlimited commercial and personal use.",
            q2: "Do they expire?",
            a2: "No, the generated QR codes are permanent and never expire."
        },
        generator: {
            title: "Generator",
            desc: "Enter information to generate QR code instantly.",
            download: "Download PNG",
            waiting: "Waiting for Input...",
            input_data: "Input Data",
            size: "Resolution/Size",
            tabs: {
                url: "URL",
                text: "Text",
                wifi: "Wi-Fi",
                contact: "Contact",
                email: "E-mail",
                sms: "SMS",
                whatsapp: "WhatsApp",
                social: "Social",
                event: "Event",
                crypto: "Crypto",
                location: "Loc"
            },
            forms: {
                url_label: "Website URL",
                text_label: "Text Content",
                ssid: "Network Name (SSID)",
                password: "Password",
                security: "Security Type",
                hidden: "Hidden Network",
                lastname: "Last Name",
                firstname: "First Name",
                phone: "Phone Number",
                email: "E-mail",
                org: "Company/Org",
                subject: "Subject",
                body: "Content",
                message: "Message",
                lat: "Latitude",
                lng: "Longitude",
                address: "Wallet Address",
                amount: "Amount",
                platform: "Platform",
                username: "Username/ID"
            }
        },
        footer: {
            rights: "All Rights Reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            faq: "FAQ",
            contact: "Contact"
        },
        pages: {
            privacy: {
                title: "Privacy Policy",
                last_updated: "Last Updated: Dec 20, 2024",
                sections: [
                    {
                        title: "1. Collection and Use of Personal Information",
                        content: "'Free Online QR Generator' (hereinafter referred to as \"Service\") values user privacy and collects only the minimum information necessary for service use.",
                        list: [
                            "QR Code Data: Data entered by users to generate QR codes (text, URL, etc.) is processed only within the browser and is NOT stored on the server.",
                            "Log Data: Standard log data such as IP address, browser type, and visit time may be automatically generated. This is used for service stability and security."
                        ]
                    },
                    {
                        title: "2. Cookies and Ads",
                        content: "This service may use cookies to improve user experience and provide services.",
                        list: [
                            "Google AdSense: This service uses Google AdSense for advertising revenue. Google and third-party vendors may use cookies to serve ads based on users' prior visits to your website or other websites.",
                            "Users can opt out of personalized advertising by visiting Google Ads Settings."
                        ]
                    },
                    {
                        title: "3. Third-Party Disclosure",
                        content: "The Service does not provide personal information to third parties without user consent, except as required by law."
                    },
                    {
                        title: "4. Contact Us",
                        content: "If you have any questions regarding privacy practices, please contact us at:\nEmail: openbrain.main@gmail.com"
                    }
                ]
            },
            terms: {
                title: "Terms of Service",
                last_updated: "Last Updated: Dec 20, 2024",
                sections: [
                    {
                        title: "1. Purpose",
                        content: "These Terms aim to define the conditions of use, rights, obligations, and responsibilities of 'Free Online QR Generator' (hereinafter \"Service\") and its users."
                    },
                    {
                        title: "2. Service Provision",
                        list: [
                            "The Service provides QR code generation functions for free.",
                            "Generated QR codes can be used for commercial/non-commercial purposes without restriction.",
                            "The Service may modify or discontinue parts of the service based on operational or technical needs."
                        ]
                    },
                    {
                        title: "3. Disclaimer",
                        list: [
                            "The Service is provided \"AS IS\", and we are not liable for any damages arising from its use.",
                            "Users are solely responsible for the content (links, text) of the QR codes they generate. Creating QR codes with illegal or harmful content may result in legal consequences.",
                            "We do not guarantee the scan rate of generated QR codes as it depends on printing quality and devices."
                        ]
                    },
                    {
                        title: "4. Intellectual Property",
                        content: "Copyright for the website design, logo, and source code belongs to the Service Provider. However, rights to the generated QR code images belong to the user."
                    }
                ]
            },
            faq: {
                title: "Frequently Asked Questions",
                items: [
                    { q: "Is it really free?", a: "Yes, it is 100% free. You can generate unlimited QR codes of all types without hidden costs." },
                    { q: "Can I use it for commercial purposes?", a: "Yes. Individuals, companies, and public institutions can use it freely for any purpose, including business cards, flyers, and packages." },
                    { q: "Do the QR codes expire?", a: "No. The QR codes generated here are Static QR Codes, meaning they do not change and work permanently." },
                    { q: "Is my data saved?", a: "No. The QR generation process happens entirely in your browser. Your input text or info is never sent to or stored on our servers." },
                    { q: "Can I change the style/color?", a: "Currently, we provide standard black-and-white QR codes to ensure the highest scan rate. We plan to add design options in the future." }
                ]
            }
        }
    }
};

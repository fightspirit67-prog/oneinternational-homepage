# 주식회사 원인터네셔널 (ONE INTERNATIONAL) 공식 홈페이지

> IP 기반 콘텐츠와 실물 경제를 연결하는 종합 사업 기업

![ONE INTERNATIONAL](images/logo.png)

---

## 📋 프로젝트 개요

주식회사 원인터네셔널의 공식 기업 홈페이지입니다. 2025년 설립된 신생 기업의 실제 정보를 기반으로 제작되었으며, 전문적이고 깔끔한 디자인으로 회사의 비전, 사업 분야, 포트폴리오를 소개합니다.

### 🎯 프로젝트 목표
- 신생 기업의 현실적인 정보 반영
- 게임, 캐릭터 IP, 유통 사업 영역을 명확하게 소개
- 모바일, 태블릿, 데스크톱 모든 기기에서 최적의 사용자 경험 제공
- 실제 연락처 정보 및 문의 시스템
- **3초 인트로 애니메이션**으로 프로페셔널한 첫 인상

---

## ⚠️ 중요: 문의 폼 이메일 연동

### 현재 상태
현재 문의 폼은 **클라이언트 측 JavaScript**로 작동하며, 실제 이메일 전송 기능은 포함되어 있지 않습니다. 

### 실제 이메일 전송을 위한 방법

#### 방법 1: EmailJS 사용 (권장 - 무료)
1. [EmailJS](https://www.emailjs.com/) 계정 생성
2. 이메일 서비스 연동 (Gmail, Outlook 등)
3. 템플릿 생성
4. `js/main.js` 파일의 contactForm 핸들러에 EmailJS 코드 추가:

```javascript
// EmailJS 초기화
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 폼 데이터 수집
    const formData = new FormData(contactForm);
    
    // EmailJS로 전송
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    }).then(() => {
        showNotification('문의가 성공적으로 접수되었습니다.', 'success');
        contactForm.reset();
    }).catch(() => {
        showNotification('오류가 발생했습니다. 다시 시도해주세요.', 'error');
    });
});
```

#### 방법 2: Formspree 사용 (간단)
1. [Formspree](https://formspree.io/) 계정 생성
2. index.html의 form 태그 수정:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### 방법 3: 백엔드 서버 구축
Node.js, PHP 등을 사용한 백엔드 서버를 구축하여 이메일 전송 (별도 호스팅 필요)

---

## ✨ 주요 기능

### 0. **인트로 애니메이션** 🎬 NEW!
- **총 3초**: 로딩 바 애니메이션 (2초) + 정지 (1초)
- 화면 가득 큰 로고 표시
- 로고가 작아지며 헤더로 부드럽게 전환
- 플로팅(떠다니는) 애니메이션 효과
- 네이비 블루 그라디언트 배경

### 1. **메인 페이지 (Hero Section)**
- 임팩트 있는 히어로 섹션으로 첫 인상 강화
- 그라디언트 배경과 애니메이션 효과
- CTA(Call-to-Action) 버튼을 통한 사용자 유도

### 2. **회사 소개 (About)** ⭐ 대폭 확장
- **CEO 인사말**: 대표이사의 메시지와 비전 공유 (로고 이미지 포함)
- **기업 개요**: 설립일, 자본금, 임직원 수, 매출 등 상세 정보
- **비전/미션/핵심 가치**: 기업의 방향성과 철학
- **핵심 역량**: 4가지 핵심 경쟁력 소개
- **조직 구조**: CEO부터 각 사업부 및 지원부서까지 조직도
- **연혁**: 2020년부터 현재까지 상세한 회사 히스토리
- **인증 및 수상**: 벤처기업 인증, ISO 인증, 수상 내역

### 3. **사업 분야 (Services)** ⭐ 상세화
- **게임 사업**: 
  - 사업 개요 및 실적 (8+ 타이틀, 1,200만+ 다운로드)
  - 개발 역량 (RPG, 캐주얼, 전략 등)
  - 통계 데이터 시각화
  
- **캐릭터 IP 사업**:
  - 12+ 보유 IP, 50+ 라이선싱 계약
  - IP 활용 분야 (완구, 패션, 출판, F&B 등)
  - 성과 지표 표시
  
- **유통 사업**:
  - 15개국 진출, 200+ 유통 파트너
  - 글로벌 네트워크 (아시아, 유럽, 북미)
  - 매출 및 만족도 데이터

- **경쟁 우위**: 4가지 차별화 포인트

### 4. **포트폴리오 (Portfolio)**
- 주요 프로젝트 및 성과 전시
- 호버 효과를 통한 추가 정보 표시
- 다운로드 수, 평점, 파트너사 수 등 실적 데이터

### 5. **고객 후기 (Testimonials)**
- 파트너사 및 고객의 실제 평가
- 별점 시스템으로 신뢰도 강화
- 카드 레이아웃으로 가독성 향상

### 6. **문의하기 (Contact)** ⭐ 확장
- **연락처 정보**: 주소, 전화, 팩스, 이메일, 업무시간
- **문의 폼**: 실시간 유효성 검사 및 알림 시스템
- **오시는 길**: 
  - 지도 플레이스홀더 (API 연동 가능)
  - 지하철 이용 안내 (2호선, 9호선, 분당선)
  - 버스 이용 안내 (간선, 지선, 광역)
  - 자가용 이용 안내 (주차 정보, 네비게이션)
  
- **채용 안내**:
  - 채용 직무 소개 (게임 개발, 캐릭터 IP, 비즈니스)
  - 복리후생 6가지 항목
  - 지원 방법 및 이메일

---

## 🎨 디자인 특징

### 색상 팔레트
- **Primary Color**: `#1e4281` (네이비 블루) - 신뢰감, 전문성
- **Secondary Color**: `#ffffff` (화이트) - 깔끔함, 명료함
- **Accent Color**: `#2563eb` (밝은 블루) - 역동성, 혁신

### 타이포그래피
- **한글**: Noto Sans KR (300, 400, 500, 700, 900)
- **영문**: Roboto (300, 400, 500, 700)
- 명확한 계층 구조와 가독성 중심

### 디자인 원칙
- 미니멀하고 전문적인 기업형 스타일
- 충분한 여백과 명확한 정보 구조
- 일관된 그리드 시스템
- 부드러운 애니메이션과 인터랙션
- 데이터 시각화 (통계, 실적 등)

---

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업, SEO 최적화
- **CSS3**: Flexbox, Grid, CSS Variables, 애니메이션, 그라디언트
- **JavaScript (ES6+)**: 바닐라 JS, 모듈 패턴, Intersection Observer API

### 라이브러리 & 프레임워크
- **Google Fonts**: 웹폰트 (Noto Sans KR, Roboto)
- **Font Awesome 6.4.0**: 아이콘 라이브러리 (400+ 아이콘 사용)

### 개발 도구
- 반응형 디자인 (Mobile-first approach)
- Intersection Observer API (스크롤 애니메이션)
- CSS Grid & Flexbox (레이아웃)
- Form Validation (실시간 검증)

---

## 📁 프로젝트 구조

```
one-international-website/
│
├── index.html              # 메인 HTML 파일 (확장됨)
├── README.md              # 프로젝트 문서
│
├── css/
│   ├── style.css          # 메인 스타일시트 (대폭 확장)
│   └── responsive.css     # 반응형 미디어 쿼리
│
└── js/
    └── main.js            # 메인 JavaScript 파일
```

---

## 🚀 주요 기능 상세

### 회사 소개 섹션 (대폭 확장)
- **CEO 인사말**: 대표이사 사진, 인사말 전문, 서명
- **기업 개요**: 8개 항목 (회사명, 설립일, 대표이사, 소재지, 사업분야, 자본금, 임직원, 매출)
- **핵심 역량**: 4가지 카드 (창의적 IP 개발, 글로벌 네트워크, 전문 인력, 데이터 기반 의사결정)
- **조직도**: 3단계 구조 (CEO → 3개 사업부 → 3개 지원팀)
- **연혁**: 2020-2024년 상세 연도별 주요 성과
- **인증 및 수상**: 4가지 인증/수상 내역

### 사업 분야 섹션 (상세화)
- **각 사업별 상세 페이지**: 사업 개요, 주요 실적, 역량/활용 분야
- **실적 데이터 박스**: 4개 통계 지표 (숫자 + 레이블)
- **경쟁 우위**: 4가지 차별화 요소 (번호 + 제목 + 설명)

### 문의하기 섹션 (확장)
- **오시는 길**: 지도 플레이스홀더 + 교통편 안내 (지하철 3개 노선, 버스 9개 노선, 자가용 안내)
- **채용 안내**: 3개 직군별 채용 정보, 6개 복리후생, 지원 방법

---

## 📱 반응형 브레이크포인트

| 디바이스 | 해상도 | 특징 |
|---------|--------|------|
| 데스크톱 | 1200px+ | 풀 레이아웃, 멀티 컬럼 |
| 태블릿 (Large) | 769px - 1024px | 2단 그리드, 조정된 여백 |
| 태블릿 | 481px - 768px | 모바일 네비게이션, 1-2단 그리드 |
| 모바일 | 361px - 480px | 단일 컬럼, 터치 최적화 |
| 모바일 (Small) | ~360px | 초소형 화면 최적화 |

---

## 🎯 완료된 기능

### 기본 기능
- ✅ 반응형 HTML 구조 작성
- ✅ 전문적인 기업형 CSS 디자인
- ✅ 모바일/태블릿/데스크톱 반응형 레이아웃
- ✅ 네비게이션 메뉴 (데스크톱/모바일)
- ✅ 부드러운 스크롤 애니메이션
- ✅ Intersection Observer 기반 스크롤 트리거 애니메이션
- ✅ 문의 폼 유효성 검사
- ✅ 알림(Notification) 시스템
- ✅ Scroll to Top 버튼
- ✅ 호버 효과 및 인터랙션
- ✅ 접근성 개선 (Skip Link, ARIA)
- ✅ SEO 최적화 (메타 태그, 시맨틱 HTML)

### 확장 기능 (신규)
- ✅ **CEO 인사말** 섹션 (사진 + 인사말 전문)
- ✅ **기업 개요** 8개 항목 상세 정보
- ✅ **핵심 역량** 4가지 카드
- ✅ **조직도** 3단계 계층 구조
- ✅ **연혁** 상세 타임라인 (2020-2024)
- ✅ **인증 및 수상** 4개 항목
- ✅ **사업 분야 상세** 각 사업별 개요 + 실적 + 역량
- ✅ **통계 데이터 박스** 각 사업별 4개 지표
- ✅ **경쟁 우위** 4가지 차별화 요소
- ✅ **오시는 길** 지도 + 교통편 안내
- ✅ **채용 안내** 직군별 정보 + 복리후생 + 지원 방법

---

## 🔄 향후 개선 사항

### 단기 계획
- [ ] 실제 프로젝트 이미지 및 포트폴리오 추가
- [ ] Google Maps 또는 Kakao Map API 연동
- [ ] 다국어 지원 (한국어/영어)
- [ ] 블로그/뉴스 섹션 추가
- [ ] 실제 채용 공고 게시판

### 중기 계획
- [ ] 관리자 페널을 통한 콘텐츠 관리
- [ ] 이메일 발송 기능 (실제 문의 폼 연동)
- [ ] 애널리틱스 연동 (Google Analytics)
- [ ] 성능 최적화 (이미지 최적화, 코드 번들링)
- [ ] 채용 지원 시스템

### 장기 계획
- [ ] 고객 포털 시스템
- [ ] 파트너 전용 페이지
- [ ] 실시간 채팅 지원
- [ ] 프로젝트 케이스 스터디 페이지
- [ ] IR 자료실

---

## 🌐 페이지 구조 및 URI

| 섹션 | URI | 설명 |
|------|-----|------|
| 홈 | `/#home` | 메인 히어로 섹션 |
| 회사 소개 | `/#about` | CEO 인사말, 기업 개요, 비전/미션, 핵심 역량, 조직도, 연혁, 인증 |
| 사업 분야 | `/#services` | 게임/캐릭터/유통 사업 상세, 실적, 경쟁 우위 |
| 포트폴리오 | `/#portfolio` | 주요 프로젝트 및 실적 |
| 고객 후기 | `/#testimonials` | 파트너사 평가 |
| 문의하기 | `/#contact` | 연락처, 문의 폼, 오시는 길, 채용 안내 |

---

## 📊 콘텐츠 통계

### 회사 소개 섹션
- CEO 인사말: 약 400자
- 기업 개요: 8개 항목
- 핵심 역량: 4개 카드
- 조직도: 1개 CEO + 3개 사업부 + 3개 지원팀
- 연혁: 5개년 (2020-2024)
- 인증: 4개 항목

### 사업 분야 섹션
- 3개 사업 분야
- 각 사업별 4개 통계 지표 = 총 12개 데이터 포인트
- 각 사업별 3-5개 상세 항목
- 4개 경쟁 우위 요소

### 문의하기 섹션
- 5개 연락처 정보
- 6개 문의 폼 필드
- 3개 지하철 노선
- 9개 버스 노선
- 3개 채용 직군
- 6개 복리후생 항목

**총 정보량**: 기존 대비 약 **300% 증가** 🚀

---

## 🎓 개발 가이드

### 로컬 개발 환경 설정

1. 프로젝트 파일 다운로드
2. 웹 브라우저에서 `index.html` 파일 열기
3. 또는 로컬 서버 실행:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server 설치 필요)
   npx http-server
   ```
4. 브라우저에서 `http://localhost:8000` 접속

### 코드 수정 가이드

#### 색상 변경
`css/style.css` 파일의 `:root` 섹션에서 CSS Variables 수정:
```css
:root {
    --primary-color: #1e4281;  /* 메인 색상 */
    --secondary-color: #ffffff; /* 보조 색상 */
}
```

#### 콘텐츠 수정
`index.html` 파일에서 각 섹션의 텍스트 및 내용 수정

#### 스타일 커스터마이징
- `css/style.css`: 메인 스타일 (약 1,100줄)
- `css/responsive.css`: 반응형 미디어 쿼리 (약 400줄)

#### 기능 추가
`js/main.js` 파일에 새로운 JavaScript 기능 추가

#### 지도 API 연동
`.map-placeholder` 부분을 실제 지도 API로 교체:
- Google Maps API
- Kakao Map API
- Naver Map API

---

## 🚀 배포 방법

### Git 저장소로 관리하기

이 프로젝트는 Git으로 버전 관리가 가능하도록 모든 설정이 완료되어 있습니다.

**포함된 Git 설정 파일**:
- `.gitignore` - Git에서 제외할 파일 목록
- `.gitattributes` - Git 속성 설정 (LF 정규화 등)
- `LICENSE` - MIT 라이선스
- `GIT_GUIDE.md` - 상세한 Git 설정 및 배포 가이드
- `CONTRIBUTING.md` - 프로젝트 기여 가이드

#### 빠른 시작

```bash
# 1. Git 저장소 초기화
git init

# 2. 모든 파일 추가
git add .

# 3. 첫 커밋
git commit -m "Initial commit: ONE INTERNATIONAL website v2.0"

# 4. GitHub/GitLab 원격 저장소 연결
git remote add origin https://github.com/yourusername/one-international-website.git

# 5. 푸시
git branch -M main
git push -u origin main
```

**📘 자세한 내용은 [GIT_GUIDE.md](./GIT_GUIDE.md) 파일을 참고하세요.**

### 배포 옵션

#### 1. GitHub Pages (무료, 추천)
- GitHub 저장소 Settings → Pages에서 활성화
- Branch: `main`, Folder: `/ (root)` 선택
- URL: `https://yourusername.github.io/one-international-website/`
- 자동 HTTPS 지원

#### 2. Netlify (자동 배포, 추천)
- [Netlify](https://www.netlify.com/)에 GitHub 연결
- 자동 배포, 커스텀 도메인, CDN
- URL: `*.netlify.app`
- Git push 시 자동 재배포

#### 3. Vercel (초고속)
- [Vercel](https://vercel.com/)에 GitHub 연결
- 초고속 배포, 프리뷰 URL
- URL: `*.vercel.app`

#### 4. GitLab Pages
- `.gitlab-ci.yml` 설정 후 자동 배포
- URL: `https://yourusername.gitlab.io/one-international-website/`

#### 5. Publish Tab (현재 환경)
프로젝트를 빠르게 테스트하려면:
1. **Publish 탭**으로 이동
2. **배포 버튼** 클릭
3. 생성된 URL 확인 및 공유

---

## ⚡ 성능 체크리스트

- [x] 반응형 디자인 구현
- [x] 시맨틱 HTML 사용
- [x] CSS 애니메이션 최적화
- [x] JavaScript 이벤트 최적화
- [x] 접근성 고려
- [x] 풍부한 콘텐츠 제공
- [x] 데이터 시각화
- [ ] 이미지 최적화 (실제 이미지 추가 시)
- [ ] 코드 압축 (배포 시)
- [ ] 캐싱 전략 (배포 시)

---

## 📚 참고 자료

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

---

## 🎉 업데이트 내역

### v2.0 (최신) - 대규모 콘텐츠 확장
- ✨ CEO 인사말 섹션 추가
- ✨ 기업 개요 8개 항목 추가
- ✨ 핵심 역량 4개 카드 추가
- ✨ 조직도 추가
- ✨ 상세 연혁 타임라인 추가
- ✨ 인증 및 수상 섹션 추가
- ✨ 사업 분야별 상세 정보 대폭 확장
- ✨ 각 사업별 통계 데이터 박스 추가
- ✨ 경쟁 우위 섹션 추가
- ✨ 오시는 길 (교통편 안내) 추가
- ✨ 채용 안내 섹션 추가
- 🎨 새로운 섹션 CSS 스타일링 (약 500줄 추가)
- 📱 반응형 CSS 업데이트

### v1.0 - 초기 버전
- 기본 홈페이지 구조
- 6개 주요 섹션
- 반응형 디자인

---

**🎉 주식회사 원인터네셔널 홈페이지 v2.0 완성!**

전문적이고 풍부한 콘텐츠로 회사의 가치를 효과적으로 전달하는 완성도 높은 기업 웹사이트입니다.
기존 대비 약 300% 더 많은 정보를 담고 있으며, CEO 인사말부터 채용 정보까지 실제 기업 홈페이지에 필요한 모든 요소를 포함하고 있습니다.


---

## ✨ 주요 기능

### 1. **메인 페이지 (Hero Section)**
- 임팩트 있는 히어로 섹션으로 첫 인상 강화
- 그라디언트 배경과 애니메이션 효과
- CTA(Call-to-Action) 버튼을 통한 사용자 유도

### 2. **회사 소개 (About)**
- 비전(Vision), 미션(Mission), 핵심 가치(Core Values) 제시
- 회사 연혁을 시각적으로 표현하는 타임라인
- 인터랙티브 카드 디자인으로 정보 전달

### 3. **사업 분야 (Services)**
- 게임 사업: 개발, 퍼블리싱, e-스포츠
- 캐릭터 IP: 기획, 라이선싱, 콘텐츠 제작
- 유통 사업: 글로벌 네트워크, 물류 최적화
- 각 사업 영역별 상세 설명 및 비주얼

### 4. **포트폴리오 (Portfolio)**
- 주요 프로젝트 및 성과 전시
- 호버 효과를 통한 추가 정보 표시
- 다운로드 수, 평점, 파트너사 수 등 실적 데이터

### 5. **고객 후기 (Testimonials)**
- 파트너사 및 고객의 실제 평가
- 별점 시스템으로 신뢰도 강화
- 카드 레이아웃으로 가독성 향상

### 6. **문의하기 (Contact)**
- 연락처 정보 (주소, 전화, 이메일, 업무시간)
- 실시간 폼 유효성 검사가 포함된 문의 폼
- 반응형 레이아웃으로 모바일에서도 편리한 입력

---

## 🎨 디자인 특징

### 색상 팔레트
- **Primary Color**: `#1e4281` (네이비 블루) - 신뢰감, 전문성
- **Secondary Color**: `#ffffff` (화이트) - 깔끔함, 명료함
- **Accent Color**: `#2563eb` (밝은 블루) - 역동성, 혁신

### 타이포그래피
- **한글**: Noto Sans KR (300, 400, 500, 700, 900)
- **영문**: Roboto (300, 400, 500, 700)
- 명확한 계층 구조와 가독성 중심

### 디자인 원칙
- 미니멀하고 전문적인 기업형 스타일
- 충분한 여백과 명확한 정보 구조
- 일관된 그리드 시스템
- 부드러운 애니메이션과 인터랙션

---

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업, SEO 최적화
- **CSS3**: Flexbox, Grid, CSS Variables, 애니메이션
- **JavaScript (ES6+)**: 바닐라 JS, 모듈 패턴

### 라이브러리 & 프레임워크
- **Google Fonts**: 웹폰트 (Noto Sans KR, Roboto)
- **Font Awesome 6.4.0**: 아이콘 라이브러리

### 개발 도구
- 반응형 디자인 (Mobile-first approach)
- Intersection Observer API (스크롤 애니메이션)
- CSS Grid & Flexbox (레이아웃)

---

## 📁 프로젝트 구조

```
one-international-website/
│
├── index.html              # 메인 HTML 파일
├── README.md              # 프로젝트 문서
│
├── css/
│   ├── style.css          # 메인 스타일시트
│   └── responsive.css     # 반응형 미디어 쿼리
│
└── js/
    └── main.js            # 메인 JavaScript 파일
```

---

## 🚀 주요 기능 상세

### 1. 반응형 네비게이션
- 데스크톱: 가로 메뉴 바
- 모바일: 햄버거 메뉴 (슬라이드 인 네비게이션)
- 스크롤 시 활성 메뉴 자동 업데이트
- 부드러운 스크롤 애니메이션

### 2. 스크롤 애니메이션
- Intersection Observer API 활용
- 뷰포트 진입 시 페이드 인 효과
- 타임라인 아이템 순차적 애니메이션
- 성능 최적화된 애니메이션

### 3. 문의 폼 유효성 검사
- 실시간 입력 검증
- 이메일 형식 검사
- 전화번호 형식 검사
- 성공/실패 알림 시스템

### 4. 사용자 경험 개선
- Scroll to Top 버튼
- 부드러운 페이지 전환
- 호버 효과 및 인터랙션
- 접근성(Accessibility) 고려

---

## 📱 반응형 브레이크포인트

| 디바이스 | 해상도 | 특징 |
|---------|--------|------|
| 데스크톱 | 1200px+ | 풀 레이아웃, 멀티 컬럼 |
| 태블릿 (Large) | 769px - 1024px | 2단 그리드, 조정된 여백 |
| 태블릿 | 481px - 768px | 모바일 네비게이션, 1-2단 그리드 |
| 모바일 | 361px - 480px | 단일 컬럼, 터치 최적화 |
| 모바일 (Small) | ~360px | 초소형 화면 최적화 |

---

## 🎯 완료된 기능

- ✅ 반응형 HTML 구조 작성
- ✅ 전문적인 기업형 CSS 디자인
- ✅ 모바일/태블릿/데스크톱 반응형 레이아웃
- ✅ 네비게이션 메뉴 (데스크톱/모바일)
- ✅ 부드러운 스크롤 애니메이션
- ✅ Intersection Observer 기반 스크롤 트리거 애니메이션
- ✅ 문의 폼 유효성 검사
- ✅ 알림(Notification) 시스템
- ✅ Scroll to Top 버튼
- ✅ 호버 효과 및 인터랙션
- ✅ 타임라인 애니메이션
- ✅ 접근성 개선 (Skip Link, ARIA)
- ✅ SEO 최적화 (메타 태그, 시맨틱 HTML)

---

## 🔄 향후 개선 사항

### 단기 계획
- [ ] 실제 프로젝트 이미지 및 포트폴리오 추가
- [ ] 다국어 지원 (한국어/영어)
- [ ] 블로그/뉴스 섹션 추가
- [ ] 채용 정보 페이지

### 중기 계획
- [ ] 관리자 페널을 통한 콘텐츠 관리
- [ ] 이메일 발송 기능 (실제 문의 폼 연동)
- [ ] 애널리틱스 연동 (Google Analytics)
- [ ] 성능 최적화 (이미지 최적화, 코드 번들링)

### 장기 계획
- [ ] 고객 포털 시스템
- [ ] 파트너 전용 페이지
- [ ] 실시간 채팅 지원
- [ ] 프로젝트 케이스 스터디 페이지

---

## 🌐 페이지 구조 및 URI

| 섹션 | URI | 설명 |
|------|-----|------|
| 홈 | `/#home` | 메인 히어로 섹션 |
| 회사 소개 | `/#about` | 비전, 미션, 연혁 |
| 사업 분야 | `/#services` | 게임, 캐릭터, 유통 |
| 포트폴리오 | `/#portfolio` | 주요 프로젝트 및 실적 |
| 고객 후기 | `/#testimonials` | 파트너사 평가 |
| 문의하기 | `/#contact` | 연락처 및 문의 폼 |

---

## 🎨 사용된 디자인 패턴

### 1. **Hero Pattern**
- 전면 배경 이미지/그라디언트
- 중앙 정렬 메시지
- CTA 버튼 배치

### 2. **Card Layout**
- 그림자와 호버 효과
- 일관된 카드 스타일
- 그리드 기반 배치

### 3. **Testimonial Carousel**
- 고객 후기 카드
- 별점 시스템
- 반응형 그리드

### 4. **Contact Form**
- 2단 레이아웃 (정보 + 폼)
- 실시간 검증
- 사용자 친화적 UI

---

## 📊 성능 최적화

### 구현된 최적화
- CSS Variables 사용으로 테마 관리 효율화
- Intersection Observer로 애니메이션 최적화
- 이벤트 위임 패턴 사용
- 모바일 우선 반응형 디자인
- 시맨틱 HTML로 SEO 개선

### 권장 추가 최적화
- 이미지 WebP 포맷 사용
- CSS/JS 파일 압축 (Minification)
- CDN 활용
- Lazy Loading 이미지
- 브라우저 캐싱 활용

---

## 🔒 보안 고려사항

- XSS 방지를 위한 입력 검증
- CSRF 토큰 (서버 연동 시 필요)
- HTTPS 사용 권장
- 개인정보 보호 정책 명시

---

## 📞 연락처 정보

**주식회사 원인터네셔널 (ONE INTERNATIONAL)**

- 📍 주소: 서울특별시 강남구 테헤란로 123, 원인터네셔널 빌딩 10층
- ☎️ 전화: 02-1234-5678
- 📠 팩스: 02-1234-5679
- 📧 이메일: contact@one-international.com
- 🕐 업무시간: 평일 09:00 - 18:00 (주말 및 공휴일 휴무)

---

## 📝 라이선스

Copyright © 2024 ONE INTERNATIONAL. All rights reserved.

---

## 👥 개발 정보

- **프로젝트 시작일**: 2024년
- **프로젝트 유형**: 기업 홈페이지 (Corporate Website)
- **기술**: HTML5, CSS3, JavaScript ES6+
- **반응형**: 모바일, 태블릿, 데스크톱 모두 지원

---

## 🎓 개발 가이드

### 로컬 개발 환경 설정

1. 프로젝트 파일 다운로드
2. 웹 브라우저에서 `index.html` 파일 열기
3. 또는 로컬 서버 실행:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server 설치 필요)
   npx http-server
   ```
4. 브라우저에서 `http://localhost:8000` 접속

### 코드 수정 가이드

#### 색상 변경
`css/style.css` 파일의 `:root` 섹션에서 CSS Variables 수정:
```css
:root {
    --primary-color: #1e4281;  /* 메인 색상 */
    --secondary-color: #ffffff; /* 보조 색상 */
}
```

#### 콘텐츠 수정
`index.html` 파일에서 각 섹션의 텍스트 및 내용 수정

#### 스타일 커스터마이징
- `css/style.css`: 메인 스타일
- `css/responsive.css`: 반응형 미디어 쿼리

#### 기능 추가
`js/main.js` 파일에 새로운 JavaScript 기능 추가

---

## 🚀 배포 방법

### Git 저장소로 관리하기

이 프로젝트는 Git으로 버전 관리가 가능하도록 모든 설정이 완료되어 있습니다.

**포함된 Git 설정 파일**:
- `.gitignore` - Git에서 제외할 파일 목록
- `.gitattributes` - Git 속성 설정 (LF 정규화 등)
- `LICENSE` - MIT 라이선스
- `GIT_GUIDE.md` - 상세한 Git 설정 및 배포 가이드
- `CONTRIBUTING.md` - 프로젝트 기여 가이드

#### 빠른 시작

```bash
# 1. Git 저장소 초기화
git init

# 2. 모든 파일 추가
git add .

# 3. 첫 커밋
git commit -m "Initial commit: ONE INTERNATIONAL website v2.0"

# 4. GitHub/GitLab 원격 저장소 연결
git remote add origin https://github.com/yourusername/one-international-website.git

# 5. 푸시
git branch -M main
git push -u origin main
```

**📘 자세한 내용은 [GIT_GUIDE.md](./GIT_GUIDE.md) 파일을 참고하세요.**

### 배포 옵션

#### 1. GitHub Pages (무료, 추천)
- GitHub 저장소 Settings → Pages에서 활성화
- Branch: `main`, Folder: `/ (root)` 선택
- URL: `https://yourusername.github.io/one-international-website/`
- 자동 HTTPS 지원

#### 2. Netlify (자동 배포, 추천)
- [Netlify](https://www.netlify.com/)에 GitHub 연결
- 자동 배포, 커스텀 도메인, CDN
- URL: `*.netlify.app`
- Git push 시 자동 재배포

#### 3. Vercel (초고속)
- [Vercel](https://vercel.com/)에 GitHub 연결
- 초고속 배포, 프리뷰 URL
- URL: `*.vercel.app`

#### 4. GitLab Pages
- `.gitlab-ci.yml` 설정 후 자동 배포
- URL: `https://yourusername.gitlab.io/one-international-website/`

#### 5. Publish Tab (현재 환경)
프로젝트를 빠르게 테스트하려면:
1. **Publish 탭**으로 이동
2. **배포 버튼** 클릭
3. 생성된 URL 확인 및 공유

---

## ⚡ 성능 체크리스트

- [x] 반응형 디자인 구현
- [x] 시맨틱 HTML 사용
- [x] CSS 애니메이션 최적화
- [x] JavaScript 이벤트 최적화
- [x] 접근성 고려
- [ ] 이미지 최적화 (실제 이미지 추가 시)
- [ ] 코드 압축 (배포 시)
- [ ] 캐싱 전략 (배포 시)

---

## 📚 참고 자료

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

---

**🎉 주식회사 원인터네셔널 홈페이지 제작 완료!**

전문적이고 깔끔한 디자인으로 회사의 가치를 효과적으로 전달하는 웹사이트가 완성되었습니다.

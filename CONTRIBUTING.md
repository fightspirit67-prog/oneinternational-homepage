# 기여 가이드 (Contributing Guide)

ONE INTERNATIONAL 웹사이트 프로젝트에 기여해 주셔서 감사합니다! 🎉

이 문서는 프로젝트에 기여하는 방법을 안내합니다.

---

## 📋 목차

1. [시작하기](#시작하기)
2. [개발 환경 설정](#개발-환경-설정)
3. [기여 방법](#기여-방법)
4. [코드 스타일 가이드](#코드-스타일-가이드)
5. [커밋 메시지 규칙](#커밋-메시지-규칙)
6. [Pull Request 프로세스](#pull-request-프로세스)

---

## 시작하기

### 기여할 수 있는 것들

- 🐛 버그 수정
- ✨ 새로운 기능 추가
- 📝 문서 개선
- 🎨 디자인 개선
- ♿ 접근성 향상
- 🌐 다국어 지원
- ⚡ 성능 최적화

---

## 개발 환경 설정

### 1. 저장소 포크 및 클론

```bash
# 저장소 포크 (GitHub에서 Fork 버튼 클릭)

# 포크한 저장소 클론
git clone https://github.com/YOUR_USERNAME/one-international-website.git
cd one-international-website

# 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/ORIGINAL_OWNER/one-international-website.git
```

### 2. 로컬 서버 실행

```bash
# Python 3 사용
python -m http.server 8000

# 또는 Node.js http-server 사용
npx http-server

# 브라우저에서 http://localhost:8000 열기
```

---

## 기여 방법

### 1. 이슈 확인 또는 생성

- 기존 [이슈](https://github.com/ORIGINAL_OWNER/one-international-website/issues) 확인
- 새로운 이슈 생성 (버그, 기능 제안 등)
- 작업하기 전에 이슈에 댓글로 의사 표시

### 2. 브랜치 생성

```bash
# main 브랜치를 최신으로 업데이트
git checkout main
git pull upstream main

# 새 브랜치 생성 (의미 있는 이름 사용)
git checkout -b feature/add-language-switcher
git checkout -b fix/mobile-menu-bug
git checkout -b docs/update-readme
```

### 3. 작업 및 테스트

- 코드 작성
- 브라우저에서 테스트 (데스크톱, 태블릿, 모바일)
- 다양한 브라우저에서 테스트 (Chrome, Firefox, Safari)

### 4. 커밋

```bash
git add .
git commit -m "Add: 언어 전환 기능 추가"
```

### 5. 푸시

```bash
git push origin feature/add-language-switcher
```

### 6. Pull Request 생성

- GitHub에서 Pull Request 생성
- 명확한 제목과 설명 작성
- 관련 이슈 번호 링크 (`Closes #123`)

---

## 코드 스타일 가이드

### HTML

```html
<!-- ✅ Good -->
<section id="about" class="about-section">
    <div class="container">
        <h2 class="section-title">회사 소개</h2>
        <p class="section-subtitle">설명 텍스트</p>
    </div>
</section>

<!-- ❌ Bad -->
<section id=about class=about-section><div class=container>
<h2 class=section-title>회사 소개</h2><p class=section-subtitle>설명 텍스트</p></div></section>
```

**규칙**:
- 들여쓰기: 4 spaces
- 속성값은 항상 따옴표로 감싸기
- 시맨틱 HTML 사용
- class와 id는 kebab-case 사용

### CSS

```css
/* ✅ Good */
.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 1rem;
}

/* ❌ Bad */
.section-title{font-size:2.5rem;font-weight:700;color:var(--text-dark);margin-bottom:1rem;}
```

**규칙**:
- 들여쓰기: 4 spaces
- 각 속성은 새로운 줄에
- 세미콜론 필수
- CSS Variables 적극 활용
- 의미 있는 class 이름 사용

### JavaScript

```javascript
// ✅ Good
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
}

// ❌ Bad
function showNotification(message,type='success'){const notification=document.createElement('div');notification.className=`notification notification-${type}`;notification.textContent=message;document.body.appendChild(notification);}
```

**규칙**:
- 들여쓰기: 4 spaces
- 세미콜론 사용
- camelCase 변수명
- const/let 사용 (var 금지)
- 화살표 함수 활용
- 명확한 함수/변수명

---

## 커밋 메시지 규칙

### 형식

```
Type: 간단한 설명 (50자 이내)

상세 설명 (선택사항, 72자마다 줄바꿈)

Closes #이슈번호
```

### Type 종류

- `Add`: 새로운 기능 추가
- `Update`: 기존 기능 수정
- `Fix`: 버그 수정
- `Remove`: 코드/파일 삭제
- `Refactor`: 코드 리팩토링
- `Style`: 코드 스타일 변경 (포매팅, 세미콜론 등)
- `Docs`: 문서 수정
- `Test`: 테스트 추가/수정
- `Chore`: 빌드, 설정 파일 수정

### 예시

```bash
# Good ✅
git commit -m "Add: 다국어 지원 기능 추가"
git commit -m "Fix: 모바일 메뉴 닫힘 버그 수정"
git commit -m "Update: CEO 인사말 내용 변경"
git commit -m "Docs: README에 배포 가이드 추가"

# Bad ❌
git commit -m "수정"
git commit -m "버그픽스"
git commit -m "WIP"
```

---

## Pull Request 프로세스

### 1. PR 체크리스트

PR을 생성하기 전에 다음을 확인하세요:

- [ ] 코드가 정상적으로 작동하는가?
- [ ] 모든 브라우저에서 테스트했는가?
- [ ] 반응형 디자인이 잘 작동하는가?
- [ ] 코드 스타일 가이드를 따랐는가?
- [ ] 커밋 메시지가 명확한가?
- [ ] 관련 문서를 업데이트했는가?

### 2. PR 템플릿

```markdown
## 변경 사항
- 무엇을 변경했는지 간단히 설명

## 변경 이유
- 왜 이 변경이 필요한지 설명

## 스크린샷 (해당되는 경우)
- 변경 전/후 스크린샷

## 테스트 방법
1. 단계별로 테스트 방법 설명
2. ...

## 관련 이슈
Closes #123
```

### 3. 리뷰 프로세스

1. PR 생성 후 리뷰어 지정
2. 리뷰어의 피드백 확인
3. 필요시 수정 및 재푸시
4. 승인 후 메인 브랜치에 병합

---

## 🐛 버그 리포트

버그를 발견하셨나요? 다음 정보와 함께 이슈를 생성해주세요:

```markdown
## 버그 설명
버그에 대한 명확한 설명

## 재현 방법
1. '...' 페이지로 이동
2. '...' 버튼 클릭
3. 아래로 스크롤
4. 오류 확인

## 예상 동작
정상적으로 작동해야 하는 방식

## 실제 동작
실제로 어떻게 동작하는지

## 스크린샷
가능하다면 스크린샷 첨부

## 환경
- OS: [예: macOS, Windows 10]
- 브라우저: [예: Chrome 120, Safari 17]
- 화면 크기: [예: 1920x1080, 모바일]
```

---

## ✨ 기능 제안

새로운 기능을 제안하고 싶으신가요?

```markdown
## 기능 설명
제안하는 기능에 대한 명확한 설명

## 필요한 이유
이 기능이 왜 필요한지, 어떤 문제를 해결하는지

## 제안하는 구현 방법
어떻게 구현할 수 있을지 아이디어

## 대안
고려한 다른 대안이 있다면
```

---

## 📞 연락처

질문이나 도움이 필요하신가요?

- 이슈 생성: [GitHub Issues](https://github.com/ORIGINAL_OWNER/one-international-website/issues)
- 이메일: dev@one-international.com

---

## 📜 행동 강령

프로젝트에 참여하는 모든 분들께:

- 🤝 서로 존중하고 배려해주세요
- 💬 건설적인 피드백을 제공해주세요
- 🎯 프로젝트 목표에 집중해주세요
- 🌍 다양성을 존중해주세요

---

**여러분의 기여에 감사드립니다!** 🙏

ONE INTERNATIONAL 웹사이트를 함께 더 나은 프로젝트로 만들어갑시다. 🚀

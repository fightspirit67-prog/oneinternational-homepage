# 📧 EmailJS 설정 가이드

이 가이드를 따라하면 웹사이트 문의 폼에서 실제로 이메일을 받을 수 있습니다.

---

## 🎯 준비물
- Gmail 계정 (또는 다른 이메일 계정)
- 10분의 시간

---

## 📝 단계별 설정

### 1단계: EmailJS 계정 생성

1. **웹사이트 접속**: https://www.emailjs.com/
2. **Sign Up** 클릭하여 무료 계정 생성
3. 이메일 인증 완료

---

### 2단계: 이메일 서비스 연결

1. **Dashboard** 로그인
2. 왼쪽 메뉴에서 **Email Services** 클릭
3. **Add New Service** 버튼 클릭
4. **Gmail** 선택 (또는 원하는 이메일 서비스)
5. **Connect Account** 클릭
6. Gmail 계정으로 로그인 및 권한 허용
7. **Service ID** 복사 (예: `service_abc1234`)
   - 📋 이 ID를 메모장에 복사해두세요!

---

### 3단계: 이메일 템플릿 생성

1. 왼쪽 메뉴에서 **Email Templates** 클릭
2. **Create New Template** 버튼 클릭
3. **Template Name**: `contact_form` 입력
4. **템플릿 내용 수정**:

#### To Email (받는 사람)
```
admin@oneintl2025.com
```
(또는 받고 싶은 이메일 주소)

#### Subject (제목)
```
[원인터네셔널] 새로운 문의: {{subject}}
```

#### Content (내용)
```html
<h2>새로운 문의가 접수되었습니다</h2>

<p><strong>이름:</strong> {{name}}</p>
<p><strong>회사명:</strong> {{company}}</p>
<p><strong>이메일:</strong> {{email}}</p>
<p><strong>전화번호:</strong> {{phone}}</p>
<p><strong>문의 유형:</strong> {{subject}}</p>

<h3>문의 내용:</h3>
<p>{{message}}</p>

<hr>
<p style="color: #888; font-size: 12px;">
이 메일은 원인터네셔널 홈페이지 문의 폼에서 자동 발송되었습니다.
</p>
```

5. **Save** 버튼 클릭
6. **Template ID** 복사 (예: `template_xyz5678`)
   - 📋 이 ID도 메모장에 복사해두세요!

---

### 4단계: Public Key 복사

1. 왼쪽 메뉴에서 **Account** 클릭
2. **General** 탭 선택
3. **Public Key** 복사 (예: `aBcDeFgHiJkLmNoPqRs`)
   - 📋 이 Key도 메모장에 복사해두세요!

---

### 5단계: 코드에 설정값 입력

**파일 위치**: `js/main.js`

**찾을 부분** (약 211번째 줄):
```javascript
// ============================================
// EmailJS 설정 (아래 값들을 실제 값으로 변경하세요)
// ============================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';  // 예: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // 예: 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // 예: 'abcdefghijk123456'
```

**변경 후**:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc1234';  // 2단계에서 복사한 Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz5678'; // 3단계에서 복사한 Template ID
const EMAILJS_PUBLIC_KEY = 'aBcDeFgHiJkLmNoPqRs';   // 4단계에서 복사한 Public Key
```

---

## ✅ 테스트

1. **웹사이트 열기**: `index.html` 파일을 브라우저에서 열기
2. **문의하기 섹션**으로 이동
3. **문의 폼 작성**:
   - 이름: 테스트
   - 이메일: test@test.com
   - 전화번호: 010-1234-5678
   - 문의 내용: 테스트 메시지입니다
4. **제출** 버튼 클릭
5. **이메일 확인**: admin@oneintl2025.com 메일함 확인
   - 💡 스팸 메일함도 확인해보세요!

---

## 🔧 문제 해결

### "전송 중..." 메시지만 뜨고 이메일이 안 옴
- EmailJS 대시보드에서 Service가 제대로 연결되었는지 확인
- Template ID와 Service ID가 정확한지 확인
- Public Key가 정확한지 확인

### 브라우저 콘솔에서 오류 확인
1. F12 키 눌러서 개발자 도구 열기
2. Console 탭 확인
3. 빨간색 오류 메시지 확인

### 일반적인 오류 메시지
- `Invalid Service ID`: Service ID가 잘못됨
- `Invalid Template ID`: Template ID가 잘못됨
- `Invalid Public Key`: Public Key가 잘못됨
- `Failed to send email`: 네트워크 문제 또는 EmailJS 서버 문제

---

## 💰 무료 요금제 제한

EmailJS 무료 플랜:
- **월 200건** 이메일 전송 가능
- 충분히 사용 가능한 수준
- 초과 시 유료 플랜 업그레이드 필요

---

## 🎉 완료!

설정을 완료하셨다면:
1. ✅ 문의 폼 제출 시 실제 이메일이 admin@oneintl2025.com으로 전송됨
2. ✅ 문의자 정보 (이름, 이메일, 전화번호, 내용) 모두 포함
3. ✅ 자동 응답 설정 가능 (EmailJS에서 추가 설정)

---

## 📞 추가 도움이 필요하신가요?

EmailJS 공식 문서: https://www.emailjs.com/docs/

문의사항이 있으시면 admin@oneintl2025.com으로 연락주세요!

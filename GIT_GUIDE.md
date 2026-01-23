# Git 설정 및 배포 가이드

이 문서는 ONE INTERNATIONAL 웹사이트를 Git 저장소에 올리고 관리하는 방법을 안내합니다.

---

## 📋 목차

1. [Git 저장소 초기화](#1-git-저장소-초기화)
2. [GitHub/GitLab에 저장소 생성](#2-githubgitlab에-저장소-생성)
3. [코드 커밋 및 푸시](#3-코드-커밋-및-푸시)
4. [GitHub Pages로 배포](#4-github-pages로-배포)
5. [기타 배포 옵션](#5-기타-배포-옵션)

---

## 1. Git 저장소 초기화

### 1.1 Git 설치 확인

```bash
git --version
```

Git이 설치되어 있지 않다면 [git-scm.com](https://git-scm.com/)에서 다운로드하세요.

### 1.2 Git 사용자 정보 설정

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 1.3 프로젝트 폴더에서 Git 초기화

```bash
# 프로젝트 폴더로 이동
cd /path/to/one-international-website

# Git 저장소 초기화
git init

# 현재 상태 확인
git status
```

---

## 2. GitHub/GitLab에 저장소 생성

### 2.1 GitHub에서 새 저장소 만들기

1. [GitHub](https://github.com)에 로그인
2. 오른쪽 상단의 **+** 버튼 → **New repository** 클릭
3. 저장소 정보 입력:
   - **Repository name**: `one-international-website`
   - **Description**: "주식회사 원인터네셔널 공식 홈페이지"
   - **Public** 또는 **Private** 선택
   - **README, .gitignore, license 추가 안 함** (이미 있음)
4. **Create repository** 클릭

### 2.2 GitLab에서 새 프로젝트 만들기

1. [GitLab](https://gitlab.com)에 로그인
2. **New project** 클릭
3. **Create blank project** 선택
4. 프로젝트 정보 입력:
   - **Project name**: `one-international-website`
   - **Visibility Level**: Public/Private 선택
5. **Create project** 클릭

---

## 3. 코드 커밋 및 푸시

### 3.1 원격 저장소 연결

```bash
# GitHub 예시
git remote add origin https://github.com/yourusername/one-international-website.git

# GitLab 예시
git remote add origin https://gitlab.com/yourusername/one-international-website.git

# 원격 저장소 확인
git remote -v
```

### 3.2 파일 추가 및 커밋

```bash
# 모든 파일 스테이징
git add .

# 커밋 메시지 작성
git commit -m "Initial commit: ONE INTERNATIONAL website v2.0

- Complete responsive corporate website
- CEO message and company overview
- Detailed business sections
- Organization chart and history
- Location and recruitment information"

# 커밋 확인
git log
```

### 3.3 GitHub/GitLab에 푸시

```bash
# main 브랜치로 푸시 (최신 Git)
git branch -M main
git push -u origin main

# 또는 master 브랜치로 푸시 (구버전 Git)
git push -u origin master
```

---

## 4. GitHub Pages로 배포

GitHub Pages를 사용하면 무료로 정적 웹사이트를 호스팅할 수 있습니다.

### 4.1 GitHub Pages 활성화

1. GitHub 저장소 페이지에서 **Settings** 클릭
2. 왼쪽 메뉴에서 **Pages** 선택
3. **Source** 섹션에서:
   - **Branch**: `main` (또는 `master`) 선택
   - **Folder**: `/ (root)` 선택
4. **Save** 클릭
5. 몇 분 후 사이트 URL이 표시됩니다:
   - `https://yourusername.github.io/one-international-website/`

### 4.2 커스텀 도메인 설정 (선택사항)

1. GitHub Pages 설정에서 **Custom domain** 입력
2. 도메인 제공업체에서 DNS 설정:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```
3. 또는 A 레코드 설정:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

---

## 5. 기타 배포 옵션

### 5.1 Netlify로 배포

1. [Netlify](https://www.netlify.com/)에 로그인
2. **New site from Git** 클릭
3. GitHub/GitLab 저장소 연결
4. 설정:
   - **Build command**: (비워두기)
   - **Publish directory**: `.` 또는 비워두기
5. **Deploy site** 클릭
6. 자동으로 배포되고 URL 제공 (`*.netlify.app`)

**장점**:
- 자동 HTTPS
- 커스텀 도메인 쉬운 설정
- 자동 배포 (Git push 시)
- 빠른 CDN

### 5.2 Vercel로 배포

1. [Vercel](https://vercel.com/)에 로그인
2. **New Project** 클릭
3. GitHub 저장소 임포트
4. 자동으로 감지되어 배포
5. URL 제공 (`*.vercel.app`)

**장점**:
- 초고속 배포
- 자동 HTTPS
- 프리뷰 배포 (PR마다)
- 무료 플랜

### 5.3 GitLab Pages로 배포

1. 프로젝트 루트에 `.gitlab-ci.yml` 파일 생성:

```yaml
pages:
  stage: deploy
  script:
    - mkdir .public
    - cp -r * .public
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - main
```

2. GitLab에 푸시하면 자동 배포
3. URL: `https://yourusername.gitlab.io/one-international-website/`

---

## 📝 추가 Git 명령어

### 브랜치 관리

```bash
# 새 브랜치 생성 및 이동
git checkout -b feature/new-section

# 브랜치 목록 확인
git branch

# 브랜치 병합
git checkout main
git merge feature/new-section

# 브랜치 삭제
git branch -d feature/new-section
```

### 변경 사항 관리

```bash
# 변경 사항 확인
git status
git diff

# 특정 파일만 스테이징
git add index.html
git add css/style.css

# 마지막 커밋 수정
git commit --amend

# 변경 사항 취소
git checkout -- filename.html
```

### 원격 저장소 동기화

```bash
# 원격 변경 사항 가져오기
git pull origin main

# 원격 저장소 정보 확인
git remote show origin

# 원격 브랜치 목록
git branch -r
```

---

## 🔄 권장 워크플로우

### 개발 → 배포 프로세스

1. **로컬에서 개발**
   ```bash
   # 변경 사항 작업
   # 브라우저에서 index.html 테스트
   ```

2. **변경 사항 커밋**
   ```bash
   git add .
   git commit -m "Update: 회사 소개 섹션 수정"
   ```

3. **원격 저장소에 푸시**
   ```bash
   git push origin main
   ```

4. **자동 배포**
   - GitHub Pages / Netlify / Vercel이 자동으로 감지하고 배포

### 버전 관리 전략

```bash
# 기능 개발
git checkout -b feature/recruitment-update
# 작업 후
git commit -m "Add: 채용 공고 업데이트"
git push origin feature/recruitment-update

# Pull Request 생성 후 리뷰

# main 브랜치에 병합
git checkout main
git merge feature/recruitment-update
git push origin main
```

---

## 🛠️ 문제 해결

### SSH 키 설정 (권장)

비밀번호 입력 없이 Git 사용:

```bash
# SSH 키 생성
ssh-keygen -t ed25519 -C "your.email@example.com"

# SSH 키 복사 (macOS)
pbcopy < ~/.ssh/id_ed25519.pub

# SSH 키 복사 (Linux)
cat ~/.ssh/id_ed25519.pub

# GitHub/GitLab Settings → SSH Keys에 추가

# SSH URL로 변경
git remote set-url origin git@github.com:yourusername/one-international-website.git
```

### 대용량 파일 관리 (Git LFS)

이미지/동영상 등 대용량 파일이 많다면:

```bash
# Git LFS 설치
git lfs install

# 특정 파일 타입 추적
git lfs track "*.psd"
git lfs track "*.mp4"

# .gitattributes 커밋
git add .gitattributes
git commit -m "Add Git LFS configuration"
```

---

## 📚 참고 자료

- [Git 공식 문서](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [GitLab Docs](https://docs.gitlab.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

---

## ✅ 체크리스트

배포 전 확인 사항:

- [ ] `.gitignore` 파일 확인
- [ ] `.gitattributes` 파일 확인
- [ ] LICENSE 파일 확인
- [ ] README.md 업데이트
- [ ] 모든 파일 경로 상대 경로로 변경
- [ ] 브라우저에서 로컬 테스트 완료
- [ ] 민감한 정보 (API 키 등) 제거
- [ ] 이미지 최적화
- [ ] 반응형 디자인 테스트

---

**프로젝트 배포 성공을 기원합니다!** 🚀

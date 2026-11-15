// 출시 문자 링크 (2026-11-15): 누른 폰이 아이폰이면 App Store, 아니면 Play 스토어로 바로 넘김.
//   묶음(광고 이름표) = 페이지가 정한 window.KAPAW_GROUP, 없으면 ?g= 값, 둘 다 없으면 other
//     짧은 주소: /kapaw/d1 = B 광고로 등록, /kapaw/d2 = C 광고로 등록, /kapaw/d = 나머지 (문자에 넣는 주소)
//   안드로이드: Play 링크 referrer에 꼬리표 → Play 설치 기록·Firebase 분석 first_open에 묶음이 잡혀 "어느 광고로 등록한 사람이 몇 판 했는지"까지 봄
//   아이폰: App Store 캠페인 꼬리표 ct → App Store Connect에서 묶음별 설치 수 (애플은 사람별 기록을 안 줌)
(function () {
    var g = (window.KAPAW_GROUP || new URLSearchParams(location.search).get('g') || 'other')
        .replace(/[^A-Za-z0-9_-]/g, '').slice(0, 20) || 'other';
    var ua = navigator.userAgent || '';
    var ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);   // 아이패드는 PC처럼 보일 때가 있음
    var play = 'https://play.google.com/store/apps/details?id=com.one.kapaw&referrer='
        + encodeURIComponent('utm_source=prereg_sms&utm_medium=sms&utm_content=' + g);
    var appStore = 'https://apps.apple.com/kr/app/id6821535063?ct=prereg_sms_' + g;
    window.KAPAW_LINKS = { play: play, appStore: appStore };
    location.replace(ios ? appStore : play);
})();

// 모든 페이지 공통: 상단 메뉴, 전체 메뉴, 나타나기 효과, 알림
const gnb = document.getElementById('gnb');
const menu = document.querySelector('.menu');
menu.addEventListener('mouseenter', () => gnb.classList.add('on'));
gnb.addEventListener('mouseleave', () => gnb.classList.remove('on'));

// 첫 화면(또는 하위 페이지 상단 그림)을 지나면 흰 바탕
const heroEl = document.querySelector('.visual, .sub-visual');
const onScroll = () => gnb.classList.toggle('scrolled', !heroEl || scrollY > heroEl.offsetHeight - 100);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// 전체 메뉴
const all = document.getElementById('allmenu');
const setAll = open => { all.classList.toggle('open', open); document.body.classList.toggle('lock', open); };
document.querySelector('.btn-all').onclick = () => setAll(true);
all.querySelector('.btn-close').onclick = () => setAll(false);
all.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setAll(false)));
addEventListener('keydown', e => { if (e.key === 'Escape') setAll(false); });

// 알림
function toast(msg, err) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.toggle('err', !!err);
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 3200);
}
document.querySelectorAll('.lang-en').forEach(a => a.addEventListener('click', e => { e.preventDefault(); toast('영문 페이지는 준비 중입니다.'); }));

// 화면에 들어오면 나타나기
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// 메인 첫 화면 슬라이드 (6초마다)
const slides = [...document.querySelectorAll('.slide')];
if (slides.length) {
  const bar = document.getElementById('vBar'), cur = document.getElementById('vCur');
  let idx = 0, timer;
  const go = n => {
    slides[idx].classList.remove('active');
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add('active');
    cur.textContent = String(idx + 1).padStart(2, '0');
    bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run');
    clearTimeout(timer); timer = setTimeout(() => go(idx + 1), 6000);
  };
  document.getElementById('vPrev').onclick = () => go(idx - 1);
  document.getElementById('vNext').onclick = () => go(idx + 1);

  // 인트로: 문구로 회사를 소개 → 실제 로고 → 화면이 걷히고 첫 슬라이드 시작
  const intro = document.getElementById('intro');
  if (intro && !document.documentElement.classList.contains('no-intro')) {
    const STEPS = [ // [작은 글, 큰 글(배열이면 한 단어씩 옆에 쌓임), 보여 줄 시간(ms)]
      ['AI와 사람이 함께 기획하는', 'IP 회사', 1500],
      ['IP에서 시작해', ['게임', '상품', '유통', '무역'], 2400],
      ['그리고 목표는', '종합상사', 1500],
    ];
    const WORD_GAP = 400; // 쌓이는 단어 사이 간격
    const LOGO_MS = 900; // 총 약 6.3초
    const TOTAL = STEPS.reduce((s, x) => s + x[2], 0) + LOGO_MS;
    const small = intro.querySelector('.i-small'), bigBox = intro.querySelector('.i-big');
    const count = intro.querySelector('.i-count'), bar = intro.querySelector('.i-bar i');
    const timers = [];
    slides[0].classList.remove('active');
    document.body.classList.add('lock');

    let at = 0;
    STEPS.forEach(([s, b, ms], i) => {
      timers.push(setTimeout(() => {
        small.textContent = s;
        const words = Array.isArray(b) ? b : [b];
        bigBox.classList.toggle('list', words.length > 1);
        bigBox.innerHTML = '';
        words.forEach((w, k) => {
          const sp = document.createElement('span');
          sp.textContent = w; sp.className = 'in';
          sp.style.animationDelay = k * WORD_GAP + 'ms';
          bigBox.appendChild(sp);
        });
      }, at));
      at += ms;
    });
    timers.push(setTimeout(() => intro.classList.add('show-logo'), at));

    // 0 → 100 숫자와 진행 막대
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / TOTAL);
      count.textContent = String(Math.round(p * 100)).padStart(2, '0');
      bar.style.transform = 'scaleX(' + p + ')';
      if (p < 1 && !intro.classList.contains('out')) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const end = () => {
      if (intro.classList.contains('out')) return;
      timers.forEach(clearTimeout);
      intro.classList.add('out');
      document.body.classList.remove('lock');
      go(0);
      setTimeout(() => intro.remove(), 800);
    };
    timers.push(setTimeout(end, TOTAL));
    intro.addEventListener('click', end);
  } else {
    if (intro) intro.remove();
    go(0);
  }
}

// 하위 메뉴 띠: 보고 있는 구역 표시
const lnbLinks = [...document.querySelectorAll('.lnb a[href^="#"]')];
if (lnbLinks.length) {
  const secs = lnbLinks.map(a => document.querySelector(a.getAttribute('href')));
  const mark = () => {
    let i = 0;
    secs.forEach((s, k) => { if (s && s.getBoundingClientRect().top < 220) i = k; });
    if (innerHeight + scrollY >= document.body.scrollHeight - 4) i = secs.length - 1;
    lnbLinks.forEach((a, k) => a.classList.toggle('on', k === i));
  };
  addEventListener('scroll', mark, { passive: true }); mark();
}

// 펼치기 (소식 · 자주 묻는 질문)
document.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => b.parentElement.classList.toggle('open')));

// 분류 버튼 (소식 · 자주 묻는 질문)
document.querySelectorAll('.tabs').forEach(tabs => {
  const items = document.querySelectorAll(tabs.dataset.target);
  const empty = document.querySelector(tabs.dataset.empty);
  tabs.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    tabs.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    let shown = 0;
    items.forEach(it => { const ok = b.dataset.cat === 'all' || it.dataset.cat === b.dataset.cat; it.hidden = !ok; shown += ok; });
    if (empty) empty.style.display = shown ? 'none' : 'block';
  }));
});

// 주소의 #번호로 들어오면 그 글을 펼침 (news.html#n3)
if (location.hash) {
  const row = document.querySelector(location.hash + '.row, ' + location.hash + '.item');
  if (row) row.classList.add('open');
}

// 문의 양식 (EmailJS, 기존 사이트와 같은 설정)
const form = document.getElementById('contactForm');
if (form) {
  const type = new URLSearchParams(location.search).get('type');
  if (type) form.subject.value = type;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.agree.checked) { toast('개인정보 수집·이용에 동의해 주세요.', true); return; }
    const d = Object.fromEntries(new FormData(form));
    const btn = form.querySelector('button[type=submit]');
    if (typeof emailjs === 'undefined') { toast('메일 전송 기능을 불러오지 못했습니다. admin@oneintl2025.com 으로 보내 주세요.', true); return; }
    btn.disabled = true; btn.textContent = '보내는 중…';
    emailjs.send('service_oyjuwjp', 'template_maegdeo', {
      name: d.name, company: d.company || '(미입력)', email: d.email, phone: d.phone,
      subject: d.subject, message: d.message, to_email: 'admin@oneintl2025.com'
    }, 'ovyAAdewYgVitoti_')
      .then(() => { toast('문의가 접수되었습니다. 확인 후 연락드리겠습니다.'); form.reset(); })
      .catch(() => toast('보내지 못했습니다. 잠시 후 다시 시도하거나 메일로 보내 주세요.', true))
      .finally(() => { btn.disabled = false; btn.textContent = '문의 보내기'; });
  });
}

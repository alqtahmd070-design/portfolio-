/* =========================================================
   main.js — التصيير + التفاعلات + خلفية المطر الرقمية
   ========================================================= */
'use strict';

const $  = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- الترجمات ---------- */
const I18N = {
  ar: {
    doc_title: "المهندس أحمد القط | Eng. Ahmed Elkot - Portfolio",
    nav_home: "الرئيسية", nav_about: "من أنا", nav_skills: "المهارات",
    nav_education: "التعليم والتدريب", nav_projects: "المشاريع",
    nav_certificates: "الشهادات", nav_gallery: "لحظات مميزة", nav_contact: "اتصل بي",
    hero_greeting: "مرحباً، أنا", hero_name: "المهندس أحمد القط",
    hero_subtitle: "UI/UX Designer | Data Analyst | Web Developer",
    hero_desc: "أصمم تجارب رقمية واضحة، أحلل البيانات لاستخراج رؤى مفيدة، وأطور حلول ويب تجمع بين التصميم والتقنية.",
    view_cv: "عرض السيرة الذاتية", view_projects: "المشاريع", contact_me: "تواصل معي",
    about_title: "نبذة عني",
    about_p1: "أنا المهندس أحمد القط، طالب في مجال نظم المعلومات الإدارية ومهتم بتطوير حلول رقمية تجمع بين التصميم والتقنية وتحليل البيانات.",
    about_p2: "أعمل على تطوير مهاراتي في UI/UX Design وتطوير الويب وتحليل البيانات، وأسعى إلى بناء تجارب رقمية بسيطة، عملية، وسهلة الاستخدام.",
    about_p3: "أهتم بفهم احتياجات المستخدم وتحويلها إلى واجهات واضحة ومنظمة، بالإضافة إلى تحليل البيانات واستخراج المعلومات التي تساعد على اتخاذ قرارات أفضل.",
    about_p4: "خلال رحلتي التعليمية والتدريبية شاركت في عدد من البرامج والدورات التدريبية في مجالات التكنولوجيا، UI/UX، تحليل البيانات، الذكاء الاصطناعي وتطوير البرمجيات.",
    about_p5: "هدفي هو تطوير نفسي باستمرار وبناء مشاريع حقيقية تجمع بين التصميم، البرمجة، وتحليل البيانات.",
    about_card1_t: "طالب MIS",
    about_card1_d: "أدرس نظم المعلومات الإدارية بالسنة الرابعة بمعهد العبور العالي للإدارة والحاسبات ونظم المعلومات.",
    about_card2_t: "شغف التصميم",
    about_card2_d: "مهتم بتصميم واجهات المستخدم وتجربة المستخدم، وتحويل احتياجات المستخدم إلى واجهات واضحة ومنظمة.",
    about_card3_t: "تحليل البيانات",
    about_card3_d: "أحلل البيانات وأستخرج منها رؤى تدعم اتخاذ قرارات أفضل باستخدام Excel و Power BI و SQL.",
    about_card4_t: "تطوير الويب",
    about_card4_d: "أبني تطبيقات ومواقع ويب حديثة تجمع بين التصميم والبرمجة وأعمال قواعد البيانات.",
    skills_title: "المهارات والتقنيات",
    edu_title: "التعليم والتدريب",
    edu_badge_edu: "تعليم", edu_badge_train: "تدريب",
    edu_school: "معهد العبور العالي للإدارة والحاسبات ونظم المعلومات",
    edu_major: "نظم المعلومات الإدارية (MIS)",
    edu_status: "طالب — السنة الرابعة",
    edu_nti: "تدريب UI/UX Design — NTI",
    edu_nti_desc: "تدريب متخصص في تصميم تجربة وواجهة المستخدم شمل: User Research، Information Architecture، Personas، User Flows، Wireframing، Prototyping، UI Design، Usability Testing، Figma.",
    edu_creativa: "تدريب UI/UX Design — Creativa / ITIDA / TIEC",
    edu_creativa_desc: "برنامج تدريبي في تصميم واجهات وتجربة المستخدم، تعمّق فيه على منهجيات التصميم المتمحور حول المستخدم وأدوات Figma العملية.",
    projects_title: "مشاريعي",
    visit_project: "زيارة المشروع",
    certs_title: "الشهادات والإنجازات",
    certs_sub: "شهادات ودورات تدريبية في مجالات التكنولوجيا والتصميم وتحليل البيانات",
    view_certificate: "View Certificate", cert_details: "Certificate Details",
    cert_provider: "الجهة المانحة", cert_date: "تاريخ الحصول عليها", cert_duration: "مدة الدورة",
    gallery_title: "لحظات مميزة",
    contact_title: "تواصل معي", contact_info: "معلومات الاتصال",
    contact_phone: "اتصل بي مباشرة", contact_email: "البريد الإلكتروني",
    contact_location: "الموقع الحالي", contact_location_val: "شبرا النخلة، بلبيس، الشرقية، مصر",
    contact_msg_t: "أرسل لي رسالة سريعة",
    contact_msg: "أنا جاهز دائماً للفرص الجديدة، ومشاريع العمل الحر، أو لمناقشة أفكار برمجية وتصميمية ذكية. اضغط على أي وسيلة اتصال أو حسابات السوشيال ميديا للوصول الفوري إليّ!",
    contact_email_btn: "راسلني عبر الإيميل فوراً",
    footer: "جميع الحقوق محفوظة © 2026 | تم تطويره بكل حب وشغف بواسطة أحمد القط",
    cv_title: "السيرة الذاتية — Ahmed Elkot", cv_download: "تحميل CV",
    profile_photo_title: "الصورة الشخصية — المهندس أحمد القط",
    cv_missing_t: "ملف الـ CV غير موجود بعد",
    cv_missing_p: "ضع ملف الـ PDF داخل مجلد المشروع في المسار التالي وسيُفتح تلقائياً:",
    cv_template_btn: "افتح قالب CV جاهز (اطبعه PDF)"
  },
  en: {
    doc_title: "Eng. Ahmed Elkot | Portfolio",
    nav_home: "Home", nav_about: "About", nav_skills: "Skills",
    nav_education: "Education & Training", nav_projects: "Projects",
    nav_certificates: "Certificates", nav_gallery: "Moments", nav_contact: "Contact",
    hero_greeting: "Hello, I'm", hero_name: "Eng. Ahmed Elkot",
    hero_subtitle: "UI/UX Designer | Data Analyst | Web Developer",
    hero_desc: "I design clear digital experiences, analyze data to uncover useful insights, and build web solutions that combine design and technology.",
    view_cv: "View CV", view_projects: "View Projects", contact_me: "Contact Me",
    about_title: "About Me",
    about_p1: "I'm Eng. Ahmed Elkot, an MIS student interested in building digital solutions that combine design, technology, and data analysis.",
    about_p2: "I'm continuously developing my skills in UI/UX Design, Web Development, and Data Analysis, with a focus on creating simple, practical, and user-friendly digital experiences.",
    about_p3: "I enjoy understanding user needs and translating them into clear and organized interfaces, while also working with data to extract useful insights and support better decisions.",
    about_p4: "Throughout my academic and training journey, I have participated in technology programs and courses covering UI/UX, Data Analysis, Artificial Intelligence, and Software Development.",
    about_p5: "My goal is to continuously improve my skills and build real-world projects that combine design, development, and data.",
    about_card1_t: "MIS Student",
    about_card1_d: "Fourth-year Management Information Systems student at Obour Higher Institute for Management, Computers & Information Systems.",
    about_card2_t: "Design Passion",
    about_card2_d: "Interested in UI design and user experience, turning user needs into clear and organized interfaces.",
    about_card3_t: "Data Analysis",
    about_card3_d: "I analyze data and extract insights that support better decisions using Excel, Power BI, and SQL.",
    about_card4_t: "Web Development",
    about_card4_d: "I build modern web apps and sites that combine design, programming, and database work.",
    skills_title: "Skills & Technologies",
    edu_title: "Education & Training",
    edu_badge_edu: "Education", edu_badge_train: "Training",
    edu_school: "Obour Higher Institute for Management, Computers & Information Systems",
    edu_major: "Management Information Systems (MIS)",
    edu_status: "Student — Fourth Year",
    edu_nti: "UI/UX Design Training — NTI",
    edu_nti_desc: "Specialized UI/UX training covering: User Research, Information Architecture, Personas, User Flows, Wireframing, Prototyping, UI Design, Usability Testing, and Figma.",
    edu_creativa: "UI/UX Design — Creativa / ITIDA / TIEC",
    edu_creativa_desc: "A UI/UX design training program focused on user-centered design methodologies and hands-on Figma practice.",
    projects_title: "My Projects",
    visit_project: "Visit Project",
    certs_title: "Certificates & Achievements",
    certs_sub: "Certificates and training courses in technology, design, and data analysis",
    view_certificate: "View Certificate", cert_details: "Certificate Details",
    cert_provider: "Provider", cert_date: "Date", cert_duration: "Duration",
    gallery_title: "Special Moments",
    contact_title: "Contact Me", contact_info: "Contact Information",
    contact_phone: "Call me directly", contact_email: "Email",
    contact_location: "Current location", contact_location_val: "Shubra El-Kheima, Belbeis, Sharqia, Egypt",
    contact_msg_t: "Send me a quick message",
    contact_msg: "I'm always ready for new opportunities, freelance projects, or to discuss smart design and development ideas. Reach out through any channel below!",
    contact_email_btn: "Email me now",
    footer: "All rights reserved © 2026 | Crafted with love & passion by Ahmed Elkot",
    cv_title: "Curriculum Vitae — Ahmed Elkot", cv_download: "Download CV",
    profile_photo_title: "Profile Photo — Eng. Ahmed Elkot",
    cv_missing_t: "CV file not found yet",
    cv_missing_p: "Place your PDF file inside the project folder at the following path and it will open automatically:",
    cv_template_btn: "Open ready CV template (print to PDF)"
  }
};

let currentLang = 'ar';
try { currentLang = localStorage.getItem('preferred-lang') === 'en' ? 'en' : 'ar'; } catch (e) {}
function t(k){ const p = I18N[currentLang]; return (p && p[k] !== undefined) ? p[k] : (I18N.ar[k] !== undefined ? I18N.ar[k] : k); }
function tf(v){ if (v === null || v === undefined) return ''; if (typeof v === 'string') return v; return v[currentLang] || v.ar || v.en || ''; }
function esc(s){ return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }


/* ---------- Language ---------- */
function applyLanguage(lang){
  currentLang = lang;
  try { localStorage.setItem('preferred-lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.title = t('doc_title');
  $$('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (I18N[lang][k] !== undefined) el.innerHTML = I18N[lang][k]; });
  const btn = $('#lang-toggle');
  if (btn) btn.textContent = (lang === 'ar') ? 'EN' : 'AR';
  updateLbChevrons();
  renderAll();
}
$('#lang-toggle').addEventListener('click', () => applyLanguage(currentLang === 'ar' ? 'en' : 'ar'));

/* ---------- Typewriter ---------- */
const TW = CONFIG.typewriter;
let twI = 0, twTimer = null;
function typeLoop(){
  const el = $('#typewriter');
  if (!el) return;
  const words = TW[currentLang] || TW.ar;
  const word = words[twI % words.length];
  let n = 0;
  clearInterval(twTimer);
  twTimer = setInterval(() => {
    n++;
    el.textContent = word.slice(0, n);
    if (n >= word.length) {
      clearInterval(twTimer);
      setTimeout(() => {
        twTimer = setInterval(() => {
          n--;
          el.textContent = word.slice(0, n);
          if (n <= 0) { clearInterval(twTimer); twI++; setTimeout(typeLoop, 350); }
        }, 40);
      }, 1800);
    }
  }, 90);
}

/* ---------- Render: Skills ---------- */
function renderSkills(){
  const wrap = $('#skills-cats');
  if (!wrap) return;
  wrap.innerHTML = CONFIG.skills.map(cat => `
    <div class="glass-card skill-cat reveal">
      <h3><i class="${cat.icon}"></i> ${esc(tf(cat.title))}</h3>
      <div class="skill-tags">${cat.items.map(s => `<span class="skill-tag">${esc(s)}</span>`).join('')}</div>
    </div>`).join('');
}

/* ---------- Render: Projects ---------- */
function renderProjects(){
  const wrap = $('#projects-grid');
  if (!wrap) return;
  wrap.innerHTML = CONFIG.projects.map(p => `
    <div class="glass-card project-card reveal">
      <i class="${p.icon} project-icon"></i>
      <h3>${esc(tf(p.title))}</h3>
      <p>${esc(tf(p.description))}</p>
      <div class="project-tags">${(p.tags || []).map(tag => `<span>${esc(tag)}</span>`).join('')}</div>
      ${p.link ? `<a class="project-link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(t('visit_project'))} <i class="fas fa-arrow-${document.documentElement.dir === 'rtl' ? 'left' : 'right'}"></i></a>` : ''}
    </div>`).join('');
}

/* ---------- Render: Certificates ---------- */
function renderCerts(){
  const wrap = $('#cert-grid');
  if (!wrap) return;
  wrap.innerHTML = CONFIG.certificates.map((c, i) => {
    const link = c.certificateLink ? esc(c.certificateLink) : '';
    const viewBtn = link
      ? `<a class="btn btn-primary" href="${link}" target="_blank" rel="noopener"><i class="fas fa-up-right-from-square"></i> ${esc(t('view_certificate'))}</a>`
      : `<button class="btn btn-primary" onclick="openCertModal(${i})"><i class="fas fa-up-right-from-square"></i> ${esc(t('view_certificate'))}</button>`;
    return `
    <div class="glass-card cert-card reveal">
      <div class="cert-img-container">
        <img src="${c.image ? esc(c.image) : makePlaceholder(tf(c.title))}" alt="${esc(tf(c.title))}" loading="lazy"
             onerror="imgFallback(this)"
             onclick="openCertImage(${i})">
      </div>
      <div class="cert-info">
        <h3>${esc(tf(c.title))}</h3>
        <p class="cert-org"><i class="fas fa-building"></i> ${esc(tf(c.organization))}</p>
        <p>${esc(tf(c.description))}</p>
        <div class="cert-meta">
          ${c.date ? `<span><i class="fas fa-calendar-alt"></i> ${esc(c.date)}</span>` : ''}
          ${c.duration ? `<span><i class="fas fa-clock"></i> ${esc(tf(c.duration))}</span>` : ''}
        </div>
        <div class="cert-actions">
          ${viewBtn}
          <button class="btn btn-outline" onclick="openCertModal(${i})"><i class="fas fa-circle-info"></i> ${esc(t('cert_details'))}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ---------- Certificate details modal ---------- */
function openCertModal(i){
  const c = CONFIG.certificates[i];
  if (!c) return;
  const link = c.certificateLink ? esc(c.certificateLink) : '';
  $('#cert-modal-card').innerHTML = `
    <img src="${c.image ? esc(c.image) : makePlaceholder(tf(c.title))}" alt="${esc(tf(c.title))}"
         onerror="imgFallback(this)">
    <h3>${esc(tf(c.title))}</h3>
    <p class="cert-org"><i class="fas fa-building"></i> ${esc(tf(c.organization))}</p>
    <p class="desc">${esc(tf(c.description))}</p>
    <div class="cert-meta">
      ${c.date ? `<span><i class="fas fa-calendar-alt"></i> ${t('cert_date')}: ${esc(c.date)}</span>` : ''}
      ${c.duration ? `<span><i class="fas fa-clock"></i> ${t('cert_duration')}: ${esc(tf(c.duration))}</span>` : ''}
    </div>
    <div class="cert-actions">
      ${link ? `<a class="btn btn-primary" href="${link}" target="_blank" rel="noopener"><i class="fas fa-up-right-from-square"></i> ${esc(t('view_certificate'))}</a>` : ''}
      <button class="btn btn-outline" onclick="closeCertModal()"><i class="fas fa-xmark"></i></button>
    </div>`;
  $('#cert-modal').classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeCertModal(){ $('#cert-modal').classList.remove('open'); document.body.classList.remove('no-scroll'); }

/* ---------- Render: Gallery + Filters ---------- */
let activeFilter = 'all';
function renderGallery(){
  const fWrap = $('#gallery-filters');
  const gWrap = $('#gallery-grid');
  if (!fWrap || !gWrap) return;
  fWrap.innerHTML = CONFIG.gallery.categories.map(c =>
    `<button class="filter-btn ${c.id === activeFilter ? 'active' : ''}" data-filter="${c.id}">${esc(tf(c.label))}</button>`).join('');
  const items = activeFilter === 'all' ? CONFIG.gallery.items : CONFIG.gallery.items.filter(it => it.category === activeFilter);
  gWrap.innerHTML = items.map((it, i) => `
    <figure class="gallery-item" data-index="${CONFIG.gallery.items.indexOf(it)}" tabindex="0" role="button" aria-label="${esc(tf(it.title))}">
      <img src="${it.image ? esc(it.image) : makePlaceholder(tf(it.title))}" alt="${esc(tf(it.title))}" loading="lazy"
           onerror="imgFallback(this)">
      <figcaption class="g-overlay"><h4>${esc(tf(it.title))}</h4><p>${esc(tf(it.description))}</p></figcaption>
    </figure>`).join('');
  $$('.filter-btn', fWrap).forEach(b => b.addEventListener('click', () => { activeFilter = b.dataset.filter; renderGallery(); }));
  $$('.gallery-item', gWrap).forEach(el => {
    el.addEventListener('click', () => openGalleryLightbox(parseInt(el.dataset.index, 10)));
    el.addEventListener('keydown', e => { if (e.key === 'Enter') openGalleryLightbox(parseInt(el.dataset.index, 10)); });
  });
}

/* ---------- Lightbox (صورة البروفايل + الشهادات + المعرض) ---------- */
let lbList = [], lbIndex = 0, lbZoomLevel = 1;

function showLb(){
  const img = $('#lightbox-img');
  const item = lbList[lbIndex];
  img.removeAttribute('data-fbk');
  img.src = item.src;
  img.style.transform = 'scale(1)';
  lbZoomLevel = 1;
  $('#lb-title').textContent = item.title || '';
  $('#lb-desc').textContent = item.desc || '';
  const multi = lbList.length > 1;
  $('.lb-prev').style.display = multi ? '' : 'none';
  $('.lb-next').style.display = multi ? '' : 'none';
}
function openLightbox(src, title, desc){
  lbList = [{ src: src || PLACEHOLDER_IMG, title: title || '', desc: desc || '' }];
  lbIndex = 0;
  showLb();
  $('#lightbox').classList.add('open');
  document.body.classList.add('no-scroll');
}
function openProfileLightbox(){
  const img = $('#profile-img');
  openLightbox(img.src, t('profile_photo_title'), '');
}
function openCertImage(i){
  const c = CONFIG.certificates[i];
  if (!c) return;
  openLightbox(c.image || makePlaceholder(tf(c.title)), tf(c.title), tf(c.organization));
}
/* ---------- صور بديلة ذكية (Smart placeholders) ---------- */
function makePlaceholder(label){
  const text = esc(String(label || 'No Image')).slice(0, 40);
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>" +
    "<rect width='800' height='600' fill='#0b0e17'/>" +
    "<rect x='16' y='16' width='768' height='568' rx='18' fill='none' stroke='#3b82f6' stroke-opacity='0.35' stroke-width='2' stroke-dasharray='10 8'/>" +
    "<circle cx='400' cy='245' r='56' fill='#3b82f6' fill-opacity='0.15'/>" +
    "<path d='M371 267 l21 -36 14 22 10 -14 14 28 z' fill='#60a5fa' opacity='0.9'/>" +
    "<text x='400' y='362' font-family='Cairo, Arial, sans-serif' font-size='24' fill='#9ca3af' text-anchor='middle'>" + text + "</text>" +
    "</svg>";
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
function imgFallback(img){
  if (img.dataset.fbk) return;
  img.dataset.fbk = '1';
  img.onerror = null;
  img.src = makePlaceholder(img.alt || 'No Image');
}
function profileImgError(img){
  img.onerror = null;
  img.removeAttribute('data-fbk');
  img.src = 'assets/images/profile/avatar.svg';
}
function updateLbChevrons(){
  const ltr = document.documentElement.dir === 'ltr';
  const prev = $('.lb-prev i'), next = $('.lb-next i');
  if (prev) prev.className = 'fas fa-chevron-' + (ltr ? 'left' : 'right');
  if (next) next.className = 'fas fa-chevron-' + (ltr ? 'right' : 'left');
}
function openGalleryLightbox(configIndex){
  const it = CONFIG.gallery.items[configIndex];
  if (!it) return;
  lbList = CONFIG.gallery.items.map(g => ({ src: g.image || makePlaceholder(tf(g.title)), title: tf(g.title), desc: tf(g.description) }));
  lbIndex = configIndex;
  showLb();
  $('#lightbox').classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeLightbox(){ $('#lightbox').classList.remove('open'); document.body.classList.remove('no-scroll'); }
function lbNav(dir){ if (!lbList.length) return; lbIndex = (lbIndex + dir + lbList.length) % lbList.length; showLb(); }
function lbApplyZoom(){ $('#lightbox-img').style.transform = 'scale(' + lbZoomLevel + ')'; }
function lbZoomIn(){ lbZoomLevel = Math.min(4, lbZoomLevel + 0.25); lbApplyZoom(); }
function lbZoomOut(){ lbZoomLevel = Math.max(0.5, lbZoomLevel - 0.25); lbApplyZoom(); }
function lbZoomReset(){ lbZoomLevel = 1; lbApplyZoom(); }

/* ---------- CV Viewer ---------- */
let cvZoomLevel = 1;
/* يتحقق أن ملف الـCV موجود فعلاً قبل فتح الـViewer — يمنع ERR_FILE_NOT_FOUND */
function checkCvExists(url){
  /* fetch محجوب على file:// — نحمّل الملف مباشرة بدل عرض رسالة خطأ */
  if (location.protocol === 'file:') return Promise.resolve(true);
  return fetch(url, { method: 'HEAD' })
    .then(r => r.ok)
    .catch(() => false);
}
function showCvFallback(){
  /* رسائل الخطأ أُزيلت — يعرض المودال زر القالب فقط */
  $('#cv-stage').innerHTML = `
    <div class="cv-fallback">
      <a class="btn btn-primary" href="assets/cv/Ahmed-Elkot-CV-template.html" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-wand-magic-sparkles"></i> ${esc(t('cv_template_btn'))}
      </a>
    </div>`;
}
function openCvViewer(){
  $('#cv-modal').classList.add('open');
  document.body.classList.add('no-scroll');
  const frame = $('#cv-frame'), stage = $('#cv-stage');
  const fileUrl = encodeURI(CONFIG.cv.file);   // مسار نسبي — لا Absolute paths
  checkCvExists(fileUrl).then(ok => {
    if (ok) {
      stage.innerHTML = '';
      stage.appendChild(frame);
      frame.style.display = '';
      if (!frame.getAttribute('src')) frame.src = fileUrl + '#view=FitH';
    } else {
      frame.style.display = 'none';
      frame.removeAttribute('src');
      showCvFallback();
    }
  });
}
function closeCvViewer(){ $('#cv-modal').classList.remove('open'); document.body.classList.remove('no-scroll'); }
function cvZoom(delta){ cvZoomLevel = Math.max(0.5, Math.min(2.5, cvZoomLevel + delta)); $('#cv-frame').style.transform = 'scale(' + cvZoomLevel + ')'; }
function cvZoomReset(){ cvZoomLevel = 1; $('#cv-frame').style.transform = 'scale(1)'; }
$('#cv-open-btn').addEventListener('click', openCvViewer);

/* ---------- Mobile menu ---------- */
const navLinks = $('.nav-links');
$('#menu-toggle').addEventListener('click', () => navLinks.classList.toggle('open'));
$$('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ---------- Close modals on backdrop / Escape ---------- */
$$('.modal').forEach(m => m.addEventListener('click', e => {
  if (e.target === m) {
    if (m.id === 'cv-modal') closeCvViewer();
    else if (m.id === 'cert-modal') closeCertModal();
    else closeLightbox();
  }
}));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); closeCertModal(); closeCvViewer(); }
  if ($('#lightbox').classList.contains('open')) {
    const rtl = document.documentElement.dir === 'rtl';
    if (e.key === 'ArrowLeft') lbNav(rtl ? 1 : -1);
    if (e.key === 'ArrowRight') lbNav(rtl ? -1 : 1);
  }
});

/* ---------- Scroll reveal ---------- */
let revealObserver = null;
function initReveal(){
  if (REDUCED || !('IntersectionObserver' in window)) { $$('.reveal').forEach(el => el.classList.add('visible')); return; }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); revealObserver.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => { if (!el.classList.contains('visible')) revealObserver.observe(el); });
}

/* ---------- Active nav link (Scroll Spy) ---------- */
function initScrollSpy(){
  const sections = $$('section[id]');
  const links = $$('.nav-links a[href^="#"]');
  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => spy.observe(s));
  links.forEach(l => l.addEventListener('click', () => {
    const menu = $('.nav-links'); if (menu) menu.classList.remove('open');
  }));
}

/* ---------- Render all ---------- */
function renderAll(){
  renderSkills(); renderProjects(); renderCerts(); renderGallery();
  requestAnimationFrame(initReveal);
}

/* ---------- Background: Digital Rain (canvas, خفيف و Cinematic) ---------- */
function initRain(){
  const canvas = $('#rain-canvas');
  if (!canvas || REDUCED) return;
  const ctx = canvas.getContext('2d');
  let W, H, drops = [], dpr = Math.min(window.devicePixelRatio || 1, 2);
  const LOW_POWER = (navigator.hardwareConcurrency || 8) <= 4;
  let rafId = null, running = true;

  function getCount(){
    const width = window.innerWidth;
    if (width <= 480) return LOW_POWER ? 28 : 42;
    if (width <= 768) return LOW_POWER ? 42 : 62;
    if (width <= 1024) return LOW_POWER ? 56 : 84;
    return LOW_POWER ? 75 : 120;
  }

  function resize(){
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeDrop(initial){
    // عمق سينمائي خفيف (Depth Effect): 3 طبقات تقريبية
    const depth = Math.random();
    let speed, len, opacity, width;
    if (depth < 0.4) {
      // طبقة بعيدة: أبطأ، أنعم، أصغر
      speed = 2.0 + Math.random() * 1.5;
      len = 10 + Math.random() * 14;
      opacity = 0.12 + Math.random() * 0.15;
      width = 0.8;
    } else if (depth < 0.8) {
      // طبقة متوسطة
      speed = 3.6 + Math.random() * 2.2;
      len = 16 + Math.random() * 22;
      opacity = 0.22 + Math.random() * 0.25;
      width = 1.1;
    } else {
      // طبقة أمامية واضحة ولكن ناعمة
      speed = 5.2 + Math.random() * 2.6;
      len = 24 + Math.random() * 28;
      opacity = 0.38 + Math.random() * 0.32;
      width = 1.4;
    }
    const angle = 0.07; // ميلان خفيف طبيعي جداً
    return {
      x: Math.random() * (W + 140) - 70,
      y: initial ? Math.random() * H : -50,
      len: len,
      speed: speed,
      vx: speed * angle,
      opacity: opacity,
      width: width,
      depth: depth
    };
  }

  function build(){
    const targetCount = getCount();
    drops = Array.from({ length: targetCount }, () => makeDrop(true));
  }

  function frame(){
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = 'round';
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      const endX = d.x + (d.vx * d.len / d.speed);
      const endY = d.y + d.len;

      ctx.beginPath();
      const grad = ctx.createLinearGradient(d.x, d.y, endX, endY);
      grad.addColorStop(0, 'rgba(191,219,254,0)');
      grad.addColorStop(0.35, 'rgba(147,197,253,' + (d.opacity * 0.45) + ')');
      grad.addColorStop(1, 'rgba(219,234,254,' + d.opacity + ')');
      ctx.strokeStyle = grad;
      ctx.lineWidth = d.width;
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      d.y += d.speed;
      d.x += d.vx;

      if (d.y > H + 50 || d.x > W + 70) {
        const fresh = makeDrop(false);
        d.x = fresh.x;
        d.y = fresh.y;
        d.speed = fresh.speed;
        d.vx = fresh.vx;
        d.len = fresh.len;
        d.opacity = fresh.opacity;
        d.width = fresh.width;
        d.depth = fresh.depth;
      }
    }
    rafId = requestAnimationFrame(frame);
  }

  resize();
  build();
  frame();

  // إيقاف التشغيل عند إخفاء التاب (توفير CPU والبطارية)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (rafId) cancelAnimationFrame(rafId);
      running = false;
    } else if (!running) {
      running = true;
      frame();
    }
  });

  let rT;
  window.addEventListener('resize', () => {
    clearTimeout(rT);
    rT = setTimeout(() => {
      resize();
      const target = getCount();
      while (drops.length < target) drops.push(makeDrop(false));
      if (drops.length > target) drops.length = target;
    }, 150);
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  typeLoop();
  initRain();
  initScrollSpy();
  // ضع رابط تحميل CV من config
  const dl = $('#cv-download');
  if (dl) { dl.href = CONFIG.cv.file; dl.setAttribute('download', CONFIG.cv.downloadName); }
});





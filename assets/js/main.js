/* ============================================================
   Arkan Software — site behaviour
   Vanilla ES2019+, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     1. Translations (Arabic). English lives in the
        markup and is snapshotted on first load.
     ───────────────────────────────────────────── */
  var AR = {
    'a11y.skip': 'تجاوز إلى المحتوى',
    'top.cr': 'سجل تجاري',

    'nav.services': 'خدماتنا',
    'nav.integrations': 'التكامل التقني',
    'nav.fintech': 'التقنية المالية',
    'nav.process': 'منهجية العمل',
    'nav.about': 'عن الشركة',
    'nav.contact': 'اتصل بنا',
    'nav.cta': 'تواصل معنا',

    'hero.eyebrow': 'الرياض · المملكة العربية السعودية',
    'hero.h1a': 'برمجيات تحمل',
    'hero.h1b': 'أعمالك إلى الأمام',
    'hero.p': 'تُصمّم أركان سوفتوير وتبني تطبيقات الجوال ومنصات الويب وأنظمة سطح المكتب، ثم تربطها بخدمات المدفوعات والجهات الحكومية والأنظمة المؤسسية التي يعتمد عليها عملك — مدعومة باستشارات متخصصة في التقنية المالية.',
    'hero.cta1': 'ابدأ مشروعك',
    'hero.cta2': 'استعرض خدماتنا',
    'hero.b1': 'شركة برمجيات سعودية مسجّلة',
    'hero.b2': 'واجهات عربية من اليمين إلى اليسار',
    'hero.b3': 'فريق هندسي داخلي',

    'chip.mobile': 'الجوال',
    'chip.web': 'الويب',
    'chip.desktop': 'سطح المكتب',
    'chip.layer': 'طبقة التكامل',

    'st.1': 'سنة من الخبرة المجتمعة',
    'st.2': 'منتج تم تسليمه',
    'st.3': 'نظاماً تم ربطه',
    'st.4': 'جهوزية على المنصات المُدارة',

    'svc.eyebrow': 'ما نقوم به',
    'svc.title': 'فريق واحد لكل طبقات المشروع',
    'svc.desc': 'من أول مخطط أولي إلى التكامل الذي يُغلق الدورة مع بنكك أو نظامك المؤسسي أو الجهة التنظيمية.',

    's1.t': 'تطبيقات الجوال',
    's1.d': 'تطبيقات أصلية ومتعددة المنصات لأنظمة iOS وأندرويد — مبنية لجمهور يبدأ بالعربية، وقادرة على العمل دون اتصال، ومهيّأة لاعتماد المتاجر من المحاولة الأولى.',
    's1.k1': 'Swift · Kotlin · Flutter · React Native',
    's1.k2': 'الإشعارات والمدفوعات داخل التطبيق والبصمة الحيوية',
    's1.k3': 'النشر في المتاجر وإدارة الإصدارات',

    's2.t': 'المواقع ومنصات الويب',
    's2.d': 'مواقع مؤسسية ومتاجر إلكترونية وبوابات عملاء مبنية للسرعة وسهولة الوصول ومحركات البحث، مع بنية محتوى ثنائية اللغة من الأساس.',
    's2.k1': 'Next.js · React · Laravel · .NET',
    's2.k2': 'أنظمة إدارة محتوى مرنة وسير عمل للنشر',
    's2.k3': 'تحسين مؤشرات الأداء والظهور في البحث',

    's3.t': 'تطبيقات سطح المكتب',
    's3.d': 'برمجيات لأنظمة ويندوز وماك ولينكس لفرق العمليات والمحاسبة ونقاط البيع التي تحتاج سرعة الأداء — باتصال أو دونه.',
    's3.k1': '.NET · WPF · Electron · Qt',
    's3.k2': 'مزامنة تعمل دون اتصال وقواعد بيانات محلية',
    's3.k3': 'ربط الأجهزة والطابعات وملحقات نقاط البيع',

    's4.t': 'التكامل التقني',
    's4.d': 'نجعل الأنظمة تتحدث معاً: بوابات المدفوعات وأنظمة تخطيط الموارد والمنصات الحكومية وإدارة العملاء وقواعد البيانات القديمة، عبر طبقة تكامل قابلة للصيانة فعلاً.',
    's4.k1': 'تصميم واجهات API وبوابات ووسائط ربط',
    's4.k2': 'موصّلات لأنظمة ERP وCRM والفاتورة الإلكترونية',
    's4.k3': 'ترحيل البيانات وتحديث الأنظمة القائمة',

    's5.t': 'استشارات التقنية المالية',
    's5.d': 'استشارات للبنوك وشركات التمويل والشركات الناشئة: استراتيجية المنتج، وبنية المدفوعات، والجاهزية التنظيمية، واختيار المزوّدين — ثم التنفيذ.',
    's5.k1': 'تصميم منتجات المدفوعات والتمويل',
    's5.k2': 'الجاهزية لمتطلبات ساما والخدمات المصرفية المفتوحة',
    's5.k3': 'اعرف عميلك ومكافحة غسل الأموال وضوابط الاحتيال',

    's6.t': 'السحابة والتشغيل والدعم',
    's6.d': 'بنية تحتية وخطوط تسليم آلية ومراقبة مُعدّة بالشكل الصحيح، مع اتفاقية دعم تحافظ على ما نبنيه بعد الإطلاق.',
    's6.k1': 'AWS · Azure · بنية محلية وهجينة',
    's6.k2': 'الحاويات والبنية ككود وخطوط الأتمتة',
    's6.k3': 'صيانة باتفاقية مستوى خدمة',

    'nav.flow': 'كيف يترابط',

    'flow.eyebrow': 'طبقة التكامل',
    'flow.title': 'طبقة واحدة بين مستخدميك وأنظمتك',
    'flow.desc': 'كل تطبيق نبنيه يتحدث إلى الطبقة المُحكمة ذاتها — لتبقى المدفوعات والخدمات الحكومية ونظام مواردك متزامنة، بسجل تدقيق واحد بدلاً من مجموعة نصوص برمجية متفرّقة.',
    'fl.c1': 'تطبيق الجوال',
    'fl.c2': 'منصة الويب',
    'fl.c3': 'سطح المكتب ونقاط البيع',
    'fl.hub': 'طبقة التكامل من أركان',
    'fl.hubsub': 'المصادقة · التوجيه · إعادة المحاولة · سجل التدقيق',
    'fl.s1': 'المدفوعات',
    'fl.s2': 'الجهات الحكومية',
    'fl.s3': 'أنظمة الموارد والعملاء',
    'fl.s4': 'البيانات والسحابة',
    'fl.p1': 'يتصرّف مستخدمك — دفعة أو فاتورة أو تسجيل دخول.',
    'fl.p2': 'تتحقّق الطبقة من الهوية وتوجّه الطلب وتعيد المحاولة عند الفشل.',
    'fl.p3': 'تبقى أنظمتك متزامنة — وكل خطوة مسجّلة.',

    'int.eyebrow': 'التكامل التقني',
    'int.title': 'متّصلون بما تعمل به مؤسستك اليوم',
    'int.desc': 'طبقة تكامل واحدة موثّقة ومُراقَبة، بدلاً من مجموعة نصوص برمجية متفرّقة.',
    'i1.t': 'المدفوعات والخدمات المصرفية',
    'i2.t': 'الجهات الحكومية والالتزام',
    'i3.t': 'أنظمة الموارد والعملاء والموارد البشرية',
    'i4.t': 'السحابة والبيانات',
    'i5.t': 'المراسلة والتفاعل',
    'i6.t': 'الشحن والتجارة الإلكترونية',
    'i7.t': 'الهوية والأمن',
    'i8.t': 'لديك نظام خاص؟',
    'i8.d': 'إن كان يوفّر واجهة برمجية أو ملفات أو قاعدة بيانات، فنستطيع ربطه — بما في ذلك الأنظمة الداخلية القديمة.',
    'i8.cta': 'اسألنا عن نظامك',

    'fin.eyebrow': 'استشارات التقنية المالية',
    'fin.title': 'منتجات منظّمة، تُهندس والكتاب التنظيمي مفتوح',
    'fin.desc': 'نقدّم المشورة للبنوك وشركات التمويل ومزوّدي المدفوعات والشركات الناشئة حول ما يجب بناؤه، وكيف يُحكم، وما يتطلبه اجتياز المراجعة — ثم ننفّذه معكم.',
    'fin.cta': 'احجز جلسة استشارية',
    'f1.t': 'استراتيجية المنتج والسوق',
    'f1.d': 'دراسة الجدوى والتسعير واقتصاديات الوحدة وخطة طريق تصمد أمام أول مراجعة لمجلس الإدارة.',
    'f2.t': 'بنية المدفوعات',
    'f2.d': 'اختيار الشبكات والمستحوذين والبوابات، وتصميم دفتر الحسابات والتسويات، ومسارات المنازعات.',
    'f3.t': 'الجاهزية التنظيمية',
    'f3.d': 'توثيق وضوابط ومسارات تدقيق متوافقة مع متطلبات ساما والخدمات المصرفية المفتوحة ونطاق PCI DSS.',
    'f4.t': 'المخاطر والالتزام',
    'f4.d': 'رحلات تسجيل وقواعد فحص ومراقبة تحافظ على انسيابية التجربة والالتزام في الوقت نفسه.',

    'prc.eyebrow': 'منهجية العمل',
    'prc.title': 'إيقاع تسليم يمكنك التخطيط عليه',
    'prc.desc': 'مراحل محدّدة، وبرنامج عامل كل أسبوعين، ولا مفاجآت عند التسليم.',
    'p1.t': 'الاستكشاف',
    'p1.d': 'ورش عمل مع فريقكم لرسم العمليات والأنظمة والمستخدمين والقيود.',
    'p2.t': 'التصميم',
    'p2.d': 'بنية النظام وخريطة التكامل وواجهات قابلة للنقر — تُعتمد قبل كتابة أي سطر برمجي.',
    'p3.t': 'التطوير',
    'p3.d': 'دورات كل أسبوعين مع عروض حيّة ومراجعة للكود واختبارات آلية.',
    'p4.t': 'الربط',
    'p4.d': 'الربط بالمدفوعات وأنظمة الموارد والخدمات الحكومية في بيئة اختبار مضبوطة.',
    'p5.t': 'الإطلاق',
    'p5.d': 'اختبار قبول المستخدم ومراجعة أمنية وتدريب وخطة إطلاق مع مسار تراجع.',
    'p6.t': 'الدعم',
    'p6.d': 'مراقبة واستجابة وفق اتفاقية الخدمة وخطة للإصدار القادم.',

    'ab.eyebrow': 'عن أركان سوفتوير',
    'ab.title': 'الأساس الذي تقوم عليه عملياتك الرقمية',
    'ab.p1': '«أركان» — أي الأسس — شركة برمجيات سعودية ذات مسؤولية محدودة مقرّها الرياض. نعمل كالذراع الهندسية للجهات التي تريد برمجيات مبنية بالشكل الصحيح: نطاق واضح، ومهندسون خبراء، وأنظمة موثّقة، ودعم يستجيب.',
    'ab.p2': 'تجمع فرقنا بين المعرفة المحلية بمنصات المدفوعات والجهات الحكومية ومتطلبات الالتزام في المملكة، وبين الممارسات الهندسية الحديثة، لخدمة عملاء في القطاع المالي والتجزئة والرعاية الصحية والخدمات اللوجستية والقطاع العام.',
    'ab.f1': 'السجل التجاري',
    'ab.f2': 'نوع الكيان',
    'ab.f2v': 'شركة ذات مسؤولية محدودة',
    'ab.f3': 'المقر الرئيسي',
    'ab.f3v': 'الرياض، المملكة العربية السعودية',
    'ab.f4': 'اللغات',
    'ab.f4v': 'العربية · الإنجليزية',
    'w1.t': 'تنفيذ بخبرات عليا',
    'w1.d': 'من يحضر اجتماع الانطلاق هو من يكتب الكود.',
    'w2.t': 'العربية أولاً',
    'w2.d': 'تصميم من اليمين إلى اليسار وتواريخ هجرية ومحتوى عربي مدروس من البداية لا لاحقاً.',
    'w3.t': 'الملكية الكاملة لكم',
    'w3.d': 'تسليم كامل للكود المصدري والبنية التحتية والتوثيق.',
    'w4.t': 'نطاق ثابت وواضح',
    'w4.d': 'مراحل وأسعار مكتوبة ومتّفق عليها قبل بدء العمل.',

    'ct.eyebrow': 'اتصل بنا',
    'ct.title': 'أخبرنا بما تحتاج إلى بنائه',
    'ct.desc': 'أرسل ملخصاً موجزاً وسنرد خلال يوم عمل واحد بالخطوات التالية — أو اتصل بالمكتب مباشرة.',
    'f.name': 'الاسم الكامل',
    'f.company': 'جهة العمل',
    'f.phone': 'رقم الجوال',
    'f.email': 'البريد الإلكتروني',
    'f.service': 'كيف نستطيع المساعدة؟',
    'f.o0': 'اختر الخدمة…',
    'f.o1': 'تطبيقات الجوال',
    'f.o2': 'موقع أو منصة ويب',
    'f.o3': 'تطبيق سطح مكتب',
    'f.o4': 'تكامل تقني',
    'f.o5': 'استشارات التقنية المالية',
    'f.o6': 'الدعم والصيانة',
    'f.o7': 'شيء آخر',
    'f.msg': 'ملخص المشروع',
    'f.submit': 'إرسال الرسالة',
    'f.note': 'بإرسال هذا النموذج توافق على تواصلنا معك بشأن طلبك. لا نشارك بياناتك مع أي طرف.',
    'f.okt': 'شكراً لك — ملخصك جاهز للإرسال.',
    'f.okd': 'تم فتح برنامج البريد لديك مع التفاصيل. إن لم يظهر شيء، راسلنا على info@arkan-software.net وسنتابع من هناك.',
    'ci.tel': 'الهاتف',
    'ci.fax': 'الفاكس',
    'ci.email': 'البريد الإلكتروني',
    'ci.addr': 'العنوان',
    'ci.addrv': 'ص.ب 300019، الرياض 11372، المملكة العربية السعودية',
    'ci.hours': 'ساعات العمل',
    'ci.hoursv': 'الأحد – الخميس، 9:00 – 17:00 بتوقيت السعودية',
    'ci.cr': 'السجل التجاري',

    'ft.tagline': 'شركة أركان سوفتوير — شركة برمجيات سعودية ذات مسؤولية محدودة تبني أنظمة الجوال والويب وسطح المكتب وحلول التقنية المالية المتكاملة.',
    'ft.c1': 'الخدمات',
    'ft.c2': 'الشركة',
    'ft.c3': 'تواصل معنا',
    'ft.rights': 'شركة أركان سوفتوير. جميع الحقوق محفوظة.',

    /* JS-only strings */
    'doc.title': 'أركان سوفتوير — تطبيقات الجوال والويب وسطح المكتب واستشارات التقنية المالية | الرياض',
    'doc.desc': 'شركة أركان سوفتوير، شركة برمجيات مقرها الرياض، تبني تطبيقات الجوال ومنصات الويب وبرمجيات سطح المكتب والتكامل التقني المؤسسي واستشارات التقنية المالية.',
    'err.req': 'هذا الحقل مطلوب',
    'err.email': 'يرجى إدخال بريد إلكتروني صحيح',
    'err.brief': 'يرجى إضافة تفاصيل أكثر (10 أحرف على الأقل)',
    'mail.subject': 'طلب مشروع جديد من الموقع'
  };

  var EN = {
    'doc.title': document.title,
    'doc.desc': (document.querySelector('meta[name="description"]') || {}).content || '',
    'err.req': 'This field is required',
    'err.email': 'Please enter a valid email address',
    'err.brief': 'Please add a little more detail (10 characters minimum)',
    'f.sending': 'Sending…',
    'mail.subject': 'New project enquiry from the website'
  };

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ─────────────────────────────────────────────
     2. Language switching (EN ⇄ AR + RTL)
     ───────────────────────────────────────────── */
  var i18nNodes = $$('[data-i18n]');
  i18nNodes.forEach(function (el) { el.dataset.en = el.innerHTML; });

  var lang = 'en';
  var langBtn = $('#langToggle');
  var langLabel = $('#langLabel');

  function t(key) { return (lang === 'ar' ? AR[key] : EN[key]) || EN[key] || key; }

  /* Tajawal is ~4 files; English visitors never pay for it. */
  var arFontLoaded = false;
  function loadArabicFont() {
    if (arFontLoaded) return;
    arFontLoaded = true;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap';
    document.head.appendChild(l);
  }

  function setLang(next) {
    lang = next === 'ar' ? 'ar' : 'en';
    if (lang === 'ar') loadArabicFont();
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    i18nNodes.forEach(function (el) {
      var key = el.dataset.i18n;
      el.innerHTML = lang === 'ar' ? (AR[key] || el.dataset.en) : el.dataset.en;
    });

    document.title = t('doc.title');
    var desc = $('meta[name="description"]');
    if (desc) desc.content = t('doc.desc');
    if (langLabel) langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
    if (langBtn) langBtn.setAttribute('aria-label', lang === 'ar' ? 'التبديل إلى الإنجليزية' : 'Switch to Arabic');

    try { localStorage.setItem('arkan-lang', lang); } catch (e) {}
  }

  if (langBtn) {
    langBtn.addEventListener('click', function () { setLang(lang === 'ar' ? 'en' : 'ar'); });
  }
  /* Apply the stored choice, and always stamp lang/dir explicitly so the
     document state matches the rendered language wherever the page is hosted. */
  var saved = null;
  try { saved = localStorage.getItem('arkan-lang'); } catch (e) {}
  setLang(saved === 'ar' ? 'ar' : 'en');

  /* ─────────────────────────────────────────────
     3. Header: sticky shadow, mobile nav, active link
     ───────────────────────────────────────────── */
  var header = $('#header');
  var nav = $('#nav');
  var burger = $('#burger');
  var toTop = $('#toTop');

  function closeNav() {
    if (!nav) return;
    nav.classList.remove('is-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

  var onScroll = function () {
    var y = window.pageYOffset;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (toTop) toTop.classList.toggle('is-on', y > 700);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* active nav link based on section in view */
  var navLinks = $$('.nav__list a[href^="#"]').filter(function (a) { return !a.classList.contains('btn'); });
  var sections = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { secObs.observe(s); });
  }

  /* ─────────────────────────────────────────────
     4. Reveal on scroll
     ───────────────────────────────────────────── */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = $$('.reveal');

  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        obs.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { revObs.observe(el); });
  }

  /* ─────────────────────────────────────────────
     5. Stat counters
     ───────────────────────────────────────────── */
  function runCounter(el) {
    var target = parseInt(el.dataset.count, 10) || 0;
    var suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    var dur = 1400;
    var start = null;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var nums = $$('.num[data-count]');
  if ('IntersectionObserver' in window && nums.length) {
    var numObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        runCounter(en.target);
        obs.unobserve(en.target);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { numObs.observe(n); });
  } else {
    nums.forEach(runCounter);
  }

  /* ─────────────────────────────────────────────
     6. Contact form
        Set ENDPOINT to a POST URL when a backend or
        form service is available; until then the brief
        is handed to the visitor's mail client.
     ───────────────────────────────────────────── */
  var ENDPOINT = null;
  var MAILTO = 'info@arkan-software.net';
  var form = $('#contactForm');

  function showError(field, msg) {
    var wrap = field.closest('.field');
    var slot = $('.err[data-err="' + field.id + '"]');
    if (wrap) wrap.classList.add('has-error');
    if (slot) slot.textContent = msg;
    field.setAttribute('aria-invalid', 'true');
  }

  function clearError(field) {
    var wrap = field.closest('.field');
    var slot = $('.err[data-err="' + field.id + '"]');
    if (wrap) wrap.classList.remove('has-error');
    if (slot) slot.textContent = '';
    field.removeAttribute('aria-invalid');
  }

  function validate(field) {
    var v = (field.value || '').trim();
    if (field.required && !v) { showError(field, t('err.req')); return false; }
    if (field.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      showError(field, t('err.email')); return false;
    }
    if (field.id === 'cf-msg' && v && v.length < 10) { showError(field, t('err.brief')); return false; }
    clearError(field);
    return true;
  }

  if (form) {
    var fields = $$('input, select, textarea', form);
    fields.forEach(function (f) {
      f.addEventListener('blur', function () { validate(f); });
      f.addEventListener('input', function () {
        if (f.closest('.field').classList.contains('has-error')) validate(f);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      var firstBad = null;
      fields.forEach(function (f) {
        if (!validate(f)) { ok = false; if (!firstBad) firstBad = f; }
      });
      if (!ok) { if (firstBad) firstBad.focus(); return; }

      var data = {
        name: $('#cf-name').value.trim(),
        company: $('#cf-company').value.trim(),
        phone: $('#cf-phone').value.trim(),
        email: $('#cf-email').value.trim(),
        service: $('#cf-service').value,
        message: $('#cf-msg').value.trim()
      };

      var body = [
        'Name: ' + data.name,
        'Company: ' + (data.company || '—'),
        'Phone: ' + (data.phone || '—'),
        'Email: ' + data.email,
        'Service: ' + data.service,
        '',
        'Brief:',
        data.message
      ].join('\n');

      var done = function () {
        var ok2 = $('#formOk');
        if (ok2) { ok2.hidden = false; ok2.scrollIntoView({ block: 'nearest' }); }
        form.reset();
        fields.forEach(clearError);
      };

      if (ENDPOINT) {
        var btn = $('button[type="submit"]', form);
        var label = btn ? btn.textContent : '';
        if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); btn.textContent = t('f.sending'); }
        var settle = function () {
          if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); btn.textContent = label; }
          done();
        };
        fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(settle).catch(settle);
      } else {
        window.location.href = 'mailto:' + MAILTO +
          '?subject=' + encodeURIComponent(t('mail.subject') + ' — ' + data.name) +
          '&body=' + encodeURIComponent(body);
        done();
      }
    });
  }

  /* ─────────────────────────────────────────────
     7. The pinned flow scene
        Ambient motion (packets, hub pulse) runs only while the
        scene is actually on screen. Where the browser has no
        scroll-driven animations, the scene is shown in its
        finished state and the captions are stepped from the
        pin's scroll position instead.
     ───────────────────────────────────────────── */
  var hasScrollTimeline =
    window.CSS && CSS.supports && CSS.supports('animation-timeline: view()') &&
    CSS.supports('animation-timeline: scroll(root)');

  if (!hasScrollTimeline) document.documentElement.classList.add('no-sdt');

  var flowScroll = $('#flowscroll');
  var stage = $('.flowstage');
  var caps = $$('.flowcap li');

  if (stage && !reduce && 'IntersectionObserver' in window) {
    var liveObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        stage.classList.toggle('is-live', en.isIntersecting);
      });
    }, { threshold: 0.25 });
    liveObs.observe(stage);
  } else if (stage) {
    stage.classList.add('is-drawn');
  }

  /* fallback choreography: step the captions from the pin position */
  if (flowScroll && caps.length && !hasScrollTimeline && !reduce) {
    if (stage) stage.classList.add('is-drawn');
    var stepCaps = function () {
      var box = flowScroll.getBoundingClientRect();
      var span = box.height - window.innerHeight;
      if (span <= 0) return;
      var p = Math.min(Math.max(-box.top / span, 0), 1);
      var active = Math.min(caps.length - 1, Math.floor(p * caps.length));
      caps.forEach(function (li, i) { li.classList.toggle('is-on', i === active); });
    };
    window.addEventListener('scroll', stepCaps, { passive: true });
    stepCaps();
  }

  /* fallback reading progress */
  var rail = $('.scrollrail i');
  if (rail && !hasScrollTimeline) {
    var railTick = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      rail.style.setProperty('--p', max > 0 ? (window.pageYOffset / max).toFixed(4) : 0);
    };
    window.addEventListener('scroll', railTick, { passive: true });
    railTick();
  }

  /* ─────────────────────────────────────────────
     8. Footer year
     ───────────────────────────────────────────── */
  var year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();

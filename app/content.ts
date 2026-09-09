export type Language = "en" | "ar";
export type Bilingual = Record<Language, string>;
export type Project = {
  id: string;
  name: Bilingual;
  category: Bilingual;
  summary: Bilingual;
  problem: Bilingual;
  implementation: Bilingual;
  status: Bilingual;
  stack: string[];
  image?: string;
  color: string;
  mark: string;
  github?: string;
  live?: string;
  private?: boolean;
};
export const contact = {
  email: "alhallakabdulkareem@gmail.com",
  github: "https://github.com/abdulkareem424",
  linkedin: "https://www.linkedin.com/in/abdulkareem-alhallak-46a09b298/",
  whatsapp: "https://wa.me/963983233965",
};
export const projects: Project[] = [
  {
    id: "tabeley",
    name: { en: "Tabeley", ar: "تابيلي" },
    category: { en: "MOBILE · RESERVATIONS", ar: "تطبيق موبايل · حجوزات" },
    summary: {
      en: "A better seat at the table. A restaurant reservation platform connecting guests, venues, and the people running them.",
      ar: "تجربة حجز تجمع الزبائن والمطاعم في مكان واحد، مع أدوات لإدارة الطاولات والطلبات والعروض.",
    },
    problem: {
      en: "Restaurants need a consistent way to handle table availability, reservation requests, attendance, and offers during quieter hours.",
      ar: "تحتاج المطاعم طريقة واضحة لإدارة توافر الطاولات وطلبات الحجز والحضور والعروض في أوقات الهدوء.",
    },
    implementation: {
      en: "A Flutter and Riverpod app backed by a Laravel API, with customer, vendor, and admin flows. The MVP includes reservation states, table assignment, pricing snapshots, and blacklist rules. Development is ongoing.",
      ar: "تطبيق Flutter وRiverpod متصل بواجهة Laravel، مع مسارات للزبون وصاحب المطعم والإدارة. تشمل النسخة الأولية حالات الحجز وتوزيع الطاولات وحفظ الأسعار وقواعد الحظر، والتطوير مستمر.",
    },
    status: { en: "MVP · In development", ar: "نسخة أولية · قيد التطوير" },
    stack: ["Flutter", "Laravel", "PostgreSQL", "Docker"],
    image: "/projects/tabeley.webp",
    color: "orange",
    mark: "T",
    github: "https://github.com/abdulkareem424/tabeley-mvp",
    private: true,
  },
  {
    id: "alc",
    name: { en: "ALC Orientation", ar: "تسجيل جلسات ALC" },
    category: { en: "WEB · REGISTRATION", ar: "ويب · تسجيل وحضور" },
    summary: {
      en: "From first registration to the front door. An Arabic event workflow with Telegram confirmations and QR attendance.",
      ar: "من التسجيل حتى الدخول. منصة عربية لتسجيل الطلاب وتأكيد حضورهم عبر تيليغرام وتذاكر QR.",
    },
    problem: {
      en: "The institute needs mobile-friendly registration, controlled session capacity, student confirmation, and a straightforward check-in process.",
      ar: "يحتاج المعهد تسجيلًا سهلًا من الموبايل، وضبطًا لسعة الجلسات، وتأكيدًا للطلاب، وطريقة واضحة لتسجيل الحضور.",
    },
    implementation: {
      en: "A Node.js registration MVP with PostgreSQL and a JSON fallback, role-protected administration, a Telegram bot, QR tickets, and PDF exports. A public demo of this application is not currently linked.",
      ar: "نسخة أولية باستخدام Node.js وPostgreSQL مع تخزين JSON بديل، وإدارة بصلاحيات، وبوت تيليغرام، وتذاكر QR وتصدير PDF. لا يتوفر هنا رابط عرض عام لهذا التطبيق.",
    },
    status: { en: "Registration MVP", ar: "نسخة أولية للتسجيل" },
    stack: ["Node.js", "PostgreSQL", "Telegram API", "QR"],
    image: "/projects/alc.jpg",
    color: "blue",
    mark: "ALC",
    github: "https://github.com/abdulkareem424/alc-orientation-registration",
    private: true,
  },
  {
    id: "alhallak",
    name: { en: "Alhallak Prices", ar: "أسعار محل الحلاق" },
    category: { en: "WEB · LOCAL COMMERCE", ar: "ويب · تجارة محلية" },
    summary: {
      en: "Clear prices. Less back-and-forth. A mobile-first wholesale catalog with US dollar and Syrian pound pricing.",
      ar: "أسعار واضحة ووصول أسرع للمعلومة. دليل أسعار جملة مناسب للموبايل بالدولار والليرة السورية.",
    },
    problem: {
      en: "Customers need current wholesale prices, and the store needs a practical way to publish price and exchange-rate changes.",
      ar: "يحتاج الزبائن أسعار الجملة الحالية، ويحتاج المحل طريقة عملية لنشر تغييرات الأسعار وسعر الصرف.",
    },
    implementation: {
      en: "A static HTML, CSS, and JavaScript catalog with Arabic RTL layout, search, and currency conversion. GitHub Actions refresh exchange-rate data and publish catalog changes through the owner’s GitHub workflow.",
      ar: "دليل مبني باستخدام HTML وCSS وJavaScript، بواجهة عربية واتجاه RTL وبحث وتحويل عملات. تحدّث GitHub Actions بيانات الصرف وتنشر تغييرات الدليل عبر حساب المالك.",
    },
    status: { en: "Live website", ar: "موقع متاح" },
    stack: ["JavaScript", "GitHub Actions", "HTML / CSS"],
    color: "olive",
    mark: "الحلّاق",
    github: "https://github.com/abdulkareem424/alhallak-prices-live",
    live: "https://abdulkareem424.github.io/alhallak-prices-live/",
  },
  {
    id: "physio",
    name: { en: "Physio Center", ar: "إدارة مركز العلاج" },
    category: {
      en: "DESKTOP · CLINIC OPERATIONS",
      ar: "سطح مكتب · إدارة عيادة",
    },
    summary: {
      en: "A calmer working day for the clinic. A desktop prototype bringing patients, appointments, and daily operations together.",
      ar: "يوم عمل أكثر تنظيمًا. نموذج لسطح المكتب يجمع المرضى والمواعيد والعمليات اليومية للعيادة.",
    },
    problem: {
      en: "Clinic staff need a clear workflow for patient records, appointments, queues, visits, billing, and reporting.",
      ar: "يحتاج موظفو العيادة مسارًا واضحًا لسجلات المرضى والمواعيد والطوابير والزيارات والفوترة والتقارير.",
    },
    implementation: {
      en: "A routed Flutter desktop interface and Laravel development API foundation, with Arabic and English localization. Database persistence, licensing, and production deployment remain subsequent implementation stages.",
      ar: "واجهة Flutter لسطح المكتب مع تنقل بين الشاشات وأساس API باستخدام Laravel، ودعم العربية والإنكليزية. يبقى استكمال حفظ البيانات والترخيص والنشر التشغيلي مراحل لاحقة.",
    },
    status: { en: "Prototype · In progress", ar: "نموذج تجريبي · قيد التطوير" },
    stack: ["Flutter", "Laravel", "REST API", "Dart"],
    image: "/projects/clinic.png",
    color: "violet",
    mark: "+",
    github: "https://github.com/abdulkareem424/clinic",
    private: true,
  },
];
export const copy = {
  en: {
    name: "Abdulkareem Alhallak",
    role: "Full Stack Developer",
    work: "Work",
    about: "About",
    expertise: "Expertise",
    contact: "Contact",
    talk: "Let’s talk",
    available: "Open to opportunities",
    intro: "A developer with a product mindset.",
    headline: "Ideas into",
    headlineAccent: "real things.",
    heroBody:
      "I’m Abdulkareem. I build thoughtful web and mobile applications — from the first database table to the details people touch.",
    viewWork: "Explore my work",
    resume: "View résumé",
    scroll: "Scroll to explore",
    based: "Based in Damascus, Syria",
    remote: "Working across web & mobile",
    scene: "Interactive gold orbital sculpture",
    rotate: "Drag to explore",
    pause: "Pause motion",
    play: "Resume motion",
    load3d: "Explore in 3D",
    loading3d: "Loading 3D",
    sceneError: "3D is unavailable on this device.",
    workKicker: "01 / SELECTED WORK",
    workTitle: "Real problems.",
    workAccent: "Considered solutions.",
    workIntro:
      "A selection of products I’m building, shaped around the people who use them.",
    details: "Explore project",
    source: "Source code",
    private: "Private repository",
    live: "Visit website",
    problem: "The problem",
    implementation: "My approach",
    builtWith: "Built with",
    close: "Close project",
    moreWork: "More from the workshop",
    geneva: "Geneva University",
    genevaType: "University portal · Front-end",
    wisc: "WISC Workflow",
    wiscType: "Assessment workflow · Flutter prototype",
    aboutKicker: "02 / THE PERSON BEHIND THE CODE",
    aboutTitle: "I care about how",
    aboutAccent: "the whole thing works.",
    aboutBody:
      "I’m a full stack developer based in Damascus, working with React, Laravel, Node.js, and Flutter. I enjoy turning a complicated workflow into software that feels straightforward.",
    aboutBody2:
      "My work starts with the business problem and the data. Then I connect the interface, API, and deployment — thinking through the failure cases along the way.",
    principle1: "Start with the problem",
    principleBody1:
      "Understand the people, the constraints, and what a useful outcome looks like.",
    principle2: "Build the complete flow",
    principleBody2:
      "Connect data, APIs, interfaces, and the states between them.",
    principle3: "Keep it maintainable",
    principleBody3:
      "Clear boundaries, practical choices, and room for the next iteration.",
    expertiseKicker: "03 / TOOLS OF THE TRADE",
    expertiseTitle: "A connected",
    expertiseAccent: "skill set.",
    frontend: "Interfaces",
    backend: "APIs & backend",
    mobile: "Mobile & desktop",
    delivery: "Data & delivery",
    frontendBody:
      "Responsive interfaces with care for usability and the small details.",
    backendBody: "Structured APIs, authentication, and business workflows.",
    mobileBody: "Cross-platform applications connected to real services.",
    deliveryBody: "Relational data, reproducible environments, and deployment.",
    contactKicker: "04 / START A CONVERSATION",
    contactTitle: "Have something",
    contactAccent: "in mind?",
    contactBody:
      "A full stack role, a product to build, or a problem worth solving. I’d like to hear about it.",
    email: "Send an email",
    copyEmail: "Copy email address",
    copied: "Email copied",
    copyFailed: "Select the email address to copy it manually.",
    footer: "Built with intention.",
    back: "Back to top",
    skip: "Skip to content",
    menu: "Open navigation",
    nav: "Main navigation",
  },
  ar: {
    name: "عبد الكريم الحلاق",
    role: "مطوّر ويب وتطبيقات",
    work: "الأعمال",
    about: "عني",
    expertise: "المهارات",
    contact: "التواصل",
    talk: "خلّينا نحكي",
    available: "متاح لفرص العمل",
    intro: "مطوّر يفكّر بالمنتج.",
    headline: "أحوّل الأفكار",
    headlineAccent: "إلى واقع.",
    heroBody:
      "أنا عبد الكريم. أبني تطبيقات ويب وموبايل بعناية، من أول جدول في قاعدة البيانات إلى التفاصيل التي يتفاعل معها المستخدم.",
    viewWork: "استكشف أعمالي",
    resume: "السيرة الذاتية",
    scroll: "مرّر لاستكشاف المزيد",
    based: "دمشق، سوريا",
    remote: "تطوير الويب والموبايل",
    scene: "مجسّم مداري ذهبي تفاعلي",
    rotate: "اسحب لاستكشاف المجسّم",
    pause: "إيقاف الحركة",
    play: "تشغيل الحركة",
    load3d: "استكشف بالأبعاد الثلاثية",
    loading3d: "جارٍ تحميل المجسّم",
    sceneError: "العرض ثلاثي الأبعاد غير متاح على هذا الجهاز.",
    workKicker: "01 / أعمال مختارة",
    workTitle: "مشاكل حقيقية.",
    workAccent: "حلول مدروسة.",
    workIntro:
      "مجموعة من المنتجات التي أعمل عليها، تنطلق من احتياجات مستخدميها.",
    details: "استكشف المشروع",
    source: "الكود المصدري",
    private: "مستودع خاص",
    live: "زيارة الموقع",
    problem: "المشكلة",
    implementation: "طريقة التنفيذ",
    builtWith: "التقنيات المستخدمة",
    close: "إغلاق المشروع",
    moreWork: "المزيد من الأعمال",
    geneva: "جامعة جنيف",
    genevaType: "بوابة جامعية · واجهات ويب",
    wisc: "نظام جلسات WISC",
    wiscType: "مسار جلسات تقييم · نموذج Flutter",
    aboutKicker: "02 / خلف الكود",
    aboutTitle: "أهتم بكيفية عمل",
    aboutAccent: "النظام كاملًا.",
    aboutBody:
      "أنا مطوّر Full Stack من دمشق، أعمل باستخدام React وLaravel وNode.js وFlutter. أحب تحويل إجراءات العمل المعقّدة إلى تطبيقات واضحة وسهلة الاستخدام.",
    aboutBody2:
      "أبدأ بفهم مشكلة العمل والبيانات، ثم أربط الواجهة والـAPI والنشر، مع التفكير بحالات الفشل أثناء التنفيذ.",
    principle1: "أبدأ بالمشكلة",
    principleBody1:
      "أفهم المستخدمين والقيود والنتيجة المفيدة التي نريد الوصول إليها.",
    principle2: "أبني المسار كاملًا",
    principleBody2: "أربط البيانات والواجهات وواجهات API والحالات التي بينها.",
    principle3: "أحافظ على قابلية الصيانة",
    principleBody3:
      "حدود واضحة، وخيارات عملية، ومساحة للتطوير في المرحلة التالية.",
    expertiseKicker: "03 / أدوات العمل",
    expertiseTitle: "مهارات تعمل",
    expertiseAccent: "معًا.",
    frontend: "واجهات المستخدم",
    backend: "الخلفية وواجهات API",
    mobile: "الموبايل وسطح المكتب",
    delivery: "البيانات والنشر",
    frontendBody: "واجهات متجاوبة تهتم بسهولة الاستخدام والتفاصيل الصغيرة.",
    backendBody: "واجهات API منظّمة، وصلاحيات، ومسارات عمل واضحة.",
    mobileBody: "تطبيقات متعددة المنصات متصلة بخدمات فعلية.",
    deliveryBody: "بيانات علائقية وبيئات قابلة لإعادة الإنشاء والنشر.",
    contactKicker: "04 / لنبدأ الحديث",
    contactTitle: "عندك فكرة",
    contactAccent: "نشتغل عليها؟",
    contactBody:
      "فرصة Full Stack، أو منتج تريد بناءه، أو مشكلة تحتاج حلًا. يسعدني أن أسمع عنها.",
    email: "راسلني بالبريد",
    copyEmail: "نسخ البريد الإلكتروني",
    copied: "تم نسخ البريد",
    copyFailed: "يمكنك تحديد عنوان البريد ونسخه يدويًا.",
    footer: "صُنع بعناية.",
    back: "العودة للأعلى",
    skip: "انتقل إلى المحتوى",
    menu: "فتح قائمة التنقل",
    nav: "التنقل الرئيسي",
  },
} as const;

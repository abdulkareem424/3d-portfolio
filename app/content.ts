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
  demo?: string;
  academic?: boolean;
};
export const contact = {
  email: "alhallakabdulkareem@gmail.com",
  github: "https://github.com/abdulkareem424",
  linkedin: "https://www.linkedin.com/in/abdulkareem-alhallak-46a09b298/",
  whatsapp: "https://wa.me/963983233965",
};
export const projects: Project[] = [
  {
    "id": "tabeley",
    "name": {
      "en": "Tabeley",
      "ar": "تابيلي"
    },
    "category": {
      "en": "Restaurant & Cafe Booking Platform",
      "ar": "منصة حجز المطاعم والمقاهي"
    },
    "summary": {
      "en": "A mobile-first reservation platform for restaurants and cafes, backed by a Laravel API and a Flutter application.",
      "ar": "منصة حجوزات للموبايل تجمع تطبيق Flutter وواجهة Laravel لإدارة الحجوزات والطاولات والعروض."
    },
    "problem": {
      "en": "Restaurants need a better way to manage reservations, table availability, weak-hour offers, attendance, and customer rules.",
      "ar": "منصة حجوزات للموبايل تجمع تطبيق Flutter وواجهة Laravel لإدارة الحجوزات والطاولات والعروض."
    },
    "implementation": {
      "en": "Built customer, vendor, and admin flows to manage reservation requests, table assignment, pricing snapshots, blacklist policies, and offer cards.",
      "ar": "منصة حجوزات للموبايل تجمع تطبيق Flutter وواجهة Laravel لإدارة الحجوزات والطاولات والعروض."
    },
    "status": {
      "en": "MVP / In Development",
      "ar": "نسخة أولية · قيد التطوير"
    },
    "stack": [
      "Flutter",
      "Riverpod",
      "Laravel 12",
      "Sanctum",
      "PostgreSQL",
      "Docker",
      "REST API"
    ],
    "image": "/projects/tabeley.webp",
    "color": "orange",
    "mark": "T",
    "github": "https://github.com/abdulkareem424/tabeley-mvp",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=tabeley",
    "academic": false,
    "private": true
  },
  {
    "id": "physio-center",
    "name": {
      "en": "Physio Center Management System",
      "ar": "نظام إدارة مركز العلاج"
    },
    "category": {
      "en": "Clinic Operations System",
      "ar": "إدارة العمليات اليومية للعيادة"
    },
    "summary": {
      "en": "A desktop-first clinic management system with a Flutter client, Laravel API, PostgreSQL schema, appointments, queue, billing, reports, and backup flows.",
      "ar": "نظام يجمع سجلات المرضى والمواعيد والطوابير والفواتير والتقارير، مع عميل Flutter لسطح المكتب وواجهة Laravel."
    },
    "problem": {
      "en": "The clinic needs reliable local operations for patient records, appointments, queue handling, visits, invoices, payments, reports, and LAN-ready access.",
      "ar": "نظام يجمع سجلات المرضى والمواعيد والطوابير والفواتير والتقارير، مع عميل Flutter لسطح المكتب وواجهة Laravel."
    },
    "implementation": {
      "en": "Designed a Laravel API contract and PostgreSQL data model with a Flutter desktop client for day-to-day clinic workflows and local deployment.",
      "ar": "نظام يجمع سجلات المرضى والمواعيد والطوابير والفواتير والتقارير، مع عميل Flutter لسطح المكتب وواجهة Laravel."
    },
    "status": {
      "en": "MVP / Architecture & Implementation",
      "ar": "نسخة أولية · تصميم وتنفيذ"
    },
    "stack": [
      "Flutter Desktop",
      "Laravel 13",
      "PostgreSQL",
      "REST API",
      "UUIDs",
      "LAN-ready"
    ],
    "image": "/projects/clinic.png",
    "color": "violet",
    "mark": "+",
    "github": "https://github.com/abdulkareem424/clinic",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=physio-center",
    "academic": false,
    "private": true
  },
  {
    "id": "alc-orientation",
    "name": {
      "en": "ALC Orientation Registration",
      "ar": "تسجيل جلسات ALC"
    },
    "category": {
      "en": "Event Registration & Attendance Platform",
      "ar": "تسجيل الفعاليات والحضور"
    },
    "summary": {
      "en": "A production-ready registration platform for an Arabic ALC orientation session, with student signup, Telegram confirmation, admin dashboards, QR tickets, and attendance scanning.",
      "ar": "منصة تسجيل عربية تشمل تأكيد تيليغرام ولوحات الإدارة وتذاكر QR ومسح الحضور وتصدير PDF."
    },
    "problem": {
      "en": "The institute needed a fast, mobile-friendly way to collect orientation registrations, confirm students through Telegram, control session capacity, and check attendees in at the door.",
      "ar": "منصة تسجيل عربية تشمل تأكيد تيليغرام ولوحات الإدارة وتذاكر QR ومسح الحضور وتصدير PDF."
    },
    "implementation": {
      "en": "Built a Node.js web app with RTL landing and registration pages, protected admin/session-manager flows, PostgreSQL persistence with JSON fallback, QR ticket generation, PDF downloads, and Telegram bot integrations.",
      "ar": "منصة تسجيل عربية تشمل تأكيد تيليغرام ولوحات الإدارة وتذاكر QR ومسح الحضور وتصدير PDF."
    },
    "status": {
      "en": "Production-ready MVP",
      "ar": "نسخة أولية جاهزة للتشغيل"
    },
    "stack": [
      "Node.js",
      "Vanilla JS",
      "PostgreSQL",
      "Telegram Bot API",
      "QR Codes",
      "jsPDF",
      "Docker"
    ],
    "image": "/projects/alc.jpg",
    "color": "blue",
    "mark": "ALC",
    "github": "https://github.com/abdulkareem424/alc-orientation-registration",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=alc-orientation",
    "academic": false,
    "private": true
  },
  {
    "id": "acadia-store",
    "name": {
      "en": "Acadia E-commerce Website",
      "ar": "متجر Acadia"
    },
    "category": {
      "en": "Storefront, Admin, and API",
      "ar": "متجر إلكتروني · واجهة وإدارة وAPI"
    },
    "summary": {
      "en": "A full-stack e-commerce store with React frontend, Express API, Prisma models, product uploads, authentication, and cart flow.",
      "ar": "متجر متكامل بواجهة React وواجهة Express لإدارة المنتجات والتصنيفات والمصادقة وسلة التسوق ورفع الصور."
    },
    "problem": {
      "en": "A local store needs a branded online storefront with product management, categories, secure auth, and a practical shopping workflow.",
      "ar": "متجر متكامل بواجهة React وواجهة Express لإدارة المنتجات والتصنيفات والمصادقة وسلة التسوق ورفع الصور."
    },
    "implementation": {
      "en": "Built separate frontend and backend apps using React Router, Axios, Express, Prisma, JWT, validation, uploads, and product/category services.",
      "ar": "متجر متكامل بواجهة React وواجهة Express لإدارة المنتجات والتصنيفات والمصادقة وسلة التسوق ورفع الصور."
    },
    "status": {
      "en": "Full-stack MVP",
      "ar": "نسخة أولية متكاملة"
    },
    "stack": [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express",
      "Prisma",
      "JWT",
      "Multer",
      "Zod"
    ],
    "color": "olive",
    "mark": "AC",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=acadia-store",
    "academic": false,
    "private": false
  },
  {
    "id": "alhallak-prices",
    "name": {
      "en": "Alhallak Store Prices | أسعار محل الحلاق",
      "ar": "أسعار محل الحلاق"
    },
    "category": {
      "en": "Wholesale Price Management Platform",
      "ar": "إدارة أسعار الجملة"
    },
    "summary": {
      "en": "A mobile-first Arabic price board for publishing wholesale product prices in USD and SYP, with exchange-rate updates and a protected management page.",
      "ar": "لوحة أسعار عربية مناسبة للموبايل تعرض المنتجات بالدولار والليرة السورية، مع البحث وتحديث سعر الصرف وإدارة الدليل."
    },
    "problem": {
      "en": "Customers need a fast, reliable way to check current wholesale prices, while the store needs to update products and currency conversions without rebuilding the website.",
      "ar": "لوحة أسعار عربية مناسبة للموبايل تعرض المنتجات بالدولار والليرة السورية، مع البحث وتحديث سعر الصرف وإدارة الدليل."
    },
    "implementation": {
      "en": "Built a responsive RTL price board with product search, USD-to-SYP conversion, exchange-rate update tracking, and an admin workflow for maintaining the published catalog.",
      "ar": "لوحة أسعار عربية مناسبة للموبايل تعرض المنتجات بالدولار والليرة السورية، مع البحث وتحديث سعر الصرف وإدارة الدليل."
    },
    "status": {
      "en": "Live / Production",
      "ar": "موقع متاح"
    },
    "stack": [
      "React",
      "Vite",
      "JavaScript",
      "GitHub Pages",
      "Responsive RTL UI"
    ],
    "color": "olive",
    "mark": "الحلّاق",
    "github": "https://github.com/abdulkareem424/alhallak-prices-live",
    "live": "https://abdulkareem424.github.io/alhallak-prices-live/",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=alhallak-prices",
    "academic": false,
    "private": false
  },
  {
    "id": "geneva-university",
    "name": {
      "en": "Geneva International University",
      "ar": "جامعة جنيف الدولية"
    },
    "category": {
      "en": "University Portal / E-learning Front-end",
      "ar": "بوابة جامعية · واجهات تعلم إلكتروني"
    },
    "summary": {
      "en": "A responsive multi-page university portal featuring course discovery, admissions content, account flows, an administration prototype, university news, and interactive front-end experiences.",
      "ar": "بوابة جامعية متعددة الصفحات تشمل استكشاف المقررات والقبول والأخبار وواجهات الحساب والإدارة، بتصميم متجاوب."
    },
    "problem": {
      "en": "Prospective students need one responsive front-end experience for discovering university information, courses, admissions guidance, faculty, news, and account entry points.",
      "ar": "بوابة جامعية متعددة الصفحات تشمل استكشاف المقررات والقبول والأخبار وواجهات الحساب والإدارة، بتصميم متجاوب."
    },
    "implementation": {
      "en": "Built a static multi-page portal with reusable styling, responsive navigation, course filtering, admissions and account prototypes, faculty and news interactions, and GitHub Pages deployment.",
      "ar": "بوابة جامعية متعددة الصفحات تشمل استكشاف المقررات والقبول والأخبار وواجهات الحساب والإدارة، بتصميم متجاوب."
    },
    "status": {
      "en": "Academic / Front-end Project",
      "ar": "مشروع أكاديمي · واجهات"
    },
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Responsive Design"
    ],
    "color": "blue",
    "mark": "GIU",
    "github": "https://github.com/abdulkareem424/geneeua-university",
    "live": "https://abdulkareem424.github.io/geneeua-university/",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=geneva-university",
    "academic": true,
    "private": false
  },
  {
    "id": "image-editor",
    "name": {
      "en": "Image Editor Desktop App",
      "ar": "محرّر الصور لسطح المكتب"
    },
    "category": {
      "en": "Academic Project",
      "ar": "معالجة الصور"
    },
    "summary": {
      "en": "A desktop image editor built with C# WinForms with basic and advanced image editing tools.",
      "ar": "محرّر صور بلغة C# وWinForms يضم القص والدوران والقلب والفلاتر والنصوص والأشكال والتراجع والإعادة."
    },
    "problem": {
      "en": "A desktop image editor built with C# WinForms with basic and advanced image editing tools.",
      "ar": "محرّر صور بلغة C# وWinForms يضم القص والدوران والقلب والفلاتر والنصوص والأشكال والتراجع والإعادة."
    },
    "implementation": {
      "en": "Grayscale · Crop · Rotate · Flip · Color channels · Shapes · Text · Filters · Undo / Redo",
      "ar": "محرّر صور بلغة C# وWinForms يضم القص والدوران والقلب والفلاتر والنصوص والأشكال والتراجع والإعادة."
    },
    "status": {
      "en": "Academic",
      "ar": "مشروع أكاديمي"
    },
    "stack": [
      "C#",
      "WinForms",
      "Image Processing"
    ],
    "color": "violet",
    "mark": "C#",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=image-editor",
    "academic": true,
    "private": false
  },
  {
    "id": "physio-api",
    "name": {
      "en": "Physio Center Node API",
      "ar": "واجهة مركز العلاج Node API"
    },
    "category": {
      "en": "Backend Training Project",
      "ar": "تطوير الخلفيات"
    },
    "summary": {
      "en": "A Node.js backend prototype for a physiotherapy center using Express, Sequelize, SQL Server, JWT authentication, and role-aware APIs.",
      "ar": "نموذج واجهة خلفية لمركز علاج باستخدام Express وSequelize وSQL Server، مع مصادقة JWT وصلاحيات المستخدمين."
    },
    "problem": {
      "en": "A Node.js backend prototype for a physiotherapy center using Express, Sequelize, SQL Server, JWT authentication, and role-aware APIs.",
      "ar": "نموذج واجهة خلفية لمركز علاج باستخدام Express وSequelize وSQL Server، مع مصادقة JWT وصلاحيات المستخدمين."
    },
    "implementation": {
      "en": "Authentication · CORS setup · Environment config · SQL Server connection · ORM models · API foundation",
      "ar": "نموذج واجهة خلفية لمركز علاج باستخدام Express وSequelize وSQL Server، مع مصادقة JWT وصلاحيات المستخدمين."
    },
    "status": {
      "en": "Training / Backend Prototype",
      "ar": "مشروع تدريبي"
    },
    "stack": [
      "Node.js",
      "Express",
      "Sequelize",
      "SQL Server",
      "JWT",
      "bcrypt"
    ],
    "color": "orange",
    "mark": "API",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=physio-api",
    "academic": true,
    "private": false
  },
  {
    "id": "http-server",
    "name": {
      "en": "Simple HTTP Web Server",
      "ar": "خادم HTTP بسيط"
    },
    "category": {
      "en": "Networking Project",
      "ar": "الشبكات والبروتوكولات"
    },
    "summary": {
      "en": "A Python HTTP server that handles GET and POST requests, serves static files, and processes multipart uploads.",
      "ar": "خادم Python يستقبل طلبات GET وPOST ويقدّم الملفات الثابتة ويعالج رفع الملفات بصيغة multipart."
    },
    "problem": {
      "en": "A Python HTTP server that handles GET and POST requests, serves static files, and processes multipart uploads.",
      "ar": "خادم Python يستقبل طلبات GET وPOST ويقدّم الملفات الثابتة ويعالج رفع الملفات بصيغة multipart."
    },
    "implementation": {
      "en": "GET requests · POST requests · Static files · File uploads · Multipart parsing",
      "ar": "خادم Python يستقبل طلبات GET وPOST ويقدّم الملفات الثابتة ويعالج رفع الملفات بصيغة multipart."
    },
    "status": {
      "en": "Training Project",
      "ar": "مشروع تدريبي"
    },
    "stack": [
      "Python",
      "Sockets",
      "HTTP",
      "Multipart Upload"
    ],
    "color": "blue",
    "mark": "HTTP",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=http-server",
    "academic": true,
    "private": false
  },
  {
    "id": "data-mining",
    "name": {
      "en": "Data Mining Notebook",
      "ar": "دفتر تنقيب البيانات"
    },
    "category": {
      "en": "Data & ML Project",
      "ar": "البيانات والتعلم الآلي"
    },
    "summary": {
      "en": "A notebook applying classification, regression, and clustering techniques on real datasets.",
      "ar": "دفتر Jupyter يطبق التصنيف والانحدار والتجميع ومعالجة البيانات باستخدام Pandas وScikit-learn."
    },
    "problem": {
      "en": "A notebook applying classification, regression, and clustering techniques on real datasets.",
      "ar": "دفتر Jupyter يطبق التصنيف والانحدار والتجميع ومعالجة البيانات باستخدام Pandas وScikit-learn."
    },
    "implementation": {
      "en": "KNN · Decision Tree · Linear Regression · KMeans · Dataset preprocessing",
      "ar": "دفتر Jupyter يطبق التصنيف والانحدار والتجميع ومعالجة البيانات باستخدام Pandas وScikit-learn."
    },
    "status": {
      "en": "Academic",
      "ar": "مشروع أكاديمي"
    },
    "stack": [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "Scikit-learn"
    ],
    "color": "olive",
    "mark": "ML",
    "demo": "https://abdulkareem424.github.io/portfolio/?project=data-mining",
    "academic": true,
    "private": false
  }
];
export const copy = {
  en: {
    name: "Abdulkareem Alhallak",
    role: "Full Stack Developer",
    work: "Work",
    about: "About",
    expertise: "Expertise",
    contact: "Contact",
    talk: "Contact",
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
    footer: "Abdulkareem Alhallak",
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
    talk: "تواصل معي",
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
    footer: "عبد الكريم الحلاق",
    back: "العودة للأعلى",
    skip: "انتقل إلى المحتوى",
    menu: "فتح قائمة التنقل",
    nav: "التنقل الرئيسي",
  },
} as const;

/* =========================================================
   config.js — ملف الإعدادات المركزي للبورتفوليو
   كل المحتوى يُعدَّل من هنا فقط (شهادات / معرض / مشاريع)
   ========================================================= */

/* مسار صورة بديلة عند غياب أي صورة (SVG مدمج) */
const PLACEHOLDER_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>" +
  "<rect width='800' height='600' fill='#0b0e17'/>" +
  "<rect x='16' y='16' width='768' height='568' rx='18' fill='none' stroke='#3b82f6' stroke-opacity='0.35' stroke-width='2' stroke-dasharray='10 8'/>" +
  "<circle cx='400' cy='255' r='56' fill='#3b82f6' fill-opacity='0.15'/>" +
  "<path d='M371 277 l21 -36 14 22 10 -14 14 28 z' fill='#60a5fa' opacity='0.9'/>" +
  "<text x='400' y='372' font-family='Cairo, Arial, sans-serif' font-size='26' fill='#9ca3af' text-anchor='middle'>No Image</text>" +
  "</svg>"
);

const CONFIG = {

  /* ---------- ملف CV ---------- */
  cv: {
    file: "assets/cv/Ahmed-Elkot-CV.pdf",
    downloadName: "Ahmed-Elkot-CV.pdf"
  },

  /* ---------- كلمات Typewriter ---------- */
  typewriter: {
    ar: ["طالب MIS", "UI/UX Designer", "Data Analyst", "Web Developer"],
    en: ["MIS Student", "UI/UX Designer", "Data Analyst", "Web Developer"]
  },

  /* ---------- المشاريع ---------- */
  projects: [
    {
      icon: "fas fa-prescription-bottle-medical",
      title: { ar: "Pharma Car", en: "Pharma Car" },
      description: {
        ar: "مشروع يهتم بتسهيل الوصول إلى الأدوية والصيدليات والخدمات المرتبطة بها، بواجهات واضحة وسهلة الاستخدام وتجربة بحث سريعة.",
        en: "A project focused on making it easy to reach medicines, pharmacies and related services, with clear user-friendly interfaces."
      },
      tags: ["Web", "UI/UX", "Pharmacy"],
      link: ""
    },
    {
      icon: "fas fa-chart-pie",
      title: { ar: "InsightIQ", en: "InsightIQ" },
      description: {
        ar: "مشروع Business Intelligence / تحليل بيانات يركز على تحويل البيانات إلى لوحة معلومات (Dashboard) ورؤى واضحة تدعم اتخاذ القرار.",
        en: "A BI / Data Analysis project focused on turning data into clear dashboards and insights that support better decisions."
      },
      tags: ["Data Analysis", "Power BI", "Dashboards"],
      link: ""
    },
    {
      icon: "fas fa-graduation-cap",
      title: { ar: "Educational Portal", en: "Educational Portal" },
      description: {
        ar: "فكرة مشروع تخرج: منصة تعليمية رقمية تجمع الدورات والمحتوى التعليمي مع متابعة تقدم الطلاب وتقارير للدعم الأكاديمي.",
        en: "Graduation project idea: a digital educational portal with courses, student progress tracking and academic reports."
      },
      tags: ["Graduation Project", "E-Learning", "Web"],
      link: ""
    }
  ]
};

CONFIG.certificates = [
  /* لإضافة شهادة جديدة: انسخ عنصرًا بنفس الحقول داخل المصفوفة.
     الحقول: title / organization / date / duration / description / image / certificateLink
     كل حقل يقبل نصًا واحدًا "..." أو ثنائي اللغة { ar:"...", en:"..." }.
     اترك image فارغًا "" لعرض صورة بديلة تلقائيًا. */
  {
    title: { ar: "HCIA-AI V4.0 Course — Certificate of Completion", en: "HCIA-AI V4.0 Course — Certificate of Completion" },
    organization: { ar: "Huawei ICT Academy — IFCE", en: "Huawei ICT Academy — IFCE" },
    date: "2026",
    duration: "",
    description: {
      ar: "دورة ذكاء اصطناعي من أكاديمية Huawei ICT Academy تغطي أساسيات الذكاء الاصطناعي والتعلم الآلي وتطبيقاته العملية.",
      en: "An AI course from Huawei ICT Academy covering AI fundamentals, machine learning concepts, and practical applications."
    },
   image: "assets/images/certificates/hcia-ai-huawei.png",
    certificateLink: ""
  },
  {
    title: {
      ar: "شهادة إتمام — الذكاء الاصطناعي",
      en: "Artificial Intelligence — Certificate of Completion"
    },
    organization: {
      ar: "Microsoft / تَوَر كاير / وزارة الشباب والرياضة",
      en: "Microsoft / TawarCayar / Ministry of Youth and Sports"
    },
    date: "18/04/2026 – 20/04/2026",
    duration: "3 Days",
    description: {
      ar: "شهادة إتمام في مجال الذكاء الاصطناعي ضمن برنامج تدريبي مقدم بالتعاون مع Microsoft وTawarCayar ووزارة الشباب والرياضة، خلال الفترة من 18/04/2026 إلى 20/04/2026.",
      en: "Certificate of Completion in Artificial Intelligence from a training program delivered with Microsoft, TawarCayar, and the Ministry of Youth and Sports, completed from 18/04/2026 to 20/04/2026."
    },
    image: "assets/images/certificates/ai-microsoft-tawarcayar.jpeg",
    certificateLink: ""
  },
  {
    title: { ar: "UI/UX Design Program — Creativa / ITIDA / TIEC", en: "UI/UX Design Program — Creativa / ITIDA / TIEC" },
    organization: { ar: "Creativa / ITIDA / TIEC", en: "Creativa / ITIDA / TIEC" },
    date: "2026",
    duration: "",
    description: {
      ar: "برنامج تدريبي في تصميم المنتجات الرقمية وتجربة المستخدم ضمن مبادرات Creativa / ITIDA / TIEC، مع بناء نماذج أولية تفاعلية.",
      en: "Digital product and UX design training within Creativa / ITIDA / TIEC initiatives, including interactive prototyping."
    },
    image: "assets/images/certificates/creativa-uiux.jpeg",
    certificateLink: ""
  },
  {
    title: "Introduction to Microsoft SQL Server Databases",
    organization: { ar: "منصة إدراك — Edraak", en: "Edraak" },
    date: "2026-03-13",
    duration: "",
    description: {
      ar: "شهادة معتمدة من منصة إدراك برعاية البنك العربي، تغطي أساسيات قواعد البيانات والاستعلامات وأنواع البيانات والفهرسة والجداول.",
      en: "Certified course from Edraak covering database fundamentals, queries, data types, indexing, and tables."
    },
    image: "assets/images/certificates/sql-server-edraak.jpeg",
    certificateLink: ""
  },
  {
    title: { ar: "تطوير تطبيقات قواعد البيانات باستخدام Java (JDBC)", en: "Java Database Applications (JDBC)" },
    organization: { ar: "معهد تكنولوجيا المعلومات (ITI) — مهارة تك", en: "ITI — Maharatech" },
    date: "2026-03-14",
    duration: "",
    description: {
      ar: "دورة تطبيقية من ITI عبر منصة مهارة تك، متخصصة في ربط لغة Java بقواعد البيانات باستخدام JDBC بكفاءة عالية.",
      en: "Applied course from ITI via Maharatech, specialized in connecting Java applications to databases efficiently using JDBC."
    },
    image: "assets/images/certificates/java-jdbc-iti.jpeg",
    certificateLink: ""
  },
  {
    title: "Microsoft Excel Professional Course",
    organization: { ar: "منصة معارف", en: "Maaref Platform" },
    date: "2026-03-09",
    duration: "",
    description: {
      ar: "شهادة إنجاز واحتراف لبرنامج Microsoft Excel من منصة معارف، تشمل جداول البيانات والتحليل المالي والمعادلات المتقدمة.",
      en: "Achievement certificate for Microsoft Excel from Maaref Platform covering spreadsheets, financial analysis, and advanced formulas."
    },
    image: "assets/images/certificates/excel-maaref.jpeg",
    certificateLink: ""
  },
  {
    title: {
      ar: "شهادة حضور — Build with AI Masr Edition",
      en: "Build with AI Masr Edition — Certificate of Attendance"
    },
    organization: {
      ar: "Google for Developers — Information Technology",
      en: "Google for Developers — Information Technology"
    },
    date: "",
    duration: "",
    description: {
      ar: "شهادة حضور للمشاركة المسجلة في جلسات Build with AI Masr Edition الافتراضية، ضمن فعالية Build with AI Masr Edition.",
      en: "Certificate of Attendance awarded for participating as a registered participant in the virtual sessions of the Build with AI Masr Edition."
    },
    image: "assets/images/certificates/build-with-ai-masr-google.jpeg",
    certificateLink: ""
  },
  {
    title: {
      ar: "أساسيات تصميم تجربة المستخدم",
      en: "UX Design Fundamentals"
    },
    organization: {
      ar: "منصة مهارة تك — منصة معهد تكنولوجيا المعلومات (ITI)",
      en: "Mahara-Tech — Information Technology Institute Platform"
    },
    date: "05/06/26",
    duration: {
      ar: "ساعة و23 دقيقة",
      en: "1 Hour, 23 Minutes"
    },
    description: {
      ar: "شهادة إتمام لدورة UX Design Fundamentals من منصة معهد تكنولوجيا المعلومات (ITI) عبر Mahara-Tech، بإجمالي مدة تعلم 1 ساعة و23 دقيقة، وتم إتمامها بتاريخ 05/06/2026. ",
      en: "Certificate of Completion for the UX Design Fundamentals course on the Information Technology Institute platform via Mahara-Tech, with a total course time of 1 hour and 23 minutes, completed on 05/06/2026."
    },
    image: "assets/images/certificates/ux-fundamentals-maharatech.jpeg",
    certificateLink: ""
  },
  {
    title: {
      ar: "الذكاء الاصطناعي التوليدي لمهام الموارد البشرية — توصيف الوظائف والمقابلات والتغذية الراجعة",
      en: "Generative AI for HR Tasks — Job Descriptions, Interviews & Feedback"
    },
    organization: {
      ar: "وزارة الاتصالات وتكنولوجيا المعلومات — معهد تكنولوجيا المعلومات (ITI) — منصة مهارة تك",
      en: "Ministry of Communications and Information Technology — Information Technology Institute (ITI) — Mahara-Tech"
    },
    date: "04/06/2026",
    duration: {
      ar: "ساعة ودقيقتان",
      en: "1 hour 2 minutes"
    },
    description: {
      ar: "شهادة إتمام لدورة Generative AI for HR Tasks حول استخدام الذكاء الاصطناعي التوليدي في توصيف الوظائف والمقابلات والتغذية الراجعة عبر منصة معهد تكنولوجيا المعلومات (ITI) – Mahara-Tech، بإجمالي مدة ساعة ودقيقتين، وتم إتمامها في 04/06/2026.",
      en: "Certificate of Completion for the Generative AI for HR Tasks course, covering generative AI applications in job descriptions, interviews, and feedback through the ITI Platform – Mahara-Tech, with a total duration of 1 hour and 2 minutes, completed on June 4, 2026."
    },
    image: "assets/images/certificates/generative-ai-hr-iti.png",
    certificateLink: ""
  }
  /* ---------- قالب شهادة جديدة (انسخه وألصقه داخل المصفوفة أعلاه) ----------
  ,
  {
    title: { ar: "اسم الشهادة", en: "Certificate Title" },
    organization: { ar: "الجهة المانحة", en: "Provider" },
    date: "2026-01-15",
    duration: { ar: "20 ساعة", en: "20 hours" },
    description: { ar: "وصف مختصر للشهادة.", en: "Short certificate description." },
    image: "assets/images/certificates/my-certificate.jpg",
    certificateLink: ""
  }
  --------------------------------------------------------------------- */
];

/* ---------- معرض اللحظات ----------
   ضع الصور في: assets/images/gallery/  (احتفظ بأسماء الملفات كما هي)
   category: official | leisure | friends | childhood | work | university | ai
   لتغيير صورة: عدّل image فقط. لتغيير العنوان أو الوصف: عدّل title / description. */
CONFIG.gallery = {
  categories: [
    { id: "all",        label: { ar: "الكل", en: "All" } },
    { id: "official",   label: { ar: "الصفحة الرسمية", en: "Official" } },
    { id: "leisure",    label: { ar: "وقت الترفيه", en: "Leisure" } },
    { id: "friends",    label: { ar: "مع الأصدقاء", en: "Friends" } },
    { id: "childhood",  label: { ar: "وأنا صغير", en: "Childhood" } },
    { id: "work",       label: { ar: "وأنا في العمل", en: "Work" } },
    { id: "university", label: { ar: "في الجامعة", en: "University" } },
    { id: "ai",         label: { ar: "AI Generate", en: "AI Generate" } }
  ],
  items: [
    { image: "assets/images/gallery/official-1.jpg",                                                                          category: "official",   title: { ar: "من الصفحة الرسمية", en: "From the official page" },   description: { ar: "لحظة من محتوى الصفحة الرسمية.", en: "A moment from the official page content." } },
    { image: "assets/images/gallery/leisure-1.jpg",                                                    category: "leisure",    title: { ar: "وقت الترفيه", en: "Leisure time" },                   description: { ar: "لحظة من وقت الترفيه والراحة.", en: "A moment of leisure and rest." } },
    { image: "assets/images/gallery/friends-1.jpg",                                                     category: "friends",    title: { ar: "مع الأصدقاء", en: "With friends" },                   description: { ar: "وقت جميل مع الأصدقاء.", en: "A great time with friends." } },
    { image: "assets/images/gallery/childhood-1.jpg",                                                    category: "childhood",  title: { ar: "ذكريات الطفولة", en: "Childhood memories" },          description: { ar: "صورة من أيام الطفولة.", en: "A photo from childhood days." } },
    { image: "assets/images/gallery/work-1.jpg",                                                     category: "work",       title: { ar: "وأنا في العمل", en: "At work" },                      description: { ar: "من موقع العمل أو أثناء إنجاز مهمة.", en: "From the workplace or while finishing a task." } },
    { image: "assets/images/gallery/university-1.jpg",                                                                                     category: "university", title: { ar: "في الجامعة", en: "University days" },                 description: { ar: "من يوم داخل المعهد.", en: "From a day at the institute." } },
    { image: "assets/images/gallery/ai-1.png",                                             category: "ai",         title: { ar: "صورة بالذكاء الاصطناعي", en: "AI generated artwork" }, description: { ar: "صورة تم إنشاؤها بأدوات الذكاء الاصطناعي.", en: "An image created using AI tools." } },
    { image: "assets/images/gallery/ai-2.png",                   category: "ai",         title: { ar: "إبداع بالذكاء الاصطناعي", en: "AI creativity" },       description: { ar: "تجربة أخرى مع أدوات توليد الصور.", en: "Another experiment with image generation tools." } }
  ]
};

/* ---------- المهارات ---------- */
CONFIG.skills = [
  { icon: "fas fa-pen-ruler", title: { ar: "UI/UX Design", en: "UI/UX Design" },
    items: ["User Research", "Information Architecture", "Personas", "User Flows", "Wireframing", "Prototyping", "UI Design", "Usability Testing", "Figma", "Responsive Design"] },
  { icon: "fas fa-chart-line", title: { ar: "تحليل البيانات", en: "Data Analysis" },
    items: ["Microsoft Excel", "Power BI", "Data Cleaning", "Data Visualization", "Data Analysis", "SQL", "Python", "Pandas"] },
  { icon: "fas fa-code", title: { ar: "تطوير الويب", en: "Web Development" },
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "REST APIs"] },
  { icon: "fas fa-database", title: { ar: "قواعد البيانات", en: "Databases" },
    items: ["MySQL", "SQL Server", "SQL", "MongoDB", "Database Design"] },
  { icon: "fas fa-toolbox", title: { ar: "أدوات", en: "Tools" },
    items: ["Git", "GitHub", "Figma", "Postman", "VS Code"] },
  { icon: "fas fa-robot", title: { ar: "الذكاء الاصطناعي", en: "AI" },
    items: ["Generative AI", "AI-assisted Development", "Prompt Engineering", "AI Tools"] },
  { icon: "fas fa-plus", title: { ar: "مهارات إضافية (من الموقع الأصلي)", en: "Additional Skills (from original site)" },
    items: ["Java / JDBC", "C++ / Logic", "Digital Marketing"] }
];



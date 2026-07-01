// Single source of truth for business info, used across metadata, schema,
// and components to guarantee NAP (Name/Address/Phone) consistency.

export const SITE = {
  name: "Career Heights Gaya",
  legalName: "Career Heights Gaya",
  tagline: "Gaya's #1 CLAT Coaching Institute",
  url: "https://careerheightsgaya.com",
  phone: "+91 91999 72878",
  phoneHref: "tel:+919199972878",
  whatsapp: "919199972878",
  email: "support@careerheightsgaya.com",
  address: {
    street: "Opp SSP Residency, 11 - Kautilyapuri Colony",
    locality: "Gaya",
    region: "Bihar",
    postalCode: "823001",
    country: "IN",
    full: "Opp SSP Residency, 11 - Kautilyapuri Colony, Gaya, Bihar 823001",
  },
  geo: {
    lat: 24.7955,
    lng: 84.9994,
  },
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  hoursSchema: "Mo-Sa 09:00-19:00",
  founder: "Avinash Kumar",
  founderCredentials: "B.Tech, M.Tech, GATE Qualified",
  founded: "2023",
  rating: {
    value: "5.0",
    count: "47",
  },
  social: {
    facebook: "https://www.facebook.com/careerheightsgaya",
    youtube: "https://www.youtube.com/@careerheightsgaya",
    instagram: "https://www.instagram.com/careerheightsgaya",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const COURSES = [
  {
    id: "clat",
    name: "CLAT Coaching in Gaya",
    short: "CLAT",
    description:
      "Comprehensive CLAT coaching in Gaya covering Legal Reasoning, Logical Reasoning, English, GK & Current Affairs, and Quantitative Techniques — built around the latest CLAT pattern.",
    highlights: ["Daily practice tests", "Personal mentorship", "Updated CLAT pattern", "Doubt-clearing sessions"],
  },
  {
    id: "ailet",
    name: "AILET Coaching Gaya",
    short: "AILET",
    description:
      "Focused AILET coaching for aspirants targeting NLU Delhi, with subject-wise strategy sessions and full-length mock tests designed for the AILET exam pattern.",
    highlights: ["NLU Delhi focused prep", "Weekly mock AILETs", "Expert faculty guidance", "Performance analytics"],
  },
  {
    id: "cuet",
    name: "CUET Coaching Gaya",
    short: "CUET",
    description:
      "Structured CUET coaching in Gaya for law aspirants, covering domain subjects, general test, and language sections with a result-oriented study plan.",
    highlights: ["Domain-specific coaching", "General test prep", "Regular assessments", "Career counselling"],
  },
  {
    id: "crash",
    name: "Crash Courses",
    short: "Crash Course",
    description:
      "Intensive, short-duration crash courses for CLAT, AILET, and CUET — ideal for last-mile revision and rapid concept building before exam day.",
    highlights: ["Fast-track revision", "High-yield topics", "Timed test series", "Flexible batches"],
  },
];

export const FACULTY = [
  {
    name: "Avinash Kumar",
    role: "Founder & Director",
    credentials: "B.Tech, M.Tech, GATE Qualified",
    bio: "8+ years of teaching experience for competitive examinations, with a corporate engineering background. Leads Career Heights with a 'Students First' philosophy.",
    image: "/images/avinash-kumar-director-career-heights-gaya.webp",
  },
  {
    name: "Ravi Kumar",
    role: "Legal Reasoning Faculty",
    credentials: "LL.B., CLAT Expert",
    bio: "Specialises in Legal Reasoning and Legal Aptitude, helping students master CLAT-pattern legal questions with clarity and speed.",
    image: "/images/faculty-ravi-kumar-clat-coaching-gaya.webp",
  },
  {
    name: "Rohit Kumar",
    role: "English & Reading Comprehension Faculty",
    credentials: "M.A. English",
    bio: "Trains students in English Language, Reading Comprehension, and Vocabulary building for CLAT, AILET, and CUET.",
    image: "/images/faculty-rohit-kumar-clat-coaching-gaya.webp",
  },
  {
    name: "Shashank",
    role: "GK & Current Affairs Faculty",
    credentials: "Subject Expert",
    bio: "Keeps students updated with structured General Knowledge and Current Affairs modules essential for CLAT and CUET.",
    image: "/images/faculty-shashank-clat-coaching-gaya.webp",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    exam: "CLAT Aspirant",
    quote:
      "The personal mentorship at Career Heights made all the difference in my legal reasoning preparation. The faculty always made time for doubts.",
    image: "/images/career-heights-gaya-student-testimonial-1.webp",
  },
  {
    name: "Aman Verma",
    exam: "AILET Aspirant",
    quote:
      "Structured mock tests and honest feedback helped me understand exactly where I was losing marks. Best CLAT coaching in Gaya, hands down.",
    image: "/images/career-heights-gaya-student-testimonial-2.webp",
  },
  {
    name: "Sneha Kumari",
    exam: "CUET Aspirant",
    quote:
      "Coming from a small town, I never thought I'd get city-level coaching quality without leaving Gaya. Career Heights changed that completely.",
    image: "/images/career-heights-gaya-student-testimonial-3.webp",
  },
];

export const FAQS = [
  {
    q: "Which is the best CLAT coaching in Gaya?",
    a: "Career Heights Gaya is widely regarded as the best CLAT coaching institute in Gaya, offering personalised mentorship, experienced faculty, and a proven 'Students First' teaching philosophy for CLAT, AILET, and CUET aspirants across Bihar.",
  },
  {
    q: "What is the fee for CLAT coaching in Bihar at Career Heights Gaya?",
    a: "Fees vary by course (CLAT, AILET, CUET, or Crash Course) and batch. Fill the enquiry form or call +91 91999 72878 for current fee structures and scholarship eligibility.",
  },
  {
    q: "How to prepare for CLAT from Gaya without relocating?",
    a: "Students in Gaya can prepare for CLAT locally at Career Heights, which offers structured classroom coaching, regular mock tests, and personal mentorship equivalent to big-city institutes — without the cost or stress of relocating.",
  },
  {
    q: "Does Career Heights Gaya offer AILET and CUET coaching too?",
    a: "Yes. Alongside CLAT coaching, Career Heights Gaya provides dedicated AILET coaching for NLU Delhi aspirants and CUET coaching for law and other undergraduate programmes.",
  },
  {
    q: "Where is Career Heights Gaya located?",
    a: "Career Heights is located at Opp SSP Residency, 11 - Kautilyapuri Colony, Gaya, Bihar 823001 — easily accessible from across Gaya city.",
  },
  {
    q: "What batch timings are available at Career Heights Gaya?",
    a: "Career Heights runs multiple batches between 9:00 AM and 7:00 PM, Monday to Saturday, including weekday and weekend-friendly options. Contact us to check current batch availability.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "best-clat-coaching-in-gaya",
    title: "Why Career Heights is the Best CLAT Coaching in Gaya",
    excerpt:
      "A closer look at what makes CLAT coaching effective in a Tier-2 city like Gaya, and how personal mentorship changes outcomes.",
    category: "CLAT Coaching",
  },
  {
    slug: "clat-preparation-strategy",
    title: "A Realistic CLAT Preparation Strategy for Bihar Students",
    excerpt:
      "Month-by-month planning for CLAT aspirants in Bihar, from foundation building to full-length mock test cycles.",
    category: "CLAT Preparation",
  },
  {
    slug: "ailet-tips-nlu-delhi",
    title: "AILET Tips: Cracking NLU Delhi's Entrance from Gaya",
    excerpt:
      "How Gaya-based AILET aspirants can structure their preparation to compete with metro-city students.",
    category: "AILET Tips",
  },
  {
    slug: "cuet-law-preparation",
    title: "CUET Law Preparation: Domain Subjects Explained",
    excerpt:
      "Breaking down the CUET domain subject pattern for law aspirants and how to prioritise study time.",
    category: "CUET Preparation",
  },
  {
    slug: "law-career-guide",
    title: "Law Career Guide: What Comes After CLAT?",
    excerpt:
      "From NLUs to litigation, corporate law, and judiciary — a roadmap for students starting their legal career journey.",
    category: "Law Career Guide",
  },
  {
    slug: "current-affairs-for-clat",
    title: "How to Build a Current Affairs Habit for CLAT & CUET",
    excerpt:
      "A daily and weekly routine for GK & Current Affairs that actually sticks, tailored for CLAT and CUET aspirants.",
    category: "Current Affairs",
  },
];

export const TRUST_BADGES = [
  "8+ Years Experience",
  "500+ Students",
  "Expert Faculty",
  "Personal Mentorship",
  "Results Oriented",
];

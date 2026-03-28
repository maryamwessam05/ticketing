import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        events: "Events",
        categories: "Categories",
        about: "About",
        booking: "Booking",
        signup: "Sign Up",
      },
      hero: {
        title: "Your Next Adventure Awaits",
        desc: "Book tickets to concerts, festivals, workshops, and cultural events. Join thousands of happy attendees!",
        explore: "Explore Events",
        how: "How it works",
      },
      about: {
        title: "About",
        desc: "We blend culture, technology, and design to make every booking feel like part of the show. From underground performances to mega festivals, EventHub helps you discover and secure moments that matter.",
      },
      categories: {
        title: "Browse by Category",
        sub: "Find events that match your vibe",
        music: "Music",
        art: "Art",
        tech: "Tech",
        food: "Food",
        eventsCount: "240+ events",
      },
      trending: {
        title: "Trending Events",
        sub: "Don't miss out on these hot tickets",
        viewAll: "View All",
      },
      why: {
        title: "Why Choose EventHub?",
        sub: "We make discovering and booking events simple, safe, and enjoyable",
        easyTitle: "Easy Discovery",
        easyDesc: "Find events that match your interests with our smart search and recommendation system.",
        secureTitle: "Secure Booking",
        secureDesc: "Book with confidence using our secure payment system and get instant confirmation.",
        amazingTitle: "Amazing Experience",
        amazingDesc: "Join millions of happy event-goers who trust us for their entertainment needs.",
      },
      featured: {
        title: "Summer Music Festival 2025",
        desc: "Join us for three days of non-stop music, art, and unforgettable memories. Featuring 50+ artists across 5 stages.",
        date: "July 15-17, 2025",
        place: "Beachside Arena",
        attendees: "20,000 Attendees",
        book: "Book Now - From $89",
      },
      testimonials: {
        title: "What People Say",
        sub: "Hear from our happy event-goers",
      },
      booking: {
        title: "Book Your Tickets",
        sub: "Fill in your details and get ready for an amazing experience",
        fullName: "Full Name",
        fullNamePlaceholder: "Enter your name",
        email: "Email",
        emailPlaceholder: "Enter your email",
        tickets: "Number of tickets",
        event: "Event",
        selectEvent: "Select an event",
        submit: "Get Tickets",
        success: "Tickets booked successfully!",
      },
      validation: {
        fullNameRequired: "Full name is required",
        emailRequired: "Email is required",
        emailInvalid: "Email must include @",
        ticketsRequired: "Please select at least 1 ticket",
        eventRequired: "Please choose an event",
      },
      event: {
        getTickets: "Get Tickets"
        },
      eventsList: {
        electric: "Electric Nights Festival",
        art: "Contemporary Art Expo",
        food: "Gourmet Street Food Fest",
        summer: "Summer Music Festival",
        tech: "Tech Innovators Summit",
      },
      footer: {
        desc: "Making event discovery and booking simple and fun for everyone.",
        quickLinks: "Quick Links",
        browseEvents: "Browse Events",
        categories: "Categories",
        createEvent: "Create Event",
        helpCenter: "Help Center",
        company: "Company",
        aboutUs: "About Us",
        careers: "Careers",
        press: "Press",
        contact: "Contact",
        followUs: "Follow Us"
        },
    testimonialsData: {
  t1: {
    say: "EventHub made finding and booking concerts so easy! The interface is beautiful and the booking process is seamless.",
    name: "Omar Kareem",
    loc: "Cairo"
  },
  t2: {
    say: "Amazing platform! Found the perfect concert and the booking process was so smooth. Highly recommended!",
    name: "Sarah Ahmed",
    loc: "Cairo"
  },
  t3: {
    say: "The best event platform I've used. Great selection, fair prices, and excellent customer service. Five stars!",
    name: "Lina Ahmed",
    loc: "Cairo"
  }
},

eventsData: {
  e1: {
    date: "Jan 5, 2026",
    location: "Modern Gallery",
    name: "Electric Nights Festival",
    desc: "Experience the best electronic music with world-class DJs and stunning visuals.",
    price: "$45"
  },
  e2: {
    date: "Jan 15, 2026",
    location: "Downtown Arena",
    name: "Contemporary Art Expo",
    desc: "Discover emerging artists and stunning contemporary pieces in this exclusive exhibition.",
    price: "$25"
  },
  e3: {
    date: "Jan 25, 2026",
    location: "Modern Gallery",
    name: "Gourmet Street Food Fest",
    desc: "Taste dishes from 50+ vendors featuring international cuisines and local favorites.",
    price: "$45"
  }
}

        
    },
  },
  ar: {
    translation: {
      nav: {
        events: "الفعاليات",
        categories: "الفئات",
        about: "من نحن",
        booking: "الحجز",
        signup: "سجل الآن",
      },
      hero: {
        title: "مغامرتك القادمة بانتظارك",
        desc: "احجز تذاكر الحفلات والمهرجانات وورش العمل والفعاليات الثقافية. انضم إلى آلاف الحضور السعداء!",
        explore: "اكتشف الفعاليات",
        how: "كيف يعمل",
      },
      about: {
        title: "من نحن",
        desc: "نمزج بين الثقافة والتقنية والتصميم لنحوّل كل تجربة حجز إلى جزء من العرض. من العروض المستقلة إلى المهرجانات الكبرى، يساعدك EventHub على اكتشاف اللحظات المهمة وحجزها بسهولة.",
      },
      categories: {
        title: "تصفح حسب الفئة",
        sub: "اعثر على فعاليات تناسب ذوقك",
        music: "موسيقى",
        art: "فن",
        tech: "تقنية",
        food: "طعام",
        eventsCount: "240+ فعالية",
      },
      trending: {
        title: "الفعاليات الرائجة",
        sub: "لا تفوّت هذه التذاكر المميزة",
        viewAll: "عرض الكل",
      },
      why: {
        title: "لماذا تختار EventHub؟",
        sub: "نجعل اكتشاف الفعاليات وحجزها بسيطًا وآمنًا وممتعًا",
        easyTitle: "اكتشاف سهل",
        easyDesc: "اعثر على فعاليات تناسب اهتماماتك من خلال نظام بحث وتوصيات ذكي.",
        secureTitle: "حجز آمن",
        secureDesc: "احجز بثقة من خلال نظام دفع آمن واحصل على تأكيد فوري.",
        amazingTitle: "تجربة رائعة",
        amazingDesc: "انضم إلى ملايين المستخدمين السعداء الذين يثقون بنا في تجاربهم الترفيهية.",
      },
      featured: {
        title: "مهرجان الموسيقى الصيفي 2025",
        desc: "انضم إلينا لثلاثة أيام من الموسيقى والفن والذكريات التي لا تُنسى، بمشاركة أكثر من 50 فنانًا على 5 مسارح.",
        date: "15 - 17 يوليو 2025",
        place: "ساحة الشاطئ",
        attendees: "20,000 حاضر",
        book: "احجز الآن - يبدأ من 89$",
      },
      testimonials: {
        title: "آراء الناس",
        sub: "اسمع من زوار فعالياتنا السعداء",
      },
      booking: {
        title: "احجز تذاكرك",
        sub: "املأ بياناتك واستعد لتجربة رائعة",
        fullName: "الاسم الكامل",
        fullNamePlaceholder: "اكتب اسمك",
        email: "البريد الإلكتروني",
        emailPlaceholder: "اكتب بريدك الإلكتروني",
        tickets: "عدد التذاكر",
        event: "الفعالية",
        selectEvent: "اختر فعالية",
        submit: "احصل على التذاكر",
        success: "تم حجز التذاكر بنجاح!",
      },
      validation: {
        fullNameRequired: "الاسم الكامل مطلوب",
        emailRequired: "البريد الإلكتروني مطلوب",
        emailInvalid: "يجب أن يحتوي البريد الإلكتروني على @",
        ticketsRequired: "يرجى اختيار تذكرة واحدة على الأقل",
        eventRequired: "يرجى اختيار فعالية",
      },
      event: {
        getTickets: "احصل على التذاكر"
        },
      eventsList: {
        electric: "مهرجان الليالي الكهربائية",
        art: "معرض الفن المعاصر",
        food: "مهرجان الطعام العالمي",
        summer: "مهرجان الموسيقى الصيفي",
        tech: "قمة المبتكرين في التقنية",
      },
      footer: {
  desc: "نجعل اكتشاف الفعاليات وحجزها بسيطًا وممتعًا للجميع.",
  quickLinks: "روابط سريعة",
  browseEvents: "تصفح الفعاليات",
  categories: "الفئات",
  createEvent: "إنشاء فعالية",
  helpCenter: "مركز المساعدة",
  company: "الشركة",
  aboutUs: "من نحن",
  careers: "الوظائف",
  press: "الصحافة",
  contact: "تواصل معنا",
  followUs: "تابعنا"
},
    testimonialsData: {
  t1: {
    say: "سهّل EventHub عليّ العثور على الحفلات وحجزها! الواجهة جميلة جدًا وعملية الحجز سلسة للغاية.",
    name: "عمر كريم",
    loc: "القاهرة"
  },
  t2: {
    say: "منصة رائعة! وجدت الحفل المثالي وكانت عملية الحجز سهلة جدًا. أنصح بها بشدة!",
    name: "سارة أحمد",
    loc: "القاهرة"
  },
  t3: {
    say: "أفضل منصة فعاليات استخدمتها. خيارات رائعة، أسعار مناسبة، وخدمة عملاء ممتازة. خمس نجوم!",
    name: "لينا أحمد",
    loc: "القاهرة"
  }
},

eventsData: {
  e1: {
    date: "٥ يناير ٢٠٢٦",
    location: "المعرض الحديث",
    name: "مهرجان الليالي الإلكترونية",
    desc: "استمتع بأفضل الموسيقى الإلكترونية مع أشهر منسقي الموسيقى وعروض بصرية مذهلة.",
    price: "45$"
  },
  e2: {
    date: "١٥ يناير ٢٠٢٦",
    location: "ساحة وسط المدينة",
    name: "معرض الفن المعاصر",
    desc: "اكتشف فنانين جدد وأعمالًا فنية معاصرة مميزة في هذا المعرض الحصري.",
    price: "25$"
  },
  e3: {
    date: "٢٥ يناير ٢٠٢٦",
    location: "المعرض الحديث",
    name: "مهرجان الطعام العالمي",
    desc: "تذوق أطباقًا من أكثر من 50 بائعًا يقدمون مطابخ عالمية ومأكولات محلية مميزة.",
    price: "45$"
  }
}

      
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
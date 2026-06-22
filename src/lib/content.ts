export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, href: string) {
  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
    return `/${segments.join("/")}`;
  }

  return withLocale(locale, pathname === "/" ? "/" : `/${segments.join("/")}`);
}

const images = {
  hero: "/mockdata/hero.jpg",
  paris: "/mockdata/paris.jpg",
  tuscany: "/mockdata/tuscany.jpg",
  london: "/mockdata/london.jpg",
  couple: "/mockdata/couple.jpg",
  invitation: "/mockdata/stationery.jpg",
  venue: "/mockdata/venue.jpg",
  table: "/mockdata/table.jpg",
};

export const dictionaries = {
  vi: {
    localeName: "Tiếng Việt",
    brand: {
      name: "Wedding",
      descriptor: "Wedding Editorial",
      homeAria: "Wedding Events - về trang chủ",
    },
    navAria: {
      main: "Điều hướng chính",
      mobile: "Điều hướng di động",
      open: "Mở menu điều hướng",
      close: "Đóng menu điều hướng",
      currentLanguage: "Ngôn ngữ hiện tại",
    },
    skipLink: "Bỏ qua điều hướng",
    navLinks: [
      { href: "/", label: "Trang chủ" },
      { href: "/about", label: "Giới thiệu" },
      { href: "/works", label: "Dự án" },
      { href: "/services", label: "Dịch vụ" },
      { href: "/press", label: "Báo chí & lời khen" },
      { href: "/journal", label: "Blog" },
      { href: "/contact", label: "Liên hệ" },
    ],
    header: {
      consultation: "Tư vấn",
      mobileCta: "Trao đổi với chúng tôi",
    },
    home: {
      hero: {
        image: images.hero,
        alt: "Bàn tiệc cưới ngoài trời sang trọng bên bờ biển lúc hoàng hôn với hoa trắng, ly pha lê và ánh đèn ấm.",
        eyebrow: "Premium wedding planner in Vietnam",
        title: "Tasteful, distinctive and unforgettable weddings.",
        description:
          "Wedding tư vấn, thiết kế và điều phối lễ cưới tại Việt Nam và các điểm đến quốc tế bằng quy trình cá nhân hóa, chi tiết và kín đáo.",
        primaryCta: "Trao đổi ngay",
        secondaryCta: "Xem dự án",
      },
      intro: {
        eyebrow: "About",
        title:
          "Một đội ngũ wedding planner dành cho những cặp đôi muốn ngày cưới vừa đẹp, vừa được vận hành trọn vẹn.",
        description:
          "Lấy cảm hứng từ cách The Planners tổ chức nội dung theo dịch vụ, dự án và lời khen, website này tập trung vào trải nghiệm thực tế: bạn hiểu được chúng tôi làm gì, đã tạo ra điều gì, và bắt đầu cuộc trò chuyện ở đâu.",
        cta: "Tìm hiểu thêm",
      },
      services: {
        eyebrow: "Our services",
        title: "Dịch vụ được thiết kế sát với nhu cầu của từng cặp đôi.",
        description:
          "Từ lập kế hoạch tổng thể, destination wedding đến styling và decoration, mỗi gói dịch vụ đều có quy trình tư vấn, thiết kế, quản lý nhà cung cấp và điều phối ngày cưới.",
        cta: "Xem dịch vụ",
        items: [
          {
            eyebrow: "01",
            title: "Wedding Planning",
            description:
              "Lập kế hoạch, ngân sách, nhà cung cấp, timeline và điều phối vận hành cho toàn bộ hành trình cưới.",
          },
          {
            eyebrow: "02",
            title: "Destination Wedding",
            description:
              "Tư vấn địa điểm, logistics, trải nghiệm khách mời và nghi thức cho lễ cưới tại Việt Nam hoặc nước ngoài.",
          },
          {
            eyebrow: "03",
            title: "Styling & Decoration",
            description:
              "Thiết kế concept, hoa, ánh sáng, stationery và bố cục không gian để buổi lễ có một ngôn ngữ thẩm mỹ nhất quán.",
          },
        ],
      },
      works: {
        eyebrow: "Our works",
        title: "Wedding Works",
        description:
          "Một tuyển chọn các lễ cưới và không gian đã được biên tập như những câu chuyện riêng: từ khoảnh khắc, địa điểm đến phong cách trang trí.",
        primaryCta: "Explore wedding",
        secondaryTitle: "Styling & Decor Works",
        secondaryDescription:
          "Không chỉ là hoa và vật liệu, styling là cách chúng tôi tạo bầu không khí: proposal, tiệc thân mật, tiệc truyền thống và các sự kiện giàu cảm xúc.",
        secondaryCta: "Explore decor",
        storyLabel: "View more",
        weddingItems: [
          {
            title: "Golden Horizon",
            couple: "Thư & Hảo",
            location: "Phú Quốc",
            image: images.tuscany,
            alt: "Bàn tiệc cưới ngoài trời với ánh nến vàng và phong cảnh biển nhiệt đới.",
          },
          {
            title: "In The Mood For Love",
            couple: "Quốc Công & Hải Anh",
            location: "Sài Gòn",
            image: images.london,
            alt: "Không gian ballroom cưới sang trọng với hoa trắng treo cao và sàn đá đen phản chiếu.",
          },
          {
            title: "The Wedding by the Sea",
            couple: "Kim Ngân & Hải Long",
            location: "Nha Trang",
            image: images.paris,
            alt: "Cô dâu trong váy lụa tối giản đứng dưới ánh sáng mềm.",
          },
        ],
        decorItems: [
          {
            title: "Mocha Mousse Ceremony",
            couple: "Minh & Linh",
            location: "Hà Nội",
            image: images.table,
            alt: "Bàn tiệc màu mocha với ly pha lê, nến và hoa kem.",
          },
          {
            title: "Blissful Red",
            couple: "Duy & Maria",
            location: "Đà Lạt",
            image: images.venue,
            alt: "Bàn tiệc dài trên vách đá nhìn ra biển dưới bầu trời hoàng hôn.",
          },
          {
            title: "Zen Garden",
            couple: "Khanh & Andy",
            location: "Sài Gòn",
            image: images.invitation,
            alt: "Bộ thiệp cưới giấy ivory, chữ nhũ vàng, sáp niêm phong và ruy băng lụa.",
          },
        ],
      },
      partners: {
        eyebrow: "We have worked with",
        names: [
          "Amanoi",
          "JW Marriott",
          "InterContinental",
          "Hyatt Regency",
          "Metropole Hanoi",
          "The Anam",
        ],
      },
      pressPraise: {
        eyebrow: "Press & Praise",
        title: "Những lời khen đến từ các cặp đôi đã tin tưởng chúng tôi.",
        ctaPress: "View press",
        ctaPraise: "View praise",
        testimonials: [
          {
            quote:
              "Đội ngũ đã cân bằng rất nhiều mong muốn khác nhau để tạo ra một buổi tối phản chiếu đúng con người chúng tôi.",
            author: "Chloe & Stan",
          },
          {
            quote:
              "Điều khiến chúng tôi yên tâm nhất là cách mọi chi tiết trong program, khách mời và decor đều được chuẩn bị trước.",
            author: "Hiếu & Nga",
          },
          {
            quote:
              "Từ ngày đầu đến ngày cưới, mọi thứ đều được hướng dẫn rõ ràng, kiên nhẫn và chuyên nghiệp.",
            author: "Katrina & Xavier",
          },
        ],
      },
      journal: {
        eyebrow: "Blog",
        title: "Ghi chép cho những cặp đôi đang chuẩn bị hành trình cưới.",
        cta: "Đọc bài",
        posts: [
          {
            title: "Nghệ thuật của thiệp cưới tối giản",
            date: "12.03.2024",
            excerpt:
              "Khoảng trắng, giấy thủ công và typography tinh tế có thể tạo nên lời mở đầu giàu cảm xúc cho buổi lễ.",
            image: images.invitation,
            alt: "Bộ thiệp cưới giấy ivory, chữ nhũ vàng, sáp niêm phong và ruy băng lụa.",
          },
          {
            title: "5 điểm đến cưới đáng cân nhắc cho 2026",
            date: "28.02.2026",
            excerpt:
              "Từ villa ẩn mình bên biển đến những khu vườn di sản, đây là các bối cảnh dành cho lễ cưới thân mật.",
            image: images.venue,
            alt: "Bàn tiệc dài trên vách đá nhìn ra biển dưới bầu trời hoàng hôn.",
          },
        ],
      },
      finalCta: {
        kicker: "Looking",
        title: "for a professional team to take care of your wedding?",
        description:
          "Hãy bắt đầu bằng một cuộc trò chuyện riêng tư về tầm nhìn, ngân sách, địa điểm và những điều bạn muốn khách mời nhớ mãi.",
        cta: "Contact us",
      },
    },
    placeholderPages: {
      about: {
        eyebrow: "Giới thiệu",
        title: "Một studio cưới dành cho những câu chuyện có chiều sâu.",
        description:
          "Trang chi tiết sẽ mở rộng triết lý, quy trình và đội ngũ Wedding trong cùng tinh thần editorial tối giản.",
      },
      services: {
        eyebrow: "Our services",
        title: "Wedding Planning, Destination Wedding, Styling & Decoration.",
        description:
          "Trang dịch vụ sẽ trình bày từng gói theo quy trình tư vấn, thiết kế, quản lý nhà cung cấp, timeline và điều phối ngày cưới.",
      },
      works: {
        eyebrow: "Our works",
        title: "Wedding Works và Styling & Decor Works.",
        description:
          "Portfolio cũ đã được đổi thành cấu trúc dự án giống web mẫu: tách lễ cưới và decor để người xem khám phá theo nhu cầu.",
      },
      press: {
        eyebrow: "Press & Praise",
        title: "Báo chí, lời khen và những câu chuyện từ khách hàng.",
        description:
          "Khu vực này dành cho logo báo chí, phản hồi của cặp đôi và các lời chứng thực nổi bật.",
      },
      journal: {
        eyebrow: "Blog",
        title: "Ghi chép về thẩm mỹ cưới, địa điểm và nghi thức hiện đại.",
        description:
          "Nơi dành cho bài viết editorial, hướng dẫn chuẩn bị và cảm hứng thiết kế cho các cặp đôi.",
      },
      contact: {
        eyebrow: "Liên hệ",
        title: "Bắt đầu bằng một cuộc trò chuyện thật riêng tư.",
        description:
          "Trang liên hệ sẽ chứa form tư vấn, thông tin văn phòng và các kênh đặt lịch với đội ngũ.",
      },
    },
    placeholderActions: {
      consultation: "Trao đổi ngay",
      home: "Về trang chủ",
    },
    footer: {
      description:
        "Kiến tạo những bầu không khí cưới riêng tư, tinh tế và có chiều sâu cho các cặp đôi yêu vẻ đẹp vượt thời gian.",
      linksHeading: "Liên kết",
      supportHeading: "Dịch vụ",
      officeHeading: "Văn phòng",
      socialHeading: "Follow us",
      supportLinks: [
        { href: "/services", label: "Wedding Planning" },
        { href: "/services", label: "Destination Wedding" },
        { href: "/services", label: "Styling & Decoration" },
        { href: "/press", label: "Press & Praise" },
      ],
      socialLinks: [
        { label: "Instagram", href: "https://www.instagram.com/" },
        { label: "Facebook", href: "https://www.facebook.com/" },
        { label: "Pinterest", href: "https://www.pinterest.com/" },
      ],
      office: {
        address: ["2nd floor, 1C Dang Thai Than", "Hoan Kiem, Hanoi"],
        email: "concierge@elegance.events",
        phone: "+84 967 884 766",
      },
      copyright: "© 2026 Wedding Events. All rights reserved.",
    },
    metadata: {
      title: "Wedding Events | Premium Wedding Planner Vietnam",
      description:
        "Studio lập kế hoạch cưới cao cấp tại Việt Nam với wedding planning, destination wedding, styling và decoration.",
    },
  },
  en: {
    localeName: "English",
    brand: {
      name: "Wedding",
      descriptor: "Wedding Editorial",
      homeAria: "Wedding Events - back to homepage",
    },
    navAria: {
      main: "Primary navigation",
      mobile: "Mobile navigation",
      open: "Open navigation menu",
      close: "Close navigation menu",
      currentLanguage: "Current language",
    },
    skipLink: "Skip navigation",
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/works", label: "Our Works" },
      { href: "/services", label: "Our Services" },
      { href: "/press", label: "Press & Praise" },
      { href: "/journal", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
    header: {
      consultation: "Talk to us",
      mobileCta: "Talk to us",
    },
    home: {
      hero: {
        image: images.hero,
        alt: "Luxury outdoor wedding table by the sea at sunset with white florals, crystal glassware, and warm lights.",
        eyebrow: "Premium wedding planner in Vietnam",
        title: "Tasteful, distinctive and unforgettable weddings.",
        description:
          "Wedding consults, designs, and produces weddings in Vietnam and beyond through a personalized, detailed, and discreet planning process.",
        primaryCta: "Talk to us",
        secondaryCta: "View works",
      },
      intro: {
        eyebrow: "About",
        title:
          "A wedding planning team for couples who want the day to feel beautiful and run beautifully.",
        description:
          "Inspired by The Planners' content structure, this site now makes the experience practical: understand what we do, what we have created, and where to begin the conversation.",
        cta: "Learn more",
      },
      services: {
        eyebrow: "Our services",
        title: "Services tailored closely to each couple's requirements.",
        description:
          "From full planning and destination weddings to styling and decoration, every service covers consultation, design, vendor management, and wedding-day execution.",
        cta: "Explore services",
        items: [
          {
            eyebrow: "01",
            title: "Wedding Planning",
            description:
              "Planning, budgeting, vendor management, timeline development, and production for the complete wedding journey.",
          },
          {
            eyebrow: "02",
            title: "Destination Wedding",
            description:
              "Venue guidance, logistics, guest experience, and ceremony planning for celebrations in Vietnam and abroad.",
          },
          {
            eyebrow: "03",
            title: "Styling & Decoration",
            description:
              "Concept direction, florals, lighting, stationery, and spatial composition with one coherent visual language.",
          },
        ],
      },
      works: {
        eyebrow: "Our works",
        title: "Wedding Works",
        description:
          "A curated collection of weddings and spaces edited as personal stories, from moments and places to decorative language.",
        primaryCta: "Explore wedding",
        secondaryTitle: "Styling & Decor Works",
        secondaryDescription:
          "Beyond florals and materials, styling is how we build atmosphere for proposals, intimate dinners, traditional ceremonies, and meaningful events.",
        secondaryCta: "Explore decor",
        storyLabel: "View more",
        weddingItems: [
          {
            title: "Golden Horizon",
            couple: "Thư & Hảo",
            location: "Phu Quoc",
            image: images.tuscany,
            alt: "Outdoor wedding table with golden candlelight and a tropical sea view.",
          },
          {
            title: "In The Mood For Love",
            couple: "Quốc Công & Hải Anh",
            location: "Sai Gon",
            image: images.london,
            alt: "Elegant wedding ballroom with suspended white florals and a reflective black stone floor.",
          },
          {
            title: "The Wedding by the Sea",
            couple: "Kim Ngan & Hai Long",
            location: "Nha Trang",
            image: images.paris,
            alt: "Bride in a minimal silk gown standing under soft light.",
          },
        ],
        decorItems: [
          {
            title: "Mocha Mousse Ceremony",
            couple: "Minh & Linh",
            location: "Hanoi",
            image: images.table,
            alt: "Mocha-toned reception table with crystal glassware, candles, and cream florals.",
          },
          {
            title: "Blissful Red",
            couple: "Duy & Maria",
            location: "Da Lat",
            image: images.venue,
            alt: "Long dinner table on a cliff overlooking the sea beneath a sunset sky.",
          },
          {
            title: "Zen Garden",
            couple: "Khanh & Andy",
            location: "Sai Gon",
            image: images.invitation,
            alt: "Ivory wedding stationery with gold lettering, wax seal, and silk ribbon.",
          },
        ],
      },
      partners: {
        eyebrow: "We have worked with",
        names: [
          "Amanoi",
          "JW Marriott",
          "InterContinental",
          "Hyatt Regency",
          "Metropole Hanoi",
          "The Anam",
        ],
      },
      pressPraise: {
        eyebrow: "Press & Praise",
        title: "Kind words from couples who trusted us with their celebration.",
        ctaPress: "View press",
        ctaPraise: "View praise",
        testimonials: [
          {
            quote:
              "The team balanced different requests and styles to create an evening that truly reflected who we are.",
            author: "Chloe & Stan",
          },
          {
            quote:
              "What reassured us most was how every program detail, guest touchpoint, and decor decision was prepared ahead.",
            author: "Hiếu & Nga",
          },
          {
            quote:
              "From the beginning to the wedding day, everything was guided with clarity, patience, and professionalism.",
            author: "Katrina & Xavier",
          },
        ],
      },
      journal: {
        eyebrow: "Blog",
        title: "Notes for couples preparing the wedding journey.",
        cta: "Read article",
        posts: [
          {
            title: "The art of minimal wedding stationery",
            date: "12.03.2024",
            excerpt:
              "White space, handmade paper, and refined typography can become the first emotional note of a celebration.",
            image: images.invitation,
            alt: "Ivory wedding stationery with gold lettering, wax seal, and silk ribbon.",
          },
          {
            title: "5 destination wedding settings to consider for 2026",
            date: "28.02.2026",
            excerpt:
              "From hidden seaside villas to heritage gardens, these are backdrops for intimate celebrations.",
            image: images.venue,
            alt: "Long dinner table on a cliff overlooking the sea beneath a sunset sky.",
          },
        ],
      },
      finalCta: {
        kicker: "Looking",
        title: "for a professional team to take care of your wedding?",
        description:
          "Begin with a private conversation about your vision, budget, destination, and what you want your guests to remember.",
        cta: "Contact us",
      },
    },
    placeholderPages: {
      about: {
        eyebrow: "About",
        title: "A wedding studio for stories with depth.",
        description:
          "This page will expand the philosophy, process, and team behind Wedding in the same minimal editorial spirit.",
      },
      services: {
        eyebrow: "Our services",
        title: "Wedding Planning, Destination Wedding, Styling & Decoration.",
        description:
          "The services page will present each offer through consultation, design, vendor management, timeline, and production.",
      },
      works: {
        eyebrow: "Our works",
        title: "Wedding Works and Styling & Decor Works.",
        description:
          "The old portfolio structure has been replaced with the sample site's works model: wedding projects and decor projects are separated for clearer discovery.",
      },
      press: {
        eyebrow: "Press & Praise",
        title: "Press mentions, praise, and client stories.",
        description:
          "This area is reserved for press logos, couple testimonials, and selected words of trust.",
      },
      journal: {
        eyebrow: "Blog",
        title: "Notes on wedding aesthetics, places, and modern rituals.",
        description:
          "A home for editorial articles, planning guides, and design inspiration for couples.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Begin with a private conversation.",
        description:
          "The contact page will include the inquiry form, studio details, and consultation channels.",
      },
    },
    placeholderActions: {
      consultation: "Talk to us",
      home: "Back home",
    },
    footer: {
      description:
        "Composing private, refined, and emotionally layered wedding atmospheres for couples drawn to timeless beauty.",
      linksHeading: "Links",
      supportHeading: "Services",
      officeHeading: "Studio",
      socialHeading: "Follow us",
      supportLinks: [
        { href: "/services", label: "Wedding Planning" },
        { href: "/services", label: "Destination Wedding" },
        { href: "/services", label: "Styling & Decoration" },
        { href: "/press", label: "Press & Praise" },
      ],
      socialLinks: [
        { label: "Instagram", href: "https://www.instagram.com/" },
        { label: "Facebook", href: "https://www.facebook.com/" },
        { label: "Pinterest", href: "https://www.pinterest.com/" },
      ],
      office: {
        address: ["2nd floor, 1C Dang Thai Than", "Hoan Kiem, Hanoi"],
        email: "concierge@elegance.events",
        phone: "+84 967 884 766",
      },
      copyright: "© 2026 Wedding Events. All rights reserved.",
    },
    metadata: {
      title: "Wedding Events | Premium Wedding Planner Vietnam",
      description:
        "A luxury wedding planning studio in Vietnam for wedding planning, destination weddings, styling, and decoration.",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

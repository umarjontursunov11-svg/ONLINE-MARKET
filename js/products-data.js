/**
 * "STANDART VA METROLOGIYA" MCHJ
 * Rasmiy Prays-List asosida to'liq shakllantirilgan mahsulotlar ma'lumotlar bazasi
 * Yangilangan: 13.08.2026 / 03.09.2026 (Weiyel CRM standartlari qo'shildi)
 */

const COMPANY_INFO = {
  name: '"STANDART VA METROLOGIYA" MCHJ',
  inn: "308097539",
  innFormatted: "308 097 539",
  oked: "71200",
  account: "20208000505329633001",
  accountFormatted: "2020 8000 5053 2963 3001",
  bank: 'ТОШКЕНТ Ш., "ОРИЕНТ ФИНАНС" ХАТ БАНКИ',
  bankUz: 'Toshkent sh., "ORIENT FINANCE" XAT banki',
  mfo: "01071",
  address: "г. Ташкент, Сергелийский район, Узумзор 16-туп 18 Дом (Sergeli tumani, Uzumzor 16-tor ko'cha 18-uy)",
  phones: [
    "+998 90 939-71-83",
    "+998 93 870-78-77",
    "+998 98 361-71-83",
    "+998 55 503-47-15"
  ],
  email: "standartmetrolog@bk.ru",
  website: "gsouz.uz",
  telegram: "standartgso_uz",
  instagram: "standartgso_uz",
  telegramGroupId: "-1003964640399"
};

// Telegram bot tokeni saytda saqlanmaydi: xabarlar /api/notify orqali serverdan yuboriladi.

const CATEGORIES = [
  {
    "id": "all",
    "name": "Barcha Mahsulotlar",
    "icon": "bi-grid-fill"
  },
  {
    "id": "standart-namunalar",
    "name": "Standart Namunalar (GSO/CRM)",
    "icon": "bi-droplet-half"
  },
  {
    "id": "standart-titrlar",
    "name": "Standart-Titrlar (Fiksanallar)",
    "icon": "bi-funnel-fill"
  },
  {
    "id": "bufer-eritmalari",
    "name": "Bufer va Kalibrlash Eritmalari",
    "icon": "bi-bezier2"
  },
  {
    "id": "olchov-vositalari",
    "name": "O'lchov Vositalari & Jihozlar",
    "icon": "bi-speedometer2"
  },
  {
    "id": "areometrlar-termometrlar",
    "name": "Areometr va Termometrlar",
    "icon": "bi-thermometer-half"
  }
];

const DEFAULT_PRODUCTS_DATABASE = [
  {
    "id": "dev-fluke-manometer",
    "title": "Yuqori aniqlikdagi raqamli manometr / bosim kalibratori (Model: Fluke CPC-800)",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "0.02% Aniqlik",
    "badgeType": "warning",
    "artikul": "MANO-CPC-800",
    "price": 9800000,
    "priceFormatted": "9 800 000 so'm",
    "inStock": true,
    "stockCount": "Omborda 12 dona mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Sanoat manometrlarini tekshirish va kalibrlash uchun 0.02% aniqlikdagi raqamli etalon manometr.",
    "specs": {
      "O'lchash diapazoni": "0 dan 25 bar gacha (0 - 350 psi / 0 - 2.5 MPa)",
      "Aniqlik sinfi": "0.02% F.S. (To'liq shkala bo'yicha)",
      "Bosim birliklari": "bar, psi, MPa, kPa, kgf/cm2, mmH2O",
      "Himoya darajasi": "IP67 mustahkam korpus",
      "Sertifikat": "O'zbekiston Davlat Qiyoslash (Poverka) sertifikati bilan",
      "Kafolat": "12 oy"
    },
    "applications": [
      "Metrologiya xizmatlari va qiyoslash laboratoriyalari",
      "Neft-gaz quvurlari va kompressor stansiyalari"
    ],
    "features": [
      "Maksimal va minimal bosimni qayd etish (Peak Hold)",
      "Etalon o'lchov vositasi sifatida davlat ro'yxatidan o'tgan"
    ]
  },
  {
    "id": "dev-analytical-balance",
    "title": "Laboratoriya analitik elektron tarozisi (Model: METTLER-XSR204, 0.0001g)",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "I-Maxsus Sinf",
    "badgeType": "primary",
    "artikul": "BAL-XSR-204",
    "price": 28500000,
    "priceFormatted": "28 500 000 so'm",
    "inStock": true,
    "stockCount": "Omborda 6 dona mavjud",
    "image": "assets/images/analytical_balance.jpg",
    "shortDesc": "Shisha himoya qopqoqli, ichki avtomatik kalibrlashli yuqori aniqlikdagi I-maxsus sinf analitik tarozi.",
    "specs": {
      "O'lchash chegarasi (Max)": "220 g",
      "Diskretlik (d / e)": "0.0001 g (0.1 mg)",
      "Aniqlik sinfi": "I Maxsus (O'zDSt 8.021 / GOST OIML R 76-1)",
      "Kalibrlash": "Avtomatik ichki kalibrlash (FACT)",
      "Davlat tekshiruvi": "Davlat qiyoslash sertifikati (Poverka) bilan",
      "Kafolat muddati": "24 oy"
    },
    "applications": [
      "Standart namunalar va birlamchi eritmalarni tayyorlash",
      "Farmatsevtika va dori vositalari tahlili"
    ],
    "features": [
      "Draft shield himoya oynasi",
      "GLP/GMP talablariga muvofiq hisobot chop etish"
    ]
  },
  {
    "id": "dev-ph-meter-seven",
    "title": "Raqamli laboratoriya pH/mV/Temp metri (Model: SevenDirect SD50)",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Sensorli Ekran",
    "badgeType": "success",
    "artikul": "PH-SEVEN-SD50",
    "price": 14200000,
    "priceFormatted": "14 200 000 so'm",
    "inStock": true,
    "stockCount": "Omborda 8 dona mavjud",
    "image": "assets/images/digital_ph_meter.jpg",
    "shortDesc": "Rangli 7 dyuymli sensorli ekran, elektrod ushlagich shtativ va avtomatik harorat kompensatsiyasi (ATC).",
    "specs": {
      "pH o'lchash diapazoni": "-2.000 dan 20.000 pH gacha",
      "pH aniqligi": "± 0.002 pH",
      "Harorat diapazoni": "-30.0°C dan 130.0°C gacha (± 0.1°C)",
      "Kalibrlash": "1 dan 5 nuqtagacha avtomatik bufer aniqlash",
      "Kafolat": "24 oy"
    },
    "applications": [
      "Kimyoviy, biologik va farmatsevtik tahlillar",
      "Suv ta'minoti va sifat nazorati"
    ],
    "features": [
      "Avtomatik harorat kompensatsiyasi (ATC)",
      "USB orqali ma'lumotlarni eksport qilish"
    ]
  },
  {
    "id": "dev-spectrophotometer",
    "title": "UV-VIS Spektrofotometr ikki nurlik (Model: NEXUS UV-3200 Touch)",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "190-1100 nm",
    "badgeType": "primary",
    "artikul": "SPEC-UV-3200",
    "price": 36000000,
    "priceFormatted": "36 000 000 so'm",
    "inStock": true,
    "stockCount": "Omborda 4 dona mavjud",
    "image": "assets/images/spectrophotometer.jpg",
    "shortDesc": "190-1100 nm spektral diapazonli, rangli grafik displeyli zamonaviy laboratoriya spektrofotometri.",
    "specs": {
      "To'lqin uzunligi diapazoni": "190 - 1100 nm",
      "Spektral chiziq kengligi": "1.8 nm",
      "To'lqin uzunligi aniqligi": "± 0.3 nm",
      "Fotometrik aniqlik": "± 0.002 A",
      "Displey": "Rangli 10.1 dyuymli Touch-screen"
    },
    "applications": [
      "Kimyo va biokimyo tahlillari",
      "Suv tahlili va sifat nazorati",
      "Farmatsevtika"
    ],
    "features": [
      "Kinetik tahlil va konsentratsiyani hisoblash dasturi"
    ]
  },
  {
    "id": "si-1",
    "title": "Газовый счет барабанного типа ГСБ 400  Скидка  35%",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Yuqori Aniqlik",
    "badgeType": "danger",
    "artikul": "SI-1000",
    "price": 31000000,
    "priceFormatted": "31 000 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Газовый счет барабанного типа ГСБ 400  Скидка  35%. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-2",
    "title": "Вискозиметр ВПЖ-2 D- 0.56",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-2",
    "price": 1792000,
    "priceFormatted": "1 792 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-2 D- 0.56. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-3",
    "title": "Вискозиметр ВПЖ-2 D -0,99",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-2",
    "price": 1948800,
    "priceFormatted": "1 948 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-2 D -0,99. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-4",
    "title": "Вискозиметр ВПЖ-2  D -0,73",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-2",
    "price": 1948800,
    "priceFormatted": "1 948 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-2  D -0,73. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-5",
    "title": "Вискозиметр ВПЖ-4 D-1,47",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-4",
    "price": 1724800,
    "priceFormatted": "1 724 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-4 D-1,47. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-6",
    "title": "Вискозиметр ВПЖ-4 D-0.37",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-4",
    "price": 1730400,
    "priceFormatted": "1 730 400 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-4 D-0.37. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-7",
    "title": "Вискозиметр ВПЖ-4 D-0.82",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-4",
    "price": 2100000,
    "priceFormatted": "2 100 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-4 D-0.82. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-8",
    "title": "Вискозиметр ВПЖ-4 D-1.12",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-4",
    "price": 2100000,
    "priceFormatted": "2 100 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-4 D-1.12. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-9",
    "title": "Вискозиметр ВПЖ-4 D-0.62",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-4",
    "price": 2140000,
    "priceFormatted": "2 140 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-4 D-0.62. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-10",
    "title": "Вискозиметр ВПЖ-2 D-1.31",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "GOST 10028",
    "badgeType": "success",
    "artikul": "VPJ-ВПЖ-2",
    "price": 2170000,
    "priceFormatted": "2 170 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Вискозиметр ВПЖ-2 D-1.31. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-11",
    "title": "Рулетка Р10 УЗГ с грузом 2 кг",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Davlat Reestri",
    "badgeType": "primary",
    "artikul": "SI-1010",
    "price": 1517600,
    "priceFormatted": "1 517 600 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Рулетка Р10 УЗГ с грузом 2 кг. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-12",
    "title": "Толщиномер покрытии МТ",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Davlat Reestri",
    "badgeType": "primary",
    "artikul": "SI-1011",
    "price": 5516000,
    "priceFormatted": "5 516 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Толщиномер покрытии МТ. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-13",
    "title": "Термометр гигрометр электронный цифровой HTC-2 с вынос датчиком с поверкой",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "Qiyoslangan",
    "badgeType": "primary",
    "artikul": "SI-1012",
    "price": 500000,
    "priceFormatted": "500 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/digital_ph_meter.jpg",
    "shortDesc": "Термометр гигрометр электронный цифровой HTC-2 с вынос датчиком с поверкой. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-14",
    "title": "Термогигрометр Testo Система Wi-Fi- логгеров данных testo Saveris 2",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "Qiyoslangan",
    "badgeType": "primary",
    "artikul": "SI-1013",
    "price": 5800000,
    "priceFormatted": "5 800 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/digital_ph_meter.jpg",
    "shortDesc": "Термогигрометр Testo Система Wi-Fi- логгеров данных testo Saveris 2. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-15",
    "title": "Линейка металлическая 1000 мм ГОСТ 427-75",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1014",
    "price": 448000,
    "priceFormatted": "448 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Линейка металлическая 1000 мм ГОСТ 427-75. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-16",
    "title": "Линейка металлическая 300 мм",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1015",
    "price": 320000,
    "priceFormatted": "320 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Линейка металлическая 300 мм. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-17",
    "title": "Штангенциркуль 150 мм Китай",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1016",
    "price": 175000,
    "priceFormatted": "175 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Штангенциркуль 150 мм Китай. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-18",
    "title": "Штангенциркуль 200 мм Китай",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1017",
    "price": 200000,
    "priceFormatted": "200 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Штангенциркуль 200 мм Китай. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-19",
    "title": "Штангенциркуль 300 мм Китай",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1018",
    "price": 225000,
    "priceFormatted": "225 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Штангенциркуль 300 мм Китай. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-20",
    "title": "Микрометр 150 мм Китай",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1019",
    "price": 250000,
    "priceFormatted": "250 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Микрометр 150 мм Китай. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-21",
    "title": "Набор щупов №1 диап: 02-0,1 L=100 МИК",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1020",
    "price": 350000,
    "priceFormatted": "350 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Набор щупов №1 диап: 02-0,1 L=100 МИК. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-22",
    "title": "Набор щупов №2 диап: 02-0,5 L=100 МИК",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1021",
    "price": 350000,
    "priceFormatted": "350 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Набор щупов №2 диап: 02-0,5 L=100 МИК. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-23",
    "title": "Набор щупов №3 диап: 0,5-1 L=100 МИК",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1022",
    "price": 350000,
    "priceFormatted": "350 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Набор щупов №3 диап: 0,5-1 L=100 МИК. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-24",
    "title": "Набор щупов №4 диап: 0,1-1 L=100 МИК",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Chiziqli O'lchov",
    "badgeType": "primary",
    "artikul": "SI-1023",
    "price": 350000,
    "priceFormatted": "350 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Набор щупов №4 диап: 0,1-1 L=100 МИК. Ishlab chiqaruvchi: O'zstandart / Rossiya. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "O'zstandart / Rossiya",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-25",
    "title": "Ареометр АМ 1020-1040",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АМ",
    "price": 224000,
    "priceFormatted": "224 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АМ 1020-1040. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-26",
    "title": "Ареометр АМТ 1015-1040",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АМТ",
    "price": 224000,
    "priceFormatted": "224 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АМТ 1015-1040. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-27",
    "title": "Ареометр АНТ-1 650-710",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АНТ-1",
    "price": 224000,
    "priceFormatted": "224 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АНТ-1 650-710. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-28",
    "title": "Ареометр АНТ-1 710-770",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АНТ-1",
    "price": 336000,
    "priceFormatted": "336 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АНТ-1 710-770. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-29",
    "title": "Ареометр АНТ-1 770-830",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АНТ-1",
    "price": 336000,
    "priceFormatted": "336 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АНТ-1 770-830. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-30",
    "title": "Ареометр АНТ-1 830-890",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АНТ-1",
    "price": 336000,
    "priceFormatted": "336 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АНТ-1 830-890. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-31",
    "title": "Ареометр АНТ-2 670-750",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АНТ-2",
    "price": 235200,
    "priceFormatted": "235 200 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АНТ-2 670-750. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-32",
    "title": "Ареометр АНТ-2 830-910",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АНТ-2",
    "price": 235200,
    "priceFormatted": "235 200 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АНТ-2 830-910. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-33",
    "title": "Ареометр АНТ-2 910-990",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АНТ-2",
    "price": 235200,
    "priceFormatted": "235 200 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АНТ-2 910-990. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-34",
    "title": "Ареометр АОН-1 700-760",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 700-760. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-35",
    "title": "Ареометр АОН-1 760-820",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 760-820. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-36",
    "title": "Ареометр АОН-1 820-880",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 820-880. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-37",
    "title": "Ареометр АОН-1 880-940",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 880-940. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-38",
    "title": "Ареометр АОН-1 940-1000",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 940-1000. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-39",
    "title": "Ареометр АОН-1 1120-1180",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1120-1180. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-40",
    "title": "Ареометр АОН-1 1180-1240",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1180-1240. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-41",
    "title": "Ареометр АОН-1 1240-1300",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1240-1300. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-42",
    "title": "Ареометр АОН-1 1420-1480",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1420-1480. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-43",
    "title": "Ареометр АОН-1 1480-1540",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1480-1540. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-44",
    "title": "Ареометр АОН-1 1540-1600",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1540-1600. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-45",
    "title": "Ареометр АОН-1 1600-1660",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1600-1660. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-46",
    "title": "Ареометр АОН-1 1660-1720",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1660-1720. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-47",
    "title": "Ареометр АОН-1 1720-1780",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1720-1780. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-48",
    "title": "Ареометр АОН-1 1780-1840",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-АОН-1",
    "price": 212800,
    "priceFormatted": "212 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Ареометр АОН-1 1780-1840. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-49",
    "title": "Набор ареометров АОН-1 700-1840",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 18481",
    "badgeType": "warning",
    "artikul": "AREO-ареометров",
    "price": 2520000,
    "priceFormatted": "2 520 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Набор ареометров АОН-1 700-1840. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-50",
    "title": "Гигрометр психрометрический ВИТ-1",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "Qiyoslangan",
    "badgeType": "primary",
    "artikul": "SI-1049",
    "price": 201600,
    "priceFormatted": "201 600 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/digital_ph_meter.jpg",
    "shortDesc": "Гигрометр психрометрический ВИТ-1. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-51",
    "title": "Гигрометр психрометрический ВИТ-2",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "Qiyoslangan",
    "badgeType": "primary",
    "artikul": "SI-1050",
    "price": 201600,
    "priceFormatted": "201 600 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/digital_ph_meter.jpg",
    "shortDesc": "Гигрометр психрометрический ВИТ-2. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-52",
    "title": "Колба КРН-125/100/Flask КРН-125/100",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari",
    "badge": "Davlat Reestri",
    "badgeType": "primary",
    "artikul": "SI-1051",
    "price": 246400,
    "priceFormatted": "246 400 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "Колба КРН-125/100/Flask КРН-125/100. Ishlab chiqaruvchi: Стеклоприбор Украина. Davlat tekshiruvi va qiyoslash sertifikati bilan.",
    "specs": {
      "Mahsulot turi": "O'lchov vositasi (СИ)",
      "Ishlab chiqaruvchi": "Стеклоприбор Украина",
      "Standart": "GOST / O'zDSt / Davlat Reestri",
      "Metrologik nazorat": "Davlat qiyoslovi (Poverka) o'tkazilgan",
      "Kafolat": "12-24 oy rasmiy kafolat",
      "Yetkazib berish": "O'zbekiston bo'ylab tezkor yetkazish"
    },
    "applications": [
      "Sanoat korxonalari va texnik nazorat bo'limlari",
      "Akkreditatsiyalangan sinov laboratoriyalari",
      "Metrologiya va standartlashtirish markazlari"
    ],
    "features": [
      "Davlat qiyoslovi sertifikati ilova qilinadi",
      "100% rasmiy metrologik kafolat"
    ]
  },
  {
    "id": "si-therm-53",
    "title": "ТЛ-2 N1 исп.1(-30+70) ц.д.1 термометр  стеклянный лабораторный",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-252",
    "price": 1724800,
    "priceFormatted": "1 724 800 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТЛ-2 N1 исп.1(-30+70) ц.д.1 термометр  стеклянный лабораторный. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-54",
    "title": "ТЛ-2 N2 исп.1  (0+100)  ц.д 1 термометр стеклянный лабораторный",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-253",
    "price": 2038400,
    "priceFormatted": "2 038 400 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТЛ-2 N2 исп.1  (0+100)  ц.д 1 термометр стеклянный лабораторный. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-55",
    "title": "ТЛ-2 N3 исп.1  (0+150) ц.д 1 термометр стеклянный лабораторный",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-254",
    "price": 2049600,
    "priceFormatted": "2 049 600 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТЛ-2 N3 исп.1  (0+150) ц.д 1 термометр стеклянный лабораторный. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-56",
    "title": "ТЛ-2 N5 исп.1 (0+350) ц.д 1 термометр  стеклянный лабораторный",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-255",
    "price": 2122400,
    "priceFormatted": "2 122 400 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТЛ-2 N5 исп.1 (0+350) ц.д 1 термометр  стеклянный лабораторный. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-57",
    "title": "ТЛ-4 N2 (0+55) Термометр ртутный стеклянный лабораторный",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-256",
    "price": 4928000,
    "priceFormatted": "4 928 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТЛ-4 N2 (0+55) Термометр ртутный стеклянный лабораторный. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-58",
    "title": "ТЛ-5 N2 (0+105 ц.д. 0,5) Термометр ртутный стеклянный лабораторный",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-257",
    "price": 3248000,
    "priceFormatted": "3 248 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТЛ-5 N2 (0+105 ц.д. 0,5) Термометр ртутный стеклянный лабораторный. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-59",
    "title": "ТН-1 N1 (0+170) Термометр стеклянный ртутный  для испытания нефтепродуктов",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-258",
    "price": 2822400,
    "priceFormatted": "2 822 400 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТН-1 N1 (0+170) Термометр стеклянный ртутный  для испытания нефтепродуктов. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-60",
    "title": "ТН 2М (0+360) Термометр стеклянный ртутный для испытаний нефтепродуктов",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-259",
    "price": 2822400,
    "priceFormatted": "2 822 400 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТН 2М (0+360) Термометр стеклянный ртутный для испытаний нефтепродуктов. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-61",
    "title": "ТН-4М- 1 (0+150) Термометр стеклянный ртутный для испытаний нефтепродуктов",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-260",
    "price": 2800000,
    "priceFormatted": "2 800 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТН-4М- 1 (0+150) Термометр стеклянный ртутный для испытаний нефтепродуктов. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "si-therm-62",
    "title": "ТН-7 (0+360) Термометр стеклянный ртутный для испытаний нефтепродуктов",
    "category": "areometrlar-termometrlar",
    "categoryName": "Areometr va Termometrlar",
    "badge": "GOST 28498",
    "badgeType": "success",
    "artikul": "THM-261",
    "price": 2800000,
    "priceFormatted": "2 800 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "ТН-7 (0+360) Термометр стеклянный ртутный для испытаний нефтепродуктов. Neft va laboratoriya sinovlari uchun maxsus laboratoriya termometri.",
    "specs": {
      "Termometr turi": "Simobli / Laboratoriya shisha termometri",
      "Standart": "GOST 28498 / GOST 400-80",
      "Metrologik attestatsiya": "Davlat qiyoslash sertifikati mavjud",
      "Qadoq": "10 dona / individual g'ilofda"
    },
    "applications": [
      "Neft va neft mahsulotlarini sinash laboratoriyalari",
      "Kimyo va oziq-ovqat sanoati"
    ],
    "features": [
      "Yuqori harorat barqarorligi va aniq shkala"
    ]
  },
  {
    "id": "titr-63",
    "title": "Стандарт-титр азотная кислота 0,1н (10 амп) Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-162",
    "price": 245000,
    "priceFormatted": "245 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр азотная кислота 0,1н (10 амп) Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-64",
    "title": "Стандарт-титр Натрий серноватистокислый 5-водный 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-163",
    "price": 260000,
    "priceFormatted": "260 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Натрий серноватистокислый 5-водный 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-65",
    "title": "Стандарт-титр Аммоний хлористый 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-164",
    "price": 245000,
    "priceFormatted": "245 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Аммоний хлористый 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-66",
    "title": "Стандарт-титр Калий йодноватокислый 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-165",
    "price": 295000,
    "priceFormatted": "295 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Калий йодноватокислый 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-67",
    "title": "Стандарт-титр Натрий хлористый 0,1н (5 шт в упаковке) Ленреактив",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-166",
    "price": 245000,
    "priceFormatted": "245 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Натрий хлористый 0,1н (5 шт в упаковке) Ленреактив. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-68",
    "title": "Стандарт-титр Натрий углекислый безводный 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-167",
    "price": 305000,
    "priceFormatted": "305 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Натрий углекислый безводный 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-69",
    "title": "Стандарт-титр Калий бромистый 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-168",
    "price": 300000,
    "priceFormatted": "300 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Калий бромистый 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-70",
    "title": "Стандарт-титр Калий железосинеродистый 0,05н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-169",
    "price": 255000,
    "priceFormatted": "255 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Калий железосинеродистый 0,05н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-71",
    "title": "Стандарт-титр Натрий углекислый кислый 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-170",
    "price": 336000,
    "priceFormatted": "336 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Натрий углекислый кислый 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-72",
    "title": "Стандарт-титр Кислота серная 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-171",
    "price": 356000,
    "priceFormatted": "356 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Кислота серная 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-73",
    "title": "Стандарт-титр Калий хлористый Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-172",
    "price": 298000,
    "priceFormatted": "298 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Калий хлористый Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-74",
    "title": "Стандарт-титр Щавелевая кислота 0,1Н  Ленреактив",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-173",
    "price": 360000,
    "priceFormatted": "360 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Щавелевая кислота 0,1Н  Ленреактив. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-75",
    "title": "Стандарт-титр аммоний роданистый 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-174",
    "price": 250000,
    "priceFormatted": "250 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр аммоний роданистый 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-76",
    "title": "Стандарт-титры \"НАТРИЙ ТЕТРАБОРНОКИСЛЫЙ\" (натрий тетраборат) УЗХП",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-175",
    "price": 270000,
    "priceFormatted": "270 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титры \"НАТРИЙ ТЕТРАБОРНОКИСЛЫЙ\" (натрий тетраборат) УЗХП. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-77",
    "title": "Стандарт-титры \"НАТРИЙ УГЛЕКИСЛЫЙ\" (натрий карбонат) УЗХП",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-176",
    "price": 200000,
    "priceFormatted": "200 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титры \"НАТРИЙ УГЛЕКИСЛЫЙ\" (натрий карбонат) УЗХП. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-78",
    "title": "Стандарт-титр, соль Мора Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-177",
    "price": 284000,
    "priceFormatted": "284 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр, соль Мора Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-79",
    "title": "Стандарт-титры \"БАРИЙ ХЛОРИСТЫИ\" (барий хлорид) 2-водный Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-178",
    "price": 275000,
    "priceFormatted": "275 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титры \"БАРИЙ ХЛОРИСТЫИ\" (барий хлорид) 2-водный Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-80",
    "title": "Стандарт-титр Калий щавелевокислый 1-водный 0,1н  Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-179",
    "price": 336000,
    "priceFormatted": "336 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Калий щавелевокислый 1-водный 0,1н  Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-81",
    "title": "Стандарт титр Трилон Б",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-180",
    "price": 324000,
    "priceFormatted": "324 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт титр Трилон Б. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-82",
    "title": "Стандарт-титры \"КИСЛОТА УКСУСНАЯ 0,1Н\" 10 амп Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-181",
    "price": 216000,
    "priceFormatted": "216 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титры \"КИСЛОТА УКСУСНАЯ 0,1Н\" 10 амп Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-83",
    "title": "Стандарт-титры \"КАЛИЙ УГЛЕКИСЛЫЙ\" (калий карбонат) Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-182",
    "price": 215000,
    "priceFormatted": "215 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титры \"КАЛИЙ УГЛЕКИСЛЫЙ\" (калий карбонат) Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-84",
    "title": "Стандарт титр рН метрии набор 6 значений (1,65; 3,56; 4,01; 6,86; 9,18; 12,43)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-183",
    "price": 320000,
    "priceFormatted": "320 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт титр рН метрии набор 6 значений (1,65; 3,56; 4,01; 6,86; 9,18; 12,43). Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-85",
    "title": "Стандарт-титры для приготовления рабочих эталонов рН=3,56 Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-184",
    "price": 180000,
    "priceFormatted": "180 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титры для приготовления рабочих эталонов рН=3,56 Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-86",
    "title": "Стандарт-титр, рН-метрии, тип 4,01 Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-185",
    "price": 175000,
    "priceFormatted": "175 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр, рН-метрии, тип 4,01 Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-87",
    "title": "Стандарт-титр Калия гидроокись Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-186",
    "price": 270000,
    "priceFormatted": "270 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Калия гидроокись Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-88",
    "title": "Стандарт-титр Кислота щавелевая 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-187",
    "price": 240000,
    "priceFormatted": "240 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Кислота щавелевая 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "titr-89",
    "title": "Стандарт-титр Калий хромовокислый 0,1н Уралхиминвест",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Fiksanal",
    "badgeType": "primary",
    "artikul": "TITR-188",
    "price": 235000,
    "priceFormatted": "235 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стандарт-титр Калий хромовокислый 0,1н Уралхиминвест. Titrimetrik tahlil va aniq ishchi eritmalarni tayyorlash uchun fiksanal.",
    "specs": {
      "Turi": "Standart-titr (Fiksanal)",
      "Qadoqlash": "коробка (germetik ampulalar to'plami)",
      "Standart": "TU / GOST / O'zDSt",
      "Yaroqlilik muddati": "Ishlab chiqarilgan sanadan 2-3 yil",
      "Saqlash": "+15°C dan +25°C gacha"
    },
    "applications": [
      "Kimyoviy titrlash va miqdoriy tahlil laboratoriyalari",
      "Suv, tuproq, oziq-ovqat va farmatsevtika nazorati"
    ],
    "features": [
      "Aniq 0.1n / 0.05n konsentratsiyani oson tayyorlash imkoniyati"
    ]
  },
  {
    "id": "gso-90",
    "title": "Кадмий ГСО 7874-2000, МСО 0299:2002 (1г/дм3), 5мл",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7874-2000",
    "price": 240000,
    "priceFormatted": "240 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Кадмий ГСО 7874-2000, МСО 0299:2002 (1г/дм3), 5мл. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-91",
    "title": "Нитрит-ион ГСО 7753-2000 МСО 0202:2001 (1 г/дм3), 3.05.01.0290",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7753-2000",
    "price": 235000,
    "priceFormatted": "235 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Нитрит-ион ГСО 7753-2000 МСО 0202:2001 (1 г/дм3), 3.05.01.0290. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-92",
    "title": "Марганец (II) ГСО 7875-2000 МСО 0300:2002 (1г/дм3) 5 мл",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7875-2000",
    "price": 210000,
    "priceFormatted": "210 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Марганец (II) ГСО 7875-2000 МСО 0300:2002 (1г/дм3) 5 мл. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-93",
    "title": "Магний ГСО 7681-99 МСО 0196:2001 (1г/дм3) 5 мл",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7681-99",
    "price": 252000,
    "priceFormatted": "252 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Магний ГСО 7681-99 МСО 0196:2001 (1г/дм3) 5 мл. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-94",
    "title": "Мышьяк (III) ГСО 7976-2001 (0,1 г/дм3) 5 мл",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7976-2001",
    "price": 216000,
    "priceFormatted": "216 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Мышьяк (III) ГСО 7976-2001 (0,1 г/дм3) 5 мл. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-95",
    "title": "Жесткость воды ГСО 7680-99",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7680-99",
    "price": 235000,
    "priceFormatted": "235 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Жесткость воды ГСО 7680-99. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-96",
    "title": "Со состава водного раствора хлорид-ионов ГСО 7617-99",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7617-99",
    "price": 210000,
    "priceFormatted": "210 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Со состава водного раствора хлорид-ионов ГСО 7617-99. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-97",
    "title": "СО состава водного раствора фосфат-ионов ГСО 7748-99",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7748-99",
    "price": 250000,
    "priceFormatted": "250 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава водного раствора фосфат-ионов ГСО 7748-99. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-98",
    "title": "СО ионов кальция ГСО 7682-99 (1 г/дм3) 5 мл",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7682-99",
    "price": 265000,
    "priceFormatted": "265 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО ионов кальция ГСО 7682-99 (1 г/дм3) 5 мл. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-99",
    "title": "СО состава фенола ГСО 7101-94",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7101-94",
    "price": 228000,
    "priceFormatted": "228 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава фенола ГСО 7101-94. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-100",
    "title": "СО состава раствора ионов ртути ГСО 7879-2001",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7879-2001",
    "price": 216000,
    "priceFormatted": "216 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава раствора ионов ртути ГСО 7879-2001. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-101",
    "title": "СО состава раствора ионов никеля ГСО 7873-2000",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7873-2000",
    "price": 235000,
    "priceFormatted": "235 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава раствора ионов никеля ГСО 7873-2000. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-102",
    "title": "СО состава раствора ионов свинца ГСО 7877-2000",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7877-2000",
    "price": 224000,
    "priceFormatted": "224 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава раствора ионов свинца ГСО 7877-2000. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-103",
    "title": "ГСО Аммоний 7747-99",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-2102",
    "price": 210000,
    "priceFormatted": "210 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО Аммоний 7747-99. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-104",
    "title": "Хром (VI) ГСО 7834-2000 МСО 0293:2002 ( 1 г/дм3)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7834-2000",
    "price": 205000,
    "priceFormatted": "205 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Хром (VI) ГСО 7834-2000 МСО 0293:2002 ( 1 г/дм3). Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-105",
    "title": "Хлорид-ион ГСО 7616-99 МСО 0189:2000(1г/дм3) 5мл",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7616-99",
    "price": 205000,
    "priceFormatted": "205 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Хлорид-ион ГСО 7616-99 МСО 0189:2000(1г/дм3) 5мл. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-106",
    "title": "Цинк ГСО 7837-2000",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7837-2000",
    "price": 218000,
    "priceFormatted": "218 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Цинк ГСО 7837-2000. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-107",
    "title": "Роданид ГСО 7618-99",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7618-99",
    "price": 225000,
    "priceFormatted": "225 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Роданид ГСО 7618-99. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-108",
    "title": "ГСО ионов меди ГСО 7836-2000",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7836-2000",
    "price": 254000,
    "priceFormatted": "254 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов меди ГСО 7836-2000. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-109",
    "title": "Железо (III) ГСО 7835-2000",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7835-2000",
    "price": 245000,
    "priceFormatted": "245 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Железо (III) ГСО 7835-2000. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-110",
    "title": "Мутность воды (формазиновая суспензия) ГСО 12428-2024 (4000 ЕМФ)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Suv Tahlili",
    "badgeType": "success",
    "artikul": "GSO-12428-2024",
    "price": 250000,
    "priceFormatted": "250 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Мутность воды (формазиновая суспензия) ГСО 12428-2024 (4000 ЕМФ). Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-111",
    "title": "Кремний ГСО 8934-2008 (флакон 40 мл)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8934-2008",
    "price": 300000,
    "priceFormatted": "300 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Кремний ГСО 8934-2008 (флакон 40 мл). Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "40 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-112",
    "title": "Общей жесткость воды ГСО 7680-99 (флакон 40 мл)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7680-99",
    "price": 275000,
    "priceFormatted": "275 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Общей жесткость воды ГСО 7680-99 (флакон 40 мл). Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "40 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-113",
    "title": "Ионов кобальта ГСО 7880-2001",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7880-2001",
    "price": 230000,
    "priceFormatted": "230 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов кобальта ГСО 7880-2001. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-114",
    "title": "Цветность ГСО 11431-2019",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Suv Tahlili",
    "badgeType": "success",
    "artikul": "GSO-11431-2019",
    "price": 250000,
    "priceFormatted": "250 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Цветность ГСО 11431-2019. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "40 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-115",
    "title": "Марганец (II) ГСО 7876-2000 МСО 0301:2002 (10 г/дм3)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7876-2000",
    "price": 220000,
    "priceFormatted": "220 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Марганец (II) ГСО 7876-2000 МСО 0301:2002 (10 г/дм3). Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-116",
    "title": "Алюминий ГСО 7927-2001 МСО 0306:2002 (1г/дм3)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7927-2001",
    "price": 215000,
    "priceFormatted": "215 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Алюминий ГСО 7927-2001 МСО 0306:2002 (1г/дм3). Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-117",
    "title": "Фторид ион ГСО 8125-2002",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8125-2002",
    "price": 315000,
    "priceFormatted": "315 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Фторид ион ГСО 8125-2002. Ishlab chiqaruvchi: Ekrosxim. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "Ekrosxim",
      "Hajmi / Qadoq": "40 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-118",
    "title": "Водные растворы ионов калия ГСО 8092-94-8094-94",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8092-94-8094-94",
    "price": 240000,
    "priceFormatted": "240 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Водные растворы ионов калия ГСО 8092-94-8094-94. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-119",
    "title": "Водный раствор ионов бария ГСО 7107-94",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7107-94",
    "price": 270000,
    "priceFormatted": "270 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Водный раствор ионов бария ГСО 7107-94. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-120",
    "title": "Фосфор общий ГСО 7241-96 МСО 0092:1999 (0,5 мг/мл),",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7241-96",
    "price": 228000,
    "priceFormatted": "228 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Фосфор общий ГСО 7241-96 МСО 0092:1999 (0,5 мг/мл),. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-121",
    "title": "Водные растворы ионов кальция ГСО 8065-94-:-8067-94",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8065-94-",
    "price": 240000,
    "priceFormatted": "240 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Водные растворы ионов кальция ГСО 8065-94-:-8067-94. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-122",
    "title": "Водный раствор ионов селена ГСО 7340-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7340-96",
    "price": 245000,
    "priceFormatted": "245 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Водный раствор ионов селена ГСО 7340-96. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-123",
    "title": "Водные растворы ионов натрия ГСО 8062-94-:-8064-94",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8062-94-",
    "price": 250000,
    "priceFormatted": "250 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Водные растворы ионов натрия ГСО 8062-94-:-8064-94. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-124",
    "title": "ГСО ионов аммония (комплект № 15К) ГСО 7015-93/7017-93",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7015-93",
    "price": 225000,
    "priceFormatted": "225 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов аммония (комплект № 15К) ГСО 7015-93/7017-93. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-125",
    "title": "ГСО ионов алюминия (12К-1) ГСО 8059-94/8061-94",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8059-94",
    "price": 200000,
    "priceFormatted": "200 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов алюминия (12К-1) ГСО 8059-94/8061-94. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-126",
    "title": "ГСО состава водных растворов ионов алюминия (42К) ГСО 7854-2000",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7854-2000",
    "price": 235000,
    "priceFormatted": "235 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО состава водных растворов ионов алюминия (42К) ГСО 7854-2000. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 см",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-127",
    "title": "ГСО состава водных растворов ионов бора (39К-1) ГСО 7337-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7337-96",
    "price": 209000,
    "priceFormatted": "209 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО состава водных растворов ионов бора (39К-1) ГСО 7337-96. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-128",
    "title": "ГСО состава водных растворов ионов железа (III) ГСО 8032-94 (1г/дм3),",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8032-94",
    "price": 225000,
    "priceFormatted": "225 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО состава водных растворов ионов железа (III) ГСО 8032-94 (1г/дм3),. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-129",
    "title": "Калий (18К-1) ГСО 8092-94, МСО 0019:1998, фон – вода, 1,0 г/дм3",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8092-94",
    "price": 223000,
    "priceFormatted": "223 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Калий (18К-1) ГСО 8092-94, МСО 0019:1998, фон – вода, 1,0 г/дм3. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-130",
    "title": "Раствор формальдегида ГСО 9376-2009",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-9376-2009",
    "price": 255000,
    "priceFormatted": "255 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Раствор формальдегида ГСО 9376-2009. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-131",
    "title": "Магний (20К-1) ГСО 7190-95 (0085:1999)  1,0 (5)Фон – вода",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7190-95",
    "price": 223000,
    "priceFormatted": "223 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Магний (20К-1) ГСО 7190-95 (0085:1999)  1,0 (5)Фон – вода. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-132",
    "title": "Марганец (II) (10К-1) ГСО 8056-94 (0014:1998) 1,0 (5) Фон –0,1 М Н2SO4",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8056-94",
    "price": 223000,
    "priceFormatted": "223 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Марганец (II) (10К-1) ГСО 8056-94 (0014:1998) 1,0 (5) Фон –0,1 М Н2SO4. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-133",
    "title": "Натрий (17К-1) ГСО 8062-94, МСО 0018:1998, фон – вода, 1,0 г/дм3",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8062-94",
    "price": 202000,
    "priceFormatted": "202 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Натрий (17К-1) ГСО 8062-94, МСО 0018:1998, фон – вода, 1,0 г/дм3. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-134",
    "title": "Ртуть (9К-1) ГСО 8004-93 (0013:1998)    1,0 (5) Фон –0,1 М НNO3",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8004-93",
    "price": 242000,
    "priceFormatted": "242 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ртуть (9К-1) ГСО 8004-93 (0013:1998)    1,0 (5) Фон –0,1 М НNO3. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-135",
    "title": "Стронций (25К-1) ГСО 7145-95, МСО 0083:1999, фон – вода, 1,0 г/дм3",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7145-95",
    "price": 242000,
    "priceFormatted": "242 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Стронций (25К-1) ГСО 7145-95, МСО 0083:1999, фон – вода, 1,0 г/дм3. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-136",
    "title": "СО Сурьма 0,1 мг/см3 ГСО 7204-95 МСО 0086:1999 до 21.02.2028. 23К-2",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7204-95",
    "price": 242000,
    "priceFormatted": "242 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО Сурьма 0,1 мг/см3 ГСО 7204-95 МСО 0086:1999 до 21.02.2028. 23К-2. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-137",
    "title": "СО ионов хрома 1 г/л, фон-вода (5мл) (бывш ГСО 8035-94)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8035-94",
    "price": 278000,
    "priceFormatted": "278 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО ионов хрома 1 г/л, фон-вода (5мл) (бывш ГСО 8035-94). Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-138",
    "title": "Цинк (4К-1) ГСО 8053-94 (0008:1998)  1,0 (5)Фон –0,1 М НNO3",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8053-94",
    "price": 265000,
    "priceFormatted": "265 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Цинк (4К-1) ГСО 8053-94 (0008:1998)  1,0 (5)Фон –0,1 М НNO3. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-139",
    "title": "Нитрит-ион ГСО 7021-93 (1г/дм3) 7A-1, 3.09.03.02.0380,",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7021-93",
    "price": 252000,
    "priceFormatted": "252 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Нитрит-ион ГСО 7021-93 (1г/дм3) 7A-1, 3.09.03.02.0380,. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-140",
    "title": "ГСО состава водного раствора сульфат-ионов Стандарт: ГСО 6693-93",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-6693-93",
    "price": 245000,
    "priceFormatted": "245 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО состава водного раствора сульфат-ионов Стандарт: ГСО 6693-93. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-141",
    "title": "Бензол ГСО 7141-95 МСО 0038:1998 (1,5 см3)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7141-95",
    "price": 249000,
    "priceFormatted": "249 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Бензол ГСО 7141-95 МСО 0038:1998 (1,5 см3). Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-142",
    "title": "Общая жесткость воды ГСО 9284-2008",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-9284-2008",
    "price": 222000,
    "priceFormatted": "222 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Общая жесткость воды ГСО 9284-2008. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-143",
    "title": "Хлорид ионов 1А-1 ГСО 6687-93",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-6687-93",
    "price": 250000,
    "priceFormatted": "250 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Хлорид ионов 1А-1 ГСО 6687-93. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-144",
    "title": "Цветность ГСО 7853-2000 (500 градусов),",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Suv Tahlili",
    "badgeType": "success",
    "artikul": "GSO-7853-2000",
    "price": 357000,
    "priceFormatted": "357 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Цветность ГСО 7853-2000 (500 градусов),. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "20 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-145",
    "title": "ГСО 9437-2009 СО состава смеси триглицеридов жирных кислот",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-9437-2009",
    "price": 520000,
    "priceFormatted": "520 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО 9437-2009 СО состава смеси триглицеридов жирных кислот. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "10 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-146",
    "title": "Водный раствор сульфат-ионов (41А) ГСО 7437-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7437-98",
    "price": 246000,
    "priceFormatted": "246 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Водный раствор сульфат-ионов (41А) ГСО 7437-98. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-147",
    "title": "Нитрат ион ГСО 6696-93",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-6696-93",
    "price": 220000,
    "priceFormatted": "220 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Нитрат ион ГСО 6696-93. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-148",
    "title": "Молибден ГСО 8086-94",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8086-94",
    "price": 224000,
    "priceFormatted": "224 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Молибден ГСО 8086-94. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-149",
    "title": "Cтандартный образец БПК (ХПК) ГСО 8048-94 БПК 116 (ХПК 204) мг/дм3",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8048-94",
    "price": 330000,
    "priceFormatted": "330 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Cтандартный образец БПК (ХПК) ГСО 8048-94 БПК 116 (ХПК 204) мг/дм3. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "0,2 г",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-150",
    "title": "ГСО 7271-96, МСО 0101:1998 Мутность(формазиевая суспензия)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Suv Tahlili",
    "badgeType": "success",
    "artikul": "GSO-7271-96",
    "price": 286000,
    "priceFormatted": "286 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО 7271-96, МСО 0101:1998 Мутность(формазиевая суспензия). Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-151",
    "title": "ГСО 7018-93 фосфат-ионов МСО 0026:1998 1мг/см3 фон-вода",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7018-93",
    "price": 240000,
    "priceFormatted": "240 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО 7018-93 фосфат-ионов МСО 0026:1998 1мг/см3 фон-вода. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-152",
    "title": "ХПК ГСО 7425-97",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7425-97",
    "price": 400000,
    "priceFormatted": "400 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ХПК ГСО 7425-97. Ishlab chiqaruvchi: TsSOVV. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "TsSOVV",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-153",
    "title": "ГСО ХЛОРИД-ИОНОВ (9.5-10.5) ГСО 7478-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7478-98",
    "price": 240000,
    "priceFormatted": "240 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ХЛОРИД-ИОНОВ (9.5-10.5) ГСО 7478-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-154",
    "title": "Ионов железа (III) ГСО 7476-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7476-98",
    "price": 240000,
    "priceFormatted": "240 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов железа (III) ГСО 7476-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-155",
    "title": "Сульфат- ионов ГСО 7253-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7253-96",
    "price": 256000,
    "priceFormatted": "256 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Сульфат- ионов ГСО 7253-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-156",
    "title": "ГСО ИОНОВ КАДМИЯ (0.95-1.05) ГСО 7472-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7472-98",
    "price": 289000,
    "priceFormatted": "289 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ИОНОВ КАДМИЯ (0.95-1.05) ГСО 7472-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-157",
    "title": "ГСО ионов меди ГСО 7255-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7255-96",
    "price": 245000,
    "priceFormatted": "245 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов меди ГСО 7255-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-158",
    "title": "ГСО хлорид ионов ГСО 7262-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7262-96",
    "price": 239000,
    "priceFormatted": "239 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО хлорид ионов ГСО 7262-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-159",
    "title": "ГСО ионов хрома ГСО 7257-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7257-96",
    "price": 238000,
    "priceFormatted": "238 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов хрома ГСО 7257-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-160",
    "title": "ГСО общей жесткости воды ГСО 8206-2002",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8206-2002",
    "price": 257000,
    "priceFormatted": "257 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО общей жесткости воды ГСО 8206-2002. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-161",
    "title": "ГСО фенола ГСО 7270-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7270-96",
    "price": 260000,
    "priceFormatted": "260 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО фенола ГСО 7270-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-162",
    "title": "ГСО ионов цинка ГСО 7256-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7256-96",
    "price": 265000,
    "priceFormatted": "265 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов цинка ГСО 7256-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-163",
    "title": "ГСО ионов цинка ГСО 7470-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7470-98",
    "price": 265000,
    "priceFormatted": "265 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов цинка ГСО 7470-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-164",
    "title": "ГСО ионов цинка ГСО 7471-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7471-98",
    "price": 290000,
    "priceFormatted": "290 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов цинка ГСО 7471-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-165",
    "title": "ГСО ионов меди ГСО 8205-2002",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8205-2002",
    "price": 286000,
    "priceFormatted": "286 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов меди ГСО 8205-2002. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-166",
    "title": "ГСО сульфат ионов ГСО 7480-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7480-98",
    "price": 228000,
    "priceFormatted": "228 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО сульфат ионов ГСО 7480-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-167",
    "title": "ГСО ионов аммония ГСО 7259-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7259-96",
    "price": 243000,
    "priceFormatted": "243 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов аммония ГСО 7259-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-168",
    "title": "ГСО ионов мышьяка ГСО 7264-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7264-96",
    "price": 250000,
    "priceFormatted": "250 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов мышьяка ГСО 7264-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-169",
    "title": "ГСО нитрат ионов ГСО 7258-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7258-96",
    "price": 254000,
    "priceFormatted": "254 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО нитрат ионов ГСО 7258-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-170",
    "title": "Ионов никеля ГСО 7265-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7265-96",
    "price": 200000,
    "priceFormatted": "200 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов никеля ГСО 7265-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-171",
    "title": "Ионов висмута ГСО 7477-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7477-98",
    "price": 240000,
    "priceFormatted": "240 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов висмута ГСО 7477-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-172",
    "title": "Ионов марганца ГСО 7266-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7266-96",
    "price": 200000,
    "priceFormatted": "200 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов марганца ГСО 7266-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-173",
    "title": "Ионов свинца ГСО 7252-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7252-96",
    "price": 210000,
    "priceFormatted": "210 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов свинца ГСО 7252-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-174",
    "title": "Ионов ртути ГСО 7263-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7263-96",
    "price": 210000,
    "priceFormatted": "210 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов ртути ГСО 7263-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-175",
    "title": "Ионов алюминия ГСО 7269-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7269-96",
    "price": 205000,
    "priceFormatted": "205 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов алюминия ГСО 7269-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-176",
    "title": "Ионов натрия ГСО 7474-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7474-98",
    "price": 215000,
    "priceFormatted": "215 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов натрия ГСО 7474-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-177",
    "title": "Ионов кобальта ГСО 7268-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7268-96",
    "price": 220000,
    "priceFormatted": "220 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов кобальта ГСО 7268-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-178",
    "title": "Ионов железа ГСО 7254-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7254-96",
    "price": 220000,
    "priceFormatted": "220 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов железа ГСО 7254-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-179",
    "title": "Нитрит ионов ГСО 7479-98",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7479-98",
    "price": 219000,
    "priceFormatted": "219 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Нитрит ионов ГСО 7479-98. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см 3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-180",
    "title": "Ионов ванадия ГСО 7267-96",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7267-96",
    "price": 245000,
    "priceFormatted": "245 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Ионов ванадия ГСО 7267-96. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "6 см3",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-181",
    "title": "ГСО ионов висмута ГСО 8463-2003",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-8463-2003",
    "price": 224000,
    "priceFormatted": "224 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "ГСО ионов висмута ГСО 8463-2003. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-182",
    "title": "Cтандартный образец окисляемость перманганатая 1мг/см3   ГСО  7797 :2000",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "GSO / CRM",
    "badgeType": "success",
    "artikul": "GSO-7797",
    "price": 220000,
    "priceFormatted": "220 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Cтандартный образец окисляемость перманганатая 1мг/см3   ГСО  7797 :2000. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-183",
    "title": "СО состава пестицида 4.4-ДДТ ГСО 8892-2007",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Pestitsid GSO",
    "badgeType": "success",
    "artikul": "GSO-8892-2007",
    "price": 3170000,
    "priceFormatted": "3 170 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава пестицида 4.4-ДДТ ГСО 8892-2007. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "2 г",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-184",
    "title": "СО состава пестицида 4.4-ДДД ГСО 8891-2007",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Pestitsid GSO",
    "badgeType": "success",
    "artikul": "GSO-8891-2007",
    "price": 2830000,
    "priceFormatted": "2 830 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава пестицида 4.4-ДДД ГСО 8891-2007. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "2 г",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-185",
    "title": "СО состава пестицида Альфа-ГХЦГ ГСО 8888-2007",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Pestitsid GSO",
    "badgeType": "success",
    "artikul": "GSO-8888-2007",
    "price": 3170000,
    "priceFormatted": "3 170 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава пестицида Альфа-ГХЦГ ГСО 8888-2007. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "2 г",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-186",
    "title": "СО состава пестицида Гамма-ГХЦГ ГСО 8890-2007",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Pestitsid GSO",
    "badgeType": "success",
    "artikul": "GSO-8890-2007",
    "price": 2890000,
    "priceFormatted": "2 890 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава пестицида Гамма-ГХЦГ ГСО 8890-2007. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "2 г",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-187",
    "title": "СО состава пестицида 4.4-ДДЭ ГСО 8893-2007",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Pestitsid GSO",
    "badgeType": "success",
    "artikul": "GSO-8893-2007",
    "price": 2886000,
    "priceFormatted": "2 886 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "СО состава пестицида 4.4-ДДЭ ГСО 8893-2007. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "2 г",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-188",
    "title": "Нефтепродукт в гексане ГСО 7950-2001",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Neft GSO",
    "badgeType": "success",
    "artikul": "GSO-7950-2001",
    "price": 1064000,
    "priceFormatted": "1 064 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Нефтепродукт в гексане ГСО 7950-2001. Ishlab chiqaruvchi: UZXP. Davlat metrologik pasporti bilan.",
    "specs": {
      "Standart namunalar turi": "Davlat standart namunasi (GSO / CRM)",
      "Ishlab chiqaruvchi": "UZXP",
      "Hajmi / Qadoq": "5 мл",
      "Metrologik nazorat": "O'zbekiston Davlat Reestridan o'tgan",
      "Yaroqlilik muddati": "24-36 oy",
      "Sertifikat": "Metrologik attestatsiya pasporti bilan ta'minlanadi"
    },
    "applications": [
      "Fotometriya, spektrofotometriya va atom-absorbtsiya tahlili",
      "Ekologiya, suv tozalash va sanitariya nazorati",
      "O'lchov vositalarini davlat qiyoslovi va kalibrlashi"
    ],
    "features": [
      "Har bir ampula sertifikati bilan biriktirilgan",
      "Xalqaro me'yorlarga to'liq moslik"
    ]
  },
  {
    "id": "gso-crm-189",
    "title": "Анти хлордан (y) SHAM_243958 10mg,98%",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Import CRM",
    "badgeType": "warning",
    "artikul": "CRM-488",
    "price": 2715958,
    "priceFormatted": "2 715 958 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Анти хлордан (y) SHAM_243958 10mg,98%. Xalqaro CRM sertifikatlangan standart namunasi (Xitoy / Xalqaro akkreditatsiya).",
    "specs": {
      "Standart kodi": "ISO 17034 / CRM",
      "Ishlab chiqaruvchi": "Xalqaro standartlar laboratoriyasi (Xitoy)",
      "Tozalik darajasi": "98% - 99.65%",
      "Saqlash": "Muzlatgichda (-18°C gacha)"
    },
    "applications": [
      "HPLC, GC-MS va xromatografik analizlar",
      "Oziq-ovqat va don mahsulotlari mikotoksin tahlili"
    ],
    "features": [
      "Yuqori tozalikdagi xromatografik etalon"
    ]
  },
  {
    "id": "gso-crm-190",
    "title": "а-BHC в н-гексане GBW(E)086403 1.2mL,1000mg/mL",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Import CRM",
    "badgeType": "warning",
    "artikul": "CRM-489",
    "price": 1077018,
    "priceFormatted": "1 077 018 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "а-BHC в н-гексане GBW(E)086403 1.2mL,1000mg/mL. Xalqaro CRM sertifikatlangan standart namunasi (Xitoy / Xalqaro akkreditatsiya).",
    "specs": {
      "Standart kodi": "ISO 17034 / CRM",
      "Ishlab chiqaruvchi": "Xalqaro standartlar laboratoriyasi (Xitoy)",
      "Tozalik darajasi": "98% - 99.65%",
      "Saqlash": "Muzlatgichda (-18°C gacha)"
    },
    "applications": [
      "HPLC, GC-MS va xromatografik analizlar",
      "Oziq-ovqat va don mahsulotlari mikotoksin tahlili"
    ],
    "features": [
      "Yuqori tozalikdagi xromatografik etalon"
    ]
  },
  {
    "id": "gso-crm-191",
    "title": "p,p'-DDD в н-гексане GBW(E)086415 1.2mL,1000mg/mL",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Import CRM",
    "badgeType": "warning",
    "artikul": "CRM-490",
    "price": 866297,
    "priceFormatted": "866 297 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "p,p'-DDD в н-гексане GBW(E)086415 1.2mL,1000mg/mL. Xalqaro CRM sertifikatlangan standart namunasi (Xitoy / Xalqaro akkreditatsiya).",
    "specs": {
      "Standart kodi": "ISO 17034 / CRM",
      "Ishlab chiqaruvchi": "Xalqaro standartlar laboratoriyasi (Xitoy)",
      "Tozalik darajasi": "98% - 99.65%",
      "Saqlash": "Muzlatgichda (-18°C gacha)"
    },
    "applications": [
      "HPLC, GC-MS va xromatografik analizlar",
      "Oziq-ovqat va don mahsulotlari mikotoksin tahlili"
    ],
    "features": [
      "Yuqori tozalikdagi xromatografik etalon"
    ]
  },
  {
    "id": "gso-crm-192",
    "title": "Афлатоксин B1 в ацетонитриле BWQ8307-2016 1.2mL,2mg/mL",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Import CRM",
    "badgeType": "warning",
    "artikul": "CRM-491",
    "price": 1404806,
    "priceFormatted": "1 404 806 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Афлатоксин B1 в ацетонитриле BWQ8307-2016 1.2mL,2mg/mL. Xalqaro CRM sertifikatlangan standart namunasi (Xitoy / Xalqaro akkreditatsiya).",
    "specs": {
      "Standart kodi": "ISO 17034 / CRM",
      "Ishlab chiqaruvchi": "Xalqaro standartlar laboratoriyasi (Xitoy)",
      "Tozalik darajasi": "98% - 99.65%",
      "Saqlash": "Muzlatgichda (-18°C gacha)"
    },
    "applications": [
      "HPLC, GC-MS va xromatografik analizlar",
      "Oziq-ovqat va don mahsulotlari mikotoksin tahlili"
    ],
    "features": [
      "Yuqori tozalikdagi xromatografik etalon"
    ]
  },
  {
    "id": "gso-crm-193",
    "title": "Aфлатоксин M1 в ацетонитриле BWQ8130-2016 1mL,10mg/mL",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Import CRM",
    "badgeType": "warning",
    "artikul": "CRM-492",
    "price": 1662353,
    "priceFormatted": "1 662 353 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Aфлатоксин M1 в ацетонитриле BWQ8130-2016 1mL,10mg/mL. Xalqaro CRM sertifikatlangan standart namunasi (Xitoy / Xalqaro akkreditatsiya).",
    "specs": {
      "Standart kodi": "ISO 17034 / CRM",
      "Ishlab chiqaruvchi": "Xalqaro standartlar laboratoriyasi (Xitoy)",
      "Tozalik darajasi": "98% - 99.65%",
      "Saqlash": "Muzlatgichda (-18°C gacha)"
    },
    "applications": [
      "HPLC, GC-MS va xromatografik analizlar",
      "Oziq-ovqat va don mahsulotlari mikotoksin tahlili"
    ],
    "features": [
      "Yuqori tozalikdagi xromatografik etalon"
    ]
  },
  {
    "id": "gso-crm-194",
    "title": "HT-2 токсини ацетонитриле BWN5903-2016 1.2mL,100mg/mL",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Import CRM",
    "badgeType": "warning",
    "artikul": "CRM-493",
    "price": 2637913,
    "priceFormatted": "2 637 913 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "HT-2 токсини ацетонитриле BWN5903-2016 1.2mL,100mg/mL. Xalqaro CRM sertifikatlangan standart namunasi (Xitoy / Xalqaro akkreditatsiya).",
    "specs": {
      "Standart kodi": "ISO 17034 / CRM",
      "Ishlab chiqaruvchi": "Xalqaro standartlar laboratoriyasi (Xitoy)",
      "Tozalik darajasi": "98% - 99.65%",
      "Saqlash": "Muzlatgichda (-18°C gacha)"
    },
    "applications": [
      "HPLC, GC-MS va xromatografik analizlar",
      "Oziq-ovqat va don mahsulotlari mikotoksin tahlili"
    ],
    "features": [
      "Yuqori tozalikdagi xromatografik etalon"
    ]
  },
  {
    "id": "gso-crm-195",
    "title": "Госсипол standard BWJ4861-2016 50mg, 99.65%",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "Import CRM",
    "badgeType": "warning",
    "artikul": "CRM-494",
    "price": 2861121,
    "priceFormatted": "2 861 121 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "Госсипол standard BWJ4861-2016 50mg, 99.65%. Xalqaro CRM sertifikatlangan standart namunasi (Xitoy / Xalqaro akkreditatsiya).",
    "specs": {
      "Standart kodi": "ISO 17034 / CRM",
      "Ishlab chiqaruvchi": "Xalqaro standartlar laboratoriyasi (Xitoy)",
      "Tozalik darajasi": "98% - 99.65%",
      "Saqlash": "Muzlatgichda (-18°C gacha)"
    },
    "applications": [
      "HPLC, GC-MS va xromatografik analizlar",
      "Oziq-ovqat va don mahsulotlari mikotoksin tahlili"
    ],
    "features": [
      "Yuqori tozalikdagi xromatografik etalon"
    ]
  },
  {
    "id": "buf-196",
    "title": "Буферный раствор рН=1,68 (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "danger",
    "artikul": "BUF-695",
    "price": 576000,
    "priceFormatted": "576 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=1,68. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-197",
    "title": "Буферный раствор рН=4,01 (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "danger",
    "artikul": "BUF-696",
    "price": 576000,
    "priceFormatted": "576 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=4,01. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-198",
    "title": "Буферный раствор рН=6,86 (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "success",
    "artikul": "BUF-697",
    "price": 576000,
    "priceFormatted": "576 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=6,86. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-199",
    "title": "Буферный раствор рН=7,01 (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "success",
    "artikul": "BUF-698",
    "price": 576000,
    "priceFormatted": "576 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=7,01. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-200",
    "title": "Буферный раствор рН=9,18 (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "primary",
    "artikul": "BUF-699",
    "price": 576000,
    "priceFormatted": "576 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=9,18. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-201",
    "title": "Буферный раствор рН=11,00 (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "primary",
    "artikul": "BUF-700",
    "price": 576000,
    "priceFormatted": "576 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=11,00. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-202",
    "title": "Буферный раствор рН=1,48 (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "primary",
    "artikul": "BUF-701",
    "price": 576000,
    "priceFormatted": "576 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=1,48. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-203",
    "title": "Буферный раствор рН=10,01 (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "primary",
    "artikul": "BUF-702",
    "price": 576000,
    "priceFormatted": "576 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=10,01. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-204",
    "title": "Буферный раствор рН=4,01 (500 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "danger",
    "artikul": "BUF-703",
    "price": 730500,
    "priceFormatted": "730 500 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=4,01. Hajmi: 500 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "500 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-205",
    "title": "Буферный раствор рН=6,86 (500 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "success",
    "artikul": "BUF-704",
    "price": 730500,
    "priceFormatted": "730 500 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=6,86. Hajmi: 500 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "500 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-206",
    "title": "Буферный раствор рН=7,01 (500 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "success",
    "artikul": "BUF-705",
    "price": 730500,
    "priceFormatted": "730 500 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=7,01. Hajmi: 500 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "500 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-207",
    "title": "Буферный раствор рН=9,18 (500 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "primary",
    "artikul": "BUF-706",
    "price": 730500,
    "priceFormatted": "730 500 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=9,18. Hajmi: 500 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "500 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-208",
    "title": "Буферный раствор рН=10,01 (500 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "primary",
    "artikul": "BUF-707",
    "price": 730500,
    "priceFormatted": "730 500 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=10,01. Hajmi: 500 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "500 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-209",
    "title": "Буферный раствор рН=11,00 (500 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "pH Bufer",
    "badgeType": "primary",
    "artikul": "BUF-708",
    "price": 730500,
    "priceFormatted": "730 500 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Буферный раствор рН=11,00. Hajmi: 500 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "500 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-210",
    "title": "Калибровочный раствор для кондуктометра 5000 мкСм/см (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "EC Standart",
    "badgeType": "primary",
    "artikul": "BUF-709",
    "price": 885000,
    "priceFormatted": "885 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Калибровочный раствор для кондуктометра 5000 мкСм/см. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-211",
    "title": "Калибровочный раствор для кондуктометра 80000 мкСм/см (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "EC Standart",
    "badgeType": "primary",
    "artikul": "BUF-710",
    "price": 992000,
    "priceFormatted": "992 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Калибровочный раствор для кондуктометра 80000 мкСм/см. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-212",
    "title": "Калибровочный раствор для кондуктометра 111800 мкСм/см (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "EC Standart",
    "badgeType": "primary",
    "artikul": "BUF-711",
    "price": 997000,
    "priceFormatted": "997 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Калибровочный раствор для кондуктометра 111800 мкСм/см. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-213",
    "title": "Калибровочный раствор 1382 мг/л (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "EC Standart",
    "badgeType": "primary",
    "artikul": "BUF-712",
    "price": 897000,
    "priceFormatted": "897 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Калибровочный раствор 1382 мг/л. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-214",
    "title": "Калибровочный раствор для кондуктометра 1413 мкСм/см (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "EC Standart",
    "badgeType": "primary",
    "artikul": "BUF-713",
    "price": 910000,
    "priceFormatted": "910 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Калибровочный раствор для кондуктометра 1413 мкСм/см. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "buf-215",
    "title": "Калибровочный раствор для кондуктометра 5 мкСм/см (250 мл)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer Eritmalari (pH/EC)",
    "badge": "EC Standart",
    "badgeType": "primary",
    "artikul": "BUF-714",
    "price": 878000,
    "priceFormatted": "878 000 so'm",
    "inStock": true,
    "stockCount": "Omborda mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "Калибровочный раствор для кондуктометра 5 мкСм/см. Hajmi: 250 мл. pH-metrlar va konduktometrlarni aniq kalibrlash uchun standart eritma.",
    "specs": {
      "Eritma turi": "Sertifikatlangan kalibrlash eritmasi",
      "Hajmi": "250 мл",
      "Standart": "NIST / DIN / O'zDSt",
      "Harorat korrelyatsiyasi": "25°C da nominal qiymat (Harorat jadvali idishda mavjud)",
      "Yaroqlilik muddati": "24 oy"
    },
    "applications": [
      "pH-metrlar, TDS-metrlar va konduktometrlarni kalibrlash",
      "Laboratoriya va sanoat texnologik nazorati"
    ],
    "features": [
      "Yuqori barqarorlik va ifloslanishga chidamlilik",
      "Metrologik kafolat pasporti bilan"
    ]
  },
  {
    "id": "weiyel-1",
    "title": "Раствор для титрования дихроматом калия (BWZ8249-2016 Potassium dichromate titration solution, 500 mL,c (1/6K2 Cr2O7) = 0.8000 mol/L, water)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWZ8249-2016",
    "price": 722400,
    "priceFormatted": "722 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8249-2016 Potassium dichromate titration solution, 500 mL,c (1/6K2 Cr2O7) = 0.8000 mol/L, water / Раствор для титрования дихроматом калия. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8249-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8249-2016 Potassium dichromate titration solution, 500 mL,c (1/6K2 Cr2O7) = 0.8000 mol/L, water / Раствор для титрования дихроматом калия)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.8000 mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-2",
    "title": "Раствор для титрования азотной кислотой, фон вода ,0.1005mol/L (BWB2026-2016 Nitric acid titration solution, 100mL , 0.1005 mol/L, water)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWB2026-2016",
    "price": 263200,
    "priceFormatted": "263 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWB2026-2016 Nitric acid titration solution, 100mL , 0.1005 mol/L, water / Раствор для титрования азотной кислотой, фон вода ,0.1005mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWB2026-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWB2026-2016 Nitric acid titration solution, 100mL , 0.1005 mol/L, water / Раствор для титрования азотной кислотой, фон вода ,0.1005mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1005 mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-3",
    "title": "Стандартное вещество для определения pH раствора тригидрооксалата калия 1.68(25℃) (BWZ6591-2016 Potassium tri hydrogen oxalate pH solution standard substance   50mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "pH Standart",
    "badgeType": "success",
    "artikul": "BWZ6591-2016",
    "price": 296800,
    "priceFormatted": "296 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ6591-2016 Potassium tri hydrogen oxalate pH solution standard substance   50mL / Стандартное вещество для определения pH раствора тригидрооксалата калия 1.68(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6591-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6591-2016 Potassium tri hydrogen oxalate pH solution standard substance   50mL / Стандартное вещество для определения pH раствора тригидрооксалата калия 1.68(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-4",
    "title": "Буферный раствор тартрата гидрохлорида калия 3.55 (BWZ8168-2016 Potassium hydro gent art rate pH buffer solution, 500mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "pH Standart",
    "badgeType": "success",
    "artikul": "BWZ8168-2016",
    "price": 464800,
    "priceFormatted": "464 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ8168-2016 Potassium hydro gent art rate pH buffer solution, 500mL / Буферный раствор тартрата гидрохлорида калия 3.55. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8168-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8168-2016 Potassium hydro gent art rate pH buffer solution, 500mL / Буферный раствор тартрата гидрохлорида калия 3.55)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-5",
    "title": "Стандартное вещество для раствора смешанных фосфатов pH , 6.86(25℃) (GBW(E)130935 Standard substance for mixed phosphate pH solution,500mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "pH Standart",
    "badgeType": "success",
    "artikul": "GBW(E)130935",
    "price": 560000,
    "priceFormatted": "560 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "GBW(E)130935 Standard substance for mixed phosphate pH solution,500mL / Стандартное вещество для раствора смешанных фосфатов pH , 6.86(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)130935",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)130935 Standard substance for mixed phosphate pH solution,500mL / Стандартное вещество для раствора смешанных фосфатов pH , 6.86(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-6",
    "title": "Гидрофталат калия 10 vials/kit, 4.00 (BWZ7116-2016 Potassium hydrogen phthalate,10pieces/box)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ7116-2016",
    "price": 453600,
    "priceFormatted": "453 600 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ7116-2016 Potassium hydrogen phthalate,10pieces/box / Гидрофталат калия 10 vials/kit, 4.00. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7116-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "комплект (BWZ7116-2016 Potassium hydrogen phthalate,10pieces/box / Гидрофталат калия 10 vials/kit, 4.00)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-7",
    "title": "Эталонный образец pH буры 10 vials/kit,9.18 (BWZ7118-2016 Borax pH reference material,10pieces/box)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ7118-2016",
    "price": 380800,
    "priceFormatted": "380 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ7118-2016 Borax pH reference material,10pieces/box / Эталонный образец pH буры 10 vials/kit,9.18. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7118-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "комплект (BWZ7118-2016 Borax pH reference material,10pieces/box / Эталонный образец pH буры 10 vials/kit,9.18)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-8",
    "title": "Раствор для титрования броматом калия-бромидом калия c(1/6KBrO3-KBr）=0.1009mol/L (BWZ8411-2016 Potassium bromate-potassium bromide titration solution, 500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWZ8411-2016",
    "price": 1064000,
    "priceFormatted": "1 064 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8411-2016 Potassium bromate-potassium bromide titration solution, 500mL / Раствор для титрования броматом калия-бромидом калия c(1/6KBrO3-KBr）=0.1009mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8411-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8411-2016 Potassium bromate-potassium bromide titration solution, 500mL / Раствор для титрования броматом калия-бромидом калия c(1/6KBrO3-KBr）=0.1009mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1009mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-9",
    "title": "Раствор карбоната калия 15%（w/v） (BWZ6144-2016 Potassium carbonate solution,100mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ6144-2016",
    "price": 207200,
    "priceFormatted": "207 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ6144-2016 Potassium carbonate solution,100mL / Раствор карбоната калия 15%（w/v）. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6144-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6144-2016 Potassium carbonate solution,100mL / Раствор карбоната калия 15%（w/v）)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-10",
    "title": "Раствор для титрования бикарбонатом натрия carbon dioxide-free water, 0.1004 mol/L (BWB2036-2016 Sodium bi carbonate titration solution,50mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWB2036-2016",
    "price": 313600,
    "priceFormatted": "313 600 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWB2036-2016 Sodium bi carbonate titration solution,50mL / Раствор для титрования бикарбонатом натрия carbon dioxide-free water, 0.1004 mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWB2036-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWB2036-2016 Sodium bi carbonate titration solution,50mL / Раствор для титрования бикарбонатом натрия carbon dioxide-free water, 0.1004 mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1004 mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-11",
    "title": "Раствор титрованного тиоцианата калия 0.1005mol/L (BWZ8060-2016 Potassium thiocyanate titration solution, 500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWZ8060-2016",
    "price": 660800,
    "priceFormatted": "660 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8060-2016 Potassium thiocyanate titration solution, 500mL / Раствор титрованного тиоцианата калия 0.1005mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8060-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8060-2016 Potassium thiocyanate titration solution, 500mL / Раствор титрованного тиоцианата калия 0.1005mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1005mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-12",
    "title": "Раствор уксусной кислоты 3% (BWZ0077-2016 Acetic acid solution, 500mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ0077-2016",
    "price": 610400,
    "priceFormatted": "610 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ0077-2016 Acetic acid solution, 500mL / Раствор уксусной кислоты 3%. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ0077-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ0077-2016 Acetic acid solution, 500mL / Раствор уксусной кислоты 3%)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-13",
    "title": "Ион йода в воде 1000μg/mL (BWZ6627-2016 Iodine ion in water,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ6627-2016",
    "price": 263200,
    "priceFormatted": "263 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ6627-2016 Iodine ion in water,50mL / Ион йода в воде 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6627-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6627-2016 Iodine ion in water,50mL / Ион йода в воде 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-14",
    "title": "Стандартный раствор хромата 1000μg/mL (BWZ7090-2016 Chromate Standard Solution, 100mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ7090-2016",
    "price": 588000,
    "priceFormatted": "588 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ7090-2016 Chromate Standard Solution, 100mL / Стандартный раствор хромата 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7090-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ7090-2016 Chromate Standard Solution, 100mL / Стандартный раствор хромата 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-15",
    "title": "Раствор азотной кислоты 1%（v/v） (BWZ0142-2016 Nitric acid solution,500mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ0142-2016",
    "price": 386400,
    "priceFormatted": "386 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ0142-2016 Nitric acid solution,500mL / Раствор азотной кислоты 1%（v/v）. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ0142-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ0142-2016 Nitric acid solution,500mL / Раствор азотной кислоты 1%（v/v）)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-16",
    "title": "Стандартный раствор для титрования тиосульфата натрия 0.9940mol/L (BWZ8176-2016 Sodium thiosulfate standard titration solution, 500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWZ8176-2016",
    "price": 795200,
    "priceFormatted": "795 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8176-2016 Sodium thiosulfate standard titration solution, 500mL / Стандартный раствор для титрования тиосульфата натрия 0.9940mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8176-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8176-2016 Sodium thiosulfate standard titration solution, 500mL / Стандартный раствор для титрования тиосульфата натрия 0.9940mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.9940mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-17",
    "title": "Стандартный раствор хлорида аммония 1000μg/mL (BWJ4194-2016 Ammonium chloride standard solution,20mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWJ4194-2016",
    "price": 420000,
    "priceFormatted": "420 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWJ4194-2016 Ammonium chloride standard solution,20mL / Стандартный раствор хлорида аммония 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWJ4194-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWJ4194-2016 Ammonium chloride standard solution,20mL / Стандартный раствор хлорида аммония 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-18",
    "title": "Стандартный раствор йодата калия 1000μg/mL (BWZ6742-2016 Potassium iodate standard solution,20mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ6742-2016",
    "price": 229600,
    "priceFormatted": "229 600 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ6742-2016 Potassium iodate standard solution,20mL / Стандартный раствор йодата калия 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6742-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6742-2016 Potassium iodate standard solution,20mL / Стандартный раствор йодата калия 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-19",
    "title": "Раствор для титрования хлорида натрия 0.1007mol/L (BGBW(E)086419 Sodium chloride titration solution, 500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BGBW(E)086419",
    "price": 560000,
    "priceFormatted": "560 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BGBW(E)086419 Sodium chloride titration solution, 500mL / Раствор для титрования хлорида натрия 0.1007mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BGBW(E)086419",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BGBW(E)086419 Sodium chloride titration solution, 500mL / Раствор для титрования хлорида натрия 0.1007mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1007mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-20",
    "title": "Раствор для титрования карбонатом натрия , c(1/2Na2CO3) = 0.1005mol/L (GBW(E)086341 Sodium carbonate titrations solution, 500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "GBW(E)086341",
    "price": 655200,
    "priceFormatted": "655 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086341 Sodium carbonate titrations solution, 500mL / Раствор для титрования карбонатом натрия , c(1/2Na2CO3) = 0.1005mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086341",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086341 Sodium carbonate titrations solution, 500mL / Раствор для титрования карбонатом натрия , c(1/2Na2CO3) = 0.1005mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1005mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-21",
    "title": "Стандартный раствор сульфата железа(II) аммония 20% sulfuric acid and water, 0.2004 mol/L (BWZ8353-2016 Ferrous ammonium sulfate standard solution, 500mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ8353-2016",
    "price": 784000,
    "priceFormatted": "784 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8353-2016 Ferrous ammonium sulfate standard solution, 500mL / Стандартный раствор сульфата железа(II) аммония 20% sulfuric acid and water, 0.2004 mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8353-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8353-2016 Ferrous ammonium sulfate standard solution, 500mL / Стандартный раствор сульфата железа(II) аммония 20% sulfuric acid and water, 0.2004 mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.2004 mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-22",
    "title": "Насыщенный раствор бромида калия 0.809(25℃) (BWZ7490-2016 Potassium bromide saturated solution,500mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ7490-2016",
    "price": 991200,
    "priceFormatted": "991 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ7490-2016 Potassium bromide saturated solution,500mL / Насыщенный раствор бромида калия 0.809(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7490-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ7490-2016 Potassium bromide saturated solution,500mL / Насыщенный раствор бромида калия 0.809(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-23",
    "title": "Раствор для титрования перманганатом калия 0.05015mol/L (BWZ8431-2016 Potassium permanganate titration solution,500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWZ8431-2016",
    "price": 655200,
    "priceFormatted": "655 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8431-2016 Potassium permanganate titration solution,500mL / Раствор для титрования перманганатом калия 0.05015mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8431-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8431-2016 Potassium permanganate titration solution,500mL / Раствор для титрования перманганатом калия 0.05015mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.05015mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-24",
    "title": "Раствор серной кислоты для титрования c(1/2H2SO4)=0.1001mol/L (GBW(E)086342 Sulfuric acid solution for titrations, 50mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "GBW(E)086342",
    "price": 257600,
    "priceFormatted": "257 600 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086342 Sulfuric acid solution for titrations, 50mL / Раствор серной кислоты для титрования c(1/2H2SO4)=0.1001mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086342",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086342 Sulfuric acid solution for titrations, 50mL / Раствор серной кислоты для титрования c(1/2H2SO4)=0.1001mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1001mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-25",
    "title": "Раствор хлорида калия 1.010mol/L (BWZ8034-2016 Potassium Chloride Solution, 500mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ8034-2016",
    "price": 560000,
    "priceFormatted": "560 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8034-2016 Potassium Chloride Solution, 500mL / Раствор хлорида калия 1.010mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8034-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8034-2016 Potassium Chloride Solution, 500mL / Раствор хлорида калия 1.010mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1.010mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-26",
    "title": "BWZ6281-2016 Magnesium sulfate test solution, 100mL/ Раствор сульфата магния для анализа 120g/L",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ6281-2016",
    "price": 291200,
    "priceFormatted": "291 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ6281-2016 Magnesium sulfate test solution, 100mL/ Раствор сульфата магния для анализа 120g/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6281-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6281-2016 Magnesium sulfate test solution, 100mL/ Раствор сульфата магния для анализа 120g/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-27",
    "title": "BWZ8082-2016 Oxalic acid titration solution, 500mL/ Раствор щавелевой кислоты для титрования c(1/2H2C2O4)=0.1010mol/L",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWZ8082-2016",
    "price": 593600,
    "priceFormatted": "593 600 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8082-2016 Oxalic acid titration solution, 500mL/ Раствор щавелевой кислоты для титрования c(1/2H2C2O4)=0.1010mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8082-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8082-2016 Oxalic acid titration solution, 500mL/ Раствор щавелевой кислоты для титрования c(1/2H2C2O4)=0.1010mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1010mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-28",
    "title": "BWZ8004-2016 Ammonium thiocyanate titration solution, 500mL/ Титрованный раствор тиоцианата аммония 0.1006mol/L",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWZ8004-2016",
    "price": 655200,
    "priceFormatted": "655 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8004-2016 Ammonium thiocyanate titration solution, 500mL/ Титрованный раствор тиоцианата аммония 0.1006mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8004-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8004-2016 Ammonium thiocyanate titration solution, 500mL/ Титрованный раствор тиоцианата аммония 0.1006mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1006mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-29",
    "title": "Аммиачно-аммоний хлоридный буферный раствор Ammonia solution, 9.5 (BWZ6243-2016 Ammonia-ammonium chloride buffer solution, 500mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "pH Standart",
    "badgeType": "success",
    "artikul": "BWZ6243-2016",
    "price": 459200,
    "priceFormatted": "459 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ6243-2016 Ammonia-ammonium chloride buffer solution, 500mL / Аммиачно-аммоний хлоридный буферный раствор Ammonia solution, 9.5. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6243-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6243-2016 Ammonia-ammonium chloride buffer solution, 500mL / Аммиачно-аммоний хлоридный буферный раствор Ammonia solution, 9.5)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-30",
    "title": "Раствор йодата калия для титрования c(1/6KIO3)= 0.1004mol/L  c(KIO3)=0.01673mol/L(ChP) (GBW(E)086425 Potassium iodate solution for titrations, 500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "GBW(E)086425",
    "price": 1120000,
    "priceFormatted": "1 120 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086425 Potassium iodate solution for titrations, 500mL / Раствор йодата калия для титрования c(1/6KIO3)= 0.1004mol/L  c(KIO3)=0.01673mol/L(ChP). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086425",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086425 Potassium iodate solution for titrations, 500mL / Раствор йодата калия для титрования c(1/6KIO3)= 0.1004mol/L  c(KIO3)=0.01673mol/L(ChP))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1004mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-31",
    "title": "Раствор тетрабората натрия 0.02000mol/L (BWZ8363-2016 Sodium tetraborate solution, 500mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ8363-2016",
    "price": 560000,
    "priceFormatted": "560 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8363-2016 Sodium tetraborate solution, 500mL / Раствор тетрабората натрия 0.02000mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8363-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8363-2016 Sodium tetraborate solution, 500mL / Раствор тетрабората натрия 0.02000mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.02000mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-32",
    "title": "Раствор для титрования оксалата натрия c(1/2Na2C2O4) = 1.002mol/L c(Na2C2O4)=0.5010mol/L(ChP) (BWR0013-2016 Sodium oxalate titration solution, 100mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWR0013-2016",
    "price": 616000,
    "priceFormatted": "616 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWR0013-2016 Sodium oxalate titration solution, 100mL / Раствор для титрования оксалата натрия c(1/2Na2C2O4) = 1.002mol/L c(Na2C2O4)=0.5010mol/L(ChP). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWR0013-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWR0013-2016 Sodium oxalate titration solution, 100mL / Раствор для титрования оксалата натрия c(1/2Na2C2O4) = 1.002mol/L c(Na2C2O4)=0.5010mol/L(ChP))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1.002mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-33",
    "title": "Раствор хлорида бария 100g/L (BWZ6066-2016 Barium chloride solution,100mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ6066-2016",
    "price": 235200,
    "priceFormatted": "235 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ6066-2016 Barium chloride solution,100mL / Раствор хлорида бария 100g/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6066-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6066-2016 Barium chloride solution,100mL / Раствор хлорида бария 100g/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-34",
    "title": "Раствор для титрования дихроматом калия c(1/6K2Cr2O7)=0.1005mol/L (GBW(E)086346 Potassium dichromate titration solution, 500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "GBW(E)086346",
    "price": 571200,
    "priceFormatted": "571 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086346 Potassium dichromate titration solution, 500mL / Раствор для титрования дихроматом калия c(1/6K2Cr2O7)=0.1005mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086346",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086346 Potassium dichromate titration solution, 500mL / Раствор для титрования дихроматом калия c(1/6K2Cr2O7)=0.1005mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1005mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-35",
    "title": "Ферроцианид калия в воде 10% (BWZ8637-2016 Potassium ferrocyanide in water,1L)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ8637-2016",
    "price": 1204000,
    "priceFormatted": "1 204 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8637-2016 Potassium ferrocyanide in water,1L / Ферроцианид калия в воде 10%. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8637-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8637-2016 Potassium ferrocyanide in water,1L / Ферроцианид калия в воде 10%)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-36",
    "title": "Раствор для титрования соляной кислотой 0.1007mol/L (GBW(E)083798 Hydrochloric acid titration solution,500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "GBW(E)083798",
    "price": 453600,
    "priceFormatted": "453 600 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)083798 Hydrochloric acid titration solution,500mL / Раствор для титрования соляной кислотой 0.1007mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)083798",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)083798 Hydrochloric acid titration solution,500mL / Раствор для титрования соляной кислотой 0.1007mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.1007mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-37",
    "title": "Аналитический объемный раствор хлорида калия 0.01009mol/L (BWR3060-2016 Analytical Volumetric Solution Potassium Chloride, 50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWR3060-2016",
    "price": 296800,
    "priceFormatted": "296 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWR3060-2016 Analytical Volumetric Solution Potassium Chloride, 50mL / Аналитический объемный раствор хлорида калия 0.01009mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWR3060-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWR3060-2016 Analytical Volumetric Solution Potassium Chloride, 50mL / Аналитический объемный раствор хлорида калия 0.01009mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.01009mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-38",
    "title": "Раствор для титрования ЭДТА 0.05001mol/L (BWZ8361-2016 EDTA titration solution,500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "BWZ8361-2016",
    "price": 638400,
    "priceFormatted": "638 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8361-2016 EDTA titration solution,500mL / Раствор для титрования ЭДТА 0.05001mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8361-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8361-2016 EDTA titration solution,500mL / Раствор для титрования ЭДТА 0.05001mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.05001mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-39",
    "title": "Раствор для титрования гидроксидом калия 0.5007mol/L (GBW(E)083808 Potassium hydroxide titration solution, 100mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "GBW(E)083808",
    "price": 296800,
    "priceFormatted": "296 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)083808 Potassium hydroxide titration solution, 100mL / Раствор для титрования гидроксидом калия 0.5007mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)083808",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)083808 Potassium hydroxide titration solution, 100mL / Раствор для титрования гидроксидом калия 0.5007mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "0.5007mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-40",
    "title": "Раствор для титрования гидроксидом натрия 1.005mol/L (GBW(E)083806 Sodium hydroxide titrations solution,500mL)",
    "category": "standart-titrlar",
    "categoryName": "Standart-Titrlar (Fiksanallar)",
    "badge": "Titrlash Eritmasi",
    "badgeType": "primary",
    "artikul": "GBW(E)083806",
    "price": 526400,
    "priceFormatted": "526 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)083806 Sodium hydroxide titrations solution,500mL / Раствор для титрования гидроксидом натрия 1.005mol/L. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)083806",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)083806 Sodium hydroxide titrations solution,500mL / Раствор для титрования гидроксидом натрия 1.005mol/L)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1.005mol/L"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-41",
    "title": "Стандартный раствор никеля 5%HNO3,1000μg/mL (GBW(E)083786 Ni standard solution,100mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "GBW(E)083786",
    "price": 436800,
    "priceFormatted": "436 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)083786 Ni standard solution,100mL / Стандартный раствор никеля 5%HNO3,1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)083786",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)083786 Ni standard solution,100mL / Стандартный раствор никеля 5%HNO3,1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-42",
    "title": "Стандартный раствор хрома 1000μg/mL (BWZ6851-2016 Cr6+ standard solution,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ6851-2016",
    "price": 319200,
    "priceFormatted": "319 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ6851-2016 Cr6+ standard solution,50mL / Стандартный раствор хрома 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6851-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6851-2016 Cr6+ standard solution,50mL / Стандартный раствор хрома 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-43",
    "title": "Стандартный раствор кобальта 5% nitric acid, 1000 µg/mL (GBW(E)083781 Co standard solution, 50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "GBW(E)083781",
    "price": 302400,
    "priceFormatted": "302 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)083781 Co standard solution, 50mL / Стандартный раствор кобальта 5% nitric acid, 1000 µg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)083781",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)083781 Co standard solution, 50mL / Стандартный раствор кобальта 5% nitric acid, 1000 µg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-44",
    "title": "Стандартный раствор магния 1000μg/mL (BWB2255-2016 Mg standard solution,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWB2255-2016",
    "price": 274400,
    "priceFormatted": "274 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWB2255-2016 Mg standard solution,50mL / Стандартный раствор магния 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWB2255-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWB2255-2016 Mg standard solution,50mL / Стандартный раствор магния 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-45",
    "title": "Стандартный раствор мышьяка 0.06% sodium bicarbonate, 100 µg/mL (BWB2507-2016 As3+standard solution,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWB2507-2016",
    "price": 772800,
    "priceFormatted": "772 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWB2507-2016 As3+standard solution,50mL / Стандартный раствор мышьяка 0.06% sodium bicarbonate, 100 µg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWB2507-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWB2507-2016 As3+standard solution,50mL / Стандартный раствор мышьяка 0.06% sodium bicarbonate, 100 µg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-46",
    "title": "Общий азот в воде 500μg/mL (GBW(E)086222 Total nitrogen in water,20mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "GBW(E)086222",
    "price": 240800,
    "priceFormatted": "240 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086222 Total nitrogen in water,20mL / Общий азот в воде 500μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086222",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086222 Total nitrogen in water,20mL / Общий азот в воде 500μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "500μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-47",
    "title": "Общий фосфор в воде 500μg/mL (GBW(E)086225 Total phosphorus in water, 50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "GBW(E)086225",
    "price": 330400,
    "priceFormatted": "330 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086225 Total phosphorus in water, 50mL / Общий фосфор в воде 500μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086225",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086225 Total phosphorus in water, 50mL / Общий фосфор в воде 500μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "500μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-48",
    "title": "Стандартный раствор алюминия 5% nitric acid, 1000 µg/mL (BWB2199-2016 Al standard solution, 50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWB2199-2016",
    "price": 274400,
    "priceFormatted": "274 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWB2199-2016 Al standard solution, 50mL / Стандартный раствор алюминия 5% nitric acid, 1000 µg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWB2199-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWB2199-2016 Al standard solution, 50mL / Стандартный раствор алюминия 5% nitric acid, 1000 µg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-49",
    "title": "Стандартный раствор марганца 5% hydrochloric acid, 1000  µg/mL (BWB2069-2016 Mn standard solution,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWB2069-2016",
    "price": 274400,
    "priceFormatted": "274 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWB2069-2016 Mn standard solution,50mL / Стандартный раствор марганца 5% hydrochloric acid, 1000  µg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWB2069-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWB2069-2016 Mn standard solution,50mL / Стандартный раствор марганца 5% hydrochloric acid, 1000  µg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-50",
    "title": "Стандартный раствор натрия 2% nitric acid, 1000 µg/mL (BWZ7423-2016 Na standard solution,100mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ7423-2016",
    "price": 436800,
    "priceFormatted": "436 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ7423-2016 Na standard solution,100mL / Стандартный раствор натрия 2% nitric acid, 1000 µg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7423-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ7423-2016 Na standard solution,100mL / Стандартный раствор натрия 2% nitric acid, 1000 µg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-51",
    "title": "Сера в воде 1000μg/mL (BWZ7041-2016 Sulfur in water, 50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ7041-2016",
    "price": 319200,
    "priceFormatted": "319 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ7041-2016 Sulfur in water, 50mL / Сера в воде 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7041-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ7041-2016 Sulfur in water, 50mL / Сера в воде 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-52",
    "title": "Стандартный раствор фосфата натрия 1000μg/mL (BWZ7370-2016 Sodium phosphate standard solution,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ7370-2016",
    "price": 319200,
    "priceFormatted": "319 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ7370-2016 Sodium phosphate standard solution,50mL / Стандартный раствор фосфата натрия 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7370-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ7370-2016 Sodium phosphate standard solution,50mL / Стандартный раствор фосфата натрия 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-53",
    "title": "Водный раствор хлора 10000μg/mL (BWZ6859-2016 Cl-in water,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ6859-2016",
    "price": 520800,
    "priceFormatted": "520 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ6859-2016 Cl-in water,50mL / Водный раствор хлора 10000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6859-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6859-2016 Cl-in water,50mL / Водный раствор хлора 10000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "10000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-54",
    "title": "Стандартный раствор ртути  5% nitric acid, 1000 µg/mL (GBW(E)086362 Hg standard solution,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "GBW(E)086362",
    "price": 268800,
    "priceFormatted": "268 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086362 Hg standard solution,50mL / Стандартный раствор ртути  5% nitric acid, 1000 µg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086362",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086362 Hg standard solution,50mL / Стандартный раствор ртути  5% nitric acid, 1000 µg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-55",
    "title": "Фосфат в воде 1000μg/mL (GBW(E)086177 Phosphate in water,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "GBW(E)086177",
    "price": 319200,
    "priceFormatted": "319 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086177 Phosphate in water,50mL / Фосфат в воде 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086177",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086177 Phosphate in water,50mL / Фосфат в воде 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-56",
    "title": "Мутность воды по Фуэрме (BWR3084-2016 Fuerma turbidity in water,50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWR3084-2016",
    "price": 862400,
    "priceFormatted": "862 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWR3084-2016 Fuerma turbidity in water,50mL / Мутность воды по Фуэрме. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWR3084-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWR3084-2016 Fuerma turbidity in water,50mL / Мутность воды по Фуэрме)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-57",
    "title": "Общая жесткость воды 1000 µg/m (GBW(E)086429 Total hardness in water,20mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "GBW(E)086429",
    "price": 235200,
    "priceFormatted": "235 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "GBW(E)086429 Total hardness in water,20mL / Общая жесткость воды 1000 µg/m. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)086429",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)086429 Total hardness in water,20mL / Общая жесткость воды 1000 µg/m)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-58",
    "title": "Стандартный раствор железо  1000 µg/mL (BWB2448-2016 Fe3+standard solution, 50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWB2448-2016",
    "price": 319200,
    "priceFormatted": "319 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWB2448-2016 Fe3+standard solution, 50mL / Стандартный раствор железо  1000 µg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWB2448-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWB2448-2016 Fe3+standard solution, 50mL / Стандартный раствор железо  1000 µg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-59",
    "title": "Стандартный раствор цинка 1000μg/mL (BWB2153-2016 Zn standard solution, 50mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWB2153-2016",
    "price": 207200,
    "priceFormatted": "207 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWB2153-2016 Zn standard solution, 50mL / Стандартный раствор цинка 1000μg/mL. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWB2153-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWB2153-2016 Zn standard solution, 50mL / Стандартный раствор цинка 1000μg/mL)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Konsentratsiya": "1000μg/mL"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-60",
    "title": "Стандартный раствор сульфата железа(II) аммония (BWZ8092-2016 Ammonium iron(II) sulfate standard solution, 500mL)",
    "category": "standart-namunalar",
    "categoryName": "Standart Namunalar (GSO/CRM)",
    "badge": "CRM Weiyel",
    "badgeType": "success",
    "artikul": "BWZ8092-2016",
    "price": 369600,
    "priceFormatted": "369 600 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/standard_samples.jpg",
    "shortDesc": "BWZ8092-2016 Ammonium iron(II) sulfate standard solution, 500mL / Стандартный раствор сульфата железа(II) аммония. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8092-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8092-2016 Ammonium iron(II) sulfate standard solution, 500mL / Стандартный раствор сульфата железа(II) аммония)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-61",
    "title": "Стандартный раствор боракса для определения pH 9.18（25℃） (GBW(E)130936 Borax pH solution standard substance,500mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "pH Standart",
    "badgeType": "success",
    "artikul": "GBW(E)130936",
    "price": 576800,
    "priceFormatted": "576 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "GBW(E)130936 Borax pH solution standard substance,500mL / Стандартный раствор боракса для определения pH 9.18（25℃）. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)130936",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)130936 Borax pH solution standard substance,500mL / Стандартный раствор боракса для определения pH 9.18（25℃）)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-62",
    "title": "Гидрофталат калия (стандарт pH) 4.01(25℃) (BWZ8128-2016A Potassium hydrogen phthalate pH solution standard substance, 250mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "pH Standart",
    "badgeType": "success",
    "artikul": "BWZ8128-2016A",
    "price": 487200,
    "priceFormatted": "487 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ8128-2016A Potassium hydrogen phthalate pH solution standard substance, 250mL / Гидрофталат калия (стандарт pH) 4.01(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8128-2016A",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8128-2016A Potassium hydrogen phthalate pH solution standard substance, 250mL / Гидрофталат калия (стандарт pH) 4.01(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-63",
    "title": "Раствор смешанных фосфатов с заданным pH 7.00 (25℃) (BWZ6621-2016 Mixed phosphate pH solution,50mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "pH Standart",
    "badgeType": "success",
    "artikul": "BWZ6621-2016",
    "price": 235200,
    "priceFormatted": "235 200 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ6621-2016 Mixed phosphate pH solution,50mL / Раствор смешанных фосфатов с заданным pH 7.00 (25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6621-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6621-2016 Mixed phosphate pH solution,50mL / Раствор смешанных фосфатов с заданным pH 7.00 (25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-64",
    "title": "Стандартные растворы для измерения проводимости 84μS/cm(25℃) (BWZ6901-2016 Conductivity solution standards,250mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "EC Standart",
    "badgeType": "warning",
    "artikul": "BWZ6901-2016",
    "price": 744800,
    "priceFormatted": "744 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ6901-2016 Conductivity solution standards,250mL / Стандартные растворы для измерения проводимости 84μS/cm(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6901-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6901-2016 Conductivity solution standards,250mL / Стандартные растворы для измерения проводимости 84μS/cm(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Elektr o'tkazuvchanlik": "84μS/cm @ 25℃"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-65",
    "title": "Стандартный раствор для проверки электропроводности 1413μS/cm(25℃) (BWZ6902-2016 Conductivity standard solution,250mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "EC Standart",
    "badgeType": "warning",
    "artikul": "BWZ6902-2016",
    "price": 616000,
    "priceFormatted": "616 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ6902-2016 Conductivity standard solution,250mL / Стандартный раствор для проверки электропроводности 1413μS/cm(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6902-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6902-2016 Conductivity standard solution,250mL / Стандартный раствор для проверки электропроводности 1413μS/cm(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Elektr o'tkazuvchanlik": "1413μS/cm @ 25℃"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-66",
    "title": "Стандартный раствор для проверки электропроводности 5000μS/cm(25℃) (BWZ7259-2016 Conductivity standard solution, 500mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "EC Standart",
    "badgeType": "warning",
    "artikul": "BWZ7259-2016",
    "price": 890400,
    "priceFormatted": "890 400 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ7259-2016 Conductivity standard solution, 500mL / Стандартный раствор для проверки электропроводности 5000μS/cm(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7259-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ7259-2016 Conductivity standard solution, 500mL / Стандартный раствор для проверки электропроводности 5000μS/cm(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Elektr o'tkazuvchanlik": "5000μS/cm @ 25℃"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-67",
    "title": "Стандартный раствор для проверки электропроводности 12.88mS/cm(25℃) (BWZ6903-2016 Conductivity standard solution,250mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "EC Standart",
    "badgeType": "warning",
    "artikul": "BWZ6903-2016",
    "price": 616000,
    "priceFormatted": "616 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ6903-2016 Conductivity standard solution,250mL / Стандартный раствор для проверки электропроводности 12.88mS/cm(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6903-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6903-2016 Conductivity standard solution,250mL / Стандартный раствор для проверки электропроводности 12.88mS/cm(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Elektr o'tkazuvchanlik": "12.88mS/cm @ 25℃"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-68",
    "title": "Стандартный раствор для проверки электропроводности 50000μS/cm(25℃) (BWZ8322-2016 Conductivity solution standards, 500mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "EC Standart",
    "badgeType": "warning",
    "artikul": "BWZ8322-2016",
    "price": 1232000,
    "priceFormatted": "1 232 000 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ8322-2016 Conductivity solution standards, 500mL / Стандартный раствор для проверки электропроводности 50000μS/cm(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8322-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8322-2016 Conductivity solution standards, 500mL / Стандартный раствор для проверки электропроводности 50000μS/cm(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Elektr o'tkazuvchanlik": "50000μS/cm @ 25℃"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-69",
    "title": "Стандартный раствор для проверки электропроводности 10000μS/cm(25℃) (BWR3057-2016 Conductivity solution standard substance, 50mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "EC Standart",
    "badgeType": "warning",
    "artikul": "BWR3057-2016",
    "price": 324800,
    "priceFormatted": "324 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWR3057-2016 Conductivity solution standard substance, 50mL / Стандартный раствор для проверки электропроводности 10000μS/cm(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWR3057-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWR3057-2016 Conductivity solution standard substance, 50mL / Стандартный раствор для проверки электропроводности 10000μS/cm(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Elektr o'tkazuvchanlik": "10000μS/cm @ 25℃"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-70",
    "title": "Стандартный раствор для проверки электропроводности 1413μS/cm(25℃) (BWR3043-2016 Conductivity solution standard substance, 50mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "EC Standart",
    "badgeType": "warning",
    "artikul": "BWR3043-2016",
    "price": 324800,
    "priceFormatted": "324 800 so'm",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWR3043-2016 Conductivity solution standard substance, 50mL / Стандартный раствор для проверки электропроводности 1413μS/cm(25℃). Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWR3043-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWR3043-2016 Conductivity solution standard substance, 50mL / Стандартный раствор для проверки электропроводности 1413μS/cm(25℃))",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Elektr o'tkazuvchanlik": "1413μS/cm @ 25℃"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-71",
    "title": "Стандартный раствор для измерения электропроводности 2000μS/cm 25 (BWZ8404-2016 Conductivity Standard Solution 500mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "EC Standart",
    "badgeType": "warning",
    "artikul": "BWZ8404-2016",
    "price": 0,
    "priceFormatted": "Buyurtma asosida",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ8404-2016 Conductivity Standard Solution 500mL / Стандартный раствор для измерения электропроводности 2000μS/cm 25. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ8404-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ8404-2016 Conductivity Standard Solution 500mL / Стандартный раствор для измерения электропроводности 2000μS/cm 25)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan",
      "Elektr o'tkazuvchanlik": "2000μS/cm @ 25℃"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-72",
    "title": "Стандартное вещество для смешанного фосфатного раствора с заданным pH (BWZ6837-2016 Mixed phosphate pH solution standard substance 250mL)",
    "category": "bufer-eritmalari",
    "categoryName": "Bufer va Kalibrlash Eritmalari",
    "badge": "pH Standart",
    "badgeType": "success",
    "artikul": "BWZ6837-2016",
    "price": 0,
    "priceFormatted": "Buyurtma asosida",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/buffer_solutions.jpg",
    "shortDesc": "BWZ6837-2016 Mixed phosphate pH solution standard substance 250mL / Стандартное вещество для смешанного фосфатного раствора с заданным pH. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ6837-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ6837-2016 Mixed phosphate pH solution standard substance 250mL / Стандартное вещество для смешанного фосфатного раствора с заданным pH)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-73",
    "title": "Эталонный материал для измерения осмолярной концентрации (раствор хлорида натрия) 5mL*6,300 mOs mol/kg (GBW(E)130989 Osmolar concentration reference material (sodium chloride solution) 5mL*6)",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari & Jihozlar",
    "badge": "Etalon Standart",
    "badgeType": "danger",
    "artikul": "GBW(E)130989",
    "price": 0,
    "priceFormatted": "Buyurtma asosida",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "GBW(E)130989 Osmolar concentration reference material (sodium chloride solution) 5mL*6 / Эталонный материал для измерения осмолярной концентрации (раствор хлорида натрия) 5mL*6,300 mOs mol/kg. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "GBW(E)130989",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (GBW(E)130989 Osmolar concentration reference material (sodium chloride solution) 5mL*6 / Эталонный материал для измерения осмолярной концентрации (раствор хлорида натрия) 5mL*6,300 mOs mol/kg)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-74",
    "title": "Показатель преломления и относительная плотность в глицерине (BWS0097-2016 Refractive index and relative density in glycerin 100mL)",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari & Jihozlar",
    "badge": "Etalon Standart",
    "badgeType": "danger",
    "artikul": "BWS0097-2016",
    "price": 0,
    "priceFormatted": "Buyurtma asosida",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "BWS0097-2016 Refractive index and relative density in glycerin 100mL / Показатель преломления и относительная плотность в глицерине. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWS0097-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWS0097-2016 Refractive index and relative density in glycerin 100mL / Показатель преломления и относительная плотность в глицерине)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  },
  {
    "id": "weiyel-75",
    "title": "Стандартный раствор плотности 0,7781 г/мл при 20℃ (BWZ7486-2016 Density standard solution 0.7781g/ mL@20 ℃  100mL)",
    "category": "olchov-vositalari",
    "categoryName": "O'lchov Vositalari & Jihozlar",
    "badge": "Etalon Standart",
    "badgeType": "danger",
    "artikul": "BWZ7486-2016",
    "price": 0,
    "priceFormatted": "Buyurtma asosida",
    "inStock": true,
    "stockCount": "Omborda / Buyurtma asosida mavjud",
    "image": "assets/images/precision_manometer.jpg",
    "shortDesc": "BWZ7486-2016 Density standard solution 0.7781g/ mL@20 ℃  100mL / Стандартный раствор плотности 0,7781 г/мл при 20℃. Ishlab chiqaruvchi: Weiyel. Yuqori aniqlikdagi xalqaro CRM standart namunasi.",
    "specs": {
      "Standart kodi": "BWZ7486-2016",
      "Ishlab chiqaruvchi": "Weiyel CRM (Xitoy / Xalqaro akkreditatsiya)",
      "Qadoqlash": "флакон (BWZ7486-2016 Density standard solution 0.7781g/ mL@20 ℃  100mL / Стандартный раствор плотности 0,7781 г/мл при 20℃)",
      "Standartga muvofiqligi": "ISO 17034 / ISO/IEC 17025 / CRM",
      "Yaroqlilik muddati": "24-36 oy",
      "Metrologik ta'minot": "Xalqaro sertifikat va tahlil pasporti bilan"
    },
    "applications": [
      "Kimyoviy va fizika-kimyoviy sinov laboratoriyalari",
      "Xromatografik, spektrofotometrik va konduktometrik tahlil",
      "O'lchov vositalarini kalibrlash va qiyoslash"
    ],
    "features": [
      "ISO 17034 akkreditatsiyalangan etalon mahsulot",
      "Xalqaro NIST / OIML me'yorlariga bog'langanlik"
    ]
  }
];

const FILTER_OPTIONS = {
  priceRanges: [
    { label: "Barchasi", min: 0, max: Infinity },
    { label: "300 000 so'mgacha", min: 0, max: 300000 },
    { label: "300 000 - 1 000 000 so'm", min: 300000, max: 1000000 },
    { label: "1 000 000 - 5 000 000 so'm", min: 1000000, max: 5000000 },
    { label: "5 000 000 so'mdan yuqori", min: 5000000, max: Infinity }
  ],
  sortOptions: [
    { id: "popular", label: "Ommabopligi bo'yicha" },
    { id: "price-asc", label: "Narxi: Arzondan qimmatga" },
    { id: "price-desc", label: "Narxi: Qimmatdan arzonga" },
    { id: "name-asc", label: "Nomi bo'yicha (A-Z)" }
  ]
};

// Admin panel orqali kiritilgan o'zgarishlarni localStorage orqali yuklash va boshqarish
function getInitialProducts() {
  try {
    const custom = localStorage.getItem('sm_custom_products');
    if (custom) {
      const parsed = JSON.parse(custom);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Could not load custom products from localStorage:", e);
  }
  return [...DEFAULT_PRODUCTS_DATABASE];
}

let PRODUCTS_DATABASE = getInitialProducts();

function saveProductsDatabase(newList) {
  try {
    PRODUCTS_DATABASE = newList;
    localStorage.setItem('sm_custom_products', JSON.stringify(newList));
    return true;
  } catch (e) {
    console.error("Error saving products:", e);
    return false;
  }
}

function resetProductsDatabase() {
  try {
    localStorage.removeItem('sm_custom_products');
    PRODUCTS_DATABASE = [...DEFAULT_PRODUCTS_DATABASE];
    return true;
  } catch (e) {
    return false;
  }
}

# "STANDART VA METROLOGIYA" MCHJ — Rasmiy Veb-Sayt & B2B Elektron Savdo Platformasi

O'zbekiston Respublikasi bo'ylab kimyo, farmatsevtika, neft-gaz, oziq-ovqat va sanoat sinov laboratoriyalari uchun davlat reestridan o'tgan **Standart Namunalar (GSO/CRM)**, **Weiyel xalqaro CRM standartlari**, **Standart-titrlar (Fiksanallar)**, **Bufer eritmalari** hamda **O'lchov vositalari va laboratoriya asboblari**ning to'liq elektron katalogi, savati va B2B hujjatlar tizimi.

---

## 🌟 Asosiy Imkoniyatlar va Funksiyalar

1. **290+ Mahsulotlar Katalogi**:
   - Rasmiy prays-list bo'yicha to'liq ma'lumotlar bazasi (artikul, narx, zaxira holati, texnik xarakteristikalar, qo'llanilish sohalari).
   - Real-vaqtda jonli qidiruv (mahsulot nomi, artikul, parametrlar bo'yicha).
   - Kategoriya va narx bo'yicha filtrlar, 4 xil saralash usuli.

2. **Interaktiv Xarid Tizimi**:
   - **Savat (Cart)**: Mahsulotlarni qo'shish, miqdorini o'zgartirish, avtomatik narx hisoblagich (`localStorage` asosida ma'lumotlar saqlanadi).
   - **Sevimlilar (Favorites)**: Yoqqan mahsulotlarni yurakcha orqali saqlab qo'yish.
   - **Taqqoslash (Comparison Matrix)**: Bir vaqtning o'zida 4 tagacha mahsulotning texnik xususiyatlarini jadvalda solishtirish.

3. **Rasmiy A4 Tijorat Kelishuvi (Commercial Offer) Generator**:
   - Savatdagi mahsulotlar asosida bir zumda rasmiy A4 tijorat taklifi va spetsifikatsiyasini shakllantiradi.
   - Narxni o'zbek tilida so'z bilan avtomatik yozish (masalan: *"Besh million to'rt yuz ming so'm"*).
   - Yetkazib beruvchi va buyurtmachi rekvizitlari, kafolat shartlari va rasmiy muhr.
   - **PDF Yuklab olish** (`html2pdf.js` orqali) va to'g'ridan-to'g'ri chop etish (Print A4).

4. **B2B Didox & E-Faktura Integratsiya Moduli**:
   - O'zbekiston Respublikasi DSQ (Soliq) va Didox.uz talablariga muvofiq tuzilgan.
   - Buyurtmachi STIR (INN) raqamini kiritish, tekshirish va yuridik maqomini aniqlash.
   - 12% QQS (Nalog na dobavlennuyu stoimost) va MXIK (IKPU) kodlari bilan hisob-kitob.
   - Didox elektron shartnoma va faktura paketini `.JSON` formatida yuklab olish.
   - Didox API orqali yuborish va Didox shaxsiy kabinetiga to'g'ridan-to'g'ri o'tish imkoniyati.

5. **Buyurtmalarni Telegram Orqali Yuborish**:
   - Buyurtmani rasmiylashtirganda barcha ma'lumotlarni shakllantirib, menejer Telegramiga 1 bosishda jo'natish.

6. **Admin Panel & Ombor Tahlili (admin.html)**:
   - **Parol bilan himoyalangan boshqaruv tizimi** (Standart parol: `admin2026`).
   - **Mahsulotlar CRUD**: Istalgan mahsulot narxi, nomi, tavsifini tahrirlash, yangi qo'shish va o'chirish.
   - **Rasm yangilash**: Kompyuterdan rasm yuklash (File Upload) yoki URL kiritish orqali to'g'ridan-to'g'ri yangilash va jonli ko'rish.
   - **Ombor tahlili**: Jami zaxira summasi (so'm), kam qolgan yoki tugagan tovarlar monitoringi, kategoriyalar bo'yicha taqsimot.
   - **Savdo analitikasi**: Didox va sayt orqali tushgan buyurtmalar tarixi, umumiy aylanma va oylik tushum diagrammasi (SVG).
   - **Sinxronizatsiya**: Admin panelda qilingan har qanday o'zgarish `localStorage` orqali asosiy saytda darhol aks etadi.

7. **Zamonaviy Dizayn va Moslashuvchanlik (Responsive UI)**:
   - Mobil, planshet va kompyuter ekranlariga to'liq moslashgan (Mobile First).
   - Kunduzgi va tungi (Light / Dark mode) rejimlarni qo'llab-quvvatlaydi.
   - Hech qanday og'ir kutubxona va ortiqcha dependency'larsiz toza, tezkor kod.

---

## 🛠 Texnologiyalar Steki

- **HTML5**: Semantik, qidiruv tizimlari (SEO) uchun optimallashtirilgan struktura.
- **CSS3 / Vanilla CSS**: CSS Custom Properties (Variables), Flexbox, CSS Grid, zamonaviy animatsiyalar.
- **JavaScript (ES6+)**: Modulli tuzilma, `StoreState` reaktiv boshqaruvi, `AdminManager`, STIR tekshiruvi.
- **Bootstrap 5.3.3**: Layout griddi va modal oynalar.
- **Bootstrap Icons**: Vektorli piktogrammalar to'plami.
- **html2pdf.js**: Brauzerning o'zida A4 PDF hujjatlarni generatsiya qilish.

---

## 📁 Loyiha Strukturasi

```plaintext
├── index.html                  # Asosiy sayt (Katalog, Qidiruv, Modallar)
├── admin.html                  # Admin Dashboard (Mahsulotlar CRUD, Ombor va Savdo analitikasi)
├── css/
│   ├── main.css                # Asosiy dizayn qoidalari, ranglar, shriftlar
│   ├── components.css          # Kartochkalar, savat, A4 tijorat hujjati, Didox stili
│   ├── responsive.css          # Mobil va planshet ekran moslashuvlari
│   └── admin.css               # Admin panel uslublari va diagrammalar
├── js/
│   ├── products-data.js        # 290+ standart namunalar va uskunalar ma'lumotlar bazasi
│   ├── cart.js                 # Savat, Sevimlilar, Taqqoslash (Store boshqaruvi)
│   ├── app.js                  # Asosiy ilova mantiqi, filtrlash, qidiruv, PDF/Telegram
│   ├── b2b-efaktura.js         # B2B elektron shartnoma, Didox & E-Faktura moduli
│   ├── admin.js                # Admin panel mantiqi, CRUD, rasm yuklash, ombor va savdo tahlili
├── assets/
│   ├── icons/                  # SVG va veb-belgilar
│   └── images/                 # Mahsulotlar va logotip rasmlari
├── .gitattributes              # Git fayl qatorlari konfiguratsiyasi
├── .gitignore                  # Keraksiz fayllarni gitdan chiqarish
└── README.md                   # Loyiha hujjatlari
```

---

## 🚀 Loyihani Ishga Tushirish

Loyiha sof HTML, CSS va JavaScript asosida yaratilgani sababli qo'shimcha `npm install` yoki o'rnatish talab etilmaydi.

### 1-usul: To'g'ridan-to'g'ri brauzerda ochish
- `index.html` faylini ikki marta bosib istalgan zamonaviy brauzerda (Chrome, Edge, Firefox, Safari) oching.

### 2-usul: VS Code Live Server orqali
- VS Code da loyihani oching va `Go Live` tugmasini bosing (yoki `Alt + L, Alt + O`).

### 3-usul: Python lokal serveri orqali
```bash
python -m http.server 8000
```
So'ng brauzerda `http://localhost:8000` manziliga kiring.

---

## 🌐 GitHub-ga Yuklash Qo'llanmasi

Agar ushbu loyihani yangi GitHub repozitoriyangizga yuklamoqchi bo'lsangiz, terminalda quyidagi buyruqlarni bajaring:

```bash
# 1. Repozitoriyani ishga tushirish (agar hali qilinmagan bo'lsa)
git init -b main

# 2. Fayllarni saqlash
git add .
git commit -m "feat: STANDART VA METROLOGIYA rasmiy veb-sayt va B2B savdo platformasi"

# 3. Masofaviy GitHub repozitoriyangizni ulash (o'zingizning havolangizni qo'ying)
git remote add origin https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git

# 4. GitHub ga yuklash
git push -u origin main
```

---

## 🏢 Bog'lanish va Rekvizitlar

- **Korxona**: "STANDART VA METROLOGIYA" MCHJ
- **Manzil**: Toshkent sh., Sergeli tumani, Uzumzor 16-tor ko'cha 18-uy
- **STIR (INN)**: 305 918 247
- **Telefonlar**: +998 (90) 939-71-83 | +998 (93) 870-78-77 | +998 (55) 503-47-15
- **Telegram**: [@standartgso_uz](https://t.me/standartgso_uz)
- **Elektron pochta**: standartmetrolog@bk.ru
- **Rasmiy veb-sayt**: [gsouz.uz](http://gsouz.uz)

# Panduan Proyek

## 1. Penamaan Branch Git

Gunakan format `type/deskripsi-singkat` dengan kebab-case.

| Type | Digunakan untuk | Contoh |
|---|---|---|
| `feat/` | Fitur baru | `feat/landing-page` |
| `fix/` | Perbaikan bug | `fix/navbar-overlap` |
| `chore/` | Maintenance, dependency, config | `chore/update-eslint` |
| `refactor/` | Perubahan kode tanpa mengubah behavior | `refactor/auth-hooks` |
| `style/` | Perubahan tampilan/formatting saja | `style/button-spacing` |
| `docs/` | Dokumentasi | `docs/api-readme` |
| `test/` | Menambah/memperbaiki test | `test/checkout-flow` |
| `hotfix/` | Perbaikan darurat di production | `hotfix/payment-crash` |
| `release/` | Persiapan rilis | `release/v1.2.0` |

**Aturan:**
- Huruf kecil semua, gunakan tanda hubung (`-`), bukan underscore atau spasi.
- Singkat tapi jelas (2–4 kata).
- Jika terkait ticket, sertakan ID-nya: `feat/PROJ-123-landing-page`.
- Satu branch = satu tujuan. Jangan campur perubahan yang tidak berhubungan.

---

## 2. Struktur Proyek Next.js (App Router)

```
app/
├── dashboard/
│   ├── page.tsx
│   └── report-detail/[reportId]/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── report-management/
│   ├── page.tsx
│   └── [reportNumber]/
│       └── page.tsx
├── page.tsx                     # landing page (/)
│
├── api/                         # SEMUA backend route ada di sini, mengikuti nama fitur
│   ├── dashboard/
│   │   ├── statistic/route.ts
│   │   └── summary-category/route.ts
│   ├── reports/
│   │   ├── route.ts
│   │   └── [reportNumber]/route.ts
│   └── contact/route.ts
│
├── layout.tsx
├── globals.css
└── not-found.tsx
```

### Aturan umum
- **`app/api/`** — semua backend route ada di satu tree ini, mengikuti nama fitur terkait (`api/reports`, `api/contact`, `api/dashboard`, dst). `route.ts` menangani `GET`/`POST`/dll.
- **`[param]/`** — dynamic route segment, contoh: `[reportNumber]`, `[reportId]`, `[roomCode]`.
- Kalau butuh mengelompokkan sebagian halaman (misalnya punya `layout.tsx` yang beda dari halaman lain), gunakan **route group** `(nama-group)/` — folder ini tidak memengaruhi URL.
- `page.tsx` harus tetap **tipis**: hanya urusan routing/data-fetching. UI sebenarnya dibuat oleh page component milik halaman itu sendiri (lihat §3 di bawah).

---

## 3. Setiap Halaman Punya Page Component Sendiri

Daripada menulis seluruh UI langsung di dalam `page.tsx`, setiap halaman punya komponen `*-content.tsx` khusus yang menampung UI sebenarnya, dan `page.tsx` cukup me-render komponen tersebut.

```
app/page.tsx                               →  merender <LandingContent />
app/dashboard/page.tsx                     →  merender <DashboardContent />
app/profile/page.tsx                       →  merender <ProfileContent />
app/reporting/[roomCode]/page.tsx          →  merender <ReportingContent />
```

File `*-content.tsx` beserta semua yang dibutuhkannya diletakkan bersama di `components/customs/<nama-halaman>/`:

```
components/customs/
├── dashboard/
│   ├── dashboard-content.tsx        # page component-nya
│   ├── cards/
│   │   └── report-card.tsx
│   ├── modals/
│   │   └── cancel-report-modal.tsx
│   ├── tabs/
│   │   └── report-filter-tab.tsx
│   └── widgets/
│       ├── activity-widget.tsx
│       ├── stat-widget.tsx
│       └── help-widget.tsx
│
├── landing/
│   ├── landing-content.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   └── cta-section.tsx
│   ├── cards/
│   │   ├── feature-card.tsx
│   │   └── stat-card.tsx
│   └── banners/
│       └── cta-banner.tsx
│
├── profile/
│   ├── profile-content.tsx
│   ├── cards/
│   │   ├── profile-header-card.tsx
│   │   └── account-info-card.tsx
│   ├── forms/
│   │   └── security-form.tsx
│   └── modals/
│       └── image-upload-modal.tsx
│
└── contact/
    ├── cards/
    │   └── card-information.tsx
    ├── forms/
    │   └── custom-card-contact.tsx
    └── inputs/
        └── custom-input-textarea.tsx
```

### Aturan umum
- **Nama folder = nama halaman** (`dashboard`, `landing`, `profile`, `contact`, `reporting`, `scan-to-report`, dst).
- **`<halaman>-content.tsx`** adalah page component sebenarnya — inilah yang di-import dan dirender oleh `page.tsx`. Komponen ini yang bertanggung jawab atas layout/komposisi halaman tersebut.
- Pecah content component menjadi subfolder berdasarkan **peran/fungsinya**, jangan asal-asalan:
  - `cards/` — blok UI berbentuk card
  - `sections/` — bagian besar halaman (hero, features, CTA)
  - `forms/` — form khusus halaman tersebut
  - `modals/` — dialog/modal yang hanya dipakai di halaman itu
  - `widgets/` — blok UI+logic kecil yang berdiri sendiri
  - `tabs/`, `inputs/`, `banners/`, `sidebar/`, `header/` — sesuai kebutuhan
- Jika sebuah halaman punya `index.ts`, gunakan untuk re-export komponen publik halaman tersebut (seperti gaya `components/customs/landing/cards/index.ts`) supaya import di tempat lain tetap rapi.
- **Cara mudah menentukan:** kalau sebuah komponen hanya pernah dirender di dalam tree `*-content.tsx` satu halaman → simpan di `customs/<halaman>/`. Kalau dipakai di 2+ halaman → naikkan ke `components/layout/` (navbar, footer) atau `components/ui/` (primitive generik).

---

## 4. Struktur Folder `components/`

Folder `components/` dibagi menjadi 4 kategori utama: `customs/`, `layout/`, `providers/`, dan `ui/`.

```
components/
├── customs/          # komponen khusus per halaman (lihat §3)
│   ├── dashboard/
│   ├── landing/
│   ├── profile/
│   └── contact/
│
├── layout/            # komponen "chrome" yang dipakai berulang di banyak halaman
│   ├── main-navbar.tsx
│   ├── main-footer.tsx
│   ├── mobile-fab.tsx
│   └── user-nav.tsx
│
├── providers/          # React context providers / wrapper yang membungkus app
│   ├── smooth-scroll-provider.tsx
│   └── store-initializer.tsx
│
└── ui/                 # primitive generik, tanpa business logic
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── dialog.tsx
    ├── dropdown-menu.tsx
    ├── select.tsx
    ├── table.tsx
    ├── tooltip.tsx
    └── skeleton.tsx
```

### `components/customs/`
Komponen yang hanya dipakai oleh satu halaman tertentu. Dikelompokkan per nama halaman (`dashboard/`, `landing/`, dst), dengan `<halaman>-content.tsx` sebagai page component-nya. Detail lengkap ada di §3.

### `components/layout/`
Komponen struktural yang muncul berulang di banyak/semua halaman — navbar, footer, sidebar, FAB, notification bell, dsb. Kalau sebuah komponen dari `customs/<halaman>/` ternyata mulai dipakai di 2+ halaman, ini tujuan naik levelnya.

### `components/providers/`
Komponen yang tugasnya membungkus (wrap) bagian aplikasi dengan context/state, bukan menampilkan UI. Biasanya dipasang di `layout.tsx` root, contoh: provider untuk smooth scroll, inisialisasi store/state global, theme provider, query client provider, dsb. Nama file diakhiri `-provider.tsx`.

### `components/ui/`
Primitive generik yang tidak tahu apa-apa soal data aplikasi — hanya menerima `props` dan merender. Ini biasanya berasal dari library komponen (misalnya shadcn/ui) dan dipakai di mana saja, baik di `layout/` maupun `customs/`.

### Ringkasan lokasi tiap komponen

| Layer | Lokasi | Contoh |
|---|---|---|
| Primitive generik | `components/ui/` | `button.tsx`, `card.tsx` |
| Layout yang dipakai berulang | `components/layout/` | `main-navbar.tsx`, `main-footer.tsx` |
| Context/provider pembungkus app | `components/providers/` | `smooth-scroll-provider.tsx`, `store-initializer.tsx` |
| Komponen khusus halaman | `components/customs/<halaman>/` | `dashboard-content.tsx`, `landing/sections/hero-section.tsx` |
| Backend route | `app/api/<fitur>/route.ts` | `app/api/reports/route.ts` |

**Cara mudah menentukan:**
- Komponen tidak tahu apa-apa soal data aplikasi → `ui/`
- Komponen membungkus app dengan context/state, tanpa render UI visual → `providers/`
- Komponen berupa "chrome" bersama di semua/banyak halaman (nav, sidebar, footer) → `layout/`
- Komponen hanya milik satu halaman → `customs/<halaman>/`

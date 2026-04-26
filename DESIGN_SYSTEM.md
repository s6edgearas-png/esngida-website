# Tasarım Sistemi — ESN Gıda

## Genel Hava
**Modern ve minimal** tasarım. Doğal, organik hissi veren "Doğal Zeytin" renk paleti. Gıda sektörüne uygun sıcak ama kurumsal görünüm. İhracat odaklı firma olduğu için uluslararası standartlarda profesyonel görünüm şart.

---

## Renk Paleti — "Doğal Zeytin"

### Ana Renkler
```css
--color-primary: #2D5016;       /* Koyu zeytin yeşili - ana marka rengi */
--color-secondary: #8B7355;     /* Toprak kahve - sıcaklık, doğallık */
--color-accent: #C4A35A;        /* Altın sarısı - premium his, CTA'lar */
```

### Nötr Renkler
```css
--color-bg-light: #F5F0E8;     /* Krem/bej arka plan */
--color-bg-white: #FDFCFA;     /* Sıcak beyaz */
--color-text-dark: #1A1A1A;    /* Ana metin */
--color-text-mid: #5A5A5A;     /* İkincil metin */
--color-text-light: #8A8A7A;   /* Açıklama metinleri */
--color-border: #E8DCC8;       /* Kenarlık, ayırıcılar */
```

### Fonksiyonel Renkler
```css
--color-success: #3D7A1C;      /* Başarı, onay */
--color-warning: #B8860B;      /* Uyarı */
--color-error: #8B1A1A;        /* Hata */
--color-info: #2D5016;         /* Bilgilendirme */
```

---

## Tipografi

### Font Önerisi
- **Başlıklar:** Playfair Display (serif - premium, geleneksel his) veya Cormorant Garamond
- **Gövde Metni:** Inter veya Plus Jakarta Sans (sans-serif - modern, okunabilir)
- **Alternatif:** Montserrat (başlık) + Open Sans (gövde)

### Font Boyutları
```css
--font-hero: 3.5rem;          /* 56px - Hero başlık */
--font-h1: 2.5rem;            /* 40px */
--font-h2: 2rem;              /* 32px */
--font-h3: 1.5rem;            /* 24px */
--font-h4: 1.25rem;           /* 20px */
--font-body: 1rem;            /* 16px */
--font-small: 0.875rem;       /* 14px */
--font-caption: 0.75rem;      /* 12px */
```

---

## Bileşen Stilleri

### Butonlar
```css
/* Primary CTA */
.btn-primary {
  background: var(--color-accent);  /* Altın sarısı */
  color: #1A1A1A;
  border-radius: 4px;
  padding: 14px 32px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Secondary */
.btn-secondary {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

/* Ghost / Outline */
.btn-ghost {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-dark);
}
```

### Kartlar
```css
.card {
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
```

### Sertifika Rozet
```css
.cert-badge {
  background: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## Spacing Sistemi
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
--space-section: 120px;  /* Bölümler arası */
```

---

## Responsive Breakpoints
```css
--bp-mobile: 480px;
--bp-tablet: 768px;
--bp-desktop: 1024px;
--bp-wide: 1280px;
--bp-max: 1440px;
```

---

## Özel Bileşenler

### WhatsApp Floating Button
- Sağ alt köşe, sabit pozisyon
- Yeşil (#25D366) WhatsApp ikonu
- Hover'da hafif büyüme efekti
- Tüm sayfalarda görünür

### İhracat Haritası
- Dünya haritası SVG
- İhracat yapılan ülkeler vurgulu (primary renk)
- Hover'da ülke adı tooltip
- Responsive

### PDF Katalog Butonu
- Download ikonu + "Katalog İndir" metni
- TR ve EN versiyonları

### Dil Değiştirici
- Header'da bayrak ikonları (🇹🇷 🇬🇧 🇸🇦 🇩🇪)
- Dropdown veya inline toggle
- Arapça seçildiğinde RTL layout

---

## Animasyonlar
- Minimal ve performanslı
- Scroll-triggered fade-in (subtle)
- Sayı sayaçları (rakamlar bölümü)
- Hover efektleri (kartlar, butonlar)
- Sayfa geçişleri yok (SPA değil, MPA)

---

## SEO Notları
- Her sayfada benzersiz title ve meta description (4 dilde)
- Schema.org markup: Organization, Product, LocalBusiness
- Open Graph ve Twitter Card meta etiketleri
- Hreflang etiketleri (tr, en, ar, de)
- XML Sitemap (çok dilli)
- Alt text tüm görsellerde
- Lazy loading görseller
- Core Web Vitals optimizasyonu

# ESN Gıda &amp; Konserve — Kurumsal Web Sitesi

Sivas merkezli salamura asma yaprağı üreticisi ESN Gıda &amp; Konserve için
kurumsal, ihracat odaklı, dört dilli web sitesi.

**Domain:** esngida.com.tr

## Özellikler

- 4 dil desteği: Türkçe (varsayılan), İngilizce, Almanca, Arapça (RTL)
- 36 sayfa toplamda (9 sayfa × 4 dil)
- Sade HTML / CSS / JavaScript — build adımı yok, cPanel uyumlu
- Editorial tipografi: Playfair Display + Inter (AR için Amiri + IBM Plex Sans Arabic)
- Doğal Zeytin renk paleti (yeşil #1F3A0E, altın #B8924A)
- Mobile-first responsive tasarım
- SVG illüstrasyonlar (asma yaprağı motifleri, ürün görselleri, dünya haritası)
- WhatsApp floating buton, scroll-triggered animasyonlar, sayı sayaçları
- SEO: hreflang, Open Graph, Schema.org Organization markup, sitemap.xml

## Site Yapısı

```
/                       → TR (varsayılan)
/en/                    → İngilizce
/de/                    → Almanca
/ar/                    → Arapça (RTL)

/assets/
  /css/style.css        → tüm sitenin tek CSS dosyası
  /js/main.js           → scroll reveal, sayaçlar, mobile menu
  /images/              → logolar (ESN, Misbağ)
  /docs/                → PDF kataloglar (gelecek)
```

## Sayfalar (her dilde)

1. Ana Sayfa — hero, marka, ürün vitrin, ihracat haritası
2. Hakkımızda — kuruluş, misyon-vizyon, kapasite, timeline
3. Ürünler — PET, vakum, cam ambalaj detayları
4. Fason Üretim — private label hizmeti, 4 adımlı süreç
5. İhracat — pazar haritası, lojistik, hedef pazarlar
6. Fabrika — drone galeri yer tutucuları, hijyen disiplini
7. Sertifikalar — 7 sertifika kartı detaylı
8. İletişim — 5 kanal, form, Google Maps
9. Bayi Başvuru — 6 avantaj kartı, başvuru formu

## Lokal Geliştirme

```bash
# Python varsa basit sunucu
cd C:\ESNSİTE
python -m http.server 5500

# Tarayıcıda aç
http://127.0.0.1:5500/
```

## Yapılacaklar

- [ ] Drone fabrika çekimi (video + foto) entegrasyonu
- [ ] Form backend bağlantısı (Netlify Forms veya Formspree)
- [ ] PDF kataloglar (TR / EN)
- [ ] esngida.com.tr cPanel'e FTP deploy
- [ ] SSL sertifikası kontrolü

## Lisans

Bu repository'deki kaynak kod ESN Gıda &amp; Konserve firmasına aittir.
İçerik ve görsel varlıklar telif hakkı korumasındadır.

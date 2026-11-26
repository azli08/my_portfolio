# Aslı Alparslan — Portfolyo

Mobil uyumlu, Türkçe ve İngilizce kullanılabilen portfolyo sitesi. HTML, CSS ve JavaScript ile çalışır; ek kurulum veya paket yükleme gerektirmez. Dil seçimi tarayıcıda hatırlanır.

## Önizleme

`index.html` dosyasını modern bir tarayıcıda açın. Google Fonts yazı tipleri internet bağlantısı varsa yüklenir; site internet olmadan da çalışır.

## İçeriği güncelleme

### Metinleri düzenleme

1. `index.html` dosyasını açın ve değiştirmek istediğiniz metni bulun.
2. `data-tr` Türkçe metni, `data-en` İngilizce karşılığını tutar. İki dili de birlikte güncelleyin.
3. Sayfada görünür olan metni de güncel tutun; bu metin JavaScript kapalıyken kullanılan varsayılan Türkçe içeriktir.

Örnek:

```html
<h2 data-tr="Hakkımda" data-en="About">Hakkımda</h2>
```

### Projeleri düzenleme

Her proje, `index.html` içindeki bir `<article class="project-card">` bloğudur. Proje adını, açıklamasını ve teknoloji etiketlerini bu blokta güncelleyebilirsiniz. Yeni proje eklemek için bir proje bloğunu çoğaltıp bilgilerini değiştirin. Projelerin depo veya demo bağlantılarını CV'den doğrulayamadığım için eklemedim; hazır olduğunda ilgili karta bağlantı koyabilirsiniz.

### Tasarım ve davranışı düzenleme

- `styles.css` renkleri, yazı tiplerini, boşlukları, kartları ve mobil yerleşimi kontrol eder.
- `script.js` dil düğmesini, seçilen dili hatırlamayı ve kaydırma animasyonlarını yönetir.
- CV bağlantısı `AsliAlparslanCV_TR.pdf` dosyasını açar. CV'yi yenilerseniz dosya adını aynı tutun veya bağlantıyı HTML'de güncelleyin.

## Kendi GitHub hesabınızdan yayınlama

1. Kendi GitHub hesabınızda yeni bir depo oluşturun. GitHub Free ile GitHub Pages kullanmak için herkese açık depo en kolay seçenektir.
2. Bu klasörü indirin ve ZIP dosyasından çıkarın. Depoda **Add file → Upload files** seçeneğini açıp `index.html`, `styles.css`, `script.js`, `AsliAlparslanCV_TR.pdf` ve eklediğiniz görselleri yükleyin. `index.html` depo kök klasöründe olmalı.
3. Yüklemeyi kaydedin.
4. Depoda **Settings → Pages** bölümünü açın. **Deploy from a branch** seçeneğini, `main` dalını ve `/(root)` klasörünü seçip kaydedin.
5. GitHub Pages yayınlayınca site adresi Pages ayarlarında görünür.

Bu projeyi başka birinin GitHub hesabına yüklemeniz gerekmez. Terminalden Git kullanmak isterseniz, kendi hesabınızda bir depo oluşturun ve çıkarılmış proje klasöründe, URL'yi kendinize göre değiştirerek şu komutları çalıştırın:

```sh
git init
git add .
git commit -m "Portfolyomu ekle"
git branch -M main
git remote add origin https://github.com/KULLANICI-ADINIZ/DEPO-ADINIZ.git
git push -u origin main
```

## Dosyalar

- `index.html` — sayfa içeriği
- `styles.css` — renkler, sayfa düzeni ve mobil görünüm
- `script.js` — dil seçimi, kaydırma animasyonları ve güncel yıl
- `AsliAlparslanCV_TR.pdf` — portfolyodan açılan Türkçe özgeçmiş

Kaydırma efektlerinde bölümler aşağıdan veya yandan görünür, proje çizimleri farklı hızlarda hareket eder ve üstteki halkalar sayfayı kaydırdıkça döner. Sistem ayarlarında hareket azaltma seçiliyse animasyonlar kapatılır.

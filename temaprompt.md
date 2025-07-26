Harika! Yüklediğiniz üç görseli ve genel tema beklentilerinizi anladım. Bu görsellerin yansıttığı modern, sofistike ve görsel ağırlıklı mimarlık estetiğini Claude için hazırlayacağım detaylı prompt'a entegre edeceğim. Her bir sayfanın ve elementin rengi, arka planı ve genel tasarımı üzerinde durarak, önceki prompt'ları da genişleteceğim.

Claude için Kapsamlı Mimarlık Web Sitesi Tasarım Promptu

Proje Adı: Profesyonel Mimarlık Firması Web Sitesi

Hedef Kitle: Yüksek kaliteli mimari projeler arayan bireysel ve kurumsal müşteriler, potansiyel iş ortakları, sektördeki profesyoneller.

Site Amacı: Şirketin modern mimari anlayışını, portföyünü ve uzmanlığını etkileyici görsellerle sergilemek, güçlü bir marka imajı oluşturmak ve yeni projeler için iletişim kanalları açmak.

Genel Tasarım Yaklaşımı:
Yüklenen görsel örnekler (304e7234062e90fc9155d04f679f27b7.jpg, 51c1c1441e88cf1ae7b44117172c2fec.jpg, 8e1a2034df8a4044247ff541a31a0ada.jpg) ve daha önce verilen CSS renk değişkenleri temel alınarak, web sitesi estetiği şu şekilde özetlenebilir:

Lüks ve Sofistike Minimalizm: Temiz çizgiler, geniş boşluklar ve rafine detaylarla birleşen modern bir estetik. Görsellerin kendi başına konuşmasına izin veren, gereksiz karmaşadan arınmış bir yapı.

Görsel Odak: Metinlerden çok, yüksek kaliteli mimari görsellerin (fotoğraflar, 3D render'lar, 2D planlar, 360 derecelik görüntüler) ön planda olduğu bir tasarım.

Koyu ve Açık Mod Harmenisi: Sitenin, özellikle mimari görsellerin farklı atmosferlerini yansıtmak üzere, koyu ve açık renk paletleri arasında kusursuz geçişler sunması. Koyu mod, özellikle akşam çekimleri veya dramatik render'lar için ideal bir fon sağlarken, açık mod ferah ve aydınlık projeler için uygun olacaktır.

Profesyonel Tipografi: Seçilen fontlar (örneğin "Oxanium" ve "Merriweather" referanslı) modern, okunabilir ve marka kimliğini destekler nitelikte olmalı. Başlıklar çarpıcı, gövde metinleri ise kolay okunabilir olmalı.

Akıcı Kullanıcı Deneyimi: Zarif animasyonlar, pürüzsüz geçişler ve sezgisel bir navigasyon ile kullanıcıların site içinde rahatça gezinmesi sağlanmalı.

Site Yapısı (Ana Sayfalar):

Ana Sayfa (Homepage)

Projelerimiz (Our Projects)

Planlar (Plans)

Galeri (Gallery)

Canlı Projeler (Live Projects)

(Opsiyonel) Hakkımızda (About Us) - Projelerimiz sayfasının bir alt bölümü veya ayrı bir sayfa olabilir.

(Opsiyonel) İletişim (Contact)

Sayfa Detayları ve Tasarım Direktifleri (Arka Plan ve Renk Vurgularıyla):

Genel Renk Paleti Uygulaması (Verilen CSS Değişkenleri Temelli):

Ana Arka Plan (--background):

Açık Mod: oklch(0.9885 0.0057 84.5659) (Çok Açık Gri/Neredeyse Beyaz) - Temiz, ferah, görselleri öne çıkaran bir zemin. Sayfaların genel, baskın arka planı.

Koyu Mod: oklch(0.2161 0.0061 56.0434) (Çok Koyu Gri/Neredeyse Siyah) - Sofistike, dramatik, mimari görsellerin derinliğini artıran bir zemin. Sayfaların genel, baskın arka planı.

Metin (--foreground):

Açık Mod: oklch(0.3660 0.0251 49.6085) (Koyu Gri) - Ana metinler, başlıklar için yüksek kontrastlı ve okunabilir.

Koyu Mod: oklch(0.9699 0.0013 106.4238) (Çok Açık Gri/Neredeyse Beyaz) - Koyu arka plan üzerinde metinlerin netliğini sağlar.

Ana Vurgu (--primary):

Açık Mod: oklch(0.5553 0.1455 48.9975) (Mor Tonlu Mavi) - CTA düğmeleri, aktif menü öğeleri, önemli ikonlar ve vurgulu bağlantılar için dinamik ve profesyonel bir renk.

Koyu Mod: oklch(0.7049 0.1867 47.6044) (Daha Parlak Mor Tonlu Mavi) - Koyu modda --primary renginin daha belirgin ve canlı bir versiyonu.

Yan Menü / Kart Arka Planı (--card, --muted, --sidebar):

Ana arka plandan hafifçe farklı, içeriği gruplandıran ve derinlik katan tonlar.

Açık Mod: Hafif gri/bej (oklch(0.9686 0.0091 78.2818) veya oklch(0.9363 0.0218 83.2637))

Koyu Mod: Koyu gri tonları (oklch(0.2685 0.0063 34.2976))

1. Ana Sayfa (Homepage)

Genel Arka Plan: Mod seçimine göre --background.

Üst Navigasyon (Header):

Şeffaf veya hafif yarı saydam bir arka plan (görsel örneklerdeki gibi). --background renginin çok hafif opaklıkta kullanılması veya koyu modda --background üzerine hafif bir blur efekti. Logonun ve menü öğelerinin --foreground veya primary-foreground renginde olması.

Logo: Şirket logosu, minimal ve şık, renk paletiyle uyumlu.

Menü: "Anasayfa", "Projelerimiz", "Planlar", "Galeri", "Canlı Projeler", "İletişim" gibi bağlantılar. Aktif sayfa --primary rengiyle vurgulanacak.

Hero Bölümü:

Arka Plan: Tamamen yüklenecek 360 derecelik etkileşimli görsel. Bu görselin kendisi baskın arka planı oluşturacak.

Metin & CTA'lar: Görselin üzerine yerleştirilecek başlık, alt başlık ve CTA düğmeleri, görselin koyu veya açık olmasına göre oklch(1.0000 0 0) (tam beyaz) veya oklch(0.3660 0.0251 49.6085) (koyu gri) --primary-foreground rengiyle yüksek kontrast sağlayacak şekilde olmalı. Örneğin, koyu bir görsel üzerine beyaz metinler.

CTA Düğmeleri: --primary renginde dolu düğmeler (background: var(--primary); color: var(--primary-foreground);). Hover'da hafif bir renk değişimi veya gölge efekti.

"Projelerimiz Hakkında" Önizleme Bölümü:

Arka Plan: Ana sayfanın --background rengi.

Metinler: --foreground renginde başlık ve kısa açıklama.

Görsel: Öne çıkan bir projenin yüksek kaliteli görseli, kenarlarda uygun boşluklarla yerleştirilmiş.

CTA: "Tüm Projeleri Keşfet" gibi bir düğme, --secondary renginde bir buton (background: var(--secondary); color: var(--secondary-foreground);) veya sadece --primary renginde bir metin bağlantısı olabilir.

2. Projelerimiz (Our Projects)

Genel Arka Plan: Mod seçimine göre --background.

Bölüm Başlığı: Sayfanın en üstünde, oklch(0.3660 0.0251 49.6085) (--foreground) renginde büyük ve belirgin bir başlık (örneğin "Our Projects" veya "Completed Works").

Proje Kategorizasyon/Filtreleme (Opsiyonel): Eğer varsa, filtreleme butonları --muted arka plan ve --muted-foreground metin rengine sahip olabilir. Aktif filtreler --primary rengiyle vurgulanır.

Proje Kartları/Listeleme: Her bir proje için ayrı bir kart veya bölüm.

Kart Arka Planı: --card rengi (oklch(0.9686 0.0091 78.2818) açık modda, oklch(0.2685 0.0063 34.2976) koyu modda).

Görsel: Projeyi temsil eden yüksek çözünürlüklü bir ana görsel. Görselin üzerinde proje adı ve kısa bir açıklama.

Metinler: Proje adı --foreground renginde, kısa açıklama --muted-foreground renginde.

Detay CTA: "Detayları İncele" gibi bir CTA, --primary renginde bir metin bağlantısı veya çerçevesiz düğme olabilir.

Hover Efekti: Kartın üzerine gelindiğinde hafif bir gölge artışı (--shadow-md veya --shadow-lg) veya ince bir --border vurgusu.

3. Planlar (Plans)

Genel Arka Plan: Mod seçimine göre --background.

Bölüm Başlığı: --foreground renginde "Planlar" veya "Kat Planları" başlığı.

Plan Görsel Alanı:

Her bir plan için ayrı bir kutu veya alan (--card veya --muted arka plan).

2D Plan Görselleri: Yüksek çözünürlüklü 2D kat planları, kesitler vb. görseller. Görselin kendisi ana öğe.

Görsel Çerçevesi: Görsellerin etrafında ince bir --border çizgisi veya hafif bir --shadow efekti, görselin arka plandan ayrılmasını sağlar.

Plan Adı/Açıklaması: Planın altında --foreground veya --muted-foreground renginde başlık ve kısa açıklama.

Büyütme/Detay CTA: "Büyütmek için Tıklayın" gibi bir ikon veya bağlantı, --primary renginde.

Detaylı Görüntüleme (Modal/Lightbox):

Görsel tıklandığında açılan modal veya lightbox'ın arka planı yarı saydam koyu gri (rgba(0,0,0,0.8) veya koyu modda --background renginin daha opak bir tonu) olabilir.

Plan görseli tam boyutta ve net bir şekilde gösterilmeli. Kapatma düğmesi (--primary-foreground renginde bir "X" ikonu) sağ üst köşede yer almalı.

4. Galeri (Gallery)

Genel Arka Plan: Mod seçimine göre --background.

Bölüm Başlığı: --foreground renginde "Galeri" veya "3D Render'lar" başlığı.

Görsel Izgarası: Yüksek çözünürlüklü 3D render görselleri veya tamamlanmış projelerin profesyonel fotoğrafları, responsive bir ızgara düzeninde sergilenecek.

Izgara Öğeleri: Her bir görsel kendi içinde minimal bir --card arka planına sahip olabilir veya doğrudan --background üzerine yerleştirilebilir.

Hover Efektleri: Görselin üzerine gelindiğinde hafif bir parlaklık artışı, bir başlık overlay'i veya --primary renginde ince bir çerçeve belirmesi.

Lightbox Entegrasyonu:

Görsel tıklandığında tam ekran lightbox olarak açılmalı. Arka plan yarı saydam koyu olmalı (rgba(0,0,0,0.8)).

Navigasyon okları (--primary-foreground renginde) ve kapatma butonu (--primary-foreground renginde) net bir şekilde görünmeli.

Görsel alt yazısı veya proje adı (--primary-foreground renginde) lightbox'ın altında yer alabilir.

5. Canlı Projeler (Live Projects)

Genel Arka Plan: Mod seçimine göre --background.

Bölüm Başlığı: --foreground renginde "Canlı Projeler" veya "Devam Eden Projeler" başlığı.

Proje Kartları: Her bir canlı proje için ayrı kartlar.

Kart Arka Planı: --card rengi (oklch(0.9686 0.0091 78.2818) açık modda, oklch(0.2685 0.0063 34.2976) koyu modda).

Görsel/Video Önizlemesi: Projenin canlı görüntüsü (şantiye kamerası, drone veya en güncel fotoğrafı). Eğer video ise, oynatıcı kontrolleri basit ve --primary renginde olmalı.

Proje Bilgileri: Proje adı (--foreground), kısa açıklama (--muted-foreground) ve proje durumu (örn. "İnşaat Devam Ediyor", "Yeni Tamamlandı") --primary veya --secondary renginde vurgulanmış bir etiket olarak yer almalı.

CTA (Opsiyonel): "Detayları Gör" veya "Canlı Yayını İzle" gibi bir düğme.

UI Tasarım Genel Yönergeleri:

Tipografi:

Başlıklar (h1, h2, h3): "Oxanium" veya benzeri modern, sans-serif bir font. Büyük, cesur ve --foreground renginde olmalı. Harf aralığı (letter-spacing) hafifçe genişletilebilir (CSS'deki --tracking-normal veya daha fazlası).

Gövde Metinleri (p): "Merriweather" veya benzeri serif ya da okunabilir sans-serif bir font. --foreground veya --muted-foreground renginde, yeterli satır yüksekliği ve paragraf boşluklarıyla okunabilirliği sağlanmalı.

Boşluk Kullanımı (Whitespace): Tüm elemanlar arasında cömertçe boşluk bırakılarak minimalist ve lüks bir his yaratılmalı. Bu, içeriğin nefes almasını ve gözün dinlenmesini sağlar.

Gölge Efektleri (--shadow değişkenleri): Kartlar, butonlar ve önemli elemanlar üzerinde hafif ve yumuşak gölgeler (--shadow-sm, --shadow-md) kullanılarak derinlik ve katman etkisi yaratılmalı. Aşırıya kaçılmamalı.

Sınırlar (--border): Özellikle kartların ve girdi alanlarının etrafında ince, zarif --border çizgileri kullanılabilir.

İkonografi: Modern, minimalist ve çizgisel (line-art) ikonlar tercih edilmeli. Renkleri genellikle --foreground veya --primary olmalı.

Responsive Tasarım: Her bir sayfa, tüm cihazlarda (mobil, tablet, masaüstü) mükemmel bir şekilde görüntülenmeli. Görseller ve metinler ekran boyutuna göre akışkan bir şekilde yeniden düzenlenmeli.

Animasyonlar ve Geçişler:

Yumuşak Geçişler: Sayfalar arası geçişler, öğelerin görünür hale gelmesi (fade-in, slide-up), hover efektleri ve modal/lightbox açılışları için pürüzsüz ve hızlı animasyonlar kullanılmalı.

360 Derece Görsel Etkileşimi: Fare veya dokunmatik etkileşimle görselin akıcı bir şekilde döndürülebilmesi.

Görsel Yükleme: Görsellerin sayfaya yüklendikçe hafif bir animasyonla (örn. opacity geçişi veya scale efekti) belirmesi, kullanıcı deneyimini zenginleştirir.

Bu detaylı prompt, Claude'a web sitenizin her bir yönünü tasarlarken yol gösterecektir. Yüklediğiniz görsel referanslar ve renk değişkenleri, sitenizin estetik kimliğini baştan sona belirleyecek güçlü kılavuzlardır.
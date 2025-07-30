# 360° Viewer Kullanım Kılavuzu

## 🎯 360° Görsel Nasıl Eklenir?

360° görselinizi siteye eklemek için aşağıdaki adımları takip edin:

### 1. Görsel Dosyasını Yerleştirin
```bash
# Görselinizi bu klasöre kopyalayın:
/public/images/360/your-360-image.jpg
```

### 2. Konfigürasyonu Güncelleyin
`src/app/[locale]/page.tsx` dosyasında şu satırları bulun:

```typescript
const [viewer360Config] = useState({
  enabled: false, // ← Bunu true yapın
  imagePath: '', // ← Görsel yolunu buraya yazın
  autoRotate: true,
  controlsVisible: true
});
```

**Şu şekilde değiştirin:**
```typescript
const [viewer360Config] = useState({
  enabled: true, // ✅ Aktif edildi
  imagePath: '/images/360/your-360-image.jpg', // ✅ Görsel yolu
  autoRotate: true, // Otomatik döndürme
  controlsVisible: true // Kontrol butonları
});
```

### 3. Ayarlar

#### `enabled: boolean`
- `true`: 360 viewer aktif
- `false`: Placeholder gösterir

#### `imagePath: string`
- 360° görsel dosyasının yolu
- Örnek: `'/images/360/villa-360.jpg'`

#### `autoRotate: boolean`
- `true`: Otomatik döndürme aktif
- `false`: Sadece manuel kontrol

#### `controlsVisible: boolean`
- `true`: Sol/sağ kontrol butonları görünür
- `false`: Sadece sürükleme ile kontrol

## 🎮 Kullanıcı Kontrolleri

### Desktop:
- **Sürükleme**: Mouse ile sürükleyerek döndürme
- **Butonlar**: Sol/sağ ok butonları ile döndürme

### Mobil:
- **Dokunma**: Parmak ile sürükleyerek döndürme
- **Butonlar**: Sol/sağ ok butonları ile döndürme

## 📋 Önerilen Görsel Özellikleri

### Format:
- **JPG/JPEG**: En iyi performans
- **PNG**: Şeffaflık gerekiyorsa
- **WebP**: Modern tarayıcılar için

### Boyut:
- **Genişlik**: 2048px - 4096px
- **Yükseklik**: 1024px - 2048px
- **Aspect Ratio**: 2:1 (panoramik)

### Dosya Boyutu:
- **Önerilen**: 500KB - 2MB
- **Maksimum**: 5MB

## 🔧 Gelişmiş Konfigürasyon

Daha fazla kontrol için `Hero360Viewer` component'ini doğrudan düzenleyebilirsiniz:

```typescript
// src/components/Hero360Viewer.tsx
<Hero360Viewer 
  enabled={true}
  imagePath="/images/360/villa.jpg"
  autoRotate={true}
  controlsVisible={true}
  // Ek özellikler eklenebilir
/>
```

## 🚀 Hızlı Test

Test etmek için placeholder görsel kullanın:
```typescript
enabled: true,
imagePath: '/images/placeholder.jpg', // Test için
```

## 📱 Responsive Tasarım

360 viewer tüm cihazlarda çalışacak şekilde tasarlandı:
- **Desktop**: Mouse kontrolü
- **Tablet**: Touch kontrolü
- **Mobile**: Touch kontrolü + optimized boyut

## ⚡ Performans İpuçları

1. **Görsel Optimizasyonu**: 
   - Görselinizi sıkıştırın
   - WebP formatını kullanın

2. **Lazy Loading**: 
   - Component otomatik lazy loading kullanır

3. **Memory Management**: 
   - Büyük görseller için dikkatli olun

## 🐛 Sorun Giderme

### Görsel Yüklenmiyor:
1. Dosya yolunu kontrol edin
2. Dosya boyutunu kontrol edin
3. Console'da hata mesajlarını kontrol edin

### Performans Sorunu:
1. Görsel boyutunu küçültün
2. `autoRotate`'i false yapın
3. `quality` değerini düşürün

### Mobilde Çalışmıyor:
1. Touch event'ları kontrol edin
2. Browser uyumluluğunu kontrol edin

---

**Sorularınız için lütfen development ekibi ile iletişime geçin.** 🚀
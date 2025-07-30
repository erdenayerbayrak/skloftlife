import { getTranslations } from 'next-intl/server';

export default async function PrivacyPage() {
  const t = await getTranslations('privacy');

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="py-6 marble-hero-section light-marble-background"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 20%, #141414 40%, #1F1F1F 60%, #0F0F0F 80%, #121212 100%)',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 light-marble-overlay"></div>
        <div className="container mx-auto py-4 px-4 marble-hero-content">
          <div className="max-w-7xl mx-auto text-center mb-4 space-y-2">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60" />
              <span className="text-sm font-medium text-white uppercase tracking-wider">
                Gizlilik
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-white/60 to-transparent" />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight marble-title text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
              Gizlilik Politikası
            </h1>
            
            <p className="text-base text-gray-200 max-w-xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
              Kişisel verilerinizin korunması hakkında detaylı bilgiler
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Gizlilik Politikası</h2>
            <p className="text-muted-foreground mb-4">
              Bu sayfa yakında güncellenecektir. Sorularınız için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
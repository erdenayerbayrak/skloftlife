import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <div className="min-h-screen">
      {/* Hero Section - Cream Marble */}
      <section className="py-6 relative overflow-hidden cream-marble-background">
        <div className="absolute inset-0 cream-marble-overlay"></div>
        <div className="container py-4 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center mb-4 space-y-2">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t('sectionLabel')}
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-shadow-luxury">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-3/4 right-10 w-3 h-3 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {t('philosophy.title')}
                </h2>
                <div className="prose text-muted-foreground space-y-4">
                  <p>
                    {t('philosophy.paragraph1')}
                  </p>
                  <p>
                    {t('philosophy.paragraph2')}
                  </p>
                  <p>
                    {t('philosophy.paragraph3')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{t('philosophy.innovationTitle')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('philosophy.innovationDescription')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3 kopyası.jpg"
                  alt="SkLoft Villaları - Felsefemiz"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t('process.sectionLabel')}
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t('process.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('process.step1.title'), desc: t('process.step1.description') },
              { title: t('process.step2.title'), desc: t('process.step2.description') },
              { title: t('process.step3.title'), desc: t('process.step3.description') }
            ].map((step, index) => (
              <div key={step.title} className="relative group">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-14 h-14 mx-auto bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-lg font-bold">
                      {index + 1}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
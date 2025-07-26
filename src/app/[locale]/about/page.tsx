import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Story
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-shadow-luxury">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-3/4 right-10 w-3 h-3 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Architectural Philosophy
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-6">
                  <p>
                    SkLoftLife Villas represents the harmonious fusion of contemporary design principles 
                    with timeless architectural excellence. Our philosophy centers on creating living 
                    spaces that transcend mere functionality to become sanctuaries of luxury and comfort.
                  </p>
                  <p>
                    Every villa we craft embodies our commitment to sustainable architecture, utilizing 
                    eco-friendly materials and energy-efficient systems. We believe in designs that not 
                    only enhance the present living experience but also preserve the environment for 
                    future generations.
                  </p>
                  <p>
                    The integration of indoor and outdoor spaces through expansive glass facades and 
                    open-plan designs creates a seamless connection with nature, allowing natural light 
                    to flood every corner and provide residents with breathtaking panoramic views.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                  <p className="text-muted-foreground">
                    Pioneering architectural solutions that redefine modern living
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder for philosophy image */}
                <div className="w-full h-full bg-gradient-to-br from-card via-muted to-card flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                      </svg>
                    </div>
                    <p className="text-sm">Architecture Philosophy Image</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <div className="container">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t('features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the exceptional features that define our architectural excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['modern', 'sustainable', 'premium', 'location'].map((feature) => (
              <div 
                key={feature} 
                className="group text-center space-y-6 p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{t(`features.${feature}`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature === 'modern' && 'Contemporary design principles that embrace innovation and functionality'}
                    {feature === 'sustainable' && 'Environmentally conscious architecture for a greener future'}
                    {feature === 'premium' && 'Finest materials and craftsmanship in every detail'}
                    {feature === 'location' && 'Strategic positioning in the most desirable areas'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative">
        <div className="container">
          <div className="text-center mb-20 space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Process
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              From Vision to Reality
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Conceptualization', desc: 'Understanding your vision and translating it into architectural concepts' },
              { title: 'Design Development', desc: 'Detailed planning and refinement of every architectural element' },
              { title: 'Construction Excellence', desc: 'Meticulous execution with premium materials and craftsmanship' }
            ].map((step, index) => (
              <div key={step.title} className="relative group">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {index + 1}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-32 relative glass-morphism">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder for team image */}
                <div className="w-full h-full bg-gradient-to-br from-muted via-card to-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-sm">Team Excellence Image</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Expert Team
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our multidisciplinary team combines decades of architectural expertise 
                  with innovative design thinking to deliver exceptional results that exceed expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
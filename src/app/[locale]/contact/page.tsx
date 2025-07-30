'use client';

import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  const contactActions = [
    {
      id: 'call',
      title: t('actions.call'),
      description: 'Quick response via direct call',
      value: t('info.phone'),
      href: `tel:${t('info.phone')}`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      id: 'whatsapp',
      title: t('actions.whatsapp'),
      description: 'Send instant message',
      value: t('info.phone'),
      href: `https://wa.me/${t('info.phone').replace(/\s/g, '').replace('+', '')}`,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      id: 'email',
      title: t('actions.email'),
      description: 'Send detailed information via email',
      value: t('info.email'),
      href: `mailto:${t('info.email')}`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: 'bg-primary',
      hoverColor: 'hover:bg-primary/90',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              {t('sectionLabel')}
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {t('title')}
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </div>

      {/* Main Content - 50% Map, 50% Contact Info */}
      <div className="relative min-h-[600px] lg:h-[600px]">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Map Section - Left 50% */}
          <div className="relative h-[300px] lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Kestel%20Mah.%20%C4%B0sa%20K%C3%BC%C3%A7%C3%BClmez%20Cad.%20162%20A%20Vision%20Apartman%C4%B1%20Alanya%20Antalya&zoom=17"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Contact Info - Right 50% */}
          <div className="relative bg-background flex items-center min-h-[400px] lg:h-full">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 lg:mb-3">{t('info.title')}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t('description')}
                  </p>
                </div>

                {/* Contact Action Cards */}
                <div className="space-y-2 lg:space-y-3">
                  {contactActions.map((action) => (
                    <a
                      key={action.id}
                      href={action.href}
                      target={action.id === 'whatsapp' ? '_blank' : undefined}
                      rel={action.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      className={`group relative block p-3 sm:p-4 lg:p-5 rounded-lg lg:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden ${action.bgColor} ${action.hoverColor}`}
                    >
                      <div className="relative z-10 flex items-center gap-2 sm:gap-3 lg:gap-4">
                        <div className="p-2 sm:p-2.5 lg:p-3 bg-white/20 backdrop-blur rounded-md lg:rounded-lg text-white flex-shrink-0">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8">
                            {action.icon}
                          </div>
                        </div>
                        <div className="flex-1 text-white min-w-0">
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-0.5 lg:mb-1 truncate">{action.title}</h3>
                          <p className="text-xs opacity-90 mb-0.5 lg:mb-1 hidden sm:block">{t(`actions.${action.id}Description`)}</p>
                          <p className="text-xs sm:text-sm lg:text-base font-medium truncate">{action.value}</p>
                        </div>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white/60 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </a>
                  ))}
                </div>

                {/* Address Section */}
                <div className="mt-4 lg:mt-6 p-3 sm:p-4 lg:p-5 bg-card rounded-lg lg:rounded-xl border border-border">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-2 sm:p-2.5 lg:p-3 bg-primary/10 rounded-md lg:rounded-lg flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base mb-1">{t('info.addressLabel')}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{t('info.address')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
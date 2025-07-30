'use client';

import { useTranslations } from 'next-intl';
import { WatermarkedImage } from '@/components/ui/WatermarkedImage';

const planCategories = [
  {
    id: 'ablok',
    name: 'A Blok Planları',
    description: 'A Blok villa planları ve detayları',
    plans: [
      { id: 'a0', name: 'A0 Plan', file: '/images/plans/ABLOK/A0.pdf', thumbnail: '/images/plans/ABLOK/A0.jpg' },
      { id: 'a1', name: 'A1 Plan', file: '/images/plans/ABLOK/A1.pdf', thumbnail: '/images/plans/ABLOK/A1.jpg' },
      { id: 'a2', name: 'A2 Plan', file: '/images/plans/ABLOK/A2.pdf', thumbnail: '/images/plans/ABLOK/A2.jpg' },
      { id: 'a3', name: 'A3 Plan', file: '/images/plans/ABLOK/A3.pdf', thumbnail: '/images/plans/ABLOK/A3.jpg' },
    ]
  },
  {
    id: 'cblok',
    name: 'C Blok Planları', 
    description: 'C Blok villa planları ve detayları',
    plans: [
      { id: 'c0', name: 'C0 Plan', file: '/images/plans/CBLOK/C0.pdf', thumbnail: '/images/plans/CBLOK/C0.jpg' },
      { id: 'c1', name: 'C1 Plan', file: '/images/plans/CBLOK/C1.pdf', thumbnail: '/images/plans/CBLOK/C1.jpg' },
      { id: 'c2', name: 'C2 Plan', file: '/images/plans/CBLOK/C2.pdf', thumbnail: '/images/plans/CBLOK/C2.jpg' },
      { id: 'c3', name: 'C3 Plan', file: '/images/plans/CBLOK/C3.pdf', thumbnail: '/images/plans/CBLOK/C3.jpg' },
    ]
  }
];

export default function PlansPage() {
  const t = useTranslations('plans');

  const handleDownloadPlan = (planFile: string, planName: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = planFile;
    link.download = `${planName}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section - Architectural Marble */}
      <section className="py-6 relative architectural-marble-background">
        <div className="absolute inset-0 architectural-marble-overlay"></div>
        <div className="container mx-auto py-4 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4 space-y-2">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              {t('sectionLabel')}
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {t('title')}
          </h1>
          
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {t('description')}
          </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Plans Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Plan Categories */}
          <div className="space-y-12">
          {planCategories.map((category, categoryIndex) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-foreground">
                  {category.name}
                </h2>
                <p className="text-base text-muted-foreground max-w-xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Plans Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.plans.map((plan, planIndex) => (
                  <div
                    key={plan.id}
                    className="group relative bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden"
                    style={{
                      animation: `fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${(categoryIndex * 200) + (planIndex * 100)}ms both`
                    }}
                  >
                    {/* PDF Preview Area - Full Card Height */}
                    <div className="relative h-80 bg-white rounded-xl overflow-hidden">
                      {/* PDF Thumbnail Image with Watermark */}
                      <WatermarkedImage
                        src={plan.thumbnail}
                        alt={plan.name}
                        fill
                        className="object-contain"
                        watermarkText="skdesign"
                        watermarkClassName="opacity-40"
                      />
                      
                      {/* Hover Overlay with Controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {/* Plan Name and Actions */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-lg font-bold mb-3 text-center">
                            {plan.name}
                          </h3>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(plan.file, '_blank');
                              }}
                              className="flex-1 px-3 py-2 bg-white/30 backdrop-blur rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/40 flex items-center justify-center gap-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
{t('view')}
                            </button>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownloadPlan(plan.file, plan.name);
                              }}
                              className="flex-1 px-3 py-2 bg-primary/90 backdrop-blur rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary flex items-center justify-center gap-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                              </svg>
{t('download')}
                            </button>
                          </div>
                        </div>
                      </div>
    
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
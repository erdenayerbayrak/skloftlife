'use client';

import { useTranslations } from 'next-intl';

const planCategories = [
  {
    id: 'ablok',
    name: 'A Blok Planları',
    description: 'A Blok villa planları ve detayları',
    plans: [
      { id: 'a0', name: 'A0 Plan', file: '/images/plans/ABLOK/A0.pdf' },
      { id: 'a1', name: 'A1 Plan', file: '/images/plans/ABLOK/A1.pdf' },
      { id: 'a2', name: 'A2 Plan', file: '/images/plans/ABLOK/A2.pdf' },
      { id: 'a3', name: 'A3 Plan', file: '/images/plans/ABLOK/A3.pdf' },
    ]
  },
  {
    id: 'cblok',
    name: 'C Blok Planları', 
    description: 'C Blok villa planları ve detayları',
    plans: [
      { id: 'c0', name: 'C0 Plan', file: '/images/plans/CBLOK/C0.pdf' },
      { id: 'c1', name: 'C1 Plan', file: '/images/plans/CBLOK/C1.pdf' },
      { id: 'c2', name: 'C2 Plan', file: '/images/plans/CBLOK/C2.pdf' },
      { id: 'c3', name: 'C3 Plan', file: '/images/plans/CBLOK/C3.pdf' },
    ]
  }
];

export default function VillasPage() {
  const t = useTranslations('villas');

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
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Architecture Plans
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {t('title')}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Profesyonel mimari planlarımızı inceleyerek villa projelerimizin detaylarını keşfedin
          </p>
        </div>

        {/* Plan Categories */}
        <div className="space-y-16">
          {planCategories.map((category, categoryIndex) => (
            <div key={category.id} className="space-y-8">
              {/* Category Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  {category.name}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Plans Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.plans.map((plan, planIndex) => (
                  <div
                    key={plan.id}
                    className="group relative bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden"
                    style={{
                      animation: `fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${(categoryIndex * 200) + (planIndex * 100)}ms both`
                    }}
                  >
                    {/* PDF Preview Area - Full Card Height */}
                    <div className="relative h-96 bg-white rounded-2xl overflow-hidden">
                      {/* PDF Embed */}
                      <iframe
                        src={`${plan.file}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full pointer-events-none"
                        title={plan.name}
                        style={{ 
                          transform: 'scale(1.1)', 
                          transformOrigin: 'center center'
                        }}
                      />
                      
                      {/* Hover Overlay with Controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {/* Plan Name and Actions */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-4 text-center">
                            {plan.name}
                          </h3>
                          
                          <div className="flex gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(plan.file, '_blank');
                              }}
                              className="flex-1 px-4 py-3 bg-white/20 backdrop-blur rounded-xl font-medium transition-all duration-300 hover:bg-white/30 flex items-center justify-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              Görüntüle
                            </button>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownloadPlan(plan.file, plan.name);
                              }}
                              className="flex-1 px-4 py-3 bg-primary/90 backdrop-blur rounded-xl font-medium transition-all duration-300 hover:bg-primary flex items-center justify-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                              </svg>
                              İndir
                            </button>
                          </div>
                        </div>
                      </div>
    
                      {/* PDF Label */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur text-white text-sm font-medium rounded-full shadow-lg">
                        {plan.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
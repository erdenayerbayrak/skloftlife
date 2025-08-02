'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { WatermarkedImage } from '@/components/ui/WatermarkedImage';
import { PlanViewerModal } from '@/components/ui/PlanViewerModal';
import { Eye } from 'lucide-react';

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
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; image: string } | null>(null);

  const handleViewPlan = (planName: string, planImage: string) => {
    setSelectedPlan({ name: planName, image: planImage });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section - Premium Marble */}
      <section 
        className="py-6 marble-hero-section light-marble-background"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 20%, #141414 40%, #1F1F1F 60%, #0F0F0F 80%, #121212 100%)',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 light-marble-overlay"></div>
        <div className="container mx-auto py-4 px-4 marble-hero-content">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4 space-y-2">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60" />
            <span className="text-sm font-medium text-white uppercase tracking-wider">
              {t('sectionLabel')}
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-white/60 to-transparent" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight marble-title text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
            {t('title')}
          </h1>
          
          <p className="text-base text-gray-200 max-w-xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
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
                      
                      {/* Hover Overlay with View Button */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {/* Plan Name and View Action */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-lg font-bold mb-3 text-center">
                            {plan.name}
                          </h3>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewPlan(plan.name, plan.thumbnail);
                            }}
                            className="w-full px-4 py-3 bg-primary/90 backdrop-blur rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary flex items-center justify-center gap-2"
                          >
                            <Eye className="w-5 h-5" />
                            {t('view')}
                          </button>
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

      {/* Plan Viewer Modal */}
      {selectedPlan && (
        <PlanViewerModal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          planName={selectedPlan.name}
          planImage={selectedPlan.image}
        />
      )}

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
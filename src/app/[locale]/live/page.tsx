import { getTranslations } from 'next-intl/server';
import { LiveCameraFeed } from '@/components/LiveCameraFeed';
import { ProjectLocation } from '@/types/project';

const liveProjects: ProjectLocation[] = [
  {
    id: 1,
    name: 'Villa A Blok',
    status: 'Devam Ediyor',
    progress: 75,
    description: 'Kaba inşaat tamamlandı, ince işler devam ediyor.',
    lastUpdate: '2 saat önce',
    cameraFeed: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1.jpg',
    lat: 36.8969,
    lng: 30.7133,
  },
  {
    id: 2,
    name: 'Villa B Blok',
    status: 'Devam Ediyor',
    progress: 60,
    description: 'Çatı işleri ve dış cephe kaplama aşamasında.',
    lastUpdate: '30 dakika önce',
    cameraFeed: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera2.jpg',
    lat: 36.8980,
    lng: 30.7145,
  },
  {
    id: 3,
    name: 'Villa C Blok',
    status: 'Tamamlandı',
    progress: 100,
    description: 'İnşaat tamamlandı, teslime hazır.',
    lastUpdate: '1 gün önce',
    cameraFeed: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3.jpg',
    lat: 36.8955,
    lng: 30.7158,
  },
  {
    id: 4,
    name: 'Ortak Alanlar',
    status: 'Yakında Başlıyor',
    progress: 10,
    description: 'Havuz ve sosyal tesis alanları planlanıyor.',
    lastUpdate: '3 saat önce',
    cameraFeed: '/images/gallery/3D DIŞ GÖRSEL/teras1j.jpg',
    lat: 36.8975,
    lng: 30.7140,
  },
];

export default async function LivePage() {
  const t = await getTranslations('live');

  return (
    <div className="min-h-screen">
      {/* Header Section - Black Marble */}
      <section className="py-6 relative black-marble-background">
        <div className="absolute inset-0 black-marble-overlay"></div>
        <div className="container mx-auto py-4 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center mb-4 space-y-2">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t('liveText')}
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
      </section>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">

        {/* Live Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {liveProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-luxury-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Camera Feed */}
              <LiveCameraFeed
                projectId={project.id.toString()}
                projectName={project.name}
                imageSrc={project.cameraFeed}
                lastUpdate={project.lastUpdate}
              />

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>İlerleme</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
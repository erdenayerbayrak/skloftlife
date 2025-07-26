import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const liveProjects = [
  {
    id: 1,
    name: 'Villa A Blok',
    status: 'Devam Ediyor',
    progress: 75,
    description: 'Kaba inşaat tamamlandı, ince işler devam ediyor.',
    lastUpdate: '2 saat önce',
    cameraFeed: '/images/live/camera-1.jpg',
  },
  {
    id: 2,
    name: 'Villa B Blok',
    status: 'Devam Ediyor',
    progress: 60,
    description: 'Çatı işleri ve dış cephe kaplama aşamasında.',
    lastUpdate: '30 dakika önce',
    cameraFeed: '/images/live/camera-2.jpg',
  },
  {
    id: 3,
    name: 'Villa C Blok',
    status: 'Tamamlandı',
    progress: 100,
    description: 'İnşaat tamamlandı, teslime hazır.',
    lastUpdate: '1 gün önce',
    cameraFeed: '/images/live/camera-3.jpg',
  },
  {
    id: 4,
    name: 'Ortak Alanlar',
    status: 'Yakında Başlıyor',
    progress: 10,
    description: 'Havuz ve sosyal tesis alanları planlanıyor.',
    lastUpdate: '3 saat önce',
    cameraFeed: '/images/live/camera-4.jpg',
  },
];

export default async function LivePage() {
  const t = await getTranslations('live');

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Live Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {liveProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Camera Feed */}
              <div className="relative aspect-video">
                <Image
                  src={project.cameraFeed}
                  alt={`${project.name} Canlı Görüntü`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  CANLI
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-lg text-sm">
                  {project.lastUpdate}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Tamamlandı' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : project.status === 'Devam Ediyor'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>İlerleme</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
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

        {/* Time-lapse Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-8">Zaman Atlamalı Videolar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src={`/images/live/timelapse-${i}.jpg`}
                  alt={`Zaman Atlamalı Video ${i}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">Proje İlerlemesi - Ay {i}</p>
                  <p className="text-sm opacity-80">2:34</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
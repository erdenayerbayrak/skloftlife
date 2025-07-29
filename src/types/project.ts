export interface ProjectLocation {
  id: number;
  name: string;
  status: string;
  progress: number;
  lat: number;
  lng: number;
  description: string;
  lastUpdate?: string;
  cameraFeed?: string;
} 
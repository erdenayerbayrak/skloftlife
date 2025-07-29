'use client';

import { useState } from 'react';
import { ProjectLocation } from '@/types/project';

interface ProjectMapProps {
  projects: ProjectLocation[];
}

export function ProjectMap({ projects }: ProjectMapProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectLocation | null>(null);

  return (
    <div className="relative w-full h-[500px] bg-card rounded-2xl shadow-lg overflow-hidden">
      {/* Map Container */}
      <div className="absolute inset-0">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102303.45893587368!2d30.60202544686719!3d36.89761564590945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya!5e0!3m2!1str!2str!4v1234567890`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      {/* Project Markers Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative group">
              {/* Marker */}
              <div className="w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-primary">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/90 backdrop-blur text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                  <div className="font-medium">{project.name}</div>
                  <div className="text-xs opacity-80">{project.progress}%</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 max-w-md mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{selectedProject.name}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>İlerleme</span>
                  <span>{selectedProject.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
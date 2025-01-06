import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { DailyProject } from './types';

interface ProjectCardProps {
  project: DailyProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { day, title, description, repoUrl, demoUrl, tags, imageUrl } = project;

  return (
    <div className="bg-[#0a3622] rounded-lg border border-emerald-600/20 overflow-hidden transition-transform duration-300 hover:scale-102">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
          <Calendar className="w-4 h-4" />
          <span>Day {day}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Repository</span>
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
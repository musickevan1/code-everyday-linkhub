import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
  demoUrl?: string;
}

export function ProjectCard({ title, description, imageUrl, repoUrl, demoUrl }: ProjectCardProps) {
  return (
    <div className="bg-[#0a3622] rounded-lg border border-emerald-600/20 overflow-hidden transition-transform duration-300 hover:scale-102">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover border-b border-emerald-600/20"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
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
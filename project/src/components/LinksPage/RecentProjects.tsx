import React from 'react';
import { DailyProject } from '../DailyProjects/types';
import { ProjectCard } from '../DailyProjects/ProjectCard';

interface RecentProjectsProps {
  projects: DailyProject[];
}

export function RecentProjects({ projects }: RecentProjectsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.day} project={project} />
      ))}
    </div>
  );
}
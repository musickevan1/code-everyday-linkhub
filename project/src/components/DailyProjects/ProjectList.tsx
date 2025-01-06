import React from 'react';
import { DailyProject } from './types';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: DailyProject[];
  currentDay: number;
}

export function ProjectList({ projects, currentDay }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects
        .filter(project => project.day <= currentDay)
        .map((project) => (
          <ProjectCard key={project.day} project={project} />
        ))}
    </div>
  );
}
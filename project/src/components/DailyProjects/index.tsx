import React from 'react';
import { ProjectList } from './ProjectList';
import { dailyProjects } from '../../data/dailyProjects';

interface DailyProjectsProps {
  currentDay: number;
}

export function DailyProjects({ currentDay }: DailyProjectsProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Daily Projects</h2>
        <p className="text-emerald-400">
          Tracking progress: Day {currentDay} of 365
        </p>
      </div>
      <ProjectList 
        projects={dailyProjects} 
        currentDay={currentDay} 
      />
    </div>
  );
}
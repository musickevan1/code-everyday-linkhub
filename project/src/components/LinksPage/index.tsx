import React, { useState } from 'react';
import { Avatar } from './Avatar';
import { Bio } from './Bio';
import { SocialLinks } from './SocialLinks';
import { StatsSection } from './StatsSection';
import { ContributionSection } from './ContributionSection';
import { RecentProjects } from './RecentProjects';
import { dailyProjects } from '../../data/dailyProjects';
import { GitHubStats } from '../../types/github';

interface LinksPageProps {
  currentDay: number;
  stats: GitHubStats;
  onContributionUpdate: (date: string, count: number) => void;
}

export function LinksPage({ currentDay, stats, onContributionUpdate }: LinksPageProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const recentProjects = dailyProjects
    .filter(project => project.day <= currentDay)
    .sort((a, b) => b.day - a.day)
    .slice(0, 3);

  const visibleProjects = showAllProjects 
    ? dailyProjects.filter(project => project.day <= currentDay)
    : recentProjects;

  return (
    <div className="min-h-screen bg-[#052e16] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Avatar username="musickevan1" />
        <Bio />
        <SocialLinks />
        
        <StatsSection stats={stats} currentDay={currentDay} />
        <ContributionSection 
          stats={stats} 
          currentDay={currentDay}
          onContributionUpdate={onContributionUpdate}
        />
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {showAllProjects ? 'All Projects' : 'Recent Projects'}
            </h2>
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-colors"
            >
              {showAllProjects ? 'Show Recent' : 'Show All'}
            </button>
          </div>
          <RecentProjects projects={visibleProjects} />
        </div>
      </div>
    </div>
  );
}
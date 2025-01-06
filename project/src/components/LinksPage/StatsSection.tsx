import React from 'react';
import { Calendar, GitCommit, Percent, GitBranch } from 'lucide-react';
import { GitHubStats } from '../../types/github';
import { StatsCard } from '../StatsCard';

interface StatsSectionProps {
  stats: GitHubStats;
  currentDay: number;
}

export function StatsSection({ stats, currentDay }: StatsSectionProps) {
  const completionPercent = ((currentDay / 365) * 100).toFixed(2);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Progress Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Current Streak"
          value={`${stats.currentStreak} days`}
          icon={Calendar}
        />
        <StatsCard
          title="Progress"
          value={`${completionPercent}%`}
          icon={Percent}
        />
        <StatsCard
          title="Commits"
          value={stats.totalCommits}
          icon={GitCommit}
        />
        <StatsCard
          title="Day"
          value={currentDay}
          icon={GitBranch}
        />
      </div>
    </div>
  );
}
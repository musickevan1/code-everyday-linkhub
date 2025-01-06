import React from 'react';
import { GitHubCalendar } from '../GitHubCalendar';
import { GitHubStats } from '../../types/github';

interface ContributionSectionProps {
  stats: GitHubStats;
  currentDay: number;
  onContributionUpdate: (date: string, count: number) => void;
}

export function ContributionSection({ stats, currentDay, onContributionUpdate }: ContributionSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Contribution Activity</h2>
      <GitHubCalendar
        contributions={stats.contributions}
        currentDay={currentDay}
        onContributionUpdate={onContributionUpdate}
      />
    </div>
  );
}
import React from 'react';
import { LinksPage } from '../components/LinksPage';
import { GitHubStats } from '../types/github';
import { getCurrentDayFromDate } from '../utils/dateUtils';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

interface PublicPageProps {
  stats: GitHubStats | null;
  error: string | null;
  loading: boolean;
  updateContribution: (date: string, count: number) => void;
}

export function PublicPage({ stats, error, loading, updateContribution }: PublicPageProps) {
  const currentDay = getCurrentDayFromDate(new Date());

  if (loading) return (
    <div className="min-h-screen bg-[#052e16] flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-[#052e16] flex items-center justify-center p-4">
      <ErrorMessage message={error} />
    </div>
  );
  
  if (!stats) return null;

  return (
    <LinksPage
      currentDay={currentDay}
      stats={stats}
      onContributionUpdate={updateContribution}
    />
  );
}
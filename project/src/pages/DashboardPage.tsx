import React, { useState } from 'react';
import { Dashboard } from '../components/Dashboard';
import { UserForm } from '../components/UserForm';
import { RepoSearch } from '../components/RepoSearch';
import { ControlPanel } from '../components/ControlPanel';
import { GitHubStats } from '../types/github';
import { getCurrentDayFromDate } from '../utils/dateUtils';

interface DashboardPageProps {
  stats: GitHubStats | null;
  error: string | null;
  loading: boolean;
  fetchUserStats: (username: string, currentDay: number) => Promise<void>;
  fetchRepoStats: (username: string, repoSearch: string, todaysCommits: number) => Promise<void>;
  updateContribution: (date: string, count: number) => void;
}

export function DashboardPage({
  stats,
  error,
  loading,
  fetchUserStats,
  fetchRepoStats,
  updateContribution
}: DashboardPageProps) {
  const [username, setUsername] = useState('');
  const [repoSearch, setRepoSearch] = useState('');
  const [currentDay, setCurrentDay] = useState(getCurrentDayFromDate(new Date()));
  const [todaysCommits, setTodaysCommits] = useState(3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchUserStats(username, currentDay);
  };

  const handleRepoSelect = async () => {
    await fetchRepoStats(username, repoSearch, todaysCommits);
  };

  const handleCommitsChange = async (commits: number) => {
    setTodaysCommits(commits);
    if (stats?.selectedRepo) {
      await fetchRepoStats(username, repoSearch, commits);
    }
  };

  const handleDayChange = async (day: number) => {
    setCurrentDay(day);
    if (stats) {
      await fetchUserStats(username, day);
    }
  };

  return (
    <div className="min-h-screen bg-[#052e16]">
      <div className="container mx-auto py-8 px-4">
        {!stats ? (
          <UserForm
            username={username}
            loading={loading}
            error={error}
            onUsernameChange={setUsername}
            onSubmit={handleSubmit}
          />
        ) : (
          <>
            <RepoSearch
              repoSearch={repoSearch}
              loading={loading}
              error={error}
              onRepoSearchChange={setRepoSearch}
              onRepoSelect={handleRepoSelect}
            />
            <Dashboard 
              stats={stats} 
              day={currentDay}
              onContributionUpdate={updateContribution}
            />
            <ControlPanel
              currentDay={currentDay}
              todaysCommits={todaysCommits}
              onDayChange={handleDayChange}
              onCommitsChange={handleCommitsChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
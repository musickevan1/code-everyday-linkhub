import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { PublicPage } from './pages/PublicPage';
import { useGitHubData } from './hooks/useGitHubData';
import { getCurrentDayFromDate } from './utils/dateUtils';

const DEFAULT_USERNAME = 'musickevan1';

export default function App() {
  const githubData = useGitHubData();
  const currentDay = getCurrentDayFromDate(new Date());

  useEffect(() => {
    githubData.fetchUserStats(DEFAULT_USERNAME, currentDay);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <PublicPage 
              stats={githubData.stats}
              error={githubData.error}
              loading={githubData.loading}
              updateContribution={githubData.updateContribution}
            />
          } 
        />
        <Route 
          path="/_dashboard" 
          element={
            <DashboardPage 
              stats={githubData.stats}
              error={githubData.error}
              loading={githubData.loading}
              fetchUserStats={githubData.fetchUserStats}
              fetchRepoStats={githubData.fetchRepoStats}
              updateContribution={githubData.updateContribution}
            />
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
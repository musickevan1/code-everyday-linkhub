# Code Everyday 2025 🚀

A dynamic dashboard for tracking a year-long coding challenge, featuring contribution tracking, project showcase, and daily progress updates.

[![Netlify Status](https://api.netlify.com/api/v1/badges/03a14b-your-site-name/deploy-status)](https://gleaming-brioche-03a14b.netlify.app)

## 🌟 Features

- **Live Dashboard**: Track daily coding progress with an interactive GitHub-style contribution graph
- **Project Showcase**: Display and manage daily coding projects
- **Progress Statistics**: View current streak, total commits, and completion percentage
- **Repository Integration**: Connect and display stats from daily project repositories
- **Responsive Design**: Beautiful, mobile-friendly interface built with Tailwind CSS

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- GitHub API (via Octokit)
- date-fns
- Lucide React Icons

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/code-everyday-2025.git
cd code-everyday-2025
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5174](http://localhost:5174) in your browser

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Dashboard/     # Main dashboard components
│   ├── GitHubCalendar/# Contribution calendar
│   ├── LinksPage/     # Public links page
│   └── DailyProjects/ # Project showcase
├── data/              # Static data and configurations
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GITHUB_TOKEN=your_github_token
```

## 🌐 Routes

- `/`: Public links page with project showcase
- `/_dashboard`: Private dashboard for managing contributions

## 📝 License

MIT License - feel free to use this project as a template for your own coding challenge!
import React, { useState, useEffect } from 'react';
import GithubRepoCard from '../githubRepoCard/GithubRepoCard';
import './GitHubRepos.css';

const GitHubRepos = ({ theme }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Gyane-git/repos?sort=updated&direction=desc');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        // Add deployed URLs for repositories that have them
        const reposWithDeployedUrls = data.map(repo => {
          let deployedUrl = null;
          
          // Check if the repository has a homepage URL (often used for deployed projects)
          if (repo.homepage) {
            deployedUrl = repo.homepage;
          }
          
          // You can add more conditions here to check for other deployment platforms
          // For example, if you use Vercel, Netlify, etc.
          
          return {
            ...repo,
            deployedUrl
          };
        });
        
        setRepos(reposWithDeployedUrls);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <div className="loading">Loading repositories...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="github-repos-container">
      <div className="repo-cards-div-main">
        {repos.map((repo) => (
          <GithubRepoCard
            key={repo.id}
            repo={{
              id: repo.id,
              name: repo.name,
              createdAt: repo.created_at,
              url: repo.html_url,
              description: repo.description,
              isFork: repo.fork,
              languages: [], // We'll fetch languages separately if needed
              deployedUrl: repo.deployedUrl
            }}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default GitHubRepos; 
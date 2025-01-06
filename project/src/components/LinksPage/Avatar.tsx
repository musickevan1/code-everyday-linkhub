import React from 'react';

interface AvatarProps {
  username: string;
}

export function Avatar({ username }: AvatarProps) {
  return (
    <div className="relative w-32 h-32 mx-auto mb-6">
      <img
        src={`https://github.com/${username}.png`}
        alt={`${username}'s avatar`}
        className="rounded-full border-4 border-emerald-500 shadow-lg transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2">
        <div className="w-4 h-4 bg-emerald-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
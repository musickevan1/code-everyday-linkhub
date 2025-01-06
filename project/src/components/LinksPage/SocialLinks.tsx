import React from 'react';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/musickevan1',
    icon: Github,
    color: 'hover:bg-gray-800'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/codeeveryday25',
    icon: Twitter,
    color: 'hover:bg-blue-500'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/codeeveryday25',
    icon: Instagram,
    color: 'hover:bg-pink-600'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/evan-musick',
    icon: Linkedin,
    color: 'hover:bg-blue-700'
  }
];

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mb-12">
      {socialLinks.map(({ name, url, icon: Icon, color }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-[#0a3622] rounded-lg border border-emerald-600/20 transition-colors ${color}`}
          title={name}
        >
          <Icon className="w-6 h-6 text-white" />
        </a>
      ))}
    </div>
  );
}
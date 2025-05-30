'use client';

import { Calendar, Pencil, Share2, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button/Button';

export const DashboardHeader = () => {
  const [description] = useState('Add a description to your dashboard to give more context to your team members.');

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      {/* Left */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Unified Insights</h1>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{description}</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="mt-3 flex flex-col items-end gap-4 md:mt-0 md:justify-end">
        <div className="flex gap-2">
          <Button label="Edit" variant="primary" size="small" icon={<Pencil className="h-4 w-4" />} />
          <Button variant="secondary" size="small" icon={<MailIcon className="h-4 w-4" />} label="Subscribe" />
          <Button variant="ghost" size="small" icon={<Share2 className="h-4 w-4" />} label="Share" />
          <Button variant="transparent" size="small" icon={<LinkIcon className="h-4 w-4" />} />
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <Dropdown label="08 Oct, 2023" icon={<Calendar className="h-4 w-4" />} />
          <Dropdown label="Comparing To: 07 Oct, 2023" />
          <Dropdown label="Hourly" />
        </div>
      </div>
    </div>
  );
};

// Reusable Dropdown (you can customize as needed)
const Dropdown = ({ label, icon }: { label: string; icon?: React.ReactNode }) => (
  <button className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
    {icon}
    {label}
    <svg
      className="h-3 w-3 text-gray-400 dark:text-gray-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
    </svg>
  </button>
);

// Placeholder for mail icon
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z" stroke="currentColor" />
    <path d="M22 6l-10 7L2 6" stroke="currentColor" />
  </svg>
);

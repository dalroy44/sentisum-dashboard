'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, LayoutDashboard, List, Plug } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/discover', label: 'Discover', icon: BookOpen },
  { href: '/dashboard', label: 'Your Dashboards', icon: LayoutDashboard },
  { href: '/actions', label: 'Action Tracking', icon: List },
  { href: '/settings/integrations', label: 'Integrations', icon: Plug },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-16 flex-col border-r border-gray-200 bg-white text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
      {/* Logo */}
      <div className="flex h-[55px] items-center justify-center border-b border-gray-200 dark:border-gray-800">
        <Link href="/" className="font-sherika text-lg font-semibold leading-3 text-gray-900 dark:text-white">
          <div>
            <h6>senti</h6>
            <h6 className="tracking-wide">sum.</h6>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex grow flex-col justify-between gap-4 px-2 pb-6 pt-3">
        <div className="flex flex-col items-center gap-4">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                title={label}
                className={`flex rounded-full p-2 transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white hover:!bg-indigo-600'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

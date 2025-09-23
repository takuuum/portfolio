'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

interface PageInfo {
  path: string;
  titleKey: string;
}

const pages: PageInfo[] = [
  { path: '/', titleKey: 'home' },
  { path: '/about', titleKey: 'about' },
  { path: '/skills', titleKey: 'skills' },
  { path: '/projects', titleKey: 'projects' },
  { path: '/articles', titleKey: 'articles' },
  { path: '/talks', titleKey: 'talks' },
  { path: '/awards', titleKey: 'awards' },
];

interface PageNavigationProps {
  currentPath: string;
}

export function PageNavigation({ currentPath }: PageNavigationProps) {
  const t = useTranslations('Navigation');

  const currentIndex = pages.findIndex(page => page.path === currentPath);

  if (currentIndex === -1) {
    return null;
  }

  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center py-4 px-6 gap-2">
      <div className="flex-1">
        {previousPage && (
          <Link href={previousPage.path} prefetch={true}>
            <Button variant="ghost" className="group hover:shadow-md hover:bg-white dark:hover:bg-gray-700 p-6 transition-all duration-200">
              <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('previous')}</div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {t(previousPage.titleKey)}
                </div>
              </div>
            </Button>
          </Link>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextPage && (
          <Link href={nextPage.path} prefetch={true}>
            <Button variant="ghost" className="group hover:shadow-md hover:bg-white dark:hover:bg-gray-700 p-6 transition-all duration-200">
              <div className="text-right">
                <div className="text-xs text-gray-500 dark:text-gray-400">{t('next')}</div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {t(nextPage.titleKey)}
                </div>
              </div>
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

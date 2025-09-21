'use client';

import Image from 'next/image';
import { usePathname } from '@/i18n/routing';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Home, User, FileText, ExternalLink, StickyNote, Trophy, Code, MicVocal, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { HoverPrefetchLink } from './hover-prefetch-link';

export function AppSidebar() {
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  const navigationItems = [
    { href: '/', label: t('home'), icon: Home },
    { href: '/about', label: t('about'), icon: User },
    { href: '/skills', label: t('skills'), icon: Cpu },
    { href: '/projects', label: t('projects'), icon: Code },
    { href: '/articles', label: t('articles'), icon: FileText },
    { href: '/talks', label: t('talks'), icon: MicVocal },
    { href: '/awards', label: t('awards'), icon: Trophy },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className='flex items-center gap-2 px-2 py-3'>
          <Image
            src='/profile.webp'
            alt='Logo'
            width={24}
            height={24}
            className='rounded-full'
          />
          <span className='font-semibold'>Takumi Mizuno</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link prefetch={true} href={item.href}>
                        <Icon className='h-4 w-4' />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='flex flex-col gap-2 p-2'>
          <div className='flex items-center justify-end'>
            <LocaleSwitcher />
            <ThemeToggle />
            <Button variant='ghost' size='icon' asChild>
              <Link prefetch={true} href="https://github.com/takuuum" target='_blank'>
                <FaGithub className='h-4 w-4' />
              </Link>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <Link prefetch={true} href="https://note.com/mizutaku0705" target='_blank'>
                <Image src='/note.webp' alt='note' width={24} height={24} className='rounded-full dark:invert' />
              </Link>
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
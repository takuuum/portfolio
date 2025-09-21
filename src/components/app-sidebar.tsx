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

  const linkItems = [
    { href: 'https://github.com/takuuum', label: t('github'), icon: FaGithub },
    { href: 'https://note.com/mizutaku0705', label: t('note'), icon: StickyNote },
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
                      <Link href={item.href}>
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
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Links</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {linkItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href} target='_blank'>
                        <Icon className='h-4 w-4' />
                        <span>{item.label}</span>
                        <ExternalLink className='h-4 w-4' />
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
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
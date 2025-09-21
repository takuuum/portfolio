'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

export function AppSidebar() {
  const pathname = usePathname();

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/skills', label: 'Skills', icon: Cpu },
    { href: '/projects', label: 'Projects', icon: Code },
    { href: '/articles', label: 'Articles', icon: FileText },
    { href: '/talks', label: 'Event Talks', icon: MicVocal },
    { href: '/awards', label: 'Awards & Certifications', icon: Trophy },
  ];

  const linkItems = [
    { href: 'https://github.com/takuuum', label: 'Github', icon: FaGithub },
    { href: 'https://note.com/mizutaku0705', label: 'note', icon: StickyNote },
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
            className='dark:invert rounded-full'
          />
          <span className='font-semibold'>Portfolio</span>
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
        <div className='flex items-center justify-between px-2 py-1'>
          <span className='text-xs text-muted-foreground'></span>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
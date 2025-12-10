import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  colorClass: string;
}

export interface NavLink {
  label: string;
  href: string;
}
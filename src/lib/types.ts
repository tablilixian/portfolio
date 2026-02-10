export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'mobile' | 'animation' | 'design';
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'animation';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'work' | 'education';
}

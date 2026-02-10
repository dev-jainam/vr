
export interface Service {
  id: string;
  title: string;
  description: string;
  intro: string;
  offers: string[];
  benefits: string[];
  icon: string;
  imageUrl?: string;
  details?: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface NavigationItem {
  label: string;
  path: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  summary: string;
  bio?: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
  content?: {
    sections: {
      title: string;
      text: string;
    }[];
    keyTakeaways?: string[];
  };
}

export interface VaultState {
  isReady: boolean;
  progress: number;
  localMap: Record<string, string>;
}

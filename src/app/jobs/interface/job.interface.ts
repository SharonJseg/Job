export interface Requirements {
  content: string;
  items: string[];
}

export interface Role {
  content: string;
  items: string[];
}

export interface IJob {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Role;
  isApplied?: false;
}

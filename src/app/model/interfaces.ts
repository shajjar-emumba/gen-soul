export interface Solution {
  id: string;
  title: string;
  short_desc: string;
  tags: string[];
  long_desc: string;
  how_it_works: string[];
  features: string[];
  try_now_url: string;
  avatar: string;
  path: string;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  company: string;
  country: string;
}

export interface FormConfig {
  title: string;
  ctaText: string;
}

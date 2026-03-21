export type Template = {
  label: string;
  subject: string;
  level: string;
  topic: string;
};

export type Feature = {
  title: string;
  description: string;
  badge?: string;
};

export type Plan = {
  name: string;
  subtitle: string;
  price: string;
  priceNote?: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  badge?: string;
  current?: boolean;
};
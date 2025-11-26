export interface PricingPlan {
  id: string;
  duration: string;
  price: number;
  oldPrice: number;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  location: string;
  date: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

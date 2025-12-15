import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
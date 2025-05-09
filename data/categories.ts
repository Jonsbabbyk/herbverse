import React from 'react';
import { Heart, Brain, Bed, Leaf, Sun, Utensils } from 'lucide-react-native';
import { COLORS } from '@/constants/theme';

export const categoryData = [
  {
    id: 'stress',
    name: 'Stress Relief',
    icon: () => React.createElement(Heart, { size: 16, color: COLORS.accent }),
  },
  {
    id: 'sleep',
    name: 'Sleep',
    icon: () => React.createElement(Bed, { size: 16, color: COLORS.accent }),
  },
  {
    id: 'focus',
    name: 'Focus',
    icon: () => React.createElement(Brain, { size: 16, color: COLORS.accent }),
  },
  {
    id: 'energy',
    name: 'Energy',
    icon: () => React.createElement(Sun, { size: 16, color: COLORS.accent }),
  },
  {
    id: 'digestion',
    name: 'Digestion',
    icon: () => React.createElement(Utensils, { size: 16, color: COLORS.accent }),
  },
  {
    id: 'immunity',
    name: 'Immunity',
    icon: () => React.createElement(Leaf, { size: 16, color: COLORS.accent }),
  },
];

import { Home, BarChart, CreditCard, Activity, Settings } from 'lucide-react';

export const Sidebar = () => (
  <div className="sidebar">
    {[Home, BarChart, CreditCard, Activity, Settings].map((Icon, idx) => (
      <Icon key={idx} className="sidebar-icon" />
    ))}
  </div>
);
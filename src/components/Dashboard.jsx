import { useState } from 'react';
import { 
  Shield, 
  Map as MapIcon, 
  LayoutGrid, 
  Activity, 
  User, 
  Bell,
  Menu,
  AlertCircle
} from 'lucide-react';

// Sub-components
import MapTab from './tabs/MapTab';
import FeedTab from './tabs/FeedTab';
import AuditTab from './tabs/AuditTab';
import ProfileTab from './tabs/ProfileTab';

// Modals
import AIVisionModal from './AIVisionModal';
import SOSModal from './SOSModal';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [isAIVisionOpen, setIsAIVisionOpen] = useState(false);
  const [isSOSOpen, setIsSOSOpen] = useState(false);

  const tabs = [
    { id: 'map', icon: MapIcon, label: 'Safety Map' },
    { id: 'feed', icon: Activity, label: 'Feed' },
    { id: 'audit', icon: Shield, label: 'Audit' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-950">
      {/* Fixed Header */}
      <header className="flex-shrink-0 p-4 pt-6 flex items-center justify-between border-b border-white/5 bg-slate-950/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-mint rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">PROJECT SENTINEL</h1>
            <p className="text-[10px] text-mint font-medium flex items-center gap-1 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse" /> Live Protection
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 glass-card border-none hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5 text-white/70" />
          </button>
          <button className="p-2 glass-card border-none hover:bg-white/10 transition-colors">
            <Menu className="w-5 h-5 text-white/70" />
          </button>
        </div>
      </header>

      {/* Scrollable Content Region */}
      <main className="flex-1 scroll-region p-4 md:p-6 pb-32">
        <div className="h-full">
          {activeTab === 'map' && <MapTab onTriggerSOS={() => setIsSOSOpen(true)} />}
          {activeTab === 'feed' && <FeedTab />}
          {activeTab === 'audit' && <AuditTab onStartAIVision={() => setIsAIVisionOpen(true)} />}
          {activeTab === 'profile' && <ProfileTab />}
        </div>
      </main>

      {/* Modals */}
      <AIVisionModal 
        isOpen={isAIVisionOpen} 
        onClose={() => setIsAIVisionOpen(false)} 
      />
      
      <SOSModal 
        isOpen={isSOSOpen}
        onConfirm={() => {
            console.log("SOS TRIGGERED");
            setIsSOSOpen(false);
        }}
        onCancel={() => setIsSOSOpen(false)}
      />

      {/* Fixed Bottom Navigation */}
      <nav className="flex-shrink-0 absolute bottom-0 inset-x-0 bg-slate-900/40 backdrop-blur-2xl border-t border-white/5 px-6 pt-4 pb-8 flex items-center justify-between z-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all ${
              activeTab === tab.id ? 'text-mint' : 'text-white/40 hover:text-white/60'
            }`}
          >
            <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'scale-110' : ''}`} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Dashboard;

import { User, Mail, Phone, MapPin, Award, Star, TrendingUp, Settings } from 'lucide-react';

const ProfileTab = ({ user = { name: 'Subhasree Majumder', email: 'calculussuzy@gmail.com', city: 'Kolkata' } }) => {
  const stats = [
    { label: 'Safety Index', value: 'Elite', icon: Award, color: 'text-mint' },
    { label: 'Shield Points', value: '1,240', icon: Star, color: 'text-yellow-500' },
    { label: 'Audits Done', value: '42', icon: TrendingUp, color: 'text-blue-500' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Profile Header */}
      <div className="flex flex-col items-center py-4 space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-mint to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-4xl font-bold overflow-hidden">
               {user.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-mint border-4 border-slate-950 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircleIcon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">{user.name}</h2>
          <p className="text-white/40 text-sm">{user.email}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-3 flex flex-col items-center text-center space-y-2">
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
            <div className="space-y-0.5">
              <div className="text-xs font-bold">{stat.value}</div>
              <div className="text-[8px] text-white/30 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Personal Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Settings className="w-4 h-4 text-mint" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">Identity & Location</h3>
        </div>
        
        <div className="glass-card divide-y divide-white/5">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-white/40" />
              <div className="text-sm font-medium">+91 98765 00000</div>
            </div>
            <button className="text-[10px] font-bold text-mint uppercase tracking-widest">Edit</button>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-white/40" />
              <div className="text-sm font-medium">{user.city}</div>
            </div>
            <button className="text-[10px] font-bold text-mint uppercase tracking-widest">Edit</button>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-white/40" />
              <div className="text-sm font-medium">{user.email}</div>
            </div>
            <button className="text-[10px] font-bold text-mint uppercase tracking-widest">Verify</button>
          </div>
        </div>
      </div>

      {/* Logout */}
      <button className="w-full py-4 text-red-500/60 font-medium text-sm hover:text-red-500 hover:bg-red-500/5 transition-all rounded-2xl">
        Sign Out From Sentinel
      </button>
    </div>
  );
};

// Simple check circle helper
function CheckCircleIcon(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default ProfileTab;

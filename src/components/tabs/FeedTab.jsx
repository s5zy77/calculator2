import { Activity, ShieldCheck, MapPin, Clock } from 'lucide-react';

const FeedTab = () => {
  const feedItems = [
    {
      id: 1,
      user: 'Priya S.',
      initials: 'PS',
      text: 'Suspicious activity reported near Jadavpur Station. Stay alert.',
      tag: 'Security Alert',
      time: '12 min ago',
      area: 'Jadavpur',
      type: 'alert'
    },
    {
      id: 2,
      user: 'Amit K.',
      initials: 'AK',
      text: 'Street lighting improved in Behala area. Feeling safer now.',
      tag: 'Update',
      time: '1 hr ago',
      area: 'Behala',
      type: 'verify'
    },
    {
      id: 3,
      user: 'Rahul D.',
      initials: 'RD',
      text: 'Police patrolling active near Park Street during peak hours.',
      tag: 'Safe Zone',
      time: '3 hr ago',
      area: 'Park Street',
      type: 'safe'
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-xl font-bold">Community Feed</h2>
        <div className="flex items-center gap-1 text-[10px] font-bold text-mint uppercase tracking-widest bg-mint/10 px-2 py-1 rounded-full border border-mint/20">
          <Activity className="w-3 h-3" /> Live
        </div>
      </div>

      <div className="space-y-4">
        {feedItems.map((item) => (
          <div key={item.id} className="glass-card p-4 flex gap-4">
            <div className={`
              w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-lg
              ${item.type === 'alert' ? 'bg-red-500/20 text-red-500' : ''}
              ${item.type === 'verify' ? 'bg-mint/20 text-mint' : ''}
              ${item.type === 'safe' ? 'bg-blue-500/20 text-blue-500' : ''}
            `}>
              {item.initials}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <span className={`
                  text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border
                  ${item.type === 'alert' ? 'bg-red-500/10 text-red-400 border-red-500/20' : ''}
                  ${item.type === 'verify' ? 'bg-mint/10 text-mint-light border-mint/20' : ''}
                  ${item.type === 'safe' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : ''}
                `}>
                  {item.tag}
                </span>
                <div className="flex items-center gap-1 text-[10px] text-white/40">
                  <Clock className="w-3 h-3" /> {item.time}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/80">{item.text}</p>
              <div className="flex items-center gap-1 text-[10px] text-white/30 font-medium">
                <MapPin className="w-3 h-3" /> {item.area}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-4 glass-card border-dashed border-white/10 text-white/40 text-xs font-bold uppercase tracking-widest hover:text-white/60 hover:bg-white/5 transition-all">
        Load More Intel
      </button>
    </div>
  );
};

export default FeedTab;

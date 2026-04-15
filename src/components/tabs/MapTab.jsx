import { AlertTriangle, Navigation, MapPin, Shield } from 'lucide-react';

const MapTab = ({ onTriggerSOS }) => {
  return (
    <div className="flex flex-col h-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Map Header / Location Card */}
      <div className="glass-card p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-mint/20 rounded-xl flex items-center justify-center">
            <MapPin className="w-5 h-5 text-mint" />
          </div>
          <div>
            <div className="text-xs text-white/40 font-bold uppercase tracking-widest">Active Protection</div>
            <div className="text-sm font-bold">Kolkata, West Bengal</div>
          </div>
        </div>
        <button className="p-2 glass-card bg-mint text-white border-none shadow-lg shadow-mint/20">
          <Navigation className="w-4 h-4" />
        </button>
      </div>

      {/* Map View Placeholder */}
      <div className="flex-1 relative glass-card overflow-hidden min-h-[300px]">
        {/* Real Leaflet Map would render inside here */}
        <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-center p-8 space-y-4 opacity-70">
          <div className="w-16 h-16 border-4 border-mint/20 border-t-mint rounded-full animate-spin" />
          <p className="text-sm font-medium text-white/50">Initialising Satellite Protection Layer...</p>
        </div>
        
        {/* Floating Map Actions */}
        <div className="absolute top-4 right-4 space-y-2">
            <button className="p-3 glass-card hover:bg-white/10 transition-colors backdrop-blur-md">
                <Shield className="w-5 h-5 text-mint" />
            </button>
        </div>
      </div>

      {/* Emergency Quick Actions (The part the user wanted responsive) */}
      <div className="space-y-4 pt-2">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 px-1">Rapid Dispatch</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="glass-card p-4 flex flex-col items-center gap-3 border-orange-500/20 hover:bg-orange-500/5 transition-all group">
            <div className="p-3 bg-orange-500/10 rounded-2xl group-hover:scale-110 transition-transform">
              <Navigation className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Safe Route</span>
          </button>
          <button className="glass-card p-4 flex flex-col items-center gap-3 border-blue-500/20 hover:bg-blue-500/5 transition-all group">
            <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">Nearby Police</span>
          </button>
        </div>

        {/* SOS BUTTON (MUST NOT CLIP) */}
        <button 
          onClick={onTriggerSOS}
          className="btn-primary w-full py-5 text-xl font-black uppercase tracking-[0.1em] shadow-2xl shadow-red-500/40 bg-red-600 hover:bg-red-700 border-none animate-pulse"
        >
            <AlertTriangle className="w-7 h-7" />
            TRIGGER SOS
        </button>
      </div>
    </div>
  );
};

export default MapTab;

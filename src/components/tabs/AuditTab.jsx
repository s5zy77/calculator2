import { useState } from 'react';
import { Camera, ShieldAlert, CheckCircle2, Sliders } from 'lucide-react';

const AuditTab = ({ onStartAIVision }) => {
  const [ratings, setRatings] = useState({
    lighting: 50,
    openness: 50,
    visibility: 50,
    people: 50,
    security: 50,
  });

  const auditItems = [
    { id: 'lighting', label: 'Lighting', description: 'Visibility and street lights' },
    { id: 'openness', label: 'Openness', description: 'Wide view of surroundings' },
    { id: 'visibility', label: 'Visibility', description: 'Lines of sight' },
    { id: 'people', label: 'People', description: 'Crowd density and presence' },
    { id: 'security', label: 'Security', description: 'Fencing or surveillance' },
  ];

  const handleSliderChange = (id, value) => {
    setRatings(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* AI Vision Header */}
      <div className="glass-card overflow-hidden">
        <div className="bg-gradient-to-r from-mint/20 to-blue-500/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-mint/10 rounded-2xl border border-mint/20">
              <Camera className="w-6 h-6 text-mint" />
            </div>
            <div className="px-3 py-1 bg-mint/10 rounded-full border border-mint/20 text-[10px] font-bold text-mint uppercase tracking-widest">
              AI Powered
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Smart Safety Audit</h2>
          <p className="text-sm text-white/50 mb-6 max-w-[280px]">
            Use AI Vision to automatically analyze your environment and log evidence.
          </p>
          <button 
            onClick={onStartAIVision}
            className="btn-primary w-full py-4 text-lg shadow-lg shadow-mint/20 group"
          >
            <Camera className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Launch AI Vision
          </button>
        </div>
      </div>

      {/* Manual Audit Sliders */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 px-1">
          <Sliders className="w-4 h-4 text-mint" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">Manual Parameters</h3>
        </div>
        
        {auditItems.map((item) => (
          <div key={item.id} className="glass-card p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-semibold">{item.label}</h4>
                <p className="text-[10px] text-white/40">{item.description}</p>
              </div>
              <div className="text-sm font-mono font-bold text-mint">{ratings[item.id]}%</div>
            </div>
            <input 
              type="range"
              min="0"
              max="100"
              value={ratings[item.id]}
              onChange={(e) => handleSliderChange(item.id, parseInt(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-mint"
            />
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button className="btn-primary w-full py-4 mb-4">
        <CheckCircle2 className="w-5 h-5" /> Submit Audit Report
      </button>

      <div className="flex items-center justify-center gap-2 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] pt-4 pb-8">
        <CheckCircle2 className="w-3 h-3" />
        Verified Audit Protocol Active
      </div>
    </div>
  );
};

export default AuditTab;

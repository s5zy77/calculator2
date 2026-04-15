import { AlertTriangle, ShieldCheck, X } from 'lucide-react';

const SOSModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-red-600/20 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="glass-card w-full max-w-sm overflow-hidden flex flex-col shadow-2xl border-red-500/30 bg-slate-950/90">
        <div className="p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mx-auto border border-red-600/20 animate-pulse">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Confirm SOS dispatch?</h2>
            <p className="text-sm text-white/50 leading-relaxed">
              This will immediately notify your <span className="text-white font-bold">Trusted Circle</span> and share your <span className="text-mint font-bold">real-time GPS location</span>.
            </p>
          </div>

          <div className="space-y-3">
            <button 
                onClick={onConfirm}
                className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-black text-xl rounded-2xl shadow-xl shadow-red-600/30 transition-all active:scale-95 uppercase tracking-widest"
            >
              Confirm SOS
            </button>
            <button 
                onClick={onCancel}
                className="w-full py-4 bg-white/5 hover:bg-white/10 text-white/60 font-bold rounded-2xl transition-all uppercase tracking-widest text-xs"
            >
              Cancel Request
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3 h-3" />
            Secure Emergency Protocol
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSModal;

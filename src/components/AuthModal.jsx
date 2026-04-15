import { useState } from 'react';
import { Mail, Lock, User, LogIn, ChevronRight, X, ShieldCheck } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, mode: initialMode = 'signin' }) => {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass-card w-full max-w-sm overflow-hidden flex flex-col shadow-2xl border-white/10">
        {/* Header */}
        <div className="p-6 text-center relative border-b border-white/5">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full transition-colors">
            <X className="w-5 h-5 text-white/30" />
          </button>
          <div className="w-12 h-12 bg-mint/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-mint/20">
            <ShieldCheck className="w-6 h-6 text-mint" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-white/40 text-xs mt-1">Access Project Sentinel Protection</p>
        </div>

        {/* Tabs */}
        <div className="flex p-1 bg-white/5 mx-6 mt-6 rounded-xl border border-white/5">
          <button 
            onClick={() => setMode('signin')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mode === 'signin' ? 'bg-white/10 text-white' : 'text-white/30'}`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mode === 'signup' ? 'bg-white/10 text-white' : 'text-white/30'}`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="p-6 pb-8 space-y-4">
          {mode === 'signup' && (
            <div className="space-y-1.5 anim-slide-in">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 px-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-mint transition-colors" />
                <input 
                  type="text" 
                  placeholder="Subhasree Majumder" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-mint/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5 anim-slide-in">
            <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 px-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-mint transition-colors" />
              <input 
                type="email" 
                placeholder="calculussuzy@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-mint/50 focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5 anim-slide-in">
            <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 px-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-mint transition-colors" />
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-mint/50 focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          <button className="btn-primary w-full py-4 mt-4 shadow-lg shadow-mint/20">
            {mode === 'signin' ? 'Authenticate' : 'Register Service'}
            <LogIn className="w-5 h-5 ml-2" />
          </button>

          <div className="pt-4 flex flex-col items-center gap-4">
            <button className="text-[10px] font-bold text-white/20 hover:text-white/40 uppercase tracking-widest transition-colors">
              Forgot Access Credentials?
            </button>
            <div className="flex items-center gap-2 text-[10px] text-white/10 pointer-events-none uppercase tracking-widest font-bold">
              <Lock className="w-3 h-3" />
              256-bit AES End-to-End Encryption
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

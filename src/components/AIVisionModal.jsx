import { useState, useRef, useEffect } from 'react';
import { Camera, X, Scan, CheckCircle2, AlertCircle } from 'lucide-react';

const AIVisionModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('Initializing camera...');
  const [isCapturing, setIsCapturing] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [isOpen]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' }, 
        audio: false 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStatus('Engine Ready — Scan Scene');
      }
    } catch (err) {
      console.error('Camera error:', err);
      setStatus('Demo Mode — Camera Restricted');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const handleCapture = () => {
    setIsScanning(true);
    setStatus('Analyzing Scene Neural Weights...');
    
    setTimeout(() => {
      setIsScanning(false);
      setIsCapturing(true);
      setStatus('Evidence Logged Successfully');
      
      setTimeout(() => {
        setIsCapturing(false);
        onClose();
      }, 1500);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="glass-card w-full max-w-sm overflow-hidden flex flex-col h-[500px] shadow-2xl shadow-mint/20 border-mint/20">
        <div className="p-4 flex items-center justify-between border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-mint" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Sentinel AI Vision</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-5 h-5 text-white/50" />
          </button>
        </div>

        <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            muted 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          
          {/* Scan Animation Overlay */}
          {isScanning && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-x-0 h-1 bg-mint/50 shadow-[0_0_20px_#1D9E75] animate-scan-beam" />
              <div className="absolute inset-0 bg-mint/5 opacity-20" />
            </div>
          )}

          {/* Status HUD */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between">
              <div className="w-4 h-4 border-t-2 border-l-2 border-mint/40" />
              <div className="w-4 h-4 border-t-2 border-r-2 border-mint/40" />
            </div>
            
            <div className="flex flex-col items-center gap-2">
              {isCapturing ? (
                <CheckCircle2 className="w-12 h-12 text-mint animate-in zoom-in duration-300" />
              ) : (
                <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isScanning ? 'bg-mint animate-pulse' : 'bg-white/20'}`} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{status}</span>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <div className="w-4 h-4 border-b-2 border-l-2 border-mint/40" />
              <div className="w-4 h-4 border-b-2 border-r-2 border-mint/40" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-900">
          <button 
            disabled={isScanning || isCapturing}
            onClick={handleInput}
            className={`
              btn-primary w-full py-4 text-lg font-bold
              ${isScanning || isCapturing ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={handleCapture}
          >
            {isScanning ? <Scan className="w-6 h-6 animate-spin" /> : 'Log Scene Evidence'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIVisionModal;

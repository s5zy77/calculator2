import { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import Dashboard from './components/Dashboard';

function App() {
  const [view, setView] = useState('calculator'); // 'calculator' or 'dashboard'
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    // Smooth transition logic could go here
    setTimeout(() => setView('dashboard'), 100);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-900 lg:p-4">
      <div className="phone-container">
        {view === 'calculator' ? (
          <Calculator onUnlock={handleUnlock} />
        ) : (
          <Dashboard />
        )}
      </div>
    </main>
  );
}

export default App;

import { useState, useEffect } from 'react';

const Calculator = ({ onUnlock }) => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [lastInput, setLastInput] = useState('');

  const buttons = [
    { label: 'C', type: 'clear' },
    { label: '±', type: 'operator' },
    { label: '%', type: 'operator' },
    { label: '÷', type: 'operator', value: '/' },
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '×', type: 'operator', value: '*' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '−', type: 'operator', value: '-' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+', type: 'operator', value: '+' },
    { label: '0', type: 'number', span: 2 },
    { label: '.', type: 'number' },
    { label: '=', type: 'equals' },
  ];

  const handleInput = (btn) => {
    if (btn.type === 'clear') {
      setDisplay('0');
      setExpression('');
      setLastInput('');
      return;
    }

    if (btn.type === 'number') {
      const nextInput = lastInput + btn.label;
      setLastInput(nextInput);
      setDisplay(display === '0' ? btn.label : display + btn.label);
      return;
    }

    if (btn.type === 'operator') {
      setExpression(display + ' ' + (btn.value || btn.label) + ' ');
      setDisplay('0');
      setLastInput('');
      return;
    }

    if (btn.type === 'equals') {
      // Check for secret unlock code
      if (display === '101' || display === '10101') {
        onUnlock();
        return;
      }

      try {
        // Simple evaluation for the calculator demo
        const result = eval(expression + display);
        setDisplay(String(result));
        setExpression('');
        setLastInput('');
      } catch (e) {
        setDisplay('Error');
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 p-6">
      <div className="flex-1 flex flex-col justify-end items-end pb-8">
        <div className="text-white/40 text-xl font-mono mb-2">{expression}</div>
        <div className="text-white text-7xl font-light tracking-tight truncate w-full text-right">
          {display}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleInput(btn)}
            className={`
              calc-button 
              ${btn.span === 2 ? 'col-span-2 aspect-auto' : ''}
              ${btn.type === 'operator' ? 'text-mint' : ''}
              ${btn.type === 'equals' ? 'bg-mint hover:bg-mint-dark text-white' : ''}
              ${btn.type === 'clear' ? 'text-red-400' : ''}
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-white/10 text-[10px] uppercase tracking-[0.2em]">
          Secure Calculation Engine v4.0.2
        </p>
      </div>
    </div>
  );
};

export default Calculator;

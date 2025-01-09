'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';

type Operator = '+' | '-' | '*' | '/';

interface CalculatorState {
  currentInput: string;
  previousInput: string;
  operator: Operator | null;
  result: string;
}

const Calculator = () => {
  const [state, setState] = useState<CalculatorState>({
    currentInput: '',
    previousInput: '',
    operator: null,
    result: '',
  });

  const handleNumberClick = (number: string) => {
    if (number === '.' && state.currentInput.includes('.')) return;

    setState((prevState) => ({
      ...prevState,
      currentInput: prevState.currentInput + number,
    }));
  };

  const handleOperatorClick = (operator: Operator) => {
    setState((prevState) => ({
      ...prevState,
      previousInput: prevState.currentInput || prevState.result,
      currentInput: '',
      operator: operator,
    }));
  };

  const handleClearClick = () => {
    setState({
      currentInput: '',
      previousInput: '',
      operator: null,
      result: '',
    });
  };

  const handleEqualClick = () => {

    let calculationResult: string;
    
    const prev = parseFloat(state.previousInput);
    const current = parseFloat(state.currentInput);
    
    if (state.operator === '/' && current === 0) {
      calculationResult = 'Error';  
    } else {
      switch (state.operator) {
        case '+':
          calculationResult = (prev + current).toString();
          break;
        case '-':
          calculationResult = (prev - current).toString();
          break;
        case '*':
          calculationResult = (prev * current).toString();
          break;
        case '/':
          calculationResult = (prev / current).toString();
          break;
        default:
          calculationResult = '';
      }
    }

    setState((prevState) => ({
      ...prevState,
      result: calculationResult,
      previousInput: '',
      currentInput: '',
      operator: null,
    }));
  };

  return (
    <div className="container">
      <div className="display">
        <div className="result">
          {state.result || state.currentInput || '0'}
        </div>
      </div>
      <div className="buttonGrid">
        <Button label="C" onClick={() => handleClearClick()} />
        <Button label="/" onClick={() => handleOperatorClick('/')} />
        <Button label="*" onClick={() => handleOperatorClick('*')} />
        <Button label="-" onClick={() => handleOperatorClick('-')} />

        <Button label="7" onClick={() => handleNumberClick('7')} />
        <Button label="8" onClick={() => handleNumberClick('8')} />
        <Button label="9" onClick={() => handleNumberClick('9')} />
        <Button label="+" onClick={() => handleOperatorClick('+')} />

        <Button label="4" onClick={() => handleNumberClick('4')} />
        <Button label="5" onClick={() => handleNumberClick('5')} />
        <Button label="6" onClick={() => handleNumberClick('6')} />
        <Button label="=" onClick={() => handleEqualClick()} />

        <Button label="1" onClick={() => handleNumberClick('1')} />
        <Button label="2" onClick={() => handleNumberClick('2')} />
        <Button label="3" onClick={() => handleNumberClick('3')} />
        <Button label="0" onClick={() => handleNumberClick('0')} />
      </div>
      <Button label="Clear" className="fullButton" onClick={() => handleClearClick()} />
    </div>
  );
};

export default Calculator;

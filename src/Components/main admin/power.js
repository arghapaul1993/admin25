import React, { useState } from 'react';

const OptionButton = () => {
  const [optionA, setOptionA] = useState('off');
  const [optionB, setOptionB] = useState('off');

  const handleToggleOptionA = () => {
    const newValue = optionA === 'on' ? 'off' : 'on';
    setOptionA(newValue);
  };

  const handleToggleOptionB = () => {
    const newValue = optionB === 'on' ? 'off' : 'on';
    setOptionB(newValue);
  };

  return (
    <div>
      <button onClick={handleToggleOptionA}>
        Option A: {optionA}
      </button>
      <button onClick={handleToggleOptionB}>
        Option B: {optionB}
      </button>
    </div>
  );
};

export default OptionButton;

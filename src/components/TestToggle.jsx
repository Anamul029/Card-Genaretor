import React, { useState, useEffect } from 'react';

const CardEffectNames = () => {
  const [cardRank, setCardRank] = useState('');
  const [effectNames, setEffectNames] = useState(['']); // Start with one empty effect name
  const maxLength = 20; // Set the maximum length for effect names based on available space

  // Function to dynamically change the number of effect names based on card rank
  useEffect(() => {
    if (cardRank === 'R1' || cardRank === 'Runes') {
      setEffectNames(['']); // 1 effect name for R1 or Runes
    } else if (cardRank === 'R2') {
      setEffectNames(['', '']); // 2 effect names for R2
    } else if (cardRank === 'R3') {
      setEffectNames(['', '', '']); // 3 effect names for R3
    }
  }, [cardRank]);

  // Function to handle changes in effect names
  const handleEffectNameChange = (index, value) => {
    if (value.length <= maxLength) { // Limit input length
      const newEffectNames = [...effectNames];
      newEffectNames[index] = value;
      setEffectNames(newEffectNames);
    }
  };

  return (
    <div className='h-96 mx-auto text-black'>
      <label>Card Rank:</label>
      <select value={cardRank} onChange={(e) => setCardRank(e.target.value)}>
        <option value="">Select Card Rank</option>
        <option value="R1">R1</option>
        <option value="R2">R2</option>
        <option value="R3">R3</option>
        <option value="Runes">Runes</option>
      </select>

      {effectNames.map((effect, index) => (
        <div key={index}>
          <label>Effect Name {index + 1}:</label>
          <input
            type="text"
            value={effect}
            onChange={(e) => handleEffectNameChange(index, e.target.value)}
            maxLength={maxLength} // Enforce max length in the input field
          />
          <p>{effect.length}/{maxLength} characters</p>
        </div>
      ))}
    </div>
  );
};

export default CardEffectNames;

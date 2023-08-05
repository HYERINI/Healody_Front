import React from 'react';
import SelectPerson from './SelectPerson';

const SelectComponent = () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleOptionSelect = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
  };

  return (
    <div>
      <SelectPerson options={options} onSelect={handleOptionSelect} />
    </div>
  );
};

export default SelectComponent;

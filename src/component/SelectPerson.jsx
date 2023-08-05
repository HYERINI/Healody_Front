import React, { useState } from 'react';
import styled from 'styled-components';

const OptionWrapper = styled.div`
  display: flex;
  
  margin: 5px;
  cursor: pointer;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  margin-right: 5px;
`;

const SelectPerson = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      {options.map((option) => (
        <OptionWrapper key={option.value} onClick={() => setSelectedOption(option.value)}>
          <RadioInput
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <span>{option.label}</span>
        </OptionWrapper>
      ))}
    </div>
  );
};

export default SelectPerson;

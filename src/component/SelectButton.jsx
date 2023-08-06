import React, { useState } from 'react';

const SelectButton = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  const styles={
    button: {
        width: "20px",
        height: "20px",
        backgroundColor: "black",
        marginLeft: "20px",
    },
    cont: {
        display: "flex",
        justifyContnet: "center",
        width: "370px",
    }
  }

 
  return (
    <div style={styles.cont}>
      {options.map((option) => (
        <label key={option}>
          <input
            style={styles.button}
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default SelectButton;

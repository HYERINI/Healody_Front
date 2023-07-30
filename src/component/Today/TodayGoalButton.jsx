import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  background-color: white;
  border: 1px solid #B6B6B5;
  padding: 10px 15px;
  border-radius: 15px;
  color: ${props => (props.isActive ? '#000' : '#B6B6B5')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
  margin-right: 10px;
  position: relative;

  /* Style for the input field inside the button */
  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 13px;
    color: #B6B6B5;
    padding: 0;
    margin: 0;
    width: ${props => (props.isInputVisible ? '100%' : 'auto')};
    max-width: ${props => (props.isInputVisible ? '100px' : 'none')};
    display: ${props => (props.isInputVisible ? 'block' : 'none')};
  }
`;

const TodayGoalButton = ({ content , isActive}) => {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        if (content === '직접입력') {
            setIsInputVisible(true);
        }
    };

    const handleBlur = () => {
        setIsInputVisible(false);
    };

    return (
        <Button isInputVisible={isInputVisible} onClick={handleButtonClick}>
            {isInputVisible ? (
                <input
                    ref={inputRef}
                    autoFocus
                    onBlur={handleBlur}
                    placeholder="직접입력"
                />
            ) : (
                content
            )}
        </Button>
    );
};

export default TodayGoalButton;

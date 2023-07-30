import React, { useState } from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`
  position: relative;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DropDownButton = styled.button`
  margin: 0 auto;
  background-color: #6F02DB;
  border: 0;
  border-radius: 20px;
  padding: 5px 10px;
  box-sizing: border-box;
  color: white;
  width: 62px;
  text-align: center;
`;

const DropDownListContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 41%;
  background-color: white;
  border: 1px solid #B6B6B5;
  border-radius: 5px;
  width: 67px;
  padding: 0;
  list-style: none;
  margin: 0;
  display: ${props => (props.open ? 'block' : 'none')};
`;

const DropDownItem = styled.li`
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default function TodayDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('병원'); // 기본값을 '병원'으로 설정

    const handleDropDownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item); // 선택된 아이템의 값을 상태로 설정
        setIsOpen(false);
    };

    return (
        <DropDownContainer>
            <DropDownButton onClick={handleDropDownClick}>
                {selectedItem}
            </DropDownButton>
            <DropDownListContainer open={isOpen}>
                <DropDownItem onClick={() => handleItemClick('병원')}>병원</DropDownItem>
                <DropDownItem onClick={() => handleItemClick('약')}>약</DropDownItem>
                <DropDownItem onClick={() => handleItemClick('증상')}>증상</DropDownItem>
            </DropDownListContainer>
        </DropDownContainer>
    );
}

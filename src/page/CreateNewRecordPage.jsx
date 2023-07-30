import React, { useState } from 'react';
import styled from 'styled-components';
import plusBtn from './../img/TodayPlusBt.svg';
import TodayHeader from './../component/Today/TodayHeader';
import TodayNav from './../component/Today/TodayNav';
import TodayTitle from './../component/Today/TodayTitle';
import TodayGoalTitle from "../component/Today/TodayGoalTitle";
import TodayDropDown from "../component/Today/TodayDropDown";
import TodayRecordTypeButton from "../component/Today/TodayRecordTypeButton";
import TodayButton from "../component/Today/TodayButton";
import TodayMakeGoal from './../component/Today/TodayMakeGoal';

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  position: relative;
`;

const TodayListWrap = styled.div`
  width: 330px;
  margin: 0 auto 15px auto;
  background-color: #F5F5F5;
  border-radius: 10px;
  border: 0.5px solid #B6B6B5;
  padding: 15px 10px;
  box-sizing: border-box;
`

const TodayTypeListWrap = styled.div`
  width: 330px;
  margin: 15px auto;
  background-color: #F5F5F5;
  border-radius: 10px;
  border: 0.5px solid #B6B6B5;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TodayDateInputWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
`

const TodayInputWrap = styled.div`
  width: 100%;
`

const TodayDateInput = styled.input`
  background-color: white;
  border: 1px solid #B6B6B5;
  border-radius: 15px;
  margin-right: 5px;
  padding: 2px 4px;
  box-sizing: border-box;
`

const TodayTimeInput = styled.input`
  background-color: white;
  border: 1px solid #B6B6B5;
  border-radius: 15px;
  padding: 2px 4px;
  box-sizing: border-box;
`

const TodayTitleInput = styled.input`
  width: 100%;
  background-color: white;
  border: 1px solid #B6B6B5;
  border-radius: 15px;
  padding: 5px 10px;
  box-sizing: border-box;
  color: #B6B6B5;
`

const TodayMemoInput = styled.textarea`
  width: 100%;
  background-color: white;
  border: 1px solid #B6B6B5;
  border-radius: 15px;
  padding: 5px 10px;
  box-sizing: border-box;
  line-height: 1.5;
  color: #B6B6B5;
  resize: vertical; 
  min-height: 50px; 
`;

const TodayMedicWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TodayMedicAddBt = styled.img`
`

const ChangeContainer = styled.div`
  margin-bottom: 80px;
`

function CreateNewRecordPage(){
    const [selectedDropDownValue, setSelectedDropDownValue] = useState('병원');

    return(
        <Container>
            <TodayHeader/>
            <TodayNav />
            <TodayTitle content="오늘 나의 건강 관리하기"/>
            <TodayListWrap>
                <TodayGoalTitle content="날짜" width="65" />
                <TodayDateInputWrap>
                    <TodayDateInput type="date" />
                    <TodayTimeInput type="time" />
                </TodayDateInputWrap>
            </TodayListWrap>
            <TodayListWrap>
                <TodayGoalTitle content="제목" width="65" />
                <TodayInputWrap>
                    <TodayTitleInput type="text" placeholder='제목을 입력하세요.'/>
                </TodayInputWrap>
            </TodayListWrap>
            <TodayDropDown
                selectedValue={selectedDropDownValue}
                options={['병원', '약', '증상']}
                onChange={(value) => setSelectedDropDownValue(value)}
            />
            {selectedDropDownValue === '병원' && (
                <ChangeContainer>
                    <TodayTypeListWrap>
                        <TodayRecordTypeButton content="외래" width="70" />
                        <TodayRecordTypeButton content="입원" width="70" />
                        <TodayRecordTypeButton content="응급" width="70" />
                    </TodayTypeListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="병원*" width="70" />
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='병원 이름을 입력하세요.'/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="검사, 시술, 수술" width="120" />
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='검사, 시술, 수술에 대해 입력하세요.'/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="메모" width="70" />
                        <TodayInputWrap>
                            <TodayMemoInput type="text" placeholder='방문 전에는 궁금한 점을 메모하고, 이후에는 진료 내용을 남겨보세요'/>
                        </TodayInputWrap>
                    </TodayListWrap>
                </ChangeContainer>
            )}
            {selectedDropDownValue === '약' && (
                <ChangeContainer>
                    <TodayListWrap>
                        <TodayMedicWrap>
                            <TodayGoalTitle content="약*" width="65" />
                            <TodayMedicAddBt src={plusBtn} />
                        </TodayMedicWrap>
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='약의 종류를 입력하세요'/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="처방 병원 / 약국" width="120" />
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='처방 받은 병원과 약국을 입력하세요'/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="메모" width="70" />
                        <TodayInputWrap>
                            <TodayMemoInput type="text" placeholder='자세히 적을수록 좋아요. (ex.효과, 부작용)'/>
                        </TodayInputWrap>
                    </TodayListWrap>
                </ChangeContainer>
            )}
            {selectedDropDownValue === '증상' && (
                <ChangeContainer>
                    <TodayListWrap>
                        <TodayGoalTitle content="증상*" width="70" />
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='나타나는 증상을 입력하세요'/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="메모" width="70" />
                        <TodayInputWrap>
                            <TodayMemoInput type="text" placeholder='자세히 적을수록 좋아요. (ex. 증상, 통증)'/>
                        </TodayInputWrap>
                    </TodayListWrap>
                </ChangeContainer>
            )}
            <TodayButton content="저장" />
        </Container>
    )
}

export default CreateNewRecordPage;
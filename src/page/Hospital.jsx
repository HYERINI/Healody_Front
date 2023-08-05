import React, {useState} from "react";
import TodayHeader from "../component/Today/TodayHeader";
import TodayNav from "../component/Today/TodayNav";
import CalendarNav from "../component/CalendarNav";
import CalendarComponent from "../component/CalendarComponent";
import TodayDropDown from "../component/Today/TodayDropDown";
import styled from 'styled-components';
import SelectComponent from "../component/SelectComponent";


function Hospital() {
    const Container = styled.div`
        width: 360px;
        margin: 0 auto;
        position: relative;
        `;
    const [selectedDropDownValue, setSelectedDropDownValue] = useState('본가');
    
    return (
        <>
            <Container>
            <TodayHeader />
            <TodayNav />
            <CalendarNav />
            <CalendarComponent />
            <TodayDropDown
                selectedValue={selectedDropDownValue}
                options={['본가', '친가', '외가']}
                onClick={(value) => setSelectedDropDownValue(value)}
            />

            {selectedDropDownValue === '본가' ? (
                <Container>
                    <SelectComponent />
                </Container>
            ) : selectedDropDownValue === '친가' ? (
                <Container>
                    시발년아
                </Container>
            ) : (
                <Container>
                    개새끼야
                </Container>
            )}
            {/* {selectedDropDownValue === '병원' ? (
                <ChangeContainer>
                    <TodayTypeListWrap>
                        <TodayRecordTypeButton content="외래" width="70" onClick={(value) => setSelectedPurpose(value)}/>
                        <TodayRecordTypeButton content="입원" width="70" onClick={(value) => setSelectedPurpose(value)}/>
                        <TodayRecordTypeButton content="응급" width="70" onClick={(value) => setSelectedPurpose(value)}/>
                    </TodayTypeListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="병원*" width="70" />
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='병원 이름을 입력하세요.'
                                             name="name"
                                             value={formData.name}
                                             onChange={handleInputChange}/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="검사, 시술, 수술" width="120" />
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='검사, 시술, 수술에 대해 입력하세요.'
                                             name="surgery"
                                             value={formData.surgery}
                                             onChange={handleInputChange}/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="메모" width="60" />
                        <TodayInputWrap>
                            <TodayMemoInput type="text" placeholder='방문 전에는 궁금한 점을 메모하고, 이후에는 진료 내용을 남겨보세요'
                                            name="memo"
                                            value={formData.memo}
                                            onChange={handleInputChange}/>
                        </TodayInputWrap>
                    </TodayListWrap>
                </ChangeContainer>
            ) : selectedDropDownValue === '약' ? (
                <ChangeContainer>
                    <TodayListWrap>
                        <TodayMedicWrap>
                            <TodayGoalTitle content="약*" width="65" />
                            {medicineInputs < 3 ? (
                                <TodayMedicAddBt src={plusBtn} onClick={handleAddMedicineInput} />
                            ) : null}
                        </TodayMedicWrap>
                        <TodayInputWrap>
                            {Array.from({ length: medicineInputs }, (_, index) => (
                                <TodayTitleInput
                                    key={`medicineInput_${index}`}
                                    type="text"
                                    placeholder={`약의 종류 ${index + 1}를 입력하세요`}
                                    name={`medicine${index + 1}`}
                                    value={formData[`medicine${index + 1}`] || ""}
                                    onChange={handleInputChange}
                                />
                            ))}
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="처방 병원 / 약국" width="120" />
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='처방 받은 병원과 약국을 입력하세요'
                                             name="place"
                                             value={formData.place}
                                             onChange={handleInputChange}/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="메모" width="60" />
                        <TodayInputWrap>
                            <TodayMemoInput type="text" placeholder='자세히 적을수록 좋아요. (ex.효과, 부작용)'
                                            name="memo"
                                            value={formData.memo}
                                            onChange={handleInputChange}/>
                        </TodayInputWrap>
                    </TodayListWrap>
                </ChangeContainer>
            ) : (
                <ChangeContainer>
                    <TodayListWrap>
                        <TodayGoalTitle content="증상*" width="70" />
                        <TodayInputWrap>
                            <TodayTitleInput type="text" placeholder='나타나는 증상을 입력하세요'
                                             name="name"
                                             value={formData.name}
                                             onChange={handleInputChange}/>
                        </TodayInputWrap>
                    </TodayListWrap>
                    <TodayListWrap>
                        <TodayGoalTitle content="메모" width="60" />
                        <TodayInputWrap>
                            <TodayMemoInput type="text" placeholder='자세히 적을수록 좋아요. (ex. 증상, 통증)'
                                            name="memo"
                                            value={formData.memo}
                                            onChange={handleInputChange}/>
                        </TodayInputWrap>
                    </TodayListWrap>
                </ChangeContainer>
            )} */}
            </Container>
        </>
    )
}

export default Hospital;
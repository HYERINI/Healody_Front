import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodayHeader from "../component/Today/TodayHeader";
import TodayNav from "../component/Today/TodayNav";
import TodayTitle from "../component/Today/TodayTitle";
import TodayRecordBox from "../component/Today/TodayRecordBox";
import TodayDeleteModal from "../component/Today/TodayDeleteModal";
import TodayDeleteCheckBox from "../component/Today/TodayDeleteCheckBox";
import TodayPlusBt from './../img/TodayPlusBt.svg';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  z-index: 2;
  height: calc(100vh);
  box-sizing: border-box;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
`;

const TodayRecordBoxWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TodayAddRecord = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`;

const TodayDefault = styled.div`
  font-size: 20px;
  color: #60605F;
  height: calc(100vh - 240px);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MyTodayRecordListPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteCheckBoxStates, setDeleteCheckBoxStates] = useState([]); // 삭제 확인 체크박스 상태 배열 추가
    const [recordData, setRecordData] = useState([]); // 데이터 가져오기
    const navigate = useNavigate();

    useEffect(() => {
        // 데이터 가져오는 로직 (예시)
        // 실제로는 서버에서 데이터를 가져오는 API 호출 등의 로직을 수행해야 합니다.
        const fetchData = async () => {
            try {
                const response = await fetch('url_for_data_api');
                // const data = await response.json();
                const data = [{
                    "date": "2023-07-17T12:32:21.000+00:00",
                    "title": "기침 증상 체크",
                    "memo": "검사 결과는 음성이고 2일 뒤에 다시 오라고 하심",
                    "purpose": "OUTPATIENT",
                    "name": "아주대학교병원",
                    "surgery": "코로나 검사"
                },{
                    "date": "2023-07-17T12:32:21.000+00:00",
                    "title": "기침 증상 체크",
                    "memo": "검사 결과는 음성이고 2일 뒤에 다시 오라고 하심",
                    "purpose": "HOSPITALIZATION",
                    "name": "아주대학교병원",
                    "surgery": "코로나 검사"
                },{
                    "date": "2023-07-17T12:32:21.000+00:00",
                    "title": "기침 증상 체크",
                    "memo": "검사 결과는 음성이고 2일 뒤에 다시 오라고 하심",
                    "purpose": "OUTPATIENT",
                    "name": "아주대학교병원",
                    "surgery": "코로나 검사"
                },{
                    "date": "2023-07-17T12:32:21.000+00:00",
                    "title": "기침 증상 체크",
                    "memo": "검사 결과는 음성이고 2일 뒤에 다시 오라고 하심",
                    "purpose": "EMERGENCY",
                    "name": "아주대학교병원",
                    "surgery": "코로나 검사"
                }]
                setRecordData(data);
                setDeleteCheckBoxStates(new Array(data.length).fill(false));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    function onMoveAddRecord() {
        navigate('/create_newRecord');
    }

    const handleDeleteButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleDeleteCheckBoxOpen = (index) => {
        setDeleteCheckBoxStates((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };

    const handleDeleteCheckBoxClose = (index) => {
        setDeleteCheckBoxStates((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    const handleDeleteRecord = async (index, purpose) => {
        // purpose 값에 따라 다른 URL 생성
        let deleteUrl;
        switch (purpose) {
            case 'OUTPATIENT':
                deleteUrl = `/api/note/hospital/${recordData[index].noteId}`;
                break;
            case 'HOSPITALIZATION':
                deleteUrl = `/api/note/medicine/${recordData[index].noteId}`;
                break;
            case 'EMERGENCY':
                deleteUrl = `/api/note/symptom/${recordData[index].noteId}`;
                break;
            default:
                console.log('Invalid purpose');
                return;
        }

        try {
            const response = await fetch(deleteUrl, { method: 'DELETE' });
            if (response.ok) {
                // 성공적으로 삭제된 경우
                console.log('Record deleted successfully');
                // 필요한 경우 데이터 재로드
            } else {
                console.error('Failed to delete record');
            }
        } catch (error) {
            console.error('Error deleting record:', error);
        }
    };

    return (
        <Container>
            <TodayHeader />
            <TodayNav />
            <TodayTitle content="기록 목록" />
            <TodayAddRecord src={TodayPlusBt} onClick={onMoveAddRecord} />
            <TodayRecordBoxWrap>
                {/* 데이터를 기반으로 TodayRecordBox 컴포넌트 렌더링 */}
                {recordData.map((record, index) => (
                    <React.Fragment key={index}>
                        <TodayRecordBox
                            type={record.purpose === 'OUTPATIENT' ? '외래' : record.purpose === 'HOSPITALIZATION' ? '입원' : '응급'}
                            date={new Date(record.date).toISOString().split('T')[0]}
                            content={record.memo}
                            onOpenModal={() => handleDeleteCheckBoxOpen(index)} // "점점점" 버튼을 클릭하면 모달 열기
                            onDelete={() => handleDeleteRecord(index, record.purpose)}
                        />
                        {deleteCheckBoxStates[index] && (
                            <React.Fragment>
                                <TodayDeleteModal isOpen={isModalOpen} onClose={() => handleDeleteCheckBoxClose(index)} />
                                <TodayDeleteCheckBox
                                    content="삭제하시겠습니까?"
                                    buttonText="삭제하기"
                                    onDelete={() => handleDeleteRecord(index, record.purpose)}
                                />
                            </React.Fragment>
                        )}
                    </React.Fragment>
                ))}
            </TodayRecordBoxWrap>
        </Container>
    );
}

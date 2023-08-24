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

    const host = 'https://port-0-healody-ixj2mllkwb0s3.sel3.cloudtype.app';
    const token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTAxMjM0MTIzNCIsImF1dGgiOiJST0xFX1VTRVIiLCJ1c2VySWQiOjEsImV4cCI6MTY5Mjk0MTkyNX0.rIznSbIJ22-NbUrnthILwd5GL6CSuBLuIUcTibgwUeGCsoF3buQii7eSNC_Vw0lv0UECgnpxxVRUeNmyGM68KA'
    const userId = '1'

    useEffect(() => {
        // 데이터 가져오는 로직 (예시)
        const fetchData = async () => {
            try {
                const response = await fetch(host + '/api/note/' + userId,{
                    method: 'GET',
                    headers: {
                        'Authorization' : 'Bearer ' + token
                    }
                });
                const data = await response.json();
                setRecordData(data.data);
                console.log(recordData);
                setDeleteCheckBoxStates(new Array(data.data.length).fill(false));
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
            case '병원':
                deleteUrl = host + `/api/note/hospital/${recordData[index].noteId}`;
                navigate('/my_todayRecord');
                break;
            case '약':
                deleteUrl = host + `/api/note/medicine/${recordData[index].noteId}`;
                navigate('/my_todayRecord');
                break;
            case '응급':
                deleteUrl = host + `/api/note/symptom/${recordData[index].noteId}`;
                navigate('/my_todayRecord');
                break;
            default:
                console.log('Invalid purpose');
                return;
        }

        try {
            const response = await fetch(deleteUrl, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });

            if (response.status === 204) {
                // 성공적으로 삭제된 경우
                console.log('Record deleted successfully');
            } else if (response.status === 503) {
                console.error('Service Unavailable - Retry later');
            } else {
                console.error('Failed to delete record');
            }
        } catch (error) {
            if (error instanceof TypeError) {
                console.error('Network error:', error.message);
            } else {
                console.error('Error deleting record:', error);
            }
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
                            type={record.noteType}
                            date={new Date(record.date).toISOString().split('T')[0]}
                            content={record.title}
                            onOpenModal={() => handleDeleteCheckBoxOpen(index)} // "점점점" 버튼을 클릭하면 모달 열기
                            onDelete={() => handleDeleteRecord(index, record.noteType)}
                        />
                        {deleteCheckBoxStates[index] && (
                            <React.Fragment>
                                <TodayDeleteModal isOpen={isModalOpen} onClose={() => handleDeleteCheckBoxClose(index)} />
                                <TodayDeleteCheckBox
                                    content="삭제하시겠습니까?"
                                    buttonText="삭제하기"
                                    onDelete={() => handleDeleteRecord(index, record.noteType)}
                                />
                            </React.Fragment>
                        )}
                    </React.Fragment>
                ))}
            </TodayRecordBoxWrap>
        </Container>
    );
}

import React, { useState, useEffect } from "react";
import { Header } from "../component/Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
    header: {
        backgroundColor: "transparent",
        left: 0,
        position: "absolute",
        top: "42px"
    },

    healodyLogo: {
        height: "38px",
        position: "relative",
        width: "98px"
    },

    input: { //엄마곰~
        color: "#000",
        display: "flex",
        width: "267px",
        height: "32px",
        marginLeft: "18px",
        textAlign: "center",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "40px",
    },

    purple_box: {
        width: "328px",
        height: "76px",
        fill: "#FFF",
        strokeWidth: "2px",
        stroke: "#6F02DB",
        marginTop: "116px",
        marginLeft: "16px"
    },

    box1: { //본가
        display: "flex",
        height: "29px",
        width: "300px",
        border: "none",
        marginTop: "-50px",
        marginLeft: "18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexShrink: 0,
    },


    box2: {
        border: "0.5px solid #000000",
        height: "34px",
        width: "293px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "13px",
        marginTop: "15px",
        marginLeft: "34px",
        marginRight: "34px",
    },

    box3: {
        display: "flex",
        height: "29px",
        width: "143.823px",
        border: "none",
        marginTop: "-57px",
        marginLeft: "125px",

    },

    purple_box2: {
        border: "0.5px solid #B6B6B5",
        backgroundColor: "#6F02DB",
        display: "inline-flex",
        padding: "3px 12px",
        alignItems: "center",
        gap: "5px",
        borderRadius: "20px",
        marginTop: "20px",
        marginLeft: "16px",
    },

    purple_box3: {  //집 추가하기
        width: "328px",
        height: "76px",
        fill: "#FFF",
        strokeWidth: "2px",
        stroke: "#6F02DB",
        marginTop: "17px",
        marginLeft: "16px"
    },

    p: {
        color: "#000",
        fontFamily: "Pretendard",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "40px",
        marginTop: "-5px",
    },

    p2: {
        color: "#ffffff",
        fontSize: "13px",
    },

    p3: {
        color: "#B6B6B5",
        fontFamily: "Pretendard",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "40px",
        marginTop: "-5px",
    },

    p4: {
        display: "flex",
        width: "70px",
        height: "38px",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        textAlign: "center",
        fontSize: "23px",
        fontWeight: 600,
        marginLeft: "125px",
    },

    p5: {
        display: "flex",
        width: "132px",
        height: "34px",
        flexDirection: "column",
        justifyContent: "center",
        color: "#EF4444",
        textAlign: "center",
        fontSize: "13px",
        fontWeight: 600,
        marginLeft: "87px",
        marginTop: "-1px"
    },

    p6: {
        color: "#B6B6B5",
        textAlign: "center",
        fontFamily: "Pretendard",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 600,
    },
    p7: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Pretendard",
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: 600,
        flexDirection: "column",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: "10px"
    },

    p8: {           //정말 탈퇴하시겠습니까?
        display: "flex",
        width: "292.82px",
        height: "46px",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        textAlign: "center",
        fontFamily: "Pretendard",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 600,
    },

    p9: {         //탈퇴 취소

        width: "47.943px",
        height: "32px",
        flexShrink: 0,
        color: "#000",
        fontSize: "13px",
        fontWeight: 600,
    },

    p10: {
        display: "flex",
        width: "70px",
        height: "57px",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        textAlign: "center",
        fontSize: "13px",
        fontWeight: 600,
        marginLeft: "125px",
    },

    p11: {
        color: "#000",
        fontFamily: "Pretendard",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        marginTop: "80px",
        marginLeft: "-235px"
    },

    p12: {
        color: "#000",
        fontFamily: "Pretendard",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        marginTop: "10px",
        marginLeft: "-250px"
    },

    p13: {
        width: "200px",
        color: "#000",
        fontFamily: "Pretendard",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        marginTop: "13px",
        marginLeft: "51px",
    },

    total_box: {
        marginLeft: "16px",
        marginRight: "16px",
    },

    ModifyModalBackdrop: {  //배경을 회색으로
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    ModifyModal: {  //삭제 박스
        width: "328px",
        height: "429px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "13px",
        marginRight: "16px"
    },

    CreateModalBackdrop: {  //배경을 회색으로
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    CreateModal: {  //삭제 박스
        width: "293px",
        height: "222px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "13px",
        marginRight: "16px"
    },

    input2: {
        display: "flex",
        color: "#000",
        width: "132.442px",
        height: "34px",
        marginLeft: "80.71px",
        textAlign: "center",
        fontSize: "13px",
        fontWeight: 600,
        border: "none"
    },

    input3: {
        display: "flex",
        color: "#000",
        width: "200px",
        height: "22px",
        marginLeft: "30px",
        textAlign: "center",
        fontSize: "12px",
        fontWeight: 600,
        border: "none"
    },

    input_box: {
        border: "0.5px solid #000000",
        height: "34px",
        width: "311.82px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "13px",
        marginLeft: "0px",
        marginRight: "34px"

    },

    input_box2: {
        border: "0.5px solid #000000",
        height: "88px",
        width: "311.82px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "13px",
        marginLeft: "0px",
        marginRight: "34px"

    },

    input_box3: {
        border: "0.5px solid #000000",
        backgroundColor: "#FFF",
        height: "34px",
        width: "324px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "13px",
        marginTop: "49px",
        marginLeft: "0px",
        marginRight: "18px"
    },

    input_box4: {
        border: "none",
        backgroundColor: "#FFF",
        display: "flex",
        height: "41px",
        width: "62px",
        textAlign: "center",
        marginTop: "-440px",
        marginLeft: "275px",
    },

    input_box5: {
        border: "none",
        backgroundColor: "#FFF",
        display: "flex",
        height: "41px",
        width: "62px",
        textAlign: "center",
        marginTop: "-430px",
        marginLeft: "275px",
    },

    input_box6: {
        border: "0.5px solid #B6B6B5",
        backgroundColor: "#FFF",
        height: "28px",
        width: "250px",
        padding: "3px 12px",
        textAlign: "center",
        borderRadius: "20px",
        marginTop: "20px",
        marginLeft: "10px"
    },

    deleteModalBackdrop: {  //배경을 회색으로
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    deleteModal: {  //삭제 박스
        width: "292.82px",
        height: "142.px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "13px",
    },

    button1: {
        width: "106px",
        height: "32px",
        borderRadius: "13px",
        border: "0.5px solid #000",
        background: "var(--800, #111110)",
        marginTop: "10px",
        marginLeft: "35px",

    },

    button2: {
        width: "106px",
        height: "32px",
        flexShrink: 0,
        borderRadius: "13px",
        border: "0.5px solid #000",
        background: "var(--healody-white, #FFF)",
        marginLeft: "8px",
    },

    ellipse: {
        position: "relative",
        marginTop: "80px",
        marginLeft: "0px",
    },

    ellipse2: {
        position: "relative",
        marginTop: "6px",
        marginLeft: "-10px",
    },

    UserImg: {
        position: "absolute",
        marginLeft: "26px",
        marginTop: "-44px",
    },

    UserImg2: {
        position: "absolute",
        marginLeft: "27px",
        marginTop: "-54px",
    },
    camera: {
        position: "absolute",
        marginTop: "-31px",
        marginLeft: "47px",
    },
}

function MypageFamilyManagementMain() {

    const [showModifyModal, setShowModifyModal] = useState(false);
    const [home, setHome] = useState('본가')
    const [home2, setHome2] = useState('')
    const [homeNameInput, setHomeNameInput] = useState("");
    const [showModifyModal2, setShowModifyModal2] = useState(false);
    const [family, setFamily] = useState('엄마')
    const [family2, setFamily2] = useState('')
    const [familyNameInput, setFamilyNameInput] = useState('')
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [create, setCreate] = useState('돌봄계정 추가하기')
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [createNameInput, setCreateNameInput] = useState("");
    const [familyList, setFamilyList] = useState([]);

    const onModifyClicked = () => {
        setShowModifyModal(true);
    };

    const onModifyClicked2 = () => {
        setShowModifyModal2(true);
    };

    const onCancelModify = () => {
        setShowModifyModal(false);
        setHomeNameInput("");
    };

    const onCancelModify2 = () => {
        setShowModifyModal2(false);
        setFamilyNameInput("");
    };

    const onConfirmModify = () => {
        setShowModifyModal(false);
        setHome(homeNameInput); // 완료 버튼을 눌렀을 때 home 값을 업데이트
        setHomeNameInput(""); // 입력값 초기화
    };

    const onConfirmModify2 = () => {
        setShowModifyModal2(false);
        setFamily(familyNameInput)
        setFamilyNameInput("")
    };

    const onChangeHomeNameInput = (e) => {
        setHomeNameInput(e.target.value);
    };

    const onSubmitHome = (e) => {
        setHome(e.target.value);
    }

    const onSubmitHome2 = (e) => {
        setHome2(e.target.value);
    }

    const onChangeFamilyNameInput = (e) => {
        setFamilyNameInput(e.target.value);
    };

    const onSubmitFamily = (e) => {
        setFamily(e.target.value)
    }

    const onSubmitFamily2 = (e) => {
        setFamily2(e.target.value)
    }

    const onDeleteClicked = () => {
        setShowDeleteModal(true);
    };

    const onCancelDelete = () => {
        setShowDeleteModal(false);
    };

    const onConfirmDelete = () => {  //삭제

        setShowDeleteModal(false);
    };
    const onCreateClicked = () => {
        setShowCreateModal(true);
    };

    const onCancelCreate = () => {
        setShowCreateModal(false);
    };

    const onConfirmCreate = () => {  //삭제
        setShowCreateModal(false);
        setCreate(createNameInput);
        setCreateNameInput("");
    };

    const onChangeCreateNameInput = (e) => {
        setCreateNameInput(e.target.value);
    };

    const navigate = useNavigate();

    const handleFamilyInviteClick = () => {
      // 페이지 이동 처리
      navigate('/Mypage_FamilyInvite');
    };

    useEffect(() => {

        const userId = localStorage.getItem('userId');
        // 유저 정보를 받아오는 API 요청
        axios.get('https://healody.shop/api/home/${userId}')
        .then(response => {
            setFamilyList(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching family data:', error);
        });
    }, []);

    return (
        <>
          <div style={styles.total_box}>
            <div style={styles.header}>
              <Header />
            </div>
      
            <div style={styles.healodyLogo}>
              <healodyLogo/>
            </div>
      
            {Object.keys(familyList.data).map(house => (
              <div key={house} style={styles.purple_box}>
                <svg xmlns="http://www.w3.org/2000/svg" width="328" height="76" viewBox="0 0 328 76" fill="none">
                  <path d="M1 5C1 2.79086 2.79086 1 5 1H323C325.209 1 327 2.79086 327 5V71C327 73.2091 325.209 75 323 75H5C2.79086 75 1 73.2091 1 71V5Z" fill="white" stroke="#6F02DB" stroke-width="2" />
                </svg>
      
                <div style={styles.box1}>
                  <p style={styles.p} onClick={() => onModifyClicked(house)}>{house}</p>
                  {showModifyModal[house] && (
                    <div style={styles.ModifyModalBackdrop}>
                      <div style={styles.ModifyModal}>
                        <p style={styles.p4}>{house}</p>
                        {/* Modify modal content for the house */}
                      </div>
                    </div>
                  )}
                  {/* Display user and care-user for the house */}
                  {familyList.data[house].user.map((user, index) => (
                    <div key={user.id} style={styles.box2}>
                      <p style={styles.p}>{user.nickname}</p>
                    </div>
                  ))}
                  {familyList.data[house]["care-user"].map((careUser, index) => (
                    <div key={careUser.id} style={styles.box2}>
                      <p style={styles.p}>{careUser.nickname}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      
            {/* ... */}
          </div>
        </>
      );
}

export default MypageFamilyManagementMain;
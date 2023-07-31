import React, { useState } from "react";
import { Header } from "../component/Header";

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
        marginRight: "34px"
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
        marginTop: "-46px",
    },

    UserImg2: {
        position: "absolute",
        marginLeft: "28px",
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

    return (
        <>
            <div style={styles.total_box}>
                <div style={styles.header}>
                    <Header />
                </div>

                <div style={styles.healodyLogo}>
                    <healodyLogo/>
                </div>

                <div style={styles.purple_box}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="328" height="76" viewBox="0 0 328 76" fill="none">
                        <path d="M1 5C1 2.79086 2.79086 1 5 1H323C325.209 1 327 2.79086 327 5V71C327 73.2091 325.209 75 323 75H5C2.79086 75 1 73.2091 1 71V5Z" fill="white" stroke="#6F02DB" stroke-width="2" />
                    </svg>

                    <div style={styles.box1}>
                        <p style={styles.p} onClick={onModifyClicked}>{home}</p>
                        {showModifyModal && (
                            <div style={styles.ModifyModalBackdrop}>
                                <div style={styles.ModifyModal}>
                                    <p style={styles.p4}>본가</p>
                                    <p style={styles.p}>집 이름 수정하기</p>
                                    <div style={styles.input_box}>
                                        <input
                                            type="text"
                                            value={homeNameInput}
                                            style={styles.input2}
                                            onChange={onChangeHomeNameInput}
                                            placeholder="본가"
                                        />
                                    </div>

                                    <p style={styles.p}>집 설명 수정하기</p>
                                    <div style={styles.input_box2}>
                                        <input
                                            type="text"
                                            value={home2}
                                            style={styles.input2}
                                            onChange={onSubmitHome2}
                                            placeholder="설명"
                                        />
                                    </div>

                                    <div style={styles.input_box3} onClick={onDeleteClicked}>
                                        <p style={styles.p5}>집 삭제하기</p>
                                    </div>
                                    {showDeleteModal && (
                                        <div style={styles.deleteModalBackdrop}>
                                            <div style={styles.deleteModal}>
                                                <p8 style={styles.p8}>정말 삭제하시겠습니까?</p8>
                                                <button style={styles.button1} onClick={onConfirmDelete}>
                                                    <p7 style={styles.p7}>삭제하기</p7>
                                                </button>
                                                <button style={styles.button2} onClick={onCancelDelete}>
                                                    <p9 style={styles.p9}>취소</p9>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <button style={styles.input_box4} onClick={onConfirmModify}>
                                        <p style={styles.p6}>완료</p>
                                    </button>

                                </div>
                            </div>
                        )}
                        <p style={styles.p}>엄마곰 아빠곰 민주곰 동생곰이 사는 집이예요</p>
                    </div>
                </div>

                <div style={styles.box2}>
                    <p style={styles.p} onClick={onModifyClicked2}>{family}</p>
                    {showModifyModal2 && (
                        <div style={styles.ModifyModalBackdrop}>
                            <div style={styles.ModifyModal}>
                                <p style={styles.p10}> <div style={styles.ellipse2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="54" viewBox="0 0 56 54" fill="none">
                                        <path d="M55.75 27C55.75 41.7651 43.3345 53.75 28 53.75C12.6655 53.75 0.25 41.7651 0.25 27C0.25 12.2349 12.6655 0.25 28 0.25C43.3345 0.25 55.75 12.2349 55.75 27Z" fill="white" stroke="black" stroke-width="0.5" />
                                    </svg>
                                    <div style={styles.UserImg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                            <path d="M1.25 21V19.75C1.25 18.6009 1.47633 17.4631 1.91605 16.4015C2.35578 15.3399 3.0003 14.3753 3.81282 13.5628C4.62533 12.7503 5.58992 12.1058 6.65152 11.6661C7.71312 11.2263 8.85093 11 10 11C11.1491 11 12.2869 11.2263 13.3485 11.6661C14.4101 12.1058 15.3747 12.7503 16.1872 13.5628C16.9997 14.3753 17.6442 15.3399 18.0839 16.4015C18.5237 17.4631 18.75 18.6009 18.75 19.75V21" stroke="#5D5A88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.99988 11C11.326 11 12.5977 10.4732 13.5354 9.53553C14.4731 8.59785 14.9999 7.32608 14.9999 6C14.9999 4.67392 14.4731 3.40215 13.5354 2.46447C12.5977 1.52678 11.326 1 9.99988 1C8.6738 1 7.40203 1.52678 6.46434 2.46447C5.52666 3.40215 4.99988 4.67392 4.99988 6C4.99988 7.32608 5.52666 8.59785 6.46434 9.53553C7.40203 10.4732 8.6738 11 9.99988 11V11Z" stroke="#5D5A88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>엄마 </p>
                                <p style={styles.p11}>이름 수정하기</p>
                                <div style={styles.input_box}>
                                    <input
                                        type="text"
                                        value={familyNameInput}
                                        style={styles.input2}
                                        onChange={onChangeFamilyNameInput}
                                        placeholder="엄마"
                                    />
                                </div>

                                <p style={styles.p12}>집 이동하기</p>
                                <div style={styles.input_box}>
                                    <input
                                        type="text"
                                        value={family2}
                                        style={styles.input2}
                                        onChange={onSubmitFamily2}
                                        placeholder="본가"
                                    />
                                </div>

                                <div style={styles.input_box3} onClick={onDeleteClicked}>
                                    <p style={styles.p5}>가족 삭제하기</p>
                                </div>
                                {showDeleteModal && (
                                    <div style={styles.deleteModalBackdrop}>
                                        <div style={styles.deleteModal}>
                                            <p8 style={styles.p8}>정말 삭제하시겠습니까?</p8>
                                            <button style={styles.button1} onClick={onConfirmDelete}>
                                                <p7 style={styles.p7}>삭제하기</p7>
                                            </button>
                                            <button style={styles.button2} onClick={onCancelDelete}>
                                                <p9 style={styles.p9}>취소</p9>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <button style={styles.input_box5} onClick={onConfirmModify2}>
                                    <p style={styles.p6}>완료</p>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div style={styles.box2}>
                    <p style={styles.p}>아빠</p>
                </div>

                <div style={styles.box2}>
                    <p style={styles.p}>동생</p>
                </div>

                <div style={styles.box2}>
                    <p style={styles.p3}>가족 초대하기</p>
                </div>

                <div style={styles.purple_box2}>
                    <p style={styles.p2}>돌봄 계정</p>
                </div>

                <div style={styles.box2}>
                    <p style={styles.p}>할머니</p>
                </div>

                <div style={styles.box2}>
                    <p style={styles.p}>똘이</p>
                </div>

                <div style={styles.box2}>
                    <p style={styles.p3} onClick={onCreateClicked}>{create}</p>
                    {showCreateModal && (
                        <div style={styles.CreateModalBackdrop}>
                            <div style={styles.CreateModal}>
                                <p style={styles.p13}>새 돌봄계정 생성</p>
                                <p style={styles.p10}> <div style={styles.ellipse2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="69" height="66" viewBox="0 0 69 66" fill="none">
                                        <path d="M68.4511 33.1954C68.4511 51.0345 53.413 65.5125 34.842 65.5125C16.271 65.5125 1.23294 51.0345 1.23294 33.1954C1.23294 15.3563 16.271 0.878357 34.842 0.878357C53.413 0.878357 68.4511 15.3563 68.4511 33.1954Z" fill="white" stroke="black" stroke-width="0.5" />
                                    </svg>
                                    <div style={styles.UserImg2}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="3=0 0 27 30" fill="none">
                                            <path d="M1.70091 28.8915V27.1953C1.70091 25.636 2.0095 24.0921 2.60906 22.6515C3.20863 21.211 4.08742 19.9021 5.19526 18.7995C6.30311 17.697 7.61831 16.8224 9.06578 16.2257C10.5133 15.629 12.0646 15.3219 13.6314 15.3219C15.1981 15.3219 16.7495 15.629 18.197 16.2257C19.6444 16.8224 20.9596 17.697 22.0675 18.7995C23.1753 19.9021 24.0541 21.211 24.6537 22.6515C25.2532 24.0921 25.5618 25.636 25.5618 27.1953V28.8915" stroke="#414140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.6312 15.3219C15.4393 15.3219 17.1733 14.607 18.4519 13.3346C19.7304 12.0622 20.4486 10.3365 20.4486 8.53705C20.4486 6.73761 19.7304 5.01187 18.4519 3.73947C17.1733 2.46708 15.4393 1.75225 13.6312 1.75225C11.8231 1.75225 10.0891 2.46708 8.81058 3.73947C7.53207 5.01187 6.81381 6.73761 6.81381 8.53705C6.81381 10.3365 7.53207 12.0622 8.81058 13.3346C10.0891 14.607 11.8231 15.3219 13.6312 15.3219V15.3219Z" stroke="#414140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div style={styles.camera}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                            <path d="M24.4603 7.66993H21.1049L19.4488 5.19586C19.3848 5.10045 19.2981 5.02225 19.1965 4.96821C19.0948 4.91418 18.9813 4.886 18.866 4.88617H11.407C11.2917 4.886 11.1782 4.91418 11.0766 4.96821C10.9749 5.02225 10.8882 5.10045 10.8243 5.19586L9.16696 7.66993H5.81272C5.13269 7.66993 4.48052 7.93878 3.99966 8.41733C3.51881 8.89589 3.24867 9.54494 3.24867 10.2217V23.2126C3.24867 23.8894 3.51881 24.5385 3.99966 25.017C4.48052 25.4956 5.13269 25.7644 5.81272 25.7644H24.4603C25.1404 25.7644 25.7925 25.4956 26.2734 25.017C26.7542 24.5385 27.0244 23.8894 27.0244 23.2126V10.2217C27.0244 9.54494 26.7542 8.89589 26.2734 8.41733C25.7925 7.93878 25.1404 7.66993 24.4603 7.66993ZM25.6258 23.2126C25.6258 23.5202 25.503 23.8153 25.2844 24.0328C25.0659 24.2503 24.7694 24.3725 24.4603 24.3725H5.81272C5.50362 24.3725 5.20717 24.2503 4.9886 24.0328C4.77003 23.8153 4.64724 23.5202 4.64724 23.2126V10.2217C4.64724 9.91409 4.77003 9.61907 4.9886 9.40154C5.20717 9.18402 5.50362 9.06182 5.81272 9.06182H9.54224C9.6575 9.06199 9.77101 9.0338 9.87267 8.97977C9.97434 8.92574 10.061 8.84754 10.125 8.75212L11.7811 6.27805H18.4908L20.1481 8.75212C20.212 8.84754 20.2987 8.92574 20.4004 8.97977C20.502 9.0338 20.6156 9.06199 20.7308 9.06182H24.4603C24.7694 9.06182 25.0659 9.18402 25.2844 9.40154C25.503 9.61907 25.6258 9.91409 25.6258 10.2217V23.2126ZM15.1365 11.3816C14.1684 11.3816 13.222 11.6673 12.417 12.2026C11.612 12.7379 10.9846 13.4988 10.6141 14.3889C10.2436 15.2791 10.1467 16.2586 10.3356 17.2036C10.5245 18.1486 10.9907 19.0166 11.6752 19.6979C12.3598 20.3792 13.232 20.8432 14.1816 21.0312C15.1311 21.2192 16.1153 21.1227 17.0098 20.754C17.9042 20.3852 18.6687 19.7608 19.2066 18.9597C19.7444 18.1586 20.0315 17.2167 20.0315 16.2532C20.0315 14.9612 19.5158 13.7221 18.5978 12.8085C17.6798 11.8949 16.4348 11.3816 15.1365 11.3816ZM15.1365 19.7329C14.445 19.7329 13.769 19.5288 13.194 19.1465C12.619 18.7641 12.1709 18.2207 11.9062 17.5848C11.6416 16.949 11.5724 16.2493 11.7073 15.5744C11.8422 14.8994 12.1752 14.2793 12.6642 13.7927C13.1532 13.306 13.7762 12.9746 14.4544 12.8404C15.1326 12.7061 15.8357 12.775 16.4745 13.0384C17.1134 13.3018 17.6595 13.7478 18.0437 14.32C18.4279 14.8922 18.6329 15.565 18.6329 16.2532C18.6329 17.1761 18.2646 18.0612 17.6089 18.7137C16.9532 19.3663 16.0638 19.7329 15.1365 19.7329Z" fill="black" />
                                        </svg>
                                    </div>
                                </div> </p>

                                <div style={styles.input_box6}>
                                    <input
                                        type="text"
                                        value={createNameInput}
                                        style={styles.input3}
                                        onChange={onChangeCreateNameInput}
                                        placeholder="돌봄계정의 닉네임을 입력하세요"
                                    />
                                </div>

                                <button style={styles.button1} onClick={onConfirmCreate}>
                                    <p7 style={styles.p7}>확인</p7>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div style={styles.purple_box3}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="328" height="76" viewBox="0 0 328 76" fill="none">
                        <path d="M1 5C1 2.79086 2.79086 1 5 1H323C325.209 1 327 2.79086 327 5V71C327 73.2091 325.209 75 323 75H5C2.79086 75 1 73.2091 1 71V5Z" fill="white" stroke="#6F02DB" stroke-width="2" />
                    </svg>
                    <div style={styles.box3}>
                        <p style={styles.p}>집 추가하기</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MypageFamilyManagementMain;
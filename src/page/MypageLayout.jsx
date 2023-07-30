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

    total_box: {
        marginLeft: "16px",
        marginRight: "16px",
    },

    profile_box: {
        border: "1px solid #000000",
        width: "328px",
        height: "156px",
        borderRadius: "10px",
        padding: "5px",
        marginTop: "74px",
        marginLeft: "11px",
        marginRight: "16px"
    },

    account_box: {
        border: "1px solid #000000",
        width: "328px",
        height: "76px",
        borderRadius: "10px",
        padding: "5px",
        marginTop: "20px",
        marginLeft: "11px",
        marginRight: "16px"
    },
    family_box: {
        border: "1px solid #000000",
        width: "328px",
        height: "111px",
        borderRadius: "10px",
        padding: "5px",
        marginTop: "20px",
        marginLeft: "11px",
        marginRight: "16px"
    },
    policy_box: {
        border: "1px solid #000000",
        width: "328px",
        height: "118px",
        borderRadius: "10px",
        padding: "5px",
        marginTop: "20px",
        marginLeft: "11px",
        marginRight: "16px"
    },
    logout_box: {
        border: "1px solid #000000",
        width: "328px",
        height: "44px",
        borderRadius: "10px",
        padding: "5px",
        marginTop: "20px",
        marginLeft: "11px",
        marginRight: "16px"
    },

    ellipse: {
        marginTop: "28px",
        marginLeft: "20px",
        marginRight: "237.64px"

    },

    UserImg: {
        marginTop: "-55px",
        marginLeft: "37px",

    },

    input_box1: {
        height: "21px",
        width: "75.533px",
        border: "none",
        marginTop: "-65px",
        marginLeft: "104.5px",

    },

    input_box2: {
        height: "16px",
        width: "220px",
        border: "none",
        marginLeft: "104.5px"
    },

    input_box3: {
        border: "0.5px solid #000000",
        height: "34px",
        width: "292.82px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "10px",
        marginTop: "11px",
        marginLeft: "17.59px",
        marginRight: "17.59px"
    },

    input_box4: {
        display: "flex",
        height: "29px",
        width: "143.823px",
        border: "none",
        
    },

    input_box5: {
        display: "flex",
        height: "32px",
        width: "160px",
        textAlign: "center",
        border: "none",
    },

    p1: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: "12.5px",
        fontStyle: "normal",
        fontWeight: 700,
      
    },

    p2: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: 300,
    
    },

    p3: {
        color: "#000",
        textAlign: "center",
        fontFamily: "Pretendard",
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: 600,
    },

    p4: {
        color: "#000",
        fontFamily: "Pretendard",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        marginLeft: "17.59px"
    },

    p5: {
        color: "#000",
        fontFamily: "Pretendard",
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: 400,
        marginLeft: "35.18px"
    },

    p6: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Pretendard",
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: "600",
    },

    p7: {           //정말 탈퇴하시겠습니까?
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

    p8: {         //탈퇴 취소
        width: "47.943px",
        height: "32px",
        flexShrink: 0,
        color: "#000",
        fontSize: "13px",
        fontWeight: 600,
    },

    LogoutModalBackdrop: {  //배경을 회색으로
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

    LogoutModal: {  //삭제 박스
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
};



function MypageLayout() {

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const onLogoutClicked = () => {
        setShowLogoutModal(true);
    };

    const onCancelLogout = () => {
        setShowLogoutModal(false);
    };

    const onConfirmLogout = () => {  //삭제
        setShowLogoutModal(false);
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

                <div style={styles.profile_box}>
                    <div style={styles.ellipse}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="68" viewBox="0 0 71 68" fill="none">
                            <path d="M70.1096 34C70.1096 52.6316 54.4791 67.75 35.1798 67.75C15.8805 67.75 0.25 52.6316 0.25 34C0.25 15.3684 15.8805 0.25 35.1798 0.25C54.4791 0.25 70.1096 15.3684 70.1096 34Z" fill="white" stroke="black" stroke-width="0.5" />
                        </svg>
                    </div>

                    <div style={styles.UserImg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="45" viewBox="0 0 38 45" fill="none">
                            <path d="M1 43.5328V40.8745C1 38.4308 1.46558 36.0111 2.37017 33.7535C3.27475 31.4958 4.60062 29.4445 6.27208 27.7165C7.94353 25.9886 9.92784 24.618 12.1117 23.6828C14.2956 22.7477 16.6362 22.2664 19 22.2664C21.3638 22.2664 23.7044 22.7477 25.8883 23.6828C28.0722 24.618 30.0565 25.9886 31.7279 27.7165C33.3994 29.4445 34.7252 31.4958 35.6298 33.7535C36.5344 36.0111 37 38.4308 37 40.8745V43.5328" stroke="#414140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.9999 22.2664C21.7279 22.2664 24.3441 21.1461 26.273 19.152C28.202 17.1579 29.2857 14.4533 29.2857 11.6332C29.2857 8.8131 28.202 6.10851 26.273 4.11439C24.3441 2.12028 21.7279 1 18.9999 1C16.272 1 13.6558 2.12028 11.7268 4.11439C9.7979 6.10851 8.71423 8.8131 8.71423 11.6332C8.71423 14.4533 9.7979 17.1579 11.7268 19.152C13.6558 21.1461 16.272 22.2664 18.9999 22.2664V22.2664Z" stroke="#414140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div style={styles.input_box1}>
                        <p style={styles.p1}>닉네임</p>
                    </div>

                    <div style={styles.input_box2}>
                        <p style={styles.p2}>이메일 abcdefg@kakao.com</p>
                    </div>

                    <div style={styles.input_box3}>
                        <p style={styles.p3}>프로필 편집</p>
                    </div>

                </div>

                <div style={styles.account_box}>
                    <div style={styles.input_box4}>
                        <p style={styles.p4}>계정</p>
                    </div>
                    <div style={styles.input_box5}>
                        <p style={styles.p5}>회원/개인 정보 관리</p>
                    </div>
                </div>

                <div style={styles.family_box}>
                    <div style={styles.input_box4}>
                        <p style={styles.p4}>내 가족 </p>
                    </div>
                    <div style={styles.input_box5}>
                        <p style={styles.p5}>내 가족 관리</p>
                    </div>
                    <div style={styles.input_box5}>
                        <p style={styles.p5}>가족 초대</p>
                    </div>
                </div>

                <div style={styles.policy_box}>
                    <div style={styles.input_box4}>
                        <p style={styles.p4}>약관 및 정책</p>
                    </div>
                    <div style={styles.input_box5}>
                        <p style={styles.p5}>서비스 이용 약관 </p>
                    </div>
                    <div style={styles.input_box5}>
                        <p style={styles.p5}>개인정보 처리 방침</p>
                    </div>
                </div>

                <div style={styles.logout_box}>
                    <div style={styles.input_box4} onClick={onLogoutClicked}>
                        <p style={styles.p4}>로그아웃</p>
                    </div>
                </div>
                
                {showLogoutModal && (
                    <div style={styles.LogoutModalBackdrop}>
                        <div style={styles.LogoutModal}>
                            <p4 style={styles.p7}>정말 로그아웃 하시겠습니까?</p4>
                            <button style={styles.button1} onClick={onConfirmLogout}>
                                <p3 style={styles.p6}>로그아웃</p3>
                            </button>
                            <button style={styles.button2} onClick={onCancelLogout}>
                                <p5 style={styles.p8}>취소</p5>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default MypageLayout;
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

    frame: {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        marginTop: "92px",
        marginLeft: "16px",
    },

    input: {
        display: "flex",
        width: "290px",
        height: "34px",
        fontSize: "13px",
        border: "none"
    },

    input2: {
        display: "flex",
        width: "290px",
        height: "34px",
        textAlign: "center",
        fontSize: "13px",
        border: "none"
    },

    input_box: {
        border: "0.5px solid #000000",
        height: "34px",
        width: "292.82px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "13px",
        marginTop: "20px",
        marginLeft: "34px",
        marginRight: "34px"

    },

    input_box2: {
        border: "0.5px solid #000000",
        backgroundColor: "#6F02DB",
        height: "34px",
        width: "292.82px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "13px",
        marginTop: "20px",
        marginLeft: "34px",
        marginRight: "34px"

    },

    input_box3: {
        border: "0.5px solid #000000",
        backgroundColor: "#CDCDCC",
        height: "34px",
        width: "292.82px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "13px",
        marginTop: "129px",
        marginLeft: "34px",
        marginRight: "34px"
    },

    under: {
        height: "34px",
        width: "292.82px",
        color: "#D9D9D9",
        fontSize: "5px",
        marginLeft: "10px",
    },

    p: {
        color: "#000",
        fontFamily: "Pretendard",
        fontSize: "22px",
        fontStyle: "normal",
        fontWeight: "600",
    },

    p2: {
        float: "left",
        marginLeft: "10px",
        height: 5,
        marginTop: "-2px",
        color: "#D9D9D9",
        fontSize: "7px",
        paddingBottom: "2px",
    },

    p3: {
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

    p4: {           //정말 탈퇴하시겠습니까?
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

    p5: {         //탈퇴 취소
        width: "47.943px",
        height: "32px",
        flexShrink: 0,
        color: "#000",
        fontSize: "13px",
        fontWeight: 600,
    },

    box: {
        marginLeft: "10px",
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

}

function MypageMemberInformation() {

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [isEmail, setIsEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

    const onSubmitphone = (e) => {
        setPhone(e.target.value);
    }

    const onSubmitemail = (e) => {
        const emailRegex =
            /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
        const emailCurrnet = e.target.value;
        setEmail(emailCurrnet);

        if (!emailRegex.test(emailCurrnet)) {
            setEmailMessage('올바르지 않은 이메일 형식입니다');
            setIsEmail(false);
        } else {
            setEmailMessage('올바른 이메일 형식입니다');
            setIsEmail(true);
        }
    };

    const onSubmitPassword = (e) => {
        const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        const passwordCurrent = e.target.value;
        setPassword(passwordCurrent);

        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8~16자리로 입력해주세요!');
            setIsPassword(false);
        } else {
            setPasswordMessage('안전한 비밀번호에요!');
            setIsPassword(true);
        }
    };

    const onSubmitPasswordConfirm = (e) => {
        const passwordConfirmCurrent = e.target.value;
        setPasswordConfirm(passwordConfirmCurrent);

        if (password == passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요')
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage('비밀번호가 틀려요 다시 입력해주세요')
            setIsPasswordConfirm(false)
        }
    };

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const onDeleteClicked = () => {
        setShowDeleteModal(true);
    };

    const onCancelDelete = () => {
        setShowDeleteModal(false);
    };

    const onConfirmDelete = () => {  //삭제
        setShowDeleteModal(false);
    };

    return (
        <>
            <div style={styles.box}>
                <div style={styles.header}>
                    <Header />
                </div>

                <div style={styles.healodyLogo}>
                    <healodyLogo />
                </div>

                <div style={styles.frame}>
                    <p style={styles.p}>회원 정보 수정</p>
                </div>

                <div style={styles.input_box}>
                    <input
                        type="text"
                        value={phone}
                        style={styles.input}
                        onChange={onSubmitphone}
                        placeholder="전화번호              010-1234-5678"
                    />
                </div>

                <div style={styles.input_box}>
                    <input
                        type="text"
                        value={email}
                        style={styles.input}
                        onChange={onSubmitemail}
                        placeholder="이메일              example@gmail.com "
                    />

                    <p2 style={styles.under}>{emailMessage}</p2>
                </div>

                <div style={styles.input_box}>
                    <input
                        type="text"
                        value={password}
                        style={styles.input2}
                        onChange={onSubmitPassword}
                        placeholder="비밀번호 재설정"
                    />

                    <p2 style={styles.under}>{passwordMessage}</p2>
                </div>

                <div style={styles.input_box}>
                    <input
                        type="text"
                        value={passwordConfirm}
                        style={styles.input2}
                        onChange={onSubmitPasswordConfirm}
                        placeholder="비밀번호 확인"
                    />

                    <p2 style={styles.under}>{passwordConfirmMessage}</p2>
                </div>

                <div style={styles.input_box2}>
                    <p3 style={styles.p3}>수정하기</p3>
                </div>

                <div style={styles.input_box3} onClick={onDeleteClicked}>
                    <p3 style={styles.p3}>탈퇴하기</p3>
                </div>

                {showDeleteModal && (
                    <div style={styles.deleteModalBackdrop}>
                        <div style={styles.deleteModal}>
                            <p4 style={styles.p4}>정말 탈퇴하시겠습니까?</p4>
                            <button style={styles.button1} onClick={onConfirmDelete}>
                                <p3 style={styles.p3}>탈퇴하기</p3>
                            </button>
                            <button style={styles.button2} onClick={onCancelDelete}>
                                <p5 style={styles.p5}>취소</p5>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default MypageMemberInformation;
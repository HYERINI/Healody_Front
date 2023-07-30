import React, { useState } from "react";
import { Header } from "../component/Header";
import HealodyLogo from "../img/HealodyLogo.png";



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

    input: {
        display: "flex",
        width: "132.442px",
        height: "34px",
        marginLeft: "80.71px",
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
        marginTop: "51px",
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
        marginTop: "220px",
        marginLeft: "34px",
        marginRight: "34px"
    },

    p: {
        color: "#ffffff",
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "40px",
        marginTop: "-5px"
    },
    
  
    img: {
        marginTop: "238px",
        marginLeft: "65px",
    },

    box: {
        marginLeft: "10px",
    },

}


function MypagePassword() {


    const [pw, setPw] = useState('')

    const onSubmitPw = (e) => {
        setPw(e.target.value);
    }

    return (
        <>
            <div style={styles.box}>
                <div style={styles.header}>
                    <Header />
                </div>

                <div style={styles.healodyLogo}>
                    <healodyLogo/>
                </div>

                <img style={styles.img} src={HealodyLogo} />

                <div style={styles.input_box}>
                    <input
                        type="text"
                        value={pw}
                        style={styles.input}
                        onChange={onSubmitPw}
                        placeholder="비밀번호 입력"
                    />
                </div>

                <div style={styles.input_box2}>
                    <p style={styles.p}>확인</p>
                </div>

            </div>
        </>
    );
}

export default MypagePassword; 
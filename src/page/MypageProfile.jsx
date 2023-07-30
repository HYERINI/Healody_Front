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


    ellipse: {
        position: "relative",
        marginTop: "43px",
        marginLeft: "155px",


    },

    UserImg: {
        position: "absolute",
        marginTop: "-53px",
        marginLeft: "19px",

    },

    camera: {
        position: "absolute",
        marginTop: "-31px",
        marginLeft: "47px",
    },

    text_box: {
        display: "flex",
        width: "122px",
        height: "16px",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "182px",
        marginLeft: "16px",
    },

    input: {
        display: "flex",
        width: "290px",
        height: "34px",
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
        marginTop: "251px",
        marginLeft: "34px",
        marginRight: "34px"

    },

    p: {
        color: "#000",
        fontSize: "22px",
        fontWeight: "600",
    },

    p2: {
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


function MypageProfile() {


    const [name, setName] = useState('')
    const onSubmitName = (e) => {
        setName(e.target.value);
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
                
                <div style={styles.text_box}>
                <p style={styles.p}>프로필 편집</p>
                </div>

                <div style={styles.ellipse}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="68" viewBox="0 0 71 68" fill="none">
                        <path d="M70.1096 34C70.1096 52.6316 54.4791 67.75 35.1798 67.75C15.8805 67.75 0.25 52.6316 0.25 34C0.25 15.3684 15.8805 0.25 35.1798 0.25C54.4791 0.25 70.1096 15.3684 70.1096 34Z" fill="white" stroke="black" stroke-width="0.5" />
                    </svg>
                    <div style={styles.UserImg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M4.604 31.1667V29.3958C4.604 27.768 4.92463 26.1561 5.54758 24.6522C6.17053 23.1482 7.0836 21.7817 8.23466 20.6307C9.38572 19.4796 10.7522 18.5665 12.2562 17.9436C13.7601 17.3206 15.372 17 16.9998 17C18.6277 17 20.2396 17.3206 21.7435 17.9436C23.2474 18.5665 24.614 19.4796 25.765 20.6307C26.9161 21.7817 27.8291 23.1482 28.4521 24.6522C29.075 26.1561 29.3957 27.768 29.3957 29.3958V31.1667" stroke="#414140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.9998 16.9999C18.8785 16.9999 20.6801 16.2536 22.0085 14.9253C23.3369 13.5969 24.0832 11.7952 24.0832 9.91659C24.0832 8.03797 23.3369 6.23629 22.0085 4.90791C20.6801 3.57953 18.8785 2.83325 16.9998 2.83325C15.1212 2.83325 13.3195 3.57953 11.9912 4.90791C10.6628 6.23629 9.9165 8.03797 9.9165 9.91659C9.9165 11.7952 10.6628 13.5969 11.9912 14.9253C13.3195 16.2536 15.1212 16.9999 16.9998 16.9999V16.9999Z" stroke="#414140" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div style={styles.camera}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path d="M25.1875 7.02344H21.7012L19.9805 4.44051C19.914 4.34089 19.824 4.25925 19.7183 4.20284C19.6127 4.14643 19.4948 4.11701 19.375 4.11719H11.625C11.5052 4.11701 11.3873 4.14643 11.2817 4.20284C11.176 4.25925 11.086 4.34089 11.0195 4.44051L9.29758 7.02344H5.8125C5.10595 7.02344 4.42833 7.30412 3.92872 7.80372C3.42911 8.30333 3.14844 8.98095 3.14844 9.6875V23.25C3.14844 23.9566 3.42911 24.6342 3.92872 25.1338C4.42833 25.6334 5.10595 25.9141 5.8125 25.9141H25.1875C25.8941 25.9141 26.5717 25.6334 27.0713 25.1338C27.5709 24.6342 27.8516 23.9566 27.8516 23.25V9.6875C27.8516 8.98095 27.5709 8.30333 27.0713 7.80372C26.5717 7.30412 25.8941 7.02344 25.1875 7.02344ZM26.3984 23.25C26.3984 23.5712 26.2709 23.8792 26.0438 24.1063C25.8167 24.3334 25.5087 24.4609 25.1875 24.4609H5.8125C5.49134 24.4609 5.18333 24.3334 4.95624 24.1063C4.72914 23.8792 4.60156 23.5712 4.60156 23.25V9.6875C4.60156 9.36634 4.72914 9.05833 4.95624 8.83124C5.18333 8.60414 5.49134 8.47656 5.8125 8.47656H9.6875C9.80725 8.47674 9.92519 8.44732 10.0308 8.39091C10.1365 8.3345 10.2265 8.25286 10.293 8.15324L12.0137 5.57031H18.9851L20.707 8.15324C20.7735 8.25286 20.8635 8.3345 20.9692 8.39091C21.0748 8.44732 21.1927 8.47674 21.3125 8.47656H25.1875C25.5087 8.47656 25.8167 8.60414 26.0438 8.83124C26.2709 9.05833 26.3984 9.36634 26.3984 9.6875V23.25ZM15.5 10.8984C14.4941 10.8984 13.5108 11.1967 12.6744 11.7556C11.838 12.3144 11.1861 13.1087 10.8012 14.0381C10.4163 14.9674 10.3155 15.99 10.5118 16.9766C10.708 17.9632 11.1924 18.8694 11.9037 19.5807C12.615 20.292 13.5212 20.7763 14.5078 20.9726C15.4944 21.1688 16.517 21.0681 17.4463 20.6832C18.3756 20.2982 19.17 19.6463 19.7288 18.81C20.2877 17.9736 20.5859 16.9903 20.5859 15.9844C20.5859 14.6355 20.0501 13.3419 19.0963 12.3881C18.1425 11.4343 16.8489 10.8984 15.5 10.8984ZM15.5 19.6172C14.7815 19.6172 14.0791 19.4041 13.4817 19.0049C12.8843 18.6058 12.4187 18.0384 12.1437 17.3746C11.8688 16.7108 11.7968 15.9803 11.937 15.2757C12.0772 14.571 12.4232 13.9236 12.9312 13.4156C13.4393 12.9075 14.0866 12.5615 14.7913 12.4214C15.496 12.2812 16.2264 12.3531 16.8902 12.6281C17.554 12.9031 18.1214 13.3687 18.5206 13.9661C18.9198 14.5635 19.1328 15.2659 19.1328 15.9844C19.1328 16.9479 18.7501 17.8719 18.0688 18.5532C17.3875 19.2344 16.4635 19.6172 15.5 19.6172Z" fill="black" />
                        </svg>
                    </div>
                </div>

                <div style={styles.input_box}>
                    <input
                        type="text"
                        value={name}
                        style={styles.input}
                        onChange={onSubmitName}
                        placeholder="닉네임                         차차차"
                    />
                </div>

                <div style={styles.input_box2}>
                    <p style={styles.p2}>수정하기</p>
                </div>
            </div>
        </>
    );
}

export default MypageProfile; 
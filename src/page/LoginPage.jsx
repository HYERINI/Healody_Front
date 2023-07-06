import React, { useState } from "react";

const styles={
    input: {
        border: "none",
        width: 320,
        height: 40,
        },
    input_box: {
        border: "1px solid #D9D9D9",
        height: 60,
        width: 328,
        textAlign: "center",
        padding: "5px",
        borderRadius: "10px",
        
    },
}

// const [name, setName] = useState('')
// const [nameMessage, setNameMessage] = useState('')
// const [isName, setIsName] = useState(false)

// const onSubmitName = (e) => {
//     setName(e.target.value);
//     if (e.target.value.length < 2 || e.target.value.length > 5) {
//       setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.');
//       setIsName(false);
//     } else {
//       setNameMessage('올바른 이름 형식입니다 :)');
//       setIsName(true);
//     }
//   }; 

  
function LoginPage() {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const onSubmitId = (e) => {
        setId(e.target.value);
    }

    const onSubmitPw = (e) => {
        setPw(e.target.value);
    }

    return (
        <>
            
            <div style={styles.input_box}>
                <p style={styles.p}>아이디</p>
                <input
                    type="text"
                    value={id}
                    style={styles.input}
                    onChange={onSubmitId}
                    placeholder="아이디를 입력해주세요"
                /> 
            </div>
            

            
            <div style={styles.input_box}>
                <p style={styles.p}>비밀번호</p>
                <input
                    type="text"
                    value={pw}
                    style={styles.input}
                    onChange={onSubmitPw}
                    placeholder="비밀번호를 입력해주세요"
                />
            </div>
            

        </>
    );
}

export default LoginPage;
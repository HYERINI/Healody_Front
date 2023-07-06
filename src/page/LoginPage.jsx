import React from "react";
import InputBox from "../component/InputBox";
import nextFalse from "../img/next_false.png";
import backIcon from "../img/back_icon.png";
const styles={
    input: {
        marginLeft: "10px",
    },
    p: {
        fontSize: "20px",
        marginLeft: "10px",
        fontWeight: "bold",
    },
    false: {
        marginTop: "-5px",
    },
    backIcon: {
        marginBottom: "-15px",
    }
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
    return (
        <>

            
            <img src={backIcon} style={styles.backIcon} />
            <p style={styles.p}>회원가입</p>
            <div style={styles.input}>
                <InputBox name="닉네임 입력" message="닉네임" under_msg="한글 혹은 영문을 포함하여 1~10자로 입력해주세요." />
                <br />
                <InputBox name="이메일 입력" message="아이디" />
                <br />
                <InputBox name="비밀번호 입력" message="비밀번호" under_msg="영어, 숫자, 특수문자를 조합하여 8~16자로 입력해주세요." />
                <br />
                <InputBox name="비밀번호 재입력" message="비밀번호 확인" under_msg="위에서 설정한 비밀번호를 다시 한번 입력하세요." />
                <br />
                <InputBox name="이메일/전화번호 입력" message="이메일/전화번호" />
                <br />
                <InputBox name="인증번호 6자리 입력" message="인증번호" />
                <br />
                <img src={nextFalse} style={styles.false} />
            </div>





        </>
    );
}

export default LoginPage;
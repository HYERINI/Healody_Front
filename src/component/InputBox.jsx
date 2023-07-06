import React, { useState } from 'react';

const styles= {
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
    p: {
        float: "left",
        marginLeft: "10px",
        height: 5,
        marginTop: "-2px",
        color: "#D9D9D9",
        fontSize: "7px",
        paddingBottom: "2px",
    },
    under: {
        color: "#D9D9D9",
        fontSize: "5px",
        marginLeft: "10px",
    }
}
// const InputBox = (props) => {
//   const [inputValue, setInputValue] = useState('');
//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

const InputBox = () => {

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [number, setNumber] = useState('')

    const [nameMessage, setNameMessage] = useState('')
    const [idMessage, setIdMessage] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    const [isName, setIsName] = useState(false)
    const [isId, setIsId] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

    const onSubmitName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 1 || e.target.value.length > 10) {
          setNameMessage('한글 혹은 영문을 포함하여 1~10자로 입력하세요.');
          setIsName(false);
        } else {
          setNameMessage('올바른 이름 형식입니다 :)');
          setIsName(true);
        }
      }; 

      const onSubmitId = (e) => {
        setId(e.target.value);
        const idRegex = /^(?=.*[a-z])(?=.*[0-9]).{6,12}$/;

        const idCurrent = e.target.value;
        setId(idCurrent);
        
        if(!idRegex.test(idCurrent)) {
            setIdMessage('영소문자, 숫자를 조합하여 6~12자를 입력하세요.');
            setIsId(false);
        } else {
            setIdMessage('올바른 형식이에요!');
            setIsId(true);
        }
      };

      const onSubmitEmail = (e) => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);

        if(!emailRegex.test(emailCurrent)) {
            setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해줘요');
            setIsEmail(false);
        }else {
            setEmailMessage('올바른 이메일 형식이에요');
            setIsEmail(true);
        }
        };

        const onSubmitPassword = (e) => {
            const passwordRegex = 
                /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
            const passwordCurrent = e.target.value;
            setPassword(passwordCurrent);

            if(!passwordRegex.test(passwordCurrent)) {
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
    
            if(password == passwordConfirmCurrent) {
                setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요')
                setIsPasswordConfirm(true)
            } else{
                setPasswordConfirmMessage('비밀번호가 틀려요 다시 입력해주세요')
                setIsPasswordConfirm(false)
            }
          };

        const onSubmitCertified = (e) => {
            setNumber(e.target.value);
        }

  return (
    <>
        <div>
            <div style={styles.input_box}>
            <p style={styles.p}>닉네임</p>
            <input
                type="text"
                value={name}
                style={styles.input}
                onChange={onSubmitName}
                placeholder="닉네임을 입력해주세요"
            />
            
            </div>
            <p style={styles.under}>{nameMessage}</p>
        </div>

        <div>
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
            <p style={styles.under}>{idMessage}</p>
        </div>


        <div>
            <div style={styles.input_box}>
            <p style={styles.p}>비밀번호</p>
            <input
                type="text"
                value={password}
                style={styles.input}
                onChange={onSubmitPassword}
                placeholder="비밀번호를 입력해주세요"
            />
            
            </div>
            <p style={styles.under}>{passwordMessage}</p>
        </div>

        <div>
            <div style={styles.input_box}>
            <p style={styles.p}>비밀번호 확인</p>
            <input
                type="text"
                value={passwordConfirm}
                style={styles.input}
                onChange={onSubmitPasswordConfirm}
                placeholder="비밀번호를 다시 입력해주세요"
            />
            
            </div>
            <p style={styles.under}>{passwordConfirmMessage}</p>
        </div>

        <div>
            <div style={styles.input_box}>
            <p style={styles.p}>이메일</p>
            <input
                type="text"
                value={email}
                style={styles.input}
                onChange={onSubmitEmail}
                placeholder="이메일을 입력해주세요"
            />
            
            </div>
            <p style={styles.under}>{emailMessage}</p>
        </div>

        <div>
            <div style={styles.input_box}>
            <p style={styles.p}>인증번호</p>
            <input
                type="text"
                value={number}
                style={styles.input}
                onChange={onSubmitCertified}
                placeholder="인증번호 6자리 입력"
            />
            
            </div>
        </div>


    </>
  );
};

export default InputBox;

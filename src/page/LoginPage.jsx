import React, { useState } from "react";
import BackIcon from "../img/back_icon.png";
import LoginFalse from "../img/login_false.png";
import axios from 'axios';
import LoginModal from "../component/LoginModal";

const styles={
    input: {
        border: "none",
        width: 320,
        height: 40,
        marginTop: "10px",
        },
        input_box: {
            border: "1px solid #D9D9D9",
            height: 70,
            width: 328,
            textAlign: "center",
            padding: "5px",
            borderRadius: "10px",
            marginTop: "10px"
            
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
    img: {
        
        marginTop: "10px",
        marginLeft: "-10px",
    },
    title: {
        fontWeight: "bold",
        fontSize: "20px",
    },
    box: {
        marginLeft: "10px",
    },
    
    logbox: {
        textAlign: "center",
        position: "fixed",
        bottom: "10px",
        right: "20px",
    },
    list: {
        display: "flex",
        listStyle: "none",
        padding: 0,
        fontSize: "14px",
        
    },
    inList: {
        marginLeft: "10px",
    },
    inList1: {
        marginLeft: "10px",
        color: "#CDCDCC",
    },
    listbox: {
        position: "fixed",
        bottom: "65px",
        right: "55px",
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

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [formData, setFormData] = useState({
        phone: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleLogin = () => {
        const requestBody = {
            phone: formData.phone,
            password : formData.password,
        };
        axios('http://port-0-healody-ixj2mllkwb0s3.sel3.cloudtype.app/api/auth/login',{
                data: requestBody,
                method: 'POST',
            })
            .then(function(response) {
                console.log(requestBody);
                console.log(response.data.token);
                const token = response.data.token;
                localStorage.setItem('token', token);
                // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                window.location.href="/agree_page";
            })
            .catch(function(error) {
                console.log(error.response.status);
                if(error.response.status == 401) {
                    return(
                    <>
                     <LoginModal message="This is Modal" />
                     </>
                    )
                }
            })
            
        

        
        // axios.post('http://port-0-healody-ixj2mllkwb0s3.sel3.cloudtype.app/api/auth/login', {
        //     data: requestBody,
        //   })
        //   .then(response => {
        //     const token = response.data.token;
        //     // 로컬 스토리지에 토큰 저장
        //     localStorage.setItem('jwt_token', token);
        //   });

        //   const token = localStorage.getItem('jwt_token');
        //   axios.get('http://port-0-healody-ixj2mllkwb0s3.sel3.cloudtype.app/api/auth/login', {
        //     headers: {
        //       Authorization: `Bearer ${token}`
        //     }
        //   })
        //   .then(response => {
        //     // 서버로부터 받은 데이터 처리
        //   })
        //   .catch(error => {
        //     // 에러 처리
        //   });
    }

    

    // const onSubmitId = (e) => {
    //     setId(e.target.value);
    // }

    // const onSubmitPw = (e) => {
    //     setPw(e.target.value);
    // }



    return (
        <>
            <div style={styles.box}>
            <img  style={styles.img} src={BackIcon} />
            <p style={styles.title}>로그인</p>
            
            <div style={styles.input_box}>
                <p style={styles.p}>아이디</p>
                <input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    style={styles.input}
                    onChange={handleInputChange}
                    placeholder="전화번호(- 빼고 번호만 입력)를 입력해주세요"
                /> 
            </div>
            

            <br />
            <div style={styles.input_box}>
                <p style={styles.p}>비밀번호</p>
                <input
                    name="password"
                    type="text"
                    value={formData.password}
                    style={styles.input}
                    onChange={handleInputChange}
                    placeholder="비밀번호 입력"
                />
            </div>
            </div>
            <div style={styles.listbox}>
                <ul style={styles.list}>
                    <li style={styles.inList}>
                        아이디 찾기
                    </li>
                    <li style={styles.inList1}>
                        |
                    </li>
                    <li style={styles.inList}>
                        비밀번호 찾기
                    </li>
                    <li style={styles.inList1}>
                        |
                    </li>
                    <li style={styles.inList}>
                        회원가입
                    </li>
                </ul>
            </div>
            <div style={styles.logbox}>
                <img onClick={handleLogin} src={LoginFalse} />
            </div>
        </>
    );
}

export default LoginPage;
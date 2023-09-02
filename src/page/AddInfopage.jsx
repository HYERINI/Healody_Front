import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BackIcon from "../img/back_icon.png";
import LoginFalse from "../img/login_false.png";
import axios from 'axios';

function AddInfopage() {

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
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        nickName: "",
        gender: "",
        birth: "",
        phone: "",
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleLogin = () => {
        const requestBody = {
            email: localStorage.getItem('email'),
            nickName: formData.nickName,
            gender: formData.gender.toString(),
            birth: formData.birth,
            phone: formData.phone,
        };
        axios(`https://healody.shop/api/auth/kakao/join/getInfo?email=${requestBody.email}&nickName=${requestBody.nickName}&gender=${requestBody.gender}&birth=${requestBody.birth}&phone=${requestBody.phone}`, {
            method: 'GET',
        })
        .then(function(response) {
            alert('추가 정보 기입이 완료되었습니다');
            localStorage.setItem('phone',response.data.phone);
            navigate('/add_loadingpage');
        })
        .catch(function(error) {
            console.log(error.response.status);
        })
    }

    const handleSaveNickname = () => {
        var nickname =new String(formData.nickName);

        const requestBodynickname = {
            nickname : nickname
        };
        console.log(nickname);
        axios({
            url: 'https://healody.shop/api/auth/nickname/'+requestBodynickname.nickname+'/exists',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                withCredentials: true
            },
            data: requestBodynickname,
            success: function(){
                console.log(requestBodynickname);
            }
        })
    }

    return (
        <>
        <div style={styles.box}>
            <img  style={styles.img} src={BackIcon} />
            <p style={styles.title}>추가정보 입력</p>
            
            <div style={styles.input_box}>
                <p style={styles.p}>닉네임</p>
                <input
                    name="nickName"
                    type="text"
                    value={formData.nickName}
                    style={styles.input}
                    onChange={handleInputChange}
                    placeholder="닉네임을 입력해주세요"
                /> 
                <button onClick={handleSaveNickname}>닉네임 중복체크하기</button>
            </div>
            

            <br />
            <div style={styles.input_box}>
                <p style={styles.p}>성별</p>
                <input
                    name="gender"
                    type="text"
                    value={formData.gender}
                    style={styles.input}
                    onChange={handleInputChange}
                    placeholder="성별을 입력해주세요"
                />
            </div>

            <div style={styles.input_box}>
                <p style={styles.p}>생년월일</p>
                <input
                    name="birth"
                    type="text"
                    value={formData.birth}
                    style={styles.input}
                    onChange={handleInputChange}
                    placeholder="생년월일을 입력해주세요"
                />
            </div>

            <div style={styles.input_box}>
                <p style={styles.p}>전화번호</p>
                <input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    style={styles.input}
                    onChange={handleInputChange}
                    placeholder="전화번호를 입력해주세요"
                />
            </div>

            <button onClick={handleLogin}>입력</button>
            </div>
        </>
    )
}

export default AddInfopage;

    
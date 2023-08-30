
import React from "react";
import axios from 'axios'; 
function Loading() {
    console.log(window.location.href);
    let ingacode = new URL(window.location.href).searchParams.get('code');
    console.log(ingacode);
    const requestBody = {
        code: ingacode,
    };
    axios('http://15.165.115.39:8080/api/auth/kakao/callback',{
        data:requestBody,
        method: 'POST',
    })
    .then(function(response) {
        alert('로그인됐다임마')
        console.log(response);
    })
    .catch(function(error) {
        console.log('에러남');
    })
    return (
        <>
        </>
    );
}

export default Loading;
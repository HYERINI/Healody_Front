import React from "react";
import axios from 'axios'; 
function Loading() {
    console.log(window.location.href);
    let ingacode = new URL(window.location.href).searchParams.get('code');
    const requestBody = {
        code: ingacode,
    };
    console.log(requestBody);
    axios('http://localhost:8080/api/auth/kakao/callback',{
        data:requestBody,
        method: 'GET',
    })
    .then(function(response) {
        alert('로그인됐다임마')
        
        console.log(response);
    })
    .catch(function(error) {
        
    })
    return (
        <>
        </>
    );
}

export default Loading;
import Kakaobtn from "../img/kakaobtn.png";

const KakaoLogin = () => {
    const CLIENT_ID = "5b43320b1c067a813d0d15ef55f6ebf3";
    const REDIRECT_URI = "http://localhost:3000/home";
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

    return(
        <img
            alt="카카오 로그인"
            src={Kakaobtn}
            width="328"
            height="55"
            style={{margin: '0px 24px 16px 24px'}}
            onClick={() => window.location.href = kakaoURL}
        />
    )
}

export default KakaoLogin;
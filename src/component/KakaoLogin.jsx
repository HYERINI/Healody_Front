import Kakaobtn from "../img/kakaobtn.png";

const KakaoLogin = () => {
    
    const kakaoURL = 'https://kauth.kakao.com/oauth/authorize?client_id=c33420b52702ac0ebf8805e80e6078f1&redirect_uri=http://port-0-healody-ac2nlkqfipr3.sel4.cloudtype.app/api/auth/kakao/callback&response_type=code';

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
function KakaoLogin() {
    const client_id='c33420b52702ac0ebf8805e80e6078f1';
    const redirect_uri= 'http://localhost:3000/loading';
     const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
    return(
       <>
        <a href={KAKAO_AUTH_URL} className="kakaobtn">
           눌러
        </a>
       </>
    );
}
export default KakaoLogin;


import Component from "../../core/Component.js";

class LoginLink extends Component {
    render() {
        const linkCont = document.createElement('div');
        linkCont.setAttribute('class', 'loginPage_div_linkCont');

        const searchLink = document.createElement('a');
        searchLink.href = '#';
        searchLink.setAttribute('class', 'loginPage_a_search');
        searchLink.textContent = '아이디·비밀번호 찾기';
        searchLink.addEventListener('click',searchLinkAlert);
        
        const signUpLink = document.createElement('a');
        signUpLink.href = '/signup';
        signUpLink.setAttribute('class', 'loginPage_a_signUp');
        signUpLink.textContent = '회원가입';

        linkCont.appendChild(searchLink);
        linkCont.appendChild(signUpLink);

        function searchLinkAlert(){
            alert('아직 개발중입니다 히히');
        }

        return linkCont;
    }
}

export default LoginLink;
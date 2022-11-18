import Component from "../../core/Component.js";

class loginLink extends Component {
    render() {
        const linkCont = document.createElement('div');
        linkCont.classList.add('loginPage_div_linkCont');

        const searchLink = document.createElement('a');
        searchLink.setAttribute('href', '#');
        searchLink.classList.add('loginPage_a_search');
        searchLink.textContent = '아이디·비밀번호 찾기';

        const signUpLink = document.createElement('a');
        signUpLink.setAttribute('href', 'src/javascript/pages/signupPage.js');
        signUpLink.classList.add('loginPage_a_signUp');
        signUpLink.textContent = '회원가입';

        linkCont.appendChild(searchLink);
        linkCont.appendChild(signUpLink);

        return linkCont;
    }
}

export default loginLink;
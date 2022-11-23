import { LoginForm, LoginLink } from "../components/Login/index.js";

class LoginPage {
    constructor() { }
    render() {
        const frag = document.createDocumentFragment();

        const bodybgc = document.createElement('div');
        bodybgc.setAttribute('class', 'loginPage_bodyWrapper');

        // logoImg(h1)
        const logo = document.createElement('h1');

        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', 'src/assets/logo.svg');
        logoImg.setAttribute('alt', '비밀멋사 로고이미지');
        logoImg.setAttribute('class', 'loginPage_img_headerLogo');

        // title
        const title = document.createElement('p');
        title.setAttribute('class', 'loginPage_h1_title');
        title.textContent = '멋쟁이사자처럼 프론트엔드 스쿨의 비밀이야기';

        //main
        const loginMain = document.createElement('main');
        loginMain.setAttribute('class', 'loginPage_main_wrapper');

        //main > subTit
        const subTit = document.createElement('p');
        subTit.setAttribute('class', 'loginPage_p_subTit');
        subTit.innerHTML = '지금 <strong class="loginPage_strong">비밀멋사</strong>를 시작하세요!';

        // main > form
        // const formCont = document.createElement('form');
        // formCont.classList.add('loginPage_form_inpCont');

        // const inpId = document.createElement('input');
        // inpId.setAttribute('type', 'text');
        // inpId.setAttribute('placeholder', '아이디');
        // inpId.attributes['required'];
        // inpId.classList.add('loginPage_inp_id');

        // const inpPwd = document.createElement('input');
        // inpPwd.setAttribute('type', 'password');
        // inpPwd.setAttribute('placeholder', '비밀번호');
        // inpPwd.attributes['required'];
        // inpPwd.classList.add('loginPage_inp_pwd');

        // const loginBtn = document.createElement('button');
        // loginBtn.classList.add('loginPage_btn_login');
        // loginBtn.textContent = '로그인';

        // 아이디비번 찾기 및 회원가입 링크
        // const linkCont = document.createElement('div');
        // linkCont.classList.add('loginPage_div_linkCont');

        // const searchLink = document.createElement('a');
        // searchLink.setAttribute('href', '#');
        // searchLink.classList.add('loginPage_a_search');
        // searchLink.textContent = '아이디·비밀번호 찾기';

        // const signUpLink = document.createElement('a');
        // signUpLink.setAttribute('href', 'src/javascript/pages/signupPage.js');
        // signUpLink.classList.add('loginPage_a_signUp');
        // signUpLink.textContent = '회원가입';

        // logoImg
        logo.appendChild(logoImg);

        // main
        const loginForm = new LoginForm();
        const loginLink = new LoginLink();
        loginMain.appendChild(subTit);
        loginMain.appendChild(loginForm.render());
        loginMain.appendChild(loginLink.render());

        //form
        // inpCont.appendChild(inpId);
        // inpCont.appendChild(inpPwd);
        // inpCont.appendChild(loginBtn);

        //아이디비번찾기와 회원가입링크
        // linkCont.appendChild(searchLink);
        // linkCont.appendChild(signUpLink);

        //전체 
        bodybgc.appendChild(logo);
        bodybgc.appendChild(title);
        bodybgc.appendChild(loginMain);
        frag.appendChild(bodybgc);

        return frag;
    }
}

export default LoginPage;

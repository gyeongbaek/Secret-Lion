class LoginPage {
    constructor() {}
    render() {
        const frag = document.createDocumentFragment();
        
        const bodybgc = document.createElement('div');
        bodybgc.classList.add('loginPage_bodyWrapper');

        //header
        const logInheader = document.createElement('header');
        logInheader.classList.add('loginPage_header');

        //header > logoImg
        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', 'src/assets/logo.svg');
        logoImg.setAttribute('alt', '비밀멋사 로고이미지');
        logoImg.classList.add('loginPage_img_headerLogo');

        //header > title
        const title = document.createElement('h1');
        title.classList.add('loginPage_h1_title');
        title.textContent = '멋쟁이사자처럼 프론트엔드 스쿨의 비밀이야기';

        //main
        const loginMain = document.createElement('main');
        loginMain.classList.add('loginPage_main_wrapper');

        //main > subTit
        const subTit = document.createElement('p');
        subTit.setAttribute('class', 'loginPage_p_subTit');
        subTit.textContent = '지금 를 시작하세요!'
        
        const loginStrong = document.createElement('strong');
        loginStrong.setAttribute('class', 'loginPage_strong');
        loginStrong.textContent = '비밀멋사';

        //main > formCont
        const formCont = document.createElement('div');
        formCont.classList.add('loginPage_div_formCont');

        //main > formCont > form
        const inpCont = document.createElement('form');
        inpCont.classList.add('loginPage_form_inpCont');

        //main > formCont > form > input
        const inpId = document.createElement('input');
        inpId.setAttribute('type', 'text');
        inpId.setAttribute('placeholder', '아이디');
        inpId.attributes['required'];
        inpId.classList.add('loginPage_inp_id');

        const inpPwd = document.createElement('input');
        inpPwd.setAttribute('type', 'password');
        inpPwd.setAttribute('placeholder', '비밀번호');
        inpPwd.attributes['required'];
        inpPwd.classList.add('loginPage_inp_pwd');

        //main > formCont > form > button
        const loginBtn = document.createElement('button');
        loginBtn.classList.add('loginPage_btn_login');
        loginBtn.textContent = '로그인';

        // 아이디비번 찾기 및 회원가입 링크
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

        //header
        logInheader.appendChild(logoImg);
        logInheader.appendChild(title);

        //main
        loginMain.appendChild(subTit);
        loginMain.appendChild(formCont);
        loginMain.appendChild(linkCont);

        //sub title
        subTit.appendChild(loginStrong);

        //form
        formCont.appendChild(inpCont);
        formCont.appendChild(loginBtn);
        inpCont.appendChild(inpId);
        inpCont.appendChild(inpPwd);

        //아이디비번찾기와 회원가입링크
        linkCont.appendChild(searchLink);
        linkCont.appendChild(signUpLink);
        
        //전체 
        bodybgc.appendChild(logInheader);
        bodybgc.appendChild(loginMain);
        frag.appendChild(bodybgc);

        return frag;
    }
}

export default LoginPage;

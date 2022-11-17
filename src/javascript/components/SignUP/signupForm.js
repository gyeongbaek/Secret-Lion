import Component from "../../core/Component.js";

class SignupForm extends Component {
    render(){
        const formCont = document.createElement('div');
        formCont.setAttribute('class', 'signupPage_div_formCont');

        const signupForm = document.createElement('form');
        signupForm.setAttribute('class','signupPage_form');

        const inpId = document.createElement('input');
        inpId.setAttribute('type', 'text');
        inpId.setAttribute('placeholder', '아이디');
        inpId.setAttribute('name', 'id');
        inpId.setAttribute('id', 'signupPage_inp_id');
        inpId.attributes['required'];

        const inpPwd = document.createElement('input');
        inpPwd.setAttribute('type', 'password');
        inpPwd.setAttribute('placeholder', '비밀번호');
        inpPwd.setAttribute('name', 'password');
        inpPwd.setAttribute('id', 'signupPage_inp_pwd');
        inpPwd.attributes['required'];

        const inpPwdCheck = document.createElement('input');
        inpPwdCheck.setAttribute('type', 'password');
        inpPwdCheck.setAttribute('placeholder', '비밀번호 확인');
        inpPwdCheck.setAttribute('name', 'password-check');
        inpPwdCheck.setAttribute('id', 'signupPage_inp_pwdCheck');
        inpPwdCheck.attributes['required'];

        const inpNickname = document.createElement('input');
        inpNickname.setAttribute('type', 'text');
        inpNickname.setAttribute('placeholder', '닉네임');
        inpNickname.setAttribute('name', 'nickname');
        inpNickname.setAttribute('id', 'signupPage_inp_nickname');
        inpNickname.attributes['required'];

        // acceptCont
        const acceptCont = document.createElement('div');
        acceptCont.setAttribute('class', 'signupPage_div_acceptCont');

        const acceptLab = document.createElement('label');
        acceptLab.setAttribute('for', 'signupPage_check_accept');
        acceptLab.setAttribute('class', 'signupPage_acceptLab');
        acceptLab.textContent = '비밀멋사 커뮤니티 규칙과 개인정보 수집에 동의합니다.';
        
        const acceptCheck = document.createElement('input');
        acceptCheck.setAttribute('type', 'checkbox');
        acceptCheck.setAttribute('id', 'signupPage_check_accept');

        const signupBtn = document.createElement('button');
        signupBtn.setAttribute('class', 'loginPage_btn_signUp');
        signupBtn.textContent = '회원가입';

        formCont.appendChild(signupForm);
        formCont.appendChild(inpId);
        formCont.appendChild(inpPwd);
        formCont.appendChild(inpPwdCheck);
        formCont.appendChild(inpNickname);
        formCont.appendChild(acceptCont);
        formCont.appendChild(signupBtn);

        acceptCont.appendChild(acceptLab);
        acceptCont.appendChild(acceptCheck);

        return formCont;
    }
}

export default SignupForm;

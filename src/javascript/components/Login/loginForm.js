import Component from "../../core/Component.js";

class loginForm extends Component {
    render() {
        const inpCont = document.createElement('form');
        inpCont.classList.add('loginPage_form_inpCont');

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

        const loginBtn = document.createElement('button');
        loginBtn.classList.add('loginPage_btn_login');
        loginBtn.textContent = '로그인';

        inpCont.appendChild(inpId);
        inpCont.appendChild(inpPwd);
        inpCont.appendChild(loginBtn);

        return inpCont;
    }
}

export default loginForm;
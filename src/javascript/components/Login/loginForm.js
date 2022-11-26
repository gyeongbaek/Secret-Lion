import Component from '../../core/Component.js';
import { auth, signInWithEmailAndPassword, signOut } from '../../firebase.js';

class LoginForm extends Component {
    render() {
        const formCont = document.createElement('form');
        formCont.setAttribute('class', 'loginPage_form_inpCont');

        const inpId = document.createElement('input');
        inpId.setAttribute('type', 'text');
        inpId.setAttribute('placeholder', '이메일');
        inpId.setAttribute('class', 'loginPage_inp_id');
        inpId.attributes['required'];

        const emailErr = document.createElement('p');
        emailErr.style.color = 'red';
        emailErr.style.fontSize = '14px';
        
        const inpPwd = document.createElement('input');
        inpPwd.setAttribute('type', 'password');
        inpPwd.setAttribute('placeholder', '비밀번호');
        inpPwd.setAttribute('class', 'loginPage_inp_pwd');
        inpPwd.attributes['required'];

        const pwdErr = document.createElement('p');
        pwdErr.style.color = 'red';
        pwdErr.style.fontSize = '14px';

        const loginBtn = document.createElement('button');
        loginBtn.setAttribute('class', 'loginPage_btn_login');
        loginBtn.textContent = '로그인';

        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = '로그아웃!';

        formCont.appendChild(inpId);
        formCont.appendChild(emailErr);
        formCont.appendChild(inpPwd);
        formCont.appendChild(pwdErr);
        formCont.appendChild(loginBtn);
        formCont.appendChild(logoutBtn);

        async function login(event) {
            event.preventDefault();
            const newId = inpId.value;
            const newPwd = inpPwd.value;

            try {
                await signInWithEmailAndPassword(auth, newId, newPwd);
                console.log('로그인 완료');
            } catch (error) {
                console.log(error);
                if(error.code === 'invalid-email'){
                    emailErr.textContent = '올바른 이메일 형식이 아닙니다.';
                    emailErr.style.margin = '0 0 15px 5px';
                }else if(error.code==='auth/email-already-exists'){
                    emailErr.textContent = '이미 가입한 이메일 주소입니다.';
                    emailErr.style.margin = '0 0 15px 5px';
                }else if(error.code==='auth/invalid-password' || error.code==='auth/weak-password'){
                    pwdErr.textContent = '최소 6자 이상 입력해주세요.';
                    pwdErr.style.margin = '0 0 15px 5px'
                }
                //auth/invalid~ : 공백으로 제출하면 뜨는 에러인 듯 
            }

            inpId.value = "";
            inpPwd.value = "";
        }

        loginBtn.addEventListener('click', login);
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signOut(auth);
            console.log('로그아웃!');
        });
        return formCont;
    }
}

export default LoginForm;

import Component from '../../core/Component.js';
import { auth, doc, signInWithEmailAndPassword, signOut } from '../../firebase.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

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

        // const logoutBtn = document.createElement('button');
        // logoutBtn.textContent = '로그아웃!';

        //url main페이지로 가게 만들어줘야 한다
        const loginLink = document.createElement('a');
        loginLink.setAttribute('class', 'ir');
        loginLink.setAttribute('href', '/');

        formCont.appendChild(inpId);
        formCont.appendChild(emailErr);
        formCont.appendChild(inpPwd);
        formCont.appendChild(pwdErr);
        formCont.appendChild(loginBtn);
        // formCont.appendChild(logoutBtn);
        formCont.appendChild(loginLink);

        async function login(event) {
            event.preventDefault();
            const newId = inpId.value;
            const newPwd = inpPwd.value;

            try {
                emailErr.textContent = '';
                emailErr.style.margin = '0';
                pwdErr.textContent = '';
                pwdErr.style.margin = '0';
                const userInfo = await signInWithEmailAndPassword(auth, newId, newPwd);
                localStorage.setItem('token', userInfo.user.uid);
                loginLink.click();
                location.reload();
            } catch (error) {
                console.log(error);
                if (error.code === 'auth/invalid-email') {
                    emailErr.textContent = '올바른 이메일 형식이 아닙니다.';
                    emailErr.style.marginTop = '7px';
                }else if(error.code === 'auth/user-not-found'){
                    emailErr.textContent = '존재하지 않는 이메일입니다.';
                    emailErr.style.marginTop = '7px';
                }else if(error.code==='auth/wrong-password'){
                    pwdErr.textContent = '비밀번호가 틀립니다.';
                    pwdErr.style.marginTop = '7px';
                }else if(error.code==='auth/too-many-requests'){
                    window.alert('비밀번호 3회 이상 틀렸습니다. 잠시 후 시도하세요.');
                }
            }
        }

        loginBtn.addEventListener('click', login);
        // logoutBtn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     signOut(auth);
        //     console.log('로그아웃!');
        //     localStorage.removeItem('token');
        // });
        const frag = document.createDocumentFragment()
        // formCont.appendChild(this.a);
        frag.appendChild(formCont);

        return formCont;
    }
}

export default LoginForm;

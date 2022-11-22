import Component from "../../core/Component.js";
import { auth, signInWithEmailAndPassword, signOut } from "../../firebase.js";

class LoginForm extends Component {
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

        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = '로그아웃!';

        inpCont.appendChild(inpId);
        inpCont.appendChild(inpPwd);
        inpCont.appendChild(loginBtn);
        inpCont.appendChild(logoutBtn);

        async function handleToDoSubmit(event){
            event.preventDefault();
            const newId = inpId.value;
            console.log(newId);
            
            const newPwd = inpPwd.value;
            console.log(newPwd);
            
            console.log(newId, newPwd);

            try{
                await signInWithEmailAndPassword(auth, newId, newPwd);
                console.log('로그인 완료');
            }catch(error){
                console.log(error);
            }

            inpId.value = "";
            inpPwd.value = "";
            console.log('완료!');
        }

        loginBtn.addEventListener('click', handleToDoSubmit);
        logoutBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            signOut(auth);
            console.log("로그아웃!");
        })
        return inpCont;
    }

}

export default LoginForm;
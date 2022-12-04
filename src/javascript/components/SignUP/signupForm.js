import Component from "../../core/Component.js";
import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../../firebase.js";
import PrivacyModal from "./privacyModal.js";
import SocialRuleModal from "./socialRuleModal.js";

class SignupForm extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const signupForm = document.createElement('form');
        signupForm.setAttribute('class','signupPage_form');

        const inpId = document.createElement('input');
        inpId.setAttribute('type', 'text');
        inpId.setAttribute('placeholder', '이메일');
        inpId.setAttribute('name', 'id');
        inpId.setAttribute('id', 'signupPage_inp_id');
        inpId.required = true;

        const emailErr = document.createElement('p');
        emailErr.style.color = 'red';
        emailErr.style.fontSize = '14px';

        const inpPwd = document.createElement('input');
        inpPwd.setAttribute('type', 'password');
        inpPwd.setAttribute('placeholder', '비밀번호');
        inpPwd.setAttribute('name', 'password');
        inpPwd.minLength = '6';
        inpPwd.setAttribute('id', 'signupPage_inp_pwd');
        inpPwd.required = true;

        const pwdErr = document.createElement('p');
        pwdErr.style.color = 'red';
        pwdErr.style.fontSize = '14px';

        const inpPwdCheck = document.createElement('input');
        inpPwdCheck.setAttribute('type', 'password');
        inpPwdCheck.setAttribute('placeholder', '비밀번호 확인');
        inpPwdCheck.setAttribute('name', 'password-check');
        inpPwdCheck.setAttribute('id', 'signupPage_inp_pwdCheck');
        inpPwdCheck.required = true;

        const pwdCheckErr = document.createElement('p');
        pwdCheckErr.style.color = 'red';
        pwdCheckErr.style.fontSize = '14px';

        const inpNickname = document.createElement('input');
        inpNickname.setAttribute('type', 'text');
        inpNickname.setAttribute('placeholder', '닉네임 (필수)');
        inpNickname.setAttribute('name', 'nickname');
        inpNickname.setAttribute('id', 'signupPage_inp_nickname');
        inpNickname.required = true;

        const nickNameErr = document.createElement('p');
        nickNameErr.style.color = 'red';
        nickNameErr.style.fontSize = '14px';

        // acceptCont
        const acceptCont = document.createElement('div');
        acceptCont.setAttribute('class', 'signupPage_div_acceptCont');

        const div1 = document.createElement('div');
        div1.setAttribute('class', 'socialRuleDiv1');
        
        const acceptLab = document.createElement('label');
        acceptLab.setAttribute('for', 'signupPage_check_accept');
        acceptLab.setAttribute('class', 'signupPage_acceptLab');
        
        const acceptCheck = document.createElement('input');
        acceptCheck.setAttribute('type', 'checkbox');
        acceptCheck.setAttribute('id', 'signupPage_check_accept');
        acceptCheck.required = true;
        
        const socialRuleModalBtn = document.createElement('button');
        socialRuleModalBtn.type = 'button';
        socialRuleModalBtn.setAttribute('class', 'signupPage_btn_socialRule');
        socialRuleModalBtn.textContent = '비밀멋사 커뮤니티 규칙';

        const firstSpan = document.createElement('span');
        firstSpan.textContent = '과 ';

        const div2 = document.createElement('div');
        div2.setAttribute('class', 'privacyDiv2');

        const privacyModalBtn = document.createElement('button');
        privacyModalBtn.type = 'button';
        privacyModalBtn.setAttribute('class', 'signupPage_btn_privacy') ;
        privacyModalBtn.textContent = '개인정보 수집/이용';

        const secSpan = document.createElement('span');
        secSpan.textContent = '에 동의합니다.';
        
        const unchecked = document.createElement('p');
        unchecked.style.color = 'red';
        unchecked.style.fontSize = '14px';

        const signupBtn = document.createElement('button');
        signupBtn.setAttribute('class', 'loginPage_btn_signUp');
        signupBtn.textContent = '회원가입';

        //url main페이지로 가게 만들어줘야 한다 
        const loginLink = document.createElement('a');
        loginLink.setAttribute('class','ir');
        loginLink.setAttribute('href','/');
        
        async function handleToDoSubmit(event){
            event.preventDefault();
            const newId = inpId.value;
            const newPwd = inpPwd.value;
            const newPwdCheck = inpPwdCheck.value;   
            const newNickname = inpNickname.value;

            try{
                const createUser = await createUserWithEmailAndPassword(auth, newId, newPwd);
                emailErr.textContent = '';
                emailErr.style.margin = '0';
                pwdErr.textContent = '';
                pwdErr.style.margin = '0';
                if(newPwd!==newPwdCheck){
                    pwdCheckErr.textContent = '비밀번호가 일치하지 않습니다.';
                    pwdCheckErr.style.margin = '0 0 15px 5px';
                    return
                }else if(newNickname===''){
                    nickNameErr.textContent = '닉네임은 필수항목입니다.';
                    nickNameErr.style.margin = '0 0 15px 5px';
                    return 
                }else if(acceptCheck.checked === false){
                    unchecked.textContent = '커뮤니티 규칙과 개인정보 수집 및 이용에 대한 안내에 동의해주세요.';
                    unchecked.style.margin = '20px 0 0 5px';
                    unchecked.style.lineHeight = '130%';
                    return
                }

                const userData = {
                    displayName : newNickname,
                    photoURL : null,
                    email: newId,
                    uid: createUser.user.uid
                };
                console.log(createUser);
                console.log('회원가입 완.');
                await setDoc(doc(db, 'users', createUser.user.uid), userData);
                
                localStorage.setItem('token', userData.uid);
                loginLink.click();
                location.reload();

            }catch(error){
                console.log(error.code);
                if(error.code === 'auth/invalid-email' || error.code === 'auth/internal-error'){
                    emailErr.textContent = '올바른 이메일 형식이 아닙니다.';
                    emailErr.style.margin = '0 0 15px 5px';
                }else if(error.code === 'auth/email-already-in-use'){
                    emailErr.textContent = '이미 가입된 이메일 입니다.';
                    emailErr.style.margin = '0 0 15px 5px';
                }else if(error.code==='auth/invalid-password' || error.code==='auth/weak-password'){
                    pwdErr.textContent = '최소 6자 이상 입력해주세요.';
                    pwdErr.style.margin = '0 0 15px 5px';
                }
            }

            // inpId.value = "";
            // inpPwd.value = "";
            // inpPwdCheck.value = "";
            // inpNickname.value = "";

            pwdCheckErr.textContent = '';
            pwdCheckErr.style.margin = '0';
            nickNameErr.textContent = '';
            nickNameErr.style.margin = '0';
        }

        signupBtn.addEventListener('click', handleToDoSubmit);

        signupForm.appendChild(inpId);
        signupForm.appendChild(emailErr);
        signupForm.appendChild(inpPwd);
        signupForm.appendChild(pwdErr);
        signupForm.appendChild(inpPwdCheck);
        signupForm.appendChild(pwdCheckErr);
        signupForm.appendChild(inpNickname);
        signupForm.appendChild(nickNameErr);
        signupForm.appendChild(acceptCont);
        signupForm.appendChild(unchecked);
        signupForm.appendChild(signupBtn);
        signupForm.appendChild(loginLink);

        div1.appendChild(acceptCheck);
        div1.appendChild(socialRuleModalBtn);
        div1.appendChild(firstSpan);
        acceptCont.appendChild(div1);
        
        div2.appendChild(privacyModalBtn);
        div2.appendChild(secSpan);
        acceptCont.appendChild(div2);
        

        return [signupForm, socialRuleModalBtn, privacyModalBtn];
        // return signupForm;
    }
}

export default SignupForm;

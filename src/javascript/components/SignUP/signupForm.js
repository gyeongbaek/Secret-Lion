import Component from "../../core/Component.js";
import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../../firebase.js";
import SignupModal from "./signupModal.js";

class SignupForm extends Component {
    render(){
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
        acceptLab.innerHTML = '<button type="button" class="signupPage_btn_socialRule">비밀멋사 커뮤니티 규칙</button>과 <button type="button" class="signupPage_btn_privacy">개인정보 수집/이용</button>에 동의합니다.';
        
        const acceptCheck = document.createElement('input');
        acceptCheck.setAttribute('type', 'checkbox');
        acceptCheck.setAttribute('id', 'signupPage_check_accept');

        const signupBtn = document.createElement('button');
        signupBtn.setAttribute('class', 'loginPage_btn_signUp');
        signupBtn.textContent = '회원가입';

        // 링크(버튼) 클릭하면 모달창 띄우고 ㄷ
        // 동의는 (모달창 안 봐도) 바로 체크 가능 
        const signupModal = new SignupModal();
        acceptCont.addEventListener('click', function(){
            signupModal.render().classList.toggle('active');
        });
        
        async function handleToDoSubmit(event){
            event.preventDefault();
            const newId = inpId.value;
            console.log(newId);
            
            const newPwd = inpPwd.value;
            console.log(newPwd);
            
            const newPwdCheck = inpPwdCheck.value;
            console.log(newPwdCheck);
            
            const newNickname = inpNickname.value;
            console.log(newNickname);
            
            
            const createUser = await createUserWithEmailAndPassword(auth, newId, newPwd);
            const userData = {
                displayName : newNickname,
                photoURL : null,
                email: newId,
                uid: createUser.user.uid
            };
            console.log(createUser);
            await setDoc(doc(db, 'users', createUser.user.uid), userData);

            inpId.value = "";
            inpPwd.value = "";
            inpPwdCheck.value = "";
            inpNickname.value = "";
            console.log('완료!');
        }

        signupBtn.addEventListener('click', handleToDoSubmit);

        signupForm.appendChild(inpId);
        signupForm.appendChild(inpPwd);
        signupForm.appendChild(inpPwdCheck);
        signupForm.appendChild(inpNickname);
        signupForm.appendChild(acceptCont);
        signupForm.appendChild(signupBtn);

        acceptCont.appendChild(acceptLab);
        acceptCont.appendChild(acceptCheck);

        return signupForm;
    }
}

export default SignupForm;

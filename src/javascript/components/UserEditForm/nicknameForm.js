import { updateProfile } from '@firebase/auth';
import { doc, updateDoc } from '@firebase/firestore';
import Component from '../../core/Component.js';
import { auth, db } from '../../firebase.js';

class NicknameForm extends Component {
    constructor(props) {
        super(props);
    }
    // 닉네임 변경 함수
    async changeNickname(e) {
        // form이 기본적으로 제출하고 리로드하는 것 방지
        // event.preventDefault();
        // const nameInp = document.querySelector('#edit_inp_nickname');
        // updateProfile(auth.currentUser, {
        //     displayName: nameInp.value,
        // });
        // const userProfile = doc(db, 'users', auth.currentUser.uid);
        // await updateDoc(userProfile, {
        //     displayName: nameInp.value,
        // });
        // console.log('완료');

        // 예외 처리
        e.preventDefault();
        const nameInp = document.querySelector('#edit_inp_nickname');
        const userProfile = doc(db, 'users', auth.currentUser.uid);

        try {
            updateProfile(auth.currentUser, {
                displayName: nameInp.value,
            });
            await updateDoc(userProfile, {
                displayName: nameInp.value,
            });
            console.log('닉네임 변경 완료');
        } catch (error) {
            console.log(error);
        }

        // 닉네임 변경 로직

        // updateProfile : auth에서 닉네임 변경
        // userProfile : firestore database에서 유저의 고유번호에 맞는 데이터를 가져옴
        // updateDoc : 그 데이터에서 유저의 닉네임 부분만 변경
    }
    render() {
        // 닉네임 폼
        const nameForm = document.createElement('form');
        nameForm.setAttribute('class', 'edit_form_nickname');

        const nameLbl = document.createElement('label');
        nameLbl.setAttribute('for', 'edit_inp_nickname');
        nameLbl.textContent = '닉네임';

        const nameInp = document.createElement('input');
        nameInp.setAttribute('type', 'text');
        nameInp.setAttribute('maxlength', '8');
        nameInp.setAttribute('placeholder', '닉네임을 입력해주세요.');
        nameInp.setAttribute('id', 'edit_inp_nickname');

        const nameTxt = document.createElement('p');
        nameTxt.setAttribute('class', 'edit_p_nickname');
        nameTxt.textContent = '최대 8글자(공백포함)까지 등록 가능합니다.';

        const confirmBtn = document.createElement('button');
        confirmBtn.setAttribute('class', 'edit_btn_confirm');
        confirmBtn.textContent = '닉네임 변경';

        // 닉네임 변경
        confirmBtn.addEventListener('click', this.changeNickname);

        nameForm.appendChild(nameLbl);
        nameForm.appendChild(nameInp);
        nameForm.appendChild(nameTxt);
        nameForm.appendChild(confirmBtn);

        return nameForm;
    }
}

export default NicknameForm;

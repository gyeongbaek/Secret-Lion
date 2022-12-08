import Component from '../../core/Component.js';
import {
    auth,
    collection,
    db,
    doc,
    getDocs,
    updateDoc,
    updateProfile,
} from '../../firebase.js';

class NicknameForm extends Component {
    constructor(props) {
        super(props);
    }
    // 닉네임 변경 함수
    async changeNickname(e) {
        // form이 기본적으로 제출하고 리로드하는 것 방지
        e.preventDefault();
        const nameInp = document.querySelector('#edit_inp_nickname');
        const userProfile = doc(db, 'users', auth.currentUser.uid);

        const users = [];

        // 모든 유저를 돌면서 displayname을 가져오기
        const userRef = collection(db, 'users');
        await getDocs(userRef).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                users.push(doc.data().displayName);
            });
        });

        // 예외 처리
        if (nameInp.value === '') {
            alert('닉네임을 입력해주세요.');
        } else if (users.includes(nameInp.value)) {
            alert('중복된 닉네임입니다.');
        } else {
            try {
                updateProfile(auth.currentUser, {
                    displayName: nameInp.value,
                });
                await updateDoc(userProfile, {
                    displayName: nameInp.value,
                });
                alert('닉네임이 변경되었습니다.');
                nameInp.value = '';
            } catch (error) {
                console.log(error);
            }
        }
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

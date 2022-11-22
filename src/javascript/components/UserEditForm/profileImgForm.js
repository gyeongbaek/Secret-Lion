import Component from '../../core/Component.js';

class ProfileImgForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // 프로필 이미지 폼
        const imgForm = document.createElement('form');
        imgForm.setAttribute('class', 'edit_form_img');

        const profileImgTit = document.createElement('label');
        profileImgTit.setAttribute('class', 'edit_lab_img');
        profileImgTit.textContent = '프로필 사진';

        const profileImg = document.createElement('img');
        profileImg.setAttribute(
            'src',
            'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        );
        profileImg.setAttribute('alt', '유저 프로필 이미지');
        profileImg.setAttribute('class', 'edit_img');

        const changeBtn = document.createElement('button');
        changeBtn.setAttribute('class', 'edit_btn_change');
        changeBtn.textContent = '이미지 변경';

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'edit_btn_delete');
        deleteBtn.textContent = '이미지 삭제';

        const fileinp = document.createElement('input');
        fileinp.setAttribute('class', 'ir');
        fileinp.setAttribute('type', 'file');

        // 버튼으로 파일 선택 가능
        changeBtn.addEventListener('click', () => fileinp.click());
        fileinp.addEventListener('change', (e) => console.log(e.target.files));

        imgForm.appendChild(profileImgTit);
        imgForm.appendChild(profileImg);
        imgForm.appendChild(changeBtn);
        imgForm.appendChild(deleteBtn);
        imgForm.appendChild(fileinp);

        return imgForm;
    }
}

export default ProfileImgForm;

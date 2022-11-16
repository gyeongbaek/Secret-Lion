class UserEdit {
    render() {
        // 배경색용 div
        const colorWrapper = document.createElement('div');
        colorWrapper.setAttribute('class', 'edit_div_colorwrap');

        // 메인 컨테이너
        const editWrapper = document.createElement('main');
        editWrapper.setAttribute('class', 'edit_main_wrapper');

        const editStrong = document.createElement('strong');
        editStrong.setAttribute('class', 'edit_strong');
        editStrong.textContent = '프로필 편집';

        const editProfile = document.createElement('p');
        editProfile.setAttribute('class', 'edit_p_profile');
        editProfile.textContent = '프로필 사진과 닉네임을 변경할 수 있습니다.';

        const profileImgTit = document.createElement('span');
        profileImgTit.setAttribute('class', 'edit_spn_img');
        profileImgTit.textContent = '프로필 사진';

        const profileImg = document.createElement('img');
        profileImg.setAttribute(
            'src',
            'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        );
        profileImg.setAttribute('class', 'edit_img');

        const changeBtn = document.createElement('button');
        changeBtn.setAttribute('class', 'edit_btn_change');
        changeBtn.textContent = '이미지 변경';

        const fileinp = document.createElement('input');
        fileinp.setAttribute('class', 'ir');
        fileinp.setAttribute('type', 'file');

        // 버튼으로 파일 선택 가능
        changeBtn.addEventListener('click', () => fileinp.click());
        fileinp.addEventListener('change', (e) => console.log(e.target.files));

        const nicknameTit = document.createElement('span');
        nicknameTit.setAttribute('class', 'edit_spn_nickname');
        nicknameTit.textContent = '닉네임';

        const nicknameLbl = document.createElement('label');
        nicknameLbl.setAttribute('for', 'edit_inp_nickname');

        const nicknameInp = document.createElement('input');
        nicknameInp.setAttribute('type', 'text');
        nicknameInp.setAttribute('placeholder', '닉네임을 입력해주세요.');
        nicknameInp.setAttribute('id', 'edit_inp_nickname');

        const nicknameTxt = document.createElement('p');
        nicknameTxt.setAttribute('class', 'edit_p_nickname');
        nicknameTxt.textContent = '최대 8글자(공백포함)까지 등록 가능합니다.';

        const confirmBtn = document.createElement('button');
        confirmBtn.setAttribute('class', 'edit_btn_confirm');
        confirmBtn.textContent = '수정 완료';

        editWrapper.appendChild(editStrong);
        editWrapper.appendChild(editProfile);
        editWrapper.appendChild(profileImgTit);
        editWrapper.appendChild(profileImg);
        editWrapper.appendChild(changeBtn);
        editWrapper.appendChild(nicknameTit);
        editWrapper.appendChild(nicknameLbl);
        editWrapper.appendChild(nicknameInp);
        editWrapper.appendChild(nicknameTxt);
        editWrapper.appendChild(confirmBtn);

        colorWrapper.appendChild(editWrapper);

        return colorWrapper;
    }
}

export default UserEdit;

import { ProfileImgForm } from '../components/UserEditForm/index.js';
import { NicknameForm } from '../components/UserEditForm/index.js';

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

        // userInfo로 이동하는 X 버튼
        const infoAnchor = document.createElement('a');
        infoAnchor.setAttribute('class', 'edit_a_move');
        infoAnchor.href = '/user';

        const anchorTxt = document.createElement('span');
        anchorTxt.textContent = '유저 정보 페이지로 이동';
        anchorTxt.setAttribute('class', 'ir');

        infoAnchor.appendChild(anchorTxt);

        // 프로필 이미지 폼
        const profileImgForm = new ProfileImgForm();

        // 닉네임 폼
        const nicknameForm = new NicknameForm();

        // 메인 컨테이너 안
        editWrapper.appendChild(editStrong);
        editWrapper.appendChild(editProfile);
        editWrapper.appendChild(infoAnchor);
        editWrapper.appendChild(profileImgForm.render());
        editWrapper.appendChild(nicknameForm.render());

        colorWrapper.appendChild(editWrapper);

        return colorWrapper;
    }
}

export default UserEdit;

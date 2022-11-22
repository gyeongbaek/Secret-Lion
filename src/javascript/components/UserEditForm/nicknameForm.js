import Component from '../../core/Component.js';

class NicknameForm extends Component {
    constructor(props) {
        super(props);
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

        nameForm.appendChild(nameLbl);
        nameForm.appendChild(nameInp);
        nameForm.appendChild(nameTxt);
        nameForm.appendChild(confirmBtn);

        return nameForm;
    }
}

export default NicknameForm;

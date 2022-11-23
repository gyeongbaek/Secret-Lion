import Component from "../../core/Component.js";

class PrivacyModal extends Component {
    render(){
        const privacyModalCon = document.createElement('article');
        privacyModalCon.setAttribute('class','signupPage_art_privacyModalCon');
        // privacyModalCon.setAttribute('class','active');

        const privacyTit = document.createElement('h3');
        privacyTit.setAttribute('class','signupPage_h3_privacyTit');
        privacyTit.textContent = '※ 개인정보 수집 및 이용 동의서';

        const privacyDec = document.createElement('p');
        privacyDec.textContent = '비밀멋사는 다음과 같이 귀하의 정보를 수집하고 이용합니다. 귀하의 정보는 정보통신망이용촉진 및 정보보호 등에 관한 법률에서 정한 바에 따라 수집 및 이용되며, 수집 및 이용 목적 달성 시 관련 법률에서 정한 바에 따른 보관 기간을 제외하고 재생 불가능한 상태로 파기됩니다. ';

        const privacyList = document.createElement('ul');
        
        const privacyItem1 = document.createElement('li');
        privacyItem1.textContent = '수집/이용 목적: 가입 및 탈퇴 의사 확인, 회원 식별 등 회원관리';

        const privacyItem2 = document.createElement('li');
        privacyItem2.textContent = '수집/이용 항목: 아이디, 비밀번호, 닉네임 등';

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.setAttribute('class', 'signupPage_btn_modalClose');
        closeBtn.textContent = '닫기';

        //

        privacyModalCon.appendChild(privacyTit);
        privacyModalCon.appendChild(privacyDec);
        privacyModalCon.appendChild(privacyList);
        privacyModalCon.appendChild(closeBtn);

        privacyList.appendChild(privacyItem1);
        privacyList.appendChild(privacyItem2);


        return privacyModalCon;
    }
}

export default PrivacyModal;
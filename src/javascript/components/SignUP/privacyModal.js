import Component from "../../core/Component.js";

class PrivacyModal extends Component {
    render(){
        const privacyModalCon = document.createElement('div');
        privacyModalCon.setAttribute('class','modalCon');

        const privacyModal = document.createElement('article');
        privacyModal.setAttribute('class','signupPage_art_privacyModalCon');

        const privacyTit = document.createElement('h3');
        privacyTit.setAttribute('class','signupPage_h3_privacyTit');
        privacyTit.textContent = '※ 개인정보 수집 및 이용 동의서';

        const privacyDec1 = document.createElement('p');
        privacyDec1.textContent = '비밀멋사는 다음과 같이 귀하의 정보를 수집하고 이용합니다. 귀하의 정보는 정보통신망이용촉진 및 정보보호 등에 관한 법률에서 정한 바에 따라 수집 및 이용되며, 수집 및 이용 목적 달성 시 관련 법률에서 정한 바에 따른 보관 기간을 제외하고 재생 불가능한 상태로 파기됩니다. ';

        const privacyList = document.createElement('ul');
        
        const privacyItem1 = document.createElement('li');
        privacyItem1.textContent = '수집/이용 목적: 가입 및 탈퇴 의사 확인, 회원 식별 등 회원관리';

        const privacyItem2 = document.createElement('li');
        privacyItem2.textContent = '수집/이용 항목: 아이디, 비밀번호, 닉네임 등';

        const privacyItem3 = document.createElement('li');
        privacyItem3.textContent = '보관 및 파기: 탈퇴 후 즉시';

        const privacyDec2 = document.createElement('p');
        privacyDec2.textContent = '회원의 아이디, 비밀번호 등 모든 개인정보의 관리책임은 본인에게 있으므로, 타인에게 양도 및 대여할 수 없으며 유출되지 않도록 관리합니다. 이를 이행하지 않아 발생한 피해에 대해 운영진의 고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.';

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.setAttribute('class', 'signupPage_btn_modalClose');
        closeBtn.textContent = '닫기';

        //모달창 닫기 함수 
        function closeModal(){
            privacyModalCon.style.display = "none"
        }
        closeBtn.addEventListener('click', closeModal);

        privacyModalCon.appendChild(privacyModal);
        privacyModal.appendChild(privacyTit);
        privacyModal.appendChild(privacyDec1);
        privacyModal.appendChild(privacyList);
        privacyModal.appendChild(privacyDec2);
        privacyModal.appendChild(closeBtn);

        privacyList.appendChild(privacyItem1);
        privacyList.appendChild(privacyItem2);
        privacyList.appendChild(privacyItem3);


        return privacyModalCon;
    }
}

export default PrivacyModal;
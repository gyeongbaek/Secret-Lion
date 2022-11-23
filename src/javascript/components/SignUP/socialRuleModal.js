import Component from "../../core/Component.js";

class SocialRuleModal extends Component {
    render(){
        const socialRuleModalCon = document.createElement('article');
        socialRuleModalCon.setAttribute('class','signupPage_art_socialRuleModalCon');
        socialRuleModalCon.setAttribute('class','blind');

        const socialRuleTit = document.createElement('h3');
        socialRuleTit.setAttribute('class','signupPage_h3_socialRuleTit');
        socialRuleTit.textContent = '※ 비밀멋사 커뮤니티 규칙';

        const socialRuleDec1 = document.createElement('p');
        socialRuleDec1.textContent = '비밀멋사는 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 본 커뮤니티 이용규칙을 제정하여 운영합니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.';

        const socialRuleSubtit = document.createElement('strong');
        socialRuleSubtit.setAttribute('class', 'signupPage_str_socialRuleSubTit');
        socialRuleSubtit.textContent = '규칙 위반 행위';

        const socialRuleList = document.createElement('ol');
        
        const socialRuleItem1 = document.createElement('li');
        socialRuleItem1.textContent = '타인의 권리를 침해하거나 불쾌감을 주는 행위';

        const socialRuleItem2 = document.createElement('li');
        socialRuleItem2.textContent = '범죄, 불법 행위 등 법령을 위반하는 행위';

        const socialRuleItem3 = document.createElement('li');
        socialRuleItem3.textContent = '그 밖의 사회통념상 허용될 수 없는 행위';
        
        const socialRuleDec2 = document.createElement('p');
        socialRuleDec2.textContent = '모든 게시물은 이용자의 신고를 기반으로 하는 신고처리 시스템을 통해 처리됩니다. 커뮤니티 이용규칙에 어긋난다고 판단되는 게시물, 댓글 등을 발견하셨을 경우 신고버튼을 눌러 신고해주시기 바랍니다.';
        
        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.setAttribute('class', 'signupPage_btn_modalClose');
        closeBtn.textContent = '닫기';

        //모달창 함수
        function closeModal(){
            socialRuleModalCon.style.display = "none"
        }
        closeBtn.addEventListener('click', closeModal);
        
        socialRuleModalCon.appendChild(socialRuleTit);
        socialRuleModalCon.appendChild(socialRuleDec1);
        socialRuleModalCon.appendChild(socialRuleSubtit);
        socialRuleModalCon.appendChild(socialRuleList);
        socialRuleModalCon.appendChild(socialRuleDec2);
        socialRuleModalCon.appendChild(closeBtn);
        
        socialRuleList.appendChild(socialRuleItem1);
        socialRuleList.appendChild(socialRuleItem2);
        socialRuleList.appendChild(socialRuleItem3);

        return socialRuleModalCon;
    }
}

export default SocialRuleModal;

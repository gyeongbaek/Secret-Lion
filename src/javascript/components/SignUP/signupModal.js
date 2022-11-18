import Component from "../../core/Component.js";

class SignupModal extends Component {
    render(){
        const modalCon = document.createElement('article');
        modalCon.setAttribute('class','signupPage_art_modalCon');
        // modalCon.setAttribute('class','active');

        const ruleTit = document.createElement('h3');
        ruleTit.setAttribute('class','signupPage_h3_ruleTit');
        ruleTit.textContent = '※ 비밀멋사 커뮤니티 규칙';

        const rule = document.createElement('p');
        rule.textContent = '비밀멋사는 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 본 커뮤니티 이용규칙을 제정하여 운영합니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.';

        const ruleSubtit = document.createElement('p');
        ruleSubtit.textContent = '※ 규칙 위반 행위';

        const rule1 = document.createElement('p');
        rule1.textContent = '1. 타인의 권리를 침해하거나 불쾌감을 주는 행위';
        
        const rule2 = document.createElement('p');
        rule2.textContent = '2. 범죄, 불법 행위 등 법령을 위반하는 행위';

        const rule3 = document.createElement('p');
        rule3.textContent = '3. 그밖에 사회통념상 허용될 수 없는 행위';
        
        const ruleDec = document.createElement('p');
        ruleDec.textContent = '모든 게시물은 이용자의 신고를 기반으로 하는 신고처리 시스템을 통해 처리됩니다. 커뮤니티 이용규칙에 어긋난다고 판단되는 게시물, 댓글 등을 발견하셨을 경우 신고버튼을 눌러 신고해주시기 바랍니다.';

        modalCon.appendChild(ruleTit);
        modalCon.appendChild(rule);
        modalCon.appendChild(ruleSubtit);
        modalCon.appendChild(rule1);
        modalCon.appendChild(rule2);
        modalCon.appendChild(rule3);
        modalCon.appendChild(ruleDec);
        

        return modalCon;
    }
}

export default SignupModal;

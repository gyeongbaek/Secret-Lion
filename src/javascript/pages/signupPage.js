import {
    SignupForm,
    SocialRuleModal,
    PrivacyModal,
} from '../components/SignUP/index.js';

class SignupPage {
    render() {
        const frag = document.createDocumentFragment();

        //header
        const bodybgc = document.createElement('div');
        bodybgc.setAttribute('class', 'signupPage_bodyWrapper');

        const signupHeader = document.createElement('header');
        signupHeader.setAttribute('class', 'signupPage_header');

        const signupTit = document.createElement('h1');
        signupTit.setAttribute('class', 'signupPage_h1_tit');
        signupTit.textContent = '회원가입';

        const signupSubtit = document.createElement('p');
        signupSubtit.setAttribute('class', 'signupPage_p_subTit');
        signupSubtit.textContent = '프론트엔드스쿨의 비밀 이야기';

        const signupMain = document.createElement('main');
        signupMain.setAttribute('class', 'signupPage_main_wrapper');

        const titWrapper = document.createElement('div');
        titWrapper.setAttribute('class', 'signupPage_div_titWrapper');

        const welcome = document.createElement('h2');
        welcome.setAttribute('class', 'signupPage_h2_welcome');
        welcome.textContent = '비밀멋사에 오신 것을 환영합니다.';

        const detailPlz = document.createElement('p');
        detailPlz.setAttribute('class', 'signupPage_p_detailPlz');
        detailPlz.textContent = '회원가입을 위해 아래의 세부 정보를 작성해주세요.';

        signupHeader.appendChild(signupTit);
        signupHeader.appendChild(signupSubtit);

        const signupForm = new SignupForm();
        let [form, socialRuleBtn, privacyBtn] = signupForm.render();

        socialRuleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const socialRuleModal = new SocialRuleModal();
            bodybgc.appendChild(socialRuleModal.render());
        });

        privacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const privacyModal = new PrivacyModal();
            bodybgc.appendChild(privacyModal.render());
        });

        signupMain.appendChild(titWrapper);
        signupMain.appendChild(form);

        titWrapper.appendChild(welcome);
        titWrapper.appendChild(detailPlz);

        //전체
        frag.appendChild(bodybgc);
        bodybgc.appendChild(signupHeader);
        bodybgc.appendChild(signupMain);

        return frag;
    }
}

export default SignupPage;

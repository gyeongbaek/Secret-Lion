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

        //main
        const signupMain = document.createElement('main');
        signupMain.setAttribute('class', 'signupPage_main_wrapper');

        // main > titWrapper
        const titWrapper = document.createElement('div');
        titWrapper.setAttribute('class', 'signupPage_div_titWrapper');

        const welcome = document.createElement('h2');
        welcome.setAttribute('class', 'signupPage_h2_welcome');
        welcome.textContent = '비밀멋사에 오신 것을 환영합니다.';

        const detailPlz = document.createElement('p');
        detailPlz.setAttribute('class', 'signupPage_p_detailPlz');
        detailPlz.textContent =
            '회원가입을 위해 아래의 세부 정보를 작성해주세요.';

        //header
        signupHeader.appendChild(signupTit);
        signupHeader.appendChild(signupSubtit);

        //main
        const signupForm = new SignupForm();
        let [form, socialRuleBtn, privacyBtn] = signupForm.render();

        socialRuleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const socialRuleModal = new SocialRuleModal();
            bodybgc.appendChild(socialRuleModal.render());
            // socialRuleModal.render().style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
            // socialRuleModal.render().style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
            // socialRuleModal.render().style.backdrop-filter = 'blur(1.5px)';
        });

        privacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const privacyModal = new PrivacyModal();
            bodybgc.appendChild(privacyModal.render());
            // privacyModal.render().style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
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

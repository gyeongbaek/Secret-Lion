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
        detailPlz.textContent = '회원가입을 위해 아래의 세부 정보를 작성해주세요.';

        // main > formCont 
        const formCont = document.createElement('div');
        formCont.setAttribute('class', 'signupPage_div_formCont');

        const signupForm = document.createElement('form');
        signupForm.setAttribute('class','signupPage_form');

        const inpId = document.createElement('input');
        inpId.setAttribute('type', 'text');
        inpId.setAttribute('placeholder', '아이디');
        inpId.setAttribute('name', 'id');
        inpId.setAttribute('id', 'signupPage_inp_id');
        inpId.attributes['required'];

        const inpPwd = document.createElement('input');
        inpPwd.setAttribute('type', 'password');
        inpPwd.setAttribute('placeholder', '비밀번호');
        inpPwd.setAttribute('name', 'password');
        inpPwd.setAttribute('id', 'signupPage_inp_pwd');
        inpPwd.attributes['required'];

        const inpPwdCheck = document.createElement('input');
        inpPwdCheck.setAttribute('type', 'password');
        inpPwdCheck.setAttribute('placeholder', '비밀번호 확인');
        inpPwdCheck.setAttribute('name', 'password-check');
        inpPwdCheck.setAttribute('id', 'signupPage_inp_pwdCheck');
        inpPwdCheck.attributes['required'];

        const inpNickname = document.createElement('input');
        inpNickname.setAttribute('type', 'text');
        inpNickname.setAttribute('placeholder', '닉네임');
        inpNickname.setAttribute('name', 'nickname');
        inpNickname.setAttribute('id', 'signupPage_inp_nickname');
        inpNickname.attributes['required'];

        // acceptCont
        const acceptCont = document.createElement('div');
        acceptCont.setAttribute('class', 'signupPage_div_acceptCont');

        const acceptLab = document.createElement('label');
        acceptLab.setAttribute('for', 'signupPage_check_accept');
        acceptLab.setAttribute('class', 'signupPage_acceptLab');
        acceptLab.textContent = '비밀멋사 커뮤니티 규칙과 개인정보 수집에 동의합니다.';
        
        const acceptCheck = document.createElement('input');
        acceptCheck.setAttribute('type', 'checkbox');
        acceptCheck.setAttribute('id', 'signupPage_check_accept');

        const signupBtn = document.createElement('button');
        signupBtn.setAttribute('class', 'loginPage_btn_signUp');
        signupBtn.textContent = '회원가입';

        // modal
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

        // 모달 버튼
        acceptCont.addEventListener('click', function(){
            modalCon.classList.toggle('active');
        });

        //header
        signupHeader.appendChild(signupTit);
        signupHeader.appendChild(signupSubtit);

        //main 
        signupMain.appendChild(titWrapper);
        signupMain.appendChild(formCont);

        titWrapper.appendChild(welcome);
        titWrapper.appendChild(detailPlz);
        
        formCont.appendChild(signupForm);
        formCont.appendChild(inpId);
        formCont.appendChild(inpPwd);
        formCont.appendChild(inpPwdCheck);
        formCont.appendChild(inpNickname);
        formCont.appendChild(acceptCont);
        formCont.appendChild(signupBtn);

        acceptCont.appendChild(acceptLab);
        acceptCont.appendChild(acceptCheck);
        
        // modal
        modalCon.appendChild(ruleTit);
        modalCon.appendChild(rule);
        modalCon.appendChild(ruleSubtit);
        modalCon.appendChild(rule1);
        modalCon.appendChild(rule2);
        modalCon.appendChild(rule3);
        modalCon.appendChild(ruleDec);

        //전체 
        frag.appendChild(bodybgc);
        bodybgc.appendChild(signupHeader);
        bodybgc.appendChild(signupMain);
        bodybgc.appendChild(modalCon);

        return frag;
    }
}

export default SignupPage;

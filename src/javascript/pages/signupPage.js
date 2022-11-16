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
        
        const inpCont = document.createElement('div');
        inpCont.setAttribute('class','signupPage_div_inpCont');

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

        const checkCont = document.createElement('label');
        checkCont.setAttribute('for', 'signupPage_check_accept');
        checkCont.setAttribute('class', 'signupPage_checkCont');
        
        const checkAccept = document.createElement('input');
        checkAccept.setAttribute('type', 'checkbox');
        checkAccept.setAttribute('id', 'signupPage_check_accept');

        const accept = document.createElement('p');
        accept.setAttribute('class', 'signupPage_p_accept');
        accept.textContent = '비밀멋사 커뮤니티 규칙에 동의합니다.';

        const rules = document.createElement('textarea');
        rules.setAttribute('class','signupPage_textarea_rules');
        rules.setAttribute('class','active'); //자스로 조작
        rules.cols ='50'; 
        rules.rows = '20'; 
        rules.readonly = true;
        // rules.value = '
        //     비밀멋사는 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 본 커뮤니티 이용규칙을 제정하여 운영합니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. 
                        
        //     ※ 규칙 위반 행위 
        //     1. 타인의 권리를 침해하거나 불쾌감을 주는 행위
        //     2. 범죄, 불법 행위 등 법령을 위반하는 행위 
        //     3. 그밖에 사회통념상 허용될 수 없는 행위 
            
        //     모든 게시물은 이용자의 신고를 기반으로 하는 신고처리 시스템을 통해 처리됩니다. 커뮤니티 이용규칙에 어긋난다고 판단되는 게시물, 댓글 등을 발견하셨을 경우 신고버튼을 눌러 신고해주시기 바랍니다.
        // ';
        // 왜 오류나지 ㅡㅡ? 자스 함수로 기능해야 할 듯 

        const signupBtn = document.createElement('button');
        signupBtn.setAttribute('class', 'loginPage_btn_signUp');
        signupBtn.textContent = '회원가입';

        //header
        signupHeader.appendChild(signupTit);
        signupHeader.appendChild(signupSubtit);

        //main 
        signupMain.appendChild(titWrapper);
        signupMain.appendChild(formCont);
        signupMain.appendChild(rules);

        titWrapper.appendChild(welcome);
        titWrapper.appendChild(detailPlz);
        
        formCont.appendChild(signupForm);
        formCont.appendChild(checkCont);
        formCont.appendChild(signupBtn);
        signupForm.appendChild(inpCont);

        inpCont.appendChild(inpId);
        inpCont.appendChild(inpPwd);
        inpCont.appendChild(inpPwdCheck);
        inpCont.appendChild(inpNickname);

        checkCont.appendChild(checkAccept);
        checkCont.appendChild(accept);
        

        //전체 
        frag.appendChild(bodybgc);
        bodybgc.appendChild(signupHeader);
        bodybgc.appendChild(signupMain);

        return frag;
    }
}

export default SignupPage;

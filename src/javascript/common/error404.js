class Error404 {
    constructor(props) {
        this.props = props;
    }
    
    render() {
       const errorWrapper = document.createElement('div');
       errorWrapper.setAttribute('class', 'error_div_wrapper');
       
       const logoImg = document.createElement('img');
        logoImg.setAttribute('class', 'error_img_logo');
        logoImg.setAttribute('src', 'src/assets/logo-color.svg');
        logoImg.setAttribute('alt', '비밀멋사 로고 이미지');

        const errorCon = document.createElement('div');
        errorCon.setAttribute('class', 'error_div_msg');

        const errorMsg = document.createElement('h1');
        errorMsg.textContent = '원하시는 페이지를 찾을 수 없습니다.';

        const errorSubmsg1 = document.createElement('p');
        errorSubmsg1.textContent = '찾으려는 페이지의 주소가 잘못 입력되었거나,';

        const errorSubmsg2 = document.createElement('p');
        errorSubmsg2.textContent = '주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.';

        const errorSubmsg3 = document.createElement('p');
        errorSubmsg3.textContent = '입력하신 페이지의 주소가 정확한지 다시 한 번 확인해주세요.';

        errorWrapper.appendChild(errorCon);
        errorWrapper.appendChild(logoImg);

        errorCon.appendChild(errorMsg);
        errorCon.appendChild(errorSubmsg1);
        errorCon.appendChild(errorSubmsg2);
        errorCon.appendChild(errorSubmsg3);
        return errorWrapper;
    }
}

export default Error404;



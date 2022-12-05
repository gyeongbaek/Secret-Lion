class Header {
    constructor(props) {
        this.props = props;
    }
    
    render() {
        // wrapper
        const headerWrapper = document.createElement('header');
        headerWrapper.setAttribute('class', 'header_wrapper');

        // 메인 이동 로고 
        const logoCon = document.createElement('div');

        const mainGoLink = document.createElement('a');
        mainGoLink.setAttribute('class', 'header_a_mainGo');
        mainGoLink.href='/';

        // 링크 
        const linkCon = document.createElement('div');

        // 검색
        const searchLink = document.createElement('a');
        searchLink.setAttribute('class', 'header_a_searchLink');
        searchLink.href='#';
        searchLink.addEventListener('click', linkAlert);

        const searchLinkIr = document.createElement('span');
        searchLinkIr.setAttribute('class', 'ir');
        searchLinkIr.textContent = '검색 버튼';
        

        // 글 작성
        const writeLink = document.createElement('a');
        writeLink.setAttribute('class', 'header_a_writeLink');
        writeLink.href = '/upload';

        const writeLinkIr = document.createElement('span');
        writeLinkIr.setAttribute('class', 'ir');
        writeLinkIr.textContent = '글 작성페이지로 가기 버튼';


        // 알림
        const notificationLink = document.createElement('a');
        notificationLink.setAttribute('class', 'header_a_notificationLink');
        notificationLink.href='#';
        notificationLink.addEventListener('click', linkAlert);

        const notificationLinkIr = document.createElement('span');
        notificationLinkIr.setAttribute('class', 'ir');
        notificationLinkIr.textContent = '알림창으로 가기 버튼';


        // 프로필
        const userLink = document.createElement('a');
        userLink.setAttribute('class', 'header_a_userLink');
        userLink.href ='/user';

        const userLinkIr = document.createElement('span');
        userLinkIr.setAttribute('class', 'ir');
        userLinkIr.textContent = '나의 프로필로 가기 버튼';
  
        // ir 
        searchLink.appendChild(searchLinkIr);
        writeLink.appendChild(writeLinkIr);
        notificationLink.appendChild(notificationLinkIr);
        userLink.appendChild(userLinkIr);

        // wrapper
        headerWrapper.appendChild(logoCon);
        headerWrapper.appendChild(linkCon);

        logoCon.appendChild(mainGoLink);
        
        linkCon.appendChild(searchLink);
        linkCon.appendChild(writeLink);
        linkCon.appendChild(notificationLink);
        linkCon.appendChild(userLink);

        function linkAlert(){
            alert('아직 개발중입니다 히히');
        }

        return headerWrapper;
    }
}

export default Header;



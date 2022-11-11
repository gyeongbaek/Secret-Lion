class Header {
    constructor(props) {
        this.props = props;
    }
    
    render() {
        // wrapper
        const headerWrapper = document.createElement("div");
        headerWrapper.classList.add("header_div_wrapper");

        // 검색
        const searchLink = document.createElement("a");
        searchLink.setAttribute("href", "#");
        searchLink.classList.add("header-a-searchLink");

        const searchImg = document.createElement("img");
        searchImg.setAttribute("src", "src/assets/search.svg");
        searchImg.setAttribute("alt", "검색 버튼");

        searchLink.appendChild(searchImg);
        
        // 글 작성
        const writeLink = document.createElement("a");
        writeLink.setAttribute("href", "src/javascript/pages/postUpload.js");
        writeLink.classList.add("header-a-writeLink");

        const writeImg = document.createElement("img");
        writeImg.setAttribute("src", "src/assets/write.svg");
        writeImg.setAttribute("alt", "글 작성 버튼");

        writeLink.appendChild(writeImg);

        // 알림
        const notificationLink = document.createElement("a");
        notificationLink.setAttribute("href", "#");
        notificationLink.classList.add("header-a-notificationLink");

        const notificationImg = document.createElement("img");
        notificationImg.setAttribute("src", "src/assets/notifications.svg");
        notificationImg.setAttribute("alt", "알림 버튼");

        notificationLink.appendChild(notificationImg);

        // 프로필
        const userLink = document.createElement("a");
        userLink.setAttribute("href", "src/javascript/pages/userInfo.js");
        userLink.classList.add("header-a-userLink");

        const userImg = document.createElement("img");
        userImg.setAttribute("src", "src/assets/user.svg");
        userImg.setAttribute("alt", "프로필 버튼");

        userLink.appendChild(userImg);

        // wrapper appendChild
        headerWrapper.appendChild(searchLink);
        headerWrapper.appendChild(writeLink);
        headerWrapper.appendChild(notificationLink);
        headerWrapper.appendChild(userLink);

        return headerWrapper;
    }
}

export default Header;



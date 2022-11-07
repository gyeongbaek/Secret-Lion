class TestPage {
    render() {
        const container = document.createElement("div");
        const element = document.createElement("h1");
        element.innerText = "테스트 페이지입니다";
        container.appendChild(element);

        const login = document.createElement("a");
        login.href = "/login";
        login.innerText = "Login 로그인화면";
        container.appendChild(login);

        const signup = document.createElement("a");
        signup.href = "/signup";
        signup.innerText = "signup 등록화면";
        container.appendChild(signup);

        const main = document.createElement("a");
        main.href = "/main";
        main.innerText = "main 메인화면";
        container.appendChild(main);

        const post = document.createElement("a");
        post.href = "/post";
        post.innerText = "post 게시글 화면";
        container.appendChild(post);

        const upload = document.createElement("a");
        upload.href = "/upload";
        upload.innerText = "upload 게시글 편집 화면";
        container.appendChild(upload);

        const user = document.createElement("a");
        user.href = "/user";
        user.innerText = "user 사용자 정보 화면";
        container.appendChild(user);

        const setting = document.createElement("a");
        setting.href = "/setting";
        setting.innerText = "setting 사용자 정보 편집";
        container.appendChild(setting);

        return container;
    }
}

export default TestPage;

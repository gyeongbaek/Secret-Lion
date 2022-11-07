class UserEdit {
    render() {
        const container = document.createElement("div");
        const element = document.createElement("h1");
        element.innerText = "UserEdit - 사용자 편집";

        const anchor = document.createElement("a");
        anchor.href = "/";
        anchor.innerText = "테스트 페이지로 이동";

        container.appendChild(element);
        container.appendChild(anchor);

        return container;
    }
}

export default UserEdit;

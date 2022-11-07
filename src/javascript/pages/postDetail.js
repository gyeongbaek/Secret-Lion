class PostDetail {
    render() {
        const container = document.createElement("div");
        const element = document.createElement("h1");
        element.innerText = "PostDetail - 게시글 화면";

        const anchor = document.createElement("a");
        anchor.href = "/";
        anchor.innerText = "테스트 페이지로 이동";

        container.appendChild(element);
        container.appendChild(anchor);

        return container;
    }
}

export default PostDetail;

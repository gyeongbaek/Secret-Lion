import Component from "../../core/Component.js";

class PostUploadBtn extends Component {
    render() {
        const btnContainer = document.createElement("div");
        btnContainer.setAttribute("class", "post_btn_con");

        const uploadBtn = document.createElement("button");
        uploadBtn.setAttribute("class", "post_btn");
        uploadBtn.textContent = "게시물 등록";

        const fileBtn = document.createElement("button");
        fileBtn.setAttribute("class", "post_btn");
        fileBtn.textContent = "첨부파일 선택";

        const fileinp = document.createElement("input");
        fileinp.setAttribute("class", "ir");
        fileinp.setAttribute("type", "file");

        // 버튼으로 파일 선택 가능
        fileBtn.addEventListener("click", () => fileinp.click());
        fileinp.addEventListener("change", (e) => console.log(e.target.files));

        btnContainer.appendChild(fileBtn);
        btnContainer.appendChild(uploadBtn);

        return btnContainer;
    }
}

export default PostUploadBtn;

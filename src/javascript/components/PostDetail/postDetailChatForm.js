import Component from "../../core/Component.js";

class PostDetailChatForm extends Component {
    render() {
        // 채팅입력 Form
        const chattingForm = document.createElement("form");
        chattingForm.setAttribute("class", "post_form_chat");

        // chat textarea
        const chatTextArea = document.createElement("textarea");
        chatTextArea.setAttribute("class", "post_textarea_chat");
        chatTextArea.setAttribute("placeholder", "내용을 입력해주세요.");

        const chatUploadBtn = document.createElement("button");
        chatUploadBtn.setAttribute("class", "post_btn");
        chatUploadBtn.textContent = "댓글 등록";

        chattingForm.appendChild(chatTextArea);
        chattingForm.appendChild(chatUploadBtn);

        return chattingForm;
    }
}

export default PostDetailChatForm;

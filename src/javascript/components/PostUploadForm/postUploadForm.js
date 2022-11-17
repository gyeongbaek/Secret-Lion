import { DropDown } from "../../common/index.js";
import Component from "../../core/Component.js";
import { PostUploadBtn, PostUploadPreview } from "./index.js";

class PostUploadForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const postUploadForm = document.createElement("form");
        postUploadForm.setAttribute("class", "post_form_upload");

        const dropDownContainer = new DropDown();

        const inputTit = document.createElement("input");
        inputTit.setAttribute("type", "text");
        inputTit.setAttribute("placeholder", "제목을 입력해주세요.");
        inputTit.setAttribute("class", "post_inp_tit");

        const postContent = document.createElement("textarea");
        postContent.setAttribute("class", "post_area_content");
        postContent.setAttribute("placeholder", "내용을 입력해주세요.");

        // 파일첨부, 업로드 버튼
        const postUploadBtns = new PostUploadBtn();

        // 파일 미리보기
        const postUploadPreview = new PostUploadPreview();

        postUploadForm.appendChild(dropDownContainer.render());
        postUploadForm.appendChild(inputTit);
        postUploadForm.appendChild(postContent);

        postUploadForm.appendChild(postUploadBtns.render());

        postUploadForm.appendChild(postUploadPreview.render());

        return postUploadForm;
    }
}

export default PostUploadForm;

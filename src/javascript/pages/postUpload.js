import { Header } from "../common/index.js";
import { PostUploadForm } from "../components/PostUploadForm/index.js";

class PostUpload {
    render() {
        const header = new Header();

        const postUploadMain = document.createElement("main");
        postUploadMain.setAttribute("class", "main_post_container");

        const frag = document.createDocumentFragment();

        const postUploadForm = new PostUploadForm();

        postUploadMain.appendChild(postUploadForm.render());
        frag.appendChild(header.render());
        frag.appendChild(postUploadMain);
        return frag;
    }
}

export default PostUpload;

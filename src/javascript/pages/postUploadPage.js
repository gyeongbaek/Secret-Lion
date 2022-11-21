import { Header, MainContainer } from '../common/index.js';
import { PostUploadForm } from '../components/PostUploadForm/index.js';

class PostUploadpage {
    render() {
        const header = new Header();

        const main = new MainContainer();
        const mainEl = main.render();
        // const postUploadMain = document.createElement("main");
        // postUploadMain.setAttribute("class", "main_post_container");

        const frag = document.createDocumentFragment();

        const postUploadForm = new PostUploadForm();

        mainEl.appendChild(postUploadForm.render());
        frag.appendChild(header.render());
        frag.appendChild(mainEl);
        return frag;
    }
}

export default PostUploadpage;

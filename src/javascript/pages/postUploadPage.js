import { Header, MainContainer } from '../common/index.js';
import { PostUploadForm } from '../components/PostUploadForm/index.js';
import { auth } from '../firebase.js';

class PostUploadpage {
    render() {
        const header = new Header();

        const main = new MainContainer();
        const mainEl = main.render();

        const frag = document.createDocumentFragment();

        const postUploadForm = new PostUploadForm();
        mainEl.appendChild(postUploadForm.initialize());
        frag.appendChild(header.render());
        frag.appendChild(mainEl);
        return frag;
    }
}

export default PostUploadpage;

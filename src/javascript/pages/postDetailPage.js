import { Header, MainContainer } from '../common/index.js';
import { PostDetailMain } from '../components/PostDetail/index.js';
import Component from '../core/Component.js';
import { auth } from '../firebase.js';

class PostDetailPage {
    constructor(id) {
        this.id = id;
    }
    render() {
        const fragCon = document.createDocumentFragment();
        const header = new Header();

        const postDetailMain = new PostDetailMain({
            id: this.id,
        });

        fragCon.appendChild(header.render());
        fragCon.appendChild(postDetailMain.initialize());

        return fragCon;
    }
}

export default PostDetailPage;

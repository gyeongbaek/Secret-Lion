import MainContainer from '../../common/mainContainer.js';
import Component from '../../core/Component.js';
import {
    PostDetailTop,
    PostDetailMid,
    PostDetailChat,
    PostDetailChatForm,
} from './index.js';
import { db, doc, getDoc, onSnapshot } from '../../firebase.js';

class PostDetailMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            isLoding: true,
        };
        this.writer = [];
        this.data = [];
        this.date = '';
        this.getPostData();
    }
    async getPostData() {
        const unsub = onSnapshot(
            doc(db, 'posts', 'ip358TWbiDczCFL4P6vW'),
            async (postDoc) => {
                const writer = await this.getUser(postDoc.data().writerId);
                this.writer = writer;
                this.setState({
                    postData: postDoc.data({ serverTimestamps: 'estimate' }),
                    isLoding: false,
                });
            }
        );
    }
    async getUser(key) {
        const docRef = doc(db, 'users', key);
        const docSnap = await getDoc(docRef);
        return {
            displayName: docSnap.data().displayName,
            photoURL: docSnap.data().photoURL,
        };
    }

    render() {
        const main = new MainContainer();
        const mainEl = main.render();

        const postDetailh1 = document.createElement('h1');
        postDetailh1.setAttribute('class', 'ir');
        postDetailh1.textContent = '게시판 상세 페이지';
        mainEl.appendChild(postDetailh1);

        // section top
        const postDetailTop = new PostDetailTop({
            postData: this.state.postData,
            writer: this.writer,
        });

        // section mid
        const postDetailMid = new PostDetailMid();

        // 댓글
        const commentCon = document.createElement('section');
        commentCon.setAttribute('class', 'post_section_bottom');

        const commentH2 = document.createElement('h2');
        commentH2.setAttribute('class', 'ir');
        commentH2.textContent = '댓글';

        const commentUl = document.createElement('ul');
        commentUl.setAttribute('class', 'post_ul_comment');

        const postDetailChat = new PostDetailChat();

        commentUl.appendChild(postDetailChat.render());
        commentCon.appendChild(commentH2);
        commentCon.appendChild(commentUl);

        // chat form apch
        const postDetailChatForm = new PostDetailChatForm();

        // 메인 안
        mainEl.appendChild(postDetailTop.render());
        mainEl.appendChild(postDetailMid.render());
        mainEl.appendChild(commentCon);
        mainEl.appendChild(postDetailChatForm.render());

        const loadingEl = document.createElement('div');
        loadingEl.setAttribute('class', 'loading');
        loadingEl.textContent = '로딩중...';
        if (this.state.isLoding) {
            return loadingEl;
        } else {
            return mainEl;
        }

        return mainEl;
    }
}

export default PostDetailMain;

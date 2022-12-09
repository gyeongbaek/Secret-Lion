import MainContainer from '../../common/mainContainer.js';
import Component from '../../core/Component.js';
import {
    PostDetailTop,
    PostDetailMid,
    PostDetailChatForm,
    PostDetailChat,
} from './index.js';
import {
    collectionGroup,
    db,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    where,
} from '../../firebase.js';

class PostDetailMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            isLoding: true,
            chatList: [],
        };

        this.writer = [];
        this.data = [];
        this.date = '';
        this.getPostData();
    }
    async getPostData() {
        const unsub = onSnapshot(
            doc(db, 'posts', this.props.id),
            async (postDoc) => {
                const writer = await this.getUser(postDoc.data().writerId);
                this.writer = writer;
                this.getChat(postDoc.data().postId);
                this.setState({
                    ...this.state,
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
    async getChat(id) {
        const q = query(
            collectionGroup(db, 'post'),
            where('id', '==', id),
            orderBy('CreateAt', 'asc')
        );
        const querySnapshot = await getDocs(q);
        const newarr = [];
        for (let i = 0; i < querySnapshot.docs.length; i++) {
            newarr.push(
                Object.assign(
                    querySnapshot.docs[i].data({
                        serverTimestamps: 'estimate',
                    }),
                    await this.getUser(querySnapshot.docs[i].data().writerId)
                )
            );
            if (i === querySnapshot.docs.length - 1) {
                this.setState({
                    ...this.state,
                    chatList: [...newarr],
                });
            }
        }
    }

    render() {
        const main = new MainContainer();
        const mainEl = main.render();

        const postDetailh1 = document.createElement('h1');
        postDetailh1.setAttribute('class', 'ir');
        postDetailh1.textContent = '게시판 상세 페이지';
        mainEl.appendChild(postDetailh1);

        const postDetailTop = new PostDetailTop({
            postData: this.state.postData,
            writer: this.writer,
        });

        const postDetailMid = new PostDetailMid({
            content: this.state.postData.content,
            like: this.state.postData.like,
            scrap: this.state.postData.scrap,
            img: this.state.postData.img,
            postId: this.state.postData.postId,
        });

        const commentCon = document.createElement('section');
        commentCon.setAttribute('class', 'post_section_bottom');

        const commentH2 = document.createElement('h2');
        commentH2.setAttribute('class', 'ir');
        commentH2.textContent = '댓글';

        const commentUl = document.createElement('ul');
        commentUl.setAttribute('class', 'post_ul_comment');
        const frag = document.createDocumentFragment();

        this.state.chatList.map((chat) => {
            const postDetailChat = new PostDetailChat({
                date: chat.CreateAt,
                comment: chat.comment,
                writerId: chat.writerId,
                displayName: chat.displayName,
                photoURL: chat.photoURL,
            });
            frag.appendChild(postDetailChat.initialize());
        });

        commentCon.appendChild(commentH2);
        commentCon.appendChild(commentUl);
        commentUl.appendChild(frag);

        const postDetailChatForm = new PostDetailChatForm({
            postId: this.state.postData.postId,
            active: this.state.postData.active,
        });

        mainEl.appendChild(postDetailTop.render());
        mainEl.appendChild(postDetailMid.render());
        mainEl.appendChild(commentCon);
        mainEl.appendChild(postDetailChatForm.initialize());

        const loadingEl = document.createElement('div');
        loadingEl.setAttribute('class', 'loading');
        loadingEl.textContent = '로딩중...';
        if (this.state.isLoding) {
            return loadingEl;
        } else {
            return mainEl;
        }
    }
}

export default PostDetailMain;

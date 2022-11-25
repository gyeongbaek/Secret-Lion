import Component from '../../core/Component.js';
import { PostDetailChat } from './index.js';
import {
    collectionGroup,
    db,
    doc,
    getDoc,
    onSnapshot,
    orderBy,
    query,
    where,
} from '../../firebase.js';

class postDetailChatUl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatList: [],
        };
        this.writer = [];
        this.props.postId && this.getChat(this.props.postId);
    }
    async getChat(id) {
        const q = query(
            collectionGroup(db, 'post'),
            where('id', '==', id),
            orderBy('CreateAt', 'asc')
        );
        onSnapshot(q, (querySnapshot) => {
            const newarr = [];
            querySnapshot.docs.forEach(async (result, i) => {
                newarr.push(
                    Object.assign(
                        result.data({ serverTimestamps: 'estimate' }),
                        await this.getUser(result.data().writerId)
                    )
                );
                if (i === querySnapshot.docs.length - 1) {
                    this.setState({
                        chatList: [...newarr],
                    });
                }
            });
        });
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
        const frag = document.createDocumentFragment();
        const commentUl = document.createElement('ul');
        commentUl.setAttribute('class', 'post_ul_comment');

        this.state.chatList.map((chat) => {
            const postDetailChat = new PostDetailChat({
                date: chat.CreateAt,
                comment: chat.comment,
                writerId: chat.writerId,
                displayName: chat.displayName,
                photoURL: chat.photoURL,
            });
            frag.appendChild(postDetailChat.intialize());
        });
        commentUl.appendChild(frag);

        //   const postDetailChat = new PostDetailChat({
        //     postId: this.state.postData.postId,
        // });

        return commentUl;
    }
}

export default postDetailChatUl;

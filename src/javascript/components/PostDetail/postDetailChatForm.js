import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import Component from '../../core/Component.js';
import { auth, db } from '../../firebase.js';

class PostDetailChatForm extends Component {
    constructor(props) {
        super(props);
        this.chatTextArea = document.createElement('textarea');
    }
    async submitChat(postId) {
        const postChatting = collection(db, 'post_chatting');
        const newId = collection(postChatting, postId, 'post');
        await Promise.all([
            addDoc(newId, {
                comment: this.chatTextArea.value,
                id: postId,
                CreateAt: serverTimestamp(),
                writerId: auth.currentUser.uid,
            }),
        ]);
        this.chatTextArea.value = '';
    }
    render() {
        // 채팅입력 Form
        const chattingForm = document.createElement('form');
        chattingForm.setAttribute('class', 'post_form_chat');

        // chat textarea
        // const chatTextArea = document.createElement('textarea');
        this.chatTextArea.setAttribute('class', 'post_textarea_chat');
        this.chatTextArea.setAttribute('placeholder', '내용을 입력해주세요.');

        const chatUploadBtn = document.createElement('button');
        chatUploadBtn.setAttribute('class', 'post_btn');
        chatUploadBtn.textContent = '댓글 등록';

        chattingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitChat(this.props.postId);
        });

        chattingForm.appendChild(this.chatTextArea);
        chattingForm.appendChild(chatUploadBtn);

        return chattingForm;
    }
}

export default PostDetailChatForm;

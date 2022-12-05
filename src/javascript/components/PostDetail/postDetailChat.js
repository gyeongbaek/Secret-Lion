import Component from '../../core/Component.js';
import { db, doc, getDoc } from '../../firebase.js';

class PostDetailChat extends Component {
    constructor(props) {
        super(props);
        this.date = null;
    }
    getDate(time) {
        const date = time.toDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}.${month}.${day}`;
    }

    render() {
        if (this.props.date !== undefined) {
            this.date = this.getDate(this.props.date);
        }
        const commentLi = document.createElement('li');
        commentLi.setAttribute('class', 'post_li_comment');

        // 유저 정보 및 댓글 내용
        const commentLiRight = document.createElement('div');
        commentLiRight.setAttribute('class', 'post_div_comment_right');

        const commentUserInfo = document.createElement('div');
        commentUserInfo.setAttribute('class', 'post_div_comment_user_info');

        const commentUserImg = document.createElement('img');
        commentUserImg.setAttribute('class', 'post_img_comment_user');
        commentUserImg.setAttribute(
            'src',
            this.props.photoURL
                ? this.props.photoURL
                : '/src/assets/profile/profile.png'
        );
        commentUserImg.setAttribute('alt', '');

        const commentUserName = document.createElement('strong');
        commentUserName.setAttribute('class', 'post_strong_name');
        commentUserName.textContent = this.props.displayName;

        const commentDate = document.createElement('time');
        commentDate.setAttribute('class', 'post_time_comment');
        commentDate.textContent = this.date;

        const commentP = document.createElement('pre');
        commentP.setAttribute('class', 'post_pre_comment');
        commentP.textContent = this.props.comment;
        commentLiRight.appendChild(commentUserName);
        commentLiRight.appendChild(commentP);

        commentLi.appendChild(commentUserImg);
        commentLi.appendChild(commentLiRight);
        commentLi.appendChild(commentDate);

        return commentLi;
    }
}

export default PostDetailChat;

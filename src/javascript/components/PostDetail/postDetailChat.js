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
        const commentLiLeft = document.createElement('div');
        commentLiLeft.setAttribute('class', 'post_div_comment_left');

        const commentUserInfo = document.createElement('div');
        commentUserInfo.setAttribute('class', 'post_div_comment_user_info');

        const commentUserImg = document.createElement('img');
        commentUserImg.setAttribute('class', 'post_img_comment_user');
        commentUserImg.setAttribute(
            'src',
            this.props.photoURL
                ? this.props.photoURL
                : 'https://cdn.pixabay.com/photo/2019/05/21/07/11/cat-4218424__480.jpg'
        );
        commentUserImg.setAttribute('alt', '');

        // 유저 이름 및 날짜
        const commentUserNameDate = document.createElement('div');
        commentUserNameDate.setAttribute('class', 'post_div_comment_name_date');

        const commentUserName = document.createElement('strong');
        commentUserName.setAttribute('class', 'post_strong_name');
        commentUserName.textContent = this.props.displayName;

        const commentDate = document.createElement('time');
        commentDate.setAttribute('class', 'post_time_comment');
        commentDate.textContent = this.date;

        commentUserNameDate.appendChild(commentUserName);
        commentUserNameDate.appendChild(commentDate);

        // 유저 정보 및 날짜
        commentUserInfo.appendChild(commentUserImg);
        commentUserInfo.appendChild(commentUserNameDate);

        const commentP = document.createElement('p');
        commentP.textContent = this.props.comment;
        commentLiLeft.appendChild(commentUserInfo);
        commentLiLeft.appendChild(commentP);

        commentLi.appendChild(commentLiLeft);

        return commentLi;
    }
}

export default PostDetailChat;

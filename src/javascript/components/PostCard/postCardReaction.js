import Component from '../../core/Component.js';
import { auth } from '../../firebase.js';

class PostCardReaction extends Component {
    render() {
        const postCardReaction = document.createElement('div');
        postCardReaction.setAttribute('class', 'board_post_reac');

        const imgLike = document.createElement('img');
        if (this.props.like.includes(auth.currentUser.uid)) {
            imgLike.setAttribute('src', './src/assets/heart_fill.svg');
        } else {
            imgLike.setAttribute('src', './src/assets/heart.svg');
        }
        imgLike.setAttribute('alt', '');

        const cntLike = document.createElement('p');
        cntLike.innerText = this.props.like.length;

        postCardReaction.appendChild(imgLike);
        postCardReaction.appendChild(cntLike);

        const imgComment = document.createElement('img');
        if (this.props.scrap.includes(auth.currentUser.uid)) {
            imgComment.setAttribute('src', './src/assets/scrap_fill.svg');
        } else {
            imgComment.setAttribute('src', './src/assets/scrap.svg');
        }
        imgComment.setAttribute('alt', '');
        const cntComment = document.createElement('p');
        cntComment.innerText = this.props.scrap.length;
        postCardReaction.appendChild(imgComment);
        postCardReaction.appendChild(cntComment);

        return postCardReaction;
    }
}

export default PostCardReaction;

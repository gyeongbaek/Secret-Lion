import Component from '../../core/Component.js';

class PostCardReaction extends Component {
    render() {
        const postCardReaction = document.createElement('div');
        postCardReaction.setAttribute('class', 'board_post_reac');

        const imgLike = document.createElement('img');
        imgLike.setAttribute('src', '../../../assets/heart.svg');
        const cntLike = document.createElement('p');
        cntLike.innerText = this.props.like;
        postCardReaction.appendChild(imgLike);
        postCardReaction.appendChild(cntLike);

        const imgComment = document.createElement('img');
        imgComment.setAttribute('src', '../../../assets/scrap.svg');
        const cntComment = document.createElement('p');
        cntComment.innerText = this.props.comment;
        postCardReaction.appendChild(imgComment);
        postCardReaction.appendChild(cntComment);

        return postCardReaction;
    }
}

export default PostCardReaction;

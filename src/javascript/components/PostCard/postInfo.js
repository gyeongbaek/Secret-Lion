import Component from '../../core/Component.js';

class PostInfo extends Component {
    render() {
        const postInfo = document.createElement('div');
        postInfo.setAttribute('class', 'main_post_reac');

        const imgLike = document.createElement('img');
        imgLike.setAttribute('src', '/src/assets/heart.svg');
        const cntLike = document.createElement('p');
        cntLike.innerText = this.props.like;
        postInfo.appendChild(imgLike);
        postInfo.appendChild(cntLike);

        const imgComment = document.createElement('img');
        imgComment.setAttribute('src', '/src/assets/comment.svg');
        const cntComment = document.createElement('p');
        cntComment.innerText = this.props.comment;
        postInfo.appendChild(imgComment);
        postInfo.appendChild(cntComment);

        return postInfo;
    }
}

export default PostInfo;

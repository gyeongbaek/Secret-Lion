import Component from '../../core/Component.js';

class PostCardReaction extends Component {
    render() {
        const postCardReaction = document.createElement('div');
        postCardReaction.setAttribute('class', 'board_post_reac');

        const imgLike = document.createElement('img');
        imgLike.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
        );
        const cntLike = document.createElement('p');
        cntLike.innerText = this.props.like;
        postCardReaction.appendChild(imgLike);
        postCardReaction.appendChild(cntLike);

        const imgComment = document.createElement('img');
        imgComment.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
        );
        const cntComment = document.createElement('p');
        cntComment.innerText = this.props.comment;
        postCardReaction.appendChild(imgComment);
        postCardReaction.appendChild(cntComment);

        return postCardReaction;
    }
}

export default PostCardReaction;

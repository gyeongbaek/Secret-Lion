import Component from '../../core/Component.js';

class PostCardThumbnail extends Component {
    render() {
        const postCardThumbnail = document.createElement('img');
        postCardThumbnail.setAttribute('class', 'board_img_thumbnail');
        postCardThumbnail.setAttribute('src', this.props.src);
        postCardThumbnail.setAttribute('alt', '');
        return postCardThumbnail;
    }
}

export default PostCardThumbnail;

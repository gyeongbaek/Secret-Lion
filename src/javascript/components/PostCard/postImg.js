import Component from '../../core/Component.js';

class PostImg extends Component {
    render() {
        const postImg = document.createElement('img');
        postImg.setAttribute('class', 'board_img_thumbnail');
        postImg.setAttribute('src', this.props.src);
        postImg.setAttribute('alt', '');
        return postImg;
    }
}

export default PostImg;

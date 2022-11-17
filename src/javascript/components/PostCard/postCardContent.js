import Component from '../../core/Component.js';

class PostCardContent extends Component {
    render() {
        const postCardContent = document.createElement('p');
        postCardContent.setAttribute('class', 'board_p_content');
        postCardContent.innerText = this.props.content;
        return postCardContent;
    }
}

export default PostCardContent;

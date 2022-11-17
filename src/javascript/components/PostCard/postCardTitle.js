import Component from '../../core/Component.js';

class PostCardTitle extends Component {
    render() {
        const postCardTitle = document.createElement('strong');
        postCardTitle.setAttribute('class', 'board_str_title');
        postCardTitle.innerText = this.props.title;
        return postCardTitle;
    }
}

export default PostCardTitle;

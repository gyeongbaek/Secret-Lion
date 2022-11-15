import Component from '../../core/Component.js';

class PostTitle extends Component {
    render() {
        const postTitle = document.createElement('strong');
        postTitle.setAttribute('class', 'main_str_title');
        postTitle.innerText = this.props.title;
        return postTitle;
    }
}

export default PostTitle;

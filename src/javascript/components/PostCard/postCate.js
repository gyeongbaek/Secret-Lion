import Component from '../../core/Component.js';

class PostCate extends Component {
    render() {
        const postCate = document.createElement('div');
        postCate.setAttribute('class', 'board_category');
        postCate.innerText = this.props.category;

        return postCate;
    }
}

export default PostCate;

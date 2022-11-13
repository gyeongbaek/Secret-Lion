import Component from '../../core/Component.js';

class PostTitle extends Component {
    // 컴포넌트와 구조가 같으면 constructor 생략 가능
    render() {
        const postTitle = document.createElement('strong');
        postTitle.setAttribute('class', 'main_str_title');
        postTitle.innerText = this.props.title;
        return postTitle;
    }
}

export default PostTitle;

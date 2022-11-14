import Component from '../../core/Component.js';

class PostImg extends Component {
    // 컴포넌트와 구조가 같으면 constructor 생략 가능
    render() {
        const postImg = document.createElement('img');
        postImg.setAttribute('class', 'main_img_thumbnail');
        postImg.setAttribute('src', this.props.src);
        postImg.setAttribute('alt', '');
        return postImg;
    }
}

export default PostImg;

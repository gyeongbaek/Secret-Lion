import Component from '../../core/Component.js';

class PostCont extends Component {
    // 컴포넌트와 구조가 같으면 constructor 생략 가능
    render() {
        const postCont = document.createElement('p');
        postCont.setAttribute('class', 'main_p_content');
        postCont.innerText = this.props.content;
        return postCont;
    }
}

export default PostCont;

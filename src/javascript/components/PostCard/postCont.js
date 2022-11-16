import Component from '../../core/Component.js';

class PostCont extends Component {
    render() {
        const postCont = document.createElement('p');
        postCont.setAttribute('class', 'board_p_content');
        postCont.innerText = this.props.content;
        return postCont;
    }
}

export default PostCont;

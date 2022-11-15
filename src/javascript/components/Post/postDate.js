import Component from '../../core/Component.js';

class PostDate extends Component {
    render() {
        const postDate = document.createElement('p');
        postDate.setAttribute('class', 'main_p_date');
        postDate.innerText = this.props.date;
        return postDate;
    }
}

export default PostDate;

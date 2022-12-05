import Component from '../../core/Component.js';

class PostCardDate extends Component {
    render() {
        const postDate = this.props.date.toDate().toISOString();
        const postCardDate = document.createElement('p');
        postCardDate.setAttribute('class', 'board_p_date');
        postCardDate.innerText =
            postDate.substr(0, 10).replaceAll('-', '.') + '.';
        return postCardDate;
    }
}

export default PostCardDate;

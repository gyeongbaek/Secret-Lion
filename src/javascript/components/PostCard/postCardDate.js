import Component from '../../core/Component.js';

class PostCardDate extends Component {
    render() {
        const postCardDate = document.createElement('p');
        postCardDate.setAttribute('class', 'board_p_date');
        postCardDate.innerText = this.props.date;
        return postCardDate;
    }
}

export default PostCardDate;

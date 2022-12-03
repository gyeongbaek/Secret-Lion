import { PostCard } from '../components/PostCard/index.js';
import Component from '../core/Component.js';

class PostBoard extends Component {
    render() {
        const postBoard = document.createElement('ul');
        postBoard.setAttribute('class', 'board_ul_post');
        const frag = new DocumentFragment();

        this.props.posts.forEach((item) => {
            const postCard = new PostCard({ item: item });
            frag.appendChild(postCard.render());
        });
        postBoard.appendChild(frag);
        return postBoard;
    }
}

export default PostBoard;

import { PostTitle, PostImg, PostCont, PostCate, PostInfo, PostUser, PostDate } from '../components/Post/index.js';
import Component from '../core/Component.js';

class PostCard extends Component {
    render() {
        const post = document.createElement('a');
        post.setAttribute('href', `/post/${this.props.item.id}`);
        post.setAttribute('class', 'main_post_item');
        const postImg = new PostImg({ src: this.props.item.thumbnail });
        const postTitle = new PostTitle({ title: this.props.item.postTitle });
        const postCont = new PostCont({ content: this.props.item.postContent });
        const postCate = new PostCate({ category: this.props.item.category });
        const postInfo = new PostInfo({ like: this.props.item.likeCount, comment: this.props.item.commentCount });
        const postDate = new PostDate({ date: this.props.item.date });
        const postUser = new PostUser({ user: this.props.item.writer });

        post.appendChild(postImg.render());
        post.appendChild(postCate.render());
        post.appendChild(postTitle.render());
        post.appendChild(postCont.render());
        post.appendChild(postDate.render());
        post.appendChild(postUser.render());
        post.appendChild(postInfo.render());

        return post;
    }
}

export default PostCard;

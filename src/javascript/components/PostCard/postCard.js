import {
    PostCardTitle,
    PostCardThumbnail,
    PostCardContent,
    PostCardCategory,
    PostCardReaction,
    PostCardWriter,
    PostCardDate,
} from './index.js';
import Component from '../../core/Component.js';
import { db, getDoc, getDocs, query, where } from '../../firebase.js';

class PostCard extends Component {
    render() {
        const postItem = document.createElement('li');
        const post = document.createElement('a');
        post.setAttribute('href', `/post/${this.props.item.id}`);
        post.setAttribute('class', 'board_post_item');

        const postImg = new PostCardThumbnail({ src: this.props.item.img });
        const postTitle = new PostCardTitle({ title: this.props.item.title });
        const postCont = new PostCardContent({
            content: this.props.item.content,
        });
        const postCate = new PostCardCategory({
            category: this.props.item.category,
        });
        const postInfo = new PostCardReaction({
            like: this.props.item.like.length,
            comment: this.props.item.scrap.length,
        });
        const postDate = new PostCardDate({ date: this.props.item.date });
        const postUser = new PostCardWriter({ user: this.props.item.writerId }); //유저아이디->유저정보 가져오기

        post.appendChild(postImg.render());
        post.appendChild(postCate.render());
        post.appendChild(postTitle.render());
        post.appendChild(postCont.render());
        post.appendChild(postDate.render());
        post.appendChild(postUser.render());
        post.appendChild(postInfo.render());

        postItem.append(post);
        return postItem;
    }
}

export default PostCard;

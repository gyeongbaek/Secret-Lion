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
import { db, doc, getDoc } from '../../firebase.js';

class PostCard extends Component {
    async getUser() {
        const docRef = doc(db, 'users', this.props.item.writerId);
        const docSnap = await getDoc(docRef);
        return docSnap.data().displayName;
    }
    render() {
        const postItem = document.createElement('li');
        const post = document.createElement('a');
        post.setAttribute('href', `/post/${this.props.item.id}`);
        post.setAttribute('class', 'board_post_item');

        if (!this.props.item.img) {
            switch (this.props.item.category) {
                case '학습':
                    this.props.item.img = 'src/assets/thumbnail/study.png';
                    break;
                case '연애':
                    this.props.item.img = 'src/assets/thumbnail/love.png';
                    break;
                case '관계':
                    this.props.item.img = 'src/assets/thumbnail/relation.png';
                    break;
                case '취업':
                    this.props.item.img = 'src/assets/thumbnail/job.png';
                    break;
                case '자유':
                    this.props.item.img = 'src/assets/thumbnail/free.png';
                    break;
            }
        }
        const postImg = new PostCardThumbnail({ src: this.props.item.img });
        const postTitle = new PostCardTitle({ title: this.props.item.title });
        const postCont = new PostCardContent({ content: this.props.item.content });
        const postCate = new PostCardCategory({ category: this.props.item.category });
        const postInfo = new PostCardReaction({
            like: this.props.item.like.length,
            comment: this.props.item.scrap.length,
        });
        const postDate = new PostCardDate({ date: this.props.item.date });
        // props.item.writerId에서 uid를 가져온다
        // 그 값을 이용해서 user 컬렉션에서 displayName을 가져와야해
        // 프로필

        post.appendChild(postImg.render());
        post.appendChild(postCate.render());
        post.appendChild(postTitle.render());
        post.appendChild(postCont.render());
        post.appendChild(postDate.render());
        post.appendChild(postInfo.render());
        this.getUser().then((el) => {
            const postUser = new PostCardWriter({ user: el });
            post.appendChild(postUser.render());
        }); //유저아이디->유저정보 가져오기

        postItem.append(post);
        return postItem;
    }
}

export default PostCard;

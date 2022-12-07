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
    constructor(props) {
        super(props);
        this.date = null;
    }
    async getUser() {
        const docRef = doc(db, 'users', this.props.item.writerId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    }
    render() {
        const postItem = document.createElement('li');
        const post = document.createElement('a');
        post.setAttribute('href', `/post/${this.props.item.postId}`);
        post.setAttribute('class', 'board_post_item');

        if (!this.props.item.img) {
            switch (this.props.item.category) {
                case '학습':
                    this.props.item.img = './src/assets/thumbnail/study.png';
                    break;
                case '연애':
                    this.props.item.img = './src/assets/thumbnail/love.png';
                    break;
                case '관계':
                    this.props.item.img = './src/assets/thumbnail/relation.png';
                    break;
                case '취업':
                    this.props.item.img = './src/assets/thumbnail/job.png';
                    break;
                case '자유':
                    this.props.item.img = './src/assets/thumbnail/free.png';
                    break;
                default:
                    break;
            }
        }
        const postImg = new PostCardThumbnail({ src: this.props.item.img });
        post.appendChild(postImg.render());
        const postTitle = new PostCardTitle({ title: this.props.item.title });
        post.appendChild(postTitle.render());
        const postCont = new PostCardContent({
            content: this.props.item.content,
        });
        post.appendChild(postCont.render());
        const postCate = new PostCardCategory({
            category: this.props.item.category,
        });
        post.appendChild(postCate.render());
        const postInfo = new PostCardReaction({
            like: this.props.item.like.participateCount,
            comment: this.props.item.scrap.participateCount,
        });
        post.appendChild(postInfo.render());

        if (this.props.item.date) {
            const postDate = new PostCardDate({ date: this.props.item.date });
            post.appendChild(postDate.render());
        }

        this.getUser().then((el) => {
            const postUser = new PostCardWriter({ user: el });
            post.appendChild(postUser.render());
        });

        postItem.append(post);
        return postItem;
    }
}

export default PostCard;

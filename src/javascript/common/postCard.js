import { PostTitle, PostImg, PostCont } from '../components/Post/index.js';
import Component from '../core/Component.js';

class PostCard extends Component {
    render() {
        const post = document.createElement('a');
        post.setAttribute('href', `/post/${this.props.item.id}`);
        post.setAttribute('class', 'main_post_item');
        const postImg = new PostImg({ src: this.props.item.thumbnail });
        const postTitle = new PostTitle({ title: this.props.item.postTitle });
        const postCont = new PostCont({ content: this.props.item.postContent });

        // const productPrice = new ProductPrice({
        //     price: this.props.item.price,
        //     discountRate: this.props.item.discountRate,
        // });
        // const productLikeButton = new ProductLikeButton({ productId: this.props.item.id });

        post.appendChild(postImg.render());
        post.appendChild(postTitle.render());
        post.appendChild(postCont.render());

        // product.appendChild(productPrice.render());
        // product.appendChild(productLikeButton.initialize());

        return post;
    }
}

export default PostCard;

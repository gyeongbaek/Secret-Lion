import Component from '../../core/Component.js';
import { PostTitle, PostImg } from '../Post/index.js';

class PostCard extends Component {
    render() {
        const post = document.createElement('a');
        post.setAttribute('href', `/post/${this.props.item.id}`);
        post.setAttribute('class', 'main_post_item');
        PostImg;
        const postImg = new PostImg({ src: this.props.item.thumbnailImg });
        const postTitle = new PostTitle({ title: this.props.item.postTitle });
        // const productPrice = new ProductPrice({
        //     price: this.props.item.price,
        //     discountRate: this.props.item.discountRate,
        // });
        // const productLikeButton = new ProductLikeButton({ productId: this.props.item.id });

        // product.appendChild(productImage.render());

        post.appendChild(postTitle.render());

        // product.appendChild(productPrice.render());
        // product.appendChild(productLikeButton.initialize());

        return post;
    }
}

export default PostCard;

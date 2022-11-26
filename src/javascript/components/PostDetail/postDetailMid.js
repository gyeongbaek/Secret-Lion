import Component from '../../core/Component.js';
import { auth, db, doc, updateDoc } from '../../firebase.js';

class PostDetailMid extends Component {
    constructor(props) {
        super(props);
        this.isLikeParty = this.props.like && this.included(this.props.like.participants);
        this.isScrapParty = this.props.scrap && this.included(this.props.scrap.participants);
    }
    included(participants) {
        const include = participants.find((participant) => participant === auth.currentUser.uid);
        return include;
    }
    async partyBtn(isParty, participants, party, icon) {
        let newParty;
        if (isParty) {
            const cancel = participants.filter((v) => v !== auth.currentUser.uid);
            newParty = {
                ...party,
                participants: [...cancel],
                participateCount: participants.length - 1,
            };
        } else {
            newParty = {
                ...party,
                participants: [...participants, auth.currentUser.uid],
                participateCount: participants.length + 1,
            };
        }
        const postRef = doc(db, 'posts', this.props.postId);
        await updateDoc(postRef, {
            [icon]: newParty,
        });
    }
    render() {
        const midSection = document.createElement('section');
        midSection.setAttribute('class', 'post_section_mid');

        const postContenth2 = document.createElement('h2');
        postContenth2.setAttribute('class', 'ir');
        postContenth2.textContent = '게시글 내용';

        // postContentTxt
        const postContentTxt = document.createElement('pre');
        postContentTxt.setAttribute('class', 'post_p_content_txt');
        postContentTxt.textContent = this.props.content;

        const postContentImg = document.createElement('img');
        postContentImg.setAttribute('src', this.props.img);
        postContentImg.setAttribute('alt', '');
        postContentImg.setAttribute('class', 'post_img_content');

        // bottom btns
        const postLikeFavorite = document.createElement('div');
        postLikeFavorite.setAttribute('class', 'post_div_likeFavorite_con');

        // like button
        const postLikeBtn = document.createElement('button');
        postLikeBtn.setAttribute('class', 'post_btn_like');

        postLikeBtn.addEventListener('click', (e) => {
            this.partyBtn(this.isLikeParty, this.props.like.participants, this.props.like, 'like');
        });

        const postLikeImg = document.createElement('img');
        postLikeImg.setAttribute('class', 'post_img_like');
        postLikeImg.setAttribute('alt', '좋아요');
        //좋아요 리스트에 내가 포함되어있으면 이미지 변경해준다.
        // 좋아요리스트에 내 uid와 비교
        postLikeImg.setAttribute('src', this.isLikeParty ? '/src/assets/heart_fill.svg' : '/src/assets/heart.svg');

        const postLikeCount = document.createElement('span');
        postLikeCount.setAttribute('class', 'post_btn_lie_count');
        postLikeCount.textContent = this.props.like && this.props.like.participateCount;

        postLikeBtn.appendChild(postLikeImg);
        postLikeBtn.appendChild(postLikeCount);

        const postFavBtn = document.createElement('button');
        postFavBtn.setAttribute('class', 'post_btn_fav');

        postFavBtn.addEventListener('click', () => {
            this.partyBtn(this.isScrapParty, this.props.scrap.participants, this.props.scrap, 'scrap');
        });

        const postFavImg = document.createElement('img');
        postFavImg.setAttribute('class', 'post_img_fav');
        postFavImg.setAttribute('alt', '즐겨찾기');
        postFavImg.setAttribute('src', this.isScrapParty ? '/src/assets/scrap_fill.svg' : '/src/assets/scrap.svg');

        postFavBtn.appendChild(postFavImg);

        postLikeFavorite.appendChild(postLikeBtn);
        postLikeFavorite.appendChild(postFavBtn);

        // midSection
        midSection.appendChild(postContenth2);
        midSection.appendChild(postContentTxt);
        this.props.img && midSection.appendChild(postContentImg);

        midSection.appendChild(postLikeFavorite);

        return midSection;
    }
}
export default PostDetailMid;

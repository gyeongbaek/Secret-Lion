import Component from '../../core/Component.js';

class PostDetailMid extends Component {
    render() {
        const midSection = document.createElement('section');
        midSection.setAttribute('class', 'post_section_mid');

        const postContenth2 = document.createElement('h2');
        postContenth2.setAttribute('class', 'ir');
        postContenth2.textContent = '게시글 내용';

        // postImg
        const postContentImg = document.createElement('img');
        postContentImg.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2017/01/16/23/10/snow-leopard-1985510__480.jpg'
        );
        postContentImg.setAttribute('alt', '');
        postContentImg.setAttribute('class', 'post_img_content');

        // postContentTxt
        const postContentTxt = document.createElement('p');
        postContentTxt.setAttribute('class', 'post_p_content_txt');
        postContentTxt.textContent = `길가다가 고양이가 너무 귀엽게 쳐다보네요 귀여워 죽겠습니다`;

        // bottom btns
        const postLikeFavorite = document.createElement('div');
        postLikeFavorite.setAttribute('class', 'post_div_likeFavorite_con');

        // like button
        const postLikeBtn = document.createElement('button');
        postLikeBtn.setAttribute('class', 'post_btn_like');

        const postLikeImg = document.createElement('img');
        postLikeImg.setAttribute('class', 'post_img_like');
        postLikeImg.setAttribute('src', 'src/assets/heart.svg');
        postLikeImg.setAttribute('alt', '좋아요');

        const postLikeCount = document.createElement('span');
        postLikeCount.setAttribute('class', 'post_btn_lie_count');
        postLikeCount.textContent = '24';

        postLikeBtn.appendChild(postLikeImg);
        postLikeBtn.appendChild(postLikeCount);

        const postFavBtn = document.createElement('button');
        postFavBtn.setAttribute('class', 'post_btn_fav');

        const postFavImg = document.createElement('img');
        postFavImg.setAttribute('class', 'post_img_fav');
        postFavImg.setAttribute('src', 'src/assets/scrap.svg');
        postFavImg.setAttribute('alt', '즐겨찾기');

        postFavBtn.appendChild(postFavImg);

        postLikeFavorite.appendChild(postLikeBtn);
        postLikeFavorite.appendChild(postFavBtn);

        // midSection
        midSection.appendChild(postContenth2);
        midSection.appendChild(postContentTxt);
        midSection.appendChild(postLikeFavorite);

        return midSection;
    }
}

export default PostDetailMid;

import { IconImg, IconTitle } from './index.js';
import Component from '../../core/Component.js';

class UserInfoIcon extends Component {
    render() {
        // 아이콘 컨테이너
        const iconContainer = document.createElement('div');
        iconContainer.setAttribute('class', 'info_div_iconWrap');

        const postDiv = document.createElement('div');
        postDiv.setAttribute('class', 'info_div_post');

        const likeDiv = document.createElement('div');
        likeDiv.setAttribute('class', 'info_div_like');

        const scrapDiv = document.createElement('div');
        scrapDiv.setAttribute('class', 'info_div_scrap');

        // 아이콘 이미지
        const postImg = new IconImg(
            'props',
            'src/assets/write.svg',
            '게시글 아이콘',
            'info_img_post'
        );
        const likeImg = new IconImg(
            'props',
            'src/assets/heart.svg',
            '좋아요 아이콘',
            'info_img_like'
        );
        const scrapImg = new IconImg(
            'props',
            'src/assets/scrap.svg',
            '스크랩 아이콘',
            'info_img_scrap'
        );

        // 아이콘 타이틀
        const postTitle = new IconTitle('props', '게시글', 'info_spn_post');
        const likeTitle = new IconTitle('props', '좋아요', 'info_spn_like');
        const scrapTitle = new IconTitle('props', '스크랩', 'info_spn_scrap');

        // 아이콘 컨테이너 안
        iconContainer.appendChild(postDiv);
        iconContainer.appendChild(likeDiv);
        iconContainer.appendChild(scrapDiv);

        postDiv.appendChild(postImg.render());
        postDiv.appendChild(postTitle.render());

        likeDiv.appendChild(likeImg.render());
        likeDiv.appendChild(likeTitle.render());

        scrapDiv.appendChild(scrapImg.render());
        scrapDiv.appendChild(scrapTitle.render());

        return [iconContainer, likeDiv];
    }
}

export default UserInfoIcon;

import { IconImg, IconTitle } from './index.js';
import Component from '../../core/Component.js';

class UserInfoIcon extends Component {
    render() {
        // 아이콘 컨테이너
        const iconContainer = document.createElement('div');
        iconContainer.setAttribute('class', 'info_div_iconWrap');

        const postDiv = document.createElement('div');
        postDiv.setAttribute('class', 'info_div_post');

        const commentDiv = document.createElement('div');
        commentDiv.setAttribute('class', 'info_div_comment');

        const scrapDiv = document.createElement('div');
        scrapDiv.setAttribute('class', 'info_div_scrap');

        // 아이콘 이미지
        const postImg = new IconImg(
            'props',
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
            '게시글 아이콘',
            'info_img_post'
        );
        const commentImg = new IconImg(
            'props',
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
            '댓글 아이콘',
            'info_img_comment'
        );
        const scrapImg = new IconImg(
            'props',
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
            '스크랩 아이콘',
            'info_img_scrap'
        );

        // 아이콘 타이틀
        const postTitle = new IconTitle('props', '게시글', 'info_spn_post');
        const commentTitle = new IconTitle('props', '댓글', 'info_spn_comment');
        const scrapTitle = new IconTitle('props', '스크랩', 'info_spn_scrap');

        // 아이콘 컨테이너 안
        iconContainer.appendChild(postDiv);
        iconContainer.appendChild(commentDiv);
        iconContainer.appendChild(scrapDiv);

        postDiv.appendChild(postImg.render());
        postDiv.appendChild(postTitle.render());

        commentDiv.appendChild(commentImg.render());
        commentDiv.appendChild(commentTitle.render());

        scrapDiv.appendChild(scrapImg.render());
        scrapDiv.appendChild(scrapTitle.render());

        return iconContainer;
    }
}

export default UserInfoIcon;

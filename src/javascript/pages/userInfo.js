import Header from '../common/header.js';
import UserInfoIcon from '../components/UserInfoIcon/userInfoIcon.js';
import PostBoard from '../common/postBoard.js';
import { productData } from '../data.js';

class UserInfo {
    constructor(props) {
        this.post = {};
    }
    async getPostData() {
        // 나중에 json 형태로 받아올 예정
        this.post = productData;
    }
    render() {
        this.getPostData();

        const fragCon = document.createDocumentFragment();

        const header = new Header();

        // 메인 컨테이너
        const userInfoMain = document.createElement('main');
        userInfoMain.setAttribute('class', 'info_main_container');

        const userInfoh1 = document.createElement('h1');
        userInfoh1.setAttribute('class', 'ir');
        userInfoh1.textContent = '유저 프로필 페이지';
        userInfoMain.appendChild(userInfoh1);

        // 유저 프로필 섹션
        const profileSection = document.createElement('section');
        profileSection.setAttribute('class', 'info_sect_profile');

        const profileh2 = document.createElement('h2');
        profileh2.setAttribute('class', 'ir');
        profileh2.textContent = '유저 프로필';

        const profileImg = document.createElement('img');
        profileImg.setAttribute(
            'src',
            'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        );
        profileImg.setAttribute('class', 'info_img_profile');

        const nicknameTxt = document.createElement('strong');
        nicknameTxt.setAttribute('class', 'info_strong_nickname');
        nicknameTxt.textContent = '목짧은기린';

        const changeBtn = document.createElement('button');
        changeBtn.setAttribute('onclick', "location.href='/setting'");
        changeBtn.setAttribute('class', 'info_btn_change');
        changeBtn.textContent = '프로필 수정';

        // 아이콘 컨테이너
        // const iconContainer = document.createElement('div');
        // iconContainer.setAttribute('class', 'info_div_iconWrap');

        // 게시글 아이콘
        // const postDiv = document.createElement('div');
        // postDiv.setAttribute('class', 'info_div_post');

        // const postImg = document.createElement('img');
        // postImg.setAttribute('src', 'src/assets/write.svg');
        // postImg.setAttribute('class', 'info_img_post');

        // const postSpn = document.createElement('span');
        // postSpn.setAttribute('class', 'info_spn_post');
        // postSpn.textContent = '게시글';

        // postDiv.appendChild(postImg);
        // postDiv.appendChild(postSpn);

        // 댓글 아이콘
        // const commentDiv = document.createElement('div');
        // commentDiv.setAttribute('class', 'info_div_comment');

        // const commentImg = document.createElement('img');
        // commentImg.setAttribute('src', 'src/assets/comment.svg');
        // commentImg.setAttribute('class', 'info_img_comment');

        // const commentSpn = document.createElement('span');
        // commentSpn.setAttribute('class', 'info_spn_comment');
        // commentSpn.textContent = '댓글';

        // commentDiv.appendChild(commentImg);
        // commentDiv.appendChild(commentSpn);

        // 스크랩 아이콘
        // const scrapDiv = document.createElement('div');
        // scrapDiv.setAttribute('class', 'info_div_scrap');

        // const scrapImg = document.createElement('img');
        // scrapImg.setAttribute('src', 'src/assets/scrap.svg');
        // scrapImg.setAttribute('class', 'info_img_scrap');

        // const scrapSpn = document.createElement('span');
        // scrapSpn.setAttribute('class', 'info_spn_scrap');
        // scrapSpn.textContent = '스크랩';

        // scrapDiv.appendChild(scrapImg);
        // scrapDiv.appendChild(scrapSpn);

        // iconContainer.appendChild(postDiv);
        // iconContainer.appendChild(commentDiv);
        // iconContainer.appendChild(scrapDiv);

        const userInfoIcon = new UserInfoIcon();

        // 게시글 목록 섹션
        const postListSection = document.createElement('section');
        postListSection.setAttribute('class', 'info_sect_postList');

        const posth2 = document.createElement('h2');
        posth2.setAttribute('class', 'ir');
        posth2.textContent = '게시글 목록';

        const postBoard = new PostBoard({ posts: this.post });

        // 유저 프로필 섹션 안
        profileSection.appendChild(profileh2);
        profileSection.appendChild(profileImg);
        profileSection.appendChild(nicknameTxt);
        profileSection.appendChild(changeBtn);
        profileSection.appendChild(userInfoIcon.render());
        // profileSection.appendChild(iconContainer);

        // 게시글 목록 섹션 안
        postListSection.appendChild(posth2);
        postListSection.appendChild(postBoard.render());

        // 메인 안
        userInfoMain.appendChild(profileSection);
        userInfoMain.appendChild(postListSection);

        // 전체
        fragCon.appendChild(header.render());
        fragCon.appendChild(userInfoMain);

        return fragCon;
    }
}

export default UserInfo;

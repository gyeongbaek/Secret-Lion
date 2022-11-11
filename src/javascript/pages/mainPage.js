import { productData } from '../data.js';

class MainPage {
    constructor() {
        this.mainElement = document.createElement('main');
        this.post = {};
    }

    async getPostData() {
        this.post = productData;
    }

    render() {
        this.getPostData();
        // console.log(this.post);

        const docFrag = new DocumentFragment();

        // 페이지 연결 테스트 및 nav 위치 지정
        const sectNav = document.createElement('section');
        sectNav.setAttribute('class', 'main_tmp_nav');
        const anchor = document.createElement('a');
        anchor.href = '/';

        const element = document.createElement('h1');
        element.innerText = 'MainPage - 게시판 페이지 (클릭하면 이전페이지로 이동)';

        anchor.appendChild(element);
        sectNav.appendChild(anchor);

        docFrag.appendChild(sectNav);

        // 메인 페이지
        const mainElement = document.createElement('main');
        mainElement.setAttribute('class', 'main_container');
        // 게시판 선택 메뉴
        const menuSection = document.createElement('section');
        menuSection.setAttribute('class', 'main_sect_menu');
        const menuTitle = document.createElement('h2');
        menuTitle.setAttribute('class', 'ir');
        menuTitle.innerText = '게시판 분류 선택';

        // 핫게시판 버튼
        const btnHot = document.createElement('button');
        btnHot.setAttribute('class', 'main_btn_hot');
        const imgHot = document.createElement('img');
        imgHot.setAttribute('src', '/src/assets/hot.svg');
        imgHot.setAttribute('alt', '');
        btnHot.innerText = 'HOT';
        btnHot.appendChild(imgHot);

        // 최신순 게시판 버튼
        const btnRecent = document.createElement('button');
        btnRecent.setAttribute('class', 'main_btn_recent');
        const imgRecent = document.createElement('img');
        imgRecent.setAttribute('src', '/src/assets/recent.svg');
        imgRecent.setAttribute('alt', '');
        btnRecent.innerText = '최신';
        btnRecent.appendChild(imgRecent);

        const dropDown = document.createElement('div');
        dropDown.setAttribute('class', 'main_dropdown');
        dropDown.innerText = '카테고리 선택';

        menuSection.appendChild(btnHot);
        menuSection.appendChild(btnRecent);
        menuSection.appendChild(dropDown);

        // 게시판
        const postSection = document.createElement('section');
        const postTitle = document.createElement('h2');
        postTitle.setAttribute('class', 'ir');
        postTitle.innerText = '게시글 목록';
        postSection.appendChild(postTitle);

        const postList = document.createElement('ul');
        postList.setAttribute('class', 'main_ul_post');

        this.post.forEach((item) => {
            // console.log(item);
            // 리스트 아이템 컨테이너
            const postItem = document.createElement('li');

            // 썸네일
            const thumbnail = document.createElement('img');
            thumbnail.setAttribute('class', 'main_img_thumbnail');
            thumbnail.setAttribute('src', item.thumbnail);
            thumbnail.setAttribute('alt', '');

            // 카테고리
            const category = document.createElement('div');
            category.setAttribute('class', 'main_category');
            category.innerText = item.category;

            // 제목
            const title = document.createElement('strong');
            title.setAttribute('class', 'main_str_title');
            title.innerText = item.postTitle;

            // 내용 미리보기
            const content = document.createElement('p');
            content.setAttribute('class', 'main_p_content');
            content.innerText = item.postContent;

            // 작성일
            const date = document.createElement('p');
            date.setAttribute('class', 'main_p_date');
            date.innerText = item.date;

            // 작성자
            const postUser = document.createElement('div');
            postUser.setAttribute('class', 'main_post_user');

            const profileImg = document.createElement('img');
            profileImg.setAttribute('src', '/src/assets/user.svg');
            profileImg.setAttribute('alt', '');

            const userName = document.createElement('p');
            userName.innerText = item.writer;
            postUser.append(profileImg);
            postUser.append(userName);

            // 좋아요/코멘트
            const postInfo = document.createElement('div');
            postInfo.setAttribute('class', 'main_post_reac');
            const imgLike = document.createElement('img');
            imgLike.setAttribute('src', '/src/assets/heart.svg');
            const cntLike = document.createElement('p');
            cntLike.innerText = item.likeCount;
            postInfo.appendChild(imgLike);
            postInfo.appendChild(cntLike);

            const imgComment = document.createElement('img');
            imgComment.setAttribute('src', '/src/assets/comment.svg');
            const cntComment = document.createElement('p');
            cntComment.innerText = item.commentCount;
            postInfo.appendChild(imgComment);
            postInfo.appendChild(cntComment);

            postItem.appendChild(thumbnail);
            postItem.appendChild(category);
            postItem.appendChild(title);
            postItem.appendChild(content);
            postItem.appendChild(date);
            postItem.appendChild(postUser);
            postItem.appendChild(postInfo);

            postList.append(postItem);
        });

        postSection.appendChild(postList);

        mainElement.appendChild(menuSection);
        mainElement.appendChild(postSection);
        docFrag.appendChild(mainElement);

        return docFrag; // test
        // return mainElement; // exec
    }
}

export default MainPage;

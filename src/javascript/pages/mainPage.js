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
        console.log(this.post);

        // 페이지 연결 테스트
        const container = document.createElement('div');
        const element = document.createElement('h1');
        element.innerText = 'MainPage - 게시판 페이지';

        const anchor = document.createElement('a');
        anchor.href = '/';
        anchor.innerText = '테스트 페이지로 이동';

        container.appendChild(element);
        container.appendChild(anchor);

        // 실제 페이지
        const mainElement = document.createElement('main');

        // 게시판 선택 메뉴
        const menuSection = document.createElement('section');
        menuSection.setAttribute('class', 'main_sect_menu');
        const menuTitle = document.createElement('h2');
        menuTitle.setAttribute('class', 'ir');
        menuTitle.innerText = '게시판 선택';

        const btnHot = document.createElement('button');
        btnHot.setAttribute('class', 'main_btn_hot');
        const hotImg = document.createElement('img');
        hotImg.setAttribute('src', '/src/assets/hot.svg');
        hotImg.setAttribute('alt', '');
        btnHot.appendChild(hotImg);
        btnHot.innerText = 'HOT';

        const btnRecent = document.createElement('button');
        btnRecent.setAttribute('class', 'main_btn_recent');
        const recentImg = document.createElement('img');
        recentImg.setAttribute('src', '/src/assets/recent.svg');
        recentImg.setAttribute('alt', '');
        btnRecent.appendChild(recentImg);
        btnRecent.innerText = '최신';

        const dropDown = document.createElement('div');
        dropDown.setAttribute('class', 'dropdown');

        menuSection.appendChild(btnHot);
        menuSection.appendChild(btnRecent);
        menuSection.appendChild(dropDown);

        // 게시판
        const board = document.createElement('section');
        const boardTitle = document.createElement('h2');
        boardTitle.setAttribute('class', 'ir');
        boardTitle.innerText = '게시글 목록';
        board.appendChild(boardTitle);

        const boardList = document.createElement('ul');
        boardList.setAttribute('class', 'main_ul_board');

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
            category.setAttribute('class', 'main_div_category');
            category.innerText = item.category;

            // 제목
            const title = document.createElement('strong');
            title.setAttribute('class', 'main_str_title');
            const titIr = document.createElement('span');
            titIr.setAttribute('class', 'ir');
            titIr.innerText = '제목';
            title.appendChild(titIr);
            title.innerText = item.postTitle;

            // 내용 미리보기
            const content = document.createElement('p');
            content.setAttribute('class', 'main_p_content');
            const contIr = document.createElement('span');
            contIr.setAttribute('class', 'ir');
            contIr.innerText = '내용 미리보기';
            content.appendChild(contIr);
            content.innerText = item.postContent;

            postItem.appendChild(thumbnail);
            postItem.appendChild(category);
            postItem.appendChild(title);
            postItem.appendChild(content);

            boardList.append(postItem);
        });

        board.appendChild(boardList);

        mainElement.appendChild(menuSection);
        mainElement.appendChild(board);
        container.appendChild(mainElement);

        return container; // test
        // return mainElement; // exec
    }
}

export default MainPage;

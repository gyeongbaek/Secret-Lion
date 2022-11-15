import PostCard from '../common/postCard.js';
import Component from '../core/Component.js';
import { productData } from '../data.js';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.mainElement = document.createElement('main');
        this.post = {};
    }

    async getPostData() {
        // 나중에 json 형태로 받아올 예정
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
        postSection.setAttribute('class', 'main_sect_post');
        const postTitle = document.createElement('h2');
        postTitle.setAttribute('class', 'ir');
        postTitle.innerText = '게시글 목록';
        postSection.appendChild(postTitle);

        const postList = document.createElement('ul');
        postList.setAttribute('class', 'main_ul_post');

        //
        this.post.forEach((item) => {
            // console.log(item);
            // 리스트 아이템 컨테이너
            const postItem = document.createElement('li');
            const postCard = new PostCard({ item: item });
            postItem.appendChild(postCard.render());
            postList.appendChild(postItem);
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

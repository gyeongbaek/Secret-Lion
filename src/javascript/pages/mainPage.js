import PostBoard from '../common/postBoard.js';
import Component from '../core/Component.js';
import { productData } from '../data.js';
import { Header, DropDown, MainContainer } from '../common/index.js';
import { collection, db, getDocs, orderBy, query } from '../firebase.js';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.post = [];
    }
    async getPostData() {
        // 나중에 json 형태로 받아올 예정
        this.post = productData;
    }

    async getTestData() {
        const posts = [];
        const postRef = collection(db, 'test-post');
        const q = query(
            postRef,
            // where('category','==','아침'),
            orderBy('date', 'desc')
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            posts.push(doc.data());
        });
        return posts;
    }

    hotScore(el) {
        return el.like.length + el.scrap.length;
    }
    hotSortedPost(posts) {
        let result = [...posts].sort((a, b) => {
            return this.hotScore(b) - this.hotScore(a);
        });
        console.log(result);
        return result;
    }

    render() {
        let displayPost = [];

        // this.getPostData();
        // console.log(this.post);
        const docFrag = new DocumentFragment();

        const header = new Header();
        docFrag.appendChild(header.render());

        // 메인 페이지

        const main = new MainContainer();
        const mainEl = main.render();

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

        const dropDown = new DropDown();

        menuSection.appendChild(btnHot);
        menuSection.appendChild(btnRecent);
        menuSection.appendChild(dropDown.render());

        // 게시판
        const postSection = document.createElement('section');
        postSection.setAttribute('class', 'main_sect_post');
        const postTitle = document.createElement('h2');
        postTitle.setAttribute('class', 'ir');
        postTitle.innerText = '게시글 목록';
        postSection.appendChild(postTitle);
        this.getTestData().then((posts) => {
            this.post = posts;
            console.log(this.post);
            // 기본 정렬 조건이 HOT

            displayPost = this.hotSortedPost(this.post);

            const postBoard = new PostBoard({ posts: displayPost });
            postSection.appendChild(postBoard.render());
        });

        mainEl.appendChild(menuSection);
        mainEl.appendChild(postSection);
        docFrag.appendChild(mainEl);
        return docFrag; // test
        // return mainElement; // exec
    }
}

export default MainPage;

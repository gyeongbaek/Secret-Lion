import PostBoard from '../common/postBoard.js';
import Component from '../core/Component.js';
import { productData } from '../data.js';
import { Header, DropDown, MainContainer } from '../common/index.js';
import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase.js';

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
        const postRef = collection(db, 'posts');
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

    render() {
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
        imgHot.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
        );
        imgHot.setAttribute('alt', '');
        btnHot.innerText = 'HOT';
        btnHot.appendChild(imgHot);

        // 최신순 게시판 버튼
        const btnRecent = document.createElement('button');
        btnRecent.setAttribute('class', 'main_btn_recent');
        const imgRecent = document.createElement('img');
        imgRecent.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
        );
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
            const postBoard = new PostBoard({ posts: this.post });
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

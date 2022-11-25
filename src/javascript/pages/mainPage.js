import PostBoard from '../common/postBoard.js';
import Component from '../core/Component.js';
import { productData } from '../data.js';
import { Header, DropDown, MainContainer } from '../common/index.js';
import { collection, db, getDocs, orderBy, query } from '../firebase.js';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.post = [];
        this.state = {
            displayPost: [],
        };
    }
    async getPostData() {
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

    setState(newState) {
        this.state = newState;
        const rendered = this.render();
        this.lastRendered.replaceWith(rendered);
    }

    /**
     * 함수로 빼는게 나을지 고민중
     * 굳이 함수 실행할 필요가 있나 싶기도 하고
     * 캡슐화?해야되지 않나 싶기도함
     */
    checkHot(a, b) {
        return b.like.length + b.scrap.length - a.like.length - a.scrap.length;
    }
    checkRecent(a, b) {
        return a.date - b.date;
    }

    changeHotRecent(flag) {
        if (flag) {
            // Hot
            const hotList = [...this.state.displayPost].sort((a, b) => {
                return b.like.length + b.scrap.length - a.like.length - a.scrap.length;
            });
            console.log(hotList);

            return hotList;
        } else {
            // Recent
            const recList = [...this.state.displayPost].sort((a, b) => {
                return a.date - b.date;
            });
            console.log(recList);
            return recList;
        }
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
        btnHot.setAttribute('class', 'main_btn_hot on');
        const imgHot = document.createElement('img');
        imgHot.setAttribute('src', '/src/assets/hot.svg');
        imgHot.setAttribute('alt', '');
        btnHot.innerText = 'HOT';
        btnHot.appendChild(imgHot);
        btnHot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.changeHotRecent(true);
        });

        // 최신순 게시판 버튼
        const btnRecent = document.createElement('button');
        btnRecent.setAttribute('class', 'main_btn_recent');
        const imgRecent = document.createElement('img');
        imgRecent.setAttribute('src', '/src/assets/recent.svg');
        imgRecent.setAttribute('alt', '');
        btnRecent.innerText = '최신';
        btnRecent.appendChild(imgRecent);
        btnRecent.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.changeHotRecent(false);
        });

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

        this.getPostData().then((posts) => {
            this.post = posts;
            this.state.displayPost = posts;

            this.state.displayPost = this.changeHotRecent(true);

            const postBoard = new PostBoard({ posts: this.state.displayPost });
            postSection.appendChild(postBoard.render());
        });

        mainEl.appendChild(menuSection);
        mainEl.appendChild(postSection);
        docFrag.appendChild(mainEl);
        return docFrag; // test
        // return mainElement; // exec
    }
    initialize() {
        const rendered = this.render();
        this.lastRendered = rendered;

        return rendered;
    }
}

export default MainPage;

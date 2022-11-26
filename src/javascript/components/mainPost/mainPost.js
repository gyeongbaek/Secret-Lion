import PostBoard from '../../common/postBoard.js';
import Component from '../../core/Component.js';
import { DropDown, MainContainer, TestDrop } from '../../common/index.js';

class MainPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderHot: true,
            category: null,
            displayPost: [],
        };
    }

    checkHot(a, b) {
        return b.like.length + b.scrap.length - a.like.length - a.scrap.length;
    }
    checkRecent(a, b) {
        return a.date - b.date;
    }

    setDisplayPost() {
        let newList = [...this.props.posts];

        if (!this.state.orderHot) {
            newList = [...this.props.posts].sort((a, b) => this.checkRecent(a, b));
        }
        if (this.state.category) {
            newList = newList.filter((el) => el.category === this.state.category);
        }
        return newList;
    }

    changeDisplay() {
        this.setState({ displayPost: this.setDisplayPost() });
    }

    render() {
        // const docFrag = new DocumentFragment();
        const docFrag = document.createElement('div');

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
            console.log('hot');
            this.state.orderHot = true;
            this.changeDisplay();
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
            console.log('recent');
            this.state.orderHot = false;
            this.changeDisplay();
        });
        const dropMenu = document.createElement('select');
        const defMenu = document.createElement('option');
        defMenu.setAttribute('value', null);
        defMenu.innerText = '카테고리 선택';
        dropMenu.appendChild(defMenu);

        const categoryList = ['학습', '연애', '관계', '취업', '자유'];
        categoryList.forEach((el) => {
            const selectMenu = document.createElement('option');
            selectMenu.setAttribute('value', el);
            selectMenu.innerText = el;
            dropMenu.appendChild(selectMenu);
        });

        menuSection.appendChild(btnHot);
        menuSection.appendChild(btnRecent);
        menuSection.appendChild(dropMenu);
        // dropDown.dropClick();

        dropMenu.addEventListener('change', (e) => {
            this.state.category = dropMenu.value;
            console.log(dropMenu.value);
            console.log(this.state.category);
        });

        // 게시판
        const postSection = document.createElement('section');
        postSection.setAttribute('class', 'main_sect_post');
        const postTitle = document.createElement('h2');
        postTitle.setAttribute('class', 'ir');
        postTitle.innerText = '게시글 목록';
        postSection.appendChild(postTitle);
        this.state.displayPost = this.setDisplayPost();
        const postBoard = new PostBoard({
            posts: this.state.displayPost,
        });
        postSection.appendChild(postBoard.render());

        docFrag.appendChild(menuSection);
        docFrag.appendChild(postSection);

        return docFrag;
    }
}

export default MainPost;

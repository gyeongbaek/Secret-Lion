import PostBoard from '../../common/postBoard.js';
import Component from '../../core/Component.js';
import { DropDown, MainContainer, TestDrop } from '../../common/index.js';

class MainPost extends Component {
    constructor(props) {
        super(props);
        this.dropDown = new DropDown().render();
        this.state = {
            displayPost: this.checkCategory(),
        };
    }

    checkCategory() {
        if (!localStorage.getItem('selectCategory')) {
            localStorage.setItem('selectCategory', null);
        }
        const category = localStorage.getItem('selectCategory');
        console.log(category);
        if (category == '전체') {
            return this.props.posts;
        } else {
            return this.props.posts.filter((el) => el.category === category);
        }
    }

    changePost(value) {
        localStorage.setItem('selectCategory', value);
        const newList = this.checkCategory();
        // this.props.posts.filter((el) => el.category === value);
        this.setState({ displayPost: newList });
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

        // 최신순 게시판 버튼
        const btnRecent = document.createElement('button');
        btnRecent.setAttribute('class', 'main_btn_recent');
        const imgRecent = document.createElement('img');
        imgRecent.setAttribute('src', '/src/assets/recent.svg');
        imgRecent.setAttribute('alt', '');
        btnRecent.innerText = '최신';
        btnRecent.appendChild(imgRecent);

        const dropMenu = document.createElement('select');
        dropMenu.setAttribute('class', 'testDrop');
        const defMenu = document.createElement('option');
        defMenu.setAttribute('value', '룰루');
        defMenu.innerText = '카테고리 선택';
        dropMenu.appendChild(defMenu);

        const categoryList = ['전체', '학습', '연애', '관계', '취업', '자유'];
        categoryList.forEach((el) => {
            const selectMenu = document.createElement('option');
            selectMenu.setAttribute('value', el);
            selectMenu.innerText = el;
            dropMenu.appendChild(selectMenu);
        });

        /**
         * DropDown에다가 addEventListener->로컬 승토리지에 저장
         * 로컬 스토리지가 바뀔 때, displayPost 다시 렌더링
         */

        menuSection.appendChild(btnHot);
        menuSection.appendChild(btnRecent);
        menuSection.appendChild(dropMenu);
        menuSection.appendChild(this.dropDown);

        dropMenu.addEventListener('change', (e) => {
            this.state.category = dropMenu.value;
            this.changePost(dropMenu.value);
        });

        // 게시판
        const postSection = document.createElement('section');
        postSection.setAttribute('class', 'main_sect_post');
        const postTitle = document.createElement('h2');
        postTitle.setAttribute('class', 'ir');
        postTitle.innerText = '게시글 목록';
        postSection.appendChild(postTitle);

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

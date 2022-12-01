import PostBoard from '../../common/postBoard.js';
import Component from '../../core/Component.js';
import { DropDown, MainContainer, TestDrop } from '../../common/index.js';

class MainPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPost: this.checkCategory(),
        };
    }

    checkCategory() {
        const categoryList = ['자유', '학습', '취업', '연애', '관계'];
        if (!localStorage.getItem('selectCategory')) {
            localStorage.setItem('selectCategory', '전체');
        }
        const category = localStorage.getItem('selectCategory');
        if (categoryList.includes(category)) {
            return this.props.posts.filter((el) => el.category === category);
        } else {
            // 쿠키 값 컨트롤 방지
            localStorage.setItem('selectCategory', '전체');
            return this.props.posts;
        }
    }

    changePost(value) {
        localStorage.setItem('selectCategory', value);
        const newList = this.checkCategory();
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

        /** 테스트 */
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

        dropMenu.addEventListener('change', (e) => {
            this.state.category = dropMenu.value;
            this.changePost(dropMenu.value);
        });

        menuSection.appendChild(dropMenu);
        /** //테스트 */

        /**
         * DropDown에다가 addEventListener->로컬 승토리지에 category 저장
         * 로컬 스토리지가 바뀔 때, displayPost 다시 렌더링
         */
        const [dropDown, dropItem] = new DropDown({ page: 1 }).render();
        dropItem.addEventListener('click', (e) => {
            console.log(e.target.dataset.name);
            localStorage.setItem('selectCategory', e.target.dataset.name);

            this.changePost(e.target.dataset.name);
        });
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

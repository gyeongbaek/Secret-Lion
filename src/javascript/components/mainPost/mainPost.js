import PostBoard from '../../common/postBoard.js';
import Component from '../../core/Component.js';
import { DropDown, MainContainer, TestDrop } from '../../common/index.js';

class MainPost extends Component {
    constructor(props) {
        super(props);
        this.categoryList = ['자유', '학습', '취업', '연애', '관계'];
        this.state = {
            displayPost: this.checkCategory(),
        };
    }

    checkCategory() {
        if (!localStorage.getItem('selectCategory')) {
            localStorage.setItem('selectCategory', '전체');
        }
        if (!localStorage.getItem('postOrder')) {
            localStorage.setItem('postOrder', '인기');
        }

        const category = localStorage.getItem('selectCategory');
        const order = localStorage.getItem('postOrder');

        let newList = [];
        if (this.categoryList.includes(category)) {
            newList = this.props.posts.filter((el) => el.category === category);
        } else {
            // 쿠키 값 컨트롤 방지
            localStorage.setItem('selectCategory', '전체');
            newList = this.props.posts;
        }
        return this.orderPost(newList, order);
    }

    orderPost(list, flag) {
        if (flag === '최신') {
            return list;
        } else {
            return list.sort((a, b) => {
                return (
                    b.like.participateCount +
                    b.like.participateCount -
                    (a.like.participateCount + a.like.participateCount)
                );
            });
        }
    }

    changeCategory(value) {
        localStorage.setItem('selectCategory', value);
        const newList = this.checkCategory();
        this.setState({ displayPost: newList });
    }

    changeOrder(value) {
        localStorage.setItem('postOrder', value);
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

        // 인기게시판 버튼
        const btnHot = document.createElement('button');
        btnHot.setAttribute('class', 'main_btn_hot on');
        btnHot.setAttribute('data-order', '인기');
        const imgHot = document.createElement('img');
        imgHot.setAttribute('src', '/src/assets/hot.svg');
        imgHot.setAttribute('alt', '');
        btnHot.innerText = '인기';
        btnHot.appendChild(imgHot);

        // btnHot.addEventListener('click', (e) => {
        //     localStorage.setItem('postOrder', e.currentTarget.dataset.order);
        //     this.changeOrder(e.currentTarget.dataset.order);
        // });

        // 최신순 게시판 버튼
        const btnRecent = document.createElement('button');
        btnRecent.setAttribute('class', 'main_btn_recent');
        btnRecent.setAttribute('data-order', '최신');
        const imgRecent = document.createElement('img');
        imgRecent.setAttribute('src', '/src/assets/recent.svg');
        imgRecent.setAttribute('alt', '');
        btnRecent.innerText = '최신';
        btnRecent.appendChild(imgRecent);

        [btnHot, btnRecent].forEach((el) => {
            el.addEventListener('click', (e) => {
                localStorage.setItem('postOrder', e.currentTarget.dataset.order);
                this.changeOrder(e.currentTarget.dataset.order);
            });
        });
        // btnRecent.addEventListener('click', (e) => {
        //     localStorage.setItem('postOrder', e.currentTarget.dataset.order);
        //     this.changeOrder(e.currentTarget.dataset.order);
        // });

        const [dropDown, dropContent, dropItem] = new DropDown({ page: 1 }).render();
        dropItem.addEventListener('click', (e) => {
            localStorage.setItem('selectCategory', e.target.dataset.name);
            console.log(dropContent.innerText);

            this.changeCategory(e.target.dataset.name);
        });

        menuSection.appendChild(btnHot);
        menuSection.appendChild(btnRecent);
        menuSection.appendChild(dropDown);

        const category = localStorage.getItem('selectCategory');
        dropContent.innerText = category;
        dropContent.style.color = '#252525';

        const order = localStorage.getItem('postOrder');
        if (order === '인기') {
            btnRecent.classList.remove('on');
            btnHot.classList.add('on');
        } else {
            btnHot.classList.remove('on');
            btnRecent.classList.add('on');
        }

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

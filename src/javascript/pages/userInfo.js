import Header from '../common/header.js';
import UserInfoIcon from '../components/UserInfoIcon/userInfoIcon.js';
import PostBoard from '../common/postBoard.js';
import Component from '../core/Component.js';
import { productData } from '../data.js';
import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase.js';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.post = {};
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
            // where('category','==','아침'), // 조건
            orderBy('date', 'desc') // 정렬방식
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            posts.push(doc.data());
        });
        return posts;
    }
    render() {
        this.getPostData();

        const fragCon = document.createDocumentFragment();

        const header = new Header();

        // 메인 컨테이너
        const userInfoMain = document.createElement('main');
        userInfoMain.setAttribute('class', 'info_main_container');

        const userInfoh1 = document.createElement('h1');
        userInfoh1.setAttribute('class', 'ir');
        userInfoh1.textContent = '유저 프로필 페이지';
        userInfoMain.appendChild(userInfoh1);

        // 유저 프로필 섹션
        const profileSection = document.createElement('section');
        profileSection.setAttribute('class', 'info_sect_profile');

        const profileh2 = document.createElement('h2');
        profileh2.setAttribute('class', 'ir');
        profileh2.textContent = '유저 프로필';

        const profileImg = document.createElement('img');
        profileImg.setAttribute(
            'src',
            'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        );
        profileImg.setAttribute('class', 'info_img_profile');

        const nicknameTxt = document.createElement('strong');
        nicknameTxt.setAttribute('class', 'info_strong_nickname');
        nicknameTxt.textContent = '목짧은기린';

        const changeBtn = document.createElement('button');
        changeBtn.setAttribute('onclick', "location.href='/setting'");
        changeBtn.setAttribute('class', 'info_btn_change');
        changeBtn.textContent = '프로필 수정';

        const userInfoIcon = new UserInfoIcon();

        // 게시글 목록 섹션
        const postListSection = document.createElement('section');
        postListSection.setAttribute('class', 'info_sect_postList');

        const posth2 = document.createElement('h2');
        posth2.setAttribute('class', 'ir');
        posth2.textContent = '게시글 목록';

        this.getTestData().then((posts) => {
            this.post = posts;
            const postBoard = new PostBoard({ posts: this.post });
            postListSection.appendChild(postBoard.render());
        });

        // 유저 프로필 섹션 안
        profileSection.appendChild(profileh2);
        profileSection.appendChild(profileImg);
        profileSection.appendChild(nicknameTxt);
        profileSection.appendChild(changeBtn);
        profileSection.appendChild(userInfoIcon.render());

        // 게시글 목록 섹션 안
        postListSection.appendChild(posth2);
        // postListSection.appendChild(postBoard.render());

        // 메인 안
        userInfoMain.appendChild(profileSection);
        userInfoMain.appendChild(postListSection);

        // 전체
        fragCon.appendChild(header.render());
        fragCon.appendChild(userInfoMain);

        return fragCon;
    }
}

export default UserInfo;

import Component from '../../core/Component.js';
import { UserInfoIcon } from '../UserInfoIcon/index.js';
import { PostBoard, MainContainer } from '../../common/index.js';
import { productData } from '../../data.js';
import { auth, collection, db, doc, getDocs, getDoc, orderBy, query, where, getAuth, signOut } from '../../firebase.js';

class UserInfoMain extends Component {
    constructor(props) {
        super(props);
        this.posts = [];
        this.token = localStorage.getItem('token');
    }
    async getPostsData() {
        const posts = [];
        const postRef = collection(db, 'posts');

        await getDocs(postRef).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                for (let i = 0; i < doc.data().like.participateCount; i++) {
                    if (doc.data().like.participants[i] === this.token) {
                        posts.push(doc.data());
                    }
                }
            });
        });
        return posts;
    }
    async getUser() {
        const docRef = doc(db, 'users', this.token);
        const docSnap = await getDoc(docRef);

        this.displayName = docSnap.data().displayName;
        this.photoURL = docSnap.data().photoURL;

        return;
    }
    render() {
        // 메인 컨테이너
        const mainCont = new MainContainer();
        const mainEl = mainCont.render();

        const userInfoh1 = document.createElement('h1');
        userInfoh1.setAttribute('class', 'ir');
        userInfoh1.textContent = '유저 프로필 페이지';
        mainEl.appendChild(userInfoh1);

        // 유저 프로필 섹션
        const profileSection = document.createElement('section');
        profileSection.setAttribute('class', 'info_sect_profile');

        const profileh2 = document.createElement('h2');
        profileh2.setAttribute('class', 'ir');
        profileh2.textContent = '유저 프로필';

        const profileImg = document.createElement('img');
        profileImg.setAttribute('class', 'info_img_profile');
        profileImg.setAttribute('alt', '유저 프로필 이미지');

        const nicknameTxt = document.createElement('strong');
        nicknameTxt.setAttribute('class', 'info_strong_nickname');

        this.getUser().then(() => {
            nicknameTxt.textContent = this.displayName;
            if (this.photoURL) {
                profileImg.setAttribute('src', this.photoURL);
            } else {
                profileImg.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg');
            }
        });

        const editAnchor = document.createElement('a');
        // changeBtn.setAttribute('type', 'button');
        // changeBtn.setAttribute('onclick', "location.href='/setting'");
        editAnchor.href = '/setting';
        editAnchor.setAttribute('class', 'info_a_move');
        editAnchor.textContent = '프로필 수정';

        const logOutBtn = document.createElement('a');
        logOutBtn.setAttribute('class', 'info_a_logout');
        logOutBtn.textContent = '로그아웃';

        // 로그아웃 함수
        // const auth = getAuth();
        logOutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
            alert('로그아웃되었습니다');
            location.href = '/';

            // signOut(auth).then(() => {
            //     localStorage.removeItem('token');
            //     alert('로그아웃되었습니다');
            //     location.href = '/';
            // });
        });

        const userInfoIcon = new UserInfoIcon();
        const [icons, postIcon, likeIcon, scrapIcon] = userInfoIcon.render();

        // postIcon.addEventListener

        likeIcon.addEventListener('click', () => {
            this.getPostsData().then((posts) => {
                this.posts = posts;
                const postBoard = new PostBoard({ posts: this.posts });
                postListSection.appendChild(postBoard.render());
            });
        });

        // scrapIcon.addEventListener

        // 게시글 목록 섹션
        const postListSection = document.createElement('section');
        postListSection.setAttribute('class', 'info_sect_postList');

        const posth2 = document.createElement('h2');
        posth2.setAttribute('class', 'ir');
        posth2.textContent = '게시글 목록';

        // 유저 프로필 섹션 안
        profileSection.appendChild(profileh2);
        profileSection.appendChild(profileImg);
        profileSection.appendChild(nicknameTxt);
        profileSection.appendChild(editAnchor);
        profileSection.appendChild(logOutBtn);
        profileSection.appendChild(icons);
        // 게시글 목록 섹션 안
        postListSection.appendChild(posth2);

        // 메인 안
        mainEl.appendChild(profileSection);
        mainEl.appendChild(postListSection);

        return mainEl;
    }
}

export default UserInfoMain;

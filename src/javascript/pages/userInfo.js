import Header from '../common/header.js';
import UserInfoIcon from '../components/UserInfoIcon/userInfoIcon.js';
import PostBoard from '../common/postBoard.js';
import Component from '../core/Component.js';
import { productData } from '../data.js';
import {
    auth,
    collection,
    db,
    doc,
    getDocs,
    orderBy,
    query,
    where,
} from '../firebase.js';

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
        const userProfile = doc(db, 'users', auth.currentUser.uid);
        const posts = [];
        const postRef = collection(db, 'posts');
        // console.log(userProfile);

        getDocs(postRef).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                console.log(doc.data());
                for (let i = 0; i < doc.data().like.participantCount; i++) {
                    if (
                        doc.data().like.participants[i] === auth.currentUser.uid
                    ) {
                        console.log(1);
                    }
                }
            });
        });

        //for (let i = 0; i < snapshot.docs.length; i++) {
        // snapshot.docs.forEach((doc) => {
        //     if (doc.data().like.participants) {
        //         console.log(doc.data().like.participants[i]);
        //         // posts.push({ ...doc.data().like.participants });
        //     }
        // });
        // }
        // });

        // console.log(posts);

        // const q = query(
        //     postRef,
        //     // where('category','==','아침'), // 조건
        //     // orderBy('date', 'desc') // 정렬방식
        // );

        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //     posts.push(doc.data());
        // });

        // for (let i = 0; i < posts.length; i++) {
        //     // posts[i].like.participants.forEach((v) => {
        //     //     if (v === auth.currentUser.uid) {
        //     //         posts.push(posts[i]);
        //     //     }
        //     // });
        // }

        // return posts;
    }
    async getUser() {
        const userProfile = doc(db, 'users', auth.currentUser.uid);
        console.log(userProfile);
        console.log(auth.currentUser.uid);
        // const docSnap = await getDocs(docRef);
        // return {
        //     photoURL: docSnap.data().photoURL,
        // };
        // console.log(photoURL);
    }
    // 프로필 이미지 변경 함수
    // async getProfileImg() {
    //     const userStorageRef = ref(
    //         storage,
    //         `user_images/${auth.currentUser.uid}`
    //     );
    //
    //     // 이미 변경된 이미지를 불러오기

    //     getDownloadURL(userStorageRef).then(async (downloadURL) => {
    //         // 얻은거 storage 저장
    //         // downloadURL을 얻었다
    //         // auth 정보 변경
    //         // database 정보 변경
    //         // updateProfile(auth.currentUser, {
    //         //     photoURL: downloadURL,
    //         // });
    //         const userProfile = doc(db, 'users', auth.currentUser.uid);
    //         // await updateDoc(userProfile, {
    //         //     photoURL: downloadURL,
    //         // });
    //         const image = document.querySelector('.edit_img');
    //         image.src = photoURL;
    //     });

    //     // 프로필 이미지 변경 로직

    //     // userStrorageRef : Storage에 프로필 이미지를 저장하는 폴더를 만들고, X
    //     // 그 안에 유저의 고유번호에 맞게 이미지가 들어가도록 경로를 설정한다 X
    //     // uploadBytes : 이미지를 Storage에 저장한다 X
    //     // getDownloadURL : 이미지의 URL을 얻는다 X
    //     // updateProfile : auth에서 유저 이미지 변경 X
    //     // updateDoc : firestore database에서 유저 이미지 변경 X
    // }
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
        // profileImg.setAttribute(
        //     'src',
        //     'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        // );
        // profileImg.setAttribute(
        //     'src',
        //     this.props.photoURL
        //         ? this.props.photoURL
        //         : 'https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        // );
        profileImg.setAttribute('class', 'info_img_profile');
        profileImg.setAttribute('alt', '유저 프로필 이미지');

        const nicknameTxt = document.createElement('strong');
        nicknameTxt.setAttribute('class', 'info_strong_nickname');
        nicknameTxt.textContent = '목짧은기린';

        const editAnchor = document.createElement('a');
        // changeBtn.setAttribute('type', 'button');
        // changeBtn.setAttribute('onclick', "location.href='/setting'");
        editAnchor.href = '/setting';
        editAnchor.setAttribute('class', 'info_a_move');
        editAnchor.textContent = '프로필 수정';

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
        profileSection.appendChild(editAnchor);
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

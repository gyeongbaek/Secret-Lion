import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
} from '@firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import Component from '../../core/Component.js';
import { auth, db, storage } from '../../firebase.js';

class PostUploadBtn extends Component {
    constructor(props) {
        super(props);
    }

    async postUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const content = document.querySelector('.post_area_content');
        const dropTxt = document.querySelector('.span_drop_content');

        const newPostRef = doc(collection(db, 'posts'));
        const postData = {
            title: inputTit.value,
            content: content.value,
            category: dropTxt.textContent,
            writerId: auth.currentUser.uid,
            date: serverTimestamp(),
            img: null,
            active: false,
            like: {
                participants: [],
                participateCount: 0,
            },
            scrap: {
                participants: [],
                participateCount: 0,
            },
            postId: newPostRef.id,
        };
        await setDoc(newPostRef, postData);

        console.log('완료');
        history.go(-1);
    }

    photoUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const content = document.querySelector('.post_area_content');
        const dropTxt = document.querySelector('.span_drop_content');

        const postRef = doc(collection(db, 'posts'));
        const postStorageRef = ref(storage, `posts_images/${postRef.id}`);
        uploadBytes(postStorageRef, this.props).then(() => {
            getDownloadURL(postStorageRef).then(async (downloadURL) => {
                console.log(downloadURL);
                const postData = {
                    title: inputTit.value,
                    content: content.value,
                    category: dropTxt.textContent,
                    writerId: auth.currentUser.uid,
                    date: serverTimestamp(),
                    img: downloadURL,
                    active: false,
                    like: {
                        participants: [],
                        participateCount: 0,
                    },
                    scrap: {
                        participants: [],
                        participateCount: 0,
                    },
                    postId: postRef.id,
                };
                await setDoc(postRef, postData);

                console.log('완료');
                history.go(-1);
            });
        });
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
        const list = [];
        posts.forEach((v) => {
            if (v.like.participants.length > 0) {
                v.like.participants.find((a) => {
                    console.log(a);
                });
            }
        });
        return posts;
    }

    render() {
        this.getTestData();
        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'post_btn_con');

        const uploadBtn = document.createElement('button');
        uploadBtn.setAttribute('class', 'post_btn', 'd');
        uploadBtn.textContent = '게시물 등록';

        const fileBtn = document.createElement('button');
        fileBtn.setAttribute('class', 'post_btn');
        fileBtn.textContent = '첨부파일 선택';

        const fileinp = document.createElement('input');
        fileinp.setAttribute('class', 'ir');
        fileinp.setAttribute('type', 'file');

        // 버튼으로 파일 선택 가능
        fileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fileinp.click();
        });

        btnContainer.appendChild(fileBtn);
        btnContainer.appendChild(uploadBtn);

        return [btnContainer, fileinp];
    }
}

export default PostUploadBtn;

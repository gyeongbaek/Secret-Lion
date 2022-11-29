import Component from '../../core/Component.js';
import {
    auth,
    collection,
    db,
    doc,
    getDownloadURL,
    ref,
    serverTimestamp,
    setDoc,
    storage,
    uploadBytes,
} from '../../firebase.js';

class PostUploadBtn extends Component {
    constructor(props) {
        super(props);
        this.a = document.createElement('a');
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
        console.log(postData);
        console.log('완료');
        this.a.click();
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
                this.a.click();
            });
        });
    }

    render() {
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
        btnContainer.appendChild(this.a);
        this.a.setAttribute('href', '/user');
        this.a.setAttribute('class', 'ir');

        return [btnContainer, fileinp];
    }
}

export default PostUploadBtn;

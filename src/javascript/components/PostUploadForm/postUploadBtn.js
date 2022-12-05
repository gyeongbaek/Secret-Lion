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
    constructor(props, dropDown) {
        super(props);
        this.a = document.createElement('a');
        this.dropDown = dropDown;
        this.category = null;
    }

    async postUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const content = document.querySelector('.post_area_content');
        if (this.category === null) {
            alert('카테고리를 선택해주세요.');
            return;
        }
        const newPostRef = doc(collection(db, 'posts'));
        const postData = {
            title: inputTit.value,
            content: content.value,
            category: this.category,
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
        this.a.click();
    }

    photoUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const content = document.querySelector('.post_area_content');
        if (this.category === null) {
            alert('카테고리를 선택해주세요.');
            return;
        }
        const postRef = doc(collection(db, 'posts'));
        const postStorageRef = ref(storage, `posts_images/${postRef.id}`);
        uploadBytes(postStorageRef, this.props).then(() => {
            getDownloadURL(postStorageRef).then(async (downloadURL) => {
                const postData = {
                    title: inputTit.value,
                    content: content.value,
                    category: this.category,
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
        this.dropDown.addEventListener('click', (e) => {
            this.category = e.target.dataset.name;
        });

        btnContainer.appendChild(fileBtn);
        btnContainer.appendChild(uploadBtn);
        btnContainer.appendChild(this.a);
        this.a.setAttribute('href', '/Secret-Lion/');
        this.a.setAttribute('class', 'ir');

        return [btnContainer, fileinp];
    }
}

export default PostUploadBtn;

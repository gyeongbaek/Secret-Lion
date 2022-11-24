import Component from '../../core/Component.js';
import {
    auth,
    collection,
    db,
    doc,
    getDownloadURL,
    ref,
    setDoc,
    storage,
    uploadBytes,
} from '../../firebase.js';
import UserInfo from '../../pages/userInfo.js';
import Router from '../../utils/router.js';

class PostUploadBtn extends Component {
    constructor(props) {
        super(props);
    }

    async postUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const contents = document.querySelector('.post_area_content');
        const dropTxt = document.querySelector('.span_drop_content');

        const newPostRef = doc(collection(db, 'posts'));
        const postData = {
            title: inputTit.value,
            contents: contents.value,
            category: dropTxt.textContent,
            writerId: auth.currentUser.uid,
            date: new Date(),
            img: null,
            active: false,
            like: [],
            scrap: [],
            postId: newPostRef.id,
        };
        await setDoc(newPostRef, postData);
        history.go(-1);
    }

    photoUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const contents = document.querySelector('.post_area_content');
        const dropTxt = document.querySelector('.span_drop_content');

        const postRef = doc(collection(db, 'posts'));
        const postStorageRef = ref(storage, `posts_images/${postRef.id}`);
        uploadBytes(postStorageRef, this.props).then(() => {
            getDownloadURL(postStorageRef).then(async (downloadURL) => {
                const postData = {
                    title: inputTit.value,
                    contents: contents.value,
                    category: dropTxt.textContent,
                    writerId: auth.currentUser.uid,
                    date: new Date(),
                    img: downloadURL,
                    active: false,
                    like: [],
                    scrap: [],
                    postId: postRef.id,
                };
                await setDoc(postRef, postData);

                console.log('완료');
                history.go(-1);
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

        return [btnContainer, fileinp];
    }
}

export default PostUploadBtn;

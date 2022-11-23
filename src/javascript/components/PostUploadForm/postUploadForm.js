import { DropDown } from '../../common/index.js';
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
import { PostUploadBtn, PostUploadPreview } from './index.js';

class PostUploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPhoto: null,
        };
        this.photoData = null;
        this.dropDown = new DropDown();
    }
    async postUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const contents = document.querySelector('.post_area_content');

        const newPostRef = doc(collection(db, 'posts'));
        const data = {
            title: inputTit.value,
            contents: contents.value,
            category: this.dropDown.dropClick(),
            writerId: auth.currentUser.uid,
            date: new Date(),
            img: this.photoData,
            active: false,
            like: [],
            scrap: [],
            postId: newPostRef.id,
        };
        await setDoc(newPostRef, data);
        console.log(newPostRef.id);
        console.log('완료');
    }

    photoUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const contents = document.querySelector('.post_area_content');
        const postRef = doc(collection(db, 'posts'));
        const postStorageRef = ref(storage, `posts_images/${postRef.id}`);
        uploadBytes(postStorageRef, this.photoData).then(() => {
            getDownloadURL(postStorageRef).then(async (downloadURL) => {
                const postData = {
                    title: inputTit.value,
                    contents: contents.value,
                    category: this.dropDown.dropClick(),
                    writerId: auth.currentUser.uid,
                    date: new Date(),
                    img: downloadURL,
                    active: false,
                    like: [],
                    scrap: [],
                    postId: postRef.id,
                };
                await setDoc(postRef, postData);
                this.setState({ prevPhoto: null });
                console.log('완료');
            });
        });
    }

    handlePrevImg(e) {
        const reader = new FileReader();
        reader.onload = ({ target }) => {
            this.setState({ prevPhoto: target.result });
        };
        reader.readAsDataURL(e.target.files[0]);
        this.photoData = e.target.files[0];
    }

    // handlePrevImgCancel() {
    //     const postUploadForm = document.querySelector('.post_form_upload');
    //     console.log('hi', postUploadForm);
    //     const postUploadPreview = new PostUploadPreview(this.state.prevPhoto);
    //     const [postUploadPreviewEl, imgCancelBtn] =
    //         postUploadPreview.intialize();
    //     postUploadForm.appendChild(postUploadPreviewEl);
    //     imgCancelBtn.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         this.setState({ prevPhoto: null });
    //         this.photoData = null;
    //     });
    // }

    render() {
        const postUploadForm = document.createElement('form');
        postUploadForm.setAttribute('class', 'post_form_upload');

        const inputTit = document.createElement('input');
        inputTit.setAttribute('type', 'text');
        inputTit.setAttribute('placeholder', '제목을 입력해주세요.');
        inputTit.setAttribute('class', 'post_inp_tit');

        const postContent = document.createElement('textarea');
        postContent.setAttribute('class', 'post_area_content');
        postContent.setAttribute('placeholder', '내용을 입력해주세요.');

        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'post_btn_con');

        const uploadBtn = document.createElement('button');
        uploadBtn.setAttribute('class', 'post_btn');
        uploadBtn.setAttribute('type', 'submit');
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

        fileinp.addEventListener('change', (e) => {
            this.handlePrevImg(e);
        });

        btnContainer.appendChild(fileBtn);
        btnContainer.appendChild(uploadBtn);

        // 파일 미리보기
        postUploadForm.appendChild(this.dropDown.render());
        postUploadForm.appendChild(inputTit);
        postUploadForm.appendChild(postContent);
        // postUploadForm.appendChild(btnContainer.intialize());
        postUploadForm.appendChild(btnContainer);
        if (this.state.prevPhoto) {
            const postUploadPreview = new PostUploadPreview(
                this.state.prevPhoto
            );
            const [postUploadPreviewEl, imgCancelBtn] =
                postUploadPreview.intialize();
            postUploadForm.appendChild(postUploadPreviewEl);
            imgCancelBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setState({ prevPhoto: null });
                this.photoData = null;
            });
            // this.handlePrevImgCancel();
        }

        return postUploadForm;
    }
}

export default PostUploadForm;

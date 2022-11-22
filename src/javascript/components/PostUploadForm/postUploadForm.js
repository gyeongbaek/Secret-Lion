import { DropDown } from '../../common/index.js';
import Component from '../../core/Component.js';
import { auth, collection, db, doc, setDoc } from '../../firebase.js';
import { PostUploadBtn, PostUploadPreview } from './index.js';

class PostUploadForm extends Component {
    constructor(props) {
        super(props);
        this.dropDownContainer = new DropDown();
        this.state = {
            prevPhoto: {},
        };
        this.photoData = null;
    }
    async postUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const contents = document.querySelector('.post_area_content');

        const data = {
            title: inputTit.value,
            contents: contents.value,
            category: this.dropDownContainer.dropClick(),
            writerId: auth.currentUser.uid,
            date: new Date(),
            img: this.photoData,
            active: false,
            like: [],
            scrap: [],
        };
        const newPostRef = doc(collection(db, 'posts'));
        await setDoc(newPostRef, data);
        console.log('완료');
    }
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

        postUploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.postUpload();
        });

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

        // 파일 미리보기
        const postUploadPreview = new PostUploadPreview();

        postUploadForm.appendChild(this.dropDownContainer.render());
        postUploadForm.appendChild(inputTit);
        postUploadForm.appendChild(postContent);

        postUploadForm.appendChild(btnContainer);
        postUploadForm.appendChild(postUploadPreview.render());

        return postUploadForm;
    }
}

export default PostUploadForm;

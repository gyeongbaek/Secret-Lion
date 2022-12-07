import { DropDown } from '../../common/index.js';
import Component from '../../core/Component.js';

import { PostUploadBtn, PostUploadPreview } from './index.js';

class PostUploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPhoto: null,
            photoData: null,
        };
        this.inputTit = document.createElement('input');
        this.inputTit.setAttribute('required', 'true');
        this.postContent = document.createElement('textarea');
        this.postContent.setAttribute('required', 'true');
    }

    handlePrevImg(e) {
        const reader = new FileReader();
        reader.onload = ({ target }) => {
            this.setState({ ...this.state, prevPhoto: target.result });
        };
        reader.readAsDataURL(e.target.files[0]);
        this.setState({ ...this.state, photoData: e.target.files[0] });
    }

    render() {
        const postUploadForm = document.createElement('form');
        postUploadForm.setAttribute('class', 'post_form_upload');

        this.inputTit.setAttribute('type', 'text');
        this.inputTit.setAttribute('placeholder', '제목을 입력해주세요.');
        this.inputTit.setAttribute('class', 'post_inp_tit');

        this.postContent.setAttribute('class', 'post_area_content');
        this.postContent.setAttribute('placeholder', '내용을 입력해주세요.');

        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'post_btn_con');

        const uploadBtn = document.createElement('button');
        uploadBtn.setAttribute('class', 'post_btn');
        uploadBtn.setAttribute('type', 'submit');
        uploadBtn.textContent = '게시물 등록';

        const [dropDown, dropItem, dropList] = new DropDown({
            page: 0,
        }).render();

        const btnsContainer = new PostUploadBtn(this.state.photoData, dropList);
        const [btnsContainerRender, fileinp] = btnsContainer.initialize();

        postUploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.state.prevPhoto) {
                btnsContainer.photoUpload();
            } else {
                btnsContainer.postUpload();
            }
        });

        fileinp.addEventListener('change', (event) => {
            event.preventDefault();
            this.handlePrevImg(event);
        });

        // 파일 미리보기
        postUploadForm.appendChild(dropDown);
        postUploadForm.appendChild(this.inputTit);
        postUploadForm.appendChild(this.postContent);

        postUploadForm.appendChild(btnsContainerRender);

        if (this.state.prevPhoto) {
            const postUploadPreview = new PostUploadPreview(
                this.state.prevPhoto
            );
            const [postUploadPreviewEl, imgCancelBtn] =
                postUploadPreview.initialize();

            postUploadForm.appendChild(postUploadPreviewEl);
            imgCancelBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setState({ prevPhoto: null });
                this.photoData = null;
            });
        }

        return postUploadForm;
    }
}

export default PostUploadForm;

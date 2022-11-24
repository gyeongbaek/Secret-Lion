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
        // this.photoData = null;
        this.dropDown = new DropDown();
    }

    handlePrevImg(e) {
        const reader = new FileReader();
        reader.onload = ({ target }) => {
            this.setState({ prevPhoto: target.result });
        };
        reader.readAsDataURL(e.target.files[0]);
        this.setState({ photoData: e.target.files[0] });
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

        const btnContainertest = new PostUploadBtn(this.state.photoData);

        const [btnContainertestRender, fileinp] = btnContainertest.intialize();

        postUploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.photoData) {
                btnContainertest.photoUpload();
                this.setState({ prevPhoto: null });
                this.setState({ photoData: null });
            } else {
                btnContainertest.postUpload();
            }
        });

        fileinp.addEventListener('change', (event) => {
            event.preventDefault();
            this.handlePrevImg(event);
        });

        // 파일 미리보기
        postUploadForm.appendChild(this.dropDown.render());
        postUploadForm.appendChild(inputTit);
        postUploadForm.appendChild(postContent);

        postUploadForm.appendChild(btnContainertestRender);

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
        }

        return postUploadForm;
    }
}

export default PostUploadForm;

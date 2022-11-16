import { DropDown, Header } from '../common/index.js';

class PostUpload {
    render() {
        const header = new Header();

        const postUploadMain = document.createElement('main');
        postUploadMain.setAttribute('class', 'main_post_container');

        const frag = document.createDocumentFragment();

        const dropDownContainer = new DropDown();

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
        uploadBtn.textContent = '게시물 등록';

        const fileBtn = document.createElement('button');
        fileBtn.setAttribute('class', 'post_btn');
        fileBtn.textContent = '첨부파일 선택';

        const fileinp = document.createElement('input');
        fileinp.setAttribute('class', 'ir');
        fileinp.setAttribute('type', 'file');

        // 버튼으로 파일 선택 가능
        fileBtn.addEventListener('click', () => fileinp.click());
        fileinp.addEventListener('change', (e) => console.log(e.target.files));

        const previewImgCon = document.createElement('div');
        previewImgCon.setAttribute('class', 'post_img_con');

        const previewImg = document.createElement('img');
        previewImg.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2022/01/18/07/36/cat-6946498_1280.jpg'
        );
        previewImg.setAttribute('class', 'post_img_preview');

        const imgCancelBtn = document.createElement('button');
        imgCancelBtn.setAttribute('class', 'post_btn_img_cancel');
        imgCancelBtn.textContent = 'x';

        previewImgCon.appendChild(previewImg);
        previewImgCon.appendChild(imgCancelBtn);

        btnContainer.appendChild(fileBtn);
        btnContainer.appendChild(uploadBtn);

        const postUploadForm = document.createElement('form');
        postUploadForm.setAttribute('class', 'post_form_upload');

        postUploadForm.appendChild(dropDownContainer.render());
        postUploadForm.appendChild(inputTit);
        postUploadForm.appendChild(postContent);
        postUploadForm.appendChild(btnContainer);
        postUploadForm.appendChild(previewImgCon);

        postUploadMain.appendChild(postUploadForm);
        frag.appendChild(header.render());
        frag.appendChild(postUploadMain);
        return frag;
    }
}

export default PostUpload;

import Component from '../../core/Component.js';

class PostUploadPreview extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        const previewImgCon = document.createElement('div');
        previewImgCon.setAttribute('class', 'post_img_con');

        const previewImg = document.createElement('img');
        previewImg.setAttribute('src', this.props);
        previewImg.setAttribute('class', 'post_img_preview');

        const imgCancelBtn = document.createElement('button');
        imgCancelBtn.setAttribute('class', 'post_btn_img_cancel');
        imgCancelBtn.textContent = 'x';

        previewImgCon.appendChild(previewImg);
        previewImgCon.appendChild(imgCancelBtn);

        return previewImgCon;
    }
}
export default PostUploadPreview;

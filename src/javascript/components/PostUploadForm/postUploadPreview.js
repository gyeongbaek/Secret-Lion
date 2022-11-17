import Component from "../../core/Component.js";

class PostUploadPreview extends Component {
    render() {
        const previewImgCon = document.createElement("div");
        previewImgCon.setAttribute("class", "post_img_con");

        const previewImg = document.createElement("img");
        previewImg.setAttribute(
            "src",
            "https://cdn.pixabay.com/photo/2022/01/18/07/36/cat-6946498_1280.jpg"
        );
        previewImg.setAttribute("class", "post_img_preview");

        const imgCancelBtn = document.createElement("button");
        imgCancelBtn.setAttribute("class", "post_btn_img_cancel");
        imgCancelBtn.textContent = "x";

        previewImgCon.appendChild(previewImg);
        previewImgCon.appendChild(imgCancelBtn);

        return previewImgCon;
    }
}
export default PostUploadPreview;

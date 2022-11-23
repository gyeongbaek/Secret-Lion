import Component from '../../core/Component.js';
import { auth } from '../../firebase.js';

class PostUploadBtn extends Component {
    constructor(props) {
        super(props);
    }
    async postUpload() {
        const inputTit = document.querySelector('.post_inp_tit');
        const contents = document.querySelector('.post_area_content');

        const data = {
            title: inputTit.value,
            contents: contents.value,
            category: this.props.dropClick(),
            writerId: auth.currentUser.uid,
            date: new Date(),
            img: this.photoData,
            active: false,
            like: [],
            scrap: [],
        };
        // const newPostRef = doc(collection(db, 'posts'));
        // await setDoc(newPostRef, data);
        console.log(data);
        console.log('완료');
    }

    handlePrevImg(e) {
        const reader = new FileReader();
        reader.onload = ({ target }) => {
            this.setState({ prevPhoto: target.result });
        };
        reader.readAsDataURL(e.target.files[0]);
        this.photoData = e.target.files[0];
        console.log(this.photoData);
    }

    render() {
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

        uploadBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            this.postUpload();
        });
        // 버튼으로 파일 선택 가능
        fileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fileinp.click();
        });

        fileinp.addEventListener('change', (e) => {
            e.preventDefault();
            this.handlePrevImg(e);
        });

        btnContainer.appendChild(fileBtn);
        btnContainer.appendChild(uploadBtn);

        return btnContainer;
    }
}

export default PostUploadBtn;

import Component from '../../core/Component.js';
import { db, deleteDoc, doc, getDoc } from '../../firebase.js';

class PostDetailTop extends Component {
    constructor(props) {
        super(props);
        this.date = null;
    }
    getDate(time) {
        const date = time.toDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}.${month}.${day}`;
    }

    async delPost() {
        const result = window.confirm('게시글을 삭제하시겠습니까?');
        if (result) {
            await deleteDoc(doc(db, 'posts', this.props.postData.postId));
        }
    }

    render() {
        if (this.props.postData.date !== undefined) {
            this.date = this.getDate(this.props.postData.date);
        }

        const topSection = document.createElement('section');
        topSection.setAttribute('class', 'post_section_top');

        const categorySpan = document.createElement('span');
        categorySpan.setAttribute('class', 'post_span_category');
        categorySpan.textContent = this.props.postData.category;
        topSection.appendChild(categorySpan);

        // 제목
        const postTit = document.createElement('h2');
        postTit.setAttribute('class', 'post_h2_tit');
        postTit.textContent = this.props.postData.title;
        topSection.appendChild(postTit);

        // 유저정보 및 게시날짜
        const postWriterInfoCon = document.createElement('div');
        postWriterInfoCon.setAttribute('class', 'post_div_info_con');

        // 유저 이미지
        const writerProfileImg = document.createElement('img');
        writerProfileImg.setAttribute('class', 'post_img_profile');
        writerProfileImg.setAttribute(
            'src',
            this.props.writer.photoURL ||
                'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg'
        );
        writerProfileImg.setAttribute('class', 'post_img_profile');

        // 유저 이름
        const writerName = document.createElement('strong');
        writerName.setAttribute('class', 'post_strong_writer_name');
        writerName.textContent = this.props.writer.displayName;

        // 게시 날짜
        const writeDate = document.createElement('time');
        writeDate.setAttribute('class', 'post_time_date');
        writeDate.textContent = this.date;
        // console.log(this.props.postData.date);

        // 유저 정보 및 날짜
        postWriterInfoCon.appendChild(writerProfileImg);
        postWriterInfoCon.appendChild(writerName);
        postWriterInfoCon.appendChild(writeDate);

        // vertical 버튼
        const trashlBtn = document.createElement('button');
        trashlBtn.setAttribute('class', 'post_btn_trash');

        trashlBtn.addEventListener('click', () => this.delPost());

        const trashBtnlIr = document.createElement('span');
        trashBtnlIr.setAttribute('class', 'ir');
        trashBtnlIr.textContent = '삭제하기';

        topSection.appendChild(postWriterInfoCon);
        topSection.appendChild(postWriterInfoCon);
        topSection.appendChild(trashlBtn);

        trashlBtn.appendChild(trashBtnlIr);
        // // topsection 안

        return topSection;
    }
}

export default PostDetailTop;

import Component from '../../core/Component.js';

class PostDetailTop extends Component {
    render() {
        // topSection
        const topSection = document.createElement('section');
        topSection.setAttribute('class', 'post_section_top');

        const categorySpan = document.createElement('span');
        categorySpan.setAttribute('class', 'post_span_category');
        categorySpan.textContent = '고민상담';
        topSection.appendChild(categorySpan);

        // 제목
        const postTit = document.createElement('h2');
        postTit.setAttribute('class', 'post_h2_tit');
        postTit.textContent = '안녕하세요 고민있습니다ㅠ';
        topSection.appendChild(postTit);

        // 유저정보 및 게시날짜
        const postWriterInfoCon = document.createElement('div');
        postWriterInfoCon.setAttribute('class', 'post_div_info_con');

        // 유저 이미지
        const writerProfileImg = document.createElement('img');
        writerProfileImg.setAttribute('class', 'post_img_profile');
        writerProfileImg.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg'
        );
        writerProfileImg.setAttribute('class', 'post_img_profile');

        // 유저 이름
        const writerName = document.createElement('strong');
        writerName.setAttribute('class', 'post_strong_writer_name');
        writerName.textContent = '목짧은기린';

        // 게시 날짜
        const writeDate = document.createElement('time');
        writeDate.setAttribute('class', 'post_time_date');
        writeDate.textContent = '2022.11.09';

        // 유저 정보 및 날짜
        postWriterInfoCon.appendChild(writerProfileImg);
        postWriterInfoCon.appendChild(writerName);
        postWriterInfoCon.appendChild(writeDate);

        // vertical 버튼
        const trashlBtn = document.createElement('button');
        trashlBtn.setAttribute('class', 'post_btn_trash');

        const trashBtnlIr = document.createElement('span');
        trashBtnlIr.setAttribute('class', 'ir');
        trashBtnlIr.textContent = '삭제하기';

        trashlBtn.appendChild(trashBtnlIr);

        return topSection;
    }
}

export default PostDetailTop;

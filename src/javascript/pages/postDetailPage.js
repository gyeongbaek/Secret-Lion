import { Header, MainContainer } from '../common/index.js';
import {
    PostDetailChat,
    PostDetailChatForm,
    PostDetailTop,
} from '../components/PostDetail/index.js';

class PostDetailPage {
    constructor() {}

    render() {
        const fragCon = document.createDocumentFragment();

        const header = new Header();

        const main = new MainContainer();
        const mainEl = main.render();

        const postDetailh1 = document.createElement('h1');
        postDetailh1.setAttribute('class', 'ir');
        postDetailh1.textContent = '게시판 상세 페이지';
        mainEl.appendChild(postDetailh1);

        // 카테고리 span

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

        // const topSection = new PostDetailTop();

        // section mid
        const midSection = document.createElement('section');
        midSection.setAttribute('class', 'post_section_mid');

        const postContenth2 = document.createElement('h2');
        postContenth2.setAttribute('class', 'ir');
        postContenth2.textContent = '게시글 내용';

        // postImg
        const postContentImg = document.createElement('img');
        postContentImg.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2017/01/16/23/10/snow-leopard-1985510__480.jpg'
        );
        postContentImg.setAttribute('alt', '');
        postContentImg.setAttribute('class', 'post_img_content');

        // postContentTxt
        const postContentTxt = document.createElement('p');
        postContentTxt.setAttribute('class', 'post_p_content_txt');
        postContentTxt.textContent = `길가다가 고양이가 너무 귀엽게 쳐다보네요 귀여워 죽겠습니다`;

        // bottom btns
        const postLikeFavorite = document.createElement('div');
        postLikeFavorite.setAttribute('class', 'post_div_likeFavorite_con');

        // like button
        const postLikeBtn = document.createElement('button');
        postLikeBtn.setAttribute('class', 'post_btn_like');

        const postLikeImg = document.createElement('img');
        postLikeImg.setAttribute('class', 'post_img_like');
        postLikeImg.setAttribute('src', 'src/assets/heart.svg');
        postLikeImg.setAttribute('alt', '좋아요');

        const postLikeCount = document.createElement('span');
        postLikeCount.setAttribute('class', 'post_btn_lie_count');
        postLikeCount.textContent = '24';

        postLikeBtn.appendChild(postLikeImg);
        postLikeBtn.appendChild(postLikeCount);

        const postFavBtn = document.createElement('button');
        postFavBtn.setAttribute('class', 'post_btn_fav');

        const postFavImg = document.createElement('img');
        postFavImg.setAttribute('class', 'post_img_fav');
        postFavImg.setAttribute('src', 'src/assets/scrap.svg');
        postFavImg.setAttribute('alt', '즐겨찾기');

        postFavBtn.appendChild(postFavImg);

        postLikeFavorite.appendChild(postLikeBtn);
        postLikeFavorite.appendChild(postFavBtn);

        // midSection
        midSection.appendChild(postContenth2);
        midSection.appendChild(postContentTxt);
        midSection.appendChild(postLikeFavorite);

        // 댓글
        const commentCon = document.createElement('section');
        commentCon.setAttribute('class', 'post_section_bottom');

        const commentH2 = document.createElement('h2');
        commentH2.setAttribute('class', 'ir');
        commentH2.textContent = '댓글';

        const commentUl = document.createElement('ul');
        commentUl.setAttribute('class', 'post_ul_comment');

        const postDetailChat = new PostDetailChat();

        commentUl.appendChild(postDetailChat.render());
        commentCon.appendChild(commentH2);
        commentCon.appendChild(commentUl);

        // chat form apch
        const postDetailChatForm = new PostDetailChatForm();

        // topsection 안
        topSection.appendChild(postWriterInfoCon);
        topSection.appendChild(postWriterInfoCon);
        topSection.appendChild(trashlBtn);

        // 메인 안
        mainEl.appendChild(topSection);
        mainEl.appendChild(midSection);
        mainEl.appendChild(commentCon);
        mainEl.appendChild(postDetailChatForm.render());

        // 전체
        fragCon.appendChild(header.render());
        fragCon.appendChild(mainEl);

        return fragCon;
    }
}

export default PostDetailPage;

// // 채팅입력 Form
// const chattingForm = document.createElement("form");
// chattingForm.setAttribute("class", "post_form_chat");

// // chat textarea
// const chatTextArea = document.createElement("textarea");
// chatTextArea.setAttribute("class", "post_textarea_chat");
// chatTextArea.setAttribute("placeholder", "내용을 입력해주세요.");

// const chatUploadBtn = document.createElement("button");
// chatUploadBtn.setAttribute("class", "post_btn");
// chatUploadBtn.textContent = "댓글 등록";

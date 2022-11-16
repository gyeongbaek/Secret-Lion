import Header from '../common/header.js';

class PostDetail {
    constructor() {}

    render() {
        const fragCon = document.createDocumentFragment();

        const header = new Header();

        const postDetailMain = document.createElement('main');
        postDetailMain.setAttribute('class', 'main_post_container');

        const postDetailh1 = document.createElement('h1');
        postDetailh1.setAttribute('class', 'ir');
        postDetailh1.textContent = '게시판 상세 페이지';
        postDetailMain.appendChild(postDetailh1);

        // 카테고리 span
        const categorySpan = document.createElement('span');
        categorySpan.setAttribute('class', 'post_span_category');
        categorySpan.textContent = '고민상담';
        postDetailMain.appendChild(categorySpan);

        // topSection
        const topSection = document.createElement('section');
        topSection.setAttribute('class', 'post_section_top');

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
        // midSection.appendChild(postContentImg);
        midSection.appendChild(postContentTxt);
        midSection.appendChild(postLikeFavorite);

        // 채팅입력 Form
        const chattingForm = document.createElement('form');
        chattingForm.setAttribute('class', 'post_form_chat');

        // chat inputCon
        const chatInpCon = document.createElement('div');
        chatInpCon.setAttribute('class', 'post_div_chat_con');

        // chat textarea
        const chatTextArea = document.createElement('textarea');
        chatTextArea.setAttribute('class', 'post_textarea_chat');
        chatTextArea.setAttribute('placeholder', '내용을 입력해주세요.');

        // chat img con
        const chatPreviewCon = document.createElement('div');
        chatPreviewCon.setAttribute('class', 'post_div_prev_con');

        // chat img
        const chatPreviewImg = document.createElement('img');
        chatPreviewImg.setAttribute('class', 'post_img_chat');
        chatPreviewImg.setAttribute(
            'src',
            ' https://cdn.pixabay.com/photo/2019/05/21/07/11/cat-4218424__480.jpg'
        );
        chatPreviewImg.setAttribute('alt', '');

        // cancel btn
        const prevCancelBtn = document.createElement('button');
        prevCancelBtn.setAttribute('class', 'post_btn_prev_cancel');
        prevCancelBtn.textContent = 'x';

        // 프리뷰 사진 콘
        chatPreviewCon.appendChild(chatPreviewImg);
        chatPreviewCon.appendChild(prevCancelBtn);

        // upload btn
        const chatBtnCon = document.createElement('div');
        chatBtnCon.setAttribute('class', 'post_div_btns_con');

        const chatUploadBtn = document.createElement('button');
        chatUploadBtn.setAttribute('class', 'post_btn');
        chatUploadBtn.textContent = '댓글 등록';

        const chatImgBtn = document.createElement('button');
        chatImgBtn.setAttribute('class', 'post_btn');
        chatImgBtn.textContent = '파일 등록';

        chatBtnCon.appendChild(chatImgBtn);
        chatBtnCon.appendChild(chatUploadBtn);

        // 댓글
        const commentCon = document.createElement('section');
        commentCon.setAttribute('class', 'post_section_bottom');

        const commentH2 = document.createElement('h2');
        commentH2.setAttribute('class', 'ir');
        commentH2.textContent = '댓글';

        const commentUl = document.createElement('ul');
        commentUl.setAttribute('class', 'post_ul_comment');

        const commentLi = document.createElement('li');
        commentLi.setAttribute('class', 'post_li_comment');

        // 유저 정보 및 댓글 내용
        const commentLiLeft = document.createElement('div');
        commentLiLeft.setAttribute('class', 'post_div_comment_left');

        const commentUserInfo = document.createElement('div');
        commentUserInfo.setAttribute('class', 'post_div_comment_user_info');

        const commentUserImg = document.createElement('img');
        commentUserImg.setAttribute('class', 'post_img_comment_user');
        commentUserImg.setAttribute(
            'src',
            'https://cdn.pixabay.com/photo/2019/05/21/07/11/cat-4218424__480.jpg'
        );
        commentUserImg.setAttribute('alt', '');

        // 유저 이름 및 날짜
        const commentUserNameDate = document.createElement('div');
        commentUserNameDate.setAttribute('class', 'post_div_comment_name_date');

        const commentUserName = document.createElement('strong');
        commentUserName.setAttribute('class', 'post_strong_name');
        commentUserName.textContent = '목짧은기린';

        const commentDate = document.createElement('time');
        commentDate.setAttribute('class', 'post_time_comment');
        commentDate.textContent = '2022.11.10';

        commentUserNameDate.appendChild(commentUserName);
        commentUserNameDate.appendChild(commentDate);

        // 유저 정보 및 날짜
        commentUserInfo.appendChild(commentUserImg);
        commentUserInfo.appendChild(commentUserNameDate);

        const commentP = document.createElement('p');
        commentP.textContent = '고양이는 사람을 찢어요 님아';

        commentLiLeft.appendChild(commentUserInfo);
        commentLiLeft.appendChild(commentP);

        // 이미지가 존재하면 넣어준다.
        const commentImg = document.createElement('img');
        commentImg.setAttribute('class', 'post_img_comment');
        commentImg.setAttribute(
            'src',
            ' https://cdn.pixabay.com/photo/2019/05/21/07/11/cat-4218424__480.jpg'
        );
        commentImg.setAttribute('alt', '');

        commentLi.appendChild(commentLiLeft);
        commentLi.appendChild(commentImg);

        commentUl.appendChild(commentLi);
        commentCon.appendChild(commentH2);
        commentCon.appendChild(commentUl);

        // chat form apch
        chattingForm.appendChild(chatInpCon);
        chatInpCon.appendChild(chatTextArea);
        // chatInpCon.appendChild(chatPreviewCon); 프리뷰 사진 제거
        chatInpCon.appendChild(chatBtnCon);

        // topsection 안
        topSection.appendChild(postWriterInfoCon);
        topSection.appendChild(postWriterInfoCon);
        topSection.appendChild(trashlBtn);

        // 메인 안
        postDetailMain.appendChild(topSection);
        postDetailMain.appendChild(midSection);
        postDetailMain.appendChild(commentCon);
        postDetailMain.appendChild(chattingForm);

        // 전체
        fragCon.appendChild(header.render());
        fragCon.appendChild(postDetailMain);

        return fragCon;
    }
}

export default PostDetail;

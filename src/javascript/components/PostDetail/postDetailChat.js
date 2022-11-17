import Component from "../../core/Component.js";

class PostDetailChat extends Component {
    render() {
        const commentLi = document.createElement("li");
        commentLi.setAttribute("class", "post_li_comment");

        // 유저 정보 및 댓글 내용
        const commentLiLeft = document.createElement("div");
        commentLiLeft.setAttribute("class", "post_div_comment_left");

        const commentUserInfo = document.createElement("div");
        commentUserInfo.setAttribute("class", "post_div_comment_user_info");

        const commentUserImg = document.createElement("img");
        commentUserImg.setAttribute("class", "post_img_comment_user");
        commentUserImg.setAttribute(
            "src",
            "https://cdn.pixabay.com/photo/2019/05/21/07/11/cat-4218424__480.jpg"
        );
        commentUserImg.setAttribute("alt", "");

        // 유저 이름 및 날짜
        const commentUserNameDate = document.createElement("div");
        commentUserNameDate.setAttribute("class", "post_div_comment_name_date");

        const commentUserName = document.createElement("strong");
        commentUserName.setAttribute("class", "post_strong_name");
        commentUserName.textContent = "목짧은기린";

        const commentDate = document.createElement("time");
        commentDate.setAttribute("class", "post_time_comment");
        commentDate.textContent = "2022.11.10";

        commentUserNameDate.appendChild(commentUserName);
        commentUserNameDate.appendChild(commentDate);

        // 유저 정보 및 날짜
        commentUserInfo.appendChild(commentUserImg);
        commentUserInfo.appendChild(commentUserNameDate);

        const commentP = document.createElement("p");
        commentP.textContent = "고양이는 사람을 찢어요 님아";
        commentLiLeft.appendChild(commentUserInfo);
        commentLiLeft.appendChild(commentP);

        commentLi.appendChild(commentLiLeft);

        return commentLi;
    }
}

export default PostDetailChat;

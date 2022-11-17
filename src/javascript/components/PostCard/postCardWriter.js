import Component from '../../core/Component.js';

class PostCardWriter extends Component {
    render() {
        // // 작성자
        const postCardWriter = document.createElement('div');
        postCardWriter.setAttribute('class', 'board_post_user');

        const profileImg = document.createElement('img');
        profileImg.setAttribute('src', '/src/assets/user.svg');
        profileImg.setAttribute('alt', '');

        const userName = document.createElement('p');
        userName.innerText = this.props.user;
        postCardWriter.append(profileImg);
        postCardWriter.append(userName);

        return postCardWriter;
    }
}

export default PostCardWriter;

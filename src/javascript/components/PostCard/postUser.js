import Component from '../../core/Component.js';

class PostUser extends Component {
    render() {
        // // 작성자
        const postUser = document.createElement('div');
        postUser.setAttribute('class', 'board_post_user');

        const profileImg = document.createElement('img');
        profileImg.setAttribute('src', '/src/assets/user.svg');
        profileImg.setAttribute('alt', '');

        const userName = document.createElement('p');
        userName.innerText = this.props.user;
        postUser.append(profileImg);
        postUser.append(userName);

        return postUser;
    }
}

export default PostUser;

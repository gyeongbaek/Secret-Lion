import Component from '../../core/Component.js';

class PostCardWriter extends Component {
    render() {
        // // 작성자
        const postCardWriter = document.createElement('div');
        postCardWriter.setAttribute('class', 'board_post_user');

        const profileImg = document.createElement('img');
        if (this.props.user.photoURL) {
            profileImg.setAttribute('src', this.props.user.photoURL);
        } else {
            profileImg.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg');
        }
        profileImg.setAttribute('alt', '');

        const userName = document.createElement('p');
        userName.innerText = this.props.user.displayName;
        postCardWriter.append(profileImg);
        postCardWriter.append(userName);

        return postCardWriter;
    }
}

export default PostCardWriter;

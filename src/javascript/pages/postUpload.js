import DropDown from '../common/dropDown.js';

class PostUpload {
    render() {
        const container = document.createElement('div');
        const element = document.createElement('h1');
        element.innerText = 'PostUpload - 게시글 편집';
        // hi
        const anchor = document.createElement('a');
        anchor.href = '/';
        anchor.innerText = '테스트 페이지로 이동';

        const dropDown = new DropDown();

        container.appendChild(element);
        container.appendChild(anchor);
        container.appendChild(dropDown.render());

        return container;
    }
}

export default PostUpload;

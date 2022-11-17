import Component from '../../core/Component.js';

class PostCate extends Component {
    render() {
        const postCate = document.createElement('div');
        postCate.setAttribute('class', 'board_category');
        postCate.innerText = this.props.category;

        let bgColor = 'var(--bg-color)';
        switch (this.props.category) {
            case '학습':
                bgColor = 'var(--cate-study-color)';
                break;
            case '연애':
                bgColor = 'var(--cate-love-color)';
                break;
            case '관계':
                bgColor = 'var(--cate-rel-color)';
                break;
            case '일상':
                bgColor = 'var(--cate-life-color)';
                break;
            case '취업':
                bgColor = 'var(--cate-job-color)';
                break;
            case '자유':
                bgColor = 'var(--cate-talk-color)';
                break;
        }
        postCate.style.backgroundColor = bgColor;

        return postCate;
    }
}

export default PostCate;

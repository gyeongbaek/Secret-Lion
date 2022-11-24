import Component from '../../core/Component.js';

class postCardCategory extends Component {
    render() {
        const postCardCategory = document.createElement('div');
        postCardCategory.setAttribute('class', 'board_category');
        postCardCategory.innerText = this.props.category;

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
            case '취업':
                bgColor = 'var(--cate-job-color)';
                break;
            case '자유':
                bgColor = 'var(--cate-free-color)';
                break;
        }
        postCardCategory.style.backgroundColor = bgColor;

        return postCardCategory;
    }
}

export default postCardCategory;

class DropDown {
    constructor(props) {
        this.props = props;
    }
    dropClick() {
        const txt = document.querySelector('.span_drop_content');
        return txt.textContent;
    }
    render() {
        const dropDownWrapper = document.createElement('div');

        const dropLabel = document.createElement('div');
        dropLabel.setAttribute('class', 'ir');
        dropLabel.textContent = '카테고리';

        const dropDownContentsWrapper = document.createElement('div');
        dropDownContentsWrapper.setAttribute('class', 'div_dropDown_wrapper');

        const dropbtn = document.createElement('button');
        dropbtn.setAttribute('class', 'btn_drop');

        const dropContent = document.createElement('span');
        dropContent.setAttribute('class', 'span_drop_content');
        dropContent.textContent = '카테고리';

        const dropListsWrapper = document.createElement('ul');
        dropListsWrapper.setAttribute('class', 'ul_drop');

        // 드롭다운 콘텐츠들을 toggle
        const dropdown = () => {
            dropListsWrapper.classList.toggle('show');
        };

        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown();
        });

        // 드롭다운 콘텐츠이름을 선택한 콘텐츠 내용으로 바꾼다.
        const showMenu = (value) => {
            dropContent.innerText = value;
            dropContent.style.color = '#252525';
            dropdown();
            return value;
        };

        let testList = ['자유', '학습', '취업', '연애', '관계'];
        if (this.props.page === 1) {
            // 메인 페이지일 때, 전체 옵션을 추가
            testList.unshift('전체');
        }
        const testFrag = document.createDocumentFragment();

        // 카테고리 데이터 돌면서 ul에 추가
        testList.forEach((item) => {
            const dropItem = document.createElement('li');
            dropItem.setAttribute('class', 'li_drop');
            dropItem.setAttribute('data-name', item);
            dropItem.textContent = item;

            dropItem.addEventListener('click', (e) => {
                showMenu(e.target.dataset.name);
            });
            testFrag.appendChild(dropItem);
        });
        dropListsWrapper.appendChild(testFrag);

        dropbtn.appendChild(dropContent);

        dropDownContentsWrapper.appendChild(dropbtn);
        dropDownContentsWrapper.appendChild(dropListsWrapper);

        dropDownWrapper.appendChild(dropLabel);
        dropDownWrapper.appendChild(dropDownContentsWrapper);

        return [dropDownWrapper, dropContent, dropListsWrapper];
    }
}

export default DropDown;

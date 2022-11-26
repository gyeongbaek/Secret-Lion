class TestDrop {
    constructor(props) {
        this.props = props;
    }
    render() {
        const dropMenu = document.createElement('select');
        const defMenu = document.createElement('option');
        defMenu.setAttribute('value', null);
        defMenu.innerText = '카테고리 선택';
        dropMenu.appendChild(defMenu);

        const categoryList = ['학습', '연애', '관계', '취업', '자유'];
        categoryList.forEach((el) => {
            const selectMenu = document.createElement('option');
            selectMenu.setAttribute('value', el);
            selectMenu.innerText = el;
            dropMenu.appendChild(selectMenu);
        });

        return dropMenu;
    }
}

export default TestDrop;

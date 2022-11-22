import Component from '../../core/Component.js';

class PostUploadBtn extends Component {
    constructor(props, a) {
        super(props);
        this.a = a;
    }
    render() {
        console.log('hi');
        const btnContainer = document.createElement('div');
        btnContainer.setAttribute('class', 'post_btn_con');

        const uploadBtn = document.createElement('button');
        uploadBtn.setAttribute('class', 'post_btn');
        uploadBtn.textContent = '게시물 등록';

        const fileBtn = document.createElement('button');
        fileBtn.setAttribute('class', 'post_btn');
        fileBtn.textContent = '첨부파일 선택';

        const fileinp = document.createElement('input');
        fileinp.setAttribute('class', 'ir');
        fileinp.setAttribute('type', 'file');

        // 버튼으로 파일 선택 가능
        fileBtn.addEventListener('click', () => fileinp.click());
        fileinp.addEventListener('change', (e) => console.log(e.target.files));

        uploadBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log(this.a);
        });

        // uploadBtn.addEventListener('click', async (e) => {
        //     e.preventDefault();
        //     const data = {
        //         title: inputTit.value,
        //         contents: postContent.value,
        //         category: dropDownContainer.dropClick(),
        //         writerId: auth.currentUser.uid,
        //         date: new Date(),
        //         img: null,
        //         active: false,
        //         like: [],
        //         scrap: [],
        //     };
        //     console.log(data);
        //     const newCityRef = doc(collection(db, 'posts'));

        //     // later...
        //     await setDoc(newCityRef, data);
        //     console.log('완료');
        // });

        btnContainer.appendChild(fileBtn);
        btnContainer.appendChild(uploadBtn);

        return btnContainer;
    }
}

export default PostUploadBtn;

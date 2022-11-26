import Component from '../core/Component.js';
// import { productData } from '../data.js';
import { Header, MainContainer } from '../common/index.js';
import { collection, db, getDocs, orderBy, query } from '../firebase.js';
import { MainPost } from '../components/mainPost/index.js';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.post = [];
    }
    async getPostData() {
        const posts = [];
        const postRef = collection(db, 'test-post');
        const q = query(
            postRef,
            // where('category','==','아침'),
            orderBy('date', 'desc')
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            posts.push(doc.data());
        });
        return posts;
    }

    checkHot(a, b) {
        return b.like.length + b.scrap.length - a.like.length - a.scrap.length;
    }

    render() {
        const docFrag = new DocumentFragment();

        const header = new Header();
        docFrag.appendChild(header.render());

        // 메인 페이지
        const main = new MainContainer();
        const mainEl = main.render();

        this.getPostData().then((posts) => {
            this.post = posts;
            const mainPost = new MainPost({ posts: this.post });
            mainEl.appendChild(mainPost.initialize());
        });

        // mainEl.appendChild(mainPost);
        docFrag.appendChild(mainEl);
        return docFrag; // test
        // return mainElement; // exec
    }
}

export default MainPage;

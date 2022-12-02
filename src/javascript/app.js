import {
    StartPage,
    LoginPage,
    MainPage,
    PostDetailPage,
    PostUploadpage,
    SignupPage,
    UserEdit,
    UserInfo,
    TestPage,
} from './pages/index.js';
import { Router } from './utils/index.js';

export default class App {
    constructor(props) {
        this.props = props;
        this.token = localStorage.getItem('token');
    }
    async setup() {
        const { el } = this.props;
        console.log(this.token);
        const router = new Router({
            '/': PostUploadpage,
            '/start': StartPage,
            '/login': LoginPage,
            '/signup': SignupPage,
            '/main': MainPage,
            '/post/:id': PostDetailPage,
            '/upload': PostUploadpage,
            '/user': UserInfo,
            '/setting': UserEdit,
        });
        router.init(el);
    }
}

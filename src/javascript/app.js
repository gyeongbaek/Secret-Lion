import {
    LoginPage,
    MainPage,
    PostDetailPage,
    PostUploadpage,
    SignupPage,
    TestPage,
    UserEdit,
    UserInfo,
} from './pages/index.js';
import { Router } from './utils/index.js';

export default class App {
    constructor(props) {
        this.props = props;
    }
    async setup() {
        const { el } = this.props;

        const router = new Router({
            '/': TestPage,
            '/login': LoginPage,
            '/signup': SignupPage,
            '/main': MainPage,
            '/post': PostDetailPage,
            '/upload': PostUploadpage,
            '/user': UserInfo,
            '/setting': UserEdit,
        });
        router.init(el);
    }
}

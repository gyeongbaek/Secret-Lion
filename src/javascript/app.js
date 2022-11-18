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
            '/Secret-Lion/': TestPage,
            '/Secret-Lion/login': LoginPage,
            '/Secret-Lion/signup': SignupPage,
            '/Secret-Lion/main': MainPage,
            '/Secret-Lion/post': PostDetailPage,
            '/Secret-Lion/upload': PostUploadpage,
            '/Secret-Lion/user': UserInfo,
            '/Secret-Lion/setting': UserEdit,
        });
        router.init(el);
    }
}

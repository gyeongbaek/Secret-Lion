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
    // Error404Page
} from './pages/index.js';
import { Router } from './utils/index.js';

export default class App {
    constructor(props) {
        this.props = props;
        this.token = localStorage.getItem('token');
    }

    loginCheck() {
        if (this.token === null) {
            return {
                '/Secrit-Lion/': StartPage,
                '/Secrit-Lion/login': LoginPage,
                '/Secrit-Lion/signup': SignupPage,
            };
        } else {
            return {
                '/Secrit-Lion/': MainPage,
                '/Secrit-Lion/post/:id': PostDetailPage,
                '/Secrit-Lion/upload': PostUploadpage,
                '/Secrit-Lion/user': UserInfo,
                '/Secrit-Lion/setting': UserEdit,
            };
        }
    }
    async setup() {
        const { el } = this.props;
        const router = new Router(this.loginCheck());
        router.init(el);
    }
}

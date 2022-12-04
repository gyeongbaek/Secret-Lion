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

    loginCheck(){
        if(this.token === null){
            return {
                '/': StartPage,
                '/login': LoginPage,
                '/signup': SignupPage,
            }
        }else{
            return{
                '/': MainPage,
                '/post/:id': PostDetailPage,
                '/upload': PostUploadpage,
                '/user': UserInfo,
                '/setting': UserEdit,
            }
        }
    }
    async setup() {
        const { el } = this.props;
        const router = new Router(this.loginCheck());
        
        router.init(el);
    }
}

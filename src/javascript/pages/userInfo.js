// import Header from '../common/header.js';
import { Header, MainContainer } from '../common/index.js';
import { UserInfoMain } from '../components/UserInfoMain/index.js';
import Component from '../core/Component.js';

class UserInfo extends Component {
    render() {
        const fragCon = document.createDocumentFragment();

        const header = new Header();

        const userInfoMain = new UserInfoMain();

        // 전체
        fragCon.appendChild(header.render());
        fragCon.appendChild(userInfoMain.render());

        return fragCon;
    }
}

export default UserInfo;

import Component from '../core/Component.js';

class MainContainer extends Component {
    render() {
        const main = document.createElement('main');
        main.setAttribute('class', 'main_container');

        return main;
    }
}
export default MainContainer;

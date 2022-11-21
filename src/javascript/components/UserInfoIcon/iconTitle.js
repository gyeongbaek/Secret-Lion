import Component from '../../core/Component.js';

class IconTitle extends Component {
    constructor(props, title, className) {
        super(props);
        this.title = title;
        this.className = className;
    }

    render() {
        const titleSpn = document.createElement('span');
        titleSpn.setAttribute('class', this.className);
        titleSpn.textContent = this.title;

        return titleSpn;
    }
}

export default IconTitle;

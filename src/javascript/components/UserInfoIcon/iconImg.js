import Component from '../../core/Component.js';

class IconImg extends Component {
    constructor(props, src, alt, className) {
        super(props);
        this.src = src;
        this.alt = alt;
        this.className = className;
    }

    render() {
        const iconImg = document.createElement('img');
        iconImg.setAttribute('src', this.src);
        iconImg.setAttribute('alt', this.alt);
        iconImg.setAttribute('class', this.className);

        return iconImg;
    }
}

export default IconImg;

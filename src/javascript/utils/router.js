class Router {
    constructor(routes) {
        if (!routes) {
            console.error("Can not initialize routes, need routes!");
        }
        this.routes = routes;
    }
    init(rootElementId) {
        if (!rootElementId) {
            console.error("Can not initialize Routes, not define rootElementId!");
            return null;
        }
        this.rootElementId = rootElementId;

        // 라우팅 되는 부분
        //routing 메소드는 주소를 파싱하고 주소에 해당하는 컴포넌트를 가져와서 렌더링을 진행한다.
        this.routing(window.location.pathname);

        window.addEventListener("click", (e) => {
            if (e.target.tagName.toLowerCase() === "a") {
                e.preventDefault();
                this.routePush(e.target.href); //url 변경
            }
        });

        window.onpopstate = () => this.routing(window.location.pathname); // 뒤로가기
    }

    routePush(pathname) {
        window.history.pushState({}, null, pathname);
        this.routing(window.location.pathname);
    }

    routing(pathname) {
        const [_, routeName, ...param] = pathname.split("/");

        let page = "";
        if (this.routes[pathname]) {
            const component = new this.routes[pathname]();
            page = component.render();
        }

        if (page) {
            this.render(page); //라우터 메소드
        }
    }

    render(page) {
        const rootElement = document.querySelector(this.rootElementId);
        rootElement.innerHTML = "";
        rootElement.appendChild(page);
    }
}

export default Router;

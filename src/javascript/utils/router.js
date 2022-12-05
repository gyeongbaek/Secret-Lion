class Router {
    constructor(routes) {
        if (!routes) {
            console.error('Can not initiailize routes, need routes!');
        }
        this.routes = routes;
        // detail 페이지 이동
        for (const key in routes) {
            const route = routes[key];
            if (key.indexOf(':') > -1) {
                const [_, routeName, ...param] = key.split('/');
                this.routes['/' + routeName] = route;
                delete this.routes[key]; // id값만 따로 넘겨줄거기 때문에 삭제한다.
            }
        }
    }

    init(rootElementId) {
        if (!rootElementId) {
            console.error(
                'Can not initiailize Route, not define rootElementId'
            );
            return null;
        }
        this.rootElementId = rootElementId;
        this.routing(window.location.pathname);

        window.addEventListener('click', (e) => {
            if (e.target.closest('a')) {
                // closest('태그') 가까운 해당 태그를 찾는다
                e.preventDefault();
                this.routePush(e.target.closest('a').href);
            }
        });

        window.onpopstate = () => this.routing(window.location.pathname); // 뒤로가기
    }
    routePush(pathname) {
        window.history.pushState({}, null, pathname);
        this.routing(window.location.pathname);
    }

    routing(pathname) {
        const [_, routeName, param] = pathname.split('/');
        let page = '';

        if (this.routes[pathname]) {
            const component = new this.routes[pathname]();
            page = component.render();
        } else if (param) {
            // detail/:id 페이지를 처리하기 위해
            const component = new this.routes['/' + routeName](param);
            page = component.render();
        }

        if (page) {
            this.render(page);
        }
    }
    render(page) {
        const rootElement = document.querySelector(this.rootElementId);
        rootElement.innerHTML = '';
        rootElement.appendChild(page);
    }
}

export default Router;

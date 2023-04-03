import data0 from "./componentes/header/data0.js";
import { Attributesh } from "./componentes/header/header.js";
import data1 from "./componentes/componente1/data1.js";
import { Attributesc1 } from "./componentes/componente1/componente1.js";
import data2 from "./componentes/componente2/data2.js";
import { Attributesc2 } from "./componentes/componente2/componente2.js";
import data3 from "./componentes/componente3/data3.js";
import { Attributesc3 } from "./componentes/componente3/componente3.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.header = [];
        this.comp1 = [];
        this.comp2 = [];
        this.comp3 = [];
        this.attachShadow({ mode: "open" });
        data0.forEach((e) => {
            const profileHeader = this.ownerDocument.createElement("my-Header");
            profileHeader.setAttribute(Attributesh.name, e.name);
            this.header.push(profileHeader);
        });
        data1.forEach((e) => {
            const profileComponente1 = this.ownerDocument.createElement("my-Comp1");
            profileComponente1.setAttribute(Attributesc1.name, e.name);
            this.comp1.push(profileComponente1);
        });
        data2.forEach((e) => {
            const profileComponente2 = this.ownerDocument.createElement("my-Comp2");
            profileComponente2.setAttribute(Attributesc2.name, e.name);
            this.comp2.push(profileComponente2);
        });
        data3.forEach((e) => {
            const profileComponente3 = this.ownerDocument.createElement("my-Comp3");
            profileComponente3.setAttribute(Attributesc3.name, e.name);
            this.comp3.push(profileComponente3);
        });
    }
    connectedCallback() {
        this.render();
    }
    ;
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.header.forEach((header) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(header);
            });
            this.comp1.forEach((comp1) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(comp1);
            });
            this.comp2.forEach((comp2) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(comp2);
            });
            this.comp3.forEach((comp3) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(comp3);
            });
        }
    }
}
customElements.define("app-container", AppContainer);

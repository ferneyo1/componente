export var Attributesc1;
(function (Attributesc1) {
    Attributesc1["name"] = "name";
    Attributesc1["uid"] = "uid";
})(Attributesc1 || (Attributesc1 = {}));
class miComp1 extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, // lo mismo que oldValue
    newValue) {
        switch (propName) {
            case Attributesc1.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `

                `;
        }
    }
}
customElements.define("my-Comp1", miComp1);
export default miComp1;

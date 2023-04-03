export var Attributesc3;
(function (Attributesc3) {
    Attributesc3["name"] = "name";
    Attributesc3["uid"] = "uid";
})(Attributesc3 || (Attributesc3 = {}));
class miComp3 extends HTMLElement {
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
            case Attributesc3.uid:
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
customElements.define("my-Comp3", miComp3);
export default miComp3;

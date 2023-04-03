export var Attributesc2;
(function (Attributesc2) {
    Attributesc2["name"] = "name";
    Attributesc2["uid"] = "uid";
})(Attributesc2 || (Attributesc2 = {}));
class miComp2 extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null
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
            case Attributesc2.uid:
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
customElements.define("my-Comp2", miComp2);
export default miComp2;

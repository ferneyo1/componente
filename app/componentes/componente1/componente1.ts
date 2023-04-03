export enum Attributesc1 {
    "name" = "name",
    "uid" = "uid"
}

class miComp1 extends HTMLElement {
    name?: string;
    uid?: number;

    
    static get observedAttributes() {
        const attrs: Record<Attributesc1, null> = { 
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
    
    attributeChangedCallback(
        propName: Attributesc1,
        _: string | undefined, // lo mismo que oldValue
        newValue: string | undefined
        ) {
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
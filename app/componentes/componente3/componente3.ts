export enum Attributesc3 {
    "name" = "name",
    "uid" = "uid"
}

class miComp3 extends HTMLElement {
    name?: string;
    uid?: number;

    
    static get observedAttributes() {
        const attrs: Record<Attributesc3, null> = { 
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
        propName: Attributesc3,
        _: string | undefined, // lo mismo que oldValue
        newValue: string | undefined
        ) {
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
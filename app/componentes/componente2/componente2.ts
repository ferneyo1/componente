export enum Attributesc2 {
    "name" = "name",
    "uid" = "uid"
}

class miComp2 extends HTMLElement {
    name?: string;
    uid?: number;
    
    static get observedAttributes() {
        const attrs: Record<Attributesc2, null> = { 
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
    
    attributeChangedCallback(
        propName: Attributesc2,
        _: string | undefined, // lo mismo que oldValue
        newValue: string | undefined
        ) {
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
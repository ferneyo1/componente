
import data0 from "./componentes/header/data0.js"
import miHeader,{ Attributesh }from "./componentes/header/header.js";
import data1 from "./componentes/componente1/data1.js";
import miComp1, { Attributesc1 } from "./componentes/componente1/componente1.js";
import data2 from "./componentes/componente2/data2.js";
import miComp2, { Attributesc2 } from "./componentes/componente2/componente2.js";
import data3 from "./componentes/componente3/data3.js"
import miComp3,{ Attributesc3 }from "./componentes/componente3/componente3.js";


class AppContainer extends HTMLElement {
    header: miHeader[] = [];
    comp1: miComp1[]=[];
    comp2:miComp2[]=[];
    comp3:miComp3[]=[];
    
    
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        data0.forEach((e) => {
            const profileHeader = this.ownerDocument.createElement(
                "my-Header") as miHeader;
                profileHeader.setAttribute(Attributesh.name, e.name);
                this.header.push(profileHeader);
            });
        data1.forEach((e) => {
            const profileComponente1 = this.ownerDocument.createElement(
                "my-Comp1") as miComp1;
                profileComponente1.setAttribute(Attributesc1.name, e.name);
                this.comp1.push(profileComponente1);
            });
        data2.forEach((e) => {
            const profileComponente2 = this.ownerDocument.createElement(
                "my-Comp2") as miComp2;
                profileComponente2.setAttribute(Attributesc2.name, e.name);
                this.comp2.push(profileComponente2);
            });
        data3.forEach((e) => {
            const profileComponente3 = this.ownerDocument.createElement(
                "my-Comp3") as miComp3;
                profileComponente3.setAttribute(Attributesc3.name, e.name);
                this.comp3.push(profileComponente3);
            });
           
        }

        
        connectedCallback() {
            this.render();
        };
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                this.header.forEach((header) => {
                    this.shadowRoot?.appendChild(header);
                });
                this.comp1.forEach((comp1) => {
                    this.shadowRoot?.appendChild(comp1);
                });
                this.comp2.forEach((comp2) => {
                    this.shadowRoot?.appendChild(comp2);
                });

                this.comp3.forEach((comp3) => {
                    this.shadowRoot?.appendChild(comp3);
                });



            }
        }
        
}
    
customElements.define("app-container", AppContainer);
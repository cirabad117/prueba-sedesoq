import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';


import '../bootstrap.js';
class DetalleVenta extends PolymerElement {
    static get template() {
        return html`
            <style include="bootstrap">
                :host{
                    display:block;
                }
            </style>
            
            <h6>Cliente elegido <span class="badge badge-primary">[[objetoVenta.cliente.razon]]</span></h6>

            <h5>ticket de compra</h5>
            <paper-listbox style="overflow-y:scroll;max-height:170px;">
                <template is="dom-repeat" items="[[objetoVenta.listaArticulos]]">
                    
                    <paper-icon-item >
                       <span slot="item-icon">[[item.cantidad]]</span> 
                        <paper-item-body>
                            [[item.producto]]
                        </paper-item-body>
                        subtotal: [[item.subtotal]]
                    </paper-icon-item>
                    
                </template>

            </paper-listbox>

            <h6>Total: {{objetoVenta.totalVenta}}</h6> 

        `;
    }

    static get properties() {
        return {
            objetoVenta:{type:Object, notify:true}
        }
    }

    constructor(obj) {
        super();

        if(obj){
            this.set("objetoVenta",obj);
        }
    }

    ready() {
        super.ready();
    }
}

customElements.define('detalle-venta', DetalleVenta);
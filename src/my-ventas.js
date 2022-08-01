import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/iron-pages/iron-pages.js';

import '@polymer/paper-item/paper-item.js';

import './ventas/carrito-venta.js';
import './ventas/dialogo-guardar.js';
import './ventas/historial-ventas.js';


import './bootstrap.js'
class MyVentas extends PolymerElement {
    static get template() {
        return html`
            <style include="bootstrap">
                :host{
                    display:block;
                }
            </style>

            <div class="container-fluid">
                <div class="card">
                    <div class="card-header d-flex">
                        <h4>Ventas</h4>

                        <div class="ml-auto ">
                            
                            
                            <paper-tabs selected="{{selected}}" attr-for-selected="name">
                                <paper-tab name="caja">caja</paper-tab>
                                <paper-tab name="historial">historial</paper-tab>
                               
                            </paper-tabs>
                            
                            
                        </div>
                    </div>
                    <div class="card-body">
                        
                            
                            <iron-pages selected="{{selected}}" attr-for-selected="name">
                                <div name="caja">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="d-flex flex-wrap">
                                                <template is="dom-repeat" items="[[listaProds]]">
                                                    <paper-item class="m-1 bg-primary text-white" style="width:150px;" on-click="agregaArticulo">
                                                        <paper-item-body two-line>
                                                            <div>[[item.nombre]]</div>
                                                            <div >[[item.precio]]</div>
                                                        </paper-item-body>
                                                    </paper-item>
                                                  
                                                </template>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <carrito-venta style="border-radius:10px; border: solid 1px var(--paper-blue-500);"
                                            id="carrito" on-guarda-venta="finalizaVenta"></carrito-venta>
                                        </div>
                                    </div>

                                </div>
                                <div name="historial">
                                    <historial-ventas></historial-ventas>
                                </div>
                            </iron-pages>
                            
                            
                        
                    </div>
                </div>
            </div>

        `;
    }

    static get properties() {
        return {
            selected:{type:String, notify:true,value:"caja"},
            listaClientes:{type:Array, notify:true,value:[]},
            listaProds:{type:Array, notify:true,value:[]},
        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    agregaArticulo(e){
        var art=e.model.item;
        
        this.shadowRoot.querySelector("#carrito").pushArticulo(art);

    }

    finalizaVenta(e){
        var venta=e.detail.lista;
        var total=e.detail.total;
        var productos=this.listaProds;
        var cl=PolymerUtils.cloneObject(this.listaClientes);
        if(!venta || venta.length<=0){
            return PolymerUtils.Toast.show("Error. la lista esta vacia");
        }

        var t=this;
       
        PolymerUtils.Dialog.createAndShow({
			type: "modal",
            title:"guardar venta",
            params:[cl,venta,total,productos],
			element:"dialogo-guardar",
            style:"width:300px;",
			positiveButton: {
                text: "Guardar",
                action: function(dialog, element) {
                    element.guardaVenta();
                    t.shadowRoot.querySelector("#carrito").listaVenta=[];
                    
                }
            },
            negativeButton: {
                text: "Cancelar",
                action: function(dialog, element) {
                    dialog.close();
                }
            }
		});
    }
}

customElements.define('my-ventas', MyVentas);
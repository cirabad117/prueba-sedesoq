import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { UtilsMixin } from "../mixins/utils-mixin.js";

import './detalle-venta.js';

import '../bootstrap.js';
class HistorialVentas extends UtilsMixin(PolymerElement) {
    static get template() {
        return html`
            <style include="bootstrap">
                :host{
                    display:block;
                }
            </style>

<div class="row">

<div class="col-md-12">
    <div class="card table-responsive" >
        <table class="table table-hover table-sm" >
            <thead class="thead-dark" style="position: sticky;top: 0">
                <tr>
                    <th>fecha</th>
                    <th>cliente</th>
                    <th>total</th>
                    <th>acciones</th>
                    
                </tr>
            </thead>
            <tbody>
                <template is="dom-repeat" id="repeat-clientes" items="[[listaVentas]]">
                    <tr>
                        <td>[[PolymerUtils_getDateString(item.fecha)]]</td>
                        <td>[[item.cliente.razon]]</td>
                        <td>[[item.totalVenta]]</td>
                        <td>
                            
                            <paper-icon-button icon="find-in-page" on-click="abreVenta"></paper-icon-button>
                            
                            
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</div>

        `;
    }

    static get properties() {
        return {
            listaVentas:{type:Array, notify:true, value:[]}
        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();

        if(this.lastVentas){
            this.lastVentas();
            this.set("lastVentas",null);
        }
    
        //Funcion principal para consulta a la base de datos
        this.set("lastVentas",DataHelper.queryCollection(this,{
            "collection":"ventas",
            "array":this.listaVentas,
            "arrayName":"listaVentas"
        }));
    
    }

    abreVenta(e){
        var venta=e.model.item
    
        PolymerUtils.Dialog.createAndShow({
			type: "modal",
            title:"detalle de venta",
            params:[venta],
			element:"detalle-venta",
            style:"width:300px;",
			
            negativeButton: {
                text: "cerrar",
                action: function(dialog, element) {
                    dialog.close();
                }
            }
		});
    }
}

customElements.define('historial-ventas', HistorialVentas);